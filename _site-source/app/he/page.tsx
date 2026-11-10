import type { Metadata } from "next";
import { SITE_URL, PERSON_ID, person, jsonLd } from "../lib/identity";
import { hebrewProjects, hebrewResearch } from "../lib/hebrew";
import SiteHeader from "../components/SiteHeader";
import ResearchGlyph from "../components/ResearchGlyph";
import ProjectFigure from "../components/ProjectFigure";

const url = `${SITE_URL}/he/`;
export const metadata: Metadata = {
  title: "אלון גורנשטיין, MD | רפואה, נוירולוגיה ובינה מלאכותית",
  description: "ד״ר אלון גורנשטיין הוא רופא־חוקר ומהנדס בינה מלאכותית. מחקריו עוסקים בבטיחות AI ברפואה, נוירולוגיה, נוירוטכנולוגיה וראיות רפואיות.",
  alternates: { canonical: url, languages: { en: `${SITE_URL}/`, he: url } },
  openGraph: { title: "אלון גורנשטיין | רפואה ובינה מלאכותית", description: "מחקר בנוירולוגיה, בינה מלאכותית רפואית וממשקי מוח–מחשב.", url, type: "website", images: [`${SITE_URL}/og.png`] },
};

const focus = [
  { area: hebrewResearch[0], figure: "ai-safety", number: "01" },
  { area: hebrewResearch[2], figure: "bci", number: "02" },
  { area: hebrewResearch[3], figure: "neurocritical-care", number: "03" },
];

