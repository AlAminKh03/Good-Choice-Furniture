import { brandMark } from "@/lib/brand";

/**
 * The Good Choice mark. Geometry and colour live in lib/brand.ts — see that
 * file for what the mark is and why its colours do not follow the theme.
 *
 * Always `aria-hidden`: every place this renders, the brand name sits beside
 * it as real text (the header link carries aria-label={site.name}, the footer
 * has the wordmark next to it), so announcing the mark as well would read the
 * business name out twice.
 */
export function BrandMark({
  className = "size-10",
  /** Set on a `colors.body` field, where the standard mark would vanish. */
  reversed = false,
}: {
  className?: string;
  reversed?: boolean;
}) {
  const c = reversed ? brandMark.reversed : brandMark.colors;
  return (
    <svg viewBox={brandMark.viewBox} className={className} aria-hidden focusable="false">
      <path d={brandMark.house} fill={c.body} />
      <path d={brandMark.band} fill={c.band} />
    </svg>
  );
}
