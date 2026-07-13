import { forwardRef } from "react";
import { ArrowDownRight, Check } from "lucide-react";
import { servicePackages } from "./servicePackages";

const Services = forwardRef<HTMLElement>((_props, ref) => (
  <section
    ref={ref}
    id="services"
    className="relative overflow-hidden bg-white py-24 text-slate-950 md:py-32"
  >
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent"
    />

    <div className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <h2 className="max-w-[11ch] text-5xl font-black leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
          Choose the problem. I’ll own the build.
        </h2>
        <p className="max-w-[60ch] text-lg leading-relaxed text-slate-700 lg:justify-self-end">
          Five focused ways to move from idea, instability, or manual work
          toward a reliable product. Scope is shaped after a short discovery
          conversation—never forced into a generic tier.
        </p>
      </div>

      <div className="mt-16 border-t border-slate-200">
        {servicePackages.map((servicePackage, index) => (
          <article
            key={servicePackage.name}
            className={`group border-b border-slate-200 py-9 md:py-12 ${
              index === 0 ? "md:py-14" : ""
            }`}
          >
            <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
              <div>
                {index === 0 && (
                  <p className="mb-4 text-sm font-semibold text-fuchsia-700">
                    Core expertise
                  </p>
                )}
                <h3 className="max-w-[16ch] text-3xl font-bold tracking-tight md:text-4xl">
                  {servicePackage.name}
                </h3>
                <p className="mt-5 max-w-[46ch] leading-relaxed text-slate-700">
                  <strong className="text-slate-950">Best for:</strong>{" "}
                  {servicePackage.bestFor}
                </p>
              </div>

              <div>
                <p className="max-w-[62ch] text-lg leading-relaxed text-slate-700">
                  <strong className="text-slate-950">Outcome:</strong>{" "}
                  {servicePackage.outcome}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {servicePackage.included.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-700"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 flex-none text-fuchsia-700"
                        size={17}
                        strokeWidth={2.2}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-6 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[58ch] text-sm leading-relaxed text-slate-600">
                    <strong className="text-slate-950">Boundary:</strong>{" "}
                    {servicePackage.boundary}
                  </p>
                  <ArrowDownRight
                    aria-hidden="true"
                    className="hidden flex-none text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-fuchsia-700 md:block motion-reduce:transition-none"
                    size={28}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
));

Services.displayName = "Services";
export default Services;
