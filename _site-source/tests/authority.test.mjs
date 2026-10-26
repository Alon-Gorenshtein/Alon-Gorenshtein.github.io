import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('publication hub renders author identity, status and citation downloads', async () => {
  const html = await readFile(new URL('../github-pages/publications/index.html',import.meta.url),'utf8');
  assert.ok(html.includes('https://alon-gorenshtein.github.io/publications/'));
  assert.ok(html.includes('Alon Gorenshtein'));
  assert.ok(html.includes('Journal publication'));
  assert.ok(html.includes('Preprint'));
  assert.ok(html.includes('/citations/selected-publications.bib'));
  assert.ok(html.includes('/citations/selected-publications.ris'));
  assert.equal((html.match(/class="bibliography-entry"/g)||[]).length,11);
  const head = html.split('</head>')[0];
  assert.equal((head.match(/rel="canonical"/g)||[]).length,1);
  assert.ok(head.includes('href="https://alon-gorenshtein.github.io/publications/"'));
});
test('public code page connects verified code repositories and papers', async () => {
  const html = await readFile(new URL('../github-pages/projects/index.html',import.meta.url),'utf8');
  for(const repo of ['Alon-Gorenshtein/LITERAS','Alon-Gorenshtein/study_command_following','GoldenholzLab/LitBench']) assert.ok(html.includes('https://github.com/'+repo));
  assert.ok(html.includes('Preprint'));
  assert.ok(html.includes('10.1016/j.compbiomed.2025.110363'));
});
test('citation exports contain every verified record, correct author spelling and distinct preprint types', async () => {
  const data = JSON.parse(await readFile(new URL('../app/lib/publications.json',import.meta.url),'utf8'));
  const bib = await readFile(new URL('../github-pages/citations/selected-publications.bib',import.meta.url),'utf8');
  const ris = await readFile(new URL('../github-pages/citations/selected-publications.ris',import.meta.url),'utf8');
  assert.equal((bib.match(/^@/gm)||[]).length,data.length);
  assert.equal((ris.match(/^TY  - /gm)||[]).length,data.length);
  for(const p of data){ assert.ok(bib.includes(p.doi)); assert.ok(ris.includes(p.doi)); assert.ok(p.authors.some(a=>a.given==='Alon'&&a.family==='Gorenshtein')); }
  assert.ok(!bib.includes('Gorenstein'));
  assert.equal((bib.match(/^@unpublished/gm)||[]).length,2);
});
test('homepage and sitemap expose both hubs while preserving Google and Bing ownership files', async () => {
  const html=await readFile(new URL('../github-pages/index.html',import.meta.url),'utf8');
  const xml=await readFile(new URL('../github-pages/sitemap.xml',import.meta.url),'utf8');
  for(const p of ['/publications/','/projects/']){ assert.ok(html.includes(`href="${p}"`)); assert.ok(xml.includes(`<loc>https://alon-gorenshtein.github.io${p}</loc>`)); }
  for(const f of ['googlebf6c876725af3dfd.html','BingSiteAuth.xml']) assert.equal(await readFile(new URL('../github-pages/'+f,import.meta.url),'utf8'),await readFile(new URL('../public/'+f,import.meta.url),'utf8'));
});
