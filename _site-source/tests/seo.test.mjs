import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const paths = ['/', '/research/clinical-ai-safety/', '/research/clinical-neurophysiology/', '/research/brain-computer-interfaces/', '/research/neurocritical-care/'];
const base = 'https://alon-gorenshtein.github.io';
for (const path of paths) {
  test(`indexable identity and navigation: ${path}`, async () => {
    const html = await readFile(new URL(`../github-pages${path}index.html`, import.meta.url), 'utf8');
    assert.match(html, new RegExp(`<link[^>]+rel="canonical"[^>]+href="${base}${path}"`));
    assert.doesNotMatch(html, /<meta[^>]+(?:noindex|nosnippet)/i);
    const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    assert.ok(schemas.length, 'valid JSON-LD is rendered without JavaScript');
    const serialized = JSON.stringify(schemas);
    assert.ok(serialized.includes(`${base}/#person`));
    assert.ok(!serialized.includes('localhost'));
    assert.match(html, /Alon Gorenshtein/);
    if (path !== '/') {
      assert.match(html, /Research question/);
      assert.match(html, /Methods and findings/);
      assert.match(html, /Authorship/);
      assert.match(html, /https:\/\/doi.org\//);
    }
  });
}
test('sitemap covers all published research pages and verification is preserved', async () => {
  const xml = await readFile(new URL('../github-pages/sitemap.xml', import.meta.url), 'utf8');
  for (const path of paths) assert.ok(xml.includes(`<loc>${base}${path}</loc>`));
  assert.equal(await readFile(new URL('../github-pages/googlebf6c876725af3dfd.html', import.meta.url), 'utf8'), 'google-site-verification: googlebf6c876725af3dfd.html');
});
