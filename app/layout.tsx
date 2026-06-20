import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://transporttonika2.com"),
  title: {
    default: "TONIKA 2 | Premium hladilni transport Evropa",
    template: "%s | TONIKA 2"
  },
  description:
    "TONIKA 2 izvaja premium hladilni transport, specializirane relacije Slovenija-Švica in certificirane temperaturno vodene logistične storitve po Evropi.",
  applicationName: "TONIKA 2",
  authors: [{ name: "TONIKA 2 d.o.o." }],
  keywords: [
    "TONIKA 2",
    "hladilni transport",
    "temperaturno voden transport",
    "hladilni transport Slovenija Švica",
    "refrigerated transport Slovenia Switzerland",
    "international transport Europe"
  ],
  openGraph: {
    type: "website",
    siteName: "TONIKA 2",
    title: "TONIKA 2 | Premium hladilni transport Evropa",
    description:
      "Temperaturno voden mednarodni transport z zanesljivo floto TONIKA 2, švicarskimi relacijami in stalnim nadzorom temperature.",
    locale: "sl_SI",
    images: ["/images/hero-alps.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TONIKA 2 | Premium hladilni transport Evropa",
    description:
      "Premium hladilni transport med Slovenijo, Švico, Hrvaško, južno EU in Evropo.",
    images: ["/images/hero-alps.webp"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
