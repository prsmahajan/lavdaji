import { ReactNode, useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface FaqItemProps {
  question: string;
  answer: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof isOpen === "boolean" && typeof onToggle === "function";
  const open = isControlled ? (isOpen as boolean) : internalOpen;

  const handleClick = () => {
    if (!open) {
      trackEvent("faq_item_open", { question });
    }

    if (isControlled) {
      onToggle?.();
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <article className="group rounded-lg border bg-card p-5 text-sm transition-colors hover:bg-muted/40 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring/60">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left font-medium text-foreground outline-none transition-colors group-hover:text-muted-foreground focus-visible:text-muted-foreground"
        onClick={handleClick}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="ml-4 text-xs text-muted-foreground">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`faq-answer mt-2 text-sm text-muted-foreground ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {answer}
      </div>
    </article>
  );
};
