import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const base='https://alon-gorenshtein.github.io';
const paths=['','projects/','publications/','projects/inspire/','projects/literas/','projects/litbench/','projects/neuro-copilot/','research/clinical-ai-safety/','research/clinical-neurophysiology/','research/brain-computer-interfaces/','research/neurocritical-care/'];
for(const path of paths) test(`Hebrew ${path || 'home'} has language and reciprocal links`,async()=>{
 const [en,he,sitemap]=await Promise.all([readFile(new URL(`../github-pages/${path}index.html`,import.meta.url),'utf8'),readFile(new URL(`../github-pages/he/${path}index.html`,import.meta.url),'utf8'),readFile(new URL('../github-pages/sitemap.xml',import.meta.url),'utf8')]);
 assert.match(he,/<html lang="he" dir="rtl"/);
 assert.ok(he.includes('אלון גורנשטיין'));
 assert.ok(he.includes(`href="${base}/he/${path}"`));
 assert.ok(en.includes(`href="${base}/he/${path}"`));
 assert.ok(he.includes(`href="${base}/${path}"`));
 assert.ok(sitemap.includes(`<loc>${base}/he/${path}</loc>`));
 assert.match(he,/hreflang="he"/i);
 assert.match(en,/hreflang="he"/i);
});
