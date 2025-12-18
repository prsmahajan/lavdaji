import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Card } from "@/components/ui/card";

const Process = () => {
  return (
    <Layout>
      <Seo
        title="Process | How We Build AI Revenue Systems"
        description="A simple, structured four-step process—diagnose, design, build, scale—for shipping reliable AI automation, sales, and marketing systems."
      />
      <section className="space-y-4">
        <h1 className="sr-only">Process</h1>
        <SectionHeader
          id="process"
          label="Process"
          description="A simple, structured way of working so you always know what we are doing and why."
        />
      </section>

      <section className="mt-12 grid gap-4 border-t pt-6 md:mt-20 md:grid-cols-2 md:pt-10">
        <Card className="flex flex-col gap-2 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">01 · Diagnose</p>
          <p className="text-sm text-foreground">
            Clarify goals, constraints, and the real bottlenecks before touching tools.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">02 · Design</p>
          <p className="text-sm text-foreground">
            Map the system, key paths, and success metrics so we can ship in tight loops.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">03 · Build</p>
          <p className="text-sm text-foreground">
            Implement, connect tools, and test edge cases with a focus on reliability.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">04 · Scale</p>
          <p className="text-sm text-foreground">
            Monitor, refine, and extend the system as your volume and goals increase.
          </p>
        </Card>
      </section>
    </Layout>
  );
};

export default Process;
