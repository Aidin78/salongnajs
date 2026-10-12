import { SectionHeading } from "@/components/ui/section-heading";
import type { Policy } from "@/content/policies";

type PoliciesProps = { id: string; policies: Policy[] };

export function Policies({ id, policies }: PoliciesProps) {
  return (
    <section aria-labelledby={id} className="shell py-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <SectionHeading id={id} eyebrow="Bra att veta" title="Innan du bokar" className="md:col-span-4" />
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-8">
          {policies.map((policy) => (
            <div key={policy.title} className="border-t border-ink/15 pt-5">
              <dt className="font-semibold">{policy.title}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink/75">{policy.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
