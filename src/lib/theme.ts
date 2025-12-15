export type Theme = "light" | "dark";

export const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
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
