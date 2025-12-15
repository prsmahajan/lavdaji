import { Layout } from "@/components/Layout";

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
  return (
    <Layout>
      <section className="space-y-6">
        <h1>FAQ</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          If you are considering working together, these are the questions that usually matter most.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-lg border bg-card p-4">
            <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </section>
    </Layout>
  );
};

export default FAQ;
