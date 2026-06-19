import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { showInfoToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, Linkedin, MessageSquare, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Get in Touch | Book a Free Marketing Call"
        description="Email or call directly, or book a free 30-minute call with Paras Mahajan to talk through where your marketing is falling short."
        path="/contact"
      />
      <section className="space-y-6">
        <h1>Get in touch</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Drop a message directly or book a free 30-minute call to talk through where your marketing is falling short.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <Card className="space-y-5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Direct contact</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Email:{" "}
              <a
                href="mailto:paras@prsmahajan.com"
                className="ml-1 text-foreground underline-offset-2 hover:underline"
              >
                paras@prsmahajan.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919041162603"
                className="ml-1 text-foreground underline-offset-2 hover:underline"
              >
                +91 (904)11 62603
              </a>
            </p>

            <div className="pt-1 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/prsmahajan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://x.com/prsmahajan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
                <span className="font-semibold">Twitter / X</span>
              </a>
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="button"
              variant="cta"
              size="lg"
              data-cal-link="prsmahajan/30"
              data-cal-namespace="30"
              data-cal-config='{"layout":"month_view"}'
              onClick={() =>
                showInfoToast({
                  title: "Opening calendar",
                  description: "Choose a time for a marketing audit call; you'll get details by email immediately.",
                })
              }
            >
              Book a free call
            </Button>
          </div>
        </Card>

        <Card className="space-y-5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">What happens next</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">You book a 30-minute slot</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Pick any open time. You get a calendar invite with a video link straight away.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">We look at your setup together</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  No prep needed. We go through your ads, website, analytics, and follow-up live on the call.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">You leave with a clear answer</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  By the end you know exactly what's costing you and what to fix first, whether or not you work
                  with us.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;
