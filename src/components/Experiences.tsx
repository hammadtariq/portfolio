import { forwardRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface Position {
  startDate: string;
  endDate?: string;
  title: string;
}

interface Experience {
  startDate: string;
  endDate?: string;
  title: string;
  companyName: string;
  companyLocation: string;
  workSummary?: string;
  responsibilities?: string[];
  positions?: Position[];
}

interface ExperiencesProps {
  experiences: Experience[];
}

const Experiences = forwardRef<HTMLElement, ExperiencesProps>(
  ({ experiences }, ref) => {
    const { ref: revealRef, isVisible } = useRevealOnScroll<HTMLDivElement>();

    if (!experiences.length) {
      return null;
    }

    return (
      <section
        ref={ref}
        id="experience"
        className="relative overflow-hidden bg-slate-100 py-24 md:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(191,219,254,0.72),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.6),rgba(226,232,240,0.55))]"
        />
        <div className="container relative mx-auto px-4">
          <p className="mb-4 text-sm font-medium text-blue-700">Experience</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Career built in the details
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-slate-600">
            Ten years across startups and enterprise teams, growing from
            engineer to technical leadership.
          </p>

          <div
            ref={revealRef}
            className={`relative mt-16 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-px bg-blue-200" />
            <div className="flex flex-col gap-14">
              {experiences.map((experience, index) => (
                <ExperienceEntry key={index} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

const ExperienceEntry: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <div className="relative flex gap-5 md:gap-7">
    <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-blue-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(219,234,254,0.94))] text-blue-700 shadow-[0_8px_20px_rgba(37,99,235,0.12)]">
      <Briefcase size={18} strokeWidth={2} />
    </div>

    <div className="flex-1 pt-1">
      <span className="inline-flex rounded-full border border-blue-100 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700">
        {experience.startDate} - {experience.endDate || "Present"}
      </span>

      <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
        {experience.title}
      </h3>
      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
        <span className="font-medium text-slate-700">
          {experience.companyName}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="flex-none" />
          {experience.companyLocation}
        </span>
      </div>

      {experience.workSummary && (
        <p className="mt-4 max-w-[65ch] leading-relaxed text-slate-600">
          {experience.workSummary}
        </p>
      )}

      {experience.responsibilities && experience.responsibilities.length > 0 && (
          <ul className="mt-5 flex max-w-[65ch] flex-col gap-2.5">
            {experience.responsibilities.map((item, idx) => (
            <li key={idx} className="flex gap-3 border-l border-blue-200 pl-3 text-slate-600">
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {experience.positions && experience.positions.length > 0 && (
        <div className="mt-6 max-w-[65ch] rounded-[1.5rem] border border-white/80 bg-white/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <h4 className="text-sm font-semibold text-slate-950">
            Growth at {experience.companyName}
          </h4>
          <ul className="mt-3 flex flex-col divide-y divide-slate-200/80">
            {experience.positions.map((position, idx) => (
              <li
                key={idx}
                className="flex items-baseline justify-between gap-4 py-2 text-sm first:pt-0 last:pb-0"
              >
                <span className="font-medium text-slate-700">
                  {position.title}
                </span>
                <span className="flex-none tabular-nums text-slate-400">
                  {position.startDate} - {position.endDate || "Present"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

Experiences.displayName = "Experiences";
export default Experiences;
