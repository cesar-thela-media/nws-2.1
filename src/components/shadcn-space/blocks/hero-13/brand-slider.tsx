import { Marquee } from "@/components/shadcn-space/animations/marquee";

type BrandList = {
  image: string;
  lightimg: string;
  name: string;
};

const BrandSlider = () => {
  const brandList: BrandList[] = [
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-1.svg",
      lightimg: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-dark-1.svg",
      name: "Brand 1",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-2.svg",
      lightimg: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-dark-2.svg",
      name: "Brand 2",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-3.svg",
      lightimg: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-dark-3.svg",
      name: "Brand 3",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-4.svg",
      lightimg: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-dark-4.svg",
      name: "Brand 4",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-5.svg",
      lightimg: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-dark-5.svg",
      name: "Brand 5",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-6.svg",
      lightimg: "https://images.shadcnspace.com/assets/brand-logo/logo-icon-dark-6.svg",
      name: "Brand 6",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto flex items-center justify-center relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] xl:px-0 px-5 py-0 h-full">
          {brandList.map((brand, index) => (
            <div
              key={index}
              className="lg:py-15 py-6 border-r h-full flex items-center justify-center lg:px-14 px-8"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="dark:brightness-0 dark:invert"
                width={135}
                height={32}
              />
            </div>
          ))}
        </Marquee>
      </section>
      <div className="lg:py-7 py-5 border-y w-full" />
    </>
  );
};

export default BrandSlider;
