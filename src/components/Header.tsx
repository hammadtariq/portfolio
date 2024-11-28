import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onAboutClick: () => void
  onSkillsClick: () => void
  onProjectsClick: () => void
  onTestimonialsClick: () => void
  onContactClick: () => void
}

export default function Header({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onTestimonialsClick,
  onContactClick,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Hammad Tariq</div>
        <nav className="hidden md:flex space-x-6">
          <button onClick={onAboutClick} className="text-gray-600 hover:text-blue-600">About</button>
          <button onClick={onSkillsClick} className="text-gray-600 hover:text-blue-600">Skills</button>
          <button onClick={onProjectsClick} className="text-gray-600 hover:text-blue-600">Projects</button>
          <button onClick={onTestimonialsClick} className="text-gray-600 hover:text-blue-600">Testimonials</button>
          <button onClick={onContactClick} className="text-gray-600 hover:text-blue-600">Contact</button>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <button onClick={() => { onAboutClick(); toggleMenu(); }} className="text-gray-600 hover:text-blue-600">About</button>
            <button onClick={() => { onSkillsClick(); toggleMenu(); }} className="text-gray-600 hover:text-blue-600">Skills</button>
            <button onClick={() => { onProjectsClick(); toggleMenu(); }} className="text-gray-600 hover:text-blue-600">Projects</button>
            <button onClick={() => { onTestimonialsClick(); toggleMenu(); }} className="text-gray-600 hover:text-blue-600">Testimonials</button>
            <button onClick={() => { onContactClick(); toggleMenu(); }} className="text-gray-600 hover:text-blue-600">Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}

