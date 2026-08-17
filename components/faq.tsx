import type { Faq } from "@/content/types";

/** Accessible accordion via native details/summary (keyboard-friendly, no JS). */
export function FaqAccordion({ faqs, heading }: { faqs: Faq[]; heading: string }) {
  return (
    <div>
      <h2 className="font-display text-3xl text-navy">{heading}</h2>
      <div className="mt-6 divide-y divide-ink/8 rounded-xl border border-ink/10 bg-white/70 shadow-[0_1px_2px_rgba(34,26,20,0.05)]">
        {faqs.map((faq) => (
          <details key={faq.q} className="group px-5 py-4 open:bg-sand/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start text-sm font-bold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center rounded-full border border-brass/40 text-lg font-normal text-brass transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm/7 text-ink/75">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
