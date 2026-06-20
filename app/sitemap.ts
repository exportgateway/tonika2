import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://transporttonika2.com";

  const localizedPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "sl" ? 1 : 0.8
  }));

  const legalPages = ["/privacy-policy", "/cookies", "/terms-of-use"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.35
  }));

  return [...localizedPages, ...legalPages];
}
