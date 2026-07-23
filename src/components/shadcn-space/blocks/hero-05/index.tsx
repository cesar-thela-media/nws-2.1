import HeroSection from "@/components/shadcn-space/blocks/hero-05/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-05/navbar";
import Navbar from "@/components/shadcn-space/blocks/hero-05/navbar";

const AgencyHeroSection = () => {

  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#",
      isActive: true,
    },
    {
      title: "Features",
      href: "#",
    },
    {
      title: "Benefits",
      href: "#",
    },
    {
      title: "Services",
      href: "#",
    },
    {
      title: "Team",
      href: "#",
    },
    {
      title: "Why Crypgo",
      href: "#",
    },
  ];

  return (
    <div className="dark">
      <Navbar navigationData={navigationData} />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default AgencyHeroSection;

