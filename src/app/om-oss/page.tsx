import type { Metadata } from "next";
import Image from "next/image";

import { BookingCta } from "@/components/booking-cta";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { salon } from "@/content/salon";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Om oss",
  description:
    "Möt frisörerna på Salong Najs – Heliko Traks, Ida Ericsäter, Nadire Berisha Hagberg, Jenny Berger och Madelaine Boijsen. Frisörsalong på Södermalm vid Mariatorget.",
  path: "/om-oss",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Frisörerna"
        lead={
          <p>
            {salon.name} är en frisörsalong på {salon.street} på {salon.district}, nära T-bana{" "}
            {salon.subway}. Boka hos salongen online, eller direkt hos Heliko via Bokadirekt.
          </p>
        }
      />

      <ul className="shell py-8 md:py-12">
        {team.map((stylist) => (
          <li
            key={stylist.slug}
            id={stylist.slug}
            className="grid scroll-mt-28 gap-6 border-b border-ink/10 py-10 last:border-b-0 md:grid-cols-12 md:items-center md:gap-8 md:py-14"
          >
            <Image
              src={stylist.portrait}
              alt={`Porträtt av ${stylist.name}`}
              placeholder="blur"
              sizes="(min-width: 768px) 42vw, 100vw"
              className="aspect-[16/10] w-full object-cover md:col-span-5"
              style={{ objectPosition: stylist.focus }}
            />
            <div className="md:col-span-6 md:col-start-7">
              <h2 className="heading text-[clamp(2rem,3.6vw,2.75rem)]">{stylist.name}</h2>
              <dl className="mt-6 grid grid-cols-[6rem_1fr] gap-y-2 text-[0.9375rem]">
                <dt className="text-ink/60">E-post</dt>
                <dd>
                  <a href={`mailto:${stylist.email}`} className="link break-all">
                    {stylist.email}
                  </a>
                </dd>
                <dt className="text-ink/60">Telefon</dt>
                <dd>
                  <a href={salon.phone.href} className="link tabular">
                    {salon.phone.display}
                  </a>
                </dd>
                <dt className="text-ink/60">Bokning</dt>
                <dd>{stylist.booking.hint}</dd>
              </dl>
              <ButtonLink href={stylist.booking.url} className="mt-7">
                Boka hos {stylist.firstName}
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>

      <BookingCta />
    </>
  );
}
