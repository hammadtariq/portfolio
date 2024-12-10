import React, { forwardRef } from "react";
import LazyLoadImg from "./LazyLoadImg";

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

interface ToolProps {
  tech: string;
}

const techConfig: Record<string, { icon: JSX.Element; hoverClass: string }> = {
  NodeJS: {
    icon: (
      <LazyLoadImg
        src="/node-js.svg"
        alt="Node.js logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  React: {
    icon: (
      <LazyLoadImg src="/react.svg" alt="React logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-400 hover:text-white",
  },
  Angular: {
    icon: (
      <LazyLoadImg
        src="/angular.svg"
        alt="Angular logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-red-600 hover:text-white",
  },
  JavaScript: {
    icon: (
      <LazyLoadImg src="/js.svg" alt="JavaScript logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-yellow-500 hover:text-black",
  },
  CSS: {
    icon: <LazyLoadImg src="/css.svg" alt="CSS logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  HTML: {
    icon: <LazyLoadImg src="/html.svg" alt="HTML logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-orange-500 hover:text-white",
  },
  "AWS Lambda": {
    icon: (
      <LazyLoadImg
        src="/aws-lambda.svg"
        alt="AWS Lambda logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  "Mongo DB": {
    icon: (
      <LazyLoadImg
        src="/mongodb.svg"
        alt="MongoDB logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  "Dynamo DB": {
    icon: (
      <LazyLoadImg
        src="/dynamodb.svg"
        alt="DynamoDB logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-purple-600 hover:text-white",
  },
  "Ant Design": {
    icon: (
      <LazyLoadImg
        src="/ant-d.svg"
        alt="Ant Design logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  "Redux Toolkit": {
    icon: (
      <LazyLoadImg src="/redux.svg" alt="Redux logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-purple-300 hover:text-purple-700",
  },
  "Tailwind CSS": {
    icon: (
      <LazyLoadImg
        src="/tailwindcss.svg"
        alt="Tailwind CSS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-teal-400 hover:text-white",
  },
  "Serverless JS": {
    icon: (
      <LazyLoadImg
        src="/serverless-js.svg"
        alt="Serverless JS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-orange-500 hover:text-white",
  },
  "Openai API": {
    icon: (
      <LazyLoadImg
        src="/openai-icon.svg"
        alt="OpenAI logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  Jade: {
    icon: <LazyLoadImg src="/jade.svg" alt="Jade logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-yellow-600 hover:text-black",
  },
  "AWS S3": {
    icon: <LazyLoadImg src="/s3.svg" alt="AWS S3 logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  CloudFront: {
    icon: (
      <LazyLoadImg
        src="/cloudfront.svg"
        alt="CloudFront logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  "Code Commit for Git": {
    icon: (
      <LazyLoadImg
        src="/code-commit.svg"
        alt="Code Commit logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-700 hover:text-white",
  },
  "AWS SNS & SQS": {
    icon: (
      <LazyLoadImg
        src="/aws-sns.svg"
        alt="AWS SNS & SQS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-pink-400 hover:text-white",
  },
  "CI/CD using AWS Code Build and Code Pipeline": {
    icon: (
      <LazyLoadImg
        src="/aws-sqs.svg"
        alt="AWS SQS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-yellow-600 hover:text-white",
  },
  Firebase: {
    icon: (
      <LazyLoadImg
        src="/firebase.svg"
        alt="Firebase logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-yellow-500 hover:text-black",
  },
  Redis: {
    icon: (
      <LazyLoadImg src="/redis.svg" alt="Redis logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-red-700 hover:text-white",
  },
  "Socket.io": {
    icon: (
      <LazyLoadImg
        src="/socket-io.svg"
        alt="Socket.io logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  "Express JS": {
    icon: (
      <LazyLoadImg
        src="/express-js.svg"
        alt="Express JS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white",
  },
  Ionic: {
    icon: (
      <LazyLoadImg src="/ionic.svg" alt="Ionic logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-400 hover:text-white",
  },
  "Firebase Cloud Functions": {
    icon: (
      <LazyLoadImg
        src="/firebase.svg"
        alt="Firebase Cloud Functions logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-yellow-400 hover:text-black",
  },
  NextJS: {
    icon: (
      <LazyLoadImg
        src="/next-js.svg"
        alt="Next.js logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-500 hover:text-white",
  },
  PostgreSQL: {
    icon: (
      <LazyLoadImg
        src="/postgres.svg"
        alt="PostgreSQL logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  Elasticsearch: {
    icon: (
      <LazyLoadImg
        src="/elasticsearch.svg"
        alt="Elasticsearch logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-yellow-400 hover:text-black",
  },
  "AWS Services": {
    icon: <LazyLoadImg src="/aws.svg" alt="AWS logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  "REST API": {
    icon: (
      <LazyLoadImg
        src="/rest-api.svg"
        alt="REST API logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-500 hover:text-white",
  },
  "Angular JS": {
    icon: (
      <LazyLoadImg
        src="/angular.svg"
        alt="AngularJS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-red-500 hover:text-white",
  },
  Mocha: {
    icon: (
      <LazyLoadImg src="/mocha.svg" alt="Mocha logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-amber-900 hover:text-red-100",
  },
  Chai: {
    icon: <LazyLoadImg src="/chai.svg" alt="Chai logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-red-600 hover:text-white",
  },
  "Super Test": {
    icon: (
      <LazyLoadImg
        src="/super-test.svg"
        alt="Super Test logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  "Behavior-driven development": {
    icon: <LazyLoadImg src="/bdd.svg" alt="BDD logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-gray-500 hover:text-white",
  },
};

const Experiences = forwardRef<HTMLElement, ExperiencesProps>(
  (props: ExperiencesProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { experiences } = props;
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
        <h2 className="text-base font-bold text-gray-900 flex items-center">
          {experience.title} - {experience.companyName} |{" "}
          {experience.companyDomain}
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
    {experience?.toolsAndTechnologies &&
      experience.toolsAndTechnologies.length > 0 && (
        <>
          <h3 className="text-base font-bold mt-6">Tools and Technologies</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {experience?.toolsAndTechnologies &&
              experience.toolsAndTechnologies.length > 0 && (
                <>
                  <div className="mt-2">
                    {experience.toolsAndTechnologies.map((category, idx) => (
                      <div key={idx} className="mb-4 italic">
                        <h4 className="font-semibold text-base mb-2">
                          {category.category}:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.technologies.map((tech, techIdx) => (
                            <Tool key={techIdx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
          </div>
        </>
      )}
  </div>
);

const Tool: React.FC<ToolProps> = ({ tech }) => {
  const techItem = techConfig[tech];
  const hoverClass = techItem?.hoverClass;
  const icon = techItem?.icon;

  return (
    <span
      className={`flex justify-center items-center bg-gray-100 border border-gray-300 rounded-full text-xs px-3 py-1 font-semibold cursor-pointer transition-colors duration-200 ${hoverClass} flex-shrink-0`}
    >
      {icon ? (
        <>
          {icon}
          {icon?.props?.src && <span className="ml-1">{tech}</span>}
        </>
      ) : (
        <span className="ml-1">{tech}</span>
      )}
    </span>
  );
};

export default Experiences;
