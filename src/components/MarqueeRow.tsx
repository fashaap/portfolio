const MARQUEE_TEXT =
  'BACK END ENGINEER ✦ UI/UX ENTHUSIAST ✦ OPEN TO WORK ✦ REACT & TYPESCRIPT ✦ CREATIVE CODER ✦ PROBLEM SOLVER ✦'

interface MarqueeRowProps {
  duration: string
  opacity?: number
  reverse?: boolean
}

export function MarqueeRow({ duration, opacity = 1, reverse = false }: MarqueeRowProps) {
  return (
    <div style={{ overflow: 'hidden', opacity, width: '100%' }}>
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee-scroll ${duration} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          willChange: 'transform',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="font-black text-blue-600 tracking-wider uppercase"
            style={{
              fontSize: 'clamp(11px, 1.66vw, 30px)',
              paddingRight: 'clamp(8px, 2vw, 36px)',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
