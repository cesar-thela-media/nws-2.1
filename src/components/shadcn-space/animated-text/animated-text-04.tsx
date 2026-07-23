"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type RollerItem = {
  text: string;
  color?: string;
};

export type AnimatedTextRollerProps = {
  /** Line 1 — static (e.g. "Custom homes & remodels in") */
  prefix?: string;
  items: RollerItem[];
  intervalMs?: number;
  /** Applied to every city (item.color ignored when forceDefault) */
  defaultColor?: string;
  /** Always use defaultColor (no per-item colors) */
  forceDefaultColor?: boolean;
  className?: string;
};

/**
 * Two-line hero roller:
 *   Line 1: prefix (white)
 *   Line 2: ONE location at a time (orange)
 *
 * Line height is fixed in rem so clip + translate stay locked (no letter bleed).
 */
const LINE_REM = 1.25; // rem — must match each item box + step

const AnimatedTextRoller = ({
  prefix,
  items,
  intervalMs = 2200,
  defaultColor = "text-primary",
  forceDefaultColor = true,
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

  return (
    <span
      className={cn(
        "flex w-full max-w-full flex-col items-center gap-0",
        className,
      )}
    >
      {prefix ? (
        <span className="block w-full text-center text-white text-balance px-1 leading-[1.15]">
          {prefix}
        </span>
      ) : null}

      {/* Fixed-height clip: one city only — rem units prevent partial letters */}
      <span
        className="relative mx-auto block w-full max-w-full overflow-hidden text-center"
        style={{
          height: `${LINE_REM}em`,
          // Isolate paint so scrolled letters never show outside
          contain: "paint",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className="flex flex-col items-center will-change-transform transition-transform duration-700 ease-in-out"
          style={{
            transform: `translate3d(0, calc(-${index} * ${LINE_REM}em), 0)`,
          }}
        >
          {items.map((item, i) => (
            <span
              key={`${item.text}-${i}`}
              className={cn(
                "flex w-full shrink-0 items-center justify-center whitespace-nowrap px-1",
                forceDefaultColor
                  ? defaultColor
                  : (item.color ?? defaultColor),
              )}
              style={{
                height: `${LINE_REM}em`,
                lineHeight: `${LINE_REM}em`,
              }}
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
