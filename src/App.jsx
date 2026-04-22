import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
