import { forwardRef, useState } from "react";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import {
  servicePackages,
  type ServicePackage,
} from "./servicePackages";

interface PackageCardProps {
  servicePackage: ServicePackage;
  featured: boolean;
  expanded: boolean;
  detailsId: string;
  onToggle: () => void;
}

const PackageCard = ({
  servicePackage,
  featured,
  expanded,
  detailsId,
  onToggle,
}: PackageCardProps) => {
  const mutedText = featured ? "text-white/78" : "text-slate-600";
  const detailLabel = featured ? "text-white" : "text-slate-950";

  return (
    <article
      className={`flex flex-col rounded-[1.25rem] border p-5 sm:rounded-[1.5rem] md:p-6 ${
        featured
          ? "border-slate-900 bg-[#0f172a] text-white md:col-span-2 md:p-8 lg:col-span-1 lg:row-span-2 lg:min-h-[39.5rem]"
          : "border-slate-200 bg-white text-slate-950 hover:border-slate-300 md:min-h-[19.25rem]"
      }`}
    >
      {featured && (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-fuchsia-300 md:mb-7">
          Core expertise
        </p>
      )}

      <h3
        className={`max-w-[16ch] font-bold leading-tight tracking-[-0.025em] ${
          featured
            ? "text-[1.85rem] md:text-4xl"
            : "min-h-[3.5rem] text-xl md:min-h-[3.75rem] md:text-[1.35rem]"
        }`}
      >
        {servicePackage.name}
      </h3>

      <p
        className={`mt-3 text-sm font-medium ${
          featured ? "text-white/72" : "text-slate-500"
        }`}
      >
        From{" "}
        <strong
          className={`ml-1 text-lg ${featured ? "text-white" : "text-slate-950"}`}
        >
          {servicePackage.startingPrice}
        </strong>
      </p>

      <p
        className={`leading-relaxed ${
          featured
            ? "mt-6 max-w-[38ch] text-base text-white/82 md:mt-8 md:text-lg"
            : "mt-5 max-w-[42ch] text-sm text-slate-600"
        }`}
      >
        {servicePackage.outcome}
      </p>

      {expanded && (
        <div
          id={detailsId}
          className={`mt-6 animate-[fadeIn_220ms_cubic-bezier(0.16,1,0.3,1)_both] border-t pt-5 motion-reduce:animate-none ${
            featured ? "border-white/15" : "border-slate-200"
          }`}
        >
          <p className={`text-sm leading-relaxed ${mutedText}`}>
            <strong className={detailLabel}>Best for:</strong>{" "}
            {servicePackage.bestFor}
          </p>

          <p className={`mt-5 text-sm font-semibold ${detailLabel}`}>
            Included
          </p>
          <ul
            className={`mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed ${mutedText}`}
          >
            {servicePackage.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className={`mt-5 text-sm leading-relaxed ${mutedText}`}>
            <strong className={detailLabel}>Boundary:</strong>{" "}
            {servicePackage.boundary}
          </p>
        </div>
      )}

      <div
        className={`mt-auto flex flex-col gap-2 pt-7 sm:flex-row sm:items-center sm:justify-between ${
          featured
            ? "md:pt-10 lg:flex-col lg:items-stretch xl:flex-row xl:items-center"
            : ""
        }`}
      >
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={onToggle}
          className={`inline-flex min-h-11 items-center justify-center gap-2 px-1 py-2 text-sm font-semibold transition-[color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-px motion-reduce:transition-none ${
            featured
              ? "text-white/80 hover:text-white focus-visible:outline-white"
              : "text-slate-600 hover:text-slate-950 focus-visible:outline-fuchsia-700"
          }`}
        >
          <span>{expanded ? "Hide details" : "View details"}</span>
          <span className="sr-only"> for {servicePackage.name}</span>
          <ChevronDown
            aria-hidden="true"
            size={16}
            className={`transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <a
          href={`mailto:hammadtariq65@gmail.com?subject=${encodeURIComponent(
            `Portfolio inquiry: ${servicePackage.name}`,
          )}`}
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-[background-color,color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-px motion-reduce:transition-none ${
            featured
              ? "bg-white text-black hover:bg-fuchsia-100 focus-visible:outline-white"
              : "bg-[#172554] text-white hover:bg-fuchsia-800 focus-visible:outline-fuchsia-700"
          }`}
        >
          Discuss
          <span className="sr-only"> {servicePackage.name}</span>
          <ArrowDownRight aria-hidden="true" size={17} />
        </a>
      </div>
    </article>
  );
};

const Services = forwardRef<HTMLElement>((_props, ref) => {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const togglePackage = (packageName: string) => {
    setExpandedPackage((current) =>
      current === packageName ? null : packageName,
    );
  };

  return (
    <section
      ref={ref}
      id="services"
      className="relative z-40 bg-slate-50 pb-32 pt-20 text-slate-950 sm:py-24 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold text-fuchsia-700">
              Ways to work together
            </p>
            <h2 className="max-w-[13ch] text-[2.1rem] font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl">
              Focused packages for real product problems.
            </h2>
          </div>
          <p className="max-w-[58ch] text-base leading-relaxed text-slate-600 sm:text-lg lg:justify-self-end">
            Start with the outcome that fits your product today. Each engagement
            is shaped after a short discovery conversation, with clear scope and
            room to grow.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-3 sm:gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_repeat(2,minmax(0,1fr))]">
          {servicePackages.map((servicePackage, index) => {
            const detailsId = `package-details-${index}`;

            return (
              <PackageCard
                key={servicePackage.name}
                servicePackage={servicePackage}
                featured={index === 0}
                expanded={expandedPackage === servicePackage.name}
                detailsId={detailsId}
                onToggle={() => togglePackage(servicePackage.name)}
              />
            );
          })}
        </div>

        <aside className="mt-8 grid gap-4 border-y border-slate-300 py-6 sm:grid-cols-[0.7fr_1.3fr_auto] sm:items-center sm:gap-6">
          <p className="text-sm font-semibold text-slate-950">
            Flexible senior support
          </p>
          <div>
            <p className="text-lg font-semibold text-slate-950">
              <span className="text-fuchsia-700">$45/hour</span>
            </p>
            <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-slate-600">
              For advisory, evolving feature work, or ongoing support. Package
              prices are starting points; third-party services and API usage
              are separate.
            </p>
          </div>
          <a
            href={`mailto:hammadtariq65@gmail.com?subject=${encodeURIComponent(
              "Portfolio inquiry: Hourly senior support",
            )}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-[border-color,color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-fuchsia-700 hover:text-fuchsia-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-700 active:translate-y-px motion-reduce:transition-none sm:self-center"
          >
            Discuss hourly support
            <ArrowDownRight aria-hidden="true" size={17} />
          </a>
        </aside>
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;
