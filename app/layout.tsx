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
    default: "TONIKA 2 | Premium Thermo Transport Europe",
    template: "%s | TONIKA 2"
  },
  description:
    "TONIKA 2 delivers premium thermo-frigo transport, Swiss route expertise, certified refrigerated fleet operations, and international logistics support across Europe.",
  applicationName: "TONIKA 2",
  authors: [{ name: "TONIKA 2 d.o.o." }],
  keywords: [
    "TONIKA 2",
    "thermo transport",
    "frigo transport",
    "refrigerated transport Slovenia Switzerland",
    "temperature controlled logistics",
    "international transport Europe"
  ],
  openGraph: {
    type: "website",
    siteName: "TONIKA 2",
    title: "TONIKA 2 | Premium Thermo Transport Europe",
    description:
      "Temperature-controlled international transport with Swiss precision, real-time monitoring, and certified refrigerated fleet operations.",
    locale: "sl_SI"
  },
  twitter: {
    card: "summary_large_image",
    title: "TONIKA 2 | Premium Thermo Transport Europe",
    description:
      "Premium thermo-frigo logistics between Slovenia, Switzerland, Croatia, Southern EU, and Europe."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
