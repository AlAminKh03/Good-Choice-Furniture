import type { ReactNode } from "react";
import Image from "next/image";

/**
 * Light editorial page header for inner pages: big serif title on warm
 * ivory with a trellis accent panel. Dark maroon is reserved for CTA
 * bands, giving each page a light→dark rhythm.
 *
 * Pass `image` to get the two-column variant used by the detail pages
 * (a service, a subcategory): copy on the inline-start side, a framed photo
 * on the end side. Without it the header renders exactly as before, which is
 * what the index and form pages still use — a photo there would compete with
 * the content below rather than introduce it.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  above,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Photo URL (from `getImageUrl`). Omit for the text-only header. */
  image?: string;
  /** Required whenever `image` is set — this photo carries meaning. */
  imageAlt?: string;
  /** Slot above the eyebrow, e.g. a breadcrumb trail. */
  above?: ReactNode;
  children?: ReactNode;
}) {
  const copy = (
    <div>
      {/* Staggered entrance — see the .hero-* block in globals.css. */}
      {above ? <div className="hero-rise mb-5">{above}</div> : null}
      <p className="hero-rise [--rise-delay:60ms] eyebrow">{eyebrow}</p>
      <h1 className="hero-headline [--rise-delay:130ms] font-display mt-3 max-w-3xl text-3xl text-navy sm:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="hero-rise [--rise-delay:240ms] mt-4 max-w-2xl text-base/7 text-ink/70">
          {subtitle}
        </p>
      ) : null}
      {children ? (
        <div className="hero-rise [--rise-delay:330ms] mt-8 flex flex-wrap gap-3">{children}</div>
      ) : null}
    </div>
  );

  if (!image) {
    return (
      <section className="relative overflow-hidden border-b border-ink/8 bg-paper">
        {/* Trellis accent, faded toward the content side */}
        <div
          aria-hidden
          className="trellis-soft absolute inset-y-0 end-0 w-2/5 [mask-image:linear-gradient(to_left,black,transparent)] rtl:[mask-image:linear-gradient(to_right,black,transparent)]"
        />
        <div className="container-x relative py-9 sm:py-16">{copy}</div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-paper">
      {/* Narrower than the text-only variant: the photo already occupies the
          end side, and running the trellis under it muddies the crop. */}
      <div
        aria-hidden
        className="trellis-soft absolute inset-y-0 end-0 w-1/4 [mask-image:linear-gradient(to_left,black,transparent)] rtl:[mask-image:linear-gradient(to_right,black,transparent)]"
      />
      <div className="container-x relative py-9 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {copy}
          <figure className="relative">
            {/* Brass rule offset behind the frame. It sits BEFORE the photo in
                DOM order so the photo paints over it — no z-index needed, and
                no negative z-index that would drop it behind the section
                background. */}
            <span
              aria-hidden
              className="hero-rise [--rise-delay:430ms] pointer-events-none absolute -bottom-3 -end-3 h-28 w-28 rounded-2xl border-2 border-brass/50 sm:h-36 sm:w-36"
            />
            <div className="hero-sheen relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/8 shadow-[0_28px_60px_-28px_rgba(27,94,74,0.45)]">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                // The detail-page hero is the LCP element on these routes.
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="hero-drift object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
