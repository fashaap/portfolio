import { useState, useEffect } from 'react'
import { navLinks } from '../constants/nav'

interface NavbarProps {
  yellowMode: boolean
  setYellowMode: (value: boolean) => void
}

export function Navbar({ yellowMode, setYellowMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  // Automatically update the active nav link based on viewport scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        threshold: 0.2, // trigger when 20% of section is visible
        rootMargin: '-20% 0px -40% 0px' // adjust focus window towards center
      }
    )

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveId(id)
    }
    setMenuOpen(false)
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[800px] z-[50]">
      <nav className="
        flex justify-between items-center
        px-6 py-3.5
        bg-white/40 backdrop-blur-md
        border border-white/20 rounded-2xl
        shadow-lg shadow-black/5
      ">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-extrabold text-blue-600 text-xl tracking-tight select-none cursor-pointer"
        >
          FSH.
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-[2vw] text-sm font-semibold">
          {navLinks.map(link => {
            const isActive = activeId === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative py-1 px-2 transition-colors duration-300 group select-none cursor-pointer"
              >
                <span className={isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600 transition-colors'}>
                  {link.label}
                </span>
                <span
                  className={`absolute bottom-0 left-2 right-2 h-[2px] bg-blue-600 transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Right actions: Theme switcher + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/40 shadow-sm">
            <button
              onClick={() => setYellowMode(false)}
              className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                !yellowMode
                  ? 'bg-white border-blue-600 scale-125 shadow-sm'
                  : 'bg-white border-gray-300 hover:scale-110'
              }`}
              title="White Mode"
            />
            <button
              onClick={() => setYellowMode(true)}
              className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                yellowMode
                  ? 'bg-[#EBFF00] border-blue-600 scale-125 shadow-sm'
                  : 'bg-[#EBFF00] border-gray-300 hover:scale-110'
              }`}
              title="Yellow Mode"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-950 hover:text-blue-600 transition text-2xl leading-none cursor-pointer"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => {
            const isActive = activeId === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-semibold transition cursor-pointer ${
                  isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
