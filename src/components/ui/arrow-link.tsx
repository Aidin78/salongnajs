import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { isExternal, SmartLink } from "./smart-link";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  const Icon = isExternal(href) ? ArrowUpRight : ArrowRight;

  return (
    <SmartLink
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2 font-medium ${className}`}
    >
      <span className="link">{children}</span>
      <Icon
        aria-hidden
        strokeWidth={1.75}
        className="size-[1em] shrink-0 transition-transform duration-500 ease-soft group-hover:translate-x-1"
      />
    </SmartLink>
  );
}
