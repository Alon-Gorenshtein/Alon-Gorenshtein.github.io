import type { Metadata } from "next";
import { SITE_URL, PERSON_ID, jsonLd } from "../lib/identity";
import { publications, articleSchema } from "../lib/publications";

const title = "Publications | Alon Gorenshtein, MD";
const description = "Selected publications and preprints by Alon Gorenshtein, MD, on clinical AI, neurology, neurophysiology, brain–computer interfaces, and evidence synthesis.";
export const metadata: Metadata = { title, description, alternates: { canonical: `${SITE_URL}/publications/`, languages: { en: `${SITE_URL}/publications/`, he: `${SITE_URL}/he/publications/` } }, openGraph: { title, description, url: `${SITE_URL}/publications/`, type: "website", images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og.png`] } };
export default function Publications() {
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${SITE_URL}/publications/#page`, url: `${SITE_URL}/publications/`, name: title, about: { "@id": PERSON_ID }, mainEntity: { "@type": "ItemList", itemListElement: publications.map((p,i) => ({ "@type": "ListItem", position: i+1, item: { "@id": `https://doi.org/${p.doi}` } })) } }, ...publications.map(articleSchema)
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    <header className="research-page-header"><a href="/">Alon Gorenshtein, MD</a><a lang="he" dir="rtl" href="/he/publications/">עברית</a><a href="/projects/">Research software ↗</a></header>
    <main className="research-page"><nav className="research-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / Publications</nav>
      <p className="eyebrow">ALON GORENSHTEIN, MD · SELECTED BIBLIOGRAPHY</p><h1>Publications</h1>
      <p className="research-page-intro">Research on clinical AI evaluation, neurology, neurophysiology, brain–computer interfaces, and evidence synthesis.</p>
      <p>This is a selected reading list. Journal publications and preprints are labeled separately; preprints have not been certified by peer review. For the wider publication record, visit <a href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ">Google Scholar</a> or <a href="https://www.ncbi.nlm.nih.gov/myncbi/alon.gorenshtein.1/bibliography/public/">NCBI My Bibliography</a>.</p>
      <p className="citation-downloads">Download this selection: <a href="/citations/selected-publications.bib" download>BibTeX</a> · <a href="/citations/selected-publications.ris" download>RIS for Zotero and reference managers</a></p>
      {publications.map(p => <article className="bibliography-entry" id={p.slug} key={p.doi}>
        <span className={`publication-status${p.status === "Preprint" ? " publication-status-preprint" : ""}`}>{p.status}</span>
        <p className="bibliography-venue">{p.journal} · {p.year}</p>
        <h2><a href={`https://doi.org/${p.doi}`}>{p.title}</a></h2>
        <p className="bibliography-authors">{p.authors.map((a,i) => <span key={i}>{i > 0 ? ", " : ""}{a.given === "Alon" && a.family === "Gorenshtein" ? <strong>Alon Gorenshtein</strong> : `${a.given} ${a.family}`}</span>)}</p>
        <p className="research-doi">DOI: <a href={`https://doi.org/${p.doi}`}>{p.doi}</a>{p.volume ? ` · Volume ${p.volume}` : ""}{p.pages ? ` · ${p.pages}` : p.articleNumber ? ` · Article ${p.articleNumber}` : ""}</p>
        {(p.research || p.code) && <p className="bibliography-actions">{p.research && <a href={p.research}>Research context →</a>}{p.code && <a href={p.code}>Public code ↗</a>}</p>}
      </article>)}
      <p className="research-updated">Bibliographic records checked against Crossref and primary publication records on October 26, 2026. The preprint labels describe the linked versions.</p>
      <p><a href="/#research-pages">Research areas</a> · <a href="/projects/">Research software</a> · <a href="https://orcid.org/0009-0000-7542-8608">ORCID</a></p>
    </main><footer className="research-page-footer"><a href="/">Alon Gorenshtein, MD</a><a href="/#contact">Contact and collaboration</a></footer>
  </>;
}
