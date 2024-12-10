import { forwardRef } from "react";
import LazyLoadImg from "./LazyLoadImg";

const toolsAndTechnologies = [
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
  TypeScript: {
    icon: (
      <LazyLoadImg src="/ts.svg" alt="Type Script logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  Solidity: {
    icon: (
      <LazyLoadImg
        src="/solidity.svg"
        alt="Solidity logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-purple-700 hover:text-white",
  },
  Python: {
    icon: (
      <LazyLoadImg src="/python.svg" alt="Python logo" classNames="w-11 h-7" />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-blue-600 to-yellow-400 hover:text-white",
  },
  "React Native": {
    icon: (
      <LazyLoadImg
        src="/react-native.svg"
        alt="React Native logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-gray-700 to-blue-700 hover:text-white",
  },
  "Digital Ocean": {
    icon: (
      <LazyLoadImg
        src="/digitalocean.svg"
        alt="Digital Ocean logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  React: {
    icon: (
      <LazyLoadImg src="/react.svg" alt="React logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-400 hover:text-white",
  },
  Cucumber: {
    icon: (
      <LazyLoadImg
        src="/cucumber.svg"
        alt="Cucumber logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  Jest: {
    icon: <LazyLoadImg src="/jest.svg" alt="Jest logo" classNames="w-11 h-7" />,
    hoverClass: "hover:bg-red-500 hover:text-white",
  },
  Ethereum: {
    icon: (
      <LazyLoadImg
        src="/ethereum.svg"
        alt="Ethereum logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-blue-600 to-gray-600 hover:text-white",
  },
  "Hard Hat": {
    icon: (
      <LazyLoadImg
        src="/hardhat.svg"
        alt="Ethereum logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-yellow-500 to-gray-500 hover:text-white",
  },
  Ethers: {
    icon: (
      <LazyLoadImg src="/ethers.png" alt="Ethers logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  Moralis: {
    icon: (
      <LazyLoadImg
        src="/moralis.svg"
        alt="Moralis logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-cyan-700 hover:text-white",
  },
  MySql: {
    icon: (
      <LazyLoadImg src="/mysql.svg" alt="MySql logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-300 hover:text-blue-900",
  },
  "Sam Cli": {
    icon: (
      <LazyLoadImg
        src="/sam.webp"
        alt="Sam logo"
        classNames="w-7 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-300 hover:text-red-900",
  },
  Supabase: {
    icon: (
      <LazyLoadImg
        src="/supabase.svg"
        alt="Supabase logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-800 hover:text-white",
  },
  Metamask: {
    icon: (
      <LazyLoadImg
        src="/metamask.svg"
        alt="Metamask logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-orange-950",
  },
  Ganache: {
    icon: (
      <LazyLoadImg
        src="/ganache.png"
        alt="Ganache logo"
        classNames="w-7 h-7 rounded-full"
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  Chainlink: {
    icon: (
      <LazyLoadImg
        src="/chainlink.svg"
        alt="Chainlink logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  Pinata: {
    icon: (
      <LazyLoadImg src="/pinata.svg" alt="Pinata logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-yellow-500 hover:text-orange-700",
  },
  "Aws Pdk": {
    icon: <LazyLoadImg src="/pdk.png" alt="Same logo" classNames="w-7 h-7" />,
    hoverClass: "hover:bg-blue-300 hover:text-blue-900",
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
        src="/tailwind.svg"
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
  "AWS SNS": {
    icon: (
      <LazyLoadImg
        src="/aws-sns.svg"
        alt="AWS SNS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-pink-400 hover:text-white",
  },
  "AWS SQS": {
    icon: (
      <LazyLoadImg
        src="/aws-sqs.svg"
        alt="AWS SQS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-yellow-600 hover:text-white",
  },
  "AWS Code Build and Code Pipeline": {
    icon: (
      <LazyLoadImg
        src="/code-pipeline.svg"
        alt="AWS SQS logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  Docker: {
    icon: (
      <LazyLoadImg src="/docker.svg" alt="Docker logo" classNames="w-11 h-7" />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  "Aws Cloud Formation": {
    icon: (
      <LazyLoadImg
        src="/aws-cloudformation.svg"
        alt="Aws Cloud formation logo"
        classNames="w-11 h-7"
      />
    ),
    hoverClass: "hover:bg-green-600 hover:text-white",
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


const Skills = forwardRef<HTMLElement>((_props, ref) => {

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills
      </h2>
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
                        <Tool key={techIdx} tech={tech} />
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
