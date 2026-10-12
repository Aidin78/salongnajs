import { ArrowLink } from "@/components/ui/arrow-link";
import { salon } from "@/content/salon";

export function Introduction() {
  return (
    <section aria-labelledby="valkommen" className="shell py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-12">
        <h2 id="valkommen" className="heading text-[clamp(2rem,3.6vw,3rem)] md:col-span-5">
          Välkommen till salongen vid <em className="text-blue">{salon.subway}.</em>
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink/80 md:col-span-6 md:col-start-7">
          <p>
            Salong Najs ligger på {salon.street} på {salon.district}. Här arbetar fem
            frisörer som klipper, färgar, slingar och sätter upp hår – för vuxna och för barn.
          </p>
          <p>
            Vill du göra en större förändring, eller vet du att ditt hår brukar ta lite längre tid? Ring
            oss så hjälper vi dig att boka en tid som passar.
          </p>
          <ArrowLink href="/om-oss" className="text-ink">
            Mer om oss
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
