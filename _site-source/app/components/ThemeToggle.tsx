"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "alon-theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = stored ? stored === "dark" : prefersDark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    setDark((current) => {
      const nextDark = !current;
      document.documentElement.dataset.theme = nextDark ? "dark" : "light";
      window.localStorage.setItem(STORAGE_KEY, nextDark ? "dark" : "light");
      return nextDark;
    });
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
