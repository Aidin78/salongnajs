import { ButtonLink } from "@/components/ui/button-link";
import { booking, salon } from "@/content/salon";

export function BookingCta() {
  return (
    <section aria-labelledby="boka-cta" className="border-t border-ink/10">
      <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div>
          <h2 id="boka-cta" className="heading text-[clamp(2.25rem,4.4vw,3.5rem)]">
            Redo för en <em className="text-blue">ny look?</em>
          </h2>
          <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-ink/75">
            Boka online när det passar dig, eller ring oss på{" "}
            <a href={salon.phone.href} className="link tabular text-ink">
              {salon.phone.display}
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={booking.salon.url}>Boka din tid</ButtonLink>
          <ButtonLink href={booking.heliko.url} variant="outline">
            Boka hos Heliko
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
