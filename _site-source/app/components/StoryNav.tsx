"use client";

import { useEffect, useState, type CSSProperties } from "react";

type StoryLink = { id: string; label: string };

export default function StoryNav({ links, caption = "FIELD GUIDE", ariaLabel = "On this page" }: { links: StoryLink[]; caption?: string; ariaLabel?: string }) {
  const [activeId, setActiveId] = useState(links[0]?.id ?? "");

  useEffect(() => {
    const targets = links
      .map(({ id }) => document.getElementById(id))
      .filter((target): target is HTMLElement => target instanceof HTMLElement);
    if (!targets.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActiveId(visible.target.id);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="project-story-nav" aria-label={ariaLabel} style={{ "--story-progress": `${((links.findIndex(({ id }) => id === activeId) + 1) / Math.max(links.length, 1)) * 100}%` } as CSSProperties}>
      <span>{caption}</span>
      {links.map(({ id, label }, index) => (
        <a href={`#${id}`} key={id} aria-current={activeId === id ? "location" : undefined}>
          <i aria-hidden="true">0{index + 1}</i>{label}
        </a>
      ))}
    </nav>
  );
}
