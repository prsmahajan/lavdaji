import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id?: string;
  label: string;
  eyebrow?: string;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  labelUnderline?: boolean;
}

export const SectionHeader = ({
  id,
  label,
  eyebrow,
  description,
  align = "left",
  as = "h2",
  className,
  labelUnderline = false,
}: SectionHeaderProps) => {
  const HeadingTag = as;

  return (
    <header
      className={cn(
        "space-y-1",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <HeadingTag
        id={id}
        className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        {labelUnderline ? (
          <span className="relative inline-block pb-2">
            {label}
            <svg
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
              className="absolute -bottom-0.5 left-0 h-[5px] w-full text-accent"
              aria-hidden="true"
            >
              <path
                d="M 1 1 Q 50 5.5 99 1"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        ) : (
          label
        )}
      </HeadingTag>
      {description && (
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      )}
    </header>
  );
};
