import { BentoGridHeader } from "@/components/shadcn-space/blocks/bento-grid-02/bento-grid-header";
import { WorkspaceMockup } from "@/components/shadcn-space/blocks/bento-grid-02/workspace-mockup";
import { FeatureCardsGrid } from "@/components/shadcn-space/blocks/bento-grid-02/feature-cards-grid";

/** About page bento - NWS Fort Bend copy (replaces feature-18 on About) */
const Bentogrid = () => {
  return (
    <section className="py-10 md:py-20 bg-muted/40" data-bento-grid-02>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 flex flex-col gap-8 sm:gap-12">
        <BentoGridHeader />
        <div className="flex flex-col gap-6">
          <WorkspaceMockup />
          <FeatureCardsGrid />
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
