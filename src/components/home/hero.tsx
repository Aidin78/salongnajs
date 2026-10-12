import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { media } from "@/content/media";
import { salon } from "@/content/salon";

export function Hero() {
  return (
    <section aria-labelledby="hero-rubrik" className="relative">
      <Image
        src={media.wall.src}
        alt={media.wall.alt}
        placeholder="blur"
        preload
        sizes="100vw"
        className="h-[46svh] w-full object-cover object-[30%_50%] md:h-[calc(100svh-5rem)] md:max-h-[52rem] md:min-h-[36rem]"
      />
      <div className="md:absolute md:inset-x-0 md:bottom-0">
        <div className="shell px-0 md:px-10">
          <div className="on-blue bg-blue px-5 py-10 text-paper md:max-w-[36rem] md:px-12 md:py-14">
            <p className="eyebrow text-paper/75">
              Frisörsalong · {salon.district}, {salon.city}
            </p>
            <h1 id="hero-rubrik" className="heading mt-4 text-[clamp(2.75rem,5.4vw,4.5rem)]">
              Klippt, färgat <em>&amp; najs.</em>
            </h1>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-paper/85">
              Salong Najs är en frisörsalong nära T-bana {salon.subway}. Klippning, färg, slingor och
              uppsättning – för vuxna och barn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/boka-tid" variant="light">
                Boka tid
              </ButtonLink>
              <ButtonLink href="/priser" variant="outline-light">
                Se priser
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
