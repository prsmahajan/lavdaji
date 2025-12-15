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
}

export const SectionHeader = ({
  id,
  label,
  eyebrow,
  description,
  align = "left",
  as = "h2",
  className,
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
        {label}
      </HeadingTag>
      {description && (
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      )}
    </header>
  );
};
