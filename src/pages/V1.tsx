import { NavLink as RouterNavLink } from "react-router-dom";
import { ArrowRight, Bot, FileSearch, Megaphone, Workflow } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

const lanes = [
  {
    icon: FileSearch,
    title: "Audit and Strategy",
    body: "Review the offer, funnel, website, channels, tracking, and message before recommending execution.",
  },
  {
    icon: Megaphone,
    title: "Acquisition and Measurement",
    body: "Improve Meta ads, GA4 events, conversion tracking, landing pages, and reporting together.",
  },
  {
    icon: Workflow,
    title: "Content, Brand, and Automation",
    body: "Build clearer content systems, sharper messaging, and cleaner operational workflows.",
  },
];

const offers = [
  {
    title: "Marketing Audit",
    body: "A focused review of your offer, funnel, ads, analytics, content, and follow-up.",
    points: ["60-90 minute working session", "Tracking and GA4 gap check", "3-5 prioritized recommendations"],
  },
  {
    title: "Growth Sprint",
    body: "A short implementation sprint around one measurable bottleneck.",
    points: ["Defined success metric", "Campaign, tracking, or workflow buildout", "Testing and handover"],
  },
  {
    title: "Ongoing Growth Support",
    body: "Monthly support for teams that want consistent execution without disconnected vendors.",
    points: ["Meta ads iteration", "GA4 and conversion checks", "Content and automation improvements"],
  },
];

const V1 = () => {
  return (
    <Layout>
      <section className="space-y-8 md:space-y-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Marketing audit, paid growth, tracking, and automation
          </p>
          <h1>Growth systems for brands that need sharper marketing, not more random activity.</h1>
          <p className="text-base text-muted-foreground md:text-lg">
            I help service businesses, creators, and lean teams find the real bottleneck, then fix the parts that
            actually move revenue: ads, analytics, content, brand positioning, and automation.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-3 text-sm text-muted-foreground">
          <p>
            Most teams do not need ten disconnected services. They need a clear read on what is leaking attention,
            trust, leads, or follow-up.
          </p>
          <p>
            The work starts with diagnosis. From there, we build the smallest useful system around the gap: Meta ads,
            GA4 and tracking, content operations, brand clarity, or automation where it reduces manual work.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
          <Button
            type="button"
            variant="cta"
            size="lg"
            data-cal-link="prsmahajan/30"
            data-cal-namespace="30"
            data-cal-config='{"layout":"month_view"}'
            onClick={() =>
              trackEvent("schedule_cta_click", {
                location: "v1_hero",
              })
            }
          >
            Book a marketing audit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button asChild variant="outline" size="lg">
            <RouterNavLink to="/v1/offers">View offers</RouterNavLink>
          </Button>
        </div>
      </section>

      <section className="mt-12 border-t pt-6 md:mt-20 md:pt-10">
        <SectionHeader id="v1-fit" label="Who this is for" />
        <div className="mt-4 grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          <p>
            Founders and operators who already have an offer, but their marketing feels scattered, hard to measure, or
            too dependent on manual follow-up.
          </p>
          <p>
            Teams that want one practical partner to diagnose the growth problem and coordinate strategy, ads, tracking,
            content, branding, and automation.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t pt-6 space-y-6 md:mt-20 md:pt-10">
        <SectionHeader id="v1-work" label="How the work fits together" />
        <div className="grid gap-6 md:grid-cols-3">
          {lanes.map((lane) => {
            const Icon = lane.icon;
            return (
              <Card key={lane.title} className="p-6">
                <Icon className="mb-5 h-6 w-6 text-accent" aria-hidden="true" />
                <h3>{lane.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{lane.body}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-12 border-t pt-6 space-y-6 md:mt-20 md:pt-10">
        <SectionHeader id="v1-offers" label="Ways to work together" />
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <Card key={offer.title} className={index === 0 ? "featured-offer-card p-6" : "p-6"}>
              <h3>{offer.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{offer.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t pt-6 md:mt-20 md:pt-10">
        <div className="rounded-lg border bg-primary p-6 text-primary-foreground md:p-8">
          <Bot className="mb-4 h-7 w-7" aria-hidden="true" />
          <h2>Automation is a support layer, not the whole pitch.</h2>
          <p className="mt-3 max-w-2xl text-sm text-primary-foreground/75 md:text-base">
            Automation supports the process after the growth bottleneck is clear. The point is cleaner handoffs, faster
            reporting, better content operations, and fewer missed leads.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t pt-6 md:mt-20 md:pt-10">
        <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2>Ready to start with diagnosis?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a 30-minute audit call and we will decide whether the next move is audit, sprint, or no engagement.
            </p>
          </div>
          <Button
            type="button"
            variant="cta"
            size="lg"
            data-cal-link="prsmahajan/30"
            data-cal-namespace="30"
            data-cal-config='{"layout":"month_view"}'
            onClick={() =>
              trackEvent("schedule_cta_click", {
                location: "v1_bottom",
              })
            }
          >
            Book audit call
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default V1;
