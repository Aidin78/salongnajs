import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { BookingCta } from "@/components/booking-cta";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { SmartLink } from "@/components/ui/smart-link";
import { media } from "@/content/media";
import { salon } from "@/content/salon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kontakta Salong Najs på Wollmar Yxkullsgatan 1, 118 50 Stockholm – nära T-bana Mariatorget på Södermalm. Telefon 08-615 16 01, e-post kontakt@salongnajs.com.",
  path: "/kontakt",
});

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-ink/15 py-6">
      <dt className="eyebrow text-ink/60">{label}</dt>
      <dd className="heading mt-2 text-[clamp(1.5rem,2.6vw,2rem)] [overflow-wrap:anywhere]">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Hör av dig"
        lead={
          <p>
            {salon.name} finner du på {salon.street} på {salon.district}, {salon.city}. Närmaste
            T-bana är {salon.subway}. För frågor kan du mejla eller ringa oss.
          </p>
        }
      />

      <section aria-label="Kontaktuppgifter" className="shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <dl className="md:col-span-6">
            <Detail label="Telefon">
              <a href={salon.phone.href} className="tabular hover:text-blue">
                {salon.phone.display}
              </a>
            </Detail>
            <Detail label="E-post">
              <a href={`mailto:${salon.email}`} className="hover:text-blue">
                {salon.email}
              </a>
            </Detail>
            <Detail label="Adress">
              <address className="not-italic">
                {salon.street}, {salon.postalCode} {salon.city}
              </address>
            </Detail>
            <Detail label="Instagram">
              <SmartLink href={salon.instagram.url} className="hover:text-blue">
                {salon.instagram.handle}
              </SmartLink>
            </Detail>
          </dl>
          <div className="md:col-span-5 md:col-start-8">
            <Image
              src={media.morning.src}
              alt={media.morning.alt}
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <ButtonLink href={salon.directionsUrl} variant="outline" className="mt-6 w-full">
              Vägbeskrivning i Google Maps
            </ButtonLink>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
