# Page section inventory (for UI shopping)

Snapshot of **current** major sections per page family after the About rebuild.
Use this list to pick `@shadcn-space/...` install commands for the next pass.

Templates are intentional: one gallery layout, one location layout, one service-detail layout.

---

## `/about` (done this goal)

| # | Section role | Current implementation | Notes / shop next |
|---|---|---|---|
| 1 | Hero + video + stats strip | **hero-13** (`blocks/hero-13`) | NWS YouTube embed; stats replace BrandSlider marquee |
| 2 | Our story mosaic | **about-us-section-13** (`about-us-13/about-us`) | NWS production copy |
| 3 | Fort Bend highlights bento | **bento-grid-02** | Replaces feature-18 on About |
| 4 | Map + contact form | Custom + `ContactForm` | User accepted map for now |

---

## `/services` (hub)

| # | Section role | Current implementation | Shop opportunity |
|---|---|---|---|
| 1 | Dark full-bleed services hero (title, intro, CTA) | **Custom** section in `src/app/services/page.tsx` | Hero block with dark photo band + centered CTA |
| 2 | Service category / icon grid | **services-10** (`blocks/services-10/services`) | Keep or swap services-section variant |
| 3 | Alternating photo + copy service strips | **Custom** map over `serviceCards` | Portfolio / split feature / list-with-image block |
| 4 | (none beyond) | - | Optional mid-page CTA before footer |

---

## `/services/[slug]` (service detail template × 11)

| # | Section role | Current implementation | Shop opportunity |
|---|---|---|---|
| 1 | Split hero (image \| dark copy + breadcrumbs + CTAs) | **Custom** in `src/app/services/[slug]/page.tsx` | Split hero / service-detail hero |
| 2 | Narrow reading column (h1, intro, nested sections, bullets, subBlocks) | **Custom** prose (`prose-nws`) from `servicePages` data | Feature long-form or content section |
| 3 | Bottom CTA banner | **CTABanner** (`components/CTABanner.tsx`) | cta-section Space block (cta-08 style already used on home) |

Data-driven slugs (same template):  
`custom-home-builder`, `remodeling-company`, `kitchen-remodeling`, `bathroom-remodeling`, `home-remodel`, `bathroom-shower-remodel`, `bathtub-remodeling`, `room-additions-home-additions`, `basement-remodeling-finishing`, `garage-remodel-contractors`, `open-concept-remodeling`.

---

## Gallery family (4 routes, one template)

Routes: `/custom-homes-gallery`, `/remodeling-gallery`, `/kitchen-remodeling-gallery`, `/bathroom-remodeling-gallery`  
Shared component: `src/components/GalleryPage.tsx`

| # | Section role | Current implementation | Shop opportunity |
|---|---|---|---|
| 1 | Gallery intro hero (photo wash, title, description, dual CTAs) | **Custom** dark band | Gallery/portfolio hero |
| 2 | Masonry / multi-column image grid | **Custom** CSS columns + Next Image | Keep or pure gallery-04 only |
| 3 | Extra gallery/showcase band | **gallery-04** (`blocks/gallery-04/gallery`) | Alternate gallery / lightbox block |

---

## Location family (8 routes, one template)

Routes: `/sugar-land-tx`, `/katy-tx`, `/fulshear-tx`, `/cinco-ranch-tx`, `/rosenberg-tx`, `/weston-lakes-tx`, `/park-row-tx`, `/west-side-of-houston-tx`  
Shared: `src/components/LocationPage.tsx` + `src/data/locations.ts`

| # | Section role | Current implementation | Shop opportunity |
|---|---|---|---|
| 1 | Breadcrumb + title + dual CTA band | **Custom** muted top band | Slim page-header block |
| 2 | Sticky photo rail + longform location copy (sections, service links, bullets) | **Custom** 12-col editorial layout | About/content split or location feature |
| 3 | Map + `ContactForm` (where present in template tail) | **Custom** + form | Contact split (contact-01 already on site) |

Note: `richmond-tx` exists in location **data** only; no dedicated route (matches live sitemap).

---

## `/areas-we-serve`

| # | Section role | Current implementation | Shop opportunity |
|---|---|---|---|
| 1 | Map-first hero + city chip links | **Custom** (`page.tsx` + `site.mapFull`) | Hero with background map or areas hero |
| 2 | Logo / community mark cloud | **logo-cloud-03** | Logo-cloud variant or remove if redundant |
| 3 | Communities grid | **AreasGrid** custom component | Card grid / bento of cities |
| 4 | Start project + small map + form | **Custom** + `ContactForm` | contact-01 full section |

---

## Intentionally out of scope this goal

| Route | Status |
|---|---|
| `/faqs` | Do not redesign |
| `/contact` | Do not redesign; still reachable via **Book Now** |
| `/` home | No chrome changes beyond nav Contact link removal |

---

## Suggested shopping order (next transcript)

1. Services hub hero + alternating strips  
2. Service detail split hero  
3. Gallery intro hero (one template covers four galleries)  
4. Location editorial header / sticky rail  
5. Areas-we-serve hero + communities grid  

For each pick, grab the `npx shadcn@latest add @shadcn-space/<name>` command from shadcnspace.com the same way as About.
