import { useId } from "react";

type ProjectKind = "inspire" | "literas" | "litbench" | "neuro-copilot";
type Language = "en" | "he";

const content: Record<ProjectKind, { title: Record<Language, string>; label: Record<Language, string>; caption: Record<Language, string>; description: Record<Language, string> }> = {
  inspire: {
    title: { en: "INSPIRE · ELECTRODIAGNOSTIC REPORTING", he: "INSPIRE · פענוח וכתיבת דוחות אלקטרודיאגנוסטיים" },
    label: { en: "INSPIRE electrodiagnostic interpretation and reporting figure", he: "תרשים INSPIRE לפענוח ולכתיבת דוחות אלקטרודיאגנוסטיים" },
    caption: { en: "Conceptual study workflow: clinical context and NCS/EMG findings enter a specialist-agent interpretation step, followed by a draft report and clinician review. The drawing is not a patient trace or study result.", he: "תרשים מושגי: הקשר קליני וממצאי NCS/EMG עוברים שלב פרשנות בעזרת סוכנים מומחים, ולאחריו טיוטת דוח ובדיקת רופא. זה אינו תרשים של נתוני מטופל או תוצאות מחקר." },
    description: { en: "Patient context, nerve conduction and EMG findings lead to an agent-assisted interpretation, a draft report, and clinician review.", he: "הקשר קליני, בדיקות הולכה עצבית ו־EMG מובילים לפרשנות בסיוע סוכנים, לטיוטת דוח ולבדיקת רופא." },
  },
  literas: {
    title: { en: "LITERAS · BIOMEDICAL LITERATURE REVIEW", he: "LITERAS · סקירת ספרות ביו־רפואית" },
    label: { en: "LITERAS biomedical search, citation checking, and synthesis figure", he: "תרשים LITERAS לחיפוש ביו־רפואי, בדיקת ציטוטים וסינתזה" },
    caption: { en: "Conceptual workflow: a review question guides PubMed retrieval, reference checks, and synthesis into a draft. Researchers verify sources and claims. The drawing is not a performance result.", he: "תרשים מושגי: שאלת סקירה מנחה אחזור מ־PubMed, בדיקת מקורות וסינתזה לטיוטה. החוקרים מאמתים את המקורות והטענות. זה אינו תרשים תוצאות." },
    description: { en: "A review question becomes a search plan, retrieved PubMed records are checked, then evidence is synthesized into a draft for human verification.", he: "שאלת סקירה הופכת לתוכנית חיפוש, רשומות PubMed שנמצאו נבדקות, ואז הראיות מסונתזות לטיוטה לאימות אנושי." },
  },
  litbench: {
    title: { en: "LITBENCH · EPILEPSY EVIDENCE-SYNTHESIS BENCHMARK", he: "LitBench · אמת מידה לסינתזה של ראיות באפילפסיה" },
    label: { en: "LitBench benchmark tasks for evidence retrieval, synthesis, and abstention", he: "משימות LitBench לאחזור ראיות, סינתזה והימנעות מתשובה" },
    caption: { en: "Conceptual benchmark map: epilepsy papers and human-reviewed facts support retrieval and multi-paper questions, with separate checks for evidence synthesis and abstention when support is missing. Not study results.", he: "מפת אמת מידה מושגית: מאמרים על אפילפסיה ועובדות שנבדקו בידי בני אדם תומכים בשאלות אחזור ובשאלות מרובות־מאמרים, עם בדיקות נפרדות לסינתזה ולהימנעות מתשובה כשאין ראיות. אין זה תרשים תוצאות." },
    description: { en: "A paper corpus and human-reviewed facts feed single-paper and cross-paper tasks; the benchmark assesses retrieval, evidence synthesis, and abstention.", he: "מאגר מאמרים ועובדות שנבדקו בידי אדם מזינים משימות של מאמר יחיד ומספר מאמרים; אמת המידה בוחנת אחזור, סינתזה והימנעות מתשובה." },
  },
  "neuro-copilot": {
    title: { en: "NEURO-COPILOT · EMERGENCY NEUROLOGY STUDY", he: "Neuro-Copilot · מחקר בנוירולוגיה דחופה" },
    label: { en: "Neuro-Copilot retrospective emergency-neurology study figure", he: "תרשים מחקר Neuro-Copilot הרטרוספקטיבי בנוירולוגיה דחופה" },
    caption: { en: "Conceptual retrospective-study flow: emergency neurology records inform AI-assisted admission predictions, which are compared with expert decisions. This does not depict prospective clinical use or measured results.", he: "תרשים מחקר רטרוספקטיבי מושגי: רשומות מנוירולוגיה דחופה משמשות לבחינת תחזיות אשפוז בסיוע AI ולהשוואתן להחלטות מומחים. אין זה תיאור של שימוש קליני פרוספקטיבי או של תוצאות מדודות." },
    description: { en: "Retrospective emergency neurology records are structured into a case representation; AI-assisted admission predictions are then compared with expert decisions.", he: "רשומות רטרוספקטיביות מנוירולוגיה דחופה מובנות לייצוג מקרה; תחזיות אשפוז בסיוע AI מושוות להחלטות מומחים." },
  },
};

