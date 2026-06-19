import { BarChart3, Bot, FileSearch, Megaphone, Palette, Workflow } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Card } from "@/components/ui/card";

const serviceLanes = [
  {
    icon: FileSearch,
    title: "Marketing Audit",
    description: "We look at your whole setup before touching anything, so we fix the right problem first.",
    points: ["Check your ads, funnel, and website", "Review your offer and who it's aimed at", "Find tracking gaps that are hiding your real results", "Clear list of what to fix and in what order"],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "Facebook and Instagram ads that bring in real enquiries, not just impressions and link clicks.",
    points: ["Build or clean up your campaigns from scratch", "Test different creatives to find what converts", "Use lead quality to improve targeting over time", "Regular review and refinement each month"],
  },
  {
    icon: BarChart3,
    title: "Analytics and Tracking",
    description: "Proper tracking so you know which ads and pages are actually bringing in customers, not just traffic.",
    points: ["Track the conversions that actually matter to your business", "Tag your links so you know where every visitor comes from", "Verify that pixels and events are firing correctly", "Simple reporting you can read and act on"],
  },
  {
    icon: Palette,
    title: "Content and Branding",
    description: "Clearer messaging so people understand your offer fast and trust it sooner.",
    points: ["Define who you're talking to and why they should care", "Simplify your offer so it's easy to explain in one sentence", "Build content around what your buyers actually care about", "Briefs for creatives, ads, and campaigns"],
  },
  {
    icon: Workflow,
    title: "Workflow Systems",
    description: "Systems that handle lead routing, follow-up, and reporting so you stop doing it manually.",
    points: ["Route new leads to the right person automatically", "Set up follow-up sequences that go out without manual sending", "Get regular reports without building them yourself", "Hand off from marketing to sales without things falling through"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart shortcuts for repetitive tasks so your team spends less time on admin.",
    points: ["Design workflows that use AI to handle repetitive steps", "Keep your CRM updated without manual data entry", "Get notified about what needs attention, not everything", "Keep internal docs and processes up to date automatically"],
  },
];

const Services = () => {
  return (
    <Layout>
      <Seo
        title="What We Do | Ads, Analytics, Content, Branding, Automation"
        description="We handle Meta ads, analytics setup, content strategy, branding, and automation. We start with a clear look at what's costing you the most, then fix that first."
        path="/services"
      />

      <section className="grid gap-8 rounded-lg border bg-background p-5 shadow-sm agency-grid md:grid-cols-[0.9fr,1.1fr] md:p-8 lg:p-10">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Services</p>
          <h1>Everything you need. In the right order.</h1>
        </div>
        <p className="text-base text-muted-foreground md:text-xl">
          We don't hand you a menu and ask you to pick. We look at your business, find what's holding you back the
          most, and start there. Everything else follows once the first fix is working.
        </p>
      </section>

      <section className="mt-16 border-t pt-10 md:mt-24 md:pt-14">
        <SectionHeader
          id="services"
          label="What we do"
          description="Each service solves a specific problem. We find out which one is costing you the most and start there."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceLanes.map((lane) => {
            const Icon = lane.icon;
            return (
              <Card key={lane.title} className="group p-5">
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md border bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-xl md:text-2xl">{lane.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{lane.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {lane.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
