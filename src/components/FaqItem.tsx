import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface FaqItemProps {
  question: string;
  answer: ReactNode;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <details
      className="group rounded-lg border bg-card p-5 text-sm transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/60"
      onToggle={(event) => {
        if (event.currentTarget.open) {
          trackEvent("faq_item_open", { question });
        }
      }}
    >
      <summary className="cursor-pointer list-none font-medium text-foreground outline-none transition-colors group-hover:text-muted-foreground group-focus-visible:text-muted-foreground">
        {question}
      </summary>
      <div className="mt-2 text-sm text-muted-foreground">{answer}</div>
    </details>
  );
};
