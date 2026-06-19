"use client";

import React, { useMemo, type CSSProperties } from "react";

export interface CascadeTextProps {
  text: string;
  isHovered?: boolean;
  staggerDelay?: number;
  duration?: number;
  easing?: string;
  direction?: "up" | "down";
  className?: string;
  style?: CSSProperties;
}

export const CascadeText = React.memo(function CascadeText({
  text,
  isHovered = false,
  staggerDelay = 25,
  duration = 250,
  easing = "ease-in-out",
  direction = "up",
  className = "",
  style,
}: CascadeTextProps) {
  const chars = useMemo(() => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    }
    return [...text];
  }, [text]);

  const sign = direction === "up" ? 1 : -1;

  return (
    <span
      className={`inline-flex overflow-hidden relative ${className}`}
      style={{ height: "1em", ...style }}
      aria-hidden="true"
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block relative will-change-transform"
          style={{
            textShadow: `0 ${sign}em currentColor`,
            transition: `transform ${duration}ms ${easing}`,
            transitionDelay: `${i * staggerDelay}ms`,
            transform: isHovered ? `translateY(${-sign}em)` : "translateY(0)",
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
});

CascadeText.displayName = "CascadeText";
