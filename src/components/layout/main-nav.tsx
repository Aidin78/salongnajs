"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/content/salon";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Huvudmeny" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="py-2 text-[0.9375rem] decoration-1 underline-offset-[0.4em] hover:underline aria-[current=page]:text-blue aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
