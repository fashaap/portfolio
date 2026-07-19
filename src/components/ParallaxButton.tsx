import { useParallaxButton } from '../hooks/useParallaxButton'

interface ParallaxButtonProps {
  to: string
  children: React.ReactNode
}

export function ParallaxButton({ to, children }: ParallaxButtonProps) {
  const { buttonRef, coords, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useParallaxButton()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to.startsWith('#')) {
      e.preventDefault()
      const targetId = to.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  return (
    <div style={{ perspective: '800px' }} className="inline-block">
      <button
        ref={buttonRef as any}
        onClick={handleClick}
        onMouseMove={handleMouseMove as any}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="
          relative inline-flex items-center gap-2 md:gap-[0.5vw]
          bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-[1vw]
          px-6 md:px-[2vw] py-3 md:py-[1vw]
          shadow-lg hover:shadow-blue-600/30
          select-none overflow-hidden group cursor-pointer border-none outline-none
        "
        style={{
          transform: isHovered
            ? `translate3d(${coords.x}px, ${coords.y}px, 0) rotateX(${coords.rx}deg) rotateY(${coords.ry}deg)`
            : 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 0.1s ease-out, shadow 0.2s'
            : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), shadow 0.2s',
        }}
      >
        {/* Glow / Reflection shimmer on hover */}
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
          style={{ transform: 'translateZ(5px)' }}
        />

        {/* Inner content popping out in 3D */}
        <span
          className="flex items-center gap-2 md:gap-[0.5vw]"
          style={{
            transform: isHovered ? 'translateZ(18px) scale(1.05)' : 'translateZ(0px) scale(1)',
            transition: 'transform 0.2s ease-out',
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </span>
      </button>
    </div>
  )
}
