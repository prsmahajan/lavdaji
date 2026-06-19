import { ArrowRight, BarChart3, Check, Crosshair, FileSearch, Repeat, Rocket, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

const offers = [
  {
    icon: FileSearch,
    eyebrow: "Start here",
    title: "Marketing Audit",
    description:
      "We go through your whole marketing setup in one focused session. Ads, website, content, analytics, and follow-up. You leave knowing exactly what's costing you and what to do about it first.",
    points: [
      "60 to 90 minute working session, live with you",
      "We review your ads, funnel, website copy, and messaging",
      "We check whether your tracking is showing you accurate data",
      "You get a clear list of what to fix and in what order",
      "We tell you honestly whether working together makes sense",
    ],
    cta: "Book call",
    event: "Marketing Audit",
  },
  {
    icon: Rocket,
    eyebrow: "Focused build",
    title: "Growth Sprint",
    description:
      "We take one clear problem from the audit and build the fix properly. You get it handed back fully working, with notes so you can run it yourself going forward.",
    points: [
      "Facebook and Instagram ad setup or cleanup",
      "Analytics fixed so you can actually trust the numbers",
      "Landing page or offer message improved",
      "Lead follow-up or content workflow built out",
      "Tested, launched, and handed over with full documentation",
    ],
    cta: "Discuss a sprint",
    event: "Growth Sprint",
  },
  {
    icon: Repeat,
    eyebrow: "When it makes sense",
    title: "Ongoing Support",
    description:
      "Monthly support for the parts of your marketing that need regular attention. We only recommend this once you have something working that's worth maintaining.",
    points: [
      "Ad monitoring and creative testing each month",
      "Regular reporting so you know what's working and what to cut",
      "Content and campaign management",
      "Offer and messaging improvements over time",
      "Automation updates as your business changes",
    ],
    cta: "Explore ongoing support",
    event: "Ongoing Growth Support",
  },
];

const gates = [
  {
    icon: Crosshair,
    title: "We know the real problem",
    body: "Not a hunch or a feeling. A clear diagnosis from looking at your actual setup.",
  },
  {
    icon: BarChart3,
    title: "We can measure the fix",
    body: "We can tell whether what we build is working, not just assume it is.",
  },
  {
    icon: ShieldCheck,
    title: "The work has a clear end",
    body: "Every sprint or project has a defined goal and a finish line. No open-ended retainers by default.",
  },
];

const Offers = () => {
  return (
    <Layout>
      <Seo
        title="Pricing and Options | Audit, Sprint, or Ongoing Support"
        description="Start with a marketing audit to find the real problem, then choose a sprint to fix it or ongoing support to keep improving month by month."
        path="/offers"
      />

      <section className="rounded-lg border bg-background p-5 shadow-sm agency-grid md:p-8 lg:p-10">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">How we work</p>
          <h1>One starting point. No guessing.</h1>
          <p className="text-base text-muted-foreground md:text-xl">
            We don't pitch packages before we know your problem. The audit comes first. It shows us what's actually
            costing you, so anything after that is aimed at the right target.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {gates.map((gate) => {
          const Icon = gate.icon;
          return (
            <Card key={gate.title} className="p-5">
              <Icon className="mb-5 h-6 w-6 text-accent" aria-hidden="true" />
              <h3>{gate.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{gate.body}</p>
            </Card>
          );
        })}
      </section>

      <section className="mt-16 border-t pt-10 md:mt-24 md:pt-14">
        <SectionHeader
          id="offers"
          label="Ways to work together"
          description="Each option has a clear purpose. The audit shows you what to fix. The sprint builds the fix. Ongoing support keeps things improving once something is working."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card
                key={offer.title}
                className={`flex flex-col overflow-hidden p-5 ${
                  index === 0 ? "featured-offer-card" : ""
                }`}
              >
                <div>
                  <div
                    className={`mb-8 flex h-11 w-11 items-center justify-center rounded-md border ${
                      index === 0
                        ? "border-primary-foreground/20 bg-primary-foreground/10"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p
                    className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                      index === 0 ? "text-primary-foreground/65" : "text-muted-foreground"
                    }`}
                  >
                    {offer.eyebrow}
                  </p>
                  <h2>{offer.title}</h2>
                  <p
                    className={`mt-3 text-sm ${
                      index === 0 ? "text-primary-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {offer.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {offer.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            index === 0 ? "text-primary-foreground" : "text-accent"
                          }`}
                          aria-hidden="true"
                        />
                        <span className={index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    type="button"
                    variant={index === 0 ? "secondary" : "cta"}
                    size="sm"
                    data-cal-link="prsmahajan/30"
                    data-cal-namespace="30"
                    data-cal-config='{"layout":"month_view"}'
                    onClick={() =>
                      trackEvent("offer_cta_click", {
                        offer: offer.event,
                      })
                    }
                  >
                    {offer.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Offers;
