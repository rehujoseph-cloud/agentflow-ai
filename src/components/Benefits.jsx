import React from 'react'

const benefits = [
  {
    icon: '📈',
    stat: '+32%',
    title: 'More Appraisals Booked',
    desc: 'Average increase in booked appraisals within the first 30 days',
  },
  {
    icon: '🕐',
    stat: '15+',
    title: 'Hours Saved Per Week',
    desc: 'Stop chasing leads manually — your AI handles it all',
  },
  {
    icon: '👥',
    stat: '100%',
    title: 'Zero Leads Missed',
    desc: 'Every enquiry gets an instant response, even at 2am on weekends',
  },
  {
    icon: '🛡️',
    stat: 'Custom',
    title: 'Your Brand Voice',
    desc: 'AI trained to sound exactly like you — professional and on-brand',
  },
  {
    icon: '⚡',
    stat: '<10s',
    title: '10-Second Response',
    desc: 'Beat every competitor to the reply and win more listings',
  },
  {
    icon: '📊',
    stat: 'Live',
    title: 'Pipeline Visibility',
    desc: 'See every lead, follow-up, and booked appointment in one dashboard',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-purple/12 border border-purple/25 text-purple-pale text-xs font-medium px-4 py-1.5 rounded-full mb-5">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Stop Losing Deals<br />
            <span className="gradient-text-green">To Slow Follow-Up</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            The agents winning more listings aren't working harder — they're responding faster. Here's what AgentFlow AI delivers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map(b => (
            <div
              key={b.title}
              className="bg-surface border border-white/6 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-green/10 border border-green/18 flex items-center justify-center text-base">
                  {b.icon}
                </div>
                <span className="text-2xl font-extrabold gradient-text-green tracking-tight">{b.stat}</span>
              </div>
              <h4 className="text-base font-bold mb-2">{b.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
