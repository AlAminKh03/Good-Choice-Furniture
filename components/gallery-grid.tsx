"use client";

import { useState } from "react";
import type { GalleryItem, ServiceSlug } from "@/content/types";
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
}: {
  items: GalleryItem[];
  /** [slug, label] pairs for the filter chips. */
  filters: [ServiceSlug, string][];
  allLabel: string;
  beforeLabel: string;
  afterLabel: string;
  emptyState: string;
}) {
  const [active, setActive] = useState<ServiceSlug | "all">("all");
  const visible = active === "all" ? items : items.filter((i) => i.service === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filters">
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
          {visible.map((item) => (
            <li key={item.id}>
              <figure>
                {item.kind === "pair" ? (
                  <BeforeAfterSlider
                    label={item.title}
                    beforeLabel={beforeLabel}
                    afterLabel={afterLabel}
                  />
                ) : (
                  <PlaceholderImage label={item.title} />
                )}
                <figcaption className="mt-2.5 flex items-center gap-2 text-sm font-semibold text-ink/75">
                  <span aria-hidden className="inline-block size-1.5 rotate-45 bg-brass" />
                  {item.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
