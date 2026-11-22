import { ChevronLeft, ChevronRight, LayoutGrid, List, Search } from 'lucide-react'

interface ProjectToolbarProps {
  currentPath: string
  onBack: () => void
  canGoBack: boolean
}

export function ProjectToolbar({ currentPath, onBack, canGoBack }: ProjectToolbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-gray-50/90 px-4 py-3 select-none">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="ml-2 flex items-center gap-1">
          <button
            type="button"
            onClick={onBack}
            disabled={!canGoBack}
            className={`rounded p-1 transition-colors hover:bg-gray-200 ${canGoBack ? 'text-gray-600' : 'cursor-not-allowed text-gray-300'}`}
            title="Back to Overview"
            aria-label="Back to project overview"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" disabled className="cursor-not-allowed rounded p-1 text-gray-300" aria-label="Forward">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[40%] truncate rounded-md border border-gray-200/20 bg-gray-200/50 px-4 py-1 font-mono-tech text-[11px] font-bold text-gray-500 sm:text-xs">
        {currentPath}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded border border-gray-200/50 bg-gray-200/60 p-0.5" aria-hidden="true">
          <span className="rounded bg-white p-1 text-gray-600 shadow-sm">
            <LayoutGrid className="h-3.5 w-3.5" />
          </span>
          <span className="cursor-not-allowed p-1 text-gray-400">
            <List className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="hidden w-32 items-center gap-1.5 rounded-md border border-gray-200/40 bg-gray-200/60 px-2 py-1 sm:flex">
          <Search className="h-3 w-3 text-gray-400" />
          <span className="select-none font-mono-tech text-[10px] text-gray-400">Search</span>
        </div>
      </div>
    </header>
  )
}
