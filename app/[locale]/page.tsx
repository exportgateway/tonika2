import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TonikaLanding } from "@/components/TonikaLanding";
import { company, content, isLocale, locales, type Locale } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale as Locale;
  const copy = content[locale];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://transporttonika2.com";

  return {
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        sl: `${siteUrl}/sl`,
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`
      }
    },
    openGraph: {
      title: `${copy.seoTitle} | TONIKA 2`,
      description: copy.seoDescription,
      url: `${siteUrl}/${locale}`,
      locale: locale === "sl" ? "sl_SI" : locale === "de" ? "de_DE" : "en_US",
      type: "website"
    }
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://transporttonika2.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TONIKA 2",
    legalName: company.legalName,
    taxID: company.taxId,
    url: siteUrl,
    email: company.email,
    telephone: company.phonePrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bratovševa ploščad 8",
      addressLocality: "Ljubljana",
      postalCode: "1000",
      addressCountry: "SI"
    },
    areaServed: ["Slovenia", "Switzerland", "Croatia", "Europe"],
    foundingDate: "1996",
    description: content[locale].seoDescription
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TonikaLanding locale={locale} />
    </>
  );
}
