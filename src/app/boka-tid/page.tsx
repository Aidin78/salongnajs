import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Policies } from "@/components/policies";
import { ButtonLink } from "@/components/ui/button-link";
import {
  bookingAdvice,
  cancellationPolicy,
  consultationAdvice,
  onlineBookingTerms,
} from "@/content/policies";
import { booking, salon } from "@/content/salon";
import { listFirstNames, team } from "@/content/team";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Boka tid",
  description:
    "Boka tid hos Salong Najs, frisör på Södermalm vid Mariatorget. Boka online via Timma, boka Heliko via Bokadirekt eller ring 08-615 16 01.",
  path: "/boka-tid",
});

const salonStylists = team.filter((stylist) => stylist.booking.url === booking.salon.url);
const heliko = team.find((stylist) => stylist.booking.url === booking.heliko.url);

export default function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Boka tid"
        title="Boka din tid"
        lead={
          <p>
            Välj behandling, frisör och tid direkt i onlinebokningen. Din tid är bokad när du fått en
            bekräftelse därifrån.
          </p>
        }
      />

      <section aria-label="Bokningsalternativ" className="shell py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <article className="on-blue flex flex-col bg-blue p-8 text-paper md:p-10">
            <p className="eyebrow text-paper/75">Online via {booking.salon.provider}</p>
            <h2 className="heading mt-4 text-[2.25rem]">Salongen</h2>
            <p className="mt-4 flex-1 leading-relaxed text-paper/85">
              {listFirstNames(salonStylists)}. I bokningen heter Madelaine Madde.
            </p>
            <ButtonLink href={booking.salon.url} variant="light" className="mt-8 self-start">
              Boka via {booking.salon.provider}
            </ButtonLink>
          </article>

          {heliko && (
            <article className="flex flex-col border border-ink/15 bg-white p-8 md:p-10">
              <p className="eyebrow text-blue">Online via {booking.heliko.provider}</p>
              <h2 className="heading mt-4 text-[2.25rem]">{heliko.name}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-ink/75">{heliko.booking.hint}</p>
              <ButtonLink href={heliko.booking.url} className="mt-8 self-start">
                Boka via {booking.heliko.provider}
              </ButtonLink>
            </article>
          )}

          <article className="flex flex-col border border-ink/15 bg-white p-8 md:p-10">
            <p className="eyebrow text-blue">Telefon</p>
            <h2 className="heading mt-4 text-[2.25rem]">Ring oss</h2>
            <p className="mt-4 flex-1 leading-relaxed text-ink/75">
              Bäst om du vill göra en större förändring, behöver längre tid eller vill boka uppsättning.
            </p>
            <ButtonLink href={salon.phone.href} variant="outline" className="tabular mt-8 self-start">
              {salon.phone.display}
            </ButtonLink>
          </article>
        </div>
      </section>

      <div className="bg-mist">
        <Policies
          id="innan-du-bokar"
          policies={[cancellationPolicy, onlineBookingTerms, ...bookingAdvice, consultationAdvice]}
        />
      </div>
    </>
  );
}