const labels: Record<Language, Record<string, string>> = {
  en: {
    context: "CLINICAL CONTEXT", nerve: "NCS FINDINGS", emg: "EMG FINDINGS", signals: "NCS + EMG SIGNALS", agents: "SPECIALIST AGENTS", draft: "DRAFT REPORT", clinician: "CLINICIAN REVIEW", plan: "SEARCH PLAN", pubmed: "PUBMED RECORDS", checks: "CITATION CHECKS", synthesis: "EVIDENCE SYNTHESIS", corpus: "EPILEPSY PAPERS", facts: "HUMAN-REVIEWED FACTS", retrieve: "RETRIEVAL", cross: "CROSS-PAPER SYNTHESIS", abstain: "ABSTENTION", records: "ED NEUROLOGY RECORDS", case: "STRUCTURED CASE", prediction: "ADMISSION PREDICTION", experts: "EXPERT DECISIONS", study: "RETROSPECTIVE STUDY", compare: "COMPARISON", evidence: "EVIDENCE", verify: "HUMAN VERIFICATION", nerveStage: "NERVE CONDUCTION", emgStage: "AND EMG FINDINGS", clinicalStage: "CLINICAL + SIGNAL CONTEXT", agentStage: "AGENT-GUIDED INTERPRETATION", reportStage: "REPORT · REVIEW", question: "QUESTION", retrieval: "RETRIEVAL", referenceChecks: "REFERENCE CHECKS", draftReview: "DRAFT + HUMAN VERIFICATION", reviewFlow: "EVIDENCE → SOURCE REVIEW → SYNTHESIS · HUMAN VERIFICATION", corpusStage: "CORPUS", annotatedStage: "ANNOTATED EVIDENCE", taskTypes: "TASK TYPES", evaluate: "EVALUATE", recordReview: "RECORD REVIEW", structuredInput: "STRUCTURED INPUT", predictionExpert: "PREDICTION ↔ EXPERT", notResult: "CONCEPTUAL STUDY WORKFLOW · NOT RESULTS", notPerf: "BENCHMARK TASKS · NOT SCORES",
  },
  he: {
    context: "הקשר קליני", nerve: "ממצאי NCS", emg: "ממצאי EMG", signals: "אותות NCS ו־EMG", agents: "סוכנים מומחים", draft: "טיוטת דוח", clinician: "בדיקת רופא", plan: "תוכנית חיפוש", pubmed: "רשומות PubMed", checks: "בדיקת ציטוטים", synthesis: "סינתזה של ראיות", corpus: "מאמרים על אפילפסיה", facts: "עובדות שנבדקו בידי אדם", retrieve: "אחזור", cross: "סינתזה בין מאמרים", abstain: "הימנעות מתשובה", records: "רשומות מיון נוירולוגי", case: "מקרה מובנה", prediction: "תחזית אשפוז", experts: "החלטות מומחים", study: "מחקר רטרוספקטיבי", compare: "השוואה", evidence: "ראיות", verify: "אימות אנושי", nerveStage: "בדיקות הולכה עצבית", emgStage: "וממצאי EMG", clinicalStage: "הקשר קליני ונתוני אות", agentStage: "פרשנות בסיוע סוכנים", reportStage: "דוח · בדיקת רופא", question: "שאלת סקירה", retrieval: "אחזור", referenceChecks: "בדיקת מקורות", draftReview: "טיוטה + אימות אנושי", reviewFlow: "ראיות ← בדיקת מקורות ← סינתזה · אימות אנושי", corpusStage: "מאגר מאמרים", annotatedStage: "ראיות מתויגות", taskTypes: "סוגי משימות", evaluate: "הערכה", recordReview: "סקירת רשומות", structuredInput: "קלט מובנה", predictionExpert: "תחזית ↔ מומחה", notResult: "תהליך מחקר מושגי · לא תוצאות", notPerf: "משימות אמת מידה · לא ציונים",
  },
};

