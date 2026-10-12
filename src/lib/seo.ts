import type { Metadata } from "next";

import { priceCategories } from "@/content/prices";
import { salon, siteUrl } from "@/content/salon";

export const defaultTitle = `${salon.name} – Frisör på Södermalm vid Mariatorget`;

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Salong Najs blå blomstertapet med rosor och klematis",
};

type PageMeta = { title?: string; description: string; path: string };

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: salon.name,
      title: title ? `${title} | ${salon.name}` : defaultTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image" },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: salon.street,
  postalCode: salon.postalCode,
  addressLocality: salon.city,
  addressRegion: "Stockholms län",
  addressCountry: salon.country,
};

export const hairSalonJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${siteUrl}/#salong`,
  name: salon.name,
  url: siteUrl,
  image: `${siteUrl}${ogImage.url}`,
  telephone: salon.phone.e164,
  email: salon.email,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: salon.geo.latitude,
    longitude: salon.geo.longitude,
  },
  hasMap: salon.mapUrl,
  areaServed: [salon.district, salon.city],
  sameAs: [salon.instagram.url],
};

export const priceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `Priser – ${salon.name}`,
  url: `${siteUrl}/priser`,
  provider: { "@id": `${siteUrl}/#salong` },
  itemListElement: priceCategories.map((category) => ({
    "@type": "OfferCatalog",
    name: category.title,
    itemListElement: category.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.name },
      ...(item.price.kind === "from"
        ? {
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              minPrice: item.price.amount,
              priceCurrency: "SEK",
              valueAddedTaxIncluded: true,
              ...(item.price.unit ? { unitCode: "HUR" } : {}),
            },
          }
        : {}),
    })),
  })),
};
