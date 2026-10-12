import Link from "next/link";
import type { ReactNode } from "react";

import { HibiscusMark } from "@/components/logo";
import { SmartLink } from "@/components/ui/smart-link";
import { booking, navigation, salon } from "@/content/salon";

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow mb-4 text-paper/70">{title}</h2>
      <div className="space-y-2 text-[0.9375rem] leading-snug">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-blue bg-blue text-paper">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="flex items-center gap-2.5">
            <HibiscusMark className="size-7" />
            <span className="heading text-[1.75rem]">{salon.name}</span>
          </p>
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-paper/80">
            Frisörsalong på {salon.district}, nära T-bana {salon.subway}.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 md:col-span-8">
          <Column title="Besök">
            <address className="not-italic">
              {salon.street}
              <br />
              {salon.postalCode} {salon.city}
            </address>
            <p>
              <SmartLink href={salon.directionsUrl} className="link">
                Vägbeskrivning
              </SmartLink>
            </p>
          </Column>
          <Column title="Kontakt">
            <p>
              <a href={salon.phone.href} className="link tabular">
                {salon.phone.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${salon.email}`} className="link">
                {salon.email}
              </a>
            </p>
            <p>
              <SmartLink href={salon.instagram.url} className="link">
                Instagram
              </SmartLink>
            </p>
          </Column>
          <Column title="Sidor">
            <nav aria-label="Sidfot">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <SmartLink href={booking.salon.url} className="link">
                    Boka online
                  </SmartLink>
                </li>
              </ul>
            </nav>
          </Column>
        </div>
      </div>
      <div className="border-t border-paper/20">
        <p className="shell py-5 text-sm text-paper/70">© {salon.name}</p>
      </div>
    </footer>
  );
}
