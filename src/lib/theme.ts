export type Theme = "light" | "dark";

export const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  root.classList.add("theme-transition");
  setTimeout(() => {
    root.classList.remove("theme-transition");
  }, 2000);

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // ignore
  }
};

export const getStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem("theme");
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
};
