import type { ReactNode } from "react";

import { SmartLink } from "./smart-link";

const variants = {
  primary: "bg-blue text-paper hover:bg-blue-dark",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-blue hover:bg-white",
  "outline-light": "border border-paper/50 text-paper hover:border-paper hover:bg-paper hover:text-blue",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 text-[0.9375rem] font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </SmartLink>
  );
}
