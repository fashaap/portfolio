import { motion } from 'framer-motion'
import { Folder } from 'lucide-react'
import type { Project } from '../../types/project'

interface ProjectOverviewProps {
  projects: Project[]
  onSelect: (index: number) => void
}

export function ProjectOverview({ projects, onSelect }: ProjectOverviewProps) {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-5"
    >
      <h3 className="mb-6 font-mono-tech text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
        Folders ({projects.length} items)
      </h3>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.dirName}
            type="button"
            onClick={() => onSelect(index + 1)}
            className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-600"
          >
            <span className="relative mb-4 flex h-12 w-16 items-center justify-center rounded-lg bg-blue-400 text-white shadow-md shadow-blue-500/10 transition-all group-hover:bg-blue-500 group-hover:shadow-blue-500/20">
              <span className="absolute -top-1.5 left-2 h-2 w-7 rounded-t-md bg-blue-400 group-hover:bg-blue-500" />
              <Folder className="h-6 w-6" />
            </span>
            <span className="font-mono-tech text-xs font-bold text-gray-800 transition-colors group-hover:text-blue-600">
              {project.dirName}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
