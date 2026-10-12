import { media, type Media } from "./media";
import { findPriceItem, type Price } from "./prices";

export type ServiceHighlight = {
  title: string;
  text: string;
  price: Price;
  anchor: string;
  image: Media;
};

export const serviceHighlights: ServiceHighlight[] = [
  {
    title: "Klippning",
    text: "Klippning inklusive tvätt och styling – för vuxna och för barn.",
    price: findPriceItem("Klippning").price,
    anchor: "klippning",
    image: media.morning,
  },
  {
    title: "Färg & slingor",
    text: "Bottenfärg, toning, slingor och nyansering – med eller utan klippning.",
    price: findPriceItem("Bottenfärgning / toning").price,
    anchor: "farg-och-toning",
    image: media.clematis,
  },
  {
    title: "Styling & uppsättning",
    text: "Uppsättning till fest och högtid. Vi börjar med en personlig konsultation och ett exakt pris.",
    price: findPriceItem("Uppsättning").price,
    anchor: "styling-och-uppsattning",
    image: media.dusk,
  },
  {
    title: "Hårvård",
    text: "Kur i samband med din behandling i salongen.",
    price: findPriceItem("Kur i samband med behandling").price,
    anchor: "harvard",
    image: media.dahlia,
  },
  {
    title: "Brudstyling",
    text: "Bruduppsättning på förfrågan. Hör av dig så går vi igenom dina önskemål tillsammans.",
    price: findPriceItem("Bruduppsättning").price,
    anchor: "styling-och-uppsattning",
    image: media.rose,
  },
];
