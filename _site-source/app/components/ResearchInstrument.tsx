"use client";
import { useState } from "react";

const fields = [
  { name: "Clinical AI safety", question: "How can we evaluate clinical AI against what patients and clinicians need?", example: "How to meaningfully evaluate AI in clinical medicine", source: "Nature Medicine · 2026", paper: "https://doi.org/10.1038/s41591-026-04350-5", href: "/research/clinical-ai-safety/" },
  { name: "Neurophysiology", question: "How can AI support interpretation of nerve conduction studies and EMG?", example: "INSPIRE: agent-guided interpretation and reporting", source: "Clinical Neurophysiology · 2025", paper: "https://doi.org/10.1016/j.clinph.2025.2110792", href: "/research/clinical-neurophysiology/" },
  { name: "Brain–computer interfaces", question: "How can language models support communication and control through neural interfaces?", example: "Large language models integrated into brain–computer interfaces", source: "Biomedical Physics & Engineering Express · 2026", paper: "https://doi.org/10.1088/2057-1976/ae737b", href: "/research/brain-computer-interfaces/" },
  { name: "Neurocritical care", question: "How does command-following return after acute brain injury?", example: "The unsteady return of bedside motor command-following", source: "Neurocritical Care · 2026", paper: "https://doi.org/10.1007/s12028-026-02624-x", href: "/research/neurocritical-care/" },
];
export default function ResearchInstrument() {
  const [selected, setSelected] = useState(0);
  const field = fields[selected];
  return <section className="research-instrument" aria-labelledby="map-title">
    <div className="instrument-header"><span id="map-title">RESEARCH EXPLORER</span><span>CHOOSE A FIELD</span></div>
    <div className="instrument-controls" aria-label="Research fields">{fields.map((item,i)=><button type="button" key={item.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span aria-hidden="true">0{i+1}</span>{item.name}</button>)}</div>
    <div className="instrument-display" aria-live="polite">
      <p className="instrument-label">THE QUESTION</p><p className="instrument-question">{field.question}</p>
      <div className="instrument-evidence"><span className="instrument-label">RELATED WORK · {field.source}</span><a href={field.paper}>{field.example} ↗</a></div>
      <a className="instrument-explore" href={field.href}>Explore the research area ↗</a>
    </div>
  </section>;
}
