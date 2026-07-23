import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import AboutUs06 from "@/components/shadcn-space/blocks/about-us-06/about-us";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-06/portfolio";
import HowWeWork from "@/components/shadcn-space/blocks/portfolio-08/portfolio";
import CTA from "@/components/shadcn-space/blocks/cta-08/cta";
import Testimonial from "@/components/shadcn-space/blocks/testimonial-07/testimonial";
import Contact from "@/components/shadcn-space/blocks/contact-01";
import Faq from "@/components/shadcn-space/blocks/faq-07/faq";

export default function HomePage() {
  // People portraits for social proof (same set as review cards)
  const avatarList = [
    { image: "/images/avatars/avatar-1.jpg" },
    { image: "/images/avatars/avatar-2.jpg" },
    { image: "/images/avatars/avatar-4.jpg" },
    { image: "/images/avatars/avatar-5.jpg" },
  ];

  return (
    <>
      <HeroSection
        avatarList={avatarList}
        badge="Serving Fort Bend since 2007"
        headline="Custom homes & remodels in"
        highlight="Richmond, TX"
        subhead="Local team since 2007. Kitchens, baths, whole-home renovations, additions, and custom builds, planned and built with clear communication."
        primaryCta={{ label: "Book a free consult", href: "tel:2812992309" }}
        secondaryCta={{ label: "View our work", href: "/remodeling-gallery/" }}
        rating="5.0"
        ratingLabel="Google & Angi reviews"
        backgroundImage="/images/hero-home-remodeled-richmond-tx.webp"
      />

      <AboutUs06 />

      <Portfolio
        label="What we do"
        heading="Services built around how you live"
      />

      <HowWeWork />

      <CTA />

      <Testimonial />

      <Contact />

      <Faq />
    </>
  );
}
