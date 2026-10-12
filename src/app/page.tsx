import type { Metadata } from "next";

import { BookingCta } from "@/components/booking-cta";
import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { Location } from "@/components/home/location";
import { PricePreview } from "@/components/home/price-preview";
import { SalonStory } from "@/components/home/salon-story";
import { Services } from "@/components/home/services";
import { TeamPreview } from "@/components/home/team-preview";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  description:
    "Frisör på Södermalm vid Mariatorget. Salong Najs erbjuder klippning, hårfärgning, slingor, permanent och uppsättning i Stockholm. Boka tid online.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <SalonStory />
      <PricePreview />
      <TeamPreview />
      <Location />
      <BookingCta />
    </>
  );
}
