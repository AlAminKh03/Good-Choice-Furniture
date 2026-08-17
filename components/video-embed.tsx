"use client";

import { useState } from "react";

/**
 * Lazy YouTube facade (PRD §5): renders a lightweight branded shell and
 * only loads the iframe after the visitor clicks play — zero player JS
 * on initial page load.
 */
export function VideoEmbed({
  videoId,
  title,
  playLabel,
}: {
  videoId: string;
  title: string;
  playLabel: string;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="aspect-video overflow-hidden rounded-xl border border-brass/30">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={playLabel}
      className="trellis group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-brass/30 bg-gradient-to-br from-navy to-navy-deep"
    >
      <span className="flex size-16 items-center justify-center rounded-full bg-brass text-navy shadow-lg transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-7 translate-x-0.5 rtl:-translate-x-0.5 rtl:rotate-180" aria-hidden>
          <path d="M6 4.5v15l13-7.5-13-7.5Z" />
        </svg>
      </span>
      <span className="sr-only">{title}</span>
    </button>
  );
}
