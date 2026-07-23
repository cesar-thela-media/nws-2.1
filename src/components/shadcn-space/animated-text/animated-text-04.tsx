"use client";

import { useCallback, useEffect, useState } from "react";
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
  defaultColor?: string;
  forceDefaultColor?: boolean;
  className?: string;
};

/**
 * Two-line hero roller with a seamless continuous loop.
 * Items are duplicated; when we finish the first set we snap (no transition)
 * back to the same city in the first set so the next step continues forward.
 */
const LINE_EM = 1.25;

const AnimatedTextRoller = ({
  prefix,
  items,
  intervalMs = 2200,
  defaultColor = "text-primary",
  forceDefaultColor = true,
  className,
}: AnimatedTextRollerProps) => {
  // index into the *duplicated* list (0 .. items.length*2 - 1)
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const n = items.length;
  // Two copies so we can always step forward: [...items, ...items]
  const loopItems = n > 0 ? [...items, ...items] : [];

  const step = useCallback(() => {
    if (n <= 1) return;
    setAnimate(true);
    setIndex((prev) => prev + 1);
  }, [n]);

  useEffect(() => {
    if (n <= 1) return;
    const id = setInterval(step, intervalMs);
    return () => clearInterval(id);
  }, [n, intervalMs, step]);

  // After landing on a clone (index >= n), snap back without animation
  useEffect(() => {
    if (n <= 1) return;
    if (index < n) return;

    // Wait for the forward transition to finish, then reset silently
    const t = window.setTimeout(() => {
      setAnimate(false);
      setIndex((prev) => prev - n);
      // Re-enable animation on next frame so the following step animates
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }, 700); // match duration-700

    return () => window.clearTimeout(t);
  }, [index, n]);

  if (n === 0) return null;

  return (
    <span
      className={cn(
        "flex w-full max-w-full flex-col items-center gap-0",
        className,
      )}
    >
      {prefix ? (
        <span className="block w-full text-center text-white whitespace-nowrap px-1 leading-[1.15]">
          {prefix}
        </span>
      ) : null}

      <span
        className="relative mx-auto block w-full max-w-full overflow-hidden text-center"
        style={{
          height: `${LINE_EM}em`,
          contain: "paint",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className={cn(
            "flex flex-col items-center will-change-transform",
            animate && "transition-transform duration-700 ease-in-out",
          )}
          style={{
            transform: `translate3d(0, calc(-${index} * ${LINE_EM}em), 0)`,
          }}
        >
          {loopItems.map((item, i) => (
            <span
              key={`${item.text}-${i}`}
              className={cn(
                "flex w-full shrink-0 items-center justify-center whitespace-nowrap px-1",
                forceDefaultColor
                  ? defaultColor
                  : (item.color ?? defaultColor),
              )}
              style={{
                height: `${LINE_EM}em`,
                lineHeight: `${LINE_EM}em`,
              }}
              aria-hidden={i % n !== index % n}
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
