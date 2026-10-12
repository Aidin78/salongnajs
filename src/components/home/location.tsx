import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { media } from "@/content/media";
import { salon } from "@/content/salon";

export function Location() {
  return (
    <section aria-labelledby="hitta-hit" className="shell py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <SectionHeading id="hitta-hit" eyebrow="Hitta hit" title={salon.street} />
          <dl className="mt-8 space-y-4 text-[1.0625rem]">
            <div>
              <dt className="eyebrow text-ink/60">Adress</dt>
              <dd className="mt-1">
                <address className="not-italic">
                  {salon.street}, {salon.postalCode} {salon.city}
                </address>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-ink/60">Närmaste tunnelbana</dt>
              <dd className="mt-1">{salon.subway}</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink/60">Instagram</dt>
              <dd className="mt-1">
                <SmartLink href={salon.instagram.url} className="link">
                  {salon.instagram.handle}
                </SmartLink>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={salon.directionsUrl} variant="outline">
              Vägbeskrivning
            </ButtonLink>
            <ButtonLink href="/kontakt" variant="outline">
              Kontakt
            </ButtonLink>
          </div>
        </div>
        <Image
          src={media.dahlia.src}
          alt={media.dahlia.alt}
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover md:col-span-6 md:col-start-7"
        />
      </div>
    </section>
  );
}
