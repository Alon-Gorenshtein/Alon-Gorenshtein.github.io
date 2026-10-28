import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const base = 'https://alon-gorenshtein.github.io';
for (const slug of ['inspire', 'literas', 'litbench', 'neuro-copilot']) {
  test(`${slug} is rendered, linked, canonical, and discoverable`, async () => {
    const path = `/projects/${slug}/`;
    const [html, home, hub, sitemap] = await Promise.all([
      readFile(new URL(`../github-pages${path}index.html`, import.meta.url), 'utf8'),
      readFile(new URL('../github-pages/index.html', import.meta.url), 'utf8'),
      readFile(new URL('../github-pages/projects/index.html', import.meta.url), 'utf8'),
      readFile(new URL('../github-pages/sitemap.xml', import.meta.url), 'utf8'),
    ]);
    assert.ok(html.includes(`rel="canonical" href="${base}${path}"`));
    assert.ok(html.includes('Alon Gorenshtein'));
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && title.length <= 70, `Expected a descriptive title under 70 characters: ${title}`);
    assert.ok(html.includes('Research question'));
    assert.ok(html.includes('https://doi.org/'));
    assert.ok(home.includes(`href="${path}"`));
    assert.ok(hub.includes(`href="${path}"`));
    assert.ok(sitemap.includes(`<loc>${base}${path}</loc>`));
    const jsonld = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    assert.ok(jsonld.some(item => JSON.stringify(item).includes(`${base}/#person`)));
  });
}
