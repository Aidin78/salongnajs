import type { PriceItem } from "@/content/prices";
import { formatPrice } from "@/lib/format";

type PriceListProps = {
  items: PriceItem[];
  withDescriptions?: boolean;
  className?: string;
};

export function PriceList({ items, withDescriptions = false, className = "" }: PriceListProps) {
  return (
    <dl className={className}>
      {items.map((item) => (
        <div key={item.name} className="flex flex-wrap items-baseline gap-x-2 py-2.5">
          <dt className="flex flex-1 items-baseline gap-2 font-medium after:min-w-6 after:flex-1 after:border-b after:border-dotted after:border-current after:opacity-50 after:content-['']">
            <span>
              {item.name}
              {item.consultation && (
                <>
                  <span aria-hidden>*</span>
                  <span className="sr-only"> (personlig konsultation)</span>
                </>
              )}
            </span>
          </dt>
          <dd className="tabular whitespace-nowrap">{formatPrice(item.price)}</dd>
          {withDescriptions && item.description && (
            <dd className="mt-1 basis-full text-[0.9375rem] leading-snug opacity-70">
              <span className="block max-w-md">{item.description}</span>
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
