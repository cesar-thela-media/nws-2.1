import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Dark chrome (over-hero / orange footer): light roofs+tagline asset
   * so black strokes stay readable without a solid white plate.
   */
  onDark?: boolean;
};

/**
 * Official NWS logo.
 * - Default: transparent color mark on light surfaces
 * - onDark: light-roof variant (copper NWS kept) for dark/orange chrome
 */
const Logo = ({ onDark = false, className, ...props }: LogoProps) => {
  const src = onDark
    ? (site.logoOnDark ?? site.logoTransparent ?? site.logo)
    : (site.logoTransparent ?? site.logo);

  return (
    <div className={cn("flex items-center shrink-0", className)} {...props}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={site.name}
        width={160}
        height={92}
        className={cn(
          "h-10 sm:h-11 w-auto max-h-11 object-contain object-left",
          onDark && "drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]",
        )}
        style={{ height: 44, maxHeight: 44, width: "auto" }}
        decoding="async"
      />
    </div>
  );
};

export default Logo;
