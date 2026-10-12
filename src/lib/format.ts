import type { Price } from "@/content/prices";

const kronor = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 });

export function formatPrice(price: Price) {
  if (price.kind === "onRequest") return "På förfrågan";
  const amount = `${kronor.format(price.amount)} kr`;
  return `från ${price.unit ? `${amount}/${price.unit}` : amount}`;
}
