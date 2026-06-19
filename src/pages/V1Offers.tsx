import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

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
    body: "Monthly support when there is a clear growth lane worth compounding.",
    points: ["Meta ads iteration", "GA4 and conversion checks", "Content and automation improvements"],
  },
];

const V1Offers = () => {
  return (
    <Layout>
      <Seo
        title="Offers | Marketing Audit, Growth Sprint, Ongoing Support"
        description="Offer page for the marketing audit, growth sprint, and ongoing growth support."
      />
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Offers</p>
        <h1>Start small. Build only what the audit justifies.</h1>
        <p className="text-base text-muted-foreground md:text-lg">
          The commercial path is intentionally simple: diagnose first, run a sprint if there is a clear fix, continue
          only when there is a strong reason.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl space-y-6 border-t pt-8 md:mt-16">
        <SectionHeader id="v1-offers" label="Ways to work together" />
        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer, index) => (
            <Card key={offer.title} className={index === 0 ? "featured-offer-card p-6" : "p-6"}>
              <h2 className="text-xl md:text-2xl">{offer.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{offer.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {offer.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  type="button"
                  variant={index === 0 ? "secondary" : "cta"}
                  size="sm"
                  data-cal-link="prsmahajan/30"
                  data-cal-namespace="30"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() =>
                    trackEvent("offer_cta_click", {
                      offer: offer.title,
                    })
                  }
                >
                  {index === 0 ? "Book audit call" : "Discuss"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default V1Offers;
