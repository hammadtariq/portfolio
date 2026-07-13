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

const categorySurfaces = [
  "border-blue-200/80 bg-[linear-gradient(135deg,rgba(219,234,254,0.88),rgba(255,255,255,0.92))]",
  "border-cyan-200/80 bg-[linear-gradient(135deg,rgba(207,250,254,0.82),rgba(255,255,255,0.94))]",
  "border-slate-200 bg-white/90",
  "border-indigo-200/80 bg-[linear-gradient(135deg,rgba(224,231,255,0.7),rgba(255,255,255,0.94))]",
  "border-blue-200/80 bg-[linear-gradient(135deg,rgba(219,234,254,0.72),rgba(255,255,255,0.96))]",
  "border-slate-200 bg-white/90",
  "border-cyan-200/80 bg-[linear-gradient(135deg,rgba(236,254,255,0.96),rgba(255,255,255,0.92))]",
  "border-indigo-200/80 bg-[linear-gradient(135deg,rgba(238,242,255,0.9),rgba(255,255,255,0.96))]",
];

const Skills = forwardRef<HTMLElement>((_props, ref) => {
  const { ref: revealRef, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      ref={ref}
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_8%,rgba(186,230,253,0.52),transparent_22%),radial-gradient(circle_at_8%_82%,rgba(219,234,254,0.7),transparent_20%)]"
      />
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

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-blue-700">Capabilities</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            The stack behind the work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A practical toolkit for designing reliable systems from interface to infrastructure.
          </p>
        </div>

        <div
          ref={revealRef}
          className={`mt-12 grid grid-cols-1 gap-5 transition-all duration-700 ease-out md:grid-cols-2 md:gap-6 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {toolsAndTechnologies.map((category, index) => (
            <div
              key={category.category}
              className={`rounded-[2rem] border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_14px_36px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_44px_rgba(37,99,235,0.12)] motion-reduce:transition-none ${categorySurfaces[index]}`}
            >
              <h3 className="mb-5 text-base font-semibold tracking-tight text-slate-950">
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
