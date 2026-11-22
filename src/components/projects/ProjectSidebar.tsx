import { Folder, FolderOpen } from 'lucide-react'
import type { Project } from '../../types/project'

interface ProjectSidebarProps {
  projects: Project[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function ProjectSidebar({ projects, activeIndex, onSelect }: ProjectSidebarProps) {
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-gray-200 bg-gray-50/70 py-4 font-mono-tech text-xs select-none md:flex">
      <p className="mb-3 px-4 text-[9px] font-bold uppercase tracking-widest text-gray-400">Locations</p>
      <div className="flex flex-col gap-0.5 px-2">
        <ProjectSidebarItem label="Overview" index={0} activeIndex={activeIndex} onSelect={onSelect} />

        <div className="mx-2 my-2 h-px bg-gray-200/60" />
        <p className="mb-1 px-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">Projects</p>

        {projects.map((project, index) => (
          <ProjectSidebarItem
            key={project.dirName}
            label={project.dirName}
            index={index + 1}
            activeIndex={activeIndex}
            onSelect={onSelect}
          />
        ))}
      </div>
    </aside>
  )
}

interface ProjectSidebarItemProps {
  label: string
  index: number
  activeIndex: number
  onSelect: (index: number) => void
}

function ProjectSidebarItem({ label, index, activeIndex, onSelect }: ProjectSidebarItemProps) {
  const isActive = activeIndex === index
  const FolderIcon = isActive ? FolderOpen : Folder

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-current={isActive ? 'page' : undefined}
      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-all duration-150 ${
        isActive ? 'bg-blue-50 font-bold text-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      <FolderIcon className={`h-4 w-4 ${isActive ? 'fill-blue-500/10 text-blue-500' : 'text-gray-400'}`} />
      <span className="truncate">{label}</span>
    </button>
  )
}
