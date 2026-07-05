import { ParticlesProvider } from '@tsparticles/react'
import useLenis from './hooks/useLenis'
import initEngine from './utils/particlesInit'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <ParticlesProvider init={initEngine}>
      <div className="bg-ink min-h-screen font-body">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ParticlesProvider>
  )
}
