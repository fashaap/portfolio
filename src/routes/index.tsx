import { useLayoutEffect } from 'react'
import { createRoute } from '@tanstack/react-router'
import { rootRoute, useTheme } from './root'
import { HeroSection } from '../components/HeroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { SocialSection } from '../components/SocialSection'
import { AboutSection } from '../components/AboutSection'
import { Footer } from '../components/Footer'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent,
})

function IndexComponent() {
  const { yellowMode } = useTheme()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="w-full">
      <div id="home"><HeroSection yellowMode={yellowMode} /></div>
      <div id="about"><AboutSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="social"><SocialSection /></div>
      <Footer />
    </div>
  )
}