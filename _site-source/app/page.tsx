import type { Metadata } from "next";
import { SITE_URL, PERSON_ID, person, biography, jsonLd } from "./lib/identity";
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

const selectedWork = [
  {
    label: "AI misalignment",
    title: "When systems meet human context",
    text: "Evaluating whether clinical AI remains aligned with patient needs, clinician judgment, and the responsibilities that matter beyond a narrow task objective.",
    link: "https://doi.org/10.1038/s41591-026-04350-5",
    linkText: "Read the paper",
  },
  {
    label: "Generative AI in BCI",
    title: "Language models for communication and control",
    text: "A systematic review of how large language models are being integrated into brain–computer interfaces for assistive communication and control.",
    link: "https://pubmed.ncbi.nlm.nih.gov/42202831/",
    linkText: "PubMed record",
  },
  {
    label: "Neurocritical care",
    title: "The unsteady return of command-following",
    text: "A large-cohort study showing how bedside command-following after acute brain injury can return early and fluctuate, with sedation providing important context for interpretation.",
    link: "https://link.springer.com/article/10.1007/s12028-026-02624-x",
    linkText: "Neurocritical Care",
  },
];

const timeline = [
  {
    year: "2026—",
    title: "Harvard Medical School · BIDMC",
    text: "Research Fellow and Postdoctoral Research Fellow in Neurology, Epilepsy Division. Head of AI Engineering at BRIDGE GenAI Lab.",
  },
  {
    year: "2025—26",
    title: "Icahn School of Medicine at Mount Sinai",
    text: "Research Fellow in the Windreich Department of AI & Human Health, developing AI-agent methods for clinical workflows.",
  },
  {
    year: "2024—26",
    title: "Rambam Health Care Campus · AI in Neurology Lab",
    text: "Researcher in the AI in Neurology Lab, building INSPIRE and Neuro-Copilot across clinical neurophysiology and decision support.",
  },
  {
    year: "2022—25",
    title: "Bar-Ilan University · Azrieli Faculty of Medicine",
    text: "Doctor of Medicine, with research across neurology, neuroimmunology, clinical AI, and medical evidence synthesis.",
  },
  {
    year: "2019—22",
    title: "University of Debrecen · Faculty of Medicine",
    text: "Preclinical medicine and teaching assistant in neuroanatomy, leading cadaveric laboratories and tutorials.",
  },
];

