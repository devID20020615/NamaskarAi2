import { useState, useEffect } from 'react'
import './index.css'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Capabilities from './sections/Capabilities'
import Language from './sections/Language'
import UseCases from './sections/UseCases'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <Capabilities />
        <Language />
        <UseCases />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
