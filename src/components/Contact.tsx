import { forwardRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={24} />
                <span>hammadtariq65@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={24} />
                <span>+92 (331) 262-7056</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={24} />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'
export default Contact

