import Link from "next/link";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import { WhatsAppButton } from "./cta-buttons";

/**
 * Rounded navy conversion card inset on the page — closes every scroll
 * journey with the two primary actions.
 */
export function CtaBand({
  locale,
  title,
  text,
  whatsappLabel,
  whatsappMessage,
  quoteLabel,
}: {
  locale: Locale;
  title: string;
  text: string;
  whatsappLabel: string;
  whatsappMessage: string;
  quoteLabel: string;
}) {
  return (
    <section className="container-x py-4 sm:py-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep px-6 py-10 text-center shadow-[0_24px_56px_-20px_rgba(18,19,27,0.5)] sm:px-12 sm:py-14">
        <span
          aria-hidden
          className="absolute start-6 top-6 block size-6 rotate-45 rounded-[3px] border-2 border-brass/50"
        />
        <span
          aria-hidden
          className="absolute bottom-6 end-6 block size-6 rotate-45 rounded-[3px] border-2 border-brass/50"
        />
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-display max-w-2xl text-3xl text-paper sm:text-5xl">{title}</h2>
          <p className="max-w-xl text-base/7 text-paper/70">{text}</p>
          <div className="mt-3 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton
              message={whatsappMessage}
              label={whatsappLabel}
              location="cta-band"
            />
            <Link
              href={localizedPath(locale, "/quote")}
              className="inline-flex items-center justify-center rounded-full border-2 border-paper/40 px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-paper/10"
            >
              {quoteLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
