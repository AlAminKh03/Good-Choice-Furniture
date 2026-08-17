import Link from "next/link";
import { lang as langParam } from "next/root-params";
import { getDictionary, isLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/site";

export default async function NotFound() {
  const lang = await langParam();
  const locale = lang && isLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  return (
    <div className="container-x flex flex-col items-center py-24 text-center">
      <span aria-hidden className="block size-12 rotate-45 rounded-md border-2 border-brass bg-maroon/10" />
      <h1 className="font-display mt-6 text-4xl text-navy">{dict.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink/70">{dict.notFound.text}</p>
      <Link
        href={localizedPath(locale, "/")}
        className="mt-8 rounded-full bg-maroon px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-brand-deep"
      >
        {dict.notFound.cta}
      </Link>
    </div>
  );
}
