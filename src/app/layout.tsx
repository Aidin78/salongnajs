import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Newsreader } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { MobileBookingBar } from "@/components/layout/mobile-booking-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { salon, siteUrl } from "@/content/salon";
import { defaultTitle, hairSalonJsonLd } from "@/lib/seo";

import "./globals.css";

const familjen = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${salon.name} – Frisör Södermalm`,
  },
  description:
    "Salong Najs är en frisörsalong på Södermalm i Stockholm, nära Mariatorget. Klippning, färg, slingor, permanent och uppsättning. Boka tid online.",
  applicationName: salon.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: salon.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#2236c8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${familjen.variable} ${newsreader.variable}`}>
      <body className="flex min-h-dvh flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <JsonLd data={hairSalonJsonLd} />
        <SiteHeader />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileBookingBar />
      </body>
    </html>
  );
}
