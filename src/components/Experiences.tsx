import { forwardRef } from "react";
import { MapPin } from "lucide-react";

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
    if (!experiences.length) {
      return null;
    }

    return (
      <section
        ref={ref}
        id="experience"
        aria-labelledby="experience-heading"
        className="relative overflow-hidden bg-[#0c0c0c] py-24 text-white md:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(182,0,168,0.13),transparent_26%),radial-gradient(circle_at_10%_80%,rgba(190,76,0,0.09),transparent_24%)]"
        />
        <div className="container relative mx-auto px-4">
          <p className="mb-4 text-sm font-medium text-fuchsia-200">Experience</p>
          <h2
            id="experience-heading"
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Career built in the details
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-white/65">
            Ten years across startups and enterprise teams, growing from
            engineer to technical leadership.
          </p>

          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[0.3125rem] top-2 w-px bg-white/15"
            />
            <div className="flex flex-col gap-16 md:gap-20">
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
  <div className="relative flex gap-5 md:gap-8">
    <div
      aria-hidden="true"
      className="relative z-10 mt-1.5 h-[0.6875rem] w-[0.6875rem] flex-none rounded-full border-2 border-[#0c0c0c] bg-fuchsia-400 ring-1 ring-fuchsia-300/45"
    />

    <div className="min-w-0 flex-1">
      <span className="block text-xs font-semibold tabular-nums tracking-[0.08em] text-fuchsia-200">
        {experience.startDate} - {experience.endDate || "Present"}
      </span>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
        {experience.title}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/50">
        <span className="font-semibold text-white/80">
          {experience.companyName}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="flex-none" />
          {experience.companyLocation}
        </span>
      </div>

      {experience.workSummary && (
        <p className="mt-5 max-w-[65ch] leading-relaxed text-white/65">
          {experience.workSummary}
        </p>
      )}

      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <ul className="mt-6 flex max-w-[65ch] flex-col gap-3">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-white/65">
              <span
                aria-hidden="true"
                className="mt-[0.68rem] h-1 w-1 flex-none rounded-full bg-fuchsia-300/70"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {experience.positions && experience.positions.length > 0 && (
        <div className="mt-8 max-w-[65ch] border-y border-white/15 py-5">
          <h4 className="text-sm font-semibold text-white">
            Growth at {experience.companyName}
          </h4>
          <ul className="mt-3 flex flex-col divide-y divide-white/10">
            {experience.positions.map((position, idx) => (
              <li
                key={idx}
                className="flex flex-col gap-1 py-3 text-sm first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="font-medium text-white/75">
                  {position.title}
                </span>
                <span className="flex-none tabular-nums text-white/40">
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
