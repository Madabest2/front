/**
 * Design System Services
 */

import type { Theme } from "../types";

export const themeService = {
  getTheme(): Theme {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  },

  setTheme(theme: Theme): void {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);

    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  },
};
