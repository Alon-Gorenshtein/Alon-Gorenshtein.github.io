"use client";
import { useState } from "react";
import records from "../lib/pubmed-publications.json";
import selected from "../lib/publications.json";

type RecordItem = { anchor?: string; title: string; journal: string; year: string; authors: string; href: string; category: string; status: string; id: string };
const categories = ["All", "Generative AI & safety", "Neurology & neurophysiology", "Neurotechnology & BCI", "Neurocritical care", "Clinical medicine & research"];
function classify(title: string): string {
  const t = title.toLowerCase();
  if (/brain.computer|p300|neural.language|speller/.test(t)) return categories[3];
  if (/command.following|brain injury|cardiac arrest|neurocritical/.test(t)) return categories[4];
  if (/neurolog|epilep|emg|nerve conduction|myasthenia|migraine|catatonia|brain tumor|long.covid|encephalitis|paraneoplastic|brachial plex/.test(t)) return categories[2];
  if (/artificial intelligence|\bai\b|\bllm|language model|generative|openevidence|chatgpt|diagnosticxchange|literas|agentic|agents|machine learning|safety.filter|foundation model|neuro.symbolic/.test(t)) return categories[1];
  return categories[5];
}
const items: RecordItem[] = records.map(p => ({ ...p, href: `https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`, id: p.pmid, anchor: selected.find(s => s.doi.toLowerCase() === p.doi.toLowerCase() && p.doi)?.slug, category: classify(p.title), status: /medrxiv|research square|biorxiv/i.test(p.journal) ? "Preprint" : "PubMed record" }));
const dois = new Set(records.map(p => p.doi.toLowerCase()).filter(Boolean));
for (const p of selected) {
  if (dois.has(p.doi.toLowerCase())) continue;
  items.push({ title:p.title, journal:p.journal, year:String(p.year), authors:p.authors.map(a=>`${a.family} ${a.given}`).join(", "), href:`https://doi.org/${p.doi}`, id:p.slug, anchor:p.slug, category:classify(p.title), status:p.status });
}
items.sort((a,b)=>Number(b.year)-Number(a.year));
export default function PublicationExplorer() {
 const [active,setActive] = useState("All");
 const [query,setQuery] = useState("");
 const filtered = items.filter(p => (active === "All" || p.category === active) && `${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(query.toLowerCase().trim()));
 return <div className="publication-explorer">
  <div className="publication-controls"><div className="filter-buttons" aria-label="Filter publications by topic">{categories.map((category,i)=><button type="button" key={category} className={`filter-chip topic-${i}${active===category?' active':''}`} aria-pressed={active===category} onClick={()=>setActive(category)}>{category} <span>{category==='All'?items.length:items.filter(p=>p.category===category).length}</span></button>)}</div><label className="publication-search">Search publications<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Title, journal, or author" /></label></div>
  <p className="publication-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? 'publication' : 'publications'}</p>
  <div className="publication-results">{filtered.map(p=><article className={`publication-result topic-${categories.indexOf(p.category)}`} id={p.anchor} key={p.id}><div className="publication-result-meta"><span className="topic-label">{p.category}</span><span>{p.year} · {p.status}</span></div><h2><a href={p.href}>{p.title} <span aria-hidden="true">↗</span></a></h2><p className="result-journal">{p.journal}</p><p className="result-authors">{p.authors}</p></article>)}</div>
  {filtered.length===0 && <p className="publication-empty">No publications match that search. Try another term or category.</p>}
 </div>;
}
