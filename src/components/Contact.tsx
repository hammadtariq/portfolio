import { forwardRef } from 'react'
import { Mail, Phone, MapPin, Facebook, Github, Twitter } from 'lucide-react'

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

const Contact = forwardRef<HTMLElement>((_, ref) => {
  const contactInfo: ContactInfo[] = [
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'hammadtariq65@gmail.com', href: 'mailto:hammadtariq65@gmail.com' },
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+92 (331) 262-7056', href: 'tel:+923312627056' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Address', value: 'Karachi, Pakistan' },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com/hammadtariq65' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/hammadtariq' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/hammadtariq65' },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg text-gray-800 dark:text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Let's Connect</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
                  </p>
                  <div className="flex space-x-4 mb-8">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                  {/* <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => {}}
                  >
                    Download Resume
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'
export default Contact

