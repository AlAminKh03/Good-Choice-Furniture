"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GalleryItem, ServiceSlug } from "@/content/types";
import { getImageUrl } from "@/lib/images";
import { localizedPath, type Locale } from "@/lib/site";
import { PlaceholderImage } from "./placeholder-image";
import { BeforeAfterSlider } from "./before-after-slider";

/** Filterable gallery grid with draggable before/after comparisons. */
export function GalleryGrid({
  items,
  filters,
  allLabel,
  beforeLabel,
  afterLabel,
  emptyState,
  filtersLabel,
  locale = "en",
}: {
  items: GalleryItem[];
  /** [slug, label] pairs for the filter chips. */
  filters: [ServiceSlug, string][];
  allLabel: string;
  beforeLabel: string;
  afterLabel: string;
  emptyState: string;
  /** Accessible name for the filter chip group. */
  filtersLabel: string;
  locale?: Locale;
}) {
  const [active, setActive] = useState<ServiceSlug | "all">("all");
  const visible = active === "all" ? items : items.filter((i) => i.service === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={filtersLabel}>
        {([["all", allLabel], ...filters] as [ServiceSlug | "all", string][]).map(
          ([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setActive(value)}
              aria-pressed={active === value}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === value
                  ? "border-maroon bg-maroon text-paper"
                  : "border-ink/15 bg-white/60 text-ink/70 hover:border-maroon/40 hover:text-maroon"
              }`}
            >
              {label}
            </button>
          ),
        )}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-ink/60">{emptyState}</p>
      ) : (
        <ul className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => {
            const singleSrc = getImageUrl(item.image);
            return (
            <li key={item.id}>
              <figure className="group">
                {/* A "pair" is a drag-to-compare control, so it is deliberately
                    NOT wrapped in a link: an <a> is natively draggable, and the
                    browser's link-drag cancels the slider's pointer capture
                    part-way through a swipe. The caption below carries the
                    link instead, so every item is still reachable and
                    crawlable. */}
                {item.kind === "pair" ? (
                  <BeforeAfterSlider
                    label={item.title}
                    beforeLabel={beforeLabel}
                    afterLabel={afterLabel}
                    beforeSrc={getImageUrl(item.beforeImage)}
                    afterSrc={getImageUrl(item.afterImage)}
                  />
                ) : (
                  <Link
                    href={localizedPath(locale, `/services/${item.service}`)}
                    className="block rounded-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
                    tabIndex={-1}
                    aria-hidden
                  >
                    {singleSrc ? (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                          src={singleSrc}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <PlaceholderImage label={item.title} />
                    )}
                  </Link>
                )}
                <figcaption className="mt-2.5 text-sm font-semibold">
                  <Link
                    href={localizedPath(locale, `/services/${item.service}`)}
                    className="flex items-center gap-2 rounded-lg text-ink/75 hover:text-maroon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon group-hover:text-maroon"
                  >
                    <span aria-hidden className="inline-block size-1.5 rotate-45 bg-brass" />
                    {item.title}
                  </Link>
                </figcaption>
              </figure>
            </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
