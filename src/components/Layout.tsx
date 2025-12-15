import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { applyTheme, getStoredTheme, Theme } from "@/lib/theme";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/proof", label: "Proof" },
  { href: "/process", label: "Process" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const stored = getStoredTheme();
    const hasDarkClass = document.documentElement.classList.contains("dark");

    let initial: Theme = hasDarkClass ? "dark" : "light";

    if (stored) {
      initial = stored;
      applyTheme(initial);
    }

    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur-sm">
        <nav className="container flex h-16 items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/80 hover:text-foreground"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-xs font-semibold">
              P
            </span>
            <span className="hidden text-sm md:inline">Paras Mahajan</span>
          </a>

          <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
            <div className="hidden items-center gap-5 text-xs md:flex md:text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-semibold text-foreground/90 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {theme && (
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-8 items-center rounded-full border border-border px-3 text-xs text-muted-foreground hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/60"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                <span>{theme === "dark" ? "Dark" : "Light"}</span>
              </button>
            )}

            <Button
              type="button"
              variant="cta"
              size="sm"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
              onClick={() =>
                trackEvent("schedule_cta_click", {
                  location: "header",
                })
              }
            >
              Schedule a conversation
            </Button>
          </div>
        </nav>
      </header>

      <main className="container pb-16 pt-10 md:pb-24 md:pt-16 max-w-3xl lg:max-w-4xl">
        {children}
      </main>

      <footer className="border-t bg-background/80 py-6 text-xs text-muted-foreground md:py-8">
        <div className="container max-w-3xl space-y-1 md:flex md:max-w-4xl md:items-center md:justify-between md:space-y-0">
          <p>Quietly building durable, automated revenue systems.</p>
          <p>
            Initiative for stray animals: <a href="https://theopendraft.com">theopendraft.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
