/**
 * Decorative pure-CSS 3D junk truck for the disposal service hero.
 * No JS, no deps — perspective + preserve-3d + keyframes only (Lighthouse-safe).
 * Wheels spin, the chassis bobs, and the road dashes scroll so it "drives in place".
 * Honors prefers-reduced-motion (renders as a static truck).
 */
export function Truck3d({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`truck-scene ${className}`}>
      <span className="truck-shadow" />
      <span className="truck-road" />
      <div className="truck">
        <div className="t-cargo">
          <span className="t-face t-cargo-near">
            <span className="t-emblem" />
            <span className="t-stripe" />
          </span>
          <span className="t-face t-cargo-far" />
          <span className="t-face t-cap t-cargo-cap-f" />
          <span className="t-face t-cap t-cargo-cap-r" />
          <span className="t-face t-cargo-top" />
          <span className="t-junk t-junk-1" />
          <span className="t-junk t-junk-2" />
        </div>
        <div className="t-cab">
          <span className="t-face t-cab-near">
            <span className="t-window" />
          </span>
          <span className="t-face t-cab-far" />
          <span className="t-face t-cap t-cab-cap-f" />
          <span className="t-face t-cap t-cab-cap-r" />
          <span className="t-face t-cab-top" />
        </div>
        <span className="t-wheel-w t-wf">
          <span className="t-wheel" />
        </span>
        <span className="t-wheel-w t-wr">
          <span className="t-wheel" />
        </span>
        <span className="t-wheel-w t-wf t-wfar">
          <span className="t-wheel" />
        </span>
        <span className="t-wheel-w t-wr t-wfar">
          <span className="t-wheel" />
        </span>
      </div>
    </div>
  );
}
