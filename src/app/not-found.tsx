import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      title="Sidan finns inte"
      lead={<p>Länken kan vara gammal eller felstavad. Börja om från startsidan eller boka tid direkt.</p>}
    >
      <ButtonLink href="/">Till startsidan</ButtonLink>
      <ButtonLink href="/boka-tid" variant="outline">
        Boka tid
      </ButtonLink>
    </PageHeader>
  );
}
