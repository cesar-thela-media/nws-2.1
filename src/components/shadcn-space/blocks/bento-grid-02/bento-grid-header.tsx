import { Badge } from "@/components/ui/badge";

export function BentoGridHeader() {
  return (
    <div className="flex flex-col items-start gap-6">
      <Badge variant="outline" className="h-auto px-3 py-1 text-sm font-normal">
        Built for Fort Bend homeowners
      </Badge>
      <h2 className="w-full max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl !m-0">
        From a single room to a full custom home
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl !m-0">
        Scoped, designed, and built with clear communication every step:
        kitchens, baths, additions, and new construction under one accountable
        team.
      </p>
    </div>
  );
}
