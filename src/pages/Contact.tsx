import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Email: <a href="mailto:paras@prsmahajan.com" className="text-foreground underline-offset-2 hover:underline">paras@prsmahajan.com</a></p>
            <p>Phone: <a href="tel:+919041162603" className="text-foreground underline-offset-2 hover:underline">+91 (904)11 62603</a></p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Optional: add links to platforms you actually use (LinkedIn, Twitter, newsletter) once you are ready to
              share them.
            </p>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;
