import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Offers = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <h1>Offers</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Three clear ways to work together. Each offer is designed so you know exactly what you are getting and what
          happens next.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="flex flex-col justify-between rounded-lg border bg-card p-5">
          <div className="space-y-3">
            <h2>Automation Audit</h2>
            <p className="text-sm text-muted-foreground">
              A fast diagnosis of your current content, sales, and marketing workflows.
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• 60–90 minute deep-dive call</li>
              <li>• Systems and tooling review</li>
              <li>• Visual system map (Notion / whiteboard)</li>
              <li>• 3–5 prioritized recommendations</li>
              <li>• Recording + summary notes</li>
            </ul>
          </div>
          <div className="mt-4">
            <Button
              type="button"
              variant="cta"
              size="sm"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule an Audit
            </Button>
          </div>
        </article>

        <article className="flex flex-col justify-between rounded-lg border bg-card p-5">
          <div className="space-y-3">
            <h2>Build a Revenue System</h2>
            <p className="text-sm text-muted-foreground">
              Design and build a full system around a specific outcome: more calls, more qualified leads, or more
              buyers.
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• Clear success metric and scope</li>
              <li>• System architecture and workflow diagrams</li>
              <li>• Implementation across your existing tools</li>
              <li>• Testing, monitoring, and debug period</li>
              <li>• Plain-language documentation + handover</li>
            </ul>
          </div>
          <div className="mt-4">
            <Button
              type="button"
              variant="cta"
              size="sm"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Talk about a system build
            </Button>
          </div>
        </article>

        <article className="flex flex-col justify-between rounded-lg border bg-card p-5">
          <div className="space-y-3">
            <h2>Ongoing Systems Partnership</h2>
            <p className="text-sm text-muted-foreground">
              A retainer-style engagement to keep your automations sharp as the business evolves.
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• Monthly review and optimization cycles</li>
              <li>• New automations and experiments each month</li>
              <li>• Priority support for issues and changes</li>
              <li>• Lightweight reporting on what is working</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Best for founders and small teams who want leverage, not busywork.
            </p>
          </div>
          <div className="mt-4">
            <Button
              type="button"
              variant="cta"
              size="sm"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Explore partnership
            </Button>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Offers;
