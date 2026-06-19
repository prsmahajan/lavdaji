import { FileSearch, Megaphone, Workflow } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Card } from "@/components/ui/card";

const serviceGroups = [
  {
    icon: FileSearch,
    title: "Audit and Strategy",
    body: "A practical review of your offer, funnel, website, current channels, tracking, and messaging.",
    points: ["Marketing audit", "Offer and funnel review", "GA4 and conversion gap check", "30-day action plan"],
  },
  {
    icon: Megaphone,
    title: "Acquisition and Measurement",
    body: "Meta ads and analytics work together so you can understand what is driving qualified demand.",
    points: ["Meta ads structure", "Creative testing", "GA4 events and conversions", "Simple reporting"],
  },
  {
    icon: Workflow,
    title: "Content, Brand, and Automation",
    body: "The support layer that makes campaigns easier to run and follow-up easier to maintain.",
    points: ["Content pillars", "Brand and offer clarity", "Workflow design", "Automation support"],
  },
];

const V1Services = () => {
  return (
    <Layout>
      <Seo
        title="Services | Marketing Audit, Ads, Tracking, Content, Automation"
        description="Services overview for marketing audit, Meta ads, GA4, content, branding, and automation support."
      />
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Services</p>
        <h1>Simple, diagnosis-led marketing support.</h1>
        <p className="text-base text-muted-foreground md:text-lg">
          The offer stays straightforward: audit first, then focused execution across the area that actually needs work.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl space-y-6 border-t pt-8 md:mt-16">
        <SectionHeader id="v1-services" label="Service groups" />
        {serviceGroups.map((group) => {
          const Icon = group.icon;
          return (
            <Card key={group.title} className="p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <Icon className="h-7 w-7 shrink-0 text-accent" aria-hidden="true" />
                <div className="space-y-3">
                  <h2>{group.title}</h2>
                  <p className="text-sm text-muted-foreground">{group.body}</p>
                  <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {group.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </section>
    </Layout>
  );
};

export default V1Services;
