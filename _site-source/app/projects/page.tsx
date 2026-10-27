import type { Metadata } from "next";
import projects from "../lib/projects.json";
import { projectDetails } from "../lib/project-details";
import { SITE_URL, PERSON_ID, jsonLd } from "../lib/identity";
const title = "Research projects and software | Alon Gorenshtein, MD";
const description = "Explore Alon Gorenshtein’s research projects: INSPIRE, LITERAS, LitBench, Neuro-Copilot and open research code.";
export const metadata: Metadata = { title, description, alternates: { canonical: `${SITE_URL}/projects/` }, openGraph: { title, description, url: `${SITE_URL}/projects/`, type: "website", images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og.png`] } };
export default function Projects() {
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${SITE_URL}/projects/#page`, url: `${SITE_URL}/projects/`, name: title, about: { "@id": PERSON_ID }, mainEntity: { "@type": "ItemList", itemListElement: projects.map((p,i) => ({ "@type": "ListItem", position: i+1, item: { "@id": `${SITE_URL}/projects/#${p.slug}` } })) } },
    ...projects.map(p => ({ "@type": "SoftwareSourceCode", "@id": `${SITE_URL}/projects/#${p.slug}`, name: p.name, description: p.description, codeRepository: p.repo, url: p.repo, citation: { "@type": "ScholarlyArticle", "@id": `https://doi.org/${p.doi}`, url: `https://doi.org/${p.doi}` } }))
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    <header className="research-page-header"><a href="/">Alon Gorenshtein, MD</a><a href="/publications/">Publications ↗</a></header>
    <main className="research-page"><nav className="research-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / Research software</nav>
      <p className="eyebrow">RESEARCH SOFTWARE · ALON GORENSHTEIN, MD</p><h1>From papers<br/>to public code.</h1>
      <p className="research-page-intro">Research projects in clinical AI, evidence synthesis, and neurology, developed by Alon Gorenshtein and collaborators.</p>
      <h2>Featured projects</h2>
      <div className="research-guide-grid">{projectDetails.map(p => <a className="research-guide" href={`/projects/${p.slug}/`} key={p.slug}><h3>{p.shortName}</h3><p>{p.summary}</p><span className="text-link">Project details →</span></a>)}</div>
      <h2>Research software and public code</h2>
      <p>Each project links its public code to the corresponding article or preprint. Repository documentation provides the requirements for reuse, including licenses, dependencies, and any separately controlled data access.</p>
      {projects.map(p => <article className="bibliography-entry" id={p.slug} key={p.slug}><span className={`publication-status${p.status === "Preprint" ? " publication-status-preprint" : ""}`}>{p.status}</span><h2>{p.name}</h2><p>{p.description}</p><p>{p.context}</p><p className="bibliography-actions"><a href={p.repo}>View public code ↗</a><a href={`https://doi.org/${p.doi}`}>Read the {p.status === "Preprint" ? "preprint" : "paper"} ↗</a><a href={`/publications/#${p.slug}`}>Citation →</a></p></article>)}
      <aside className="research-related"><h2>Explore the research</h2><a href="/research/clinical-ai-safety/">Clinical AI safety and evaluation →</a><a href="/research/neurocritical-care/">Neurocritical care and consciousness →</a><a href="/research/brain-computer-interfaces/">Brain–computer interfaces →</a></aside>
    </main><footer className="research-page-footer"><a href="/">Alon Gorenshtein, MD</a><a href="/#contact">Contact and collaboration</a></footer></>;
}
