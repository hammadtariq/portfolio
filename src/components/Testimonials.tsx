import { forwardRef } from 'react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Matthew Johnson',
    role: 'Product Owner',
    company: 'Macys',
    content: "Hammad was wonderful to work with and provided critical value to the project for which I was the product manager - a Self Checkout application for Macy's customers. He is thorough, asks the right questions, and works collaboratively with team leads, other developers, and QEs to deliver complex functionality against tight deadlines. Do not hesitate to bring Hammad on board to any project!",
    avatar: '/matthew1.webp',
  },
  {
    name: 'Taylor Saven',
    role: 'Engineering Lead',
    company: 'Macys',
    content: 'I worked with Hammad for over a year during the development of self-checkout for Macy’s. He was a key engineer in the success of that project. He established himself as a go-to subject expert in the area of UI design and development. He has a high level of experience in single-page apps, React, various JavaScript frameworks, CSS, and other web technologies. He worked well with all members of the team and became a mentor to others, sharing his knowledge and experience. He was timely and accurate with the delivery of everything he worked on. It was great to partner with him on the project.',
    avatar: '/taylor1.webp',
  },
  {
    name: 'Kyle Sebrasky',
    role: 'Sr Cloud Applications Developer',
    company: 'Sherwin-Williams',
    content: 'I have worked with Hammad for about 2 years on 2 separate projects. Hammad continuously drives for results and goes out of his way to research issues. His knowledge in React exceeded our own, and he was able to teach the team the best practices and coding patterns. His ability to troubleshoot and problem-solve is top-notch. Hammad was an asset to my team, and we would not have been as successful without him',
    avatar: '/kyle1.webp',
  },
  {
    name: 'Gene Plaks',
    role: 'Sr. Technical Project Manager',
    company: 'RVO Health',
    content: 'Hammad would make an excellent addition to any software development team. He is a hard worker, an excellent programmer, and, perhaps most importantly, a team player. Hammad is also well-versed in the Scrum methodology and can confidently be relied on by overseas teams. I wholeheartedly recommend him!',
    avatar: '/gene1.webp',
  },
  {
    name: 'Kamran Hamid',
    role: 'Technical Lead',
    company: 'Prog Stream',
    content: 'Hammad was instrumental in delivering high-quality solutions on our complex project, showcasing exceptional skills in the JavaScript stack and problem-solving. His proactive approach and effective communication ensured alignment among all stakeholders. He went above and beyond to mentor junior team members and consistently exceeded expectations. Hammad is a reliable and talented engineer who would be a tremendous asset to any team.',
    avatar: '/kamran1.webp',
  },
  {
    name: 'Zakir Mehmood',
    role: 'Software Architect',
    company: 'VentureDive',
    content: 'Hammad is a dedicated, hardworking, and a valuable resource in the full-stack development. He keeps refining his skills by keeping himself updated with the latest trends. I wish him all the best for his future endeavors.',
    avatar: '/zakir1.webp',
  },
  
]

const Testimonials = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid md:grid-
cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Testimonials.displayName = 'Testimonials'
export default Testimonials

