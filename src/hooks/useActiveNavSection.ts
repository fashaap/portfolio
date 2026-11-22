import { useEffect, useState } from 'react'
import { navLinks } from '../constants/nav'

export function useActiveNavSection() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    let frame = 0
    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const focusLine = window.innerHeight * 0.4
        const activeSection = sections.reduce((current, section) => {
          return section.getBoundingClientRect().top <= focusLine ? section : current
        }, sections[0])

        if (activeSection) {
          setActiveId((currentId) => currentId === activeSection.id ? currentId : activeSection.id)
        }
      })
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return { activeId, setActiveId }
}
