import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy | Paras Mahajan"
        description="Privacy policy for Paras Mahajan's freelance services. Learn how we collect, use, and protect your personal information."
      />
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> January 20, 2026
            </p>
            <p>
              <strong>Last Updated:</strong> January 20, 2026
            </p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">1. Introduction</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Welcome to Paras Mahajan's freelance services ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">2. Information We Collect</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">We collect information that you provide directly to us, including:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and other contact details when you schedule a consultation or contact us.</li>
            <li><strong className="text-foreground">Payment Information:</strong> Billing details and payment information processed securely through our payment processor (Razorpay).</li>
            <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence if you contact us via email, phone, or through our website.</li>
            <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">We use the information we collect to:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send transaction notifications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates, marketing communications, and promotional materials (with your consent)</li>
            <li>Monitor and analyze usage patterns to improve user experience</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">We do not sell your personal information. We may share your information with:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing (Razorpay), email delivery, and analytics.</li>
            <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request.</li>
            <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, sale, or transfer of assets.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">5. Data Security</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">6. Cookies and Tracking Technologies</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">7. Your Rights</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">Depending on your location, you may have the following rights:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Access, update, or delete your personal information</li>
            <li>Object to or restrict the processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">To exercise these rights, please contact us at paras@prsmahajan.com.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">8. International Data Transfers</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">9. Data Retention</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">10. Children's Privacy</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">12. Contact Us</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">If you have any questions about this Privacy Policy, please contact us:</p>
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
