import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy | Paras Mahajan"
        description="How Paras Mahajan collects, uses, and protects your personal information when you use this website or book a service."
        path="/privacy"
      />
      <div className="space-y-8 max-w-3xl">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p><strong>Effective Date:</strong> June 19, 2026</p>
            <p><strong>Last Updated:</strong> June 19, 2026</p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">1. Who We Are</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            This site is operated by Paras Mahajan (prsmahajan.com). We provide marketing audit, ads, analytics, content, and automation services. This policy explains what information we collect, why we collect it, and how we use it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">2. What We Collect</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">We collect the following types of information:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Contact details:</strong> Name, email address, and phone number when you book a call or get in touch.</li>
            <li><strong className="text-foreground">Payment information:</strong> Billing details processed securely through Razorpay. We do not store card numbers on our servers.</li>
            <li><strong className="text-foreground">Messages:</strong> Any emails, notes, or messages you send us as part of an enquiry or project.</li>
            <li><strong className="text-foreground">Website usage data:</strong> IP address, browser type, pages visited, and time on site, collected through cookies and analytics tools (Google Analytics).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">3. Why We Use It</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">We use the information we collect to:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Schedule and deliver services you've requested</li>
            <li>Process payments and send receipts</li>
            <li>Reply to enquiries and support requests</li>
            <li>Send occasional updates or offers (you can opt out at any time)</li>
            <li>Understand how the site is used so we can improve it</li>
            <li>Meet legal obligations</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">4. Who We Share It With</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">We do not sell your personal information. We may share it with:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Service providers:</strong> Tools like Razorpay (payments), Cal.com (scheduling), and Google Analytics (website data). These providers have their own privacy policies.</li>
            <li><strong className="text-foreground">Legal requirements:</strong> When we are legally required to disclose information.</li>
            <li><strong className="text-foreground">Business transfers:</strong> If the business is sold or transferred, client data may be part of that transfer.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">5. Cookies</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            This site uses cookies for analytics and to remember your preferences. You can turn cookies off in your browser settings, though some parts of the site may not work as intended if you do.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">6. How We Protect Your Data</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We take reasonable steps to protect your information from unauthorised access, loss, or misuse. That said, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">7. How Long We Keep It</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We keep your information for as long as needed to provide the service and meet legal requirements. If you want us to delete your data, contact us and we will do so unless we are legally required to keep it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">8. Your Rights</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">You can ask us to:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Show you what personal information we hold about you</li>
            <li>Correct anything that's inaccurate</li>
            <li>Delete your data</li>
            <li>Stop sending you marketing messages</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
            Email paras@prsmahajan.com to make any of these requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">9. Children</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            This site is not intended for anyone under 18. We do not knowingly collect information from children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">10. Changes to This Policy</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We may update this policy from time to time. The updated date at the top of this page will reflect any changes. Continued use of the site after an update means you accept the revised policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">11. Contact</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">Questions about this policy? Get in touch:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Email:</strong> paras@prsmahajan.com</li>
            <li><strong className="text-foreground">Phone:</strong> +91 (904)11 62603</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
