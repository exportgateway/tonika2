import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://transporttonika2.com";

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "sl" ? 1 : 0.8
  }));
}
