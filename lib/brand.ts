/**
 * The Good Choice mark — one definition, four surfaces.
 *
 * WHAT IT IS. A house whose roofline is a tick. The top edge of the silhouette
 * dips at the left, turns, and climbs the full width to the ridge — the exact
 * path a tick takes — and the brass band traces that edge. There is no second
 * object in the mark: the tick is not placed inside the house, it IS the house's
 * roof, which is the whole idea. "Good Choice" and "home" in one shape.
 *
 * WHY IT REPLACED WHAT WAS HERE. The mark had been drawn four separate times
 * and had drifted into four different logos — a sofa in the header, a bare
 * diamond in the footer, a diamond-with-centre favicon, and a third diamond on
 * the social card. That became one tick in a rounded square, which was
 * consistent but said nothing: a rounded square is the default container of
 * every app icon ever shipped, and the tick inside it was interchangeable with
 * any other glyph. Everything now reads its geometry from this file.
 *
 * THE BAND IS A FILLED PATH, NOT A STROKE. Drawn as a stroke centred on the
 * roofline, half its width hangs outside the silhouette onto the page, where
 * brass sits at about 1.7:1 against the paper ground and fades to nothing. It
 * is also for Satori: the social card renders through @vercel/og, which does
 * not reliably support clipPath, so the band is pre-offset into an explicit
 * polygon that needs no clipping anywhere. `band` is `roofEdge` offset 4.5
 * units inward and closed — change one and you must recompute the other.
 *
 * COLOURS ARE FIXED, NOT TOKENS. A logo that re-tints itself per theme is not
 * a logo. `--color-maroon` inverts to a bright #4A9B7D in dark mode, which
 * would leave the brass band at roughly 1.4:1 against its own house.
 *
 * The one exception is `reversed`, which is a proper reversed colourway rather
 * than a theme tint: the social card's background IS `colors.body`, so the
 * standard mark would be an invisible emerald house on an emerald field.
 *
 * NOTE: app/icon.svg is a static file and cannot import this module, so it is
 * the one copy kept in step by hand. Its comment says so.
 */
export const brandMark = {
  viewBox: "0 0 64 64",

  /**
   * The house. Left wall top, down into the notch, up the long roof slope to
   * the ridge, down the short slope, right wall, floor, close.
   */
  house: "M7.5 27 L20.5 36 L46.5 11 L56.5 22 L56.5 54 L7.5 54 Z",

  /**
   * The three points of the roofline — which are also the three points of the
   * tick. Not rendered directly; kept because it is the idea, and because
   * `band` is derived from it.
   */
  roofEdge: "M7.5 27 L20.5 36 L46.5 11",

  /** `roofEdge` given 4.5 units of thickness, inward, and closed. */
  band: "M7.5 27 L20.5 36 L46.5 11 L49.53 14.33 L20.96 41.8 L7.5 32.47 Z",

  colors: {
    body: "#1B5E4A",
    band: "#D4A574",
  },

  /** For placing the mark on a `colors.body` field. See the note above. */
  reversed: {
    body: "#F9F7F4",
    band: "#1B5E4A",
  },
} as const;
