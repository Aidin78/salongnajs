"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { HibiscusMark } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { booking, navigation, salon } from "@/content/salon";

const links = [{ href: "/", label: "Start" }, ...navigation, { href: "/boka-tid", label: "Boka tid" }];

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="-mr-2 inline-flex min-h-12 items-center gap-2 px-2 text-[0.9375rem]"
      >
        Meny
        <Menu aria-hidden strokeWidth={1.5} className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Meny"
        onClose={() => document.documentElement.style.removeProperty("overflow")}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink open:flex open:flex-col"
      >
        <div className="flex h-16 items-center justify-between border-b border-ink/10 px-5">
          <span className="flex items-center gap-2.5">
            <HibiscusMark className="size-6 text-blue" />
            <span className="heading text-[1.5rem]">{salon.name}</span>
          </span>
          <button
            type="button"
            onClick={close}
            className="-mr-2 inline-flex min-h-12 items-center gap-2 px-2 text-[0.9375rem]"
          >
            Stäng
            <X aria-hidden strokeWidth={1.5} className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobilmeny" className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="divide-y divide-ink/10">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="heading block py-4 text-[2.25rem] aria-[current=page]:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-ink/10 px-5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <p className="flex justify-between text-[0.9375rem]">
            <a href={salon.phone.href} className="link">
              {salon.phone.display}
            </a>
            <a href={`mailto:${salon.email}`} className="link">
              E-post
            </a>
          </p>
          <ButtonLink href={booking.salon.url} className="w-full">
            Boka tid online
          </ButtonLink>
        </div>
      </dialog>
    </div>
  );
}
