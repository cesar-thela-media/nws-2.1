"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type RollerItem = {
  /** Display text (e.g. "Richmond, TX") */
  text: string;
  /** Tailwind text color class */
  color?: string;
};

export type AnimatedTextRollerProps = {
  /** Static prefix shown before the roller (e.g. "Custom homes in") */
  prefix?: string;
  /** List of items to rotate through */
  items: RollerItem[];
  /** ms between rotations */
  intervalMs?: number;
  /** Color applied to every item (overridden by item.color) */
  defaultColor?: string;
  className?: string;
  /** Classes applied to each roller line (height + size) */
  lineClassName?: string;
  /** When true, the rotating word sits inline with the prefix on a single line */
  inline?: boolean;
};

/**
 * Vertical text roller. Rotates through `items` every `intervalMs`.
 * Used in the hero to cycle through locations they serve ("Richmond, TX" → "Sugar Land, TX" → …).
 */
const AnimatedTextRoller = ({
  prefix,
  items,
  intervalMs = 2200,
  defaultColor = "text-primary",
  className,
  lineClassName,
  inline = false,
}: AnimatedTextRollerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  const Wrapper = inline ? "span" : "div";

  return (
    <Wrapper
      className={cn(
        inline
          ? "inline-flex items-baseline gap-3 flex-wrap align-baseline"
          : "flex items-center gap-3 flex-wrap",
        className,
      )}
    >
      {prefix && (
        <span className="text-white">{prefix}</span>
      )}
      <span
        className={cn(
          "relative inline-flex overflow-hidden align-baseline",
          lineClassName ?? "h-[1.15em] min-w-[8ch] text-center",
        )}
      >
        <span
          className="flex flex-col transition-transform duration-700 ease-in-out will-change-transform"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {items.map((g, i) => (
            <span
              key={`${g.text}-${i}`}
              className={cn(
                "h-[1.15em] flex items-center justify-start whitespace-nowrap",
                lineClassName,
                g.color ?? defaultColor,
              )}
              aria-hidden={i !== index}
            >
              {g.text}
            </span>
          ))}
        </span>
      </span>
    </Wrapper>
  );
};

export default AnimatedTextRoller;
