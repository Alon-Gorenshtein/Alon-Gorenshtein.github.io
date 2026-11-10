import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('English and Hebrew homepages connect the same identity and language versions', async () => {
  const en = await readFile(new URL('../github-pages/index.html', import.meta.url), 'utf8');
  const he = await readFile(new URL('../github-pages/he/index.html', import.meta.url), 'utf8');
  for (const html of [en, he]) {
    assert.match(html, /אלון גורנשטיין/);
    assert.match(html, /Alon Gorenshtein/);
    assert.match(html, /0009-0000-7542-8608/);
    assert.match(html, /hrefLang="he"/);
    assert.match(html, /hrefLang="en"/);
  }
  assert.match(en, /signal-portrait/);
  assert.doesNotMatch(en, /RESEARCH EXPLORER/);
  assert.match(en, /How to meaningfully evaluate AI in clinical medicine/);
  assert.match(en, /10\.1038\/s41591-026-04350-5/);
});
