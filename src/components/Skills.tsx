import { forwardRef } from "react";
import { Helmet } from "react-helmet";

import TechStack from "./TechStack";
import { TechnologyCategory } from "../types/projectTypes";

const toolsAndTechnologies: TechnologyCategory[] = [
  {
    category: "Programming Languages",
    technologies: ["JavaScript", "TypeScript", "Solidity", "Python"],
  },
  {
    category: "Frontend Technologies",
    technologies: [
      "HTML",
      "CSS",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "React",
      "Angular",
      "NextJS",
    ],
  },
  {
    category: "Backend Technologies",
    technologies: ["Openai API", "Express JS", "Jade", "NodeJS", "Socket.io"],
  },
  {
    category: "Mobile Frameworks",
    technologies: ["React Native", "Ionic"],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "AWS Lambda",
      "AWS S3",
      "AWS SNS",
      "AWS SQS",
      "Docker",
      "CloudFront",
      "Firebase Cloud Functions",
      "Sam Cli",
      "Serverless JS",
      "Digital Ocean",
      "AWS Services",
      "AWS Code Build and Code Pipeline",
      "Aws Cloud Formation",
      "Aws Pdk",
    ],
  },
  {
    category: "Databases & Tools",
    technologies: [
      "Dynamo DB",
      "PostgreSQL",
      "Mongo DB",
      "Firebase",
      "Supabase",
      "MySql",
      "Redis",
      "Elasticsearch",
    ],
  },
  {
    category: "BlockChain Technologies",
    technologies: [
      "Ethereum",
      "Hard Hat",
      "Ethers",
      "Moralis",
      "Metamask",
      "Ganache",
      "Chainlink",
      "Pinata",
    ],
  },
  {
    category: "Testing & QA",
    technologies: ["Cucumber", "Jest", "Mocha", "Chai", "Super Test"],
  },
];

const Skills = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} id="skills" className="py-20 bg-gray-100">
      <Helmet>
        <title>Skills & Technologies | Hammad Tariq - Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the expertise of Hammad Tariq, a Full Stack Developer skilled in modern technologies including React, Node.js, AWS, Blockchain, and more."
        />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Skills & Technologies | Hammad Tariq - Full Stack Developer" />
        <meta
          property="og:description"
          content="Explore the expertise of Hammad Tariq, a Full Stack Developer skilled in modern technologies including React, Node.js, AWS, Blockchain, and more."
        />
        <meta property="og:image" content="/profile-dp.webp" />
        <meta property="og:url" content="https://tariqhammad.com/skills" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills & Technologies | Hammad Tariq - Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Explore the expertise of Hammad Tariq, a Full Stack Developer skilled in modern technologies including React, Node.js, AWS, Blockchain, and more."
        />
        <meta name="twitter:image" content="/profile-dp.webp" />
      </Helmet>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="container mx-auto px-5 bg-white rounded-lg shadow-md overflow-hidden">
        {toolsAndTechnologies?.length > 0 && (
          <>
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="mt-2">
                {toolsAndTechnologies.map((category, idx) => (
                  <div key={idx} className="my-4 italic">
                    <h4 className="font-semibold text-base mb-2">
                      {category.category}:
                    </h4>
                    <div className="flex flex-wrap gap-2 my-7">
                      {category.technologies.map((tech, techIdx) => (
                        <TechStack key={techIdx} tech={tech} classNames="w-7 h-7"/>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;
