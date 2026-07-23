import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import Hero13About from "@/components/shadcn-space/blocks/hero-13";
import AboutUs13 from "@/components/shadcn-space/blocks/about-us-13/about-us";
import BentoGrid02 from "@/components/shadcn-space/blocks/bento-grid-02";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "We're a full-service construction company specializing in remodeling and custom homes. We've been building our reputation for excellence since 2007.",
};

/** About: Space hero-13 + about-us-13 + bento-grid-02 + existing map/form */
export default function AboutPage() {
  return (
    <>
      <Hero13About />
      <AboutUs13 />
      <BentoGrid02 />

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-border">
            <Image
              src={site.mapSmall}
              alt="NWS Custom Homes and Remodeling map"
              width={638}
              height={766}
              className="w-full h-auto"
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
