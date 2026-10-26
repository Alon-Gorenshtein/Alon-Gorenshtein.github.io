import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { researchPages } from "../../lib/research";
import { SITE_URL, PERSON_ID, jsonLd } from "../../lib/identity";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return researchPages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = researchPages.find(p => p.slug === slug);
  if (!page) return {};
  const url = `${SITE_URL}/research/${page.slug}/`;
  const title = `${page.title} | Alon Gorenshtein, MD`;
  return { title, description: page.summary, alternates: { canonical: url }, openGraph: { title, description: page.summary, url, type: "website", images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description: page.summary, images: [`${SITE_URL}/og.png`] } };
}
export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const page = researchPages.find(p => p.slug === slug);
  if (!page) notFound();
  const url = `${SITE_URL}/research/${page.slug}/`;
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#page`, name: page.title, description: page.summary, url, about: { "@id": PERSON_ID }, citation: page.papers.map(p => ({ "@id": `https://doi.org/${p.doi}` })) },
    ...page.papers.map(p => ({ "@type": "ScholarlyArticle", "@id": `https://doi.org/${p.doi}`, url: `https://doi.org/${p.doi}`, headline: p.title, datePublished: p.year, identifier: p.doi, isPartOf: { "@type": "Periodical", name: p.journal }, author: p.authors.map(name => name === "Alon Gorenshtein" ? { "@type": "Person", "@id": PERSON_ID, name, url: `${SITE_URL}/` } : { "@type": "Person", name }) }))
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    <header className="research-page-header"><a href="/">Alon Gorenshtein, MD</a><a href="/#research-pages">All research ↗</a></header>
    <main className="research-page">
      <nav className="research-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#research-pages">Research</a></nav>
      <article>
        <p className="eyebrow">RESEARCH · ALON GORENSHTEIN, MD</p>
        <h1>{page.title}</h1>
        <p className="research-page-intro">{page.intro}</p>
        <section><h2>Research question</h2><p>{page.question}</p></section>
        <section><h2>Methods and findings</h2>{page.findings.map(text => <p key={text}>{text}</p>)}</section>
        <section><h2>Authorship</h2><p>{page.role}</p></section>
        <section><h2>Publications and sources</h2><ul className="research-paper-list">{page.papers.map(p => <li key={p.doi}><a href={`https://doi.org/${p.doi}`}>{p.title}</a><p>{p.authors.join(", ")}. <em>{p.journal}</em> ({p.year}).</p><span className="research-doi">DOI: {p.doi}</span></li>)}</ul>{page.extraLink && <p><a href={page.extraLink.url}>{page.extraLink.label} ↗</a></p>}</section>
        <p className="research-updated">Research summary updated October 26, 2026.</p>
      </article>
      <aside className="research-related"><h2>Explore related research</h2>{researchPages.filter(p => p.slug !== page.slug).map(p => <a key={p.slug} href={`/research/${p.slug}/`}>{p.title} →</a>)}</aside>
      <p><a href="/publications/">Publications and citations</a> · <a href="/projects/">Research software</a> · <a href="https://github.com/Alon-Gorenshtein">GitHub</a> · <a href="https://orcid.org/0009-0000-7542-8608">ORCID</a> · <a href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ">Google Scholar</a></p>
    </main>
    <footer className="research-page-footer"><a href="/">Alon Gorenshtein, MD</a><a href="/#contact">Contact and collaboration</a></footer>
  </>;
}
