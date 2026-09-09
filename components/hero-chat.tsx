import Image from "next/image";
import { waLink } from "@/lib/whatsapp";
import { ArrowIcon, WhatsAppIcon } from "./icons";

/**
 * Homepage hero: a WhatsApp thread the visitor can step into.
 *
 * WHY THIS EXISTS. PRD §2 makes WhatsApp clicks the primary metric, but the
 * previous hero had no CTA in it at all — the first one on the page was the
 * CtaBand, far below the selector, with FloatingWhatsApp and MobileCtaBar
 * quietly catching the traffic. The real friction for a services business
 * isn't trust, it's the empty message box: people have to compose a first
 * sentence to a stranger. Every chip below is a pre-written first sentence.
 *
 * NOT A LIVE CHAT. Nothing here sends or receives anything. It is a static
 * picture of a thread plus a list of links, and it is deliberately kept that
 * way — no typing dots, no delivery ticks, no "online" indicator, because
 * each of those asserts a person is on the other end right now. The header
 * status is a response-time claim the business can actually stand behind,
 * the same PRD §5 rule that got the invented 4.8★ rating pulled.
 *
 * This is a server component. Every chip is a plain <a> to wa.me, so the
 * whole hero ships zero JavaScript.
 */

export interface HeroChatCopy {
  /** Business name in the chat header. */
  headerName: string;
  /** Response-time line under the name. Must be a claim that is true. */
  headerStatus: string;
  greeting: string;
  /** Decorative clock time on the greeting bubble — set dressing, not data. */
  greetingTime: string;
  photoCaption: string;
  /** Visible hint above the chips; also names the list for screen readers. */
  chipsLabel: string;
  /**
   * `id` is a stable analytics key and never translated — it has to match
   * across en/ar so hero-chat-repair means the same thing in both. `message`
   * is what lands pre-typed in the visitor's WhatsApp, so it is written in
   * the customer's voice, first person.
   */
  chips: { id: string; label: string; message: string }[];
}

export function HeroChat({
  copy,
  photo,
  photoAlt,
}: {
  copy: HeroChatCopy;
  /** Optional — the card reads fine as pure text if the photo is unset. */
  photo?: string;
  photoAlt: string;
}) {
  return (
    <div className="hero-rise [--rise-delay:260ms] mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-paper shadow-xl shadow-shadow">
      {/* Fixed dark green, NOT `bg-maroon`. The token is #1B5E4A in light mode
          but inverts to a bright #4A9B7D in dark mode, which would drop white
          header text to roughly 2.2:1. Pinning the light value keeps the bar
          dark in both themes — same reasoning as the pinned black scrim the
          old hero image used. */}
      <div className="flex items-center gap-3 bg-[#1B5E4A] px-4 py-3">
        <span
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white"
        >
          <WhatsAppIcon className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-white">
            {copy.headerName}
          </span>
          <span className="block truncate text-xs text-white/70">
            {copy.headerStatus}
          </span>
        </span>
      </div>

      <div className="space-y-3 bg-sand px-4 py-4">
        {/* Incoming bubble. `rounded-ss-sm` is the logical start-start corner,
            so the tail sits top-left in English and top-right in Arabic
            without a second rule. */}
        <div className="max-w-[85%] rounded-2xl rounded-ss-sm border border-sand-deep bg-paper px-3.5 py-2.5 shadow-sm">
          <p className="text-sm text-ink">{copy.greeting}</p>
          {/* aria-hidden: an invented clock time read aloud sounds like data. */}
          <span aria-hidden className="mt-1 block text-end text-[0.65rem] text-ink/40">
            {copy.greetingTime}
          </span>
        </div>

        {photo ? (
          <div className="max-w-[85%] overflow-hidden rounded-2xl border border-sand-deep bg-paper shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={photo}
                alt={photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 380px"
                className="object-cover"
              />
            </div>
            {/* Caption describes the work on offer, not "our recent job" — the
                current file is stock, and captioning stock as our own is the
                claim images.ts warns about. Swap the caption when the owner's
                real photos land. */}
            <p className="px-3.5 py-2 text-xs text-ink/60">{copy.photoCaption}</p>
          </div>
        ) : null}

        <p className="pt-1 text-center text-xs font-semibold text-ink/50" id="hero-chat-label">
          {copy.chipsLabel}
        </p>

        {/* Outgoing side. justify-end is logical in flexbox, so these sit right
            in English and left in Arabic on their own. */}
        <ul aria-labelledby="hero-chat-label" className="space-y-2">
          {copy.chips.map((chip) => (
            <li key={chip.id} className="flex justify-end">
              <a
                href={waLink(chip.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location={`hero-chat-${chip.id}`}
                className="group inline-flex max-w-[90%] items-center gap-2 rounded-2xl rounded-se-sm border border-wa/30 bg-wa/10 px-3.5 py-2.5 text-start text-sm font-semibold text-wa-deep transition-colors hover:bg-wa/20 active:scale-[0.98]"
              >
                <span>{chip.label}</span>
                <ArrowIcon className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
