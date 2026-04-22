import React from 'react'

const steps = [
  {
    num: '01',
    icon: '💡',
    iconBg: 'bg-purple/12 border-purple/20',
    title: 'We Set It Up For You',
    desc: 'We handle everything — connecting your enquiry sources, building your AI assistant, and syncing it to your calendar. You don\'t touch a thing.',
    dotColor: 'bg-purple',
  },
  {
    num: '02',
    icon: '🔧',
    iconBg: 'bg-blue-500/12 border-blue-500/20',
    title: 'AI Goes Live in 48hrs',
    desc: 'Your AI starts responding to leads instantly, qualifying buyers and sellers, and booking appraisals — all in your brand voice.',
    dotColor: 'bg-purple-light',
  },
  {
    num: '03',
    icon: '🚀',
    iconBg: 'bg-green/12 border-green/20',
    title: 'You Close More Deals',
    desc: 'Wake up to a full calendar. Focus on listing presentations and negotiations while the AI handles the rest 24/7.',
    dotColor: 'bg-green',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-bg2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-purple/12 border border-purple/25 text-purple-pale text-xs font-medium px-4 py-1.5 rounded-full mb-5">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Up and Running<br />
            <span className="gradient-text-cyan">In 48 Hours</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            No tech skills needed. We do the full setup and you start booking more appraisals within days, not months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-purple/30 via-purple-light/30 to-green/30" />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className="bg-surface border border-white/6 rounded-2xl p-7 relative hover:border-white/10 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl font-black text-white/8 tracking-tighter leading-none">{s.num}</span>
                <div className={`w-10 h-10 rounded-xl border ${s.iconBg} flex items-center justify-center text-lg`}>
                  {s.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              {/* Bottom dot */}
              <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${s.dotColor} shadow-lg`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
