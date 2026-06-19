import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";
import { showInfoToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

type CalNamespace = (
  action: "inline" | "ui",
  options: {
    elementOrSelector?: string;
    config?: { layout: "month_view" };
    calLink?: string;
    hideEventTypeDetails?: boolean;
    layout?: "month_view";
  },
) => void;

const covered = [
  "Your ads: what's live, what's converting, and what's quietly burning through budget",
  "Your website: what people do when they land and why they leave without getting in touch",
  "Analytics: whether the numbers you're tracking are telling you the truth",
  "Your offer: whether someone can understand what you do in the first 10 seconds",
  "Follow-up: how fast leads hear from you and what happens after they enquire",
];

const Schedule = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window as unknown as {
      Cal?: {
        ns?: Record<string, CalNamespace>;
      };
    };

    const initInline = () => {
      if (!w.Cal || !w.Cal.ns || !w.Cal.ns["30"]) return;
      try {
        w.Cal.ns["30"]("inline", {
          elementOrSelector: "#my-cal-inline-30",
          config: { layout: "month_view" },
          calLink: "prsmahajan/30",
        });
        w.Cal.ns["30"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (error) {
        console.error("Error initializing Cal inline embed", error);
      }
    };

    if (w.Cal && w.Cal.ns && w.Cal.ns["30"]) {
      initInline();
      return;
    }

    const interval = window.setInterval(() => {
      if (w.Cal && w.Cal.ns && w.Cal.ns["30"]) {
        window.clearInterval(interval);
        initInline();
      }
    }, 250);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <Seo
        title="Book a Free Call | 30-Minute Marketing Review"
        description="Book a free 30-minute call to find out exactly where your marketing is losing money or leads. No obligation."
        path="/schedule"
      />
      <section className="space-y-5">
        <h1>
          <span className="relative inline pb-1">
            Book a free 30-minute call
            <svg
              viewBox="0 0 300 8"
              preserveAspectRatio="none"
              className="pointer-events-none absolute bottom-0 left-0 h-[5px] w-full text-accent"
              aria-hidden="true"
            >
              <path
                d="M 1 2 Q 150 7 299 2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          A free call where we go through your marketing setup together. By the end you'll know exactly what the
          problem is, whether you work with us or not.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-5">
          <Card className="p-6 space-y-4">
            <p className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">
              What we cover on the call
            </p>
            <ul className="space-y-3">
              {covered.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-1 border-t border-border/60 space-y-3">
              <p className="text-sm text-muted-foreground">
                By the end you'll have a straight answer on what to fix first. No pitch, no pressure.
              </p>
              <Button
                type="button"
                variant="cta"
                size="lg"
                data-cal-link="prsmahajan/30"
                data-cal-namespace="30"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => {
                  trackEvent("schedule_cta_click", { location: "schedule_page_main" });
                  showInfoToast({
                    title: "Opening calendar",
                    description: "Pick a time that works; you'll get an instant calendar invite.",
                  });
                }}
              >
                Pick a time
              </Button>
              <p className="text-xs text-muted-foreground">
                Available slots shown in your local time. Calendar invite sent immediately after booking.
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6 space-y-4 self-start">
          <p className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Good to know</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>No prep needed. Just show up and we'll work through things live together.</p>
            <p>
              If nothing needs urgent attention, we'll tell you that. We're not going to recommend work that isn't
              warranted.
            </p>
            <p>
              If there is a clear problem, we'll explain exactly what fixing it involves and what it will cost before
              you decide anything.
            </p>
          </div>
        </Card>
      </section>

      <section className="mt-8">
        <div id="my-cal-inline-30" className="min-h-[520px] w-full overflow-x-hidden rounded-lg border" />
      </section>
    </Layout>
  );
};

export default Schedule;
