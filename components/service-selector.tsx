'use client';

import { useState } from 'react';
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
}

const serviceSubcategories: Record<ServiceSlug, { label: string; slug: string }[]> = {
  sales: [
    { label: 'Furniture Sales', slug: 'furniture-sales' },
    { label: 'Curtains & Draping', slug: 'curtains-draping' },
    { label: 'Decor & Accessories', slug: 'decor-accessories' },
  ],
  repair: [
    { label: 'Sofa & Couch Repair', slug: 'sofa-repair' },
    { label: 'Upholstery Restoration', slug: 'upholstery-restoration' },
    { label: 'Frame & Structure', slug: 'frame-structure' },
  ],
  installation: [
    { label: 'Curtain Installation', slug: 'curtain-installation' },
    { label: 'Furniture Assembly', slug: 'furniture-assembly' },
    { label: 'Wall Mounting', slug: 'wall-mounting' },
  ],
  moving: [
    { label: 'Furniture Moving', slug: 'furniture-moving' },
    { label: 'Packing Services', slug: 'packing-services' },
    { label: 'Relocation Support', slug: 'relocation-support' },
  ],
  disposal: [
    { label: 'Furniture Disposal', slug: 'furniture-disposal' },
    { label: 'Fabric Waste Recycling', slug: 'fabric-recycling' },
    { label: 'Bulk Removal', slug: 'bulk-removal' },
  ],
};

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
  serviceIconComponents = defaultIconComponents
}: ServiceSelectorProps) {
  const slugs = Object.keys(services) as ServiceSlug[];
  const [selected, setSelected] = useState<ServiceSlug>(slugs[0]);

  const bgColor = serviceBgColors[selected] || defaultBgColors[selected];

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
        {serviceSubcategories[selected].map((sub, idx) => (
          <Link
            key={idx}
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
        {serviceImages[selected] && (
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <img
              src={serviceImages[selected]}
              alt={services[selected].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
          </div>
        )}

        {/* Floating white card - overlays the image */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10">
            {/* Accent line */}
            <div className="w-12 h-1.5 bg-gradient-to-r from-maroon to-transparent mb-6 rounded-full"></div>

            {/* Title */}
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-3 leading-tight">
              {services[selected].title}
            </h3>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-ink/70 mb-6 leading-relaxed">
              {services[selected].description}
            </p>

            {/* Details list */}
            {services[selected].details && (
              <ul className="space-y-3 mb-6">
                {services[selected].details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="shrink-0 mt-0.5">
                      <div className="flex items-center justify-center size-5 rounded-full bg-maroon/10">
                        <CheckIcon className="size-3 text-maroon" />
                      </div>
                    </div>
                    <span className="text-ink/80 text-sm sm:text-base leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Trending badge */}
            {services[selected].trending && (
              <div className="pt-5 border-t border-border/30">
                <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                  <span className="font-bold text-navy">Trending Now:</span>
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
