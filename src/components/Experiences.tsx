import React from "react";

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
  companyDomain: string;
  workSummary: string;
  responsibilities: string[];
  toolsAndTechnologies: string[];
  positions?: Position[];
  projects?: Project[];
}

interface ExperiencesProps {
  experiences: Experience[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  if (!experiences.length) {
    return null; // No experiences to display
  }

  return (
    <section
      id="experience"
      className="container bg-white mx-auto mt-2 py-6 px-4 rounded-lg lg:px-10"
      data-toggle
    >
      {/* Section Title */}
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Experiences</h2>
      </div>

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
    </section>
  );
};

interface ExperienceEntryProps {
  experience: Experience;
  isLast: boolean;
}

// const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
//   experience,
//   isLast,
// }) => (
//   <div className="flex space-x-9">
//     {/* Left Side (Dates) */}
//     <div className="hidden lg:block lg:w-1/6">
//       {experience.positions?.map((position, index) => (
//         <div key={index}>
//           <h2
//             className={`text-base font-bold text-EX${Math.min(
//               index + 1,
//               3
//             )} mb-6`}
//           >
//             {position.startDate} - {position.endDate || "Present"}
//           </h2>
//           {position.note && <p className="text-sm text-EX2">{position.note}</p>}
//         </div>
//       ))}
//     </div>

//     {/* Right Side */}
//     <div className="w-5/6">
//       <div>
//         {/* Titles */}
//         <div>
//           {experience.positions?.map((position, index) => (
//             <div key={index} className="mb-2 lg:mb-0 experience-title-small">
//               <h2
//                 className={`text-base font-bold text-EX${Math.min(
//                   index + 1,
//                   3
//                 )} mb-1 block lg:hidden lg:mb-6`}
//               >
//                 {position.startDate} - {position.endDate || "Present"}
//               </h2>
//               <h2
//                 className={`text-base font-bold text-EX${Math.min(
//                   index + 1,
//                   3
//                 )} mb-1 experience-title lg:mb-6`}
//               >
//                 <span className="block lg:inline-block">{position.title}</span>
//                 <span className="hidden lg:inline-block"> - </span>
//                 <span className="block lg:inline-block">
//                   {experience.companyName} | ({experience.companyDomain})
//                 </span>
//               </h2>
//             </div>
//           ))}
//         </div>

//         {/* Description */}
//         <ExperienceDescription experience={experience} isLast={isLast} />
//       </div>
//     </div>
//   </div>
// );

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  experience,
  isLast,
}) => (
  <div className="flex space-x-9">
    {/* Left Side (Dates) */}
    <div className="lg:w-1/6">
      <div className="p-2 inline-block">
        <h2 className="font-bold text-base">
          {experience.startDate} - {experience.endDate || "Present"}
        </h2>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-5/6">
      {/* Title and Company Info */}
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900 flex items-center">
          <span className="mr-2 text-orange-500">●</span>
          {experience.title} - {experience.companyName} |{" "}
          {experience.companyDomain}
        </h2>
      </div>

      {/* Work Summary */}
      <p className="text-gray-700">{experience.workSummary}</p>

      {/* Responsibilities */}
      {experience?.responsibilities?.length > 0 && (
        <>
          <h3 className="text-base font-bold mt-6">Responsibilities:</h3>
          <ul className="mt-2 list-disc list-indent pl-5 text-gray-700">
            {experience?.responsibilities?.map((item, idx) => (
              <li key={idx} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Tools and Technologies */}
      {experience?.toolsAndTechnologies?.length > 0 && (
        <>
          <h3 className="text-base font-bold mt-6">Tools and Technologies</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {experience?.toolsAndTechnologies?.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-100 border border-gray-300 rounded-full text-xs px-3 py-1 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

interface ExperienceDescriptionProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  experience,
  isLast,
}) => (
  <div className={`experience-desc mt-6 pb-6 ${!isLast ? "mb-6" : ""}`}>
    <p>{experience.workSummary}</p>
    {experience.responsibilities.length > 0 && (
      <>
        <h3 className="text-base font-bold mt-6">Responsibilities:</h3>
        <ul className="mt-2 list-disc list-indent pl-2 ml-4">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx} className="my-2">
              {item}
            </li>
          ))}
        </ul>
      </>
    )}
    {experience?.toolsAndTechnologies?.length > 0 && (
      <>
        <h3 className="text-base font-bold mt-6 mb-3">
          Tools and Technologies
        </h3>
        <div>
          {experience?.toolsAndTechnologies?.map((tech, idx) => (
            <span
              key={idx}
              className="inline-block border-2 border-Gray rounded-full text-xs py-1 px-2 font-bold mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    )}
    {experience.projects && experience.projects.length > 0 && (
      <ProjectsSection projects={experience.projects} />
    )}
  </div>
);

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects = [] }) => (
  <div className="bg-LightPurple py-6 px-4 mt-5 rounded-md">
    <h3 className="text-base font-bold">Projects:</h3>
    {projects.map((project, index) => (
      <div key={index} className="flex mt-2">
        <span className="inline-block mr-4 font-normal">{index + 1}</span>
        <div>
          <div>
            <span className="text-base font-bold">{project.projectName}</span>
          </div>
          <p className="mt-2">{project.description}</p>
          {project?.responsibilities?.length > 0 && (
            <>
              <h3 className="text-base font-bold mt-6">Responsibilities:</h3>
              <ul className="mb-6 list-disc list-indent pl-2 ml-4">
                {project?.responsibilities?.map((resp, idx) => (
                  <li key={idx} className="my-2">
                    {resp}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="flex">
            <span className="font-bold mr-3">Link:</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-Primary font-semibold"
            >
              {project.link}
            </a>
          </div>
          <div className="mt-2">
            {project?.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block border-2 border-Gray rounded-full text-xs py-1 px-2 font-bold mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Experiences;
