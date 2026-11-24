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
      <div className={`relative min-h-screen w-full overflow-x-clip transition-colors duration-500 ${yellowMode ? 'bg-[#EBFF00]' : 'bg-[#F4F4F4]'
        }`}>


        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none z-[1]" />


        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
            style={{
              top: '-150px',
              width: '1600px',
              height: '7270px',
              maskImage: "url('/vector_pen_full_v3.svg')",
              WebkitMaskImage: "url('/vector_pen_full_v3.svg')",
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'top center',
              WebkitMaskPosition: 'top center',
              backgroundColor: yellowMode ? '#FFFFFF' : '#E9FB10',
            }}
          />
        </div>


        <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden max-md:hidden">
          <div
            className="absolute top-[15%] left-[-5%] w-[30vw] h-[30vw] min-w-[280px] min-h-[280px] rounded-full bg-blue-600/4 blur-[100px] animate-pulse"
            style={{ animationDuration: '10s' }}
          />
          <div
            className="absolute bottom-[25%] right-[-5%] w-[30vw] h-[30vw] min-w-[280px] min-h-[280px] rounded-full bg-blue-500/4 blur-[100px] animate-pulse"
            style={{ animationDuration: '14s' }}
          />
        </div>


        <Navbar yellowMode={yellowMode} setYellowMode={setYellowMode} />


        <main className="relative z-[10] w-full">
          <Outlet />
        </main>


      </div>
    </ThemeContext.Provider>
  )
}
