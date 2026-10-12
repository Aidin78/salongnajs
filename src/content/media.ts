import type { StaticImageData } from "next/image";

import clematis from "@/assets/salong/clematis.jpg";
import dahlia from "@/assets/salong/dahlia.jpg";
import morning from "@/assets/salong/morgonros.jpg";
import rose from "@/assets/salong/rose.jpg";
import dusk from "@/assets/salong/skymning.jpg";
import wall from "@/assets/salong/vaggen.jpg";

export type Media = { src: StaticImageData; alt: string };

const wallDetail = "Detalj av den blå blomstertapeten i Salong Najs";

export const media = {
  wall: {
    src: wall,
    alt: "Salong Najs blå blomstertapet med rosor, klematis och dahlior mot en varm, ljus botten",
  },
  rose: { src: rose, alt: `${wallDetail}: två rosor i djupblått och ljusblått` },
  clematis: { src: clematis, alt: `${wallDetail}: en ljus klematis bland blad` },
  dusk: { src: dusk, alt: `${wallDetail}: rosenblad och en mörk ros` },
  morning: { src: morning, alt: `${wallDetail}: en ljus ros och små blommor` },
  dahlia: { src: dahlia, alt: `${wallDetail}: en dahlia bland blad` },
} satisfies Record<string, Media>;
