import { consultationNote } from "./prices";
import { salon } from "./salon";

export type Policy = { title: string; body: string };

export const cancellationPolicy: Policy = {
  title: "Avbokning",
  body: `Avbokning måste ske senast 24 timmar innan avtalad tid via vår onlinebokning eller på telefon ${salon.phone.display}. Vi debiterar vid uteblivet besök.`,
};

export const onlineBookingTerms: Policy = {
  title: "Villkor i onlinebokningen",
  body: "Vi förbehåller oss rätten att debitera 50 % av bokningspriset vid utebliven ankomst eller avbokning senare än 24 timmar innan bokningens starttid.",
};

export const bookingAdvice: Policy[] = [
  {
    title: "Tjockt eller extra långt hår",
    body: "Har du tjockt hår eller extra långt hår ber vi att du bokar 3 timmar, vilket är klipp + sling + färg i internetbokningen.",
  },
  {
    title: "Större förändring",
    body: `Om du vet att ditt hår brukar ta längre tid eller vill göra en större förändring uppskattar vi att du ringer oss på ${salon.phone.display}, så hjälper vi dig att boka en tid som passar.`,
  },
];

export const consultationAdvice: Policy = {
  title: "Uppsättning och brud",
  body: consultationNote,
};
