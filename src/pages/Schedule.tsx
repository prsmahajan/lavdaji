import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Schedule = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <h1>Schedule a conversation</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          A working session to see if there is a meaningful system to build together — not a high-pressure sales call.
        </p>
      </section>

      <section className="mt-10">
        <Card className="space-y-4 p-6">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              We will walk through your current setup, pick one priority system (video, sales, or marketing), and map
              what &quot;better" looks like.
            </p>
            <p>
              By the end, you will know whether we should work together now, later, or not at all — and what the next
              sensible step is either way.
            </p>
          </div>
          <div className="pt-1 space-y-1.5">
            <Button
              type="button"
              variant="cta"
              size="lg"
              data-cal-link="prsmahajan/60"
              data-cal-namespace="60"
              data-cal-config='{"layout":"month_view"}'
            >
              Open calendar
            </Button>
            <p className="text-xs text-muted-foreground">
              You&apos;ll see available slots in your local time and get a calendar invite immediately after booking.
            </p>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default Schedule;
