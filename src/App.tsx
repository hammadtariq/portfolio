import { useRef } from "react";
import { Helmet } from 'react-helmet';

import Header from "./components/Header";
import Hero from "./components/Hero";
import CredibilityBar from "./components/CredibilityBar";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from './components/Experiences'
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

import experiencesData from "./assets/experiences.json";

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const experiencesRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hammad Tariq",
    "jobTitle": "Full Stack Developer",
    "url": "https://tariqhammad.com",
    "sameAs": [
      "https://www.linkedin.com/in/hammadtariq1",
      "https://facebook.com/hammadtariq65",
      "https://twitter.com/hammadtariq", // Updated to correct URL format
      "https://github.com/hammadtariq"
    ]
  };  

  return (
    <div className="bg-slate-950 text-slate-900">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hammad Tariq | Full Stack Developer - React, Node.js, AWS, Blockchain</title>
        <meta
          name="description"
          content="Explore the portfolio of Hammad Tariq, a Full Stack Developer with 10+ years of experience. Specializing in React, NodeJS, AWS, Blockchain, and modern web development technologies."
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Hammad Tariq | Full Stack Developer - React, NodeJS, AWS" />
        <meta
          property="og:description"
          content="Explore the portfolio of Hammad Tariq, a Full Stack Developer specializing in React, Node.js, AWS, and Blockchain development."
        />
        <meta property="og:image" content="/profile-dp.webp" />
        <meta property="og:url" content="https://tariqhammad.com" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hammad Tariq | Full Stack Developer - React, Node.js, AWS" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Hammad Tariq, a Full Stack Developer with expertise in React, Node.js, AWS, and Blockchain technologies."
        />
        <meta name="twitter:image" content="/profile-dp.webp" />
      </Helmet>
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onServicesClick={() => scrollTo(servicesRef)}
        onSkillsClick={() => scrollTo(skillsRef)}
        onExperiencesClick={() => scrollTo(experiencesRef)}
        onTestimonialsClick={() => scrollTo(testimonialsRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <main>
        <Hero onProjectsClick={() => scrollTo(projectsRef)} />
        <CredibilityBar />
        <Projects ref={projectsRef} />
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} />
        <Experiences ref={experiencesRef} experiences={experiencesData} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}
