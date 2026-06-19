import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { Card } from "@/components/ui/card";

const Proof = () => {
  return (
    <Layout>
      <Seo
        title="Results | Real Marketing Problems We've Solved"
        description="See how we've helped businesses fix broken ad tracking, unfocused content, slow lead follow-up, and unclear offer messaging."
        path="/proof"
      />
      <section className="space-y-4">
        <h1 className="sr-only">Problems we've solved</h1>
        <SectionHeader
          id="proof"
          label="Problems we've solved"
          description="Real problems we've fixed for real businesses. Details kept confidential. These show you how we think and what a fix actually looks like."
          labelUnderline
        />
      </section>

      <section className="mt-12 space-y-5 border-t pt-6 md:mt-20 md:pt-10">
        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Spending on Ads With No Way to Measure Results</h2>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            A business was running Facebook ad campaigns but had no reliable way to see which ones were bringing in
            actual enquiries or booked calls. They were making decisions based on platform numbers that didn't match
            what was actually happening.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">What we did</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Fixed the pixel setup, rebuilt Google Analytics conversion tracking, cleaned up campaign naming, and
            created a simple report focused on lead quality rather than impressions and clicks.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            They could finally see which campaigns to pause, which creatives to keep testing, and exactly where in
            the funnel people were dropping off.
          </p>
          <p className="text-xs text-muted-foreground">Full implementation details available on request.</p>
        </Card>

        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Posting Every Week but Getting Zero Enquiries</h2>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            The team was putting out content consistently but nothing was turning into leads. The posts had no clear
            link to the offer, no reason to take action, and no path that led someone toward making an enquiry.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">What we did</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Worked on their positioning, built content themes around questions their buyers actually ask, and mapped
            each type of content to a specific goal: either building trust or moving someone toward a booking.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            A repeatable content system where every post, email, and ad reinforced the same message and moved people
            in the same direction.
          </p>
          <p className="text-xs text-muted-foreground">Full implementation details available on request.</p>
        </Card>

        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Leads Coming In but Not Turning Into Sales</h2>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Enquiries were arriving through forms, direct messages, and referrals, but follow-up relied on manual
            reminders and notes scattered across different tools. Leads were going cold before anyone got back to them.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">What we did</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Built a lightweight automation layer using the tools already in the business. New leads got routed
            automatically, follow-up messages went out on time, and the team got notified without checking manually.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Fewer missed leads, faster first contact, and a clear view of where every prospect sat in the pipeline
            at any given time.
          </p>
          <p className="text-xs text-muted-foreground">Full implementation details available on request.</p>
        </Card>

        <Card className="p-6">
          <h2 className="mb-1 text-base md:text-lg">Good Website Traffic That Wasn't Turning Into Enquiries</h2>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Problem</p>
          <p className="mb-3 text-sm text-muted-foreground">
            The offer was strong, but the website and ads were written for too many different audiences at once.
            People would land on the page and leave without understanding what was actually available to them.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">What we did</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Identified the primary buyer, rewrote the offer in plain language, and gave every ad, landing page, and
            campaign one clear promise to lead with.
          </p>
          <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[3px]">Result</p>
          <p className="mb-3 text-sm text-muted-foreground">
            A simpler message that the whole business could build from. Ads, content, sales conversations, and the
            website all said the same thing in the same way.
          </p>
          <p className="text-xs text-muted-foreground">Full implementation details available on request.</p>
        </Card>
      </section>
    </Layout>
  );
};

export default Proof;
