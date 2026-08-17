import "server-only";
import type { Dictionary } from "@/content/types";
import { isLocale, type Locale } from "./site";

const dictionaries = {
  en: () => import("@/content/en").then((m) => m.en),
  ar: () => import("@/content/ar").then((m) => m.ar),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export { isLocale };
export type { Locale };