function Grid() {
  return <path className="project-figure-grid" d="M0 30H900M0 90H900M0 150H900M0 210H900M0 270H900M0 330H900M60 0V360M120 0V360M180 0V360M240 0V360M300 0V360M360 0V360M420 0V360M480 0V360M540 0V360M600 0V360M660 0V360M720 0V360M780 0V360M840 0V360" />;
}

function InspireDiagram({ t }: { t: Record<string, string> }) {
  return <g className="diagram-inspire">
    <text className="diagram-text project-figure-title" x="36" y="38">INSPIRE / NEUROMUSCULAR ELECTRODIAGNOSTICS</text>
    <path className="diagram-signal diagram-signal-nerve" d="M38 98h27l8-7 7 14 7-7h35l9-5 8 6h20l8-28 8 55 10-34 9 12h25" />
    <path className="diagram-signal diagram-signal-emg" d="M38 161h29l8-4 7 5 7-12 7 18 8-5 6 4 7-20 8 27 8-11 9 2 6-14 8 20 10-6h42" />
    <text className="diagram-text project-figure-stage" x="40" y="76">{t.nerve} / {t.emg}</text>
    <g className="diagram-card" transform="translate(286 72)"><rect width="190" height="112" rx="13"/><circle cx="30" cy="30" r="10"/><path d="M24 30h12M30 24v12"/><text className="diagram-text" x="50" y="34">{t.context}</text><path d="M18 64h152"/><circle cx="30" cy="88" r="8"/><path d="M25 88h10"/><text className="diagram-text" x="50" y="92">{t.signals}</text></g>
    <path className="diagram-flow" d="M244 125H286M476 125H526M676 125H724" />
    <g className="diagram-core" transform="translate(526 84)"><path d="M0 41h26l10-17 15 34 14-34 14 17h21"/><circle cx="54" cy="41" r="40"/><text className="diagram-text" x="54" y="100" textAnchor="middle">{t.agents}</text></g>
    <g className="diagram-card diagram-card-small" transform="translate(724 72)"><rect width="138" height="112" rx="13"/><path d="M22 25h78M22 37h66M22 49h72"/><text className="diagram-text" x="18" y="76">{t.draft}</text><path d="M18 88h100"/><text className="diagram-text" x="18" y="103">{t.clinician}</text></g>
    <text className="project-figure-stage" x="38" y="238">{t.nerveStage}</text><text className="project-figure-stage" x="38" y="256">{t.emgStage}</text>
    <text className="project-figure-stage" x="286" y="238">{t.clinicalStage}</text><text className="project-figure-stage" x="526" y="238">{t.agentStage}</text><text className="project-figure-stage" x="724" y="238">{t.reportStage}</text>
    <path className="diagram-baseline" d="M38 287H862"/><text className="diagram-text project-figure-stage" x="38" y="317">{t.notResult}</text>
  </g>;
}

