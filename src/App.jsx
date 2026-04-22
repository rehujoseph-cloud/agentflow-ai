import React from 'react'
import Navbar from './components/landing/Navbar'
import HeroSection from './components/landing/HeroSection'
import SocialProof from './components/landing/SocialProof'
import ServicesSection from './components/landing/ServicesSection'
import HowItWorks from './components/landing/HowItWorks'
import BenefitsSection from './components/landing/BenefitsSection'
import PricingSection from './components/landing/PricingSection'
import FinalCTA from './components/landing/FinalCTA'
import Footer from './components/landing/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <HowItWorks />
      <BenefitsSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
