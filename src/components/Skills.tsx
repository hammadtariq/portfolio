import { forwardRef } from "react";
import { Helmet } from "react-helmet";

import TechStack from "./TechStack";
import { TechnologyCategory } from "../types/projectTypes";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

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
  const { ref: revealRef, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section ref={ref} id="skills" className="py-24 md:py-32 bg-gray-50">
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

      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
          Skills
        </h2>

        <div
          ref={revealRef}
          className={`grid grid-cols-1 gap-6 transition-all duration-700 ease-out md:grid-cols-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {toolsAndTechnologies.map((category) => (
            <div
              key={category.category}
              className="rounded-3xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-4 text-sm font-semibold text-gray-950">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <TechStack key={tech} tech={tech} classNames="w-4 h-4" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;
