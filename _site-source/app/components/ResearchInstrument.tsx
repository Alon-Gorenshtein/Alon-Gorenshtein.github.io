"use client";
import { useState } from "react";

const fields = [
  { name: "AI safety", detail: "Evaluating clinical AI in the context of real people and decisions.", href: "/research/clinical-ai-safety/", node: "safety" },
  { name: "Neurotechnology", detail: "Exploring language models and brain–computer interfaces.", href: "/research/brain-computer-interfaces/", node: "neurotech" },
  { name: "Neurocritical care", detail: "Studying recovery and uncertainty after acute brain injury.", href: "/research/neurocritical-care/", node: "critical" },
];
export default function ResearchInstrument() {
  const [selected, setSelected] = useState(0);
  const field = fields[selected];
  return <div className="research-instrument" aria-label="Explore research areas">
    <div className="instrument-header"><span>RESEARCH MAP</span><span>SELECT AN AREA ↓</span></div>
    <div className={`instrument-display instrument-${field.node}`}>
      <svg viewBox="0 0 380 115" aria-hidden="true" focusable="false"><path className="instrument-path" d="M25 57 H115 L156 22 H224 L265 57 H355 M115 57 L156 92 H224 L265 57"/><circle className="instrument-node node-safety" cx="156" cy="22" r="5"/><circle className="instrument-node node-neurotech" cx="224" cy="57" r="5"/><circle className="instrument-node node-critical" cx="156" cy="92" r="5"/><circle className="instrument-core" cx="224" cy="57" r="19"/></svg>
      <div className="instrument-copy"><strong>{field.name}</strong><p>{field.detail}</p><a href={field.href}>Explore this area ↗</a></div>
    </div>
    <div className="instrument-controls" aria-label="Research areas">{fields.map((item,i)=><button type="button" key={item.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{item.name}</button>)}</div>
  </div>;
}
