import { useEffect, useState } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileSearch,
  Megaphone,
  Palette,
  Route,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaqItem } from "@/components/FaqItem";
import { trackEvent } from "@/lib/analytics";

const leaks = [
  "Spending on ads but barely getting calls",
  "Posting content that gets likes but no enquiries",
  "Leads come in but nothing converts to sales",
  "No idea which part of your marketing is actually working",
];

const auditItems = [
  "Your ads: what's live, what's converting, and what's burning budget",
  "Your website: what people do when they land and why they leave",
  "Analytics: whether the numbers you're looking at can be trusted",
  "Your offer message: does someone understand what you do in 10 seconds",
  "Content: what's bringing real interest versus what's just keeping you busy",
  "Follow-up: how fast leads hear from you and what happens after",
];

const lanes = [
  {
    icon: FileSearch,
    title: "Marketing Audit",
    body: "We look at your whole setup before touching anything, so we know what's actually costing you leads or money.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    body: "Facebook and Instagram ads that bring in real enquiries, not just impressions and link clicks.",
  },
  {
    icon: BarChart3,
    title: "Analytics and Tracking",
    body: "Proper tracking setup so you can see which ads and pages are actually bringing in customers.",
  },
  {
    icon: Palette,
    title: "Content and Branding",
    body: "Clearer messaging so people understand your offer fast and trust it sooner.",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "Systems that handle lead routing, follow-up, and reporting so you stop doing it manually.",
  },
];

const auditOutcomes = [
  {
    number: "01",
    title: "You'll know what's costing you",
    body: "A straight answer on where your marketing is leaking money or losing leads.",
  },
  {
    number: "02",
    title: "You'll know what to fix first",
    body: "A short list of actual changes, ranked by what will make the biggest difference.",
  },
  {
    number: "03",
    title: "You'll know what it costs to fix it",
    body: "We tell you what fixing it involves, how long it takes, and what it costs. Before you commit to anything.",
  },
];

const faqItems = [
  {
    question: "Is this a full-service agency?",
    answer:
      "No. We don't try to do everything at once. We start by finding what's actually holding you back, then fix that first. It might be ads, tracking, messaging, or follow-up. We don't know until we look.",
  },
  {
    question: "Why start with an audit?",
    answer:
      "Because guessing is expensive. The audit tells us whether the real problem is your traffic, your website, your offer message, or what happens after someone shows interest. Fixing the wrong thing first wastes money.",
  },
  {
    question: "Can you do the actual work after the audit?",
    answer:
      "Yes. If we find something worth fixing, we'll tell you exactly what it involves and let you decide whether to go ahead. No pressure either way.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Service businesses, coaches, consultants, and small teams who have a real offer but feel like their marketing isn't producing what it should.",
  },
];

