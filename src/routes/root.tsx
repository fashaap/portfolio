import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { useState, createContext, useContext } from 'react'

export interface ThemeContextType {
  yellowMode: boolean
  setYellowMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider in root route')
  }
  return context
}

export const rootRoute = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [yellowMode, setYellowMode] = useState(false)

  return (
    <ThemeContext.Provider value={{ yellowMode, setYellowMode }}>
      <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${yellowMode ? 'bg-[#EBFF00]' : 'bg-[#F4F4F4]'
        }`}>

        {/* Global Dot Grid Overlay */}
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none z-[1]" />

        {/* Global Dynamic Vector Pen (Full Page Background Wrapper) */}
        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
            style={{
              top: '-150px', // Proportionally scaled top offset
              width: '1600px', // Scaled width (2/3 of 2400px)
              height: '3220px', // Scaled height (2/3 of 4831px)
              maskImage: "url('/vector_pen_full.svg')",
              WebkitMaskImage: "url('/vector_pen_full.svg')",
              maskSize: '100% 100%', // Allows the SVG to scale dynamically with the container dimensions
              WebkitMaskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'top center',
              WebkitMaskPosition: 'top center',
              backgroundColor: yellowMode ? '#FFFFFF' : '#E9FB10',
            }}
          />
        </div>

        {/* Global Ambient Glow Blobs */}
        <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
          <div
            className="absolute top-[15%] left-[-5%] w-[30vw] h-[30vw] min-w-[280px] min-h-[280px] rounded-full bg-blue-600/4 blur-[100px] animate-pulse"
            style={{ animationDuration: '10s' }}
          />
          <div
            className="absolute bottom-[25%] right-[-5%] w-[30vw] h-[30vw] min-w-[280px] min-h-[280px] rounded-full bg-blue-500/4 blur-[100px] animate-pulse"
            style={{ animationDuration: '14s' }}
          />
        </div>

        {/* Navbar */}
        <Navbar yellowMode={yellowMode} setYellowMode={setYellowMode} />

        {/* Page Content (wrapped inside relative container to sit above background blobs) */}
        <main className="relative z-[10] w-full">
          <Outlet />
        </main>

        
      </div>
    </ThemeContext.Provider>
  )
}
