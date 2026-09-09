import Image from "next/image";
import Link from "next/link";
import type { ServiceContent, ServiceSlug } from "@/content/types";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import { getImageUrl } from "@/lib/images";
import { ArrowIcon, serviceIcons } from "./icons";

/** Per-service accent colors for the icon chips (Emerald Elegance palette). */
const accents: Record<ServiceSlug, string> = {
  sales: "#1B5E4A",
  repair: "#9B8C7C",
  installation: "#D4A574",
  moving: "#164237",
  disposal: "#4A9B7D",
};

// Every service now has a distinct card photo. A slug left out of this map
// still renders — it falls back to the accent-colored panel below — so it is
// safe to drop an entry while waiting on a real photo for that service.
const cardImageKeys: Partial<Record<ServiceSlug, string>> = {
  sales: "card-sales",
  repair: "card-repair",
  installation: "card-installation",
  moving: "card-moving",
  disposal: "card-disposal",
};

/** Service card — white with a colored icon chip; `featured` = navy card. */
export function ServiceCard({
  service,
  locale,
  learnMore,
  index = 0,
  featured = false,
}: {
  service: ServiceContent;
  locale: Locale;
  learnMore: string;
  index?: number;
  /** Renders the navy featured treatment (used for Sales on home). */
  featured?: boolean;
}) {
  const Icon = serviceIcons[service.slug];
  const accent = accents[service.slug];

  const imageSrc = getImageUrl(cardImageKeys[service.slug]);

  if (featured) {
    return (
      <Link
        href={localizedPath(locale, `/services/${service.slug}`)}
        className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl p-5 sm:p-6 shadow-[0_16px_40px_-16px_rgba(18,19,27,0.45)] transition-all hover:-translate-y-1"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/80 to-navy/20" />
        <span
          aria-hidden
          className="absolute end-5 top-5 z-10 block size-7 rotate-45 rounded-[4px] border-2 border-brass/70"
        />
        <span className="relative z-10 mb-auto inline-flex size-12 items-center justify-center rounded-xl bg-paper/10 text-paper">
          <Icon className="size-6" />
        </span>
        <h3 className="font-display relative z-10 mt-6 text-2xl text-paper">{service.name}</h3>
        <p className="relative z-10 mt-2 text-sm/6 text-paper/70">{service.cardDescription}</p>
        <span className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-paper">
          {learnMore}
          <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 rtl:-translate-x-0 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={localizedPath(locale, `/services/${service.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[0_1px_2px_rgba(38,33,30,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_-14px_rgba(27,28,38,0.3)]"
    >
      {/* 4:3 rather than 16:9 — several source photos are portrait, and a
          wide crop cut the worker out of the frame. The taller box shows much
          more of the photo at the same card width. */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="size-full" style={{ backgroundColor: accent, opacity: 0.15 }} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className="inline-flex size-11 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: accent }}
          >
            <Icon className="size-5" />
          </span>
          <span
            aria-hidden
            className="font-display text-xl text-ink/20 transition-colors group-hover:text-ink/40"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-display mt-4 text-2xl text-navy">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm/6 text-ink/65">{service.cardDescription}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-maroon">
          {learnMore}
          <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 rtl:-translate-x-0 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
