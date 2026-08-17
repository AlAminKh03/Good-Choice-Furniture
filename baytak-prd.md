# Baytak Home Services — Product Requirements Document (PRD)

*Version 1.0 — placeholder brand name "Baytak" used throughout; swap once finalized.*

## 1. Overview

A bilingual (Arabic/English) marketing and lead-generation website for a Qatar-based home services company. The business offers five service lines: furniture & curtain sales, sofa/furniture repair, installation (TV units, wall cabinets, kitchen cabinets, flooring), moving/shifting, and junk/waste disposal.

This is **not** an e-commerce checkout site. The goal is to get a visitor to WhatsApp or call, not to buy online.

## 2. Goals & success metrics

- Rank on page 1 of Google for target bilingual local search terms within 3–6 months of launch
- Mobile Lighthouse performance score of 90+, LCP under 2.5s
- Every page available in full in both English and Arabic (not machine-translated afterthoughts)
- Primary conversion metric: WhatsApp clicks and phone calls per month (baseline to be set after first month live)

## 3. Target users

- Homeowners and villa residents across Doha and surrounding municipalities needing repair, installation, moving, or disposal — mobile-first, WhatsApp as the primary contact channel
- Expats furnishing or clearing a home, often on a moving timeline
- Office/facilities managers needing office relocation or bulk disposal (secondary audience)

## 4. Sitemap

| Page | Purpose | Primary CTA |
|---|---|---|
| Home | Overview of all 5 services, trust signals, entry point | WhatsApp / Get a quote |
| Services (parent) | Directory of the 5 service pages | Link to each sub-page |
| → Sales | Curtains & furniture catalog/highlights | WhatsApp with product photo |
| → Repair | Sofa/furniture repair details, before/after | WhatsApp with photo of item |
| → Installation | TV units, wall cabinets, kitchen, flooring | Get a quote |
| → Moving | Home/office moving process, pricing factors | Get a quote |
| → Disposal | Compliance statement, scope, service area | WhatsApp for pickup |
| Gallery | Photo/video proof of past jobs | — |
| About | Company story, team, licensing | — |
| Blog/Tips | SEO content (seasonal, how-to, checklists) | Link to relevant service |
| Get a Quote | Universal form with photo upload | Submits to WhatsApp/email |
| Contact | Map, phone, WhatsApp, hours, form | Call / WhatsApp |

## 5. Functional requirements

- **Contact**: WhatsApp click-to-chat (`wa.me` links) pre-filled with a different message per service/page; `tel:` click-to-call in header, footer, and floating button on every page
- **Quote form**: name, phone, service type, optional photo upload, optional message — submission triggers a WhatsApp deep link or email notification
- **Language toggle**: EN/AR switch on every page, full RTL mirroring for Arabic (not just translated text in an LTR layout)
- **Gallery**: filterable by service type, before/after image pairs where applicable, lazy-loaded
- **Video**: embedded, lazy-loaded, hosted externally (YouTube/Vimeo) or via CDN to avoid bloating page weight
- **Blog/CMS**: editable by the business owner without code changes
- **Service area / map**: Google Maps embed or static list of coverage areas (Doha, Al Rayyan, Al Wakrah, Lusail, The Pearl, Al Khor, Umm Salal)
- **Testimonials**: rotating/static cards, name + area, no fabricated ratings once real reviews exist
- **Disposal page specifically**: plain-language statement that collection follows Ministry of Municipality waste-segregation guidance; clear scope of what is and isn't accepted (household/furniture junk vs. hazardous/bulk construction waste, which should be referred to a licensed handler)

## 6. Non-functional requirements

- **SEO**: `LocalBusiness`, `Service`, and `FAQPage` schema markup; unique meta title/description per page per language; XML sitemap; Google Business Profile with all 5 services listed
- **Performance**: image compression/CDN delivery, lazy loading below the fold, minimal blocking JS
- **Accessibility**: keyboard-navigable, AA color contrast, bilingual alt text on all images
- **Responsive**: functional and legible down to 360px width
- **Analytics**: GA4 + Google Search Console; event tracking on WhatsApp clicks, call clicks, and form submissions

## 7. Tech stack

- Next.js (React) + Tailwind CSS
- i18n routing (`/en`, `/ar`) with automatic RTL layout switching
- Headless CMS (e.g. Sanity) for services, gallery, blog, and testimonials content
- Cloudinary (or similar) for image/video delivery
- Hosting: Vercel

## 8. Content the business owner needs to supply

- Real photos: before/after per service, team/trucks in action, completed installs
- 1–2 short videos (homepage intro, one service in progress)
- Real testimonials with name and area once available
- Final business name, logo, phone/WhatsApp number, licensing/registration details
- Confirmation of which waste types are and are not accepted for the Disposal page

## 9. Out of scope (v1)

- Online payment / shopping cart
- Live chat bot beyond WhatsApp
- Multi-language beyond Arabic/English
- Multi-country support

## 10. Open questions

- Final business name and domain (`.qa` vs `.com`)
- Whether construction/hazardous waste is handled directly or referred to a licensed partner
- Budget for CMS subscription and ongoing hosting

## 11. Phases

1. Branding & content collection (name, logo, real photos/videos)
2. Design finalization (homepage direction approved, remaining pages designed)
3. Build (Next.js scaffold, CMS wiring, bilingual routing)
4. SEO setup (schema, Google Business Profile, analytics, sitemap)
5. Launch, then ongoing blog/content cadence for SEO
