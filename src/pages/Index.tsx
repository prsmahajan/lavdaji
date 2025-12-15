import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <section className="space-y-10">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            AI automation, sales, and marketing systems
          </p>
          <h1>
            AI-driven revenue systems that keep selling when you are not in the room.
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            I help founders, creators, and lean teams ship AI video, sales, and marketing systems that turn attention
            into predictable revenue.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-3 text-sm text-muted-foreground">
          <p>
            You already have signals: leads coming in, content that works, conversations that convert. The gap is a
            system that runs daily without you having to push every step.
          </p>
          <p>
            My work is simple: design and build those systems with you, then remove friction until they feel boringly
            reliable.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
          <Button
            type="button"
            variant="cta"
            size="lg"
            data-cal-link="prsmahajan/60"
            data-cal-namespace="60"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a conversation
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/proof">See systems in action</a>
          </Button>
        </div>
      </section>

      <section className="mt-16 border-t pt-8 md:mt-20 md:pt-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Who this is for
        </h2>
        <div className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          <p>
            Founders and small teams who are done with one-off campaigns and want calm, compounding acquisition and
            nurture systems.
          </p>
          <p>
            Creators and experts who are ready to treat their content and pipeline like assets, not a never-ending todo
            list.
          </p>
        </div>
      </section>

      <section className="mt-20 space-y-6 md:mt-24" aria-labelledby="home-what-i-build">
        <h2 id="home-what-i-build" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          What I build
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="space-y-3 rounded-lg border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">AI Video Automation</h3>
            <p className="text-sm text-muted-foreground">
              For founders and creators who want consistent video output without turning content into a full-time job.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Topic research and a living content backlog</li>
              <li>• Script generation, AI voice/visuals, and assembly pipeline</li>
              <li>• Multi-platform repurposing: shorts, clips, and long-form</li>
              <li>• Upload, scheduling, and light performance feedback loop</li>
            </ul>
            <p className="text-xs font-medium text-foreground">
              Outcome: a predictable content engine, not a guessing game.
            </p>
          </article>

          <article className="space-y-3 rounded-lg border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">AI Sales Automation</h3>
            <p className="text-sm text-muted-foreground">
              For teams that want every qualified lead captured, routed, and followed up with — automatically.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Lead capture and enrichment from forms, DMs, and inbox</li>
              <li>• Qualification, routing, and calendar handoff</li>
              <li>• Structured follow-ups and reminders that don&apos;t feel spammy</li>
              <li>• CRM hygiene and pipeline updates you can actually trust</li>
            </ul>
            <p className="text-xs font-medium text-foreground">
              Outcome: faster decisions and fewer &quot;we forgot to follow up&quot; moments.
            </p>
          </article>

          <article className="space-y-3 rounded-lg border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">AI Marketing Systems</h3>
            <p className="text-sm text-muted-foreground">
              For businesses that want clear loops from audience → content → conversion, instead of disconnected
              tactics.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Narrative and offer structure that your systems can follow</li>
              <li>• Automated nurture sequences and simple segmentation</li>
              <li>• Campaign automation and lightweight reporting</li>
              <li>• Clear feedback loops so we know what to scale</li>
            </ul>
            <p className="text-xs font-medium text-foreground">
              Outcome: steady, compounding growth instead of random spikes.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-20 space-y-6 md:mt-24" aria-labelledby="home-offers">
        <h2 id="home-offers" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Offers
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col justify-between rounded-lg border bg-card p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Automation Audit</h3>
              <p className="text-sm text-muted-foreground">
                A fast diagnosis of your current content, sales, and marketing workflows.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>• 60–90 minute deep-dive call</li>
                <li>• Systems and tooling review</li>
                <li>• Visual system map (Notion / whiteboard)</li>
                <li>• 3–5 prioritized recommendations</li>
                <li>• Recording + summary notes</li>
              </ul>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-lg border bg-card p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Build a Revenue System</h3>
              <p className="text-sm text-muted-foreground">
                Design and build a full system around a specific outcome: more calls, more qualified leads, or more
                buyers.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>• Clear success metric and scope</li>
                <li>• System architecture and workflow diagrams</li>
                <li>• Implementation across your existing tools</li>
                <li>• Testing, monitoring, and debug period</li>
                <li>• Plain-language documentation + handover</li>
              </ul>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-lg border bg-card p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Ongoing Systems Partnership</h3>
              <p className="text-sm text-muted-foreground">
                A retainer-style engagement to keep your automations sharp as the business evolves.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>• Monthly review and optimization cycles</li>
                <li>• New automations and experiments each month</li>
                <li>• Priority support for issues and changes</li>
                <li>• Lightweight reporting on what is working</li>
              </ul>
              <p className="text-xs text-muted-foreground">
                Best for founders and small teams who want leverage, not busywork.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-20 space-y-6 md:mt-24" aria-labelledby="home-faq">
        <h2 id="home-faq" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          FAQ
        </h2>
        <div className="space-y-4">
          <details className="rounded-lg border bg-card p-5 text-sm">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              Do you work with agencies, creators, or founders?
            </summary>
            <p className="mt-2 text-muted-foreground">
              All three. I work best with leaders who are close to the work and want systems that support them, not
              replace them.
            </p>
          </details>

          <details className="rounded-lg border bg-card p-5 text-sm">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              How long does a system take to build?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Most core systems are designed and launched in 2–4 weeks. Larger, multi-channel builds can take longer
              depending on scope.
            </p>
          </details>

          <details className="rounded-lg border bg-card p-5 text-sm">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              Do I need a big audience before we start?
            </summary>
            <p className="mt-2 text-muted-foreground">
              No. What matters is a clear offer and a way people currently find you. Systems help you compound what is
              already working.
            </p>
          </details>

          <details className="rounded-lg border bg-card p-5 text-sm">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              Will this replace my team?
            </summary>
            <p className="mt-2 text-muted-foreground">
              No. Automations remove repetitive work so your team can focus on judgment, conversation, and strategy.
            </p>
          </details>

          <details className="rounded-lg border bg-card p-5 text-sm">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              What do you need from me to start?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Access to your current tools, clarity on your main revenue goal, and 1–2 focused sessions where we walk
              through how you work today.
            </p>
          </details>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
