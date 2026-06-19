import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const RefundPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Refund and Cancellation Policy | Paras Mahajan"
        description="Clear terms on cancellations and refunds for marketing audit, growth sprint, and ongoing support services."
        path="/refund"
      />
      <div className="space-y-8 max-w-3xl">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund and Cancellation Policy</h1>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p><strong>Effective Date:</strong> June 19, 2026</p>
            <p><strong>Last Updated:</strong> June 19, 2026</p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">1. The Short Version</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            You pay for work that gets done. If you cancel early, you pay for what's been completed and we refund the rest. Free calls can be cancelled or rescheduled without any issue.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">2. Free Consultation Calls</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>The initial 30-minute call is free. Cancel or reschedule up to 24 hours in advance without any issue.</li>
            <li>If you miss a booked call without notice, we may ask for a deposit before scheduling again.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">3. Marketing Audit</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Before the session:</strong> Full refund if you cancel at least 48 hours in advance.</li>
            <li><strong className="text-foreground">Less than 48 hours notice:</strong> 50% refund.</li>
            <li><strong className="text-foreground">After the session is delivered:</strong> No refund. The audit is a time-based service and the work is done at that point.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">4. Growth Sprints and Project Work</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">Before work starts:</strong> Full refund minus a 10% admin fee to cover payment processing and scheduling costs.</li>
            <li><strong className="text-foreground">0 to 25% complete:</strong> Refund of 75% of the remaining balance, after deducting the value of completed work.</li>
            <li><strong className="text-foreground">26 to 50% complete:</strong> Refund of 50% of the remaining balance, after deducting completed work.</li>
            <li><strong className="text-foreground">51 to 75% complete:</strong> Refund of 25% of the remaining balance, after deducting completed work.</li>
            <li><strong className="text-foreground">Over 75% complete:</strong> No refund. Full payment is due for work completed.</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
            Completion percentage is based on the milestones or deliverables agreed in the project confirmation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">5. Ongoing Monthly Support</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Cancel with 30 days written notice at any time.</li>
            <li>No refund for the current billing period once it has started.</li>
            <li>Unused time in a month does not carry over unless specifically agreed.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">6. If We Cancel</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We may end an engagement if payment is not made, you are unable to provide necessary access, or there is a breach of our Terms of Service. In that case, you will receive a refund for any work not yet delivered.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">7. If You Are Not Happy With the Work</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            If a deliverable does not meet the agreed brief, let us know within 7 days of delivery with specific feedback. We will revise it at no extra cost (typically up to 2 rounds, as specified in the project confirmation). If revisions do not resolve the concern, we will discuss a fair outcome.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">8. What Is Not Refundable</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li>Third-party services or subscriptions purchased on your behalf</li>
            <li>Payment processing fees charged by Razorpay</li>
            <li>Work that has been delivered and approved</li>
            <li>Time spent on approved revisions</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">9. How Refunds Are Processed</h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground ml-4 list-disc">
            <li><strong className="text-foreground">How to request:</strong> Email paras@prsmahajan.com with your name, the service, and the reason for the request.</li>
            <li><strong className="text-foreground">Processing time:</strong> Approved refunds are processed within 7 to 14 business days.</li>
            <li><strong className="text-foreground">Refund method:</strong> Refunds go back to the original payment method where possible.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">10. Disputes</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            If something is not right, contact us directly first. We will work to find a fair resolution. If we cannot agree, both parties will pursue mediation before taking any legal action.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">11. Contact</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">To request a refund or ask about this policy:</p>
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
