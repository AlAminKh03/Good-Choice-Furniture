import type { ReactNode } from "react";

/**
 * Light editorial page header for inner pages: big serif title on warm
 * ivory with a trellis accent panel. Dark maroon is reserved for CTA
 * bands, giving each page a light→dark rhythm.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-paper">
      {/* Trellis accent, faded toward the content side */}
      <div
        aria-hidden
        className="trellis-soft absolute inset-y-0 end-0 w-2/5 [mask-image:linear-gradient(to_left,black,transparent)] rtl:[mask-image:linear-gradient(to_right,black,transparent)]"
      />
      <div className="container-x relative py-10 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl text-navy sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base/7 text-ink/70">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
