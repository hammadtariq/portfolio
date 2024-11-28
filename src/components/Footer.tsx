import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Hammad Tariq. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/hammadtariq" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/hammadtariq65" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

