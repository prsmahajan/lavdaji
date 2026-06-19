import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { FaqItem } from "@/components/FaqItem";

const faqItems = [
  {
    question: "Do you handle everything yourself?",
    answer:
      "Strategy and oversight, yes. For bigger builds, specialist help gets brought in for specific parts. But you deal with one person who understands the full picture, not a different freelancer every week.",
  },
  {
    question: "Why does it start with an audit?",
    answer:
      "Because ads, content, tracking, and follow-up all affect each other. Without looking at the full setup, you end up fixing the wrong thing first. The audit shows us what's actually worth fixing.",
  },
  {
    question: "Can you run Facebook or Instagram ads?",
    answer:
      "Yes, when it makes sense. If your landing page, offer message, or tracking is weak, we address those first. Running more ads to a broken funnel just wastes money faster.",
  },
  {
    question: "Can you fix my analytics so I know what's working?",
    answer:
      "Yes. Getting your tracking set up properly so you can trust what you're seeing, and know which ads and pages are actually bringing in customers, is one of the most common things we do.",
  },
  {
    question: "Where does content and branding fit in?",
    answer:
      "They make everything else work better. When your message is clear, more people understand your offer, trust it faster, and take action. We focus on this when it's the actual bottleneck.",
  },
  {
    question: "What kind of automation do you build?",
    answer:
      "Practical things: automatic lead routing, follow-up sequences, regular reporting, and content workflows. We use tools you already have or ones that are easy to learn and manage yourself.",
  },
  {
    question: "Can we start small?",
    answer:
      "Yes. Most people start with the audit or one focused sprint around a single clear problem. Ongoing monthly support only makes sense once there's something working that's worth maintaining.",
  },
  {
    question: "What do you need before the first call?",
    answer:
      "Nothing formal. Just a rough idea of your offer, how you currently get clients, and what you wish was going better. That's plenty to start a useful conversation.",
  },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest?.('[data-faq-card="true"]')) {
        return;
      }

      setOpenQuestion(null);
    };

    if (openQuestion) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openQuestion]);

  return (
    <Layout>
      <Seo
        title="Common Questions | How We Work Together"
        description="Plain answers to what we do, why we start with an audit, and whether working together makes sense for your business."
        path="/faq"
      />
      <section className="space-y-4">
        <h1 className="sr-only">Frequently asked questions</h1>
        <SectionHeader
          id="faq"
          label="FAQ"
          description="Straight answers to the questions most people have before booking a call."
        />
      </section>

      <section
        className="mt-10 space-y-4 border-t pt-6 md:mt-16 md:pt-10"
        onClick={() => setOpenQuestion(null)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {faqItems.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openQuestion === item.question}
              onToggle={() =>
                setOpenQuestion((current) =>
                  current === item.question ? null : item.question,
                )
              }
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
