import { ProjectDetails } from './ProjectDetails'
import { ProjectOverview } from './ProjectOverview'
import { ProjectSidebar } from './ProjectSidebar'
import { ProjectToolbar } from './ProjectToolbar'
import type { Project } from '../../types/project'

interface ProjectExplorerProps {
  projects: Project[]
  activeIndex: number
  onSelectProject: (index: number) => void
}

export function ProjectExplorer({ projects, activeIndex, onSelectProject }: ProjectExplorerProps) {
  const currentProject = activeIndex === 0 ? undefined : projects[activeIndex - 1]
  const currentPath = currentProject ? `projects / ${currentProject.dirName}` : 'projects'

  return (
    <div className="mx-auto w-full max-w-[800px]">
      <div className="mt-4 flex h-auto max-h-[calc(100svh-2rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-500 md:mt-15 md:h-[520px] md:max-h-none">
        <ProjectToolbar
          currentPath={currentPath}
          canGoBack={activeIndex !== 0}
          onBack={() => onSelectProject(0)}
        />

        <div className="flex min-h-0 flex-1">
          <ProjectSidebar
            projects={projects}
            activeIndex={activeIndex}
            onSelect={onSelectProject}
          />

          <main className="min-w-0 flex-1 overflow-y-auto bg-white scrollbar-hidden">
            {currentProject ? (
              <ProjectDetails project={currentProject} />
            ) : (
              <ProjectOverview projects={projects} onSelect={onSelectProject} />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
