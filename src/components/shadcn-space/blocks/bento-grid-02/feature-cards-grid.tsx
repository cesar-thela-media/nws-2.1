import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Since 2007",
    description:
      "Serving Richmond, TX and nearby Fort Bend communities with custom builds and full-service remodeling.",
    image: "/images/custom-home-richmond-tx.jpg",
    alt: "Custom home by NWS in Richmond, TX",
  },
  {
    title: "Full-service team",
    description:
      "Service from kitchens and baths to additions and custom homes, one accountable team.",
    image: "/images/kitchen-gallery-1.jpeg",
    alt: "Kitchen remodeling by NWS",
  },
  {
    title: "Ready for a clear next step?",
    description:
      "Free consult · 5% off when you mention the website. Call our Richmond office today.",
    image: "/images/bathroom-remodeling-richmond-tx.jpg",
    alt: "Bathroom remodeling by NWS",
  },
];

export function FeatureCardsGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex h-auto min-h-75 flex-col overflow-hidden rounded-xl border border-border bg-muted py-0 gap-0 shadow-none ring-0"
          >
            <div className="relative flex flex-1 items-center justify-center overflow-hidden min-h-[10rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image}
                alt={feature.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardHeader className="flex flex-col gap-2 lg:gap-0.5 p-5 sm:p-6 pt-0 sm:pt-0 pb-5 sm:pb-6 bg-card">
              <CardTitle className="text-lg font-medium text-foreground">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-normal">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
