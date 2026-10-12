import Link from "next/link";

import { HibiscusMark } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { salon } from "@/content/salon";

import { MainNav } from "./main-nav";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-blue focus:px-4 focus:py-3 focus:text-paper"
      >
        Hoppa till innehållet
      </a>
      <div className="shell flex h-16 items-center justify-between gap-8 md:h-20">
        <Link href="/" className="flex items-center gap-2.5 py-2">
          <HibiscusMark className="size-6 text-blue" />
          <span className="heading text-[1.5rem]">{salon.name}</span>
        </Link>
        <div className="flex items-center gap-8">
          <MainNav />
          <a
            href={salon.phone.href}
            className="tabular hidden text-[0.9375rem] hover:text-blue lg:block"
          >
            {salon.phone.display}
          </a>
          <div className="hidden md:block">
            <ButtonLink href="/boka-tid">Boka tid</ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
