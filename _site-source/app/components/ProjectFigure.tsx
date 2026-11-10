import { useId } from "react";

type ProjectKind = "inspire" | "literas" | "litbench" | "neuro-copilot";

const systems: Record<ProjectKind, { title: string; label: string; labelHe: string; input: [string, string]; engine: string; output: [string, string]; caption: string; captionHe: string }> = {
  inspire: {
    title: "INSPIRE · CLINICAL NEUROPHYSIOLOGY",
    label: "INSPIRE research workflow",
    labelHe: "תהליך INSPIRE — עיבוד נתוני בדיקות עצב ושריר",
    input: ["Clinical context", "NCS + EMG signals"],
    engine: "Specialist agents",
    output: ["Interpretation", "Generated report"],
    caption: "Conceptual workflow: clinical context and electrophysiology feed a multi-agent interpretation and generated report; clinician review remains separate.",
    captionHe: "תרשים מושגי: ההקשר הקליני והנתונים האלקטרופיזיולוגיים מזינים תהליך פירוש והפקת דוח מבוסס סוכנים; בדיקת הרופא היא שלב נפרד.",
  },
  literas: {
    title: "LITERAS · EVIDENCE RETRIEVAL",
    label: "LITERAS literature retrieval workflow",
    labelHe: "תהליך LITERAS — אחזור וסינתזה של ספרות",
    input: ["Research question", "PubMed literature"],
    engine: "Search · verify · review",
    output: ["Citation checks", "Draft review"],
    caption: "Conceptual workflow: a research question guides literature retrieval, citation checks, review, and synthesis. Researchers still verify sources and claims.",
    captionHe: "תרשים מושגי: שאלת המחקר מנחה חיפוש ספרות, בדיקת ציטוטים, סקירת טיוטה וסינתזה; יש לאמת את המקורות והטענות.",
  },
  litbench: {
    title: "LITBENCH · EVIDENCE-SYNTHESIS BENCHMARK",
    label: "LitBench evidence-synthesis benchmark map",
    labelHe: "מפת אמת המידה LitBench לסינתזה של ראיות",
    input: ["1,980 papers", "9,472 reviewed facts"],
    engine: "Question + evidence tests",
    output: ["Retrieve", "Synthesize · abstain"],
    caption: "Conceptual benchmark map based on the preprint corpus: 1,980 papers and 9,472 human-reviewed facts. Not study results.",
    captionHe: "מפת אמת מידה מושגית המבוססת על מאגר הפרה־פרינט: 1,980 מאמרים ו־9,472 עובדות שנבדקו בידי בני אדם; אין זה גרף תוצאות.",
  },
  "neuro-copilot": {
    title: "NEURO-COPILOT · EMERGENCY NEUROLOGY",
    label: "Neuro-Copilot emergency neurology study workflow",
    labelHe: "תהליך מחקר Neuro-Copilot לתמיכה בהחלטות בנוירולוגיה דחופה",
    input: ["Clinical presentation", "Retrospective record"],
    engine: "AI decision support",
    output: ["Admission prediction", "Expert comparison"],
    caption: "Conceptual study workflow: retrospective emergency neurology records were used to study AI-assisted predictions and expert agreement.",
    captionHe: "תרשים מחקר מושגי: רשומות רטרוספקטיביות מחדר המיון שימשו לבחינת תחזיות בסיוע בינה מלאכותית והשוואתן להערכת מומחים.",
  },
};

function FlowNode({ x, y, label, index }: { x: number; y: number; label: string; index: number }) {
  const parts = label.length > 18 ? label.split(" ") : [label];
  const lines = parts.length > 1 ? [parts.slice(0, Math.ceil(parts.length / 2)).join(" "), parts.slice(Math.ceil(parts.length / 2)).join(" ")] : parts;
  return <g className={`project-figure-node project-figure-node-${index}`} transform={`translate(${x} ${y})`}>
    <rect width="218" height="74" rx="12" />
    <circle cx="28" cy="37" r="12" />
    <path d={index % 2 ? "M22 37h12M28 31v12" : "M22 37h12M22 33h8M22 41h10"} />
    <text x="52" y={lines.length === 1 ? 43 : 34}>{lines.map((line, lineIndex) => <tspan key={line} x="52" dy={lineIndex ? 17 : 0}>{line}</tspan>)}</text>
  </g>;
}

