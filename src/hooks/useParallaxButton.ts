import { useRef, useState, type MouseEvent } from 'react'

interface Coords {
  x: number
  y: number
  rx: number
  ry: number
}

interface UseParallaxButtonReturn {
  buttonRef: React.RefObject<HTMLAnchorElement | null>
  coords: Coords
  isHovered: boolean
  handleMouseMove: (e: MouseEvent<HTMLAnchorElement>) => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

const INITIAL_COORDS: Coords = { x: 0, y: 0, rx: 0, ry: 0 }
const MAX_TRANSLATE = 14
const MAX_TILT = 16

export function useParallaxButton(): UseParallaxButtonReturn {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [coords, setCoords] = useState<Coords>(INITIAL_COORDS)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setCoords({
      x: (x / (rect.width / 2)) * MAX_TRANSLATE,
      y: (y / (rect.height / 2)) * MAX_TRANSLATE,
      rx: -(y / (rect.height / 2)) * MAX_TILT,
      ry: (x / (rect.width / 2)) * MAX_TILT,
    })
  }

  const handleMouseEnter = () => setIsHovered(true)

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCoords(INITIAL_COORDS)
  }

  return { buttonRef, coords, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave }
}
