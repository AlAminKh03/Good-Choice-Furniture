/**
 * Animated junk-removal truck for the disposal hero.
 *
 * A flat side-view drawing that drives in place: suspension bob, wheels
 * turning, the load jiggling in the skip, exhaust puffs and a road scrolling
 * underneath. It replaces a faux-3D truck assembled from rotated, translated
 * divs — that one read as a stack of boxes rather than as an illustration,
 * and its `perspective`/`preserve-3d` stack was fragile to touch.
 *
 * Still zero-dependency: inline SVG driven by CSS keyframes (see the .jt-*
 * block in globals.css), so it renders inside a server component, ships no
 * JavaScript, and goes static under prefers-reduced-motion. The whole scene
 * is decorative, hence aria-hidden and no title.
 */
export function JunkTruck({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`junk-truck ${className}`}>
      <svg viewBox="0 0 240 140" fill="none" role="presentation">
        {/* Speed lines trailing behind */}
        <g
          className="jt-speed"
          stroke="var(--color-taupe)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        >
          <line x1="4" y1="54" x2="24" y2="54" />
          <line x1="0" y1="70" x2="14" y2="70" />
          <line x1="6" y1="86" x2="20" y2="86" />
        </g>

        {/* Exhaust. Base opacity is 0 so the puffs simply do not exist when
            the animation is switched off, rather than freezing as three
            stray dots hanging in the air. */}
        <g fill="var(--color-taupe)">
          <circle className="jt-puff jt-puff-1" cx="38" cy="98" r="5" />
          <circle className="jt-puff jt-puff-2" cx="38" cy="98" r="4" />
          <circle className="jt-puff jt-puff-3" cx="38" cy="98" r="3" />
        </g>

        <ellipse
          className="jt-shadow"
          cx="126"
          cy="127"
          rx="88"
          ry="5"
          fill="rgba(27,28,38,0.16)"
        />

        <g className="jt-truck">
          {/* The load, poking over the rim of the skip */}
          <g className="jt-load">
            <rect
              x="60"
              y="32"
              width="38"
              height="9"
              rx="2"
              fill="var(--color-brass)"
              transform="rotate(-14 79 36)"
            />
            <rect
              x="100"
              y="26"
              width="21"
              height="19"
              rx="3"
              fill="var(--color-taupe)"
              transform="rotate(9 110 35)"
            />
            <circle
              cx="138"
              cy="36"
              r="9"
              stroke="var(--color-navy-deep)"
              strokeWidth="4"
            />
          </g>

          {/* Skip: tapered like the real thing, wider at the rim */}
          <path
            d="M42 40 H158 L152 96 H48 Z"
            fill="var(--color-navy)"
            stroke="var(--color-navy-deep)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="54" y="80" width="94" height="4" rx="2" fill="var(--color-brass)" />
          <rect
            x="92"
            y="54"
            width="16"
            height="16"
            rx="2"
            transform="rotate(45 100 62)"
            fill="none"
            stroke="var(--color-brass)"
            strokeWidth="3"
          />

          {/* Cab */}
          <path
            d="M162 96 V62 a6 6 0 0 1 6-6 h20 c3 0 5 1.5 6.5 4 L205 76 v20 z"
            fill="var(--color-maroon)"
            stroke="var(--color-brand-deep)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M172 64 h15 c1.6 0 2.6 .6 3.4 1.8 L197 76 h-25 z"
            fill="#cfe6f0"
          />
          <rect x="198" y="86" width="12" height="7" rx="2" fill="var(--color-brass)" />

          {/* Chassis */}
          <rect x="42" y="96" width="168" height="8" rx="3" fill="var(--color-navy-deep)" />

          {/* Wheels. transform-box: fill-box in the CSS puts the rotation
              origin at each wheel's own centre. */}
          <g className="jt-wheel">
            <circle cx="80" cy="108" r="15" fill="#1b1c24" />
            <circle cx="80" cy="108" r="5.5" fill="var(--color-brass)" />
            <g stroke="rgba(212,165,116,0.5)" strokeWidth="2" strokeLinecap="round">
              <line x1="80" y1="97" x2="80" y2="119" />
              <line x1="69" y1="108" x2="91" y2="108" />
            </g>
          </g>
          <g className="jt-wheel">
            <circle cx="186" cy="108" r="15" fill="#1b1c24" />
            <circle cx="186" cy="108" r="5.5" fill="var(--color-brass)" />
            <g stroke="rgba(212,165,116,0.5)" strokeWidth="2" strokeLinecap="round">
              <line x1="186" y1="97" x2="186" y2="119" />
              <line x1="175" y1="108" x2="197" y2="108" />
            </g>
          </g>
        </g>

        <line
          className="jt-road"
          x1="2"
          y1="127"
          x2="238"
          y2="127"
          stroke="rgba(27,28,38,0.3)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="14 16"
        />
      </svg>
    </div>
  );
}
