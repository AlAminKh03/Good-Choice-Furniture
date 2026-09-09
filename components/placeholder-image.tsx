/**
 * Branded placeholder for the image slots that have no photo yet (PRD §8).
 *
 * This is the fallback arm, not the plan: a slot with a key in `imageMap`
 * renders through next/image against a file in `public/images/`, and this
 * only shows for keys deliberately left unset rather than filled with a
 * duplicate of another slot's photo. The props mirror an image's on purpose
 * (label ≈ alt text) so swapping one in is a one-line change.
 */
export function PlaceholderImage({
  label,
  badge,
  ratio = "aspect-[4/3]",
  tone = "light",
  className = "",
}: {
  /** Bilingual alt-style label describing the intended photo. */
  label: string;
  /** e.g. "Before" / "After" for gallery pairs. */
  badge?: string;
  ratio?: string;
  /** "dark" = navy photo-card treatment (hero + featured visuals). */
  tone?: "light" | "dark";
  className?: string;
}) {
  if (tone === "dark") {
    return (
      <div
        role="img"
        aria-label={label}
        className={`relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-deep shadow-[0_24px_48px_-16px_rgba(18,19,27,0.4)] ${ratio} ${className}`}
      >
        <span
          aria-hidden
          className="absolute end-4 top-4 block size-6 rotate-45 rounded-[3px] border-2 border-brass/70"
        />
        <span className="relative p-5 text-sm font-semibold text-paper/90">
          {label}
        </span>
        {badge ? (
          <span className="absolute start-4 top-4 rounded-full bg-paper/15 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-paper backdrop:bg-transparent rtl:tracking-normal">
            {badge}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`trellis-soft relative flex items-center justify-center overflow-hidden rounded-xl border border-sand-deep bg-sand ${ratio} ${className}`}
    >
      {/* Diamond center mark */}
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span
          aria-hidden
          className="block size-8 rotate-45 border-2 border-maroon/40 bg-maroon/10"
        />
        <span className="max-w-[26ch] text-xs font-medium text-ink/50">{label}</span>
      </div>
      {badge ? (
        <span className="absolute start-3 top-3 rounded-full bg-maroon px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-paper rtl:tracking-normal">
          {badge}
        </span>
      ) : null}
    </div>
  );
}