const publications = [
  {
    journal: "Nature Medicine · 2026",
    title: "How to meaningfully evaluate AI in clinical medicine",
    authors: "Omar M, Agbareia R, Gorenshtein A, et al.",
    href: "https://doi.org/10.1038/s41591-026-04350-5",
  },
  {
    journal: "medRxiv · 2025 · Preprint version",
    title: "AI Agents in Clinical Medicine: A Systematic Review",
    authors: "Gorenshtein A, Omar M, Glicksberg BS, et al.",
    href: "https://doi.org/10.1101/2025.08.22.25334232",
  },
  {
    journal: "Biomedical Physics & Engineering Express · 2026",
    title: "Large language models integrated into brain–computer interfaces for communication and control",
    authors: "Gorenshtein A, Omar M, Barash Y, et al.",
    href: "https://doi.org/10.1088/2057-1976/ae737b",
  },
  {
    journal: "Clinical Neurophysiology · 2025",
    title: "Agent-guided AI-powered interpretation and reporting of nerve conduction studies and EMG",
    authors: "Gorenshtein A, Sorka M, Khateb M, Aran D, Shelly S.",
    href: "https://doi.org/10.1016/j.clinph.2025.2110792",
  },
  {
    journal: "PLOS Digital Health · 2025",
    title: "A multi-agent approach to neurological clinical reasoning",
    authors: "Sorka M, Gorenshtein A, Aran D, Shelly S.",
    href: "https://doi.org/10.1371/journal.pdig.0001106",
  },
  {
    journal: "Journal of Neurology · 2025",
    title: "AI-based EMG reporting: a randomized controlled trial",
    authors: "Gorenshtein A, Weisblat Y, Khateb M, et al.",
    href: "https://doi.org/10.1007/s00415-025-13261-3",
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
            <a href="https://www.bidmc.org/" className="affiliation-card"><span className="affiliation-orbit affiliation-orbit-two" aria-hidden="true" /><span className="affiliation-logo"><img src="/affiliations/bidmc.svg" alt="Beth Israel Deaconess Medical Center" /></span><span className="affiliation-role"><i>02</i> Postdoctoral research <b aria-hidden="true">↗</b></span></a>
            <a href="https://hms.harvard.edu/" className="affiliation-card affiliation-hms"><span className="affiliation-orbit affiliation-orbit-three" aria-hidden="true" /><span className="affiliation-logo affiliation-text"><strong>Harvard Medical School</strong></span><span className="affiliation-role"><i>03</i> Research fellow <b aria-hidden="true">↗</b></span></a>
          </div>
          <div className="affiliation-history"><div className="affiliation-history-copy"><span className="affiliation-history-index">EARLIER CHAPTERS</span><h3>Training and research<br />across Israel.</h3><p>Medical education and collaborations that shaped the work.</p></div><div className="affiliation-history-logos">
            <a href="https://www.biu.ac.il/en"><img src="/affiliations/bar-ilan.svg" alt="" /><span><b>Bar-Ilan</b><small>MD · Medicine</small></span><i aria-hidden="true">↗</i></a>
            <a href="https://www.rambam.org.il/en/"><img src="/affiliations/rambam.svg" alt="" /><span><b>Rambam</b><small>Clinical research</small></span><i aria-hidden="true">↗</i></a>
            <a href="https://www.technion.ac.il/en/"><img src="/affiliations/technion.png" alt="" /><span><b>Technion</b><small>Research collaboration</small></span><i aria-hidden="true">↗</i></a>
          </div></div>
          <div className="affiliation-endnote"><span>ONE CONTINUOUS QUESTION</span><b>How can technology support better care?</b><span className="affiliation-endnote-signal" aria-hidden="true">···</span></div>
        </div>
      </section>

      <section className="editorial-about section-shell" id="about" data-motion-reveal>
        <div><p className="section-index">About</p><h2>Medicine is<br /><em>human work.</em></h2></div>
        <div className="editorial-about-copy"><p className="editorial-lead">I’m Alon Gorenshtein (אלון גורנשטיין), a physician-scientist and AI engineer working at the intersection of neurology, clinical research, and machine intelligence.</p><p>At Harvard Medical School and Beth Israel Deaconess Medical Center, I study how AI systems can support clinical judgment, how we evaluate them, and how they behave in real-world settings. I also lead AI engineering at BRIDGE GenAI Lab.</p><div className="identity-links"><a className="signal-link" href="https://bridgegenai.org/">Discover BRIDGE GenAI Lab ↗</a><a className="signal-link" href="https://connects.catalyst.harvard.edu/Profiles/display/Person/227389">Harvard profile ↗</a><a className="signal-link" href="/he/" lang="he" dir="rtl">האתר בעברית ←</a></div></div>
      </section>

      <section className="editorial-research" id="research"><div className="section-shell"><div className="editorial-section-head" data-motion-reveal><p className="section-index">Research focus</p><h2>From signals<br /><em>to decisions.</em></h2><p>Exploring how intelligent systems can extend human capability while remaining accountable to the people who use them.</p></div><div className="research-index" data-motion-reveal>{focusAreas.map((area, index)=><a href={area.href} key={area.title} target="_blank" rel="noreferrer"><div className="research-art"><ResearchGlyph kind={["literas", "neuro-copilot", "inspire"][index]} /></div><span className="research-index-number">0{index+1} / RESEARCH AREA</span><div><h3>{area.title}</h3><p>{area.text}</p></div><span className="research-index-arrow" aria-hidden="true">↗</span></a>)}</div><div className="editorial-guides">{researchPages.map(page=><a href={`/research/${page.slug}/`} key={page.slug}>{page.title} ↗</a>)}</div></div></section>

      <section className="editorial-projects section-shell" id="projects"><div className="editorial-section-head" data-motion-reveal><p className="section-index">Research projects</p><h2>Ideas into<br /><em>practice.</em></h2><p>Tools and benchmarks built with collaborators to investigate clinical AI and neurological care.</p></div><div className="editorial-project-list">{projectDetails.map((project,index)=><a href={`/projects/${project.slug}/`} className="editorial-project" key={project.slug} data-motion-reveal><span className="project-number">0{index+1}</span><div className="editorial-project-figure"><ProjectFigure kind={project.slug} compact /></div><div className="editorial-project-title"><h3>{project.shortName}</h3><span>Research project</span><p>{project.summary}</p></div><span className="editorial-arrow" aria-hidden="true">↗</span></a>)}</div><a className="signal-link" href="/projects/">All projects and public code ↗</a></section>

      <section className="editorial-study section-shell" id="work"><div><p className="section-index">In focus · Neurocritical care</p><h2>The unsteady return of command-following</h2></div><div><p>A study of recovery after acute brain injury and the clinical context that shapes bedside interpretation.</p><a href="https://link.springer.com/article/10.1007/s12028-026-02624-x" className="signal-link">Read the study ↗</a></div></section>

      <section className="editorial-publications section-shell" id="publications"><div className="editorial-section-head" data-motion-reveal><p className="section-index">Selected publications</p><h2>Research in<br /><em>the literature.</em></h2><p>Selected work across clinical AI, neurology, and neurotechnology. Explore indexed publications by topic.</p></div><div className="editorial-publication-list">{publications.slice(0,4).map(publication=><a className="editorial-publication" href={publication.href} key={publication.title}><span>{publication.journal}</span><strong>{publication.title}</strong><span aria-hidden="true">↗</span></a>)}</div><div className="editorial-publication-footer"><a className="signal-link" href="/publications/">Explore the publication archive ↗</a><span>50+ PubMed-indexed publications</span></div></section>

      <section className="editorial-contact" id="contact"><div className="section-shell"><p className="section-index">Contact</p><h2>Let’s make<br /><em>something matter.</em></h2><div className="editorial-contact-bottom"><p>For research collaborations, clinical AI, and neurotechnology.</p><a href="mailto:agorensh@bidmc.harvard.edu">agorensh@bidmc.harvard.edu ↗</a></div><div className="editorial-social"><a href="https://www.linkedin.com/in/alon-gorenshtein/">LinkedIn ↗</a><a href="https://orcid.org/0009-0000-7542-8608">ORCID ↗</a><a href="https://github.com/Alon-Gorenshtein">GitHub ↗</a><a href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ">Google Scholar ↗</a></div></div></section>

      <footer className="site-footer section-shell"><span>Alon Gorenshtein, MD</span><span className="motto">Le vent se lève. Il faut tenter de vivre.</span><a href="#top">Back to top ↑</a></footer>
      </main>
    </>
  );
}
