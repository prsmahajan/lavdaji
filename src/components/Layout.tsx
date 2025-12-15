import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/what-i-build", label: "What I Build" },
  { href: "/proof", label: "Proof" },
  { href: "/offers", label: "Offers" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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

          <div className="flex flex-1 items-center justify-end gap-6">
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

            <Button
              type="button"
              variant="cta"
              size="sm"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
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
