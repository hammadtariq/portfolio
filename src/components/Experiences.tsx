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

const techColors: Record<string, string> = {
  NodeJS: "hover:bg-green-500 hover:text-white", // Official Node.js green
  React: "hover:bg-blue-400 hover:text-white", // React's primary color
  Angular: "hover:bg-red-600 hover:text-white", // Angular's red
  JavaScript: "hover:bg-yellow-500 hover:text-black", // JavaScript yellow with black text
  CSS: "hover:bg-blue-500 hover:text-white", // CSS blue
  HTML: "hover:bg-orange-500 hover:text-white", // HTML orange
  "AWS Lambda": "hover:bg-orange-600 hover:text-white", // AWS orange
  "Mongo DB": "hover:bg-green-500 hover:text-white", // MongoDB green
  "Dynamo DB": "hover:bg-purple-600 hover:text-white", // DynamoDB purple
  "Ant Design": "hover:bg-blue-600 hover:text-white", // Ant Design blue
  "Redux Toolkit": "hover:bg-purple-700 hover:text-white", // Redux purple
  "Tailwind CSS": "hover:bg-teal-400 hover:text-white", // Tailwind teal
  "Serverless JS": "hover:bg-orange-500 hover:text-white", // Serverless framework orange
  "Openai API": "hover:bg-gray-900 hover:text-white", // OpenAI dark gray/black
  EJS: "hover:bg-yellow-600 hover:text-black", // Yellow for templating
  "AWS S3": "hover:bg-orange-600 hover:text-white", // AWS orange
  CloudFront: "hover:bg-gray-500 hover:text-white", // AWS gray theme
  "Code Commit for Git": "hover:bg-gray-700 hover:text-white", // AWS CodeCommit
  "AWS SNS & SQS": "hover:bg-orange-500 hover:text-white", // AWS orange
  "CI/CD using AWS Code Build and Code Pipeline":
    "hover:bg-blue-800 hover:text-white", // AWS blue
  Firebase: "hover:bg-yellow-500 hover:text-black", // Firebase yellow
  Redis: "hover:bg-red-700 hover:text-white", // Redis red
  "Socket.io": "hover:bg-black hover:text-white", // Socket.io black
  "Express JS": "hover:bg-gray-600 hover:text-white", // Neutral gray
  Ionic: "hover:bg-blue-400 hover:text-white", // Ionic blue
  "Firebase Cloud Functions": "hover:bg-yellow-400 hover:text-black", // Firebase yellow
  NextJS: "hover:bg-black hover:text-white", // Next.js black
  PostgreSQL: "hover:bg-blue-600 hover:text-white", // PostgreSQL blue
  Elasticsearch: "hover:bg-yellow-400 hover:text-black", // Elasticsearch yellow
  "AWS Services": "hover:bg-orange-600 hover:text-white", // AWS orange
  "REST API": "hover:bg-gray-500 hover:text-white", // Neutral gray
  "Angular JS": "hover:bg-red-500 hover:text-white", // Angular red
  Mocha: "hover:bg-brown-600 hover:text-red-600", // Mocha brown
  Chai: "hover:bg-red-600 hover:text-white", // Chai red
  "Super Test": "hover:bg-blue-500 hover:text-white", // Blue for testing
};

const Experiences: React.FC<ExperiencesProps> = forwardRef<HTMLElement>(
  (_props, ref) => {
    const { experiences } = _props as any;
    if (!experiences.length) {
      return null; // No experiences to display
    }

    return (
      <section ref={ref} id="experience" className="py-20 bg-white" data-toggle>
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    );
  }
);

interface ExperienceEntryProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  experience,
  isLast,
}) => (
  <div className="flex space-x-9">
    {/* Left Side (Dates) */}
    <div className="lg:w-1/6">
      <div className="inline-block">
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
          {/* <span className="mr-2 text-orange-500">●</span> */}
          {experience.title} - {experience.companyName} |{" "}
          {experience.companyDomain}
        </h2>
      </div>

      <div className="experience-desc mt-6 pb-6 mb-6 ">
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
              {experience?.toolsAndTechnologies?.map((tech, idx) => {
                const hoverClass = techColors[tech] || "hover:text-gray-500"; // Default gray
                return (
                  <span
                    key={idx}
                    className={`inline-block  bg-gray-100 border border-gray-300 rounded-full text-xs px-3 py-1 font-semibold cursor-pointer transition-colors duration-200 ${hoverClass}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </>
        )}
      </div>
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
