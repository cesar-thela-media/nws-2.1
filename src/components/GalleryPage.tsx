import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Gallery04 from "@/components/shadcn-space/blocks/gallery-04/gallery";
import type { Gallery } from "@/data/galleries";

/**
 * Gallery family layout: full-bleed intro band + masonry-like staggered grid
 * (distinct from location prose + map / about stats patterns).
 */
export function GalleryPage({ gallery }: { gallery: Gallery }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0e10] text-white">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: `url(${gallery.images[0] || "/images/custom-homes-1.jpeg"})`,
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-semibold text-primary !m-0 mb-3">
            Project gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight !m-0 max-w-2xl">
            {gallery.heading}
          </h1>
          <p className="mt-4 text-white/75 max-w-xl text-base sm:text-lg !m-0">
            {gallery.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              className="rounded-[4px] h-11 !text-white"
              render={<Link href="/contact/" />}
            >
              Start a project
            </Button>
            <Button
              variant="outline"
              className="rounded-[4px] h-11 !border-white/40 !text-white hover:!bg-white/10"
              render={<a href="tel:2812992309" />}
            >
              Call us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {gallery.images.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="block break-inside-avoid rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={src}
                  alt={`${gallery.heading} ${i + 1}`}
                  width={600}
                  height={i % 3 === 0 ? 520 : 400}
                  className="w-full h-auto object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Extra shadcn-space gallery band for layout diversity on gallery family */}
      <Gallery04 />
    </>
  );
}
