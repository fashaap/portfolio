import { useState } from 'react'
import { Cpu, Server, Code2, ChevronLeft, ChevronRight, Folder, FolderOpen, LayoutGrid, List, Search } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Project {
  title: string
  dirName: string
  fileName: string
  lang: 'rust' | 'go' | 'typescript'
  description: string
  tech: string[]
  icon: React.ReactNode
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    title: 'Abyssal Engine',
    dirName: 'abyssal_engine',
    fileName: 'abyssal_engine.rs',
    lang: 'rust',
    description: 'A high-performance async telemetry and event logging system built in Rust. Optimized for sub-millisecond writes and distributed streaming.',
    tech: ['Rust', 'Tokio', 'gRPC', 'Protobuf'],
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com'
  },
  {
    title: 'Pulse DB',
    dirName: 'pulse_db',
    fileName: 'pulse_db.go',
    lang: 'go',
    description: 'A distributed, in-memory key-value database with zero-copy serialization, raft consensus algorithm implementation, and replication support.',
    tech: ['Go', 'Raft Consensus', 'Protobuf', 'Redis Protocol'],
    icon: <Server className="w-5 h-5 text-blue-600" />,
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com'
  },
  {
    title: 'tht API Gateway',
    dirName: 'tht_gateway',
    fileName: 'tht_gateway.ts',
    lang: 'typescript',
    description: 'Dynamic edge routing, rate limiting, and JWT authentication service designed to orchestrate low-latency microservice architectures.',
    tech: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com'
  }
]

