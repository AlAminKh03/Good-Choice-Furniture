'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceSlug } from '@/content/types';
import { localizedPath } from '@/lib/site';
import { CheckIcon } from './icons';
import { Sofa, Wrench, Tv, Package, Leaf } from 'lucide-react';

interface ServiceSelectorProps {
  locale: 'en' | 'ar';
  services: Record<ServiceSlug, {
    title: string;
    description: string;
    details?: string[];
    trending?: string;
  }>;
  serviceImages?: Partial<Record<ServiceSlug, string | undefined>>;
  serviceBgColors?: Partial<Record<ServiceSlug, string>>;
  serviceIconComponents?: Record<ServiceSlug, React.ReactNode>;
  /**
   * Subcategory links per service, already localized. These used to be a
   * hardcoded English map in this file, which meant the Arabic home page
   * showed English chips; they now come from the dictionary via the page.
   */
  serviceSubcategories: Record<ServiceSlug, { label: string; slug: string }[]>;
  /** Localized label for the "Trending now" line. */
  trendingLabel: string;
}


const defaultBgColors: Record<ServiceSlug, string> = {
  sales: 'bg-blue-100',
  repair: 'bg-amber-100',
  installation: 'bg-cyan-100',
  moving: 'bg-purple-100',
  disposal: 'bg-green-100',
};

const defaultIconComponents: Record<ServiceSlug, React.ReactNode> = {
  sales: <Sofa className="w-6 h-6" />,
  repair: <Wrench className="w-6 h-6" />,
  installation: <Tv className="w-6 h-6" />,
  moving: <Package className="w-6 h-6" />,
  disposal: <Leaf className="w-6 h-6" />,
};

export function ServiceSelector({
  locale,
  services,
  serviceImages = {},
  serviceBgColors = {},
  serviceIconComponents = defaultIconComponents,
  serviceSubcategories,
  trendingLabel,
}: ServiceSelectorProps) {
  const slugs = Object.keys(services) as ServiceSlug[];
  const [selected, setSelected] = useState<ServiceSlug>(slugs[0]);

  const bgColor = serviceBgColors[selected] || defaultBgColors[selected];
  const showcaseImage = serviceImages[selected];

  return (
    <div className="space-y-6">
      {/* Category tabs - TaskRabbit style */}
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-6 sm:gap-8 min-w-min sm:min-w-full sm:justify-center border-b border-border pb-6">
          {slugs.map((slug) => (
            <button
              key={slug}
              onClick={() => setSelected(slug)}
              className="flex flex-col items-center gap-3 text-center whitespace-nowrap transition-all cursor-pointer hover:opacity-80"
            >
              {/* Icon with circle background (only when selected) */}
              <div className={`size-12 sm:size-14 rounded-full flex items-center justify-center transition-all ${
                selected === slug
                  ? 'bg-maroon/15'
                  : ''
              }`}>
                <div className={`transition-all ${
                  selected === slug ? 'text-maroon' : 'text-ink/60'
                }`}>
                  {serviceIconComponents[slug]}
                </div>
              </div>

              {/* Service name with underline (only when selected) */}
              <div className="flex flex-col items-center gap-1">
                <span className={`text-xs sm:text-sm font-bold block ${
                  selected === slug
                    ? 'text-maroon'
                    : 'text-navy'
                }`}>
                  {services[slug]?.title || slug.charAt(0).toUpperCase() + slug.slice(1)}
                </span>
                {selected === slug && (
                  <div className="h-1 w-8 bg-maroon rounded-full"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>


      {/* Subcategories as links to separate pages */}
      <div className="flex flex-wrap gap-2 justify-center">
        {(serviceSubcategories[selected] ?? []).map((sub) => (
          <Link
            key={sub.slug}
            href={localizedPath(locale, `/services/${selected}/${sub.slug}`)}
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-paper transition-all"
          >
            {sub.label}
          </Link>
        ))}
      </div>

      {/* Dynamic showcase section - Modern floating card design */}
      <div className={`rounded-3xl overflow-hidden transition-all duration-300 p-6 sm:p-8 lg:p-12 ${bgColor} relative min-h-96 sm:min-h-[500px] flex items-center`}>
        {/* Background image (full width) */}
        {showcaseImage && (
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src={showcaseImage}
              alt={services[selected].title}
              fill
              // No `priority` here: the home hero band above is the LCP
              // candidate now and carries it. Two competing priority images
              // would just split the early bandwidth.
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
          </div>
        )}

        {/* Floating white card - overlays the image. Kept deliberately
            compact so the photo behind it stays the hero of the section
            rather than a thin border around a text panel. */}
        <div className="relative z-10 max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6">
            {/* Accent line */}
            <div className="w-10 h-1 bg-gradient-to-r from-maroon to-transparent mb-4 rounded-full"></div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2 leading-tight">
              {services[selected].title}
            </h3>

            {/* Subtitle description */}
            <p className="text-sm text-ink/70 mb-4 leading-relaxed">
              {services[selected].description}
            </p>

            {/* Details list */}
            {services[selected].details && (
              <ul className="space-y-2 mb-4">
                {services[selected].details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <div className="shrink-0 mt-0.5">
                      <div className="flex items-center justify-center size-4 rounded-full bg-maroon/10">
                        <CheckIcon className="size-2.5 text-maroon" />
                      </div>
                    </div>
                    <span className="text-ink/80 text-sm leading-snug">{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Trending badge */}
            {services[selected].trending && (
              <div className="pt-3.5 border-t border-border/30">
                <p className="text-xs text-ink/70 leading-relaxed">
                  <span className="font-bold text-navy">{trendingLabel}</span>
                  <br />
                  <span className="text-ink/60">{services[selected].trending}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
