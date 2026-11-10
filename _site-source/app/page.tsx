import type { Metadata } from "next";
import { SITE_URL, PERSON_ID, person, jsonLd } from "./lib/identity";
import { researchPages } from "./lib/research";
import { projectDetails } from "./lib/project-details";
import SiteHeader from "./components/SiteHeader";
import ResearchGlyph from "./components/ResearchGlyph";
import ProjectFigure from "./components/ProjectFigure";

const focusAreas = [
  {
    title: "AI misalignment",
    text: "Studying the gap between what an AI system optimizes and what people actually need: context, judgment, empathy, and responsibility.",
    href: "https://doi.org/10.1038/s41591-026-04350-5",
  },
  {
    title: "Generative AI in BCI",
    text: "Language models and neural interfaces for communication, control, and restoring agency in neurological disease.",
    href: "https://pubmed.ncbi.nlm.nih.gov/42202831/",
  },
  {
    title: "Neurocritical care & consciousness",
    text: "Neurocritical care and disorders of consciousness, where clinical examination, recovery, and uncertainty meet at the bedside.",
    href: "https://link.springer.com/article/10.1007/s12028-026-02624-x",
  },
];

function HeroNeuroLayer() {
  return (
    <div className="hero-neuro-layer" aria-hidden="true">
      <span className="hero-orbit hero-orbit-one" /><span className="hero-orbit hero-orbit-two" />
      <img className="hero-neurotech-brain" src="/neurotech-brain-trimmed.png" alt="" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Alon Gorenshtein, MD — Physician-Scientist & AI Engineer",
  description:
    "Alon Gorenshtein, MD, is a physician-scientist and AI researcher at BIDMC. Explore INSPIRE, LITERAS, clinical AI, neurology and research publications.",
  alternates: { canonical: `${SITE_URL}/`, languages: { en: `${SITE_URL}/`, he: `${SITE_URL}/he/` } },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@graph": [person, { "@type": "ProfilePage", "@id": `${SITE_URL}/#profile`, url: `${SITE_URL}/`, name: "Alon Gorenshtein, MD", mainEntity: { "@id": PERSON_ID } }] }) }} />
      <SiteHeader />
      <main>

      <section className="signal-hero" id="top">
        <div className="hero-light" aria-hidden="true"><span /><span /><span /></div>
        <div className="signal-hero-inner section-shell">
          <div className="signal-hero-main">
            <p className="signal-overline">PHYSICIAN-SCIENTIST &amp; AI ENGINEER <span>·</span> BOSTON</p>
            <h1>Alon<br /><span>Gorenshtein</span><small>, MD</small></h1>
            <div className="signal-hero-bottom"><p>Building and studying AI for the moments that matter in medicine.</p><a href="#research" className="signal-link">Explore the research <span>↘</span></a></div>
          </div>
          <div className="signal-hero-aside"><figure className="signal-portrait"><div className="portrait-frame"><img src="/alon-portrait.png" alt="Alon Gorenshtein" /></div><figcaption><span>Alon Gorenshtein, MD</span><span>Harvard Medical School · BIDMC</span></figcaption></figure></div>
          <div className="hero-index"><span>RESEARCH AREAS</span><span>CLINICAL AI</span><span>NEUROLOGY</span><span>NEUROTECHNOLOGY</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
        </div>
      </section>

      <section className="affiliations" aria-labelledby="affiliations-title">
        <svg className="affiliation-circuit" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-40 420C180 420 160 160 380 160S590 420 790 420s200-260 410-260 180 190 300 190"/><path d="M-40 480C180 480 200 220 390 220s210 260 400 260 220-220 420-220 170 150 290 150"/><circle cx="380" cy="160" r="5"/><circle cx="790" cy="420" r="5"/><circle cx="1200" cy="160" r="5"/><circle cx="390" cy="220" r="3"/><circle cx="790" cy="480" r="3"/><circle cx="1210" cy="260" r="3"/></svg>
        <div className="affiliations-inner section-shell">
          <div className="affiliations-head"><div><p className="section-index">A connected practice</p><h2 id="affiliations-title">Medicine, research<br /><em>and engineering.</em></h2></div><span className="affiliation-coordinate">BOSTON · HAIFA · GLOBAL COLLABORATION</span></div>
          <div className="affiliation-primary">
            <a href="https://bridgegenai.org/" className="affiliation-card affiliation-bridge"><span className="affiliation-orbit affiliation-orbit-one" aria-hidden="true" /><span className="affiliation-logo"><img src="/affiliations/bridge.svg" alt="" /><strong>BRIDGE <small>GenAI Lab</small></strong></span><span className="affiliation-role"><i>01</i> Head of AI Engineering <b aria-hidden="true">↗</b></span></a>
            <a href="https://connects.catalyst.harvard.edu/Profiles/display/Person/227389" className="affiliation-card affiliation-bidmc"><span className="affiliation-orbit affiliation-orbit-two" aria-hidden="true" /><span className="affiliation-logo"><img src="/affiliations/bidmc.svg" alt="Beth Israel Deaconess Medical Center" /></span><span className="affiliation-role"><i>02</i> Postdoctoral research <b aria-hidden="true">↗</b></span></a>
            <a href="https://connects.catalyst.harvard.edu/Profiles/display/Person/227389" className="affiliation-card affiliation-hms"><span className="affiliation-orbit affiliation-orbit-three" aria-hidden="true" /><span className="affiliation-logo"><img src="/affiliations/hms-logo-knockout.png" alt="Harvard Medical School" /></span><span className="affiliation-role"><i>03</i> Research fellow <b aria-hidden="true">↗</b></span></a>
          </div>
          <div className="affiliation-history"><div className="affiliation-history-copy"><span className="affiliation-history-index">EARLIER CHAPTERS</span><h3>Training and research<br />across Israel.</h3><p>Medical education and collaborations that shaped the work.</p></div><div className="affiliation-history-logos">
            <a className="affiliation-history-bar-ilan" href="https://www.biu.ac.il/en/"><img src="/affiliations/bar-ilan-en.svg" alt="" /><span><b>Bar-Ilan</b><small>MD · Medicine</small></span><i aria-hidden="true">↗</i></a>
            <a href="https://www.rambam.org.il/en/" className="affiliation-history-rambam"><span className="affiliation-rambam-lockup"><img src="/affiliations/rambam-mark.svg" alt=""/><span><b>RAMBAM</b><small>Health Care Campus</small></span></span><span><small>Clinical research</small></span><i aria-hidden="true">↗</i></a>
            <a className="affiliation-history-technion" href="https://www.technion.ac.il/en/"><img src="/affiliations/technion.png" alt="" /><span><b>Technion</b><small>Research collaboration</small></span><i aria-hidden="true">↗</i></a>
          </div></div>
          <div className="affiliation-endnote"><span>ONE CONTINUOUS QUESTION</span><b>How can technology support better care?</b><span className="affiliation-endnote-signal" aria-hidden="true">···</span></div>
        </div>
      </section>

      <section className="editorial-about section-shell" id="about" data-motion-reveal>
        <div><p className="section-index">About</p><h2>Medicine is<br /><em>human work.</em></h2></div>
        <div className="editorial-about-copy"><p className="editorial-lead">I’m Alon Gorenshtein (אלון גורנשטיין), a physician-scientist and AI engineer working at the intersection of neurology, clinical research, and machine intelligence.</p><p>My work asks how AI systems can support clinical judgment, how to evaluate them, and how they behave in real-world settings.</p><div className="identity-links"><a className="signal-link" href="https://bridgegenai.org/">Discover BRIDGE GenAI Lab ↗</a><a className="signal-link" href="https://connects.catalyst.harvard.edu/Profiles/display/Person/227389">Harvard profile ↗</a><a className="signal-link" href="/he/" lang="he" dir="rtl">האתר בעברית ←</a></div></div>
      </section>

      <section className="editorial-research" id="research"><div className="section-shell"><div className="editorial-section-head" data-motion-reveal><p className="section-index">Research focus</p><h2>From signals<br /><em>to decisions.</em></h2><p>Exploring how intelligent systems can extend human capability while remaining accountable to the people who use them.</p></div><div className="research-index" data-motion-reveal>{focusAreas.map((area, index)=><a href={area.href} key={area.title} target="_blank" rel="noreferrer"><div className="research-art"><ResearchGlyph kind={["ai-safety", "bci", "neurocritical-care"][index]} /></div><span className="research-index-number">0{index+1} / RESEARCH AREA</span><div><h3>{area.title}</h3><p>{area.text}</p></div><span className="research-index-arrow" aria-hidden="true">↗</span></a>)}</div><div className="editorial-guides">{researchPages.map(page=><a href={`/research/${page.slug}/`} key={page.slug}>{page.title} ↗</a>)}</div></div></section>

      <section className="editorial-projects section-shell" id="projects"><div className="editorial-section-head" data-motion-reveal><p className="section-index">Research projects</p><h2>Ideas into<br /><em>practice.</em></h2><p>Tools and benchmarks built with collaborators to investigate clinical AI and neurological care.</p></div><div className="editorial-project-list">{projectDetails.map((project,index)=><a href={`/projects/${project.slug}/`} className="editorial-project" key={project.slug} data-motion-reveal><span className="project-number">0{index+1}</span><div className="editorial-project-figure"><ProjectFigure kind={project.slug} compact /></div><div className="editorial-project-title"><h3>{project.shortName}</h3><span>Research project</span><p>{project.summary}</p></div><span className="editorial-arrow" aria-hidden="true">↗</span></a>)}</div><a className="signal-link" href="/projects/">All projects and public code ↗</a></section>

      <section className="editorial-publications section-shell" id="publications"><div className="editorial-section-head" data-motion-reveal><p className="section-index">Publications</p><h2>Research in<br /><em>the literature.</em></h2><p>More than 50 PubMed-indexed publications across clinical AI, neurology, epilepsy, and neurotechnology.</p></div><div className="editorial-publication-footer"><a className="signal-link" href="/publications/">Browse the full publication archive by topic ↗</a><a className="signal-link" href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ">Google Scholar ↗</a></div></section>

      <section className="editorial-contact" id="contact"><div className="section-shell"><p className="section-index">Contact</p><h2>Let’s make<br /><em>something matter.</em></h2><div className="editorial-contact-bottom"><p>For research collaborations, clinical AI, and neurotechnology.</p><a href="mailto:agorensh@bidmc.harvard.edu">agorensh@bidmc.harvard.edu ↗</a></div><div className="editorial-social"><a href="https://www.linkedin.com/in/alon-gorenshtein/">LinkedIn ↗</a><a href="https://orcid.org/0009-0000-7542-8608">ORCID ↗</a><a href="https://github.com/Alon-Gorenshtein">GitHub ↗</a><a href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ">Google Scholar ↗</a></div></div></section>

      <footer className="site-footer section-shell"><span>Alon Gorenshtein, MD</span><span className="motto">Le vent se lève. Il faut tenter de vivre.</span><a href="#top">Back to top ↑</a></footer>
      </main>
    </>
  );
}
