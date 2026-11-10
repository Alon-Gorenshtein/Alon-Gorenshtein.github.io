"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader({ languageHref = "/he/", language = "en" }: { languageHref?: string; language?: "en" | "he" }) {
  const labels = language === "he"
    ? { about: "אודות", research: "מחקר", projects: "פרויקטים", publications: "פרסומים", contact: "יצירת קשר", menu: "תפריט", close: "סגירה", language: "English", languageCode: "en", getInTouch: "יצירת קשר" }
    : { about: "About", research: "Research", projects: "Projects", publications: "Publications", contact: "Contact", menu: "Menu", close: "Close", language: "עברית", languageCode: "he", getInTouch: "Get in touch" };
  const basePath = language === "he" ? "/he" : "";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    let frame = 0;
    const syncProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(Math.min(1, Math.max(0, progress))));
    };
    const syncScrollState = () => {
      const nextScrolled = window.scrollY > 12;
      setScrolled((current) => current === nextScrolled ? current : nextScrolled);
      if (typeof window.requestAnimationFrame === "function" && !frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          syncProgress();
        });
      } else if (typeof window.requestAnimationFrame !== "function") {
        syncProgress();
      }
    };
    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);
    return () => {
      window.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
      if (frame && typeof window.cancelAnimationFrame === "function") window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--scroll-progress");
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
      <span className="scroll-progress" aria-hidden="true" />
      <div className="header-identity">
        <img className="header-portrait" src="/alon-portrait.png" alt={language === "he" ? "דיוקנו של אלון גורנשטיין" : "Portrait of Alon Gorenshtein"} />
        <a className="wordmark" href={`${basePath}/#top`} aria-label={language === "he" ? "אלון גורנשטיין — דף הבית" : "Alon Gorenshtein home"}>
          AG<span className="wordmark-dot">.</span>
        </a>
      </div>
      <nav className="site-nav" aria-label={language === "he" ? "ניווט ראשי" : "Primary navigation"}>
        <a href={`${basePath}/#about`}>{labels.about}</a>
        <a href={`${basePath}/#research`}>{labels.research}</a>
        <a href={`${basePath}/#projects`}>{labels.projects}</a>
        <a href={language === "he" ? "/he/publications/" : "/publications/"}>{labels.publications}</a>
      </nav>
      <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? labels.close : labels.menu}</button>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label={language === "he" ? "ניווט בנייד" : "Mobile navigation"} hidden={!menuOpen}>
        <a href={`${basePath}/#about`} onClick={() => setMenuOpen(false)}>{labels.about}</a>
        <a href={`${basePath}/#research`} onClick={() => setMenuOpen(false)}>{labels.research}</a>
        <a href={`${basePath}/#projects`} onClick={() => setMenuOpen(false)}>{labels.projects}</a>
        <a href={language === "he" ? "/he/publications/" : "/publications/"} onClick={() => setMenuOpen(false)}>{labels.publications}</a>
        <a href={`${basePath}/#contact`} onClick={() => setMenuOpen(false)}>{labels.contact}</a>
      </nav>
      <a className="language-link" href={languageHref} lang={labels.languageCode} dir={language === "he" ? "ltr" : "rtl"}>{labels.language}</a>
      <ThemeToggle language={language} />
      <a className="nav-contact" href={`${basePath}/#contact`}>
        {labels.getInTouch} <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
