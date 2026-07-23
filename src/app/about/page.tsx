import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import Feature18 from "@/components/shadcn-space/blocks/feature-18/feature";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "We're a full-service construction company specializing in remodeling and custom homes. We've been building our reputation for excellence since 2007.",
};

const stats = [
  { label: "Serving Fort Bend", value: "Since 2007" },
  { label: "Projects", value: "Custom + remodel" },
  { label: "Office", value: site.phone.office },
];

/** About: cinematic banner + story/stats (not generic PageHero+two-col template) */
export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[42svh] sm:min-h-[48svh] flex items-end overflow-hidden">
        <Image
          src="/images/hero-custom-home-remodeling-paralax-image.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 pt-28">
          <p className="text-sm font-semibold text-primary mb-2">About NWS</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight !m-0 max-w-3xl">
            Your go-to home builders
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl text-base sm:text-lg !m-0">
            Full-service custom homes and remodeling in Richmond and nearby Fort
            Bend communities.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-[#12181b]">
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
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 prose-nws">
            <p className="section-label">Our story</p>
            <h2 className="section-title">
              Discover the true meaning of custom homes
            </h2>
            <p>
              Discover the true meaning of Custom Homes with NWS Custom Homes and
              Remodeling! We&apos;re a full-service construction company
              specializing in remodeling and custom homes. We&apos;ve been
              building our reputation for excellence since 2007 and have recently
              expanded our services to include more projects than ever before. We
              offer a range of options for your remodeling needs: from kitchen and
              bathroom renovations to complete additions, we do it all!
            </p>
            <p>
              Our team is composed of highly skilled professionals who work
              together seamlessly to ensure that each project goes smoothly from
              start to finish.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 not-prose">
              <Button
                className="rounded-[4px] h-11 !text-white"
                render={<a href={`tel:${site.phone.officeTel}`} />}
              >
                Speak to Our Experts
              </Button>
              <Button
                variant="outline"
                className="rounded-[4px] h-11"
                render={<Link href="/services/" />}
              >
                View services
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image
              src="/images/whole-home-remodeling-richmond-tx.jpg"
              alt="Custom home and remodeling work by NWS"
              width={800}
              height={1000}
              className="w-full h-full object-cover min-h-[22rem]"
            />
          </div>
        </div>
      </section>

      {/* Distinct from home: feature-18 block (not home portfolio stack) */}
      <Feature18 />

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
