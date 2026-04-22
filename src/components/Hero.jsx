import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-light/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/25 text-purple-pale text-xs font-medium px-4 py-2 rounded-full mb-7">
            <span className="text-yellow-400">✦</span>
            Trusted by 200+ real estate agents across Australia
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
            Turn Property<br />Enquiries Into<br />
            <span className="gradient-text-purple">Appointments<br />Automatically</span>
          </h1>

          <p className="text-muted text-lg leading-relaxed max-w-md mb-8">
            Turn property enquiries into booked appraisals automatically. Our AI assistant responds in seconds, qualifies leads, and fills your calendar 24/7.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button className="bg-purple hover:bg-purple-light text-white font-semibold px-7 py-3.5 rounded-lg flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 glow-purple">
              Book a Demo <span>→</span>
            </button>
            <button className="border border-white/15 hover:border-purple/40 text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-200">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/6">
            {[
              { val: '+32%', label: 'More Appraisals' },
              { val: '10s', label: 'Response Time' },
              { val: '100%', label: 'Lead Capture' },
              { val: '6-Fig', label: 'Pipeline' },
            ].map(s => (
              <div key={s.val}>
                <div className="text-2xl font-extrabold text-white tracking-tight">{s.val}</div>
                <div className="text-xs text-faint mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="animate-fade-up-delay-2 relative animate-float">
          {/* Leads pill */}
          <div className="absolute -top-3 -right-3 z-10 bg-green text-white text-sm font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 glow-green">
            <span>⚡</span>
            <div>
              <div>+127 Leads</div>
              <div className="text-xs font-normal opacity-80">This week</div>
            </div>
          </div>

          {/* Dashboard card */}
          <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden">
            {/* Top bar */}
            <div className="bg-surface2 border-b border-white/6 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-xs text-faint border border-white/8 rounded-md px-2.5 py-1 font-mono">
                ⟨ ⟩
              </div>
            </div>

            <div className="p-5">
              <p className="text-center text-sm text-muted mb-3">Paste Loom / Video Embed Code</p>
              <div className="bg-bg3 border border-white/6 rounded-lg p-4 text-xs text-faint font-mono min-h-[80px] mb-4 leading-relaxed">
                {`<iframe src="https://www.loom.com/embed/..." > </iframe>`}
              </div>
              <button className="w-full bg-purple hover:bg-purple-light text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                Embed Video
              </button>

              {/* Property thumbnails */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="h-16 rounded-lg bg-gradient-to-br from-purple/20 to-purple/5 border border-white/6 flex items-end p-1.5">
                  <span className="text-xs font-semibold text-green-light bg-green/15 px-1.5 py-0.5 rounded">Booked ✓</span>
                </div>
                <div className="h-16 rounded-lg bg-gradient-to-br from-cyan-dark/15 to-bg3 border border-white/6" />
                <div className="h-16 rounded-lg bg-gradient-to-br from-surface2 to-bg3 border border-white/6 flex items-end p-1.5">
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded">Pending...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Satisfied pill */}
          <div className="absolute -bottom-3 -left-4 bg-surface2 border border-white/12 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl">
            <span className="text-yellow-400 text-base">✦</span>
            <div>
              <div className="text-sm font-bold text-white">98% Satisfied</div>
              <div className="text-xs text-faint">Customer rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
