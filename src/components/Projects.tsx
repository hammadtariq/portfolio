import { forwardRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  liveLink?: string
  githubLink?: string
}

const projects: Project[] = [
  {
    title: 'CWG - Customize Videos With Ease',
    description: "A video customizer app that allows users to enhance their videos with expertly curated music. My client's team of music experts suggests the perfect tracks for your video, which you can review and share with friends. This seamless integration of video and music customization provides a unique and enjoyable user experience, making video creation easy and fun.",
    image: '/1.webp',
    liveLink: 'https://www.catswithglasses.com/',
    // githubLink: 'https://github.com',
  },
  {
    title: 'Hospitality Inn - QR Menu Service',
    description: 'A QR menu app for luxury hotels in the MENA region. The app lets guests order food and services by scanning QR codes in hotel areas. It holds integration with major POS systems, and payment gateways, making the app a reliable and scalable solution for luxury hotels, and enhancing guest experiences significantly.',
    image: '/10.webp',
    liveLink: 'https://qr.ringnbring.com/#/orders?restoID=y5gMnQGOVW1lu4WalNZd&table=1&tablelabel=25&uniqueQRcode=&isDelivery=false&redirectToItem=false&menuId=&categoryId=&subCategoryId=&itemId=',
    // githubLink: 'https://github.com',
  },
  {
    title: 'Deliveroo - Food Delivery Manager',
    description: 'Deliveroo is a platform designed to streamline restaurant and outlet management, similar to Foodpanda but focused on administrators. It enables users to add, update, and manage restaurant listings, menus, and item details, ensuring smooth operations for restaurant administrators.',
    image: '/7.webp',
    liveLink: 'https://bogo.pk/',
    // githubLink: 'https://github.com',
  },
]

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 truncate-multi-line">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                  {project.githubLink ? <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'
export default Projects

