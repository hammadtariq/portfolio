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
    if (!experiences.length) {
      return null;
    }

    const { ref: revealRef, isVisible } = useRevealOnScroll<HTMLDivElement>();

    return (
      <section ref={ref} id="experience" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
            Experience
          </h2>
          <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-gray-600">
            Ten years across startups and enterprise teams, growing from
            engineer to technical leadership.
          </p>

          <div
            ref={revealRef}
            className={`relative mt-16 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 bottom-5 w-px bg-gray-200"
            />
            <div className="flex flex-col gap-12">
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
    <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-50 text-blue-600">
      <Briefcase size={18} strokeWidth={2} />
    </div>

    <div className="flex-1 pt-1">
      <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
        {experience.startDate} - {experience.endDate || "Present"}
      </span>

      <h3 className="mt-3 text-lg font-bold text-gray-950">
        {experience.title}
      </h3>
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
        <span className="font-medium text-gray-700">
          {experience.companyName}
        </span>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="flex-none" />
          {experience.companyLocation}
        </span>
      </div>

      {experience.workSummary && (
        <p className="mt-4 max-w-[65ch] leading-relaxed text-gray-600">
          {experience.workSummary}
        </p>
      )}

      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <ul className="mt-4 flex max-w-[65ch] flex-col gap-2">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-gray-600">
              <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-gray-400" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {experience.positions && experience.positions.length > 0 && (
        <div className="mt-5 max-w-[65ch] rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <h4 className="text-sm font-semibold text-gray-950">
            Growth at {experience.companyName}
          </h4>
          <ul className="mt-3 flex flex-col divide-y divide-gray-200">
            {experience.positions.map((position, idx) => (
              <li
                key={idx}
                className="flex items-baseline justify-between gap-4 py-2 text-sm first:pt-0 last:pb-0"
              >
                <span className="font-medium text-gray-700">
                  {position.title}
                </span>
                <span className="flex-none tabular-nums text-gray-400">
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
