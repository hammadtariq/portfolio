import { forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Github,
  TrendingUp,
  X,
} from "lucide-react";
import LazyLoadImg from "./LazyLoadImg";
import TechStack from "./TechStack";
import { TechConfig } from "./TechConfig";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface Project {
  title: string;
  description: string;
  detailDescription?: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  techs?: string[];
  impact?: string;
}

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
    image: "/10.webp",
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
    image: "/1.webp",
    liveLink: "https://www.catswithglasses.com/",
    techs: ["React", "NodeJS", "Express JS", "Ant Design", "Socket.io"],
  },
  {
    title: "Deliveroo - Food Delivery Manager",
    description:
      "Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.",
    detailDescription: `<p>Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.</p>
    <p><strong>Challenges &amp; Solutions:</strong> One of the main challenges was handling complex restaurant operations efficiently, such as real-time menu updates and managing multiple outlets. This was addressed by implementing a scalable architecture and optimizing database queries for fast data retrieval, ensuring seamless updates and smooth management across multiple locations.</p>`,
    image: "/7.webp",
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
    image: "/11.webp",
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
    image: "/9.webp",
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

const ImpactLine: React.FC<{ impact: string; className?: string }> = ({
  impact,
  className = "",
}) => (
  <div
    className={`inline-flex items-center gap-1.5 font-semibold text-blue-300 ${className}`}
  >
    <TrendingUp size={14} className="flex-none" />
    {impact}
  </div>
);

const ProjectFooter: React.FC<{
  project: Project;
  onShowDetails: () => void;
}> = ({ project, onShowDetails }) => (
  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
    {project.liveLink && (
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-400"
      >
        View Live
        <ExternalLink size={14} />
      </a>
    )}
    <div className="flex items-center gap-4">
      <button
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
        onClick={onShowDetails}
      >
        Details
        <ArrowRight size={14} />
      </button>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="text-slate-400 transition-colors duration-200 hover:text-white"
        >
          <Github size={18} />
        </a>
      )}
    </div>
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
        <LazyLoadImg
          src={project.image}
          alt={project.title}
          classNames="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-blue-500/20" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8 lg:w-[55%]">
        {project.impact && <ImpactLine impact={project.impact} />}
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

        <ProjectFooter project={project} onShowDetails={onShowDetails} />
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

  return (
    <button
      className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.06] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.1] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
      onClick={onShowDetails}
    >
      <div className="relative overflow-hidden">
        <LazyLoadImg
          src={project.image}
          alt={project.title}
          classNames="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 to-blue-500/10" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        {project.impact && (
          <ImpactLine impact={project.impact} className="text-[11px]" />
        )}
        <h3 className="mt-1 line-clamp-2 text-sm font-bold text-white">
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
      className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/15 bg-slate-900 text-white shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-slate-300 backdrop-blur transition-colors duration-200 hover:bg-white/15 hover:text-white"
        onClick={onClose}
        aria-label="Close project details"
      >
        <X size={18} />
      </button>

      <LazyLoadImg
        src={project.image}
        alt={project.title}
        classNames="h-56 w-full rounded-t-[2rem] object-cover md:h-64"
      />

      <div className="p-6 md:p-8">
        {project.impact && (
          <ImpactLine impact={project.impact} className="text-sm" />
        )}
        <h2 id="project-dialog-title" className="mt-2 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h2>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-400"
          >
            View Live
            <ExternalLink size={14} />
          </a>
        )}

        <div
          className="mt-4 leading-relaxed text-slate-300 [&_br]:hidden [&_li]:leading-relaxed [&_p:last-child]:mb-0 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          dangerouslySetInnerHTML={{
            __html: project.detailDescription ?? "",
          }}
        />

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
