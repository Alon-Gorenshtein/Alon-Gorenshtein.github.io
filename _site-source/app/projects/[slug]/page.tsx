import SiteHeader from "../../components/SiteHeader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectDetails } from "../../lib/project-details";
import { SITE_URL, PERSON_ID, jsonLd } from "../../lib/identity";
import StoryNav from "../../components/StoryNav";
import ProjectFigure from "../../components/ProjectFigure";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projectDetails.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projectDetails.find(item => item.slug === slug);
  if (!p) return {};
  const url = `${SITE_URL}/projects/${p.slug}/`;
  const title = p.seoTitle;
  return { title, description: p.summary, alternates: { canonical: url, languages: { en: url, he: `${SITE_URL}/he/projects/${p.slug}/` } }, openGraph: { title, description: p.summary, url, type: "website", images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description: p.summary, images: [`${SITE_URL}/og.png`] } };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projectDetails.find(item => item.slug === slug);
  if (!p) notFound();
  const url = `${SITE_URL}/projects/${p.slug}/`;
  const graph = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#page`, url, name: p.title, description: p.summary, about: { "@id": PERSON_ID }, citation: p.links.filter(link => link.url.startsWith("https://doi.org/")).map(link => link.url) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    <SiteHeader languageHref={`/he/projects/${p.slug}/`} />
    <main className="research-page"><nav className="research-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/projects/">Projects</a> / {p.shortName}</nav>
      <article><p className="eyebrow">RESEARCH PROJECT · ALON GORENSHTEIN, MD</p><h1>{p.title}</h1><p className="research-page-intro">{p.intro}</p>
        <div className="project-story-banner project-figure-banner"><ProjectFigure kind={p.slug} /></div>
        <StoryNav links={[{ id: "project-question", label: "The question" }, { id: "project-evidence", label: "The evidence" }, { id: "project-sources", label: "Sources" }]} />
        <section className="project-question" id="project-question"><h2>Research question</h2><p>{p.question}</p></section>
        <section id="project-evidence"><h2>Approach and evidence</h2>{p.methods.map(text => <p key={text}>{text}</p>)}</section>
        <section><h2>Authors and contributions</h2><p>{p.role}</p></section>
        <section><h2>Research context</h2><p>{p.limitation}</p></section>
        <section id="project-sources"><h2>Publications and resources</h2><ul className="research-paper-list">{p.links.map(link => <li key={link.url}><a href={link.url}>{link.label} ↗</a></li>)}</ul></section>
        <p className="research-updated">Research summary updated October 27, 2026.</p>
      </article><aside className="research-related"><h2>Explore other projects</h2>{projectDetails.filter(item => item.slug !== p.slug).map(item => <a key={item.slug} href={`/projects/${item.slug}/`}>{item.shortName} →</a>)}</aside>
    </main><footer className="research-page-footer"><a href="/">Alon Gorenshtein, MD</a><a href="/#contact">Contact and collaboration</a></footer></>;
}
