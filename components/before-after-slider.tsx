"use client";

import Image from "next/image";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { PlaceholderImage } from "./placeholder-image";

/**
 * One full-bleed layer of the comparison. Renders the real photo when the
 * item has one and falls back to the branded placeholder when it does not,
 * so a pair with only one of its two photos supplied still works.
 */
function ComparisonLayer({
  src,
  label,
  badge,
  className = "",
}: {
  src?: string;
  label: string;
  badge: string;
  className?: string;
}) {
  if (!src) {
    return (
      <PlaceholderImage
        label={label}
        badge={badge}
        ratio="aspect-square"
        className={`absolute inset-0 rounded-none border-0 ${className}`}
      />
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={`${label} — ${badge}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        // Images are natively draggable. Without this, pressing on the photo
        // starts an HTML5 image drag, which cancels the pointer capture and
        // stops `pointermove` — the handle jumps a few pixels and then sticks.
        draggable={false}
        className="object-cover"
      />
      <span className="absolute start-3 top-3 rounded-full bg-maroon px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-paper rtl:tracking-normal">
        {badge}
      </span>
    </div>
  );
}

function subscribeDir(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir"],
  });
  return () => observer.disconnect();
}

/**
 * Interactive before/after comparison slider for gallery pairs.
 * Pointer-draggable and keyboard-operable (role="slider"). Fully
 * RTL-aware: the "after" layer reveals from the inline-start side and
 * arrow keys follow the document direction.
 */
export function BeforeAfterSlider({
  label,
  beforeLabel,
  afterLabel,
  beforeSrc,
  afterSrc,
  className = "",
}: {
  /** Alt-style description of the job shown (both layers). */
  label: string;
  beforeLabel: string;
  afterLabel: string;
  /** Photo of the item before the work; placeholder shown when absent. */
  beforeSrc?: string;
  /** Photo of the same item after the work; placeholder shown when absent. */
  afterSrc?: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  // Position as % from the inline-START edge (logical, not physical).
  const [pos, setPos] = useState(50);
  const rtl = useSyncExternalStore(
    subscribeDir,
    () => document.documentElement.dir === "rtl",
    () => false,
  );
  const dragging = useRef(false);

  const updateFromPointer = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Measure from the inline-start edge: left in LTR, right in RTL.
      const fromStart = rtl ? rect.right - clientX : clientX - rect.left;
      setPos(Math.min(95, Math.max(5, (fromStart / rect.width) * 100)));
    },
    [rtl],
  );

  function onKeyDown(e: React.KeyboardEvent) {
    const step = e.shiftKey ? 10 : 4;
    // ArrowTowardStart = Left in LTR, Right in RTL.
    const towardStart = rtl ? e.key === "ArrowRight" : e.key === "ArrowLeft";
    const towardEnd = rtl ? e.key === "ArrowLeft" : e.key === "ArrowRight";
    if (towardStart || e.key === "ArrowDown") {
      e.preventDefault();
      setPos((p) => Math.max(5, p - step));
    } else if (towardEnd || e.key === "ArrowUp") {
      e.preventDefault();
      setPos((p) => Math.min(95, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(5);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(95);
    }
  }

  return (
    <div
      ref={trackRef}
      className={`relative aspect-square touch-none overflow-hidden rounded-xl border border-brass/30 select-none ${className}`}
      // Belt-and-braces against native drag stealing the gesture: any
      // draggable descendant (an image, or an ancestor <a>) would otherwise
      // start a drag mid-swipe and freeze the handle.
      onDragStart={(e) => e.preventDefault()}
      // If this ever sits inside a link again, a drag must not also navigate.
      onClick={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromPointer(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromPointer(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      {/* Before layer (full) */}
      <ComparisonLayer src={beforeSrc} label={label} badge={beforeLabel} />
      {/* After layer, revealed from inline-start up to the handle.
          clip-path is physical, so mirror the inset in RTL. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          clipPath: rtl
            ? `inset(0 0 0 ${100 - pos}%)`
            : `inset(0 ${100 - pos}% 0 0)`,
        }}
      >
        <ComparisonLayer
          src={afterSrc}
          label={label}
          badge={afterLabel}
          className="bg-sand-deep"
        />
      </div>

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`${beforeLabel} / ${afterLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 flex w-8 -translate-x-1/2 cursor-ew-resize items-center justify-center rtl:translate-x-1/2"
        style={{ insetInlineStart: `${pos}%` }}
      >
        <span aria-hidden className="absolute inset-y-0 start-1/2 w-0.5 -translate-x-1/2 bg-paper shadow-[0_0_0_1px_rgba(34,26,20,0.15)] rtl:translate-x-1/2" />
        <span
          aria-hidden
          className="relative flex size-9 items-center justify-center rounded-full border-2 border-paper bg-maroon text-paper shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <path d="m9 6-4 6 4 6M15 6l4 6-4 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
