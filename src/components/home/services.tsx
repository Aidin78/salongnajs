import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/content/media";
import { serviceHighlights } from "@/content/services";
import { formatPrice } from "@/lib/format";

export function Services() {
  return (
    <section aria-labelledby="tjanster" className="bg-mist">
      <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <SectionHeading id="tjanster" eyebrow="Tjänster" title="Det här gör vi" />
            <Image
              src={media.clematis.src}
              alt={media.clematis.alt}
              placeholder="blur"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="mt-10 hidden aspect-[4/5] w-full max-w-md object-cover md:block"
            />
          </div>
        </div>

        <ul className="md:col-span-7">
          {serviceHighlights.map((service) => (
            <li key={service.title} className="border-t border-ink/15 last:border-b">
              <Link
                href={`/priser#${service.anchor}`}
                className="group grid grid-cols-[4.5rem_1fr] gap-5 py-7 md:grid-cols-[6rem_1fr_auto] md:items-center md:gap-8"
              >
                <Image
                  src={service.image.src}
                  alt=""
                  sizes="96px"
                  className="aspect-square w-full object-cover"
                />
                <span>
                  <span className="heading block text-[1.75rem] group-hover:text-blue">
                    {service.title}
                  </span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-ink/70">
                    {service.text}
                  </span>
                </span>
                <span className="tabular col-start-2 text-[0.9375rem] font-medium text-blue md:col-start-auto md:text-right">
                  {formatPrice(service.price)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