const AuditPreview = () => (
  <div className="h-full rounded-lg border bg-background p-6 shadow-sm space-y-5 agency-grid">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      What we cover in 30 minutes
    </p>
    <ul className="space-y-3.5">
      {auditItems.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="pt-2 border-t border-border/60">
      <p className="text-xs text-muted-foreground">
        30 minutes. You leave with a clear action plan, no commitment needed.
      </p>
    </div>
  </div>
);

const V2 = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const location = useLocation();
  const versionBase = location.pathname.startsWith("/v2") ? "/v2" : "";
  const offersHref = `${versionBase}/offers`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest?.('[data-faq-card="true"]')) return;
      setOpenQuestion(null);
    };

    if (openQuestion) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openQuestion]);

  return (
    <Layout>
      <Seo
        title="Paras Mahajan | Find What's Costing You Leads"
        description="We look at your ads, website, content, and follow-up, find what's wasting money or losing leads, then fix the most important problem first."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-lg border bg-background shadow-sm">
        <div className="absolute inset-0 agency-grid opacity-60" aria-hidden="true" />
        <div className="relative grid gap-8 p-5 md:grid-cols-[1.1fr,0.9fr] md:p-8 lg:p-10">
          <div className="flex min-h-[500px] flex-col justify-between gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                For service businesses spending on marketing but not getting results
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-balance">
                  You're spending money on marketing. Why aren't the phones ringing?
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground md:text-xl">
                  We find exactly what's costing you clients and fix it. Ads, website, content, follow-up: we look
                  at all of it and tell you what to fix first.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  variant="cta"
                  size="lg"
                  data-cal-link="prsmahajan/30"
                  data-cal-namespace="30"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => trackEvent("schedule_cta_click", { location: "v2_hero" })}
                >
                  Book call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-transparent hover:text-foreground">
                  <RouterNavLink to={offersHref}>View offers</RouterNavLink>
                </Button>
              </div>
            </div>

            <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {leaks.map((leak) => (
                <div key={leak} className="rounded-md border bg-background/80 px-3 py-2">
                  {leak}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <AuditPreview />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["01", "We look at everything first", "Before we touch anything, we go through your whole setup. Most problems are not where you think they are."],
          ["02", "We pick one thing to fix", "We find the single biggest drag on your results and fix just that. Not a list of 15 things. One thing, done properly."],
          ["03", "We build on what's working", "Once one thing is solid, we improve the next layer. That's how results compound over time."],
        ].map(([number, title, body]) => (
          <Card key={title} className="p-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{number}</p>
            <h3>{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </Card>
        ))}
      </section>

      {/* Services */}
      <section className="mt-16 border-t pt-10 md:mt-24 md:pt-14">
        <div className="grid gap-8 md:grid-cols-[0.7fr,1.3fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">What we handle</p>
            <h2>We handle all of this. Just not all at once.</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Every business has one area costing them the most right now. We find it and start there. Everything
              else follows once the first fix is working.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {lanes.map((lane) => {
              const Icon = lane.icon;
              return (
                <Card key={lane.title} className="group p-5">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md border bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3>{lane.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{lane.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile-only Book call after services */}
      <div className="mt-10 md:hidden">
        <button
          type="button"
          className="w-full border-2 border-foreground bg-transparent py-4 text-base font-semibold text-foreground"
          data-cal-link="prsmahajan/30"
          data-cal-namespace="30"
          data-cal-config='{"layout":"month_view"}'
          onClick={() => trackEvent("schedule_cta_click", { location: "v2_services_mobile" })}
        >
          Book call
        </button>
      </div>

      {/* Audit CTA */}
      <section className="mt-16 border-t pt-10 md:mt-24 md:pt-14">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Start here</p>
            <h2>Start with the audit. No commitment needed.</h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Book a free 30-minute call and we'll go through your marketing together. By the end you'll know exactly
              where the problem is, whether you work with us or not.
            </p>
            <Button
              type="button"
              variant="cta"
              size="lg"
              data-cal-link="prsmahajan/30"
              data-cal-namespace="30"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => trackEvent("schedule_cta_click", { location: "v2_audit_section" })}
            >
              Book call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="space-y-3">
            {auditOutcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="flex items-start gap-4 rounded-md border bg-background p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                  {outcome.number}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{outcome.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{outcome.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="mt-16 border-t pt-10 md:mt-24 md:pt-14"
        aria-labelledby="home-faq"
        onClick={() => setOpenQuestion(null)}
      >
        <div className="grid gap-8 md:grid-cols-[0.65fr,1.35fr]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">FAQ</p>
            <h2 id="home-faq">Common questions, straight answers.</h2>
          </div>
          <div className="space-y-4" onClick={(e) => e.stopPropagation()}>
            {faqItems.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestion === item.question}
                onToggle={() => setOpenQuestion((current) => (current === item.question ? null : item.question))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-16 md:mt-24">
        <div className="flex flex-col gap-5 rounded-lg border bg-background p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <Route className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
            <h2>Not sure what's holding your marketing back?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
              Book a free 30-minute call. We go through your current setup together and give you a straight answer on
              where the problem is.
            </p>
          </div>
          <Button
            type="button"
            variant="cta"
            size="lg"
            data-cal-link="prsmahajan/30"
            data-cal-namespace="30"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => trackEvent("schedule_cta_click", { location: "v2_footer_cta" })}
          >
            Book call
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default V2;
