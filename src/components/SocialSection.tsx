import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  color: string
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/fashaap', icon: <GithubIcon className="w-5 h-5" />, color: 'bg-gray-900' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fasha-azhi-putra/', icon: <LinkedinIcon className="w-5 h-5" />, color: 'bg-blue-700' },
  { name: 'Instagram', url: 'https://www.instagram.com/fashaazhi/', icon: <InstagramIcon className="w-5 h-5" />, color: 'bg-pink-600' },
  { name: 'Email', url: 'mailto:alisa@example.com', icon: <MailIcon className="w-5 h-5" />, color: 'bg-red-500' },
]

function getSizeClass(isHovered: boolean, isNeighbor: boolean): string {
  if (isHovered) return 'w-16 h-16 -translate-y-2'
  if (isNeighbor) return 'w-14 h-14 -translate-y-1'
  return 'w-12 h-12'
}

export function SocialSection() {
  const { ref, isVisible } = useScrollReveal()
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className={`px-6 py-20 md:px-16 md:pb-28 bg-transparent transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >
      <div className="flex justify-center">

        <div className="
          w-fit
          bg-white
          border border-gray-100 rounded-2xl
          shadow-lg shadow-black/5
          px-8 py-8
          transition-all duration-500
        ">


          <h2 className="text-black text-xl sm:text-2xl font-bold tracking-tight text-center mb-6">
            Social Media
          </h2>


          <div
            onMouseLeave={() => setHoveredIdx(null)}
            className="flex items-end justify-center gap-4 sm:gap-5"
          >
            {socialLinks.map((link, idx) => {
              const isHovered = hoveredIdx === idx
              const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1
              const sizeClass = getSizeClass(isHovered, isNeighbor)
              const colorClass = isHovered ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'

              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  title={link.name}
                  className={`flex items-center justify-center rounded-full transition-all duration-200 ease-out ${sizeClass} ${colorClass}`}
                >
                  {link.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}