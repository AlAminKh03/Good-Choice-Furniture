/**
 * Image service configuration for Good Choice Furniture.
 * Maps service/context to local files under `public/images/`.
 *
 * Files are served from our own origin — no third-party hotlinking — so
 * next/image can resize, re-encode to WebP/AVIF and cache them. Nothing
 * here should point at an external URL; if you add a remote host you also
 * have to re-add `images.remotePatterns` in next.config.ts, which reopens
 * the LCP and link-rot problems this map was flattened to avoid.
 *
 * The current files are Pexels stock, downloaded and visually verified as
 * relevant. The `pexels:` comment on each line is the source photo ID —
 * keep it, it's how you re-source a file that gets overwritten badly.
 *
 * IMPORTANT — no duplicate paths across keys. Each key points to a distinct
 * photo. Reusing one photo in two places hurts image SEO (duplicate content
 * signal) and reads as lazy to visitors who click between pages. If a
 * category has no confident distinct match yet, its key is left unset and
 * the component falls back gracefully (a colored placeholder) rather than
 * repeating another slot's photo. See the shot list handed to the owner for
 * what to replace these with — real job/team/showroom photos always outrank
 * stock here.
 *
 * SWAPPING A PHOTO — do NOT just overwrite the file at the same path. The
 * optimized copy is cached under the same URL (Cache-Control: max-age=14400
 * in the browser, plus .next/cache/images on the server), so an in-place
 * overwrite keeps serving the OLD photo for hours and looks like the change
 * silently failed. A ?v= query does not help either — next/image returns 400
 * for a query string on a local path. Give the new file a NEW filename and
 * point the key at it; that is the only reliable cache bust.
 */

