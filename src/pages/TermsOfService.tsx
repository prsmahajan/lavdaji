import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const TermsOfService = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Service | Paras Mahajan"
        description="Terms of service for Paras Mahajan's freelance services. Read about the terms and conditions that govern the use of our services."
      />
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
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
          <h2 className="text-xl md:text-2xl font-semibold">1. Agreement to Terms</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            By accessing or using the services provided by Paras Mahajan ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">2. Services Description</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We provide freelance software development, automation, and technical consulting services. Specific deliverables, timelines, and project scope will be outlined in individual project agreements or statements of work.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">3. Client Responsibilities</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">As a client, you agree to:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Provide accurate and complete information necessary for project completion</li>
            <li>Respond to communications and requests in a timely manner</li>
            <li>Provide necessary access to systems, accounts, or resources as required</li>
            <li>Make timely payments according to the agreed-upon payment terms</li>
            <li>Respect intellectual property rights and licensing agreements</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">4. Payment Terms</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Payment Methods:</strong> We accept payments through Razorpay and other agreed-upon payment methods.</li>
            <li><strong className="text-foreground">Payment Schedule:</strong> Payment terms will be specified in the project agreement. Typical arrangements include upfront deposits, milestone-based payments, or payment upon completion.</li>
            <li><strong className="text-foreground">Late Payments:</strong> Late payments may result in project suspension or termination. A late fee may be applied to overdue invoices.</li>
            <li><strong className="text-foreground">Currency:</strong> All prices are quoted in Indian Rupees (INR) or US Dollars (USD) unless otherwise specified.</li>
            <li><strong className="text-foreground">Taxes:</strong> Prices do not include applicable taxes unless stated otherwise. You are responsible for any taxes associated with the purchase.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">5. Project Timeline and Deliverables</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Project timelines are estimates and may be subject to change based on project complexity, client feedback cycles, and unforeseen circumstances. We will communicate any timeline changes promptly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">6. Intellectual Property Rights</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Client-Owned IP:</strong> Upon full payment, you will own the intellectual property rights to custom work created specifically for your project, unless otherwise agreed.</li>
            <li><strong className="text-foreground">Pre-Existing IP:</strong> Any pre-existing code, frameworks, libraries, or tools used in your project remain the property of their respective owners.</li>
            <li><strong className="text-foreground">Portfolio Rights:</strong> We reserve the right to showcase completed work in our portfolio unless a non-disclosure agreement prohibits it.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">7. Confidentiality</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We respect the confidentiality of your business information and will not disclose sensitive information to third parties without your consent, except as required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">8. Warranties and Disclaimers</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We provide services with professional care and skill. However, we do not guarantee that the services will be error-free or uninterrupted. Services are provided "as is" without warranties of any kind, either express or implied.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">9. Limitation of Liability</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">10. Termination</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Either party may terminate the service agreement with written notice. Upon termination:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>You are responsible for payment for all work completed up to the termination date</li>
            <li>We will deliver all completed work and project files</li>
            <li>Refunds will be processed according to our Refund & Cancellation Policy</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">11. Modifications to Service</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We reserve the right to modify or discontinue services at any time. We will provide reasonable notice of significant changes that may affect ongoing projects.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">12. Indemnification</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">13. Governing Law</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in India.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">14. Changes to Terms</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">15. Contact Information</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">If you have questions about these Terms of Service, please contact us:</p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Email:</strong> paras@prsmahajan.com</li>
            <li><strong className="text-foreground">Phone:</strong> +91 (904)11 62603</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default TermsOfService;
