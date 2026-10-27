import type { Metadata } from "next";
import { SITE_URL, PERSON_ID, person, biography, jsonLd } from "./lib/identity";
import { researchPages } from "./lib/research";
import { projectDetails } from "./lib/project-details";
import LiveMotion from "./components/LiveMotion";
import SiteHeader from "./components/SiteHeader";

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
    text: "A large-cohort study showing how bedside command-following after acute brain injury can return early, fluctuate, and depend strongly on sedation.",
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
      <img className="hero-neurotech-brain" src="/neurotech-brain-trimmed.png" alt="" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Alon Gorenshtein, MD — Physician-Scientist & AI Engineer",
  description:
    "Alon Gorenshtein, MD: physician-scientist at BIDMC and Harvard Medical School, Head of AI Engineering at BRIDGE GenAI Lab. Clinical AI and neurology research.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@graph": [person, { "@type": "ProfilePage", "@id": `${SITE_URL}/#profile`, url: `${SITE_URL}/`, name: "Alon Gorenshtein, MD", mainEntity: { "@id": PERSON_ID } }] }) }} />
      <SiteHeader />
      <LiveMotion />

      <main>

      <section className="hero hero-system section-shell" id="top">
        <HeroNeuroLayer />
        <div className="hero-copy">
          <p className="eyebrow reveal">PHYSICIAN-SCIENTIST · AI ENGINEER</p>
          <h1 className="hero-title reveal reveal-delay-1">
            Alon
            <br />
            <em>Gorenshtein, MD</em>
          </h1>
          <p className="hero-lede reveal reveal-delay-2">
            Building human-centered AI for neurology — across neurocritical
            care, neural interfaces, and the systems that shape clinical decisions.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-dark" href="#work">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#research">
              Research focus <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <span>AI MISALIGNMENT</span><i>✳</i><span>GENERATIVE AI IN BCI</span><i>✳</i><span>NEUROCRITICAL CARE</span><i>✳</i><span>DISORDERS OF CONSCIOUSNESS</span><i>✳</i>
      </div>

      <section className="intro section-shell" id="about">
        <div className="section-label"><span>About</span></div>
        <div className="intro-grid" data-motion-reveal>
          <h2 className="section-title">Medicine meets<br /><em>machine intelligence.</em></h2>
          <div className="intro-body">
            <p className="intro-lede">
              {biography}
            </p>
            <p>
              My work spans clinical LLM evaluation, epilepsy data science,
              brain–computer interfaces, and the design of tools that can make
              complex clinical workflows safer and more useful. I care about
              the moment when a promising model meets a real patient, a real
              clinician, and a real decision.
            </p>
            <p>
              Today I’m a Research Fellow at Harvard Medical School and a
              Postdoctoral Research Fellow in the Epilepsy Division at Beth
              Israel Deaconess Medical Center. I also lead AI Engineering at
              BRIDGE GenAI Lab.
            </p>
            <p className="identity-source">Professional profile: <a href="https://hmfphysicians.org/bridge-genai-lab-advances-bidmc-radiologys-role-in-clinical-generative-ai/" target="_blank" rel="noreferrer">Harvard Medical Faculty Physicians on BRIDGE GenAI Lab</a>.</p>
            <a className="text-link" href="https://bridgegenai.org/" target="_blank" rel="noreferrer">
              Visit BRIDGE GenAI Lab <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="role-grid" data-motion-reveal>
          <article className="role-card role-card-accent">
            <span className="card-kicker">CURRENT ROLE</span>
            <h3>Research Fellow</h3>
            <p>Harvard Medical School<br />Department of Neurology</p>
            <span className="card-location">Boston, Massachusetts</span>
          </article>
          <article className="role-card">
            <span className="card-kicker">CURRENT ROLE</span>
            <h3>Postdoctoral Fellow</h3>
            <p>BIDMC Epilepsy + Data Science Lab<br />Department of Neurology</p>
            <span className="card-location">Boston, Massachusetts</span>
          </article>
          <article className="role-card">
            <span className="card-kicker">CURRENT ROLE</span>
            <h3>Head of AI Engineering</h3>
            <p>BRIDGE GenAI Lab<br />Safe AI. Real Medicine.</p>
            <span className="card-location">BIDMC · DFCI · HMS</span>
          </article>
        </div>
      </section>

      <section className="research section-dark" id="research">
        <div className="research-inner">
          <div className="section-label section-label-light"><span>Research focus</span></div>
          <div className="dark-heading-row" data-motion-reveal>
            <h2 className="section-title section-title-light">Where intelligence<br /><em>meets responsibility.</em></h2>
            <p className="section-side-note">My work asks how intelligent systems can remain useful and answerable to people: in high-stakes clinical care, through neural interfaces, and in the objectives we give our systems.</p>
          </div>
          <div className="focus-manifesto" data-motion-reveal>
            <span className="focus-manifesto-label">The connecting question</span>
            <p>How do we build systems that extend human capability without losing human judgment?</p>
          </div>
          <div className="focus-grid" data-motion-reveal>
            {focusAreas.map((area) => (
              <a className="focus-card" href={area.href} target="_blank" rel="noreferrer" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <span className="focus-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell research-guides" id="research-pages">
        <div className="section-label"><span>Research in depth</span></div>
        <h2 className="section-title">Questions, methods,<br /><em>and evidence.</em></h2>
        <div className="research-guide-grid">{researchPages.map((page) => <a className="research-guide" href={`/research/${page.slug}/`} key={page.slug}><h3>{page.title}</h3><p>{page.summary}</p><span className="text-link">Read the research →</span></a>)}</div>
      </section>

      <section className="section-shell research-guides" id="projects">
        <div className="section-label"><span>Research projects</span></div>
        <h2 className="section-title">Ideas made<br /><em>into tools.</em></h2>
        <p className="section-side-note">Research systems and benchmarks built with collaborators to investigate clinical AI, neurology, and evidence synthesis.</p>
        <div className="research-guide-grid">{projectDetails.map((project) => <a className="research-guide" href={`/projects/${project.slug}/`} key={project.slug}><h3>{project.shortName}</h3><p>{project.summary}</p><span className="text-link">Explore the project →</span></a>)}</div>
        <p><a className="text-link" href="/projects/">Browse all research projects and public code →</a></p>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>Selected work</span></div>
        <div className="work-heading-row" data-motion-reveal>
          <h2 className="section-title">Work grounded in<br /><em>three questions.</em></h2>
          <p className="section-side-note">Selected studies on clinical uncertainty after acute brain injury, generative AI in neural interfaces, and evaluation beyond a narrow task objective.</p>
        </div>
        <div className="work-grid" data-motion-reveal>
          {selectedWork.map((item, index) => (
            <article className={`work-card work-card-${index + 1}`} key={item.title}>
              <div className="work-card-top"><span>{item.label}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.link} target="_blank" rel="noreferrer">{item.linkText} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section section-shell section-paper" id="timeline">
        <div className="section-label"><span>Path to here</span></div>
        <div className="timeline-heading-row" data-motion-reveal>
          <h2 className="section-title">A nonlinear<br /><em>clinical path.</em></h2>
          <p className="section-side-note">Medicine, engineering, and research have never been separate tracks. They are the same work viewed from different angles.</p>
        </div>
        <div className="timeline" data-motion-reveal>
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="publications section-shell" id="publications">
        <div className="section-label"><span>Selected publications</span></div>
        <div className="pub-heading-row" data-motion-reveal>
          <h2 className="section-title">The work,<br /><em>in the literature.</em></h2>
          <div className="pub-heading-action"><p>Peer-reviewed research, accepted manuscripts, and ongoing work across clinical AI and neurology.</p><a className="button button-outline" href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ&hl=en&inst=7575085548378563675" target="_blank" rel="noreferrer">Google Scholar <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="publication-list" data-motion-reveal>
          {publications.map((publication) => (
            <a className="publication-row" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
              <span className="publication-main"><span className="publication-journal">{publication.journal}</span><strong>{publication.title}</strong><span className="publication-authors">{publication.authors}</span></span>
              <span className="publication-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="bibliography-actions"><a className="text-link" href="/publications/">Browse selected publications and download citations →</a><a className="text-link" href="/projects/">Research software and public code →</a></p>
        <div className="publication-footer"><span>40+ PubMed-indexed publications</span><a className="text-link" href="https://www.ncbi.nlm.nih.gov/myncbi/alon.gorenshtein.1/bibliography/public/" target="_blank" rel="noreferrer">View NCBI bibliography <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="contact section-shell section-dark" id="contact">
        <div className="contact-grid" data-motion-reveal>
          <div className="contact-heading"><span className="card-kicker card-kicker-light">LET’S TALK</span><h2 className="contact-title">Good work is<br /><em>collaborative.</em></h2><p className="contact-subline">Research partnerships, clinical AI, and neurotechnology with a human point of view.</p></div>
          <div className="contact-copy"><span className="contact-copy-label">OPEN TO CONVERSATIONS ABOUT</span><p>Hard problems in clinical AI, neurology, and neurotechnology. If the question matters to patients or the people caring for them, I’d be glad to hear from you.</p><a className="contact-email" href="mailto:agorensh@bidmc.harvard.edu"><span className="contact-email-label">Email Alon</span> agorensh@bidmc.harvard.edu <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/alon-gorenshtein/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://orcid.org/0009-0000-7542-8608" target="_blank" rel="noreferrer">ORCID</a><a href="https://github.com/Alon-Gorenshtein" target="_blank" rel="noreferrer">GitHub</a><a href="https://connects.catalyst.harvard.edu/Profiles/display/Person/227389" target="_blank" rel="noreferrer">Harvard Catalyst</a></div></div>
        </div>
      </section>

      <footer className="site-footer section-shell"><span>Alon Gorenshtein, MD</span><span className="motto">Le vent se lève. Il faut tenter de vivre.</span><a href="#top">Back to top ↑</a></footer>
      </main>
    </>
  );
}
