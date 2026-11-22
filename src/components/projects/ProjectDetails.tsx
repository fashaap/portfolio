import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import type { SVGProps } from 'react'
import { techIcons } from '../../constants/techIcons'
import type { Project } from '../../types/project'

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex h-full min-h-[350px] flex-col justify-between p-4 sm:p-5"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="min-w-0 flex-1">
          <div className="mb-4 border-b border-gray-100 pb-4">
            <h3 className="text-2xl font-black tracking-tight text-gray-950">{project.title}</h3>
          </div>

          <p className="mb-6 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="w-full shrink-0 select-none md:w-[260px]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
            <img
              src={project.previewUrl ?? `/${project.dirName}.png`}
              className="h-full w-full object-cover object-top"
              alt={`${project.title} preview`}
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.classList.remove('object-top', 'p-4')
                event.currentTarget.classList.add('object-center')
                event.currentTarget.src = 'https://placehold.net/default.svg'
              }}
            />
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex max-w-[70%] flex-wrap gap-1.5">
          {project.tech.map((technology) => {
            const TechnologyIcon = techIcons[technology] ?? Code2

            return (
              <span
                key={technology}
                className="inline-flex items-center gap-1.5 rounded bg-gray-100 px-2.5 py-1 font-mono-tech text-[11px] font-bold uppercase tracking-wide text-gray-700"
              >
                <TechnologyIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {technology}
              </span>
            )
          })}
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-colors hover:text-blue-800"
            title="Source Code"
            aria-label={`${project.title} source code`}
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-colors hover:text-blue-800"
            title="Live Deployment"
            aria-label={`${project.title} live website`}
          >
            <ExternalLinkIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </footer>
    </motion.div>
  )
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
