/**
 * Image service configuration for Good Choice Furniture.
 * Maps service/context to Unsplash image URLs for realistic visuals.
 */

export const imageMap: Record<string, string> = {
  // Hero & main images
  "hero-main": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=400&fit=crop",

  // Services
  "sales-furniture": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  "repair-sofa": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  "installation-tv": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
  "moving-furniture": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
  "disposal-waste": "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=600&fit=crop",

  // Gallery examples
  "gallery-villa": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  "gallery-repair": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  "gallery-office": "https://images.unsplash.com/photo-1524634126288-917cccf13ebc?w=600&h=400&fit=crop",
};

export function getImageUrl(key: string, fallback?: string): string | undefined {
  return imageMap[key] || fallback;
}

export function isRealImageUrl(url?: string): boolean {
  return !!(url && (url.startsWith("http") || url.startsWith("/")));
}
