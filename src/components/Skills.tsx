import { forwardRef } from "react";

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

const capabilityPillars = [
  {
    title: "Product interfaces",
    description:
      "Responsive product surfaces, mobile experiences, and the testing discipline that keeps them dependable.",
    categories: [
      "Programming Languages",
      "Frontend Technologies",
      "Mobile Frameworks",
      "Testing & QA",
    ],
  },
  {
    title: "Backend and data systems",
    description:
      "APIs, real-time services, and data foundations designed to stay understandable as products grow.",
    categories: ["Backend Technologies", "Databases & Tools"],
  },
  {
    title: "Cloud and delivery",
    description:
      "Production infrastructure, serverless architecture, and delivery systems built for reliable operation.",
    categories: ["Cloud & DevOps"],
  },
  {
    title: "Emerging platforms",
    description:
      "Practical blockchain integrations and decentralized tooling where the product case earns the complexity.",
    categories: ["BlockChain Technologies"],
  },
];

const Skills = forwardRef<HTMLElement>((_props, ref) => {
  const pillars = capabilityPillars.map((pillar) => ({
    ...pillar,
    technologies: pillar.categories.flatMap(
      (categoryName) =>
        toolsAndTechnologies.find(
          ({ category }) => category === categoryName,
        )?.technologies ?? [],
    ),
  }));

  return (
    <section
      ref={ref}
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden bg-[#0c0c0c] py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_10%,rgba(182,0,168,0.12),transparent_24%),radial-gradient(circle_at_8%_88%,rgba(190,76,0,0.08),transparent_22%)]"
      />
      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-fuchsia-200">
            Capabilities
          </p>
          <h2
            id="skills-heading"
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            The stack behind the work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            A practical toolkit for designing reliable systems from interface
            to infrastructure.
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/15 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`border-b border-white/15 py-9 md:py-10 ${
                index % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              }`}
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-[48ch] leading-relaxed text-white/55">
                {pillar.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                {pillar.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/72"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-fuchsia-300/70"
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;
