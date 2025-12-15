import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <section className="space-y-8">
        <div className="space-y-4">
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

        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            You already have signals: leads coming in, content that works, conversations that convert. The gap is a
            system that runs daily without you having to push every step.
          </p>
          <p>
            My work is simple: design and build those systems with you, then remove friction until they feel boringly
            reliable.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
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
    </Layout>
  );
};

export default Index;
