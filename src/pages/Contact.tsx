import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
const Contact = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <h1>Contact</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          If you prefer to start with a note instead of a call, you can do that here.
        </p>
      </section>

      <section className="mt-10">
        <Card className="space-y-6 p-6">
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

            <div className="pt-1 flex flex-wrap gap-3 text-xs md:text-sm">
              <a
                href="https://linkedin.com/in/prsmahajan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover-scale"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/prsmahajan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover-scale"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
                <span>Twitter / X</span>
              </a>
            </div>

            <div className="pt-2">
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
            </div>

            <div className="pt-2 text-xs md:text-sm">
              <p>
                Optional: add links to platforms you actually use (LinkedIn, Twitter, newsletter) once you are ready to
                share them.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;