function LiterasDiagram({ t }: { t: Record<string, string> }) {
  return <g className="diagram-literas">
    <text className="diagram-text project-figure-title" x="36" y="38">LITERAS / BIOMEDICAL SEARCH &amp; REVIEW</text>
    <path className="diagram-route" d="M155 130H280M415 130H514M649 130H748" />
    <g className="diagram-step" transform="translate(42 86)"><rect width="112" height="86" rx="10"/><path d="M31 23h48M31 36h39M31 49h44M31 62h25"/><text className="diagram-text" x="56" y="112" textAnchor="middle">{t.plan}</text></g>
    <g className="diagram-papers" transform="translate(284 77)"><path d="M20 0h70l18 18v75H20zM90 0v18h18M0 18h70l18 18v74H0zM70 18v18h18M27 51h40M27 64h37M27 77h27"/><circle cx="96" cy="79" r="23"/><path d="m111 96 16 16"/><text className="diagram-text" x="57" y="126" textAnchor="middle">{t.pubmed}</text></g>
    <g className="diagram-check" transform="translate(520 82)"><circle cx="53" cy="45" r="43"/><path d="m31 44 15 15 30-33M53 88v21M34 109h38"/><text className="diagram-text" x="53" y="132" textAnchor="middle">{t.checks}</text></g>
    <g className="diagram-draft" transform="translate(750 76)"><path d="M0 0h92l18 18v102H0zM92 0v18h18M19 37h67M19 51h58M19 65h70M19 79h42"/><path d="m22 103 8 8 16-18"/><text className="diagram-text" x="52" y="145" textAnchor="middle">{t.synthesis}</text></g>
    <path className="diagram-stage-line" d="M42 240H862"/><circle className="diagram-node" cx="98" cy="240" r="5"/><circle className="diagram-node" cx="339" cy="240" r="5"/><circle className="diagram-node" cx="573" cy="240" r="5"/><circle className="diagram-node" cx="804" cy="240" r="5"/>
    <text className="project-figure-stage" x="42" y="272">{t.question}</text><text className="project-figure-stage" x="284" y="272">{t.retrieval}</text><text className="project-figure-stage" x="520" y="272">{t.referenceChecks}</text><text className="project-figure-stage" x="750" y="272">{t.draftReview.toUpperCase()}</text>
    <text className="diagram-text project-figure-stage" x="42" y="317">{t.reviewFlow}</text>
  </g>;
}

function LitbenchDiagram({ t }: { t: Record<string, string> }) {
  return <g className="diagram-litbench">
    <text className="diagram-text project-figure-title" x="36" y="38">LITBENCH / EPILEPSY EVIDENCE SYNTHESIS</text>
    <g className="diagram-corpus" transform="translate(38 75)"><rect width="174" height="132" rx="12"/><path d="M20 24h46l12 12v37H20zM66 24v12h12M30 46h37M30 58h29M90 24h46l12 12v37H90zM136 24v12h12M100 46h37M100 58h29M20 83h46l12 12v25H20zM66 83v12h12M30 103h37M90 83h46l12 12v25H90zM136 83v12h12M100 103h37"/><text className="diagram-text" x="87" y="153" textAnchor="middle">1,980 {t.corpus}</text></g>
    <path className="diagram-flow" d="M212 140h60M431 140h44M626 140h52"/>
    <g className="diagram-facts" transform="translate(272 87)"><rect width="160" height="106" rx="12"/><circle cx="30" cy="32" r="9"/><circle cx="60" cy="32" r="9"/><circle cx="90" cy="32" r="9"/><circle cx="120" cy="32" r="9"/><path d="m26 32 3 3 6-7M56 32l3 3 6-7M86 32l3 3 6-7M116 32l3 3 6-7M24 65h111M24 80h93"/><text className="diagram-text" x="80" y="126" textAnchor="middle">9,472 {t.facts}</text></g>
    <g className="diagram-tasks" transform="translate(475 70)"><rect width="151" height="48" rx="8"/><rect y="59" width="151" height="48" rx="8"/><rect y="118" width="151" height="48" rx="8"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="83" r="10"/><circle cx="24" cy="142" r="10"/><path d="m20 24 3 3 6-7M18 83h12M18 138l12 8M30 138l-12 8"/><text className="diagram-text" x="45" y="29">{t.retrieve}</text><text className="diagram-text" x="45" y="88">{t.cross}</text><text className="diagram-text" x="45" y="147">{t.abstain}</text></g>
    <g className="diagram-evaluate" transform="translate(680 91)"><path d="M0 50h61M61 50l23-33M61 50l23 33"/><circle cx="102" cy="17" r="16"/><circle cx="102" cy="83" r="16"/><path d="m94 17 6 6 11-13M95 83h14"/><text className="diagram-text" x="102" y="119" textAnchor="middle">{t.evaluate}</text></g>
    <text className="project-figure-stage" x="38" y="257">{t.corpusStage}</text><text className="project-figure-stage" x="272" y="257">{t.annotatedStage}</text><text className="project-figure-stage" x="475" y="257">{t.taskTypes}</text><text className="project-figure-stage" x="680" y="257">{t.compare.toUpperCase()}</text>
    <text className="diagram-text project-figure-stage" x="38" y="317">{t.notPerf}</text>
  </g>;
}

