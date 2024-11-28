import { forwardRef, useEffect, useState } from 'react'

interface Skill {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Angular', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'AWS', level: 80 },
  { name: 'TypeScript', level: 85 },
]

const Skills = forwardRef<HTMLElement>((props, ref) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref && 'current' in ref && ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animate ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'
export default Skills

