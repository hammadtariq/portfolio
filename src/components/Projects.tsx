import { forwardRef, useState } from "react";
import { ExternalLink, Github, XCircle } from "lucide-react";
import LazyLoadImg from "./LazyLoadImg";
import TechStack from "./TechStack";

interface Project {
  title: string;
  description: string;
  detailDescription?: string | TrustedHTML;
  image: string;
  liveLink?: string;
  githubLink?: string;
  techs?: string[];
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
<br/>
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
    // githubLink: 'https://github.com',
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
    <br/>
    <p><strong>Key Features:</strong></p>
    <br/>

    <ul>
      <li><strong>Video Cropping:</strong> Precisely trim and adjust video lengths.</li>
      <li><strong>Audio Customization:</strong> Replace audio, synchronize music to specific video timeframes, and enhance video appeal with curated soundtracks.</li>
      <li><strong>Collaboration Tools:</strong> Provide real-time feedback through team collaboration. Users can like, dislike, and comment on proposed videos for seamless iteration and improvement.</li>
      <li><strong>Project Dashboard:</strong> Manage all video projects in one place, upload curated music tracks, and organize resources efficiently.</li>
    </ul>
    <p>The app was built to address the challenges of combining professional video editing with intuitive collaboration. By implementing a responsive dashboard and robust features like real-time commenting and customizable music libraries, users gain full control over their creative projects.</p>
    <br/>
    <p>This app revolutionized video editing and collaboration, empowering teams to deliver polished, professional videos effortlessly, all while improving project organization and creative workflow.</p>`,
    image: "/1.webp",
    liveLink: "https://www.catswithglasses.com/",
    // githubLink: 'https://github.com',
    techs: ["React", "NodeJS", "Express JS", "Ant Design", "Socket.io"],
  },
  {
    title: "Deliveroo - Food Delivery Manager",
    description:
      "Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.",
    detailDescription: `
    Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.

    Challenges & Solutions: One of the main challenges was handling complex restaurant operations efficiently, such as real-time menu updates and managing multiple outlets. This was addressed by implementing a scalable architecture and optimizing database queries for fast data retrieval, ensuring seamless updates and smooth management across multiple locations.

    Tech Stack: React, NodeJS, MongoDB, Docker, Microservices, Ant Design
    `,
    image: "/7.webp",
    liveLink: "https://bogo.pk/",
    // githubLink: 'https://github.com',
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
    detailDescription: `This project aimed to create a scalable and efficient solution for managing inventory, purchases, and sales while reducing errors and manual workload. I developed a responsive Inventory Management System using modern technologies like Next.js, Node.js, and PostgreSQL to achieve this.

    Key features of the system include real-time inventory tracking to prevent overstocking and shortages, automated workflows to streamline purchase and sales management, and advanced reporting tools that provide actionable insights into stock movements and sales trends. The frontend was designed with Ant Design for an intuitive and responsive user experience, ensuring seamless usability across devices.

    One of the biggest challenges was automating manual workflows without disrupting the existing processes. I overcame this by working closely with stakeholders to understand their workflows and tailoring the system to their exact needs. The scalable architecture ensured the system could grow with future business requirements.

    As a result, the system reduced manual effort by 50%, eliminated errors in inventory tracking, and significantly improved operational efficiency. It empowered the team to make data-driven decisions and streamline their operations effectively.`,
    image: "/11.webp",
    liveLink: "https://bogo.pk/",
    // githubLink: 'https://github.com',
    techs: ["React", "NodeJS", "NextJS", "HTML", "CSS", "PostgreSQL"],
  },
  {
    title: "NFT Marketplace",
    description:
      "As the Lead Fullstack Developer, I built an NFT Marketplace from the ground up, delivering a seamless Web3 experience. Features include NFT event history with filters, sorting, pagination, and real-time UI updates via blockchain event watchers. Designed a robust system inspired by OpenSea.",
    detailDescription: `<div> 
      <p>
        As the <strong>Lead Fullstack Developer</strong>, I spearheaded the development of a fully functional NFT Marketplace, 
        tackling the project from ideation to deployment. The platform was built from scratch, designed to deliver a seamless 
        user experience for trading and managing NFTs. Below are the key aspects and challenges of the project:
      </p>

      <strong>System Architecture:</strong>
      <p>
        I designed the system architecture to ensure seamless communication between services in a decentralized Web3 environment. 
        This included integrating smart contracts with the backend and frontend to enable features like minting, transferring, and 
        trading NFTs. Drawing inspiration from industry leaders like OpenSea and Rarible, I ensured that the system was both scalable 
        and secure.
      </p>
      <br />
      <strong>Key Features:</strong>
      <br />
      <ul>
        <li>
          <strong>Event History for NFTs:</strong>
          <ul>
            <li>Built a feature to display the complete event history of NFTs, including minting, sales, and ownership transfers.</li>
            <li>Added advanced filters, sorting options, and pagination for easy navigation.</li>
          </ul>
        </li>
        <li>
          <strong>Real-Time Blockchain Event Handling:</strong>
          <ul>
            <li>Developed a system to watch and index blockchain events using tools like Hardhat and Ethers.js.</li>
            <li>Ensured real-time UI updates to reflect changes on the blockchain instantly.</li>
          </ul>
        </li>
        <li>
          <strong>NFT Trading and Management:</strong>
          <ul>
            <li>Designed and deployed smart contracts for core marketplace functionalities such as listing, bidding, and transferring NFTs.</li>
            <li>Integrated wallet support for users to connect, interact, and complete transactions seamlessly.</li>
          </ul>
        </li>
      </ul>
      <br />
      <strong>Challenges Overcome:</strong>
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
      <br />
      <strong>Results:</strong>
      <p>
        The NFT Marketplace is a robust platform that allows users to mint, trade, and manage NFTs effortlessly. Its architecture 
        supports scalability, ensuring it can handle a growing user base while maintaining high performance. The success of this project 
        showcases my ability to design and deliver innovative Web3 solutions, even under challenging circumstances.
      </p>
    </div>`,
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

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  const [popupData, setPopupData] = useState<Project | null>(null);

  const openPopup = (project: Project) => {
    setPopupData(project);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white relative rounded-lg shadow-md overflow-hidden"
            >
              <LazyLoadImg
                src={project.image}
                alt={project.title}
                classNames="w-full h-48 object-cover"
              />
              <div className="p-6 pb-8">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 truncate-multi-line">
                  {project.description}
                </p>
                <div className="flex absolute bottom-3 justify-between">
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800"
                    onClick={() => openPopup(project)}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Show Details
                  </button>
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupData && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2 relative p-4 max-h-[80vh] overflow-y-auto">
            {/* Sticky Close Button */}
            <div className="sticky -top-1 -right-10 text-right">
              <button
                className="text-red-500 hover:text-red-700 transition duration-200 z-60"
                onClick={closePopup}
              >
                <XCircle size={30} />
              </button>
            </div>

            {/* Project Title */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              {popupData.title}
            </h2>

            {/* Project Image */}
            <LazyLoadImg
              src={popupData.image}
              alt={popupData.title}
              classNames="w-full h-60 object-cover rounded-md mb-6 shadow-md"
            />

            {/* Project Description */}
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: popupData.detailDescription ?? "",
              }}
            ></p>

            {/* Tech Stack Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-4">
                {popupData.techs?.map((techStack, stackIdx) => (
                  <TechStack
                    key={stackIdx}
                    tech={techStack}
                    classNames="w-5 h-5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;
