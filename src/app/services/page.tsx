import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Services10 from "@/components/shadcn-space/blocks/services-10/services";
import { serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Learn more about our dependable remodeling company in Richmond, TX. We have over 35 years of combined experience. Call us at (281) 299-2309.",
};

const stripPhotos = [
  "/images/custom-homes-1.jpeg",
  "/images/kitchen-gallery-1.jpeg",
  "/images/bathroom-gallery-1.jpeg",
  "/images/whole-home-remodeling-richmond-tx.jpg",
  "/images/home-addition-contractors.webp",
  "/images/garage-remodel.webp",
  "/images/open-concept.webp",
  "/images/Basement-Finishing.webp",
  "/images/remodeling-1.jpeg",
  "/images/custom-homes-3.jpeg",
  "/images/bathroom-gallery-3.jpeg",
];

/** Services hub: alternating photo+copy bands (distinct from gallery masonry / location rail) */
export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#070b0c] text-white">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/whole-home-remodeling-richmond-tx.jpg)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#070b0c]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="text-sm font-semibold text-primary !m-0 mb-3">
            What we offer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight !m-0">
            Our quality services
          </h1>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto text-base sm:text-lg !m-0">
            Our wide range of services means we can build you a custom home from
            square one or remodel an existing one. We can help you find the
            right lot, plan out your dream home, or help you convert an existing
            structure into your dream home!
          </p>
          <Button
            className="mt-8 rounded-[4px] h-11 !text-white"
            render={<Link href="/contact/" />}
          >
            Contact our experts
          </Button>
        </div>
      </section>

      <Services10 />

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {serviceCards.map((s, i) => (
            <article
              key={s.slug}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-border bg-[#f7f5f1] shadow-sm hover:border-primary/30 transition-colors"
            >
              <div
                className={`md:col-span-5 relative min-h-[12rem] md:min-h-[14rem] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={stripPhotos[i % stripPhotos.length]}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`md:col-span-7 p-6 sm:p-8 flex flex-col justify-center gap-3 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h2 className="text-2xl font-bold tracking-tight !m-0">
                  {s.title}
                </h2>
                <p className="text-muted-foreground !m-0 leading-relaxed">
                  {s.front}
                </p>
                <Link
                  href={s.href}
                  className="text-primary font-semibold w-fit hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
