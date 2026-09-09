# Good Choice Furniture — Home Services Website

Bilingual (English/Arabic, full RTL) marketing & lead-generation site for a Qatar home
services company. Built to the spec in `good-choice-furniture-prd.md`. Theme: "Emerald Elegance" —
emerald primary and brass accents on warm off-white, with a full dark variant (see `app/globals.css`).

**Stack:** Next.js 16 (App Router, static export-friendly) · Tailwind CSS 4 · TypeScript

## Commands

```bash
pnpm dev    # dev server (redirects / → /en or /ar by Accept-Language)
pnpm build  # production build — all routes prerendered (SSG)
pnpm lint   # eslint
```

## Structure

| Path | Purpose |
|---|---|
| `app/[lang]/` | All routes, locale-prefixed (`/en`, `/ar`). `dir`/fonts switch per locale |
| `content/en.ts` · `content/ar.ts` | All copy — two full hand-written dictionaries |
| `content/types.ts` | The `Dictionary` contract both locales satisfy |
| `lib/site.ts` | Business config: phone, WhatsApp number, email, areas, domain |
| `lib/schema.ts` | LocalBusiness / Service / FAQPage / BlogPosting JSON-LD |
| `proxy.ts` | Locale redirect (cookie → Accept-Language → en) |
| `components/` | Header, footer, floating WhatsApp, quote form, gallery grid, etc. |

## Before launch (owner-supplied, PRD §8)

1. Replace the remaining placeholders in `lib/site.ts`: domain, phone/WhatsApp, email, intro video id,
   CR number. The name is final. The domain is the urgent one — it is the base for every canonical
   URL, the sitemap and the JSON-LD
2. Replace the stock photos in `public/images/` with real job/team/showroom shots, and fill the
   `imageMap` keys in `lib/images.ts` that are still unset (those render `PlaceholderImage`).
   **Give a replacement a new filename** — overwriting a path in place keeps serving the cached
   old photo for hours; see the header comment in `lib/images.ts`
3. Replace sample testimonials in `content/*.ts` with real reviews
4. Set `NEXT_PUBLIC_GA_ID` in `.env` to enable GA4 (WhatsApp/call/form events are pre-wired)
5. Create Google Business Profile with all 5 services; submit `/sitemap.xml` in Search Console

## Deferred from PRD

- Headless CMS (Sanity) wiring — content currently lives in `content/*.ts`; dictionary shape is CMS-ready
- Cloudinary — images are served from `public/images/` through `next/image` instead, which covers
  resizing, WebP/AVIF and caching without a third-party origin. Revisit only if the owner's photo
  library outgrows the repo
- Real photos/videos, real testimonials, final domain and contact details (blocked on owner)
