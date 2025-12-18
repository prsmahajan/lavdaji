import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { showInfoToast } from "@/hooks/use-toast";
import { Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact | Start with a Note or Call"
        description="Prefer to start with a note instead of a call? Reach out to Paras Mahajan by email, phone, or social, or book a conversation directly from this page."
      />
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

            <div className="pt-1 flex flex-wrap gap-3 text-sm md:text-base">
              <a
                href="https://linkedin.com/in/prsmahajan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover-scale"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://x.com/prsmahajan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover-scale"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
                <span className="font-semibold">Twitter / X</span>
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
                onClick={() =>
                  showInfoToast({
                    title: "Opening calendar",
                    description:
                      "Choose a time for a conversation; you’ll get details by email immediately.",
                  })
                }
              >
                Schedule a conversation
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;