export const imageMap: Record<string, string> = {
  // Hero — home page banner (app/[lang]/page.tsx)
  "hero-main": "/images/hero-formal-lounge.jpg", // pexels:18285933 — ornate formal lounge: chandelier, damask walls, Persian rug, drapes
  //
  // NOTE: two earlier heroes were pulled — pexels:17947890 had Hindu
  // devotional figures on the wall, pexels:27164969 had a drinks cabinet with
  // wine glasses and liquor bottles. This site sells into Qatar — vet every
  // interior photo for religious iconography, alcohol, and anything else that
  // reads wrong for a Gulf audience before adding it here.

  // Service selector — dynamic showcase (service-selector.tsx)
  "sales-furniture": "/images/sales-furniture.jpg", // pexels:20418771 — double-height majlis, floor-to-ceiling drapes
  "repair-sofa": "/images/repair-sofa.jpg", // pexels:30386991 — restored sofa styled in a bright room
  "installation-tv": "/images/installation-tv.jpg", // pexels:10971097 — tradesman drilling a cabinet panel
  "moving-furniture": "/images/moving-truck-villas.jpg", // pexels:20121597 — unbranded box removal truck outside villas
  "disposal-waste": "/images/disposal-waste.jpg", // pexels:11355732 — uniformed collection crew at work

  // Service cards — services index + related-services (service-card.tsx)
  "card-sales": "/images/card-sales.jpg", // pexels:20705876 — bedroom with full-wall silk curtains
  "card-repair": "/images/card-repair.jpg", // pexels:30216939 — team in a clean, well-lit joinery workshop
  "card-installation": "/images/card-installation.jpg", // pexels:11127339 — carpenter working a hand plane (landscape)
  "card-moving": "/images/moving-loading.jpg", // pexels:20319685 — worker loading cartons into a box truck
  "card-disposal": "/images/card-disposal.jpg", // pexels:15432186 — worker loading furniture into a removal truck

  // Subcategory pages — distinct from the above, used sparingly.
  // Keyed by the subcategory slug in subcategoryImageKeys (see the
  // [subslug] page); a slug with no entry falls back to the emoji panel.
  "curtains": "/images/curtains.jpg", // pexels:7546217 — floor-to-ceiling drapes with sheers
  "wall-mounting": "/images/wall-mounting.jpg", // pexels:6782368 — TV mounted, white wall
  "office-relocation": "/images/office-relocation.jpg", // pexels:7217856 — man carrying labeled office box
  "furniture-sales": "/images/furniture-sales.jpg", // pexels:13675290 — bright living room with leather seating
  "decor-accessories": "/images/decor-ceramics.jpg", // pexels:11412564 — ceramic vases and decorative pieces (replaced 12804226: cluttered, Spanish-language wall art)
  "sofa-repair": "/images/sofa-repair.jpg", // pexels:19699765 — leather sofas with cushions in a bright room
  "upholstery-restoration": "/images/upholstery-restoration.jpg", // pexels:276267 — fabric swatch book, colour fan and veneers
  "frame-structure": "/images/frame-structure.jpg", // pexels:30907888 — hand plane working a timber edge
  "furniture-moving": "/images/moving-truck-street.jpg", // pexels:11234745 — unbranded box truck on a residential street
  "curtain-installation": "/images/curtain-installation.jpg", // pexels:19602715 — layered drapes and sheers at a sunlit window
  "packing": "/images/packing-boxes.jpg", // pexels:7203848 — fragile item being wrapped into a carton at home (replaced 31112238: a warehouse picking aisle, not packing, with a retailer sign legible once the subcategory hero showed it full size)
  "kitchen-cabinets": "/images/kitchen-cabinets.jpg", // pexels:4030908 — modern wood-grain kitchen cabinetry and island
  "tv-unit": "/images/tv-unit.jpg", // pexels:11701160 — flat-screen TV over a console unit
  "junk-removal": "/images/junk-removal.jpg", // pexels:17242421 — collected used furniture awaiting removal
  "fabric-recycling": "/images/fabric-recycling.jpg", // pexels:31091544 — textile worker folding fabric on a plant floor
  "bulk-removal": "/images/bulk-removal.jpg", // pexels:16333971 — emptied room after a clear-out
  "disposal-skip": "/images/disposal-skip.jpg", // pexels:33842119 — waste container against a corrugated wall (/disposal page)

  "furniture-assembly": "/images/furniture-assembly.jpg", // pexels:4554429 — couple assembling flat-pack furniture among moving cartons

  // Service detail heroes — one per service, shown beside the H1 on
  // /services/{slug}. Deliberately distinct from that service's card photo
  // (card-*) and from its home-selector photo, so a visitor who clicks through
  // from the home page or the services index is not shown the same picture
  // twice in a row.
  "service-hero-sales": "/images/service-hero-sales.jpg", // pexels:18285958 — formal majlis: floor seating, layered drapes, fireplace
  "service-hero-repair": "/images/service-hero-repair.jpg", // pexels:279645 — upholsterer working a tufted seat with a webbing stretcher
  "service-hero-installation": "/images/service-hero-installation.jpg", // pexels:4792525 — fitter setting a fixing into a plastered wall
  "service-hero-moving": "/images/service-hero-moving.jpg", // pexels:7464722 — mover carrying a velvet sofa through a hallway
  "service-hero-disposal": "/images/service-hero-disposal.jpg", // pexels:11077610 — hi-vis crew loading a collection truck

  // Blog post covers — keyed by post slug in blogImageKeys below. One photo
  // per post rather than one per category: two posts sharing a cover looks
  // like a template, and the listing page shows them side by side.
  "blog-moving-checklist": "/images/blog-moving-checklist.jpg", // pexels:4246197 — couple labelling cartons on moving day
  "blog-measure-curtains": "/images/blog-measure-curtains.jpg", // pexels:5691534 — tape measure run along a window reveal
  "blog-repair-or-replace": "/images/blog-repair-or-replace.jpg", // pexels:5095285 — restorer's tools laid on an antique frame
  "blog-waste-segregation": "/images/blog-waste-segregation.jpg", // pexels:6990241 — waste-stream icon chart (textile, glass, e-waste, hazardous)
  "blog-tv-wall-mount": "/images/blog-tv-wall-mount.jpg", // pexels:6020432 — wall-mounted screen above a slim console
  "blog-kitchen-cabinets": "/images/blog-kitchen-cabinets.jpg", // pexels:4030055 — fitted kitchen, painted shaker cabinetry
  "blog-furniture-assembly": "/images/blog-furniture-assembly.jpg", // pexels:5217124 — hands driving an allen key into a timber frame
  "blog-sofa-size": "/images/blog-sofa-size.jpg", // pexels:6970049 — sofa sized to an open-plan living room
  "blog-space-saving": "/images/blog-space-saving.jpg", // pexels:12913378 — loft bed over a built-in desk and storage
  "blog-sofa-care": "/images/blog-sofa-care.jpg", // pexels:4401538 — upholstery nozzle vacuuming a sofa seat
  "blog-moving-costs": "/images/blog-moving-costs.jpg", // pexels:7688524 — calculator over an itemised invoice
  "blog-curtain-fabric": "/images/blog-curtain-fabric.jpg", // pexels:17734751 — close weave of an undyed linen drape

  // Gallery before/after pairs — keyed from GalleryItem.beforeImage /
  // .afterImage in content/{en,ar}.ts.
  //
  // WARNING — these are STOCK ILLUSTRATIONS, not documented jobs. Each
  // "before" and "after" is a DIFFERENT physical item; no stock library
  // sells genuinely matched pairs, because a real pair needs the same
  // photographer shooting the same piece twice. The gallery captions were
  // deliberately written generic ("Sofa re-upholstery", no district) so the
  // site never claims these are jobs the business completed. If you restore
  // a specific caption ("…, West Bay"), you MUST replace the photo with a
  // real one from that job first — otherwise the page presents fabricated
  // proof of work.
  "gallery-sofa-before": "/images/gallery-sofa-before.jpg", // pexels:14356370 — torn tufted velvet sofa
  "gallery-sofa-after": "/images/gallery-sofa-after.jpg", // pexels:13169773 — restored tufted velvet sofa
  "gallery-armchair-before": "/images/gallery-armchair-before.jpg", // pexels:11112727 — worn leather club chair
  "gallery-armchair-after": "/images/gallery-armchair-after.jpg", // pexels:11112729 — restored studded leather armchair

  // Gallery singles
  "gallery-curtains": "/images/gallery-curtains.jpg", // pexels:18252187 — backlit sheer curtain fabric
  "gallery-majlis": "/images/gallery-majlis.jpg", // pexels:18285955 — majlis floor seating with drapes
  "gallery-office": "/images/gallery-office.jpg", // pexels:13068366 — modern office desks and seating
  "gallery-shelves": "/images/gallery-shelves.jpg", // pexels:10117716 — floating shelves on tiled wall
  "gallery-wrapped": "/images/gallery-wrapped.jpg", // pexels:3616694 — upholstered furniture shrink-wrapped for a move
  "gallery-cushions": "/images/gallery-cushions.jpg", // pexels:27460959 — sofa with refilled cushions by a window
  "gallery-handover": "/images/gallery-handover.jpg", // pexels:28054888 — stripped bedroom, cleared and handover-ready
  "gallery-kitchen": "/images/gallery-kitchen.jpg", // pexels:12119223 — fitted kitchen, dark wood cabinetry and island
  "gallery-flooring": "/images/gallery-flooring.jpg", // pexels:13702811 — empty room with newly laid herringbone floor
  "gallery-garage": "/images/gallery-garage.jpg", // pexels:12771396 — cleared garage after a clear-out

  // About page
  "about-workshop": "/images/about-workshop.jpg", // pexels:31567147 — restorer stripping a chair frame in the workshop
  "about-doha": "/images/about-doha.jpg", // pexels:19748320 — Doha West Bay skyline at dusk with a dhow
};

