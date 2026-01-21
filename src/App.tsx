import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import Timeline from "@/components/Timeline";
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    // TODO: Replace 'G-XXXXXXXXXX' with your actual Measurement ID from Google Analytics
    // You can create a property at https://analytics.google.com/
    ReactGA.initialize('G-RVCV154XZ9')
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 