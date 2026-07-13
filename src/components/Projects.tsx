import { forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  ChevronDown,
  X,
} from "lucide-react";
import LazyLoadImg from "./LazyLoadImg";
import TechStack from "./TechStack";
import { TechConfig } from "./TechConfig";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface Project {
  title: string;
  role: string;
  description: string;
  image?: string;
  techs?: string[];
}

/* Retired portfolio data. Kept outside the active source of truth while this
   worktree remains uncommitted, then removed with the next content commit.
const projects: Project[] = [
  {
    title: "Hospitality Inn - QR Menu Service",
    description:
      "A QR menu app for luxury hotels in the MENA region. The app lets guests order food and services by scanning QR codes in hotel areas. It holds integration with major POS systems, and payment gateways, making the app a reliable and scalable solution for luxury hotels, and enhancing guest experiences significantly.",
    detailDescription: `
      <p>
  A <strong>QR Menu App</strong> designed for luxury hotels in the MENA region, empowering guests to order food and services by scanning QR codes placed in hotel areas. As CTO, I transformed this app into a robust, scalable solution that significantly enhanced guest experiences and boosted revenue from <strong>$10k to $500k per month</strong> within nine months. Key features and improvements include:
</p>
<ul>
  <li><strong>QR Code Ordering:</strong> Simplified the ordering process by enabling guests to access menus and place orders through QR code scans.</li>
  <li><strong>POS System Integration:</strong> Integrated with major POS systems to streamline order management and processing.</li>
  <li><strong>Secure Payment Gateways:</strong> Implemented reliable payment solutions to ensure secure transactions.</li>
  <li><strong>Dynamic Menu Updates:</strong> Provided real-time menu customization and updates for seamless guest interaction.</li>
  <li><strong>Multi-Language Support:</strong> Enhanced accessibility for guests from diverse linguistic backgrounds.</li>
  <li><strong>Analytics and Administration Tools:</strong> Offered actionable insights and tools for hotel management to optimize services.</li>
  <li><strong>Cloud-Based Infrastructure:</strong> Ensured scalability, reliability, and uninterrupted performance for future growth.</li>
</ul>
<p>
  This transformation made the app a trusted and scalable solution for luxury hotels, redefining dining and service experiences while delivering operational excellence.
</p>
`,
    image: "/TRS Business.webp",
    liveLink:
      "https://qr.ringnbring.com/#/orders?restoID=y5gMnQGOVW1lu4WalNZd&table=1&tablelabel=25&uniqueQRcode=&isDelivery=false&redirectToItem=false&menuId=&categoryId=&subCategoryId=&itemId=",
    impact: "50x revenue growth in 9 months",
    techs: [
      "Angular",
      "NodeJS",
      "Express JS",
      "Firebase",
      "Redis",
      "Socket.io",
      "Firebase Cloud Functions",
      "Ionic",
    ],
  },
  {
    title: "CWG - Customize Videos With Ease",
    description:
      "A video customizer app that allows users to enhance their videos with expertly curated music. My client's team of music experts suggests the perfect tracks for your video, which you can review and share with friends. This seamless integration of video and music customization provides a unique and enjoyable user experience, making video creation easy and fun.",
    detailDescription: `<p>The <strong>Video Customizer App</strong> was designed to streamline the video editing process by integrating advanced customization tools with collaborative features, empowering users to create professional-grade videos effortlessly.</p>
    <p><strong>Key Features:</strong></p>
    <ul>
      <li><strong>Video Cropping:</strong> Precisely trim and adjust video lengths.</li>
      <li><strong>Audio Customization:</strong> Replace audio, synchronize music to specific video timeframes, and enhance video appeal with curated soundtracks.</li>
      <li><strong>Collaboration Tools:</strong> Provide real-time feedback through team collaboration. Users can like, dislike, and comment on proposed videos for seamless iteration and improvement.</li>
      <li><strong>Project Dashboard:</strong> Manage all video projects in one place, upload curated music tracks, and organize resources efficiently.</li>
    </ul>
    <p>The app was built to address the challenges of combining professional video editing with intuitive collaboration. By implementing a responsive dashboard and robust features like real-time commenting and customizable music libraries, users gain full control over their creative projects.</p>
    <p>This app revolutionized video editing and collaboration, empowering teams to deliver polished, professional videos effortlessly, all while improving project organization and creative workflow.</p>`,
    image: "/Generaxi.webp",
    liveLink: "https://www.catswithglasses.com/",
    techs: ["React", "NodeJS", "Express JS", "Ant Design", "Socket.io"],
  },
  {
    title: "Deliveroo - Food Delivery Manager",
    description:
      "Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.",
    detailDescription: `<p>Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.</p>
    <p><strong>Challenges &amp; Solutions:</strong> One of the main challenges was handling complex restaurant operations efficiently, such as real-time menu updates and managing multiple outlets. This was addressed by implementing a scalable architecture and optimizing database queries for fast data retrieval, ensuring seamless updates and smooth management across multiple locations.</p>`,
    image: "/Bogo.webp",
    liveLink: "https://bogo.pk/",
    techs: [
      "React",
      "NodeJS",
      "Mongo DB",
      "Docker",
      "Microservices",
      "Ant Design",
    ],
  },
  {
    title: "Tap Tap Store - Warehouse Management System",
    description:
      "I created an Inventory Management System using Next.js, Node.js, and PostgreSQL to streamline operations and reduce errors. Key features include real-time tracking, automated workflows, and reporting. The system improved efficiency, reducing manual effort by 50% and eliminating inventory errors.",
    detailDescription: `<p>This project aimed to create a scalable and efficient solution for managing inventory, purchases, and sales while reducing errors and manual workload. I developed a responsive Inventory Management System using modern technologies like Next.js, Node.js, and PostgreSQL to achieve this.</p>
    <p>Key features of the system include real-time inventory tracking to prevent overstocking and shortages, automated workflows to streamline purchase and sales management, and advanced reporting tools that provide actionable insights into stock movements and sales trends. The frontend was designed with Ant Design for an intuitive and responsive user experience, ensuring seamless usability across devices.</p>
    <p>One of the biggest challenges was automating manual workflows without disrupting the existing processes. I overcame this by working closely with stakeholders to understand their workflows and tailoring the system to their exact needs. The scalable architecture ensured the system could grow with future business requirements.</p>
    <p>As a result, the system reduced manual effort by 50%, eliminated errors in inventory tracking, and significantly improved operational efficiency. It empowered the team to make data-driven decisions and streamline their operations effectively.</p>`,
    image: "/Cerpro.webp",
    liveLink: "https://bogo.pk/",
    impact: "50% less manual effort",
    techs: ["React", "NodeJS", "NextJS", "HTML", "CSS", "PostgreSQL"],
  },
  {
    title: "NFT Marketplace",
    description:
      "As the Lead Fullstack Developer, I built an NFT Marketplace from the ground up, delivering a seamless Web3 experience. Features include NFT event history with filters, sorting, pagination, and real-time UI updates via blockchain event watchers. Designed a robust system inspired by OpenSea.",
    detailDescription: `<p>
        As the <strong>Lead Fullstack Developer</strong>, I spearheaded the development of a fully functional NFT Marketplace,
        tackling the project from ideation to deployment. The platform was built from scratch, designed to deliver a seamless
        user experience for trading and managing NFTs. Below are the key aspects and challenges of the project:
      </p>
      <p><strong>System Architecture:</strong> I designed the system architecture to ensure seamless communication between services in a decentralized Web3 environment.
        This included integrating smart contracts with the backend and frontend to enable features like minting, transferring, and
        trading NFTs. Drawing inspiration from industry leaders like OpenSea and Rarible, I ensured that the system was both scalable
        and secure.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>
          <strong>Event History for NFTs:</strong> Built a feature to display the complete event history of NFTs, including minting, sales, and ownership transfers, with advanced filters, sorting options, and pagination for easy navigation.
        </li>
        <li>
          <strong>Real-Time Blockchain Event Handling:</strong> Developed a system to watch and index blockchain events using tools like Hardhat and Ethers.js, ensuring real-time UI updates to reflect changes on the blockchain instantly.
        </li>
        <li>
          <strong>NFT Trading and Management:</strong> Designed and deployed smart contracts for core marketplace functionalities such as listing, bidding, and transferring NFTs, with wallet support for users to connect, interact, and complete transactions seamlessly.
        </li>
      </ul>
      <p><strong>Challenges Overcome:</strong></p>
      <ul>
        <li>
          <strong>Underdeveloped Libraries:</strong> Despite good documentation, we faced stability and process clarity issues
          with some Web3 libraries. I resolved these through extensive debugging and by creating custom utilities where needed.
        </li>
        <li>
          <strong>Team Expertise:</strong> Assembling a team with Web3 expertise was a challenge. I trained resources on blockchain
          concepts and tools to ensure smooth collaboration.
        </li>
        <li>
          <strong>Blockchain Event Indexing:</strong> Watching and indexing blockchain events efficiently to trigger UI updates
          required deep technical exploration and optimization.
        </li>
      </ul>
      <p><strong>Results:</strong> The NFT Marketplace is a robust platform that allows users to mint, trade, and manage NFTs effortlessly. Its architecture
        supports scalability, ensuring it can handle a growing user base while maintaining high performance. The success of this project
        showcases my ability to design and deliver innovative Web3 solutions, even under challenging circumstances.</p>`,
    image: "/Valorem.webp",
    techs: [
      "React",
      "NodeJS",
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
    title: "Beauty Travel",
    description:
      "Case study details are being prepared. Product context, delivery notes, and outcomes will be added soon.",
    image: "/Beauty Travel.webp",
    isPlaceholder: true,
  },
  {
    title: "BioSonic",
    description:
      "Case study details are being prepared. Product context, delivery notes, and outcomes will be added soon.",
    image: "/BioSonic.webp",
    isPlaceholder: true,
  },
  {
    title: "Bogo 2",
    description:
      "Case study details are being prepared. Product context, delivery notes, and outcomes will be added soon.",
    image: "/Bogo2.webp",
    isPlaceholder: true,
  },
  {
    title: "Social Followers",
    description:
      "Case study details are being prepared. Product context, delivery notes, and outcomes will be added soon.",
    image: "/Social Followers.webp",
    isPlaceholder: true,
  },
];
*/