export function getImageUrl(key?: string, fallback?: string): string | undefined {
  return (key ? imageMap[key] : undefined) || fallback;
}

export function isRealImageUrl(url?: string): boolean {
  return !!(url && (url.startsWith("http") || url.startsWith("/")));
}

/**
 * Subcategory slug → key in `imageMap`. Slugs come from `subcategories` in
 * the dictionaries; keep the two in sync when adding a subcategory.
 *
 * Shared by the subcategory page (its showcase image) and the "Explore this
 * service" cards on the parent service page, so a service page always shows
 * photos of what it actually sells — the Sales page had no curtain anywhere
 * on it before these cards carried images.
 *
 * A slug with no entry here falls back gracefully (emoji panel on the
 * subcategory page, a plain card on the service page).
 */
export const subcategoryImageKeys: Record<string, string> = {
  "furniture-sales": "furniture-sales",
  "curtains-draping": "curtains",
  "decor-accessories": "decor-accessories",
  "sofa-repair": "sofa-repair",
  "upholstery-restoration": "upholstery-restoration",
  "frame-structure": "frame-structure",
  "curtain-installation": "curtain-installation",
  "furniture-moving": "furniture-moving",
  "kitchen-cabinets": "kitchen-cabinets",
  "tv-unit": "tv-unit",
  "furniture-assembly": "furniture-assembly",
  "wall-mounting": "wall-mounting",
  "packing-services": "packing",
  "relocation-support": "office-relocation",
  "furniture-disposal": "junk-removal",
  "fabric-recycling": "fabric-recycling",
  "bulk-removal": "bulk-removal",
};

/**
 * Service slug → hero photo key. Every service has one, so the detail page
 * never falls back to a bare text header; if a key is removed the hero simply
 * renders in its original text-only form.
 */
export const serviceHeroImageKeys: Record<string, string> = {
  sales: "service-hero-sales",
  repair: "service-hero-repair",
  installation: "service-hero-installation",
  moving: "service-hero-moving",
  disposal: "service-hero-disposal",
};

/**
 * Blog post slug → cover photo key. Slugs are shared across locales (the URL
 * is the same in English and Arabic), which is why the covers live here and
 * not in the dictionaries — the photo does not change with the language, only
 * the alt text does, and that comes from the post title.
 *
 * A post with no entry here still renders; the cover block is skipped.
 */
export const blogImageKeys: Record<string, string> = {
  "moving-checklist-qatar": "blog-moving-checklist",
  "how-to-measure-curtains": "blog-measure-curtains",
  "repair-or-replace-sofa": "blog-repair-or-replace",
  "waste-segregation-qatar": "blog-waste-segregation",
  "tv-wall-mount-installation": "blog-tv-wall-mount",
  "kitchen-cabinet-installation-qatar": "blog-kitchen-cabinets",
  "furniture-assembly-moving": "blog-furniture-assembly",
  "choosing-sofa-size-qatar": "blog-sofa-size",
  "space-saving-furniture-trends": "blog-space-saving",
  "sofa-care-qatar-heat": "blog-sofa-care",
  "moving-costs-budget-guide": "blog-moving-costs",
  "curtain-styles-care": "blog-curtain-fabric",
};
