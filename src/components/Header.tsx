import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onAboutClick: () => void
  onSkillsClick: () => void
  onExperiencesClick: () => void
  onProjectsClick: () => void
  onTestimonialsClick: () => void
  onContactClick: () => void
}

// Web approximation of Apple's Liquid Glass material (no official web package
// exists): layered translucent gradient, inner highlight border, tinted
// shadow, and backdrop blur/saturation to fake edge refraction.
const GLASS_DARK =
  'bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.35)]'
const GLASS_LIGHT =
  'bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(255,255,255,0.5))] border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(15,23,42,0.04),0_8px_30px_rgba(15,23,42,0.08)]'

export default function Header({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onExperiencesClick,
  onTestimonialsClick,
  onContactClick,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)
  const pillRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    const pill = pillRef.current
    if (!hero || !pill) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(entry.isIntersecting),
      { rootMargin: `-${pill.offsetHeight + 32}px 0px 0px 0px`, threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

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
    <div className="fixed top-4 md:top-6 inset-x-0 z-50 container mx-auto px-4">
      <header
        ref={pillRef}
        className={`h-14 md:h-16 rounded-full border backdrop-blur-xl backdrop-saturate-150 transition-[background,box-shadow,border-color] duration-300 ${
          isOverHero ? GLASS_DARK : GLASS_LIGHT
        }`}
      >
        <div className="h-full px-5 md:px-7 flex items-center justify-between">
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              isOverHero ? 'text-white' : 'text-gray-950'
            }`}
          >
            Hammad Tariq
          </span>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  isOverHero
                    ? 'text-white/85 hover:text-white after:bg-white'
                    : 'text-gray-600 hover:text-gray-950 after:bg-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className={`lg:hidden transition-colors duration-300 ${
              isOverHero ? 'text-white' : 'text-gray-800'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden animate-slideIn mt-3 rounded-3xl border border-gray-100 bg-white shadow-xl overflow-hidden">
          <nav className="px-2 py-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.onClick()
                  closeMenu()
                }}
                className="text-left px-4 py-3 rounded-2xl text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
