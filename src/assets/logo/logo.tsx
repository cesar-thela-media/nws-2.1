import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  /** Light treatment for dark / over-hero chrome */
  onDark?: boolean;
  /**
   * `mark` — compact horizontal wordmark for navbar (default).
   * `full` — stacked brand PNG for footers / large placements.
   */
  variant?: "mark" | "full";
};

/**
 * NWS brand logo.
 * Navbar: roof mark + site typography (no invert filter on tall gbp.png).
 * Footer: full stacked gbp.png with optional invert on dark/orange grounds.
 */
const Logo = ({
  onDark = false,
  variant = "mark",
  className,
  ...props
}: LogoProps) => {
  if (variant === "full") {
    return (
      <div className={cn("flex items-center shrink-0", className)} {...props}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.logo}
          alt={site.name}
          width={180}
          height={104}
          className={cn(
            "h-auto w-[140px] sm:w-[160px] max-w-full object-contain object-left",
            onDark && "brightness-0 invert",
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 shrink-0 min-w-0",
        onDark ? "text-white" : "text-zinc-950",
        className,
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 32"
        fill="none"
        className="h-8 w-10 sm:h-9 sm:w-11 shrink-0"
        aria-hidden
      >
        <path
          d="M2 26 L20 6 L38 26"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 26 L34 6 L52 26"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="27" cy="15" r="2.4" fill="#FF4500" />
      </svg>
      <span className="flex flex-col leading-none min-w-0">
        <span
          className={cn(
            "font-heading text-[1.05rem] sm:text-lg font-bold tracking-[0.08em]",
            onDark ? "text-white" : "text-zinc-950",
          )}
        >
          NWS
        </span>
        <span
          className={cn(
            "text-[0.55rem] sm:text-[0.625rem] font-semibold tracking-[0.16em] uppercase mt-0.5",
            onDark ? "text-white/80" : "text-zinc-600",
          )}
        >
          Custom Homes
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </div>
  );
};

export default Logo;
