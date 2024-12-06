import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experiences from './components/Experiences'

import experiencesData from "./assets/experiences.json";

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onSkillsClick={() => scrollTo(skillsRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onTestimonialsClick={() => scrollTo(testimonialsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <Hero onProjectsClick={() => scrollTo(projectsRef)} />
      <About ref={aboutRef} />
      <Experiences experiences={experiencesData} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Testimonials ref={testimonialsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

