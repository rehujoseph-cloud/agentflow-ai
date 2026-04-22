import React from 'react'

export default function CTA() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-purple/6 to-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 text-green-light text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-light animate-blink block" />
          Live in 48 hours. No tech skills needed.
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
          Ready to Fill Your<br />
          <span className="gradient-text-purple">Calendar With Appraisals?</span>
        </h2>

        <p className="text-muted text-lg leading-relaxed max-w-lg mx-auto mb-10">
          Join 200+ real estate agents already using AgentFlow AI to respond faster, book more appraisals, and close more listings — on autopilot.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button className="bg-purple hover:bg-purple-light text-white font-semibold text-lg px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-200 hover:-translate-y-1 glow-purple">
            Book a Demo <span>→</span>
          </button>
          <button className="border border-white/15 hover:border-purple/40 text-white font-medium text-lg px-8 py-4 rounded-xl transition-all duration-200">
            Chat with AI
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-faint">
          {['No tech skills required', 'Live in 48 hours', 'Pays for itself in one deal'].map(pill => (
            <span key={pill} className="flex items-center gap-1.5">
              <span className="text-purple-pale">•</span>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
