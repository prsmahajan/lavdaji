import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Home" },
  { id: "what-i-build", label: "What I Build" },
  { id: "proof", label: "Proof" },
  { id: "offers", label: "Offers" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
  { id: "schedule", label: "Schedule" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const faqItems = [
  {
    question: "Do you work with agencies, creators, or founders?",
    answer:
      "All three. I work best with founders, creators, and lean teams that care about leverage, not vanity metrics.",
  },
  {
    question: "How long does a system take to build?",
    answer:
      "Most core systems are built and deployed in 2–4 weeks, depending on complexity and existing assets.",
  },
  {
    question: "Do I need a big audience before we start?",
    answer:
      "No. What matters more is clarity on your offer and who you serve. Systems help you compound the attention you already have.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "The goal is not to replace people but to remove repetitive, low-leverage work so your team can focus on decisions, relationships, and strategy.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "A clear offer, access to your current tools, and 1–2 focused working sessions to understand your goals, constraints, and existing workflows.",
  },
  {
    question: "Can we start small?",
    answer:
      "Yes. Many clients begin with a focused Automation Audit, then expand into a larger revenue system once we have a clear roadmap.",
  },
  {
    question: "Do you stay involved after launch?",
    answer:
      "If we work on a partnership basis, yes. I help monitor, tune, and extend your systems as your business evolves.",
  },
];

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur-sm">
        <nav className="container flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/80 hover:text-foreground"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-xs font-semibold">
              P
            </span>
            <span className="hidden text-sm md:inline">Paras Mahajan</span>
          </button>

          <div className="flex flex-1 items-center justify-end gap-6">
            <div className="hidden items-center gap-5 text-xs md:flex md:text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              type="button"
              size="sm"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a conversation
            </Button>
          </div>
        </nav>
      </header>

      <main className="container pb-16 pt-10 md:pb-24 md:pt-16">
        {/* Hero */}
        <section id="home" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">AI systems builder</p>
            <h1>
              I build AI-driven sales &amp; marketing systems that scale without burnout.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              AI video automation, sales automation, and growth systems designed for leverage — not hustle.
            </p>
            <p className="text-sm text-muted-foreground">
              I help founders, creators, and lean teams turn attention into revenue with automation that runs daily.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button
                type="button"
                size="lg"
                data-cal-link="prsmahajan/60"
                data-cal-namespace="60"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule a conversation
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("proof")}
              >
                View systems I build
              </Button>
            </div>
          </div>
        </section>

        {/* What I Build */}
        <section id="what-i-build" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2>What I build</h2>
            <p className="hidden max-w-xs text-xs text-muted-foreground md:block">
              Clear, focused systems that compound your effort across video, sales, and marketing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col gap-4 rounded-lg border bg-card p-5">
              <h3>AI Video Automation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Automated topic research and content planning</li>
                <li>• Script generation, voice, visuals, and assembly pipeline</li>
                <li>• Multi-platform repurposing: short-form and long-form</li>
                <li>• Upload, scheduling, and basic performance feedback loop</li>
              </ul>
              <p className="mt-2 text-sm font-medium text-foreground">Goal: consistent publishing without burnout.</p>
            </article>

            <article className="flex flex-col gap-4 rounded-lg border bg-card p-5">
              <h3>AI Sales Automation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lead capture and enrichment</li>
                <li>• Qualification and routing</li>
                <li>• Automated follow-ups and reminders</li>
                <li>• CRM hygiene and pipeline updates</li>
              </ul>
              <p className="mt-2 text-sm font-medium text-foreground">
                Goal: faster conversions and no missed leads.
              </p>
            </article>

            <article className="flex flex-col gap-4 rounded-lg border bg-card p-5">
              <h3>AI Marketing Systems</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Audience → content → distribution → conversion loops</li>
                <li>• Landing and offer messaging structure</li>
                <li>• Automated nurture sequences</li>
                <li>• Campaign automation and reporting</li>
              </ul>
              <p className="mt-2 text-sm font-medium text-foreground">
                Goal: predictable growth from repeatable systems.
              </p>
            </article>
          </div>
        </section>

        {/* Proof */}
        <section id="proof" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2>Proof: systems in the wild</h2>
            <p className="hidden max-w-xs text-xs text-muted-foreground md:block">
              Credible, system-first case studies without the hype.
            </p>
          </div>

          <div className="space-y-5">
            <article className="rounded-lg border bg-card p-5">
              <h3 className="mb-1">Short-Form Content Engine</h3>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Problem
              </p>
              <p className="mb-3 text-sm text-muted-foreground">
                Founder was publishing inconsistently across platforms, relying on manual effort and ad-hoc ideas.
              </p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Solution
              </p>
              <p className="mb-3 text-sm text-muted-foreground">
                Designed a content pipeline from topic backlog → scripts → AI-assisted production → review → scheduled
                distribution, with a simple weekly review ritual.
              </p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
              <p className="mb-3 text-sm text-muted-foreground">
                4–6 high-signal clips published per week across 2–3 platforms, with production time reduced by ~60–70%.
              </p>
              <p className="text-xs text-muted-foreground">
                Implementation stack available on request.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-5">
              <h3 className="mb-1">Inbound Lead to Booked Call System</h3>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Problem
              </p>
              <p className="mb-3 text-sm text-muted-foreground">
                Leads were coming in from multiple forms and DMs, but follow-up was inconsistent and many warm prospects
                never made it to a call.
              </p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Solution
              </p>
              <p className="mb-3 text-sm text-muted-foreground">
                Built an intake flow that enriches leads, scores intent, routes them to the right calendar, and triggers
                a structured follow-up sequence with reminders.
              </p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
              <p className="mb-3 text-sm text-muted-foreground">
                20–40% lift in qualified booked calls and a meaningful drop in "forgot to follow up" moments.
              </p>
              <p className="text-xs text-muted-foreground">
                Implementation stack available on request.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-5">
              <h3 className="mb-1">Content to Conversion Loop</h3>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Problem
              </p>
              <p className="mb-3 text-sm text-muted-foreground">
                Content was generating views but not converting into pipeline; there was no clear path from attention to
                a specific offer.
              </p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Solution
              </p>
              <p className="mb-3 text-sm text-muted-foreground">
                Mapped a simple narrative from content themes → lead magnets → nurture → offer, with automation handling
                tagging, timing, and follow-up.
              </p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Result</p>
              <p className="mb-3 text-sm text-muted-foreground">
                More consistent inbound conversations and a clearer line of sight from posts to revenue.
              </p>
              <p className="text-xs text-muted-foreground">
                Implementation stack available on request.
              </p>
            </article>
          </div>
        </section>

        {/* Offers */}
        <section id="offers" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2>Offers</h2>
            <p className="hidden max-w-xs text-xs text-muted-foreground md:block">
              Clear containers for working together, ready for pricing when you are.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-lg border bg-card p-5">
              <div className="space-y-3">
                <h3>Automation Audit</h3>
                <p className="text-sm text-muted-foreground">
                  A fast, focused diagnosis of your current content, sales, and marketing setup.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Identify bottlenecks and missed leverage points</li>
                  <li>• Map existing flows across tools and channels</li>
                  <li>• Deliver a clear system map + next-step plan</li>
                </ul>
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  data-cal-link="prsmahajan/60"
                  data-cal-namespace="60"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Schedule an Audit conversation
                </Button>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-lg border bg-card p-5">
              <div className="space-y-3">
                <h3>Build a Revenue System</h3>
                <p className="text-sm text-muted-foreground">
                  The core engagement: design and build an end-to-end system around a specific revenue goal.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Choose a primary focus: video, sales, or marketing loop</li>
                  <li>• Architect the workflows, automations, and checks</li>
                  <li>• Deploy, test, and refine with your team</li>
                  <li>• Provide simple documentation and handover</li>
                </ul>
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  size="sm"
                  data-cal-link="prsmahajan/60"
                  data-cal-namespace="60"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Talk about a revenue system
                </Button>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-lg border bg-card p-5">
              <div className="space-y-3">
                <h3>Ongoing Systems Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  A longer-term partnership to maintain, improve, and scale your systems.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Monitor performance and reduce friction monthly</li>
                  <li>• Add new automations and improvements over time</li>
                  <li>• Support your team as systems evolve</li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Best for founders and small teams who want leverage, not busywork.
                </p>
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  data-cal-link="prsmahajan/60"
                  data-cal-namespace="60"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Explore partnership
                </Button>
              </div>
            </article>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2>Process</h2>
            <p className="hidden max-w-xs text-xs text-muted-foreground md:block">
              A simple, repeatable way of working so you always know where we are.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-4">
            <li className="flex flex-col gap-2 rounded-lg border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">01 · Diagnose</p>
              <p className="text-sm text-foreground">Clarify goals, constraints, and what "working" actually means.</p>
            </li>
            <li className="flex flex-col gap-2 rounded-lg border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">02 · Design</p>
              <p className="text-sm text-foreground">
                Map the system, touchpoints, and success metrics before building anything.
              </p>
            </li>
            <li className="flex flex-col gap-2 rounded-lg border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">03 · Build</p>
              <p className="text-sm text-foreground">Implement, connect tools, and test edge cases in small loops.</p>
            </li>
            <li className="flex flex-col gap-2 rounded-lg border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">04 · Scale</p>
              <p className="text-sm text-foreground">
                Monitor, iterate, and extend the system as your volume and ambition grow.
              </p>
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2>FAQ</h2>
            <p className="hidden max-w-xs text-xs text-muted-foreground md:block">
              A few of the questions that usually come up before we start.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="mb-16 scroll-mt-28 md:mb-24">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2>Schedule a conversation</h2>
            <p className="hidden max-w-xs text-xs text-muted-foreground md:block">
              Open the calendar, find a slot that works, and we will use that time to map your next best system.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border bg-card p-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm text-foreground">15–60 minute working sessions, not sales calls.</p>
              <p className="text-sm text-muted-foreground">
                We will look at your current setup, choose a system to focus on, and outline what "better" looks like.
              </p>
            </div>
            <Button
              type="button"
              size="lg"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Open calendar
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10 scroll-mt-28 md:mb-16">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2>Contact</h2>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-card p-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Prefer to start with an email or a quick note? You can reach me here:
              </p>
              <p className="text-sm font-medium text-foreground">Email: [add your best contact email]</p>
              <p className="text-xs text-muted-foreground">
                Optional: add a link to a private Loom, Twitter, or LinkedIn once you are ready.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              size="lg"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a conversation
            </Button>
          </div>
        </section>

        <footer className="border-t pt-6 text-xs text-muted-foreground md:pt-8">
          <div className="space-y-1 md:flex md:items-center md:justify-between md:space-y-0">
            <p>Quietly building durable, automated revenue systems.</p>
            <p>
              Initiative for stray animals: <a href="https://theopendraft.com">theopendraft.com</a>
            </p>
          </div>
        </footer>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
    </div>
  );
};

export default Index;
