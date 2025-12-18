import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Card } from "@/components/ui/card";

const Proof = () => {
  return (
    <Layout>
      <Seo
        title="Proof | AI Systems in the Wild"
        description="Representative AI video, sales, and marketing systems built for founders, creators, and teams, with names and specifics generalized."
      />
      <section className="space-y-4">
        <h1 className="sr-only">Proof: systems in the wild</h1>
        <SectionHeader
          id="proof"
          label="Proof: systems in the wild"
          description="A few representative systems. Names and specific numbers are intentionally generalized; details are available in a working session."
        />
      </section>

      <section className="mt-12 space-y-5 border-t pt-6 md:mt-20 md:pt-10">
        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Short-Form Content Engine</h2>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Founder was posting in bursts, then going silent. Ideas lived in notes apps, and nothing was connected across
            platforms.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Solution</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Built a content pipeline from topics → scripts → AI-assisted production → review → scheduled distribution,
            with one weekly review block.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            4–6 clips per week across 2–3 platforms, with production time down ~60–70% and a clearer link from posts to
            leads.
          </p>
          <p className="text-xs text-muted-foreground">Implementation stack available on request.</p>
        </Card>

        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Inbound Lead to Booked Call System</h2>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Leads landed in multiple inboxes and CRMs. Follow-up depended on manual reminders and free memory.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Solution</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Centralized intake, enriched key fields, scored intent, and routed prospects to the right calendar and
            follow-up track.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            20–40% lift in qualified booked calls and near-zero &quot;we never replied&quot; cases on warm leads.
          </p>
          <p className="text-xs text-muted-foreground">Implementation stack available on request.</p>
        </Card>

        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Content to Conversion Loop</h2>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Content generated views, but there was no consistent path from attention to a focused offer.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Solution</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Designed a simple narrative from content themes → lead magnets → nurture → offer, with automation handling
            tagging, timing, and follow-up.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            More consistent inbound conversations and a cleaner connection between content performance and revenue.
          </p>
          <p className="text-xs text-muted-foreground">Implementation stack available on request.</p>
        </Card>

        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Always-On Nurture Layer</h2>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            New subscribers and leads went into a list with occasional broadcasts, but most never heard back after the
            first touch.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Solution</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Implemented segmented, behavior-aware nurture sequences tied to specific offers, with simple rules for
            recycling and re-engagement.
          </p>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Higher reply and call-booking rates from &quot;old&quot; leads and a more predictable baseline of warm pipeline.
          </p>
          <p className="text-xs text-muted-foreground">Implementation stack available on request.</p>
        </Card>
      </section>
    </Layout>
  );
};

export default Proof;
