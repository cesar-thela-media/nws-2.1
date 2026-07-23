"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type RollerItem = {
  text: string;
  color?: string;
};

export type AnimatedTextRollerProps = {
  /** Static line above the roller (e.g. "Custom homes & remodels in") */
  prefix?: string;
  items: RollerItem[];
  intervalMs?: number;
  defaultColor?: string;
  className?: string;
};

/**
 * Hero location roller — one city at a time, full text visible, centered under prefix.
 * Fixed line box + rem-step translate (not % of full stack).
 */
const AnimatedTextRoller = ({
  prefix,
  items,
  intervalMs = 2200,
  defaultColor = "text-primary",
  className,
}: AnimatedTextRollerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  // Longest label sets min-width so layout doesn’t jump between cities
  const longest = items.reduce(
    (a, b) => (b.text.length > a.length ? b.text : a),
    items[0]?.text ?? "",
  );

  return (
    <span
      className={cn(
        "flex w-full max-w-full flex-col items-center gap-1 sm:gap-1.5",
        className,
      )}
    >
      {prefix ? (
        <span className="block w-full text-center text-white text-balance px-1">
          {prefix}
        </span>
      ) : null}

      {/* One-line viewport — clips to a single city */}
      <span
        className="relative mx-auto block w-full max-w-full overflow-hidden text-center"
        style={{ height: "1.15em" }}
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Invisible sizer so width fits longest city without horizontal clip */}
        <span
          className="invisible block whitespace-nowrap px-1"
          aria-hidden
          style={{ height: 0, overflow: "hidden" }}
        >
          {longest}
        </span>

        <span
          className="flex flex-col items-center transition-transform duration-700 ease-in-out will-change-transform"
          style={{ transform: `translateY(calc(-${index} * 1.15em))` }}
        >
          {items.map((item, i) => (
            <span
              key={`${item.text}-${i}`}
              className={cn(
                "flex w-full shrink-0 items-center justify-center whitespace-nowrap px-1",
                item.color ?? defaultColor,
              )}
              style={{ height: "1.15em", lineHeight: "1.15em" }}
              aria-hidden={i !== index}
            >
              {item.text}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default AnimatedTextRoller;
