import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onAboutClick: () => void
  onSkillsClick: () => void
  onExperiencesClick: () => void
  onProjectsClick: () => void
  onTestimonialsClick: () => void
  onContactClick: () => void
}

export default function Header({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onExperiencesClick,
  onTestimonialsClick,
  onContactClick,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { label: 'About', onClick: onAboutClick },
    { label: 'Skills', onClick: onSkillsClick },
    { label: 'Experiences', onClick: onExperiencesClick },
    { label: 'Projects', onClick: onProjectsClick },
    { label: 'Testimonials', onClick: onTestimonialsClick },
    { label: 'Contact', onClick: onContactClick },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] bg-white/85 backdrop-blur-md border-b border-gray-200/80">
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tight text-gray-950">
          Hammad Tariq
        </span>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="relative py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-950 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="lg:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden animate-slideIn bg-white border-b border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.onClick()
                  closeMenu()
                }}
                className="text-left py-3 text-base font-medium text-gray-700 border-b border-gray-100 last:border-b-0 hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
