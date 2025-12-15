import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const WhatIBuild = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <h1>What I build</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Three core system types that cover how you show up, how you sell, and how you grow — all built to be
          maintainable, not fragile.
        </p>
      </section>

      <section className="mt-10 space-y-6">
        <Card className="space-y-3 p-6">
          <h2>AI Video Automation</h2>
          <p className="text-sm text-muted-foreground">
            For founders and creators who want consistent video output without turning content into a full-time job.
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Topic research and a living content backlog</li>
            <li>• Script generation, AI voice/visuals, and assembly pipeline</li>
            <li>• Multi-platform repurposing: shorts, clips, and long-form</li>
            <li>• Upload, scheduling, and light performance feedback loop</li>
          </ul>
          <p className="text-sm font-medium text-foreground">Outcome: a predictable content engine, not a guessing game.</p>
        </Card>

        <Card className="space-y-3 p-6">
          <h2>AI Sales Automation</h2>
          <p className="text-sm text-muted-foreground">
            For teams that want every qualified lead captured, routed, and followed up with — automatically.
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Lead capture and enrichment from forms, DMs, and inbox</li>
            <li>• Qualification, routing, and calendar handoff</li>
            <li>• Structured follow-ups and reminders that don&apos;t feel spammy</li>
            <li>• CRM hygiene and pipeline updates you can actually trust</li>
          </ul>
          <p className="text-sm font-medium text-foreground">Outcome: faster decisions and fewer &quot;we forgot to follow up&quot; moments.</p>
        </Card>

        <Card className="space-y-3 p-6">
          <h2>AI Marketing Systems</h2>
          <p className="text-sm text-muted-foreground">
            For businesses that want clear loops from audience → content → conversion, instead of disconnected tactics.
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Narrative and offer structure that your systems can follow</li>
            <li>• Automated nurture sequences and simple segmentation</li>
            <li>• Campaign automation and lightweight reporting</li>
            <li>• Clear feedback loops so we know what to scale</li>
          </ul>
          <p className="text-sm font-medium text-foreground">Outcome: steady, compounding growth instead of random spikes.</p>
        </Card>
      </section>
    </Layout>
  );
};

export default WhatIBuild;