export default function ProjectFigure({ kind, compact = false, language = "en" }: { kind: string; compact?: boolean; language?: "en" | "he" }) {
  const project = systems[kind as ProjectKind] ?? systems.inspire;
  const id = useId();
  const caption = language === "he" ? project.captionHe : project.caption;
  const hintId = `${id}-scroll-hint`;
  return <figure className={`project-figure${compact ? " project-figure-compact" : ""}${language === "he" ? " project-figure-he" : ""}`} aria-labelledby={`${id}-figure-label`} aria-describedby={!compact ? hintId : undefined} tabIndex={compact ? undefined : 0}>
    <span className="project-figure-label" id={`${id}-figure-label`} lang={language}>{language === "he" ? project.labelHe : project.label}</span>
    <svg lang="en" dir="ltr" viewBox="0 0 900 360" role="img" aria-labelledby={`${id}-svg-title ${id}-svg-description`} focusable="false">
      <title id={`${id}-svg-title`}>{project.title}</title>
      <desc id={`${id}-svg-description`}>{project.caption}</desc>
      <defs>
        <linearGradient id={`flow-${kind}`} x1="0" x2="1">
          <stop offset="0" stopColor="#84d8c7" stopOpacity=".42" />
          <stop offset=".5" stopColor="#b3c8ff" stopOpacity=".95" />
          <stop offset="1" stopColor="#e5bf7a" stopOpacity=".55" />
        </linearGradient>
        <radialGradient id={`core-${kind}`}>
          <stop stopColor="#8de2d3" stopOpacity=".24" />
          <stop offset="1" stopColor="#8de2d3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path className="project-figure-grid" d="M0 30H900M0 90H900M0 150H900M0 210H900M0 270H900M0 330H900M60 0V360M120 0V360M180 0V360M240 0V360M300 0V360M360 0V360M420 0V360M480 0V360M540 0V360M600 0V360M660 0V360M720 0V360M780 0V360M840 0V360" />
      <text className="project-figure-title" x="38" y="42">{project.title}</text>
      <ellipse className="project-figure-core-glow" cx="450" cy="186" rx="180" ry="135" fill={`url(#core-${kind})`} />
      <path className="project-figure-flow" d="M266 132C316 132 321 163 356 174M266 232C316 232 321 208 356 197M544 174C579 163 584 132 634 132M544 197C579 208 584 232 634 232" stroke={`url(#flow-${kind})`} />
      <path className="project-figure-flow project-figure-flow-dashed" d="M266 132C316 132 321 163 356 174M266 232C316 232 321 208 356 197M544 174C579 163 584 132 634 132M544 197C579 208 584 232 634 232" />
      <text className="project-figure-stage" x="72" y="90">INPUT</text>
      <text className="project-figure-stage" x="370" y="90">METHOD</text>
      <text className="project-figure-stage" x="644" y="90">OUTPUT</text>
      <FlowNode x={48} y={108} label={project.input[0]} index={0} />
      <FlowNode x={48} y={208} label={project.input[1]} index={1} />
      <g className="project-figure-engine" transform="translate(356 136)">
        <rect width="188" height="96" rx="18" />
        <circle cx="94" cy="37" r="20" />
        <path d="M83 37h22M94 26v22M85 28l18 18M103 28 85 46" />
        <text x="94" y="78" textAnchor="middle">{project.engine}</text>
      </g>
      <FlowNode x={634} y={108} label={project.output[0]} index={2} />
      <FlowNode x={634} y={208} label={project.output[1]} index={3} />
      <circle className="project-figure-pulse" cx="450" cy="186" r="3" />
    </svg>
    {!compact && <span className="project-figure-scroll-hint" id={hintId}>{language === "he" ? "גלילה אופקית לתרשים ←" : "Scroll to explore the diagram →"}</span>}
    <figcaption lang={language}>{caption}</figcaption>
  </figure>;
}
