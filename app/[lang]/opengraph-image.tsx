import { ImageResponse } from "next/og";
import { brandMark } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Good Choice Furniture Home Services — Qatar";

/**
 * This file has to live in `app/[lang]/`, not `app/`.
 *
 * There is no `app/layout.tsx` — `app/[lang]/layout.tsx` is the root layout —
 * so a metadata file in the segment above it is not inherited by any real
 * page. Sitting at `app/` it attached to exactly one route, the generated
 * `/_not-found`, and resolved against no metadataBase, so the 404 advertised
 * `http://localhost:3000/opengraph-image` while all 89 real pages shipped
 * with no og:image at all and `twitter:card: summary`. Every link shared to
 * WhatsApp — the site's primary channel — was a bare text link.
 *
 * Moving it here puts it under the layout that sets `metadataBase`, so the
 * card resolves against the real domain and every localized page inherits it.
 *
 * TODO: the wordmark is Latin in both locales. An Arabic card needs an Arabic
 * font passed to ImageResponse — Satori ships no Arabic glyphs and renders
 * tofu without one.
 *
 * Default social card, in the Emerald Elegance palette (PRD §12).
 *
 * The hex values are inlined rather than read from the `--color-*` tokens in
 * globals.css: this renders in Satori at build time, where no stylesheet and
 * no CSS custom properties exist. Keep them in step with the light-mode
 * `@theme` block by hand — maroon (emerald) #1B5E4A, brand-deep #164237,
 * brass #D4A574, paper #F9F7F4.
 *
 * Every div here sets `display: flex` on purpose. Satori throws on a div with
 * more than one child and no explicit display, so the usual block-level
 * shorthand silently breaks the build rather than the layout.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B5E4A 0%, #164237 100%)",
          color: "#F9F7F4",
        }}
      >
        <svg width={150} height={150} viewBox={brandMark.viewBox}>
          <path d={brandMark.house} fill={brandMark.reversed.body} />
          <path d={brandMark.band} fill={brandMark.reversed.band} />
        </svg>
        {/* The wordmark is stacked because "GOOD CHOICE FURNITURE" on one
            line has to drop to ~52px to fit 1200px wide, at which point it
            stops reading as a logo in a feed thumbnail. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 40,
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          <div style={{ display: "flex" }}>GOOD CHOICE</div>
          <div style={{ display: "flex", color: "#D4A574" }}>FURNITURE</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#F9F7F4", opacity: 0.75, marginTop: 20 }}>
          Home Services — Doha, Qatar
        </div>
      </div>
    ),
    size,
  );
}