const projects: Project[] = [
  {
    title: "AI Agent on a Live Inventory System | Claude MCP Chatbot + Analytics",
    role: "Full-Stack Developer & Architect",
    description: `A wholesale business ran on spreadsheets: stock, ledgers, and profitability scattered everywhere. I built them a complete inventory and ledger system, then integrated an AI assistant on top. Both now run in daily production.

I developed a custom MCP server connecting Claude to the live database, so the owner asks in plain language: stock levels, sales trends, customer balances, profit by product. Real data, real numbers, no hallucinated reports.

Delivered: full order/inventory lifecycle, transaction ledger, automated financial reports, AI chatbot via Claude + MCP.

Stack: React, Node.js, PostgreSQL`,
    image: "/Inventory-Chatbot.webp",
    techs: ["AI Chatbot", "AI Agent Development", "AI App Development", "React", "NodeJS"],
  },
  {
    title: "AI Document Extraction from Engineering Drawings | Computer Vision",
    role: "Full-Stack Engineer",
    description: `Manufacturers were manually copying Product Manufacturing Information (PMI) from technical drawings into their systems: slow, error-prone QA work at industrial scale.

I built Drawlytics, an AI platform that extracts this data automatically. Computer vision and OCR pull dimensions, tolerances, and annotations from drawings; an interactive Fabric.js canvas lets QA teams verify AI-extracted data in real time, keeping a human in the loop.

Backend: NestJS API with AWS Lambda for serverless batch OCR processing.

Result: manual entry time cut by more than half, with higher data accuracy. In production use.`,
    image: "/Cerpro.webp",
    techs: ["React", "Fabric.js", "AWS Lambda", "AI Model Integration", "Computer Vision"],
  },
  {
    title: "Rescued an AI-Built App: Terabyte-Scale Acoustic Analysis Platform",
    role: "Full-Stack Engineer",
    description: `BioSonic, an AI platform for bat acoustic research, started as a vibe-coded static site that couldn't handle its real workload: multi-terabyte audio datasets for European research teams.

I took it over and rebuilt it into a production-grade portal:

- Several-fold faster data retrieval and dramatically faster file loading via Supabase query optimization
- Stabilized the AWS infrastructure, eliminating recurring downtime
- Parallel processing at scale with SQS job distribution and EC2 monitoring for proactive scaling

The pattern is common: AI-generated code demos well, then breaks on real data. Fixing that is my specialty.`,
    image: "/BioSonic.webp",
    techs: ["React", "Supabase", "Amazon Web Services", "Software Debugging", "Application Optimization"],
  },
  {
    title: "AI SaaS Platform: 65+ Models, One Interface | Generative AI",
    role: "Platform Architect & Full-Stack Developer",
    description: `Generaxi is a live AI SaaS platform unifying 65+ models for text, image, video, and audio generation in one interface.

The hard part isn't calling one API; it's orchestrating many. I engineered the routing layer across OpenAI, Gemini, and Anthropic, plus Replicate, ElevenLabs, and OpenRouter for image, video, and audio models, with state management that lets users switch models mid-chat without losing context.

I also built secure file pipelines for image-to-video workflows and a tiered subscription engine with per-tier usage limits, designed to GDPR and SOC 2 requirements.`,
    image: "/generaxi.webp",
    techs: ["Svelte", "NodeJS", "API Integration", "Generative AI", "AI Model Integration"],
  },
  {
    title: "Product Rescue: Fitness Booking Platform Launched | React Native",
    role: "Full-Stack Developer",
    description: `Alma Collective, a fitness booking platform for the Greek market, was stuck: half-built by a previous developer, unstable, and nowhere near launch-ready.

I took over the codebase, stabilized it, completed the missing core flows, and carried it to public launch across web and mobile (React Native).

What shipped:
- User app: discover and filter classes (yoga, Pilates, dance), book and pay per session, QR check-in on arrival
- Partner portal: venue listings, class scheduling, payouts, subscriptions
- Payments: Stripe with Apple Pay and Google Pay, pay-as-you-go and subscriptions`,
    image: "/alma.webp",
    techs: ["React", "NodeJS", "React Native", "Software Debugging", "Stripe API"],
  },
  {
    title: "QR Ordering Platform for 5-Star Hotel Chains | Oracle POS",
    role: "CTO / Technical Lead",
    description: `A QR ordering ecosystem for luxury MENA hotels: guests scan a code to order food, laundry, and services from a PWA.

As CTO I rebuilt it around plug-and-play integrations. Every hotel differs, one wants Oracle Simphony and a local gateway, another wants menus managed manually, so POS and payment integrations became per-client toggles, not custom builds.

The ecosystem: guest PWA, admin dashboard with POS menu sync or built-in menu management, sales dashboard with payment links, and an Ionic app for reception and kitchen order handling.

International 5-star chains onboarded on subscriptions.`,
    image: "/10.webp",
    techs: ["API Integration", "Point of Sale & Payment Systems", "NodeJS", "Ionic", "Angular"],
  },
  {
    title: "Serverless AWS Backend for Property Renovation Platform",
    role: "Backend Developer & AWS Architect",
    description: `US property owners managing renovations juggle scopes, service orders, and contractors across calls and spreadsheets. Renovate360 puts that workflow in one place, on web and mobile.

I designed and built the AWS serverless backend: Lambda for compute, DynamoDB for data, CloudFormation for infrastructure as code. No servers to manage, costs that scale with usage.

The platform covers property registration, project scoping, service order management, and real-time tracking across owners, managers, and providers, with a web app and React Native mobile app for on-site teams.`,
    image: "/Valorem.webp",
    techs: ["Amazon Web Services", "AWS Lambda", "Dynamo DB", "NodeJS", "TypeScript"],
  },
  {
    title: "Headless WordPress Migration: 20-Year E-commerce Site | Next.js",
    role: "Full-Stack Developer & Migration Architect",
    description: `A 20-year-old art e-commerce site needed modernizing without gambling two decades of SEO history and steady revenue on a risky rebuild.

I architected a phased headless migration: Next.js frontend, WordPress backend the team already knew.

- Page-by-page migration, no downtime, no big-bang cutover risk
- Metadata and indexing mapped so search rankings held through the transition
- Fast, modern frontend on a familiar CMS

Result: a faster, secure platform with rankings intact and zero revenue loss during the migration. The safe path, executed page by page.`,
    image: "/RPG.webp",
    techs: ["NextJS", "WordPress e-Commerce", "Search Engine Optimization", "React", "Website Migration"],
  },
  {
    title: "AI-Personalized Islamic Wellness App for Women | Flutter + AI",
    role: "Full-Stack & Mobile Developer",
    description: `Serene is a faith and wellness app for Muslim women: location-based prayer times, a mosque locator, a global sisters' forum, 1-on-1 mentorship with guides, and a Daily Deen Journal for reflection.

I'm now building its AI personalization layer. Based on signals users choose to share, journal entries and mood check-ins, it will adapt what the app surfaces: a relevant ayah or hadith on a stressful day, an encouraging reminder on a good one, notifications timed to how the user is doing rather than a fixed schedule.

Live on Flutter and Firebase, with in-app purchases and push notifications.`,
    image: "/sis.webp",
    techs: ["Flutter", "Firebase", "AI App Development", "AI Model Integration", "Push Notifications"],
  },
  {
    title: "AI Design-to-Print MVP: Custom Apparel Tool | Fabric.js Canvas",
    role: "Full-Stack Developer",
    description: `Printier is an MVP that lets anyone design custom apparel and get it printed and shipped, without the store owning inventory or a print shop.

Users describe a design in plain text, an AI image generation model creates it, and they place it on shirts and products through an interactive Fabric.js canvas editor: drag, resize, layer, preview.

Behind the scenes, Printful API integration handles fulfillment automatically: orders flow from checkout to print to shipping with no manual steps.

Built lean as a validation-stage MVP: core flow first, polish where it converts.`,
    image: "/printier.webp",
    techs: ["NextJS", "Fabric.js", "API Integration", "AI Image Generation", "Minimum Viable Product"],
  },
  {
    title: "Food Delivery Marketplace: Multi-Outlet Platform | Elasticsearch",
    role: "Senior Full-Stack Engineer",
    description: `Fogo was built to compete with regional food delivery giants: a marketplace where restaurants onboard themselves, manage branches and menus, and reach customers through fast, filtered search.

I worked on the microservices-based admin platform: multi-outlet onboarding, branch management, and real-time menu updates flowing from restaurant admins to the customer-facing app.

Search was the hard problem at marketplace scale, thousands of items across outlets, live availability, location filtering, solved with Elasticsearch indexing tuned for fast retrieval under constant menu churn.

Stack: React, Node.js, MongoDB, Elasticsearch.`,
    image: "/Bogo.webp",
    techs: ["Elasticsearch", "NodeJS", "React", "Mongo DB", "API Integration"],
  },
  {
    title: "Audio Timeline Editor with Live Collaboration | React",
    role: "Full-Stack Developer",
    description: `A platform where music curators score users' videos: strip the original audio, then place curated tracks into time slots along the video, multiple tracks across different segments, arranged on a timeline.

I built the core editing engine: audio trimming, the slot-based timeline where tracks are placed, adjusted, and layered per segment, and the media pipeline behind it.

Collaboration runs live over Socket.io: comment threads on each video connect users with the curation team during review.

Frontend in React with Redux managing the timeline state; Node.js handling uploads and media.`,
    image: "/1.webp",
    techs: ["Redux Toolkit", "React", "JavaScript", "NodeJS", "Socket.io"],
  },
];

