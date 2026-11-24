import { useState } from 'react'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import type { RefObject } from 'react'

export function useProjectScroll(sectionRef: RefObject<HTMLElement | null>, projectCount: number) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const projectProgress = useTransform(scrollYProgress, [0, 1], [0, projectCount])

  useMotionValueEvent(projectProgress, 'change', (value) => {
    const nextIndex = Math.min(projectCount, Math.max(0, Math.round(value)))
    setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex)
  })

  const navigateToProject = (index: number) => {
    setActiveIndex(index)
    const sectionTop = sectionRef.current?.getBoundingClientRect().top
    const section = sectionRef.current
    if (sectionTop === undefined || !section) return

    // Match the scroll progress range (section height minus viewport), which
    // remains accurate when Safari changes its browser chrome/viewport height.
    const scrollRange = Math.max(0, section.offsetHeight - window.innerHeight)

    window.scrollTo({
      top: window.scrollY + sectionTop + (index / projectCount) * scrollRange,
      behavior: 'smooth',
    })
  }

  return { activeIndex, navigateToProject }
}