export default function HebrewHome() {
  const graph = { "@context": "https://schema.org", "@graph": [person, { "@type": "ProfilePage", "@id": `${url}#profile`, url, name: "אלון גורנשטיין, MD", inLanguage: "he", mainEntity: { "@id": PERSON_ID } }] };
  return <div lang="he" dir="rtl" className="he-site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    <SiteHeader language="he" languageHref="/" />
    <main>
      <section className="signal-hero" id="top">
        <div className="hero-light" aria-hidden="true"><span /><span /><span /></div>
        <div className="signal-hero-inner section-shell">
          <div className="signal-hero-main">
            <p className="signal-overline">רופא־חוקר ומהנדס בינה מלאכותית <span>·</span> בוסטון</p>
            <h1>אלון<br /><span>גורנשטיין</span><small>, MD</small></h1>
            <div className="signal-hero-bottom"><p>מפתח וחוקר בינה מלאכותית עבור הרגעים החשובים ברפואה.</p><a href="#research" className="signal-link">לעיון במחקר <span>↙</span></a></div>
          </div>
          <div className="signal-hero-aside"><figure className="signal-portrait"><div className="portrait-frame"><img src="/alon-portrait.png" alt="דיוקנו של ד״ר אלון גורנשטיין" /></div><figcaption><span>אלון גורנשטיין, MD</span><span dir="ltr">Harvard Medical School · BIDMC</span></figcaption></figure></div>
          <div className="hero-index"><span>תחומי מחקר</span><span>בינה מלאכותית קלינית</span><span>נוירולוגיה</span><span>נוירוטכנולוגיה</span><a href="#about">גלילה להמשך ↓</a></div>
        </div>
      </section>

      <section className="affiliations" aria-labelledby="he-affiliations-title">
        <svg className="affiliation-circuit" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-40 420C180 420 160 160 380 160S590 420 790 420s200-260 410-260 180 190 300 190"/><path d="M-40 480C180 480 200 220 390 220s210 260 400 260 220-220 420-220 170 150 290 150"/><circle cx="380" cy="160" r="5"/><circle cx="790" cy="420" r="5"/><circle cx="1200" cy="160" r="5"/><circle cx="390" cy="220" r="3"/><circle cx="790" cy="480" r="3"/><circle cx="1210" cy="260" r="3"/></svg>
        <div className="affiliations-inner section-shell">
          <div className="affiliations-head"><div><p className="section-index">עבודה משותפת</p><h2 id="he-affiliations-title">רפואה, מחקר<br /><em>והנדסה.</em></h2></div><span className="affiliation-coordinate">בוסטון · חיפה · שיתופי פעולה בינלאומיים</span></div>
          <div className="affiliation-primary">
            <a href="https://bridgegenai.org/" className="affiliation-card affiliation-bridge"><span className="affiliation-orbit affiliation-orbit-one" aria-hidden="true"/><span className="affiliation-logo"><img src="/affiliations/bridge.svg" alt=""/><strong>BRIDGE <small>GenAI Lab</small></strong></span><span className="affiliation-role"><i>01</i> מוביל הנדסת בינה מלאכותית <b aria-hidden="true">↗</b></span></a>
            <a href="https://www.bidmc.org/" className="affiliation-card"><span className="affiliation-orbit affiliation-orbit-two" aria-hidden="true"/><span className="affiliation-logo"><img src="/affiliations/bidmc.svg" alt="Beth Israel Deaconess Medical Center"/></span><span className="affiliation-role"><i>02</i> עמית מחקר ופוסט־דוקטורט <b aria-hidden="true">↗</b></span></a>
            <a href="https://hms.harvard.edu/" className="affiliation-card affiliation-hms"><span className="affiliation-orbit affiliation-orbit-three" aria-hidden="true"/><span className="affiliation-logo"><img src="/affiliations/hms-logo.png" alt="Harvard Medical School"/></span><span className="affiliation-role"><i>03</i> עמית מחקר <b aria-hidden="true">↗</b></span></a>
          </div>
          <div className="affiliation-history"><div className="affiliation-history-copy"><span className="affiliation-history-index">פרקים קודמים</span><h3>לימודים ומחקר<br/>בישראל.</h3><p>הכשרה רפואית ושיתופי פעולה שעיצבו את העשייה.</p></div><div className="affiliation-history-logos">
            <a href="https://www.biu.ac.il/"><img src="/affiliations/bar-ilan.svg" alt=""/><span><b>אוניברסיטת בר־אילן</b><small>MD · לימודי רפואה</small></span><i aria-hidden="true">↗</i></a>
            <a href="https://www.rambam.org.il/"><img src="/affiliations/rambam.svg" alt=""/><span><b>רמב״ם</b><small>מחקר קליני</small></span><i aria-hidden="true">↗</i></a>
            <a href="https://www.technion.ac.il/en/"><img src="/affiliations/technion.png" alt=""/><span><b>הטכניון</b><small>שיתוף פעולה מחקרי</small></span><i aria-hidden="true">↗</i></a>
          </div></div>
          <div className="affiliation-endnote"><span>שאלה אחת שממשיכה ללוות את העבודה</span><b>איך טכנולוגיה יכולה לתמוך בטיפול טוב יותר?</b><span className="affiliation-endnote-signal" aria-hidden="true">···</span></div>
        </div>
      </section>

      <section className="editorial-about section-shell" id="about" data-motion-reveal>
        <div><p className="section-index">אודות</p><h2>רפואה היא<br/><em>עשייה אנושית.</em></h2></div>
        <div className="editorial-about-copy"><p className="editorial-lead">אני אלון גורנשטיין, רופא־חוקר ומהנדס בינה מלאכותית, הפועל בצומת שבין נוירולוגיה, מחקר קליני ולמידת מכונה.</p><p>אני חוקר כיצד מערכות בינה מלאכותית יכולות לתמוך בשיקול דעת קליני, כיצד להעריך אותן ואיך הן פועלות בתנאי אמת.</p><div className="identity-links"><a className="signal-link" href="https://bridgegenai.org/">הכירו את מעבדת BRIDGE GenAI ↗</a><a className="signal-link" href="https://connects.catalyst.harvard.edu/Profiles/display/Person/227389">הפרופיל ב־Harvard ↗</a><a className="signal-link" href="/" lang="en" dir="ltr">English website ←</a></div></div>
      </section>

      <section className="editorial-research" id="research"><div className="section-shell"><div className="editorial-section-head" data-motion-reveal><p className="section-index">מוקדי מחקר</p><h2>מאותות<br/><em>להחלטות.</em></h2><p>בחינת הדרכים שבהן מערכות חכמות יכולות להרחיב יכולות אנושיות, תוך אחריות כלפי המטופלים והצוותים המשתמשים בהן.</p></div><div className="research-index" data-motion-reveal>{focus.map(({ area, figure, number })=><a href={`/he/research/${area.slug}/`} key={area.slug}><div className="research-art"><ResearchGlyph kind={figure} language="he"/></div><span className="research-index-number">{number} / תחום מחקר</span><div><h3>{area.title}</h3><p>{area.summary}</p></div><span className="research-index-arrow" aria-hidden="true">↗</span></a>)}</div><div className="editorial-guides">{hebrewResearch.map(page=><a href={`/he/research/${page.slug}/`} key={page.slug}>{page.title} ↗</a>)}</div></div></section>

      <section className="editorial-projects section-shell" id="projects"><div className="editorial-section-head" data-motion-reveal><p className="section-index">פרויקטים מחקריים</p><h2>מרעיון<br/><em>לעשייה.</em></h2><p>מערכות וכלי הערכה שנבנו בשיתוף עמיתים כדי לחקור בינה מלאכותית קלינית ונוירולוגיה.</p></div><div className="editorial-project-list">{hebrewProjects.map((project,index)=><a href={`/he/projects/${project.slug}/`} className="editorial-project" key={project.slug} data-motion-reveal><span className="project-number">0{index+1}</span><div className="editorial-project-figure"><ProjectFigure kind={project.slug} compact language="he"/></div><div className="editorial-project-title"><h3 dir="ltr">{project.name}</h3><span>פרויקט מחקר</span><p>{project.summary}</p></div><span className="editorial-arrow" aria-hidden="true">↗</span></a>)}</div><a className="signal-link" href="/he/projects/">לכל הפרויקטים וקוד המחקר ↗</a></section>

      <section className="editorial-publications section-shell" id="publications"><div className="editorial-section-head" data-motion-reveal><p className="section-index">פרסומים</p><h2>מחקר<br/><em>בספרות המדעית.</em></h2><p>יותר מ־50 פרסומים המאונדקסים ב־PubMed בתחומי בינה מלאכותית קלינית, נוירולוגיה, אפילפסיה ונוירוטכנולוגיה.</p></div><div className="editorial-publication-footer"><a className="signal-link" href="/he/publications/">לארכיון הפרסומים ולחיפוש לפי תחום ↗</a><a className="signal-link" href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ" lang="en" dir="ltr">Google Scholar ↗</a></div></section>

      <section className="editorial-contact" id="contact"><div className="section-shell"><p className="section-index">יצירת קשר</p><h2>בואו נבנה<br/><em>משהו בעל ערך.</em></h2><div className="editorial-contact-bottom"><p>לשיתופי פעולה במחקר, בבינה מלאכותית קלינית ובנוירוטכנולוגיה.</p><a href="mailto:agorensh@bidmc.harvard.edu" dir="ltr">agorensh@bidmc.harvard.edu ↗</a></div><div className="editorial-social"><a href="https://www.linkedin.com/in/alon-gorenshtein/" lang="en" dir="ltr">LinkedIn ↗</a><a href="https://orcid.org/0009-0000-7542-8608" lang="en" dir="ltr">ORCID ↗</a><a href="https://github.com/Alon-Gorenshtein" lang="en" dir="ltr">GitHub ↗</a><a href="https://scholar.google.com/citations?user=jwe8TyoAAAAJ" lang="en" dir="ltr">Google Scholar ↗</a></div></div></section>

      <footer className="site-footer section-shell"><span>אלון גורנשטיין, MD</span><span className="motto">Le vent se lève. Il faut tenter de vivre.</span><a href="#top">חזרה לראש העמוד ↑</a></footer>
    </main>
  </div>;
}
