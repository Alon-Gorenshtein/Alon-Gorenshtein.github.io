import { cp, mkdir, rm, writeFile } from "node:fs/promises";
const outputDirectory = new URL("../github-pages/", import.meta.url);
const { default: worker } = await import(new URL(`../dist/server/index.js?pages=${Date.now()}`, import.meta.url).href);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), outputDirectory, { recursive: true });
await import("./export-citations.mjs");
const paths = ["/", "/research/clinical-ai-safety/", "/research/clinical-neurophysiology/", "/research/brain-computer-interfaces/", "/research/neurocritical-care/", "/publications/", "/projects/", "/projects/inspire/", "/projects/literas/", "/projects/litbench/", "/projects/neuro-copilot/", "/he/", "/he/projects/", "/he/publications/", "/he/projects/inspire/", "/he/projects/literas/", "/he/projects/litbench/", "/he/projects/neuro-copilot/", "/he/research/clinical-ai-safety/", "/he/research/clinical-neurophysiology/", "/he/research/brain-computer-interfaces/", "/he/research/neurocritical-care/"];
for (const path of paths) {
  const response = await worker.fetch(new Request(`https://alon-gorenshtein.github.io${path}`, { headers: { accept: "text/html", host: "alon-gorenshtein.github.io", "x-forwarded-proto": "https" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  if (!response.ok) throw new Error(`Could not render ${path}: ${response.status}`);
  const directory = new URL(`.${path}`, outputDirectory);
  await mkdir(directory, { recursive: true });
  let html = await response.text();
  if (path.startsWith("/he/")) html = html.replace(/<html lang="en"/, '<html lang="he" dir="rtl"');
  await writeFile(new URL("index.html", directory), html);
  console.log(`Rendered ${path}`);
}
