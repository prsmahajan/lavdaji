import { ReactNode } from "react";

interface FaqItemProps {
  question: string;
  answer: ReactNode;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <details className="rounded-lg border bg-card p-5 text-sm">
      <summary className="cursor-pointer list-none font-medium text-foreground">
        {question}
      </summary>
      <div className="mt-2 text-muted-foreground text-sm">{answer}</div>
    </details>
  );
};
