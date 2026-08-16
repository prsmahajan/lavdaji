import { ReactNode, useEffect, useState } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { CascadeText } from "@/components/ui/cascade-text";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { applyTheme, getStoredTheme, Theme } from "@/lib/theme";
import { trackEvent } from "@/lib/analytics";
import { Menu, X } from "lucide-react";


const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/offers", label: "Offers" },
  { href: "/proof", label: "Proof" },
  { href: "/process", label: "Process" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

const AnimatedNavLink = ({
  to,
  label,
  className,
}: {
  to: string;
  label: string;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <RouterNavLink
      to={to}
      className={
        className !== undefined
          ? className
          : ({ isActive }: { isActive: boolean }) =>
              `font-semibold leading-none ${isActive ? "text-foreground" : "text-foreground/90"}`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
    >
      <CascadeText text={label} isHovered={hovered} />
    </RouterNavLink>
  );
};

const AnimatedMobileNavLink = ({
  to,
  label,
  index,
  onClick,
}: {
  to: string;
  label: string;
  index: number;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className={({ isActive }) =>
        `flex items-baseline gap-4 border-b border-foreground/10 py-4 transition-colors ${
          isActive ? "text-foreground" : "text-foreground/40 hover:text-foreground"
        }`
      }
    >
      <span className="w-7 shrink-0 text-xs text-foreground/30">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-heading text-6xl font-bold uppercase leading-none tracking-tight">
        <CascadeText text={label} isHovered={hovered} staggerDelay={20} duration={220} />
        <span className="sr-only">{label}</span>
      </span>
    </RouterNavLink>
  );
};

const FooterSectionLabel = ({ children }: { children: string }) => (
  <span className="relative inline-block pb-2">
    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground/80">{children}</span>
    <svg
      viewBox="0 0 300 8"
      preserveAspectRatio="none"
      className="absolute -bottom-0.5 left-0 h-[4px] w-full text-accent"
      aria-hidden="true"
    >
      <path d="M 1 2 Q 150 7 299 2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  </span>
);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  // The inline script in index.html has already put the right class on <html>,
  // so read the resolved theme back out rather than re-deriving it in an effect.
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (typeof document === "undefined") return null;
    return getStoredTheme() ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
  });
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(location.pathname);

  if (lastPathname !== location.pathname) {
    setLastPathname(location.pathname);
    setMenuOpen(false);
  }

  const versionBase = location.pathname.startsWith("/v1")
    ? "/v1"
    : location.pathname.startsWith("/v2")
      ? "/v2"
      : "";
  const withVersion = (href: string) => {
    if (!versionBase) return href;
    if (href === "/") return versionBase;
    return `${versionBase}${href}`;
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        trackEvent("scroll_depth", { depth: bucket, path: window.location.pathname });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="fixed inset-x-0 top-0 z-30 h-[3px] origin-left bg-gradient-to-r from-background/95 via-muted/75 to-muted-foreground/80 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${Math.max(scrollPercent, 2) / 100})` }}
        aria-hidden="true"
      />

      {/* Full-screen mobile menu — always dark overlay regardless of theme */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          {/* Header row */}
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">prs.</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center text-foreground/60 hover:text-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <AnimatedMobileNavLink
                key={item.href}
                to={withVersion(item.href)}
                label={item.label}
                index={i}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </nav>

        </div>
      )}

      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur-xl">
        <nav className="container flex items-center justify-between gap-4 py-2 md:py-3">
          <RouterNavLink
            to={withVersion("/")}
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/80 hover:text-foreground no-grain"
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
                <AnimatedNavLink
                  key={item.href}
                  to={withVersion(item.href)}
                  label={item.label}
                />
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

            {/* Book call — desktop */}
            <Button
              type="button"
              variant="cta"
              size="sm"
              className="hidden md:inline-flex"
              data-cal-link="prsmahajan/30"
              data-cal-namespace="30"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => trackEvent("schedule_cta_click", { location: "header" })}
            >
              Book call
            </Button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border/80 text-foreground/80 hover:text-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <main
        key={location.pathname}
        className="container max-w-6xl pb-16 pt-10 md:pb-24 md:pt-16 animate-fade-in"
      >
        {children}
      </main>

      <footer className="border-t bg-background/80 py-10 text-muted-foreground">
        <div className="container max-w-3xl space-y-8 md:max-w-4xl md:grid md:grid-cols-[2fr,1.5fr,1.5fr] md:items-start md:gap-8 md:space-y-0">
          <div className="space-y-3">
            <FooterSectionLabel>Agency</FooterSectionLabel>
            <p className="text-base font-medium text-foreground">Paras Mahajan</p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Strategy-led marketing support across audits, Meta ads, GA4, content, branding, and automation.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-3">
            <FooterSectionLabel>Navigate</FooterSectionLabel>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <AnimatedNavLink
                  key={item.href}
                  to={withVersion(item.href)}
                  label={item.label}
                  className="text-sm text-muted-foreground hover:text-foreground/90"
                />
              ))}
            </div>
          </nav>

          <div className="space-y-3">
            <FooterSectionLabel>Contact</FooterSectionLabel>
            <p className="text-sm text-muted-foreground">Based in India · Working with teams globally.</p>
            <p>
              <a
                href="mailto:paras@prsmahajan.com"
                className="text-base font-medium text-foreground/90 hover:text-foreground underline-offset-2 hover:underline"
              >
                paras@prsmahajan.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919041162603"
                className="text-base text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
              >
                +91 (904)11 62603
              </a>
            </p>
            <p className="pt-1 text-xs text-muted-foreground/80">
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

        <div className="container max-w-3xl md:max-w-4xl mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground/80">
            <RouterNavLink
              to={withVersion("/privacy-policy")}
              className="hover:text-foreground underline-offset-2 hover:underline"
            >
              Privacy Policy
            </RouterNavLink>
            <RouterNavLink
              to={withVersion("/terms-of-service")}
              className="hover:text-foreground underline-offset-2 hover:underline"
            >
              Terms of Service
            </RouterNavLink>
            <RouterNavLink
              to={withVersion("/refund-policy")}
              className="hover:text-foreground underline-offset-2 hover:underline"
            >
              Refund and Cancellation Policy
            </RouterNavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
