import { useEffect, useState } from 'react'
import { navLinks } from '../constants/nav'

export function useActiveNavSection() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold: 0.2, rootMargin: '-20% 0px -40% 0px' },
    )

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return { activeId, setActiveId }
}
