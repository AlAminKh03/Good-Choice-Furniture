import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, isLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/site";
import { blogImageKeys, getImageUrl } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: { absolute: dict.blog.metaTitle },
    description: dict.blog.metaDescription,
    alternates: {
      canonical: `/${dict.locale}/blog`,
      languages: { en: "/en/blog", ar: "/ar/blog", "x-default": "/en/blog" },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const b = dict.blog;

  return (
    <>
      <PageHero eyebrow={b.eyebrow} title={b.heading} subtitle={b.intro} />
      <section className="container-x py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {b.posts.map((post) => {
            const cover = getImageUrl(blogImageKeys[post.slug]);
            return (
            <Link
              key={post.slug}
              href={localizedPath(locale, `/blog/${post.slug}`)}
              className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white/70 shadow-[0_1px_2px_rgba(34,26,20,0.05)] transition-all hover:-translate-y-1 hover:border-brass/60 hover:shadow-[0_12px_32px_-12px_rgba(138,21,56,0.25)]"
            >
              {/* Decorative: the card heading below names the post. */}
              {cover ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cover}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(max-width: 640px) 100vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-maroon">{post.category}</span>
                <time dateTime={post.date} className="text-ink/50">
                  {new Date(post.date).toLocaleDateString(locale === "ar" ? "ar-QA" : "en-QA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2 className="font-display mt-4 text-xl text-navy">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm/6 text-ink/70">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-maroon">
                {dict.common.readMore}
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-translate-x-0 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </span>
              </div>
            </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
