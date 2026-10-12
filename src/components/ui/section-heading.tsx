import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="eyebrow text-blue">{eyebrow}</p>
      <h2 id={id} className="heading mt-3 text-[clamp(2rem,3.6vw,3rem)]">
        {title}
      </h2>
    </div>
  );
}
