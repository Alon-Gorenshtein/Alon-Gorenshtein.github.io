import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Alon Gorenshtein research site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Alon Gorenshtein, MD/);
  assert.match(html, /Physician-scientist.*AI engineer/i);
  assert.match(html, /AI misalignment/);
  assert.match(html, /Generative AI in BCI/);
  assert.match(html, /Neurocritical care/);
  assert.match(html, /The unsteady return of command-following/);
  assert.match(html, /s12028-026-02624-x/);
  assert.match(html, /hero-neuro-layer/);
  assert.match(html, /neurotech-brain-trimmed\.png/);
  assert.match(html, /theme-toggle/);
  assert.match(html, /BRIDGE GenAI Lab/);
  assert.match(html, /Selected publications/);
  assert.match(html, /40\+ PubMed-indexed publications/);
  assert.match(html, /Le vent se lève/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /hero-figure\.png|<img[^>]+src="\/hero-figure\.png"|role="img"/);
  assert.doesNotMatch(html, /NEURAL SIGNAL|CLINICAL CONTEXT|INTELLIGENT SYSTEMS|research-thread/);
  assert.doesNotMatch(html, /Asimov|triage|single-patient|second patient|shared resources|Task objectives|Assigned roles/i);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview|Download CV/);
});

test("finished site source contracts preserve the Apple refinement", async () => {
  const [page, layout, packageJson, styles, siteHeader, liveMotion] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/LiveMotion.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|_sites-preview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(page, /<SiteHeader\s*\/>/);
  assert.match(page, /<LiveMotion\s*\/>/);
  assert.match(siteHeader, /window\.scrollY\s*>\s*12/);
  assert.match(
    siteHeader,
    /window\.addEventListener\(\s*["']scroll["']\s*,\s*syncScrollState\s*,\s*\{\s*passive\s*:\s*true\s*\}\s*\)/,
  );
  assert.match(
    siteHeader,
    /className=\{`site-header\$\{scrolled\s*\?\s*["'] site-header-scrolled["']\s*:\s*["']["']\}`\}/,
  );
  assert.match(styles, /\.button:active/);
  assert.match(styles, /prefers-reduced-transparency: reduce/);
  assert.match(styles, /prefers-contrast: more/);
  assert.match(styles, /\.scroll-progress/);
  assert.match(styles, /\[data-motion-reveal\]/);
  assert.match(liveMotion, /IntersectionObserver/);
  assert.match(liveMotion, /typeof window\.matchMedia/);
  assert.match(liveMotion, /typeof window\.requestAnimationFrame/);
  assert.match(liveMotion, /requestAnimationFrame/);
  assert.match(liveMotion, /disconnect\(\)/);
  assert.match(liveMotion, /prefers-reduced-motion/);
  const stylesWithoutComments = styles.replace(/\/\*[\s\S]*?\*\//g, " ");
  assert.doesNotMatch(stylesWithoutComments, /@keyframes\s+(?:brainFloat|gridDrift)/i);
  assert.doesNotMatch(stylesWithoutComments, /animation(?:-name)?\s*:[^;{}]*(?:brainFloat|gridDrift)/i);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../public/Alon_Gorenshtein_CV_2026.docx", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/neurotech-brain-trimmed.png", import.meta.url));
  await assert.rejects(access(new URL("../public/hero-figure.png", import.meta.url)));
});
