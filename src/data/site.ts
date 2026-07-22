export const site = {
  name: "NWS Custom Homes and Remodeling",
  shortName: "NWS Homes",
  phone: {
    office: "(281) 299-2309",
    officeTel: "2812992309",
    mobile: "(713) 884-6571",
    mobileTel: "7138846571",
  },
  email: "info@nws-homes.com",
  location: "Richmond, TX",
  hours: {
    weekdays: "Mon - Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 8:00 AM - 12:00 PM",
    sunday: "Sun: Closed",
  },
  promo:
    "Call us today and mention the website to receive a free consultation and 5% off your next project!",
  social: {
    facebook: "https://www.facebook.com/NWSHomes/",
    instagram: "https://www.instagram.com/nwshomes/?hl=en",
    houzz:
      "https://www.houzz.com/professionals/home-builders/nws-custom-homes-and-remodeling-pfvwus-pf~849721310",
  },
  /** Full stacked brand mark (footer / large placements) */
  logo: "/images/gbp.png",
  /** Horizontal navbar mark (SVG path used by Logo mark variant) */
  logoMark: "/images/logo-nws-horizontal.svg",
  mapSmall: "/images/nws-custom-homes-and-remodeling-small-map.webp",
  mapFull: "/images/nws-custom-homes-and-remodeling-full-map.webp",
} as const;

export const serviceOptions = [
  "Custom Home Building",
  "Remodeling",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Whole Home Remodeling",
] as const;
