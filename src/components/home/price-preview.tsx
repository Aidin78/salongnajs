import { PriceList } from "@/components/price-list";
import { ButtonLink } from "@/components/ui/button-link";
import { findPriceItem, priceFootnote } from "@/content/prices";

const popular = [
  "Klippning",
  "Bottenfärgning / toning",
  "Slingor och nyansering",
  "Slingor, färg och klippning",
  "Permanent",
  "Barn 0–6 år",
].map(findPriceItem);

export function PricePreview() {
  return (
    <section aria-labelledby="priser" className="on-blue bg-blue text-paper">
      <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-paper/75">Priser</p>
          <h2 id="priser" className="heading mt-3 text-[clamp(2rem,3.6vw,3rem)]">
            Ett urval ur prislistan
          </h2>
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-paper/80">{priceFootnote}</p>
          <ButtonLink href="/priser" variant="light" className="mt-8">
            Hela prislistan
          </ButtonLink>
        </div>
        <PriceList items={popular} className="text-[1.0625rem] md:col-span-7 md:col-start-6" />
      </div>
    </section>
  );
}