const INITIAL_VISIBLE_COUNT = 6;

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  const [popupData, setPopupData] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { ref: revealRef, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const [spotlight, ...rest] = projects;
  const visibleRest = showAll ? rest : rest.slice(0, INITIAL_VISIBLE_COUNT);
  const remainingCount = rest.length - visibleRest.length;

  useEffect(() => {
    if (!popupData) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPopupData(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [popupData]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(37,99,235,0.32),transparent_25%),radial-gradient(circle_at_90%_70%,rgba(14,165,233,0.14),transparent_24%)]"
      />
      <Helmet>
        <title>Projects | Hammad Tariq - Full Stack Developer</title>
        <meta name="description" content="Explore the projects developed by Hammad Tariq, showcasing his expertise in full-stack development with React, Node.js, AWS, and more." />
        <meta property="og:title" content="Projects | Hammad Tariq - Full Stack Developer" />
        <meta property="og:description" content="Explore the projects developed by Hammad Tariq, showcasing his expertise in full-stack development with React, Node.js, AWS, and more." />
        <meta property="og:image" content="/profile-dp.webp" />
        <meta property="og:url" content="https://tariqhammad.com#projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Hammad Tariq - Full Stack Developer" />
        <meta name="twitter:description" content="Explore the projects developed by Hammad Tariq, showcasing his expertise in full-stack development with React, Node.js, AWS, and more." />
        <meta name="twitter:image" content="/profile-dp.webp" />
      </Helmet>
      <div className="container relative mx-auto px-4">
        <p className="mb-4 text-sm font-medium text-blue-200">Projects</p>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Selected product work
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-slate-300">
          A selection of products I&apos;ve designed, built, and shipped for
          clients across hospitality, logistics, and Web3.
        </p>

        <div ref={revealRef} className="mt-16">
          <SpotlightCard
            project={spotlight}
            isVisible={isVisible}
            onShowDetails={() => setPopupData(spotlight)}
          />

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleRest.map((project, index) => (
              <CompactProjectCard
                key={project.title}
                project={project}
                isVisible={isVisible}
                delayMs={Math.min(index, 8) * 60}
                onShowDetails={() => setPopupData(project)}
              />
            ))}
          </div>

          {remainingCount > 0 && (
            <div className="mt-8 flex justify-center">
              <button
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-blue-300/60 hover:bg-blue-500/20"
                onClick={() => setShowAll(true)}
              >
                Show {remainingCount} more projects
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {popupData && (
        <ProjectModal
          project={popupData}
          onClose={() => setPopupData(null)}
        />
      )}
    </section>
  );
});

