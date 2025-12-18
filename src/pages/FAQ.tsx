import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { FaqItem } from "@/components/FaqItem";

const faqItems = [
  {
    question: "Do you work with agencies, creators, or founders?",
    answer:
      "All three. I work best with leaders who are close to the work and want systems that support them, not replace them.",
  },
  {
    question: "How long does a system take to build?",
    answer:
      "Most core systems are designed and launched in 2–4 weeks. Larger, multi-channel builds can take longer depending on scope.",
  },
  {
    question: "Do I need a big audience before we start?",
    answer:
      "No. What matters is a clear offer and a way people currently find you. Systems help you compound what is already working.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No. Automations remove repetitive work so your team can focus on judgment, conversation, and strategy.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Access to your current tools, clarity on your main revenue goal, and 1–2 focused sessions where we walk through how you work today.",
  },
  {
    question: "Can we start small?",
    answer:
      "Yes. Many clients start with an Automation Audit and then move into a system build once the roadmap is clear.",
  },
  {
    question: "How do you handle tools and data?",
    answer:
      "We work with the tools you already use where possible, and we keep ownership of data and access in your hands.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You can either run the system with your team using the documentation, or we can continue working together in a partnership model.",
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
        title="FAQ | Working Together on AI Systems"
        description="Answers to common questions about timelines, scope, tools, and how engagements work when building AI automation and revenue systems."
      />
      <section className="space-y-4">
        <h1 className="sr-only">Frequently asked questions</h1>
        <SectionHeader
          id="faq"
          label="FAQ"
          description="If you are considering working together, these are the questions that usually matter most before we start."
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
