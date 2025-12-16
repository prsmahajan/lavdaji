import { ReactNode, useEffect, useState } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
  const location = useLocation();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorHoveringInteractive, setCursorHoveringInteractive] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastTrackedBucket = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const depth = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      const bucket = Math.floor(depth / 25) * 25;

      setScrollPercent(depth);

      if (bucket > lastTrackedBucket && bucket >= 25) {
        lastTrackedBucket = bucket;

        trackEvent("scroll_depth", {
          depth: bucket,
          path: window.location.pathname,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      if (!cursorVisible) {
        setCursorVisible(true);
      }
    };

    const handleLeave = () => {
      setCursorVisible(false);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button']");
      setCursorHoveringInteractive(Boolean(interactive));
    };

    const handleOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button']");
      if (!interactive) {
        setCursorHoveringInteractive(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [cursorVisible]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="fixed inset-x-0 top-0 z-30 h-[2px] bg-primary/40"
        style={{ transform: `scaleX(${Math.max(scrollPercent, 2) / 100})`, transformOrigin: "left" }}
        aria-hidden="true"
      />
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur-sm">
        <nav className="container flex items-center justify-between gap-4 py-2 md:py-3">
          <RouterNavLink
            to="/"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/80 hover:text-foreground"
          >
            <img
              src={logo}
              alt="prs. logo"
              className="h-10 md:h-12 lg:h-14 w-auto rounded-[3px] border border-border/80 bg-background object-contain"
            />
          </RouterNavLink>

          <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
            <div className="hidden items-center gap-5 text-xs md:flex md:text-sm">
              {navItems.map((item) => (
                <RouterNavLink
                  key={item.href}
                  to={item.href}
                  className="font-semibold text-foreground/90 hover:text-foreground"
                >
                  {item.label}
                </RouterNavLink>
              ))}
            </div>

            {theme && (
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="inline-flex h-8 items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 text-[11px] font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/60"
                      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                      <span>{theme === "dark" ? "Dark" : "Light"}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="max-w-xs text-xs leading-snug text-muted-foreground">
                      Overrides your system appearance preference. Use this to switch between light and dark.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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

      <main
        key={location.pathname}
        className="container pb-16 pt-10 md:pb-24 md:pt-16 max-w-3xl lg:max-w-4xl animate-fade-in"
      >
        {children}
      </main>

      <footer className="border-t bg-background/80 py-8 text-xs text-muted-foreground md:py-10">
        <div className="container max-w-3xl space-y-8 md:max-w-4xl md:grid md:grid-cols-[2fr,1.5fr,1.5fr] md:items-start md:gap-8 md:space-y-0">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">Portfolio</p>
            <p className="text-sm font-medium text-foreground">Paras Mahajan</p>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              Quietly building durable, automated revenue systems for founders, creators, and lean teams.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-2 text-xs">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/80">Navigate</p>
            <div className="flex flex-col gap-1 text-xs">
              {navItems.map((item) => (
                <RouterNavLink
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground/90 transition-colors"
                >
                  {item.label}
                </RouterNavLink>
              ))}
            </div>
          </nav>

          <div className="space-y-2 text-xs">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/80">Contact</p>
            <p className="text-muted-foreground text-[11px]">Based in India · Working with teams globally.</p>
            <p>
              <a
                href="mailto:paras@prsmahajan.com"
                className="text-foreground/90 text-[15px] hover:text-foreground underline-offset-2 hover:underline"
              >
                paras@prsmahajan.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919041162603"
                className="text-muted-foreground text-[15px] hover:text-foreground underline-offset-2 hover:underline"
              >
                +91 (904)11 62603
              </a>
            </p>
            <p className="pt-1 text-[11px] text-muted-foreground/80">
              Initiative for stray animals:{" "}
              <a
                href="https://theopendraft.com"
                className="underline underline-offset-2 hover:text-foreground"
                rel="noreferrer"
              >
                theopendraft.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-background/60 shadow-sm backdrop-blur-sm transition-[transform,opacity] duration-200 md:block"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorHoveringInteractive ? 1.35 : 1})`,
          opacity: cursorVisible ? 0.85 : 0,
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default Layout;
