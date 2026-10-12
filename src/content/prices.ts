export type Price =
  | { kind: "from"; amount: number; unit?: "tim" }
  | { kind: "onRequest" };

export type PriceItem = {
  name: string;
  price: Price;
  description?: string;
  consultation?: boolean;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: "klippning",
    title: "Klippning",
    items: [
      {
        name: "Klippning",
        price: { kind: "from", amount: 950 },
        description: "Inklusive tvätt och styling.",
      },
    ],
  },
  {
    id: "farg-och-toning",
    title: "Färg & toning",
    items: [
      {
        name: "Bottenfärgning / toning",
        price: { kind: "from", amount: 1800 },
        description:
          "Bottenfärg eller toning, max 3 cm. Gäller ej färgningar som kräver blekning.",
      },
    ],
  },
  {
    id: "slingor-och-nyansering",
    title: "Slingor & nyansering",
    items: [
      {
        name: "Slingor och nyansering",
        price: { kind: "from", amount: 2100 },
        description: "Slingor och färg, utan klippning.",
      },
      {
        name: "Slingor, färg och klippning",
        price: { kind: "from", amount: 2750 },
        description: "För dig med hår som är kortare än nyckelbenet.",
      },
      {
        name: "Slingor, färg och klippning – långt hår",
        price: { kind: "from", amount: 3100 },
        description:
          "För dig med tjockare hår eller hår som är längre än nyckelbenet.",
      },
    ],
  },
  {
    id: "permanent",
    title: "Permanent",
    items: [{ name: "Permanent", price: { kind: "from", amount: 2800 } }],
  },
  {
    id: "styling-och-uppsattning",
    title: "Styling & uppsättning",
    items: [
      {
        name: "Uppsättning",
        price: { kind: "from", amount: 1000, unit: "tim" },
        consultation: true,
      },
      {
        name: "Bruduppsättning",
        price: { kind: "onRequest" },
        consultation: true,
      },
    ],
  },
  {
    id: "barnklippning",
    title: "Barnklippning",
    items: [
      { name: "Barn 0–6 år", price: { kind: "from", amount: 600 } },
      { name: "Barn 7–12 år", price: { kind: "from", amount: 750 } },
    ],
  },
  {
    id: "harvard",
    title: "Hårvård",
    items: [
      {
        name: "Kur i samband med behandling",
        price: { kind: "from", amount: 250 },
      },
    ],
  },
];

export const consultationNote = "Vänligen kontakta oss för personlig konsultation samt exakt pris.";

export const priceFootnote = "Alla priser gäller tills vidare, inklusive 25 % moms.";

export function findPriceItem(name: string): PriceItem {
  const item = priceCategories
    .flatMap((category) => category.items)
    .find((entry) => entry.name === name);
  if (!item) throw new Error(`Okänd behandling i prislistan: ${name}`);
  return item;
}
