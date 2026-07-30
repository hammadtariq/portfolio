import { useRef } from "react";

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
import ShutterSplash from "./components/ShutterSplash";

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

  return (
    <div className="bg-slate-950 text-slate-900">
      <ShutterSplash />
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
