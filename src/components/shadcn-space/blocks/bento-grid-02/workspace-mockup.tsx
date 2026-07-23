import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { Hammer, Home, Bath, CookingPot } from "lucide-react";

const highlights = [
  { icon: Home, label: "Custom homes" },
  { icon: CookingPot, label: "Kitchens" },
  { icon: Bath, label: "Baths" },
  { icon: Hammer, label: "Remodels" },
];

export function WorkspaceMockup() {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border bg-muted grid grid-cols-12 min-h-100">
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-8 lg:gap-0 p-6 md:p-10">
          <div className="flex flex-col items-start gap-6">
            <p className="text-xl sm:text-2xl font-medium text-foreground max-w-96 !m-0">
              Serving Richmond, TX and nearby Fort Bend communities with custom
              builds and full-service remodeling since 2007.
            </p>
            <Button
              className="h-10 rounded-[4px] px-4 text-sm font-medium !text-white"
              render={<a href={`tel:${site.phone.officeTel}`} />}
            >
              Book a consult
            </Button>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-muted-foreground !m-0">What we build</p>
            <div className="flex flex-wrap items-center gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="size-4 text-primary" />
                  <p className="text-sm text-muted-foreground !m-0">{label}</p>
                </div>
              ))}
            </div>
            <Button
              variant="link"
              className="h-auto p-0 text-primary"
              render={<Link href="/services/" />}
            >
              View all services
            </Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 relative min-h-[16rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/whole-home-remodeling-richmond-tx.jpg"
            width={687}
            height={400}
            alt="Whole home remodeling by NWS Custom Homes in Richmond, TX"
            className="w-full h-auto max-h-65 md:max-h-none object-cover object-center md:h-full md:w-full block"
          />
        </div>
      </div>
    </div>
  );
}