const ProjectCover: React.FC<{
  project: Project;
  classNames: string;
}> = ({ project, classNames }) => {
  if (project.image) {
    return <LazyLoadImg src={project.image} alt={project.title} classNames={classNames} />;
  }

  return (
    <div
      role="img"
      aria-label={`Cover image pending for ${project.title}`}
      className={`${classNames} flex items-end bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.38),transparent_28%),linear-gradient(135deg,#0f172a,#172554_48%,#0f172a)] p-5`}
    >
      <span className="rounded-full border border-white/15 bg-slate-950/45 px-3 py-1.5 text-xs font-medium text-blue-100 backdrop-blur">
        Cover image pending
      </span>
    </div>
  );
};

const ProjectFooter: React.FC<{ onShowDetails: () => void }> = ({
  onShowDetails,
}) => (
  <div className="mt-auto flex items-center justify-end pt-6">
    <button
      className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
      onClick={onShowDetails}
    >
      Details
      <ArrowRight size={14} />
    </button>
  </div>
);

const SpotlightCard: React.FC<{
  project: Project;
  isVisible: boolean;
  onShowDetails: () => void;
}> = ({ project, isVisible, onShowDetails }) => {
  const visibleTechs = project.techs?.slice(0, 6) ?? [];
  const hiddenTechCount = (project.techs?.length ?? 0) - visibleTechs.length;

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_50px_rgba(2,6,23,0.24)] backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:border-blue-300/35 lg:col-span-12 lg:flex-row ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative overflow-hidden lg:w-[45%]">
        <ProjectCover
          project={project}
          classNames="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-blue-500/20" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8 lg:w-[55%]">
        <p className="text-sm font-medium text-blue-200">{project.role}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-300 line-clamp-3 lg:line-clamp-4">
          {project.description}
        </p>

        {visibleTechs.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {visibleTechs.map((tech) => (
              <TechStack
                key={tech}
                tech={tech}
                variant="dark"
                classNames="w-3.5 h-3.5"
              />
            ))}
            {hiddenTechCount > 0 && (
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                +{hiddenTechCount} more
              </span>
            )}
          </div>
        )}

        <ProjectFooter onShowDetails={onShowDetails} />
      </div>
    </div>
  );
};

