import type { Metadata } from "next";
import { SITE_URL, PERSON_ID, jsonLd } from "../lib/identity";
import { publications, articleSchema } from "../lib/publications";
import PublicationExplorer from "../components/PublicationExplorer";

const title = "Publications | Alon Gorenshtein, MD";
const description = "Publications and preprints by Alon Gorenshtein, MD, on clinical AI, neurology, neurophysiology, brain–computer interfaces, and evidence synthesis.";
export const metadata: Metadata = { title, description, alternates: { canonical: `${SITE_URL}/publications/`, languages: { en: `${SITE_URL}/publications/`, he: `${SITE_URL}/he/publications/` } }, openGraph: { title, description, url: `${SITE_URL}/publications/`, type: "website", images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og.png`] } };
export default function Publications() {
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${SITE_URL}/publications/#page`, url: `${SITE_URL}/publications/`, name: title, about: { "@id": PERSON_ID }, mainEntity: { "@type": "ItemList", itemListElement: publications.map((p,i) => ({ "@type": "ListItem", position: i+1, item: { "@id": `https://doi.org/${p.doi}` } })) } }, ...publications.map(articleSchema)
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    <header className="research-page-header"><a href="/">Alon Gorenshtein, MD</a><a lang="he" dir="rtl" href="/he/publications/">עברית</a><a href="/projects/">Research software ↗</a></header>
    <main className="research-page"><nav className="research-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / Publications</nav>
      <div className="publications-hero"><p className="eyebrow">THE RESEARCH ARCHIVE · ALON GORENSHTEIN, MD</p><h1>Ideas in<br /><em>the literature.</em></h1><p className="research-page-intro">Explore research across clinical AI, neurology, neurotechnology, and critical care.</p></div>
      <p className="archive-note">This archive combines PubMed records matching Alon Gorenshtein’s full name with selected additional works, including preprints. Categories are a guide and some papers span multiple fields. For the broader record, visit <a href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ">Google Scholar</a> or <a href="https://www.ncbi.nlm.nih.gov/myncbi/alon.gorenshtein.1/bibliography/public/">NCBI My Bibliography</a>. Preprints are labeled and have not been certified by peer review.</p>
      <p className="citation-downloads">Download selected citations: <a href="/citations/selected-publications.bib" download>BibTeX</a> · <a href="/citations/selected-publications.ris" download>RIS</a></p>
      <PublicationExplorer />
      <p className="research-updated">PubMed records retrieved November 7, 2026. Additional curated works link to their DOI. Publication details and status can change.</p>
      <p><a href="/#research">Research areas</a> · <a href="/projects/">Research software</a> · <a href="https://orcid.org/0009-0000-7542-8608">ORCID</a></p>
    </main><footer className="research-page-footer"><a href="/">Alon Gorenshtein, MD</a><a href="/#contact">Contact and collaboration</a></footer>
  </>;
}
