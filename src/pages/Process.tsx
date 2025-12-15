import { Layout } from "@/components/Layout";

const Process = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <h1>Process</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          A simple, structured way of working so you always know what we are doing and why.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <article className="flex flex-col gap-2 rounded-lg border bg-card p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">01 · Diagnose</p>
          <p className="text-sm text-foreground">
            Clarify goals, constraints, and the real bottlenecks before touching tools.
          </p>
        </article>
        <article className="flex flex-col gap-2 rounded-lg border bg-card p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">02 · Design</p>
          <p className="text-sm text-foreground">
            Map the system, key paths, and success metrics so we can ship in tight loops.
          </p>
        </article>
        <article className="flex flex-col gap-2 rounded-lg border bg-card p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">03 · Build</p>
          <p className="text-sm text-foreground">
            Implement, connect tools, and test edge cases with a focus on reliability.
          </p>
        </article>
        <article className="flex flex-col gap-2 rounded-lg border bg-card p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">04 · Scale</p>
          <p className="text-sm text-foreground">
            Monitor, refine, and extend the system as your volume and goals increase.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default Process;