const COMPACT_TECH_ICON_COUNT = 3;

const CompactProjectCard: React.FC<{
  project: Project;
  isVisible: boolean;
  delayMs: number;
  onShowDetails: () => void;
}> = ({ project, isVisible, delayMs, onShowDetails }) => {
  const visibleTechs = project.techs?.slice(0, COMPACT_TECH_ICON_COUNT) ?? [];
  const hiddenTechCount = (project.techs?.length ?? 0) - visibleTechs.length;
  const cardClassName = `group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.06] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.1] ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;
  const cardContent = (
    <>
      <div className="relative overflow-hidden">
        <ProjectCover
          project={project}
          classNames="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 to-blue-500/10" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-blue-200">{project.role}</p>
        <h3 className="mt-2 line-clamp-2 text-sm font-bold text-white">
          {project.title}
        </h3>

        {visibleTechs.length > 0 && (
          <div className="mt-2 flex items-center gap-1.5">
            {visibleTechs.map((tech) => (
              <span key={tech} className="flex-none" title={tech}>
                {TechConfig[tech]?.icon("w-4 h-4")}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span className="text-xs font-medium text-slate-400">
                +{hiddenTechCount}
              </span>
            )}
          </div>
        )}

        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-slate-300 transition-colors duration-200 group-hover:text-white">
          Details
          <ArrowRight size={12} />
        </span>
      </div>
    </>
  );

  return (
    <button
      className={cardClassName}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
      onClick={onShowDetails}
    >
      {cardContent}
    </button>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
    onClick={onClose}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      className="project-detail-scroll relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/15 bg-slate-900 text-white shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-slate-300 backdrop-blur transition-colors duration-200 hover:bg-white/15 hover:text-white"
        onClick={onClose}
        aria-label="Close project details"
      >
        <X size={18} />
      </button>

      <ProjectCover
        project={project}
        classNames="h-56 w-full rounded-t-[2rem] object-cover md:h-64"
      />

      <div className="p-6 md:p-8">
        <p className="text-sm font-medium text-blue-200">{project.role}</p>
        <h2 id="project-dialog-title" className="mt-2 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h2>

        <div className="mt-4 space-y-4 whitespace-pre-line leading-relaxed text-slate-300">
          {project.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {project.techs && project.techs.length > 0 && (
          <div className="mt-2">
            <h3 className="text-sm font-semibold text-white">
              Tech Stack
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <TechStack
                  key={tech}
                  tech={tech}
                  variant="dark"
                  classNames="w-3.5 h-3.5"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

Projects.displayName = "Projects";
export default Projects;
