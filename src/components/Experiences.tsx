import React, { forwardRef } from "react";

interface Position {
  startDate: string;
  endDate?: string;
  title: string;
  note?: string;
}

interface Project {
  projectName: string;
  description: string;
  link: string;
  responsibilities: string[];
  technologies: string[];
}

interface Experience {
  startDate: string;
  endDate?: string;
  title: string;
  companyName: string;
  companyLocation: string;
  workSummary?: string;
  responsibilities?: string[];
  toolsAndTechnologies?: ToolsAndTech[];
  positions?: Position[];
  projects?: Project[];
}

interface ToolsAndTech {
  category: string;
  technologies: string[];
}

interface ExperiencesProps {
  experiences: Experience[];
}

interface ExperienceEntryProps {
  experience: Experience;
  isLast: boolean;
}

interface ExperienceDescriptionProps {
  experience: Experience;
  isLast: boolean;
}

const Experiences = forwardRef<HTMLElement, ExperiencesProps>(
  (props: ExperiencesProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { experiences } = props;
    if (!experiences.length) {
      return null; // No experiences to display
    }

    return (
      <section ref={ref} id="experience" className="py-20 bg-white" data-toggle>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experiences
        </h2>
        <div className="container mx-auto px-4">
          {/* Section Title */}
          {/* <div className="flex justify-between">
          </div> */}

          <div className="content custom-height">
            <div className="w-100 h-px bg-Gray my-8"></div>
            {experiences.map((experience, experienceIndex) => (
              <ExperienceEntry
                key={experienceIndex}
                experience={experience}
                isLast={experienceIndex === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  experience,
  isLast,
}) => (
  <div className="flex flex-col lg:flex-row lg:space-x-9">
    {/* Left Side (Dates) */}
    <div className="lg:w-1/6 hidden lg:block">
      <div className="inline-block">
        <h2 className="font-bold text-base">
          {experience.startDate} - {experience.endDate || "Present"}
        </h2>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-5/6">
      {/* Dates on top for mobile */}
      <div className="block lg:hidden mb-2">
        <h2 className="font-bold text-base">
          {experience.startDate} - {experience.endDate || "Present"}
        </h2>
      </div>

      {/* Title and Company Info */}
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900 flex items-center experience-title">
          {experience.title} - {experience.companyName} |{" "}
          {experience.companyLocation}
        </h2>
      </div>

      {/* Tools and Technologies */}
      <ExperienceDescription experience={experience} isLast={isLast} />
    </div>
  </div>
);

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  experience,
  isLast,
}) => (
  <div className={`experience-desc md:mt-5 md:pb-5 ${!isLast ? "mb-6" : ""}`}>
    <p>{experience.workSummary}</p>
    {experience?.responsibilities &&
      experience?.responsibilities?.length > 0 && (
        <>
          <h3 className="text-base font-bold mt-6">Responsibilities:</h3>
          <ul className="mt-2 list-disc list-indent pl-2 ml-4">
            {experience?.responsibilities?.map((item, idx) => (
              <li key={idx} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
  </div>
);

export default Experiences;
