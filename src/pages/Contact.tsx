import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <h1>Contact</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          If you prefer to start with a note instead of a call, you can do that here.
        </p>
      </section>

      <section className="mt-8 space-y-6 rounded-lg border bg-card p-5">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Email: [add your best contact email]</p>
          <p>
            Optional: add links to platforms you actually use (LinkedIn, Twitter, newsletter) once you are ready to
            share them.
          </p>
        </div>

        <div className="pt-1">
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
      </section>
    </Layout>
  );
};

export default Contact;
