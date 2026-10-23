"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("chuby-zion-theme");
    const initialTheme: Theme =
      saved === "dark" || saved === "light" ? saved : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("chuby-zion-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      aria-pressed={theme === "dark"}
      className="shrink-0 rounded-full border border-[#C6A66A] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#173D30] transition hover:bg-[#E4E8DC] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
      <span className="ml-1.5">{ready ? (theme === "light" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}
