import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Card } from "@/components/ui/card";

const Process = () => {
  return (
    <Layout>
      <Seo
        title="How It Works | Our 4-Step Approach"
        description="We look before we touch. Find the real problem first, fix it properly, then build on what's working."
        path="/process"
      />
      <section className="space-y-4">
        <h1 className="sr-only">Process</h1>
        <SectionHeader
          id="process"
          label="How it works"
          description="We don't guess and we don't start building until we know what the actual problem is."
          labelUnderline
        />
      </section>

      <section className="mt-12 grid gap-4 border-t pt-6 md:mt-20 md:grid-cols-2 md:pt-10">
        <Card className="flex flex-col gap-2 p-5">
          <p className="mb-1 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">01 - Look first</p>
          <p className="text-sm text-foreground">
            We review your ads, website, analytics, content, and follow-up before we touch a single thing. Most of
            the time, the real problem is not where you expect it to be.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 p-5">
          <p className="mb-1 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">02 - Pick one fix</p>
          <p className="text-sm text-foreground">
            We find the one thing that's costing you the most and build a fix for just that. Not a list of 20
            recommendations. One clear problem, solved properly.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 p-5">
          <p className="mb-1 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">03 - Build it</p>
          <p className="text-sm text-foreground">
            We build the fix with a clear handover, so you know exactly what was done, why it was done, and how to
            run it yourself going forward.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 p-5">
          <p className="mb-1 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">04 - Improve</p>
          <p className="text-sm text-foreground">
            We check what the data shows after the fix is in place, tighten what's weak, and only move to the next
            thing once what's already running is actually working.
          </p>
        </Card>
      </section>
    </Layout>
  );
};

export default Process;
