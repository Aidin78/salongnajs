import Image from "next/image";

import { ArrowLink } from "@/components/ui/arrow-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartLink } from "@/components/ui/smart-link";
import { team } from "@/content/team";

export function TeamPreview() {
  return (
    <section aria-labelledby="frisorerna" className="border-t border-ink/10">
      <div className="shell py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="frisorerna" eyebrow="Frisörerna" title="Möt oss på salongen" />
          <ArrowLink href="/om-oss">Alla frisörer</ArrowLink>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {team.map((stylist) => (
            <li key={stylist.slug}>
              <div className="overflow-hidden bg-ink/5">
                <Image
                  src={stylist.portrait}
                  alt={`Porträtt av ${stylist.name}`}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 46vw"
                  className="aspect-[4/5] w-full object-cover"
                  style={{ objectPosition: stylist.focus }}
                />
              </div>
              <p className="heading mt-4 text-[1.375rem]">{stylist.name}</p>
              <SmartLink
                href={stylist.booking.url}
                className="link mt-1 inline-block text-[0.9375rem] text-blue"
              >
                Boka hos {stylist.firstName}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
