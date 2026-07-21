import Link from "next/link";
import { SITE } from "@/lib/site";

type Step = { title: string; body: string };

type Props = {
  steps: Step[];
};

/**
 * Numbered process steps used on service pages.
 */
export default function ProcessSteps({ steps }: Props) {
  return (
    <ol className="relative space-y-8">
      <div
        className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-line"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-5">
          <div className="relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink text-paper font-heading text-sm font-bold ring-4 ring-paper">
            {i + 1}
          </div>
          <div className="pt-1">
            <h3 className="font-heading text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted leading-relaxed max-w-xl">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ServiceCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <Link href="/contact" className="btn btn-primary">
        Start a conversation
      </Link>
      <a
        href={SITE.phoneHref}
        className="btn btn-outline"
        data-cta="phone"
      >
        Book a call: {SITE.phone}
      </a>
    </div>
  );
}
