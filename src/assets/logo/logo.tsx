import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * When true (over-hero / dark chrome), sit the color logo on a white plate
   * so black roof lines stay readable — same mark as nws-homes.com.
   */
  onDark?: boolean;
};

/**
 * Official NWS logo from production (gbp.png).
 * Stacked brand mark: dual roofs + copper NWS + tagline.
 */
const Logo = ({ onDark = false, className, ...props }: LogoProps) => {
  return (
    <div
      className={cn(
        "flex items-center shrink-0",
        // White plate on dark hero so the real mark matches production (black roofs + copper type)
        onDark &&
          "rounded-md bg-white px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-sm",
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- fixed height control for navbar */}
      <img
        src={site.logo}
        alt={site.name}
        width={160}
        height={92}
        className="h-10 sm:h-11 w-auto max-h-11 object-contain object-left"
        style={{ height: 44, maxHeight: 44, width: "auto" }}
        decoding="async"
      />
    </div>
  );
};

export default Logo;
