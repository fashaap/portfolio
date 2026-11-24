import { ProjectExplorer } from './projects/ProjectExplorer'
import { projects } from '../data/projects'
import { useProjectScroll } from '../hooks/useProjectScroll'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()
  const { activeIndex, navigateToProject } = useProjectScroll(ref, projects.length)

  return (
    <section
      ref={ref}
      style={{ height: `${(projects.length + 1) * 100}svh` }}
      className={`bg-transparent px-6 transition-opacity duration-300 md:px-16 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center">
        <ProjectExplorer
          projects={projects}
          activeIndex={activeIndex}
          onSelectProject={navigateToProject}
        />
      </div>
    </section>
  )
}
