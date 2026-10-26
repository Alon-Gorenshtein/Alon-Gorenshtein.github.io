import { mkdir, writeFile } from "node:fs/promises";
import publications from "../app/lib/publications.json" with { type: "json" };
const output = new URL("../github-pages/citations/", import.meta.url);
await mkdir(output, { recursive: true });
const escapeBib = s => String(s).replace(/\\/g, "\\textbackslash{} ").replace(/([&%_#])/g, "\\$1");
const bib = publications.map(p => {
  const fields = { title: `{${escapeBib(p.title)}}`, author: p.authors.map(a => `${escapeBib(a.family)}, ${escapeBib(a.given)}`).join(" and "), year: p.year, doi: p.doi, url: `https://doi.org/${p.doi}`, ...(p.status === "Preprint" ? { note: "medRxiv preprint; not certified by peer review" } : { journal: escapeBib(p.journal) }), ...(p.volume ? { volume: p.volume } : {}), ...(p.issue ? { number: p.issue } : {}), ...(p.pages ? { pages: p.pages.replace(/-/g,"--") } : p.articleNumber ? { eid: p.articleNumber } : {}) };
  return `@${p.status === "Preprint" ? "unpublished" : "article"}{${p.slug},\n${Object.entries(fields).map(([k,v]) => `  ${k} = {${v}}`).join(",\n")}\n}`;
}).join("\n\n") + "\n";
const ris = publications.map(p => [`TY  - ${p.status === "Preprint" ? "UNPB" : "JOUR"}`, `ID  - ${p.slug}`, `TI  - ${p.title}`, ...p.authors.map(a => `AU  - ${a.family}, ${a.given}`), `PY  - ${p.year}`, `DO  - ${p.doi}`, `UR  - https://doi.org/${p.doi}`, ...(p.status === "Preprint" ? ["N1  - medRxiv preprint; not certified by peer review"] : [`JO  - ${p.journal}`]), ...(p.volume ? [`VL  - ${p.volume}`] : []), ...(p.issue ? [`IS  - ${p.issue}`] : []), ...(p.pages ? [`SP  - ${p.pages.split("-")[0]}`, ...(p.pages.includes("-") ? [`EP  - ${p.pages.split("-")[1]}`] : [])] : p.articleNumber ? [`M1  - ${p.articleNumber}`] : []), "ER  -"].join("\n")).join("\n\n") + "\n";
await writeFile(new URL("selected-publications.bib",output),bib);
await writeFile(new URL("selected-publications.ris",output),ris);
