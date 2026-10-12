import type { StaticImageData } from "next/image";

import heliko from "@/assets/team/heliko.jpg";
import ida from "@/assets/team/ida.jpg";
import jenny from "@/assets/team/jenny.jpg";
import madelaine from "@/assets/team/madelaine.jpg";
import nadire from "@/assets/team/nadire.jpg";

import { booking } from "./salon";

export type Stylist = {
  slug: string;
  name: string;
  firstName: string;
  email: string;
  portrait: StaticImageData;
  focus: string;
  booking: { url: string; hint: string };
};

const salonBooking = (nickname: string) => ({
  url: booking.salon.url,
  hint: `Välj ${nickname} i salongens onlinebokning.`,
});

export const team: Stylist[] = [
  {
    slug: "heliko",
    name: "Heliko Traks",
    firstName: "Heliko",
    email: "traksheliko@gmail.com",
    portrait: heliko,
    focus: "80% 40%",
    booking: {
      url: booking.heliko.url,
      hint: "Tider hos Heliko bokas direkt via Bokadirekt.",
    },
  },
  {
    slug: "ida",
    name: "Ida Ericsäter",
    firstName: "Ida",
    email: "ida@salongnajs.com",
    portrait: ida,
    focus: "60% 35%",
    booking: salonBooking("Ida"),
  },
  {
    slug: "nadire",
    name: "Nadire Berisha Hagberg",
    firstName: "Nadire",
    email: "nadire@salongnajs.com",
    portrait: nadire,
    focus: "44% 35%",
    booking: salonBooking("Nadire"),
  },
  {
    slug: "jenny",
    name: "Jenny Berger",
    firstName: "Jenny",
    email: "jenny@salongnajs.com",
    portrait: jenny,
    focus: "60% 35%",
    booking: salonBooking("Jenny"),
  },
  {
    slug: "madelaine",
    name: "Madelaine Boijsen",
    firstName: "Madelaine",
    email: "madelaine@salongnajs.com",
    portrait: madelaine,
    focus: "58% 35%",
    booking: salonBooking("Madde"),
  },
];

export function listFirstNames(stylists: Stylist[]) {
  return new Intl.ListFormat("sv", { type: "conjunction" }).format(
    stylists.map((stylist) => stylist.firstName),
  );
}
