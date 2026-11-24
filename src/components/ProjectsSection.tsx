import { ProjectExplorer } from './projects/ProjectExplorer'
import { projects } from '../data/projects'
import { useProjectScroll } from '../hooks/useProjectScroll'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect, useState } from 'react'

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(media.matches)
    media.addEventListener('change', updateViewport)
    return () => media.removeEventListener('change', updateViewport)
  }, [])

  const { activeIndex, navigateToProject } = useProjectScroll(ref, projects.length, !isMobile)

  return (
    <section
      ref={ref}
      style={{ height: isMobile ? 'auto' : `${(projects.length + 1) * 100}svh` }}
      className={`bg-transparent px-6 transition-opacity duration-300 md:px-16 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`${isMobile ? 'flex min-h-[100svh] w-full items-center py-6' : 'sticky top-0 flex h-[100svh] w-full items-center'}`}>
        <ProjectExplorer
          projects={projects}
          activeIndex={activeIndex}
          onSelectProject={navigateToProject}
        />
      </div>
    </section>
  )
}
