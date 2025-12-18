import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";
import { showInfoToast } from "@/hooks/use-toast";

const Schedule = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window as unknown as {
      Cal?: any;
    };

    const initInline = () => {
      if (!w.Cal || !w.Cal.ns || !w.Cal.ns["60"]) return;
      try {
        w.Cal.ns["60"]("inline", {
          elementOrSelector: "#my-cal-inline-60",
          config: { layout: "month_view" },
          calLink: "prsmahajan/60",
        });
        w.Cal.ns["60"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (error) {
        console.error("Error initializing Cal inline embed", error);
      }
    };

    if (w.Cal && w.Cal.ns && w.Cal.ns["60"]) {
      initInline();
      return;
    }

    const interval = window.setInterval(() => {
      if (w.Cal && w.Cal.ns && w.Cal.ns["60"]) {
        window.clearInterval(interval);
        initInline();
      }
    }, 250);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <Seo
        title="Schedule | Book a Working Session"
        description="Schedule a calm, working session with Paras Mahajan to map your current systems and see if there is a meaningful AI automation project to build together."
      />
      <section className="space-y-6">
        <h1>Schedule a conversation</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          A working session to see if there is a meaningful system to build together — not a high-pressure sales call.
        </p>
      </section>

      <section className="mt-10 space-y-6">
        <Card className="space-y-4 p-6">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              We will walk through your current setup, pick one priority system (video, sales, or marketing), and map what
              &quot;better" looks like.
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
              onClick={() => {
                trackEvent("schedule_cta_click", {
                  location: "schedule_page_main",
                });
                showInfoToast({
                  title: "Opening calendar",
                  description: "Pick a time that works; you’ll get an instant calendar invite.",
                });
              }}
            >
              Open calendar
            </Button>
            <p className="text-xs text-muted-foreground">
              You&apos;ll see available slots in your local time and get a calendar invite immediately after booking.
            </p>
          </div>
        </Card>

        <div id="my-cal-inline-60" className="min-h-[520px] w-full overflow-x-hidden" />
      </section>
    </Layout>
  );
};

export default Schedule;