function NeuroCopilotDiagram({ t }: { t: Record<string, string> }) {
  return <g className="diagram-neurocopilot">
    <text className="diagram-text project-figure-title" x="36" y="38">NEURO-COPILOT / EMERGENCY DEPARTMENT STUDY</text>
    <path className="diagram-flow" d="M210 144h74M452 144h76M688 144h66" />
    <g className="diagram-record" transform="translate(42 80)"><rect width="168" height="130" rx="13"/><path d="M26 30h34l8 8v43H26zM60 30v8h8M78 44h58M78 57h50M26 92h110M26 106h78"/><circle cx="139" cy="29" r="12"/><path d="M139 22v14M132 29h14"/><text className="diagram-text" x="84" y="151" textAnchor="middle">{t.records}</text></g>
    <g className="diagram-model" transform="translate(284 83)"><circle cx="84" cy="61" r="54"/><circle cx="84" cy="61" r="34"/><circle cx="84" cy="61" r="13"/><path d="M84 7v25M84 90v25M30 61h25M113 61h25M46 23l18 18M104 81l18 18M122 23l-18 18M64 81 46 99"/><text className="diagram-text" x="84" y="151" textAnchor="middle">{t.case}</text></g>
    <g className="diagram-decision" transform="translate(528 72)"><rect width="160" height="61" rx="10"/><path d="M23 31h15l8-12 12 25 11-13h21"/><text className="diagram-text" x="80" y="84" textAnchor="middle">{t.prediction}</text><rect y="73" width="160" height="61" rx="10"/><path d="M22 105h28l9-9 9 17 11-15h25"/><text className="diagram-text" x="80" y="157" textAnchor="middle">{t.experts}</text></g>
    <g className="diagram-study" transform="translate(754 95)"><path d="M22 0h56l18 18v73H22zM78 0v18h18M38 39h40M38 53h40M38 67h29"/><circle cx="69" cy="92" r="17"/><path d="M69 83v18M60 92h18"/><text className="diagram-text" x="59" y="128" textAnchor="middle">{t.study}</text></g>
    <text className="project-figure-stage" x="42" y="257">{t.recordReview}</text><text className="project-figure-stage" x="284" y="257">{t.structuredInput}</text><text className="project-figure-stage" x="528" y="257">{t.predictionExpert}</text><text className="project-figure-stage" x="754" y="257">{t.compare.toUpperCase()}</text>
    <text className="diagram-text project-figure-stage" x="42" y="317">{t.study.toUpperCase()} · {t.notResult}</text>
  </g>;
}

export default function ProjectFigure({ kind, compact = false, language = "en" }: { kind: string; compact?: boolean; language?: Language }) {
  const id = useId();
  if (!(kind in content)) return null;
  const project = content[kind as ProjectKind];
  const text = labels[language];
  const figureId = `${id}-figure-label`;
  const titleId = `${id}-svg-title`;
  const descriptionId = `${id}-svg-description`;
  const Diagram = kind === "inspire" ? InspireDiagram : kind === "literas" ? LiterasDiagram : kind === "litbench" ? LitbenchDiagram : NeuroCopilotDiagram;
  return <figure className={`project-figure project-figure-${kind}${compact ? " project-figure-compact" : ""}${language === "he" ? " project-figure-he" : ""}`} aria-labelledby={figureId} tabIndex={compact ? undefined : 0}>
    <span className="project-figure-label" id={figureId} lang={language}>{project.label[language]}</span>
    <svg lang={language} dir="ltr" viewBox="0 0 900 360" role="img" aria-labelledby={`${titleId} ${descriptionId}`} focusable="false">
      <title id={titleId}>{project.title[language]}</title>
      <desc id={descriptionId}>{project.description[language]}</desc>
      <defs><linearGradient id={`${id}-flow`} x1="0" x2="1"><stop offset="0" stopColor="#75d8bd"/><stop offset=".52" stopColor="#9dc5ff"/><stop offset="1" stopColor="#e2c178"/></linearGradient></defs>
      <Grid />
      <Diagram t={text} />
    </svg>
    {!compact && <span className="project-figure-scroll-hint" lang={language}>{language === "he" ? "אפשר לגלול לרוחב כדי לעיין בתרשים ←" : "Scroll horizontally to explore the figure →"}</span>}
    {!compact && <figcaption lang={language}>{project.caption[language]}</figcaption>}
  </figure>;
}
