import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const RefundPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Refund & Cancellation Policy | Paras Mahajan"
        description="Refund and cancellation policy for Paras Mahajan's freelance services. Learn about our refund process and cancellation terms."
      />
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
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
          <h2 className="text-xl md:text-2xl font-semibold">1. Overview</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            This Refund & Cancellation Policy outlines the terms and conditions for cancellations and refunds for services provided by Paras Mahajan. We strive to ensure client satisfaction while maintaining fair business practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">2. Consultation and Discovery Calls</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Free Consultations:</strong> Initial consultation calls are typically offered at no charge. These can be cancelled or rescheduled up to 24 hours before the scheduled time without penalty.</li>
            <li><strong className="text-foreground">No-Shows:</strong> If you miss a scheduled consultation without prior notice, we reserve the right to require a deposit for future bookings.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">3. Project Deposits</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Non-Refundable Deposits:</strong> Initial project deposits (typically 25-50% of the project cost) are non-refundable once work has commenced.</li>
            <li><strong className="text-foreground">Pre-Commencement Cancellation:</strong> If you cancel before any work has started, deposits may be refunded minus a 10% administrative fee.</li>
            <li><strong className="text-foreground">Deposit Application:</strong> Deposits are applied toward the final project cost and secure your spot in our project queue.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">4. Project Cancellation by Client</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Before Project Start:</strong> Full refund minus deposit (subject to pre-commencement terms above).</li>
            <li><strong className="text-foreground">During Project (0-25% Complete):</strong> Refund of 75% of remaining project balance after deducting completed work and deposit.</li>
            <li><strong className="text-foreground">During Project (26-50% Complete):</strong> Refund of 50% of remaining project balance after deducting completed work and deposit.</li>
            <li><strong className="text-foreground">During Project (51-75% Complete):</strong> Refund of 25% of remaining project balance after deducting completed work and deposit.</li>
            <li><strong className="text-foreground">During Project (76-100% Complete):</strong> No refund available. You are responsible for full payment of completed work.</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
            Completion percentage is determined based on agreed-upon milestones and deliverables outlined in the project agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">5. Project Cancellation by Us</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We reserve the right to cancel a project in the following circumstances:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Non-payment or repeated late payments</li>
            <li>Failure to provide necessary information or resources</li>
            <li>Scope creep beyond reasonable limits without additional compensation</li>
            <li>Violation of our Terms of Service</li>
            <li>Abusive or unprofessional conduct</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
            In such cases, you will receive a refund for any work not yet completed, minus the value of work already delivered.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">6. Milestone-Based Projects</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            For projects with milestone-based payments:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Payments for completed and approved milestones are non-refundable</li>
            <li>You may cancel at any milestone completion point</li>
            <li>Refunds apply only to future, uncompleted milestones</li>
            <li>Work in progress on the current milestone will be charged proportionally</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">7. Subscription or Retainer Services</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Monthly Retainers:</strong> Can be cancelled with 30 days written notice. No refund for the current billing period.</li>
            <li><strong className="text-foreground">Unused Hours:</strong> Unused retainer hours typically do not roll over to the next month unless specified in the agreement.</li>
            <li><strong className="text-foreground">Early Termination:</strong> If you terminate a retainer agreement early, the remaining contract term may be subject to an early termination fee as outlined in your agreement.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">8. Quality Guarantee</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We stand behind the quality of our work. If you are not satisfied with a deliverable:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Notify us within 7 days of delivery</li>
            <li>Provide specific, actionable feedback</li>
            <li>We will make reasonable revisions at no additional cost (typically up to 2-3 rounds of revisions as specified in the project agreement)</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
            Refunds for quality issues will be considered on a case-by-case basis if revisions do not resolve the concerns.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">9. Refund Processing</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Request Method:</strong> Refund requests must be submitted in writing to paras@prsmahajan.com.</li>
            <li><strong className="text-foreground">Processing Time:</strong> Approved refunds will be processed within 7-14 business days.</li>
            <li><strong className="text-foreground">Refund Method:</strong> Refunds will be issued to the original payment method when possible.</li>
            <li><strong className="text-foreground">Transaction Fees:</strong> Payment processing fees (typically 2-3%) are non-refundable.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">10. Non-Refundable Items</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            The following are non-refundable:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Third-party services, licenses, or subscriptions purchased on your behalf</li>
            <li>Domain registrations or hosting fees</li>
            <li>Payment processing fees</li>
            <li>Completed and delivered work</li>
            <li>Time spent on approved revisions</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">11. Force Majeure</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            In the event of circumstances beyond our control (natural disasters, pandemics, government actions, etc.), we will work with you to reschedule or adjust the project timeline. Refunds may be available on a case-by-case basis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">12. Dispute Resolution</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            If you have concerns about a refund or cancellation, please contact us directly to discuss. We are committed to finding fair solutions. If we cannot resolve the matter, both parties agree to pursue mediation before taking legal action.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">13. Changes to This Policy</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">14. Contact Us</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            For questions about cancellations or refunds, or to request a refund, please contact us:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Email:</strong> paras@prsmahajan.com</li>
            <li><strong className="text-foreground">Phone:</strong> +91 (904)11 62603</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
