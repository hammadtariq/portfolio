import LazyLoadImg from "./LazyLoadImg";

type TechConfigType = Record<
  string,
  {
    icon: (classNames?: string) => JSX.Element;
    hoverClass: string;
  }
>;

export const TechConfig: TechConfigType = {
  Microservices: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/microservices.png"
        alt="Microservices logo"
        classNames={`${classNames}`}
      />
    ),
    hoverClass: "hover:bg-purple-500 hover:text-white",
  },
  NodeJS: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/node-js.svg"
        alt="Node.js logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  TypeScript: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/ts.svg"
        alt="Type Script logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  Solidity: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/solidity.svg"
        alt="Solidity logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-purple-700 hover:text-white",
  },
  Python: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/python.svg"
        alt="Python logo"
        classNames={classNames}
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-blue-600 to-yellow-400 hover:text-white",
  },
  "React Native": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/react-native.svg"
        alt="React Native logo"
        classNames={classNames}
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-gray-700 to-blue-700 hover:text-white",
  },
  "Digital Ocean": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/digitalocean.svg"
        alt="Digital Ocean logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  React: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/react.svg" alt="React logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-blue-400 hover:text-white",
  },
  Cucumber: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/cucumber.svg"
        alt="Cucumber logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  Jest: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/jest.svg" alt="Jest logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-red-500 hover:text-white",
  },
  Ethereum: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/ethereum.svg"
        alt="Ethereum logo"
        classNames={classNames}
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-blue-600 to-gray-600 hover:text-white",
  },
  "Hard Hat": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/hardhat.svg"
        alt="Ethereum logo"
        classNames={classNames}
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-yellow-500 to-gray-500 hover:text-white",
  },
  Ethers: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/ethers.png"
        alt="Ethers logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  Moralis: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/moralis.svg"
        alt="Moralis logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-cyan-700 hover:text-white",
  },
  MySql: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/mysql.svg" alt="MySql logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-blue-300 hover:text-blue-900",
  },
  "Sam Cli": {
    icon: (classNames = "") => (
      <LazyLoadImg src="/sam.webp" alt="Sam logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-gray-300 hover:text-red-900",
  },
  Supabase: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/supabase.svg"
        alt="Supabase logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-800 hover:text-white",
  },
  Metamask: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/metamask.svg"
        alt="Metamask logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-orange-950",
  },
  Ganache: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/ganache.png"
        alt="Ganache logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  Chainlink: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/chainlink.svg"
        alt="Chainlink logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  Pinata: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/pinata.svg"
        alt="Pinata logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-yellow-500 hover:text-orange-700",
  },
  "Aws Pdk": {
    icon: (classNames = "") => (
      <LazyLoadImg src="/pdk.png" alt="Same logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-blue-300 hover:text-blue-900",
  },
  Angular: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/angular.svg"
        alt="Angular logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-red-600 hover:text-white",
  },
  JavaScript: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/js.svg"
        alt="JavaScript logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-yellow-500 hover:text-black",
  },
  CSS: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/css.svg" alt="CSS logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  HTML: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/html.svg" alt="HTML logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-orange-500 hover:text-white",
  },
  "AWS Lambda": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/aws-lambda.svg"
        alt="AWS Lambda logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  "Mongo DB": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/mongodb.svg"
        alt="MongoDB logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  "Dynamo DB": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/dynamodb.svg"
        alt="DynamoDB logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-purple-600 hover:text-white",
  },
  "Ant Design": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/ant-d.svg"
        alt="Ant Design logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  "Redux Toolkit": {
    icon: (classNames = "") => (
      <LazyLoadImg src="/redux.svg" alt="Redux logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-purple-300 hover:text-purple-700",
  },
  "Tailwind CSS": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/tailwind.svg"
        alt="Tailwind CSS logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-teal-400 hover:text-white",
  },
  "Serverless JS": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/serverless-js.svg"
        alt="Serverless JS logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-orange-500 hover:text-white",
  },
  "Openai API": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/openai-icon.svg"
        alt="OpenAI logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  Jade: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/jade.svg" alt="Jade logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-yellow-600 hover:text-black",
  },
  "AWS S3": {
    icon: (classNames = "") => (
      <LazyLoadImg src="/s3.svg" alt="AWS S3 logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  CloudFront: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/cloudfront.svg"
        alt="CloudFront logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  "Code Commit for Git": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/code-commit.svg"
        alt="Code Commit logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-700 hover:text-white",
  },
  "AWS SNS": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/aws-sns.svg"
        alt="AWS SNS logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-pink-400 hover:text-white",
  },
  "AWS SQS": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/aws-sqs.svg"
        alt="AWS SQS logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-yellow-600 hover:text-white",
  },
  "AWS Code Build and Code Pipeline": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/code-pipeline.svg"
        alt="AWS SQS logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  Docker: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/docker.svg"
        alt="Docker logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  "Aws Cloud Formation": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/aws-cloudformation.svg"
        alt="Aws Cloud formation logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-green-600 hover:text-white",
  },
  Firebase: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/firebase.svg"
        alt="Firebase logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-yellow-500 hover:text-black",
  },
  Redis: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/redis.svg" alt="Redis logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-red-700 hover:text-white",
  },
  "Socket.io": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/socket-io.svg"
        alt="Socket.io logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-600 hover:text-white",
  },
  "Express JS": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/express-js.svg"
        alt="Express JS logo"
        classNames={classNames}
      />
    ),
    hoverClass:
      "hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white",
  },
  Ionic: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/ionic.svg" alt="Ionic logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-blue-400 hover:text-white",
  },
  "Firebase Cloud Functions": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/firebase.svg"
        alt="Firebase Cloud Functions logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-yellow-400 hover:text-black",
  },
  NextJS: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/next-js.svg"
        alt="Next.js logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-500 hover:text-white",
  },
  PostgreSQL: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/postgres.svg"
        alt="PostgreSQL logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  Elasticsearch: {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/elasticsearch.svg"
        alt="Elasticsearch logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-yellow-400 hover:text-black",
  },
  "AWS Services": {
    icon: (classNames = "") => (
      <LazyLoadImg src="/aws.svg" alt="AWS logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-orange-600 hover:text-white",
  },
  "REST API": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/rest-api.svg"
        alt="REST API logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-gray-500 hover:text-white",
  },
  "Angular JS": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/angular.svg"
        alt="AngularJS logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-red-500 hover:text-white",
  },
  Mocha: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/mocha.svg" alt="Mocha logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-amber-900 hover:text-red-100",
  },
  Chai: {
    icon: (classNames = "") => (
      <LazyLoadImg src="/chai.svg" alt="Chai logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-red-600 hover:text-white",
  },
  "Super Test": {
    icon: (classNames = "") => (
      <LazyLoadImg
        src="/super-test.svg"
        alt="Super Test logo"
        classNames={classNames}
      />
    ),
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  "Behavior-driven development": {
    icon: (classNames = "") => (
      <LazyLoadImg src="/bdd.svg" alt="BDD logo" classNames={classNames} />
    ),
    hoverClass: "hover:bg-gray-500 hover:text-white",
  },
};
