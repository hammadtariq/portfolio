import { forwardRef } from 'react'
import { Code, Smartphone, Server } from 'lucide-react'

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Code size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Expertise in React, Angular, and modern JavaScript frameworks.</p>
          </div>
          <div className="text-center">
            <Smartphone size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p>Creating responsive and native mobile applications.</p>
          </div>
          <div className="text-center">
            <Server size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Backend & Cloud</h3>
            <p>Proficient in Node.js and AWS cloud services.</p>
          </div>
        </div>
        <p className="mt-12 text-lg text-center max-w-3xl mx-auto">
          With over a decade of experience in the ever-evolving world of web and mobile development,
          I've honed my skills to deliver cutting-edge solutions that drive business growth and user engagement.
          My passion lies in creating seamless, efficient, and scalable applications that make a real impact.
        </p>
      </div>
    </section>
  )
})

About.displayName = 'About'
export default About

