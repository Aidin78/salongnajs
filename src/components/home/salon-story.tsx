import Image from "next/image";

import { media } from "@/content/media";
import { salon } from "@/content/salon";

export function SalonStory() {
  return (
    <section aria-labelledby="vaggen" className="shell py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <Image
          src={media.rose.src}
          alt={media.rose.alt}
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/5] w-full object-cover md:col-span-6"
        />
        <div className="md:col-span-5 md:col-start-8">
          <p className="eyebrow text-blue">Salongen</p>
          <h2 id="vaggen" className="heading mt-3 text-[clamp(2rem,3.6vw,3rem)]">
            Den blå väggen
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink/80">
            I salongen möts du av en blomstertapet i djupt blått – rosor, klematis och dahlior mot en
            varm, ljus botten. Det är därifrån vår blå färg kommer, och här klipper, färgar och stylar
            vi – nära T-bana {salon.subway}.
          </p>
        </div>
      </div>
    </section>
  );
}
