/**
 * Scrolling hero ticker — the five services on a loop.
 *
 * The point is the last entry: people read "furniture company" from the
 * wordmark and never learn that the same crew hauls the old sofa away. A
 * static line gets skimmed past; a moving one gets read to the end.
 *
 * Zero JavaScript. The loop is a CSS keyframe on a doubled track (see the
 * .ticker-* block in globals.css), so this stays a server component and the
 * animation costs nothing on the main thread — the same approach as
 * JunkTruck. RTL gets its own keyframe rather than a flipped sign, matching
 * how .hero-sheen already handles direction.
 *
 * Accessibility:
 * - The track is duplicated to make the loop seamless, so both copies are
 *   aria-hidden and the real text is exposed once, off-screen. Otherwise a
 *   screen reader reads all five services twice.
 * - It pauses on hover and on keyboard focus entering it, so nobody has to
 *   chase a moving target to read it.
 * - Under prefers-reduced-motion it stops being a ticker at all: the second
 *   copy is dropped and what is left wraps as a centred static row.
 */
export function ServiceTicker({ items }: { items: string[] }) {
  return (
    <div className="border-y border-sand-deep bg-sand/60">
      <div className="ticker py-3">
        <div className="ticker-track">
          <TickerCopy items={items} />
          <TickerCopy items={items} />
        </div>
      </div>
      {/* The list as prose, announced once. */}
      <p className="sr-only">{items.join(". ")}.</p>
    </div>
  );
}

function TickerCopy({ items }: { items: string[] }) {
  return (
    <div aria-hidden className="ticker-copy">
      {items.map((item) => (
        <span key={item} className="ticker-item">
          {/* Brass diamond separator. NOTE: this used to be described as
              reusing the brand mark's motif, which was true when the mark was
              a diamond. The mark is now a notched house (lib/brand.ts), so
              this is simply a decorative bullet and no longer echoes anything
              — worth revisiting if the leftover diamond starts to look odd. */}
          <span className="ticker-mark" />
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}