function LangIcon({ lang, className }: { lang: Project['lang']; className?: string }) {
  if (lang === 'rust') return <Cpu className={className} />
  if (lang === 'go') return <Server className={className} />
  return <Code2 className={className} />
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()
  const [activeIdx, setActiveIdx] = useState(0) // 0 is Overview, 1-3 are projects

  return (
    <section
      ref={ref}
      className={`px-6 py-5 md:px-16 md:pt-10 bg-transparent transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[950px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-3.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono-tech text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase">
              Works & Code
            </span>
          </div>
          <h2 className="text-gray-950 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
            FEATURED <span className="text-blue-600">PROJECTS</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-medium max-w-lg">
            An interactive macOS Finder mockup showcasing backend directory code structures and website visual mockups.
          </p>
        </div>

        {/* macOS Finder Window Wrapper */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white flex flex-col h-[520px] transition-all duration-500">
          
          {/* 1. Finder Top Toolbar Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/90 select-none">
            {/* Left side: Window Traffic Lights + Navigation Arrows */}
            <div className="flex items-center gap-4">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex items-center gap-1 ml-2">
                <button
                  onClick={() => setActiveIdx(0)}
                  disabled={activeIdx === 0}
                  className={`p-1 rounded hover:bg-gray-200 transition-colors ${
                    activeIdx === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600'
                  }`}
                  title="Back to Overview"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled
                  className="p-1 rounded text-gray-300 cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle: Path Title display */}
            <div className="font-mono-tech text-[11px] sm:text-xs text-gray-500 font-bold bg-gray-200/50 px-4 py-1 rounded-md border border-gray-200/20 max-w-[40%] truncate">
              {activeIdx === 0 ? 'projects' : `projects / ${projects[activeIdx - 1].dirName}`}
            </div>

            {/* Right side: Mock Search & Views toolbar controls */}
            <div className="flex items-center gap-3">
              {/* Layout controls */}
              <div className="flex items-center bg-gray-200/60 p-0.5 rounded border border-gray-200/50">
                <button className="p-1 rounded bg-white text-gray-600 shadow-sm">
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded text-gray-400 cursor-not-allowed">
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
              
              {/* Mock search */}
              <div className="hidden sm:flex items-center gap-1.5 bg-gray-200/60 border border-gray-200/40 px-2 py-1 rounded-md w-32">
                <Search className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400 font-mono-tech select-none">Search</span>
              </div>
            </div>
          </div>

          {/* 2. Main Window Inner Split Layout */}
          <div className="flex-1 flex min-h-0">
            
            {/* Left Sidebar (macOS Finder Directory Favorites) */}
            <div className="hidden md:flex flex-col w-[200px] bg-gray-50/70 border-r border-gray-200 select-none py-4 font-mono-tech text-xs">
              <div className="px-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Locations
              </div>
              <div className="flex flex-col gap-0.5 px-2">
                {/* Overview Root option */}
                <button
                  onClick={() => setActiveIdx(0)}
                  className={`px-3 py-2 w-full rounded-lg text-left flex items-center gap-2.5 transition-all duration-150 ${
                    activeIdx === 0 
                      ? 'bg-blue-50 text-blue-600 font-bold' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  {activeIdx === 0 ? (
                    <FolderOpen className="w-4 h-4 text-blue-500 fill-blue-500/10" />
                  ) : (
                    <Folder className="w-4 h-4 text-gray-400" />
                  )}
                  <span>Overview</span>
                </button>

                <div className="h-[1px] bg-gray-200/60 my-2 mx-2" />

                <div className="px-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Projects
                </div>

                {projects.map((proj, idx) => {
                  const targetIdx = idx + 1
                  const isSelected = activeIdx === targetIdx
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(targetIdx)}
                      className={`px-3 py-2 w-full rounded-lg text-left flex items-center gap-2.5 transition-all duration-150 ${
                        isSelected 
                          ? 'bg-blue-50 text-blue-600 font-bold' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                      }`}
                    >
                      {isSelected ? (
                        <FolderOpen className="w-4 h-4 text-blue-500 fill-blue-500/10" />
                      ) : (
                        <Folder className="w-4 h-4 text-gray-400" />
                      )}
                      <span className="truncate">{proj.dirName}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Main Content Pane */}
            <div className="flex-1 bg-white overflow-y-auto min-w-0">
              {activeIdx === 0 ? (
                /* VIEW 1: Directory Overview (Folder Icons) */
                <div className="p-8">
                  <h3 className="font-mono-tech text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-6">
                    Folders (3 items)
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {projects.map((proj, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIdx(idx + 1)}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-600 transition-all duration-300 group"
                      >
                        {/* Apple style folder vector icon */}
                        <div className="w-16 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg relative shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all mb-4 select-none flex items-center justify-center text-white text-lg font-bold">
                          {/* Folder Tab tag */}
                          <span className="absolute -top-1.5 left-2 w-7 h-2 bg-blue-400 hover:bg-blue-500 rounded-t-md" />
                          <LangIcon lang={proj.lang} className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-mono-tech text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {proj.dirName}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* VIEW 2: Selected Project view with Dashboard Screen Image Preview (Two-Column Layout) */
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full min-h-[350px]">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    
                    {/* Left Column: Technical details */}
                    <div className="flex-1 min-w-0">
                      {/* Project Title & Status Header */}
                      <div className="flex items-start justify-between mb-4 border-b border-gray-100 pb-4">
                        <div>
                          <h3 className="text-gray-950 font-black text-2xl tracking-tight">
                            {projects[activeIdx - 1].title}
                          </h3>
                          {/* Technology Language badge */}
                          <div className="flex items-center gap-1.5 mt-1 select-none">
                            <LangIcon lang={projects[activeIdx - 1].lang} className="w-3.5 h-3.5 text-gray-400" />
                            <span className="text-[9px] font-mono-tech font-bold text-gray-400 uppercase tracking-wider">
                              {projects[activeIdx - 1].fileName}
                            </span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                          {projects[activeIdx - 1].icon}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
                        {projects[activeIdx - 1].description}
                      </p>
                    </div>

                    {/* Right Column: Visual Mockup Image (Smaller) */}
                    <div className="w-full md:w-[260px] shrink-0 select-none">
                      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 aspect-[16/9] relative">
                        <img
                          src={`/${projects[activeIdx - 1].dirName}.png`}
                          className="w-full h-full object-cover object-top"
                          alt={`${projects[activeIdx - 1].title} preview`}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Tech stack Tags & Action Redirection links */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {projects[activeIdx - 1].tech.map((t, i) => (
                        <span key={i} className="font-mono-tech text-[9px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <a 
                        href={projects[activeIdx - 1].githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-600 transition-colors" 
                        title="Source Code"
                      >
                        <GithubIcon className="w-4.5 h-4.5" />
                      </a>
                      <a 
                        href={projects[activeIdx - 1].liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-600 transition-colors" 
                        title="Live Deployment"
                      >
                        <ExternalLinkIcon className="w-4.5 h-4.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}