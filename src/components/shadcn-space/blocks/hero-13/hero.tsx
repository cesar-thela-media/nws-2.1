"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

/**
 * Official NWS YouTube channel (linked from nws-homes.com footer).
 * Latest project videos represent who they are in the field; no stock Space demo video.
 * Source: https://www.youtube.com/channel/UCeJ8l_IhyNplw76bt0yk4NA
 * Primary: Second Bath Makeover - https://www.youtube.com/watch?v=nSJ_8lzRTjM
 */
export const NWS_ABOUT_YOUTUBE_ID = "nSJ_8lzRTjM";
export const NWS_ABOUT_YOUTUBE_EMBED = `https://www.youtube.com/embed/${NWS_ABOUT_YOUTUBE_ID}?autoplay=1&rel=0`;
export const NWS_ABOUT_YOUTUBE_WATCH = `https://www.youtube.com/watch?v=${NWS_ABOUT_YOUTUBE_ID}`;

const stats = [
  { label: "Serving Fort Bend", value: "Since 2007" },
  { label: "Projects", value: "Custom + remodel" },
  { label: "Office", value: site.phone.office },
];

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  return (
    <section className="bg-background">
      <div className="relative">
        <div className="relative max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 w-full h-full z-20">
          <div className="flex lg:flex-row flex-col justify-between lg:items-end relative z-1 gap-6 py-10 md:py-16 pt-28 md:pt-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary mb-3 !m-0">
                About NWS
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground uppercase !m-0">
                Your go-to home builders
              </h1>
            </div>
            <div className="flex group items-center gap-1 shrink-0">
              <Button
                className="px-6 py-3.5 h-auto rounded-[4px] cursor-pointer !text-white"
                render={<a href={`tel:${site.phone.officeTel}`} />}
              >
                Speak to Our Experts
              </Button>
              <Button
                className="p-4 rounded-[4px] h-auto transition-transform duration-300 ease-out group-hover:rotate-45 cursor-pointer !text-white"
                render={<Link href="/services/" />}
                aria-label="View services"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 border-x right-0 pointer-events-none opacity-40">
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="relative max-w-7xl mx-auto overflow-hidden lg:aspect-video md:aspect-video aspect-video bg-black">
          {/* Banner Image - NWS project photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-home-remodeled-richmond-tx.webp"
            alt="NWS custom home and remodeling in Richmond, TX"
            width={1280}
            height={720}
            className={`object-cover transition-opacity duration-500 ease-in-out w-full h-full ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* NWS YouTube embed (official channel) */}
          {isPlaying && (
            <iframe
              title="NWS Custom Homes and Remodeling - project video"
              src={NWS_ABOUT_YOUTUBE_EMBED}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          )}

          {!isPlaying && (
            <Button
              onClick={handlePlay}
              aria-label="Play NWS project video"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:h-22 lg:w-22 h-15 w-15 rounded-full cursor-pointer bg-primary/90 hover:bg-primary transition hover:scale-105 !text-white"
            >
              <Play className="lg:size-8 size-5 text-white" fill="white" />
            </Button>
          )}

          {isPlaying && (
            <Button
              onClick={handleClose}
              aria-label="Close video"
              className="absolute right-6 top-6 z-10 h-10 w-10 rounded-full bg-black/60 hover:bg-black/80 cursor-pointer !text-white"
            >
              <X className="size-5 text-white" />
            </Button>
          )}

          <div
            className={`absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 lg:max-w-xl text-white md:block transition-all duration-300 ${
              isPlaying
                ? "opacity-0 translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-base sm:text-xl text-white font-normal drop-shadow-md !m-0">
              Full-service custom homes and remodeling in Richmond and nearby
              Fort Bend communities since 2007.
            </p>
          </div>
        </div>
      </div>

      {/* Replaces hero-13 logo marquee (BrandSlider): Fort Bend / Projects / Office */}
      <div
        className="border-y border-border bg-[#12181b]"
        data-about-hero-stats
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider text-white/50 !m-0">
                {s.label}
              </p>
              <p className="text-xl font-bold text-white !m-0 mt-1">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
