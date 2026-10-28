"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <img className="header-portrait" src="/alon-portrait.png" alt="Portrait of Alon Gorenshtein" />
        <a className="wordmark" href="#top" aria-label="Alon Gorenshtein home">
          AG<span className="wordmark-dot">.</span>
        </a>
      </div>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#work">Work</a>
        <a href="/publications/">Publications</a>
        <a href="/projects/">Projects</a>
      </nav>
      <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? "Close" : "Menu"}</button>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="/publications/" onClick={() => setMenuOpen(false)}>Publications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <ThemeToggle />
      <a className="nav-contact" href="#contact">
        Get in touch <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
