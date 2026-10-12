import type { Metadata } from "next";
import Link from "next/link";

import { BookingCta } from "@/components/booking-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Policies } from "@/components/policies";
import { PriceList } from "@/components/price-list";
import { ButtonLink } from "@/components/ui/button-link";
import { bookingAdvice, cancellationPolicy } from "@/content/policies";
import { consultationNote, priceCategories, priceFootnote } from "@/content/prices";
import { booking } from "@/content/salon";
import { pageMetadata, priceCatalogJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Priser",
  description:
    "Prislista för Salong Najs på Södermalm: klippning, bottenfärgning, slingor och nyansering, permanent, barnklippning, uppsättning och hårvård. Priser inkl. moms.",
  path: "/priser",
});

export default function PricesPage() {
  return (
    <>
      <JsonLd data={priceCatalogJsonLd} />
      <PageHeader eyebrow="Prislista" title="Priser" lead={<p>{priceFootnote}</p>}>
        <ButtonLink href={booking.salon.url}>Boka online</ButtonLink>
      </PageHeader>

      <nav aria-label="Kategorier" className="sticky top-16 z-20 border-b border-ink/10 bg-paper md:top-20">
        <ul className="shell flex gap-6 overflow-x-auto py-4 text-[0.9375rem] whitespace-nowrap [scrollbar-width:none]">
          {priceCategories.map((category) => (
            <li key={category.id}>
              <Link href={`#${category.id}`} className="hover:text-blue hover:underline">
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shell py-12 md:py-16">
        {priceCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-rubrik`}
            className="grid scroll-mt-36 gap-4 border-b border-ink/10 py-10 md:grid-cols-12 md:gap-8 md:py-12"
          >
            <h2 id={`${category.id}-rubrik`} className="heading text-[2rem] md:col-span-4">
              {category.title}
            </h2>
            <PriceList items={category.items} withDescriptions className="text-[1.0625rem] md:col-span-8" />
          </section>
        ))}
        <p className="mt-6 text-sm text-ink/70">* {consultationNote}</p>
      </div>

      <div className="bg-mist">
        <Policies id="innan-du-bokar" policies={[...bookingAdvice, cancellationPolicy]} />
      </div>
      <BookingCta />
    </>
  );
}
