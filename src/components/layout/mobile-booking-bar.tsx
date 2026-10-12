import { Phone } from "lucide-react";
import Link from "next/link";

import { salon } from "@/content/salon";

export function MobileBookingBar() {
  return (
    <nav
      aria-label="Snabbval"
      className="on-blue fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_auto] bg-blue pb-[env(safe-area-inset-bottom)] text-paper md:hidden"
    >
      <Link href="/boka-tid" className="flex min-h-14 items-center justify-center font-medium">
        Boka tid
      </Link>
      <a
        href={salon.phone.href}
        className="flex min-h-14 items-center gap-2 border-l border-paper/30 px-5 text-sm"
      >
        <Phone aria-hidden strokeWidth={1.5} className="size-4" />
        Ring
        <span className="sr-only"> {salon.phone.display}</span>
      </a>
    </nav>
  );
}
