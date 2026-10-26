import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function createSubmission(xml, { host, key }) {
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow key');
  const origin = `https://${host}`;
  const urlList = [...new Set([...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m => m[1].trim().replaceAll('&amp;', '&')))];
  if (!urlList.length) throw new Error('Sitemap is empty');
  for (const value of urlList) {
    const url = new URL(value);
    if (url.origin !== origin || url.username || url.password || url.hash) throw new Error(`URL outside the verified host: ${value}`);
  }
  return { host, key, keyLocation: `${origin}/${key}.txt`, urlList };
}

async function main() {
  const config = JSON.parse(await readFile(new URL('../indexnow.json', import.meta.url), 'utf8'));
  const localXml = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const submission = createSubmission(localXml, config);
  if (process.argv.includes('--dry-run')) { console.log(JSON.stringify(submission, null, 2)); return; }
  const options = { signal: AbortSignal.timeout(30000) };
  const responses = await Promise.all([fetch(submission.keyLocation, options), fetch(`https://${config.host}/sitemap.xml`, options)]);
  if (responses.some(r => !r.ok)) throw new Error('Deployed key or sitemap is not accessible; no submission sent');
  const [liveKey, liveXml] = await Promise.all(responses.map(r => r.text()));
  if (liveKey.trim() !== config.key) throw new Error('Deployed ownership key does not match; no submission sent');
  const payload = createSubmission(liveXml, config);
  if (JSON.stringify(payload.urlList) !== JSON.stringify(submission.urlList)) throw new Error('Deployed sitemap differs from source; no submission sent');
  const response = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(30000) });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}: ${await response.text()}`);
  console.log(JSON.stringify({ submittedAt: new Date().toISOString(), endpoint: 'https://api.indexnow.org/indexnow', status: response.status, meaning: response.status === 200 ? 'URLs submitted successfully; indexing is not guaranteed' : 'URLs received; ownership key validation pending', urls: payload.urlList }, null, 2));
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
