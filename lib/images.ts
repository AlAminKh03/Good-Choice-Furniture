/**
 * Image service configuration for Good Choice Furniture.
 * Maps service/context to Pexels image URLs for realistic visuals.
 *
 * Every ID below has been fetched and visually verified as relevant —
 * do not add new IDs without checking the actual photo first (Pexels
 * IDs 404 or resolve to unrelated stock photos more often than not).
 *
 * IMPORTANT — no duplicate URLs across keys. Each key below points to
 * a distinct photo. Reusing the same photo in two places hurts image
 * SEO (duplicate content signal) and reads as lazy to visitors who
 * click between pages. If a category has no confident distinct match
 * yet, its key is left unset and the component falls back gracefully
 * (a colored placeholder) rather than repeating another slot's photo.
 * See the shot list handed to the owner for what to replace these
 * with — real job/team/showroom photos always outrank stock here.
 */

export const imageMap: Record<string, string> = {
  // Hero
  "hero-main": "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",

  // Service selector — dynamic showcase (service-selector.tsx)
  "sales-furniture": "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=800", // Colorful armchairs in showroom
  "repair-sofa": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800", // Leather sofa
  "installation-tv": "https://images.pexels.com/photos/6020432/pexels-photo-6020432.jpeg?auto=compress&cs=tinysrgb&w=800", // TV mounted above wood console
  "moving-furniture": "https://images.pexels.com/photos/4247815/pexels-photo-4247815.jpeg?auto=compress&cs=tinysrgb&w=800", // Couple with moving boxes
  "disposal-waste": "https://images.pexels.com/photos/2002142/pexels-photo-2002142.jpeg?auto=compress&cs=tinysrgb&w=800", // Junk removal dumpster

  // Service cards — services index + related-services (service-card.tsx)
  "card-sales": "https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=600", // Wooden bed frame, bedroom
  "card-repair": "https://images.pexels.com/photos/6782355/pexels-photo-6782355.jpeg?auto=compress&cs=tinysrgb&w=600", // Upholstered headboard
  "card-installation": "https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=600", // Room with wall-mounted AC unit
  "card-moving": "https://images.pexels.com/photos/4569339/pexels-photo-4569339.jpeg?auto=compress&cs=tinysrgb&w=600", // Family unpacking boxes
  // card-disposal intentionally unset — see shot list (falls back to accent color)

  // Subcategory pages — distinct from the above, used sparingly
  "curtains": "https://images.pexels.com/photos/7546217/pexels-photo-7546217.jpeg?auto=compress&cs=tinysrgb&w=800", // Curtains, living room
  "wall-mounting": "https://images.pexels.com/photos/6782368/pexels-photo-6782368.jpeg?auto=compress&cs=tinysrgb&w=800", // TV mounted, white wall
  "office-relocation": "https://images.pexels.com/photos/7217856/pexels-photo-7217856.jpeg?auto=compress&cs=tinysrgb&w=800", // Man carrying labeled office box
  "packing": "https://images.pexels.com/photos/4569314/pexels-photo-4569314.jpeg?auto=compress&cs=tinysrgb&w=800", // Couple wrapping items
};

export function getImageUrl(key?: string, fallback?: string): string | undefined {
  return (key ? imageMap[key] : undefined) || fallback;
}

export function isRealImageUrl(url?: string): boolean {
  return !!(url && (url.startsWith("http") || url.startsWith("/")));
}
