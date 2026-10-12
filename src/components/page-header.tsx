import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <header className="bg-mist">
      <div className="shell grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-20">
        <div className="md:col-span-7">
          <p className="eyebrow text-blue">{eyebrow}</p>
          <h1 className="heading mt-4 text-[clamp(2.75rem,6vw,4.75rem)]">{title}</h1>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <div className="text-[1.0625rem] leading-relaxed text-ink/80">{lead}</div>
          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </header>
  );
}
