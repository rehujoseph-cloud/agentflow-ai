import React from 'react'

const services = [
  {
    icon: '🔔',
    iconBg: 'bg-purple/12 border-purple/20',
    tag: 'Instant Enquiry Handling',
    title: 'Never Miss Another Enquiry',
    desc: 'Your AI assistant responds to every property enquiry in under 10 seconds — 24/7, so no lead ever falls through the cracks.',
    features: [
      'Responds to new leads in under 10 seconds',
      'Captures 100% of website, portal & SMS enquiries',
      'Automatically qualifies buyers & sellers',
      'Books appraisal calls directly into your calendar',
      'Follows up instantly (even after hours)',
      'Syncs with your CRM in real time',
    ],
  },
  {
    icon: '🔄',
    iconBg: 'bg-cyan-dark/10 border-cyan-dark/18',
    tag: 'Database Reactivation',
    title: 'Turn Old Leads Into New Listings',
    desc: 'Stop letting old leads go cold. Our AI automatically re-engages your database and turns forgotten contacts into booked appraisals.',
    features: [
      'Re-Engage 6–24 Month Old Enquiries',
      'AI Detects Sellers Ready to Move',
      'Automated, Personal Follow-Up',
      'Books Appraisals Directly Into Your Calendar',
      'Zero Manual Calling Required',
    ],
  },
  {
    icon: '🎯',
    iconBg: 'bg-green/10 border-green/18',
    tag: 'Calendar Automation',
    title: 'More Appraisals. Automatically.',
    desc: 'Turn every seller enquiry into a booked appraisal without lifting a finger. Your pipeline stays full while you focus on winning listings.',
    features: [
      'Instant Response to Seller Enquiries',
      'AI Qualifies & Prioritises Hot Leads',
      'Automated Follow-Up Until They Book',
      'Calendar-Integrated Valuation Scheduling',
      'Consistent Weekly Appraisal Flow',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-purple/12 border border-purple/25 text-purple-pale text-xs font-medium px-4 py-1.5 rounded-full mb-5">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Built for Real Estate Agents<br />
            <span className="gradient-text-purple">Who Want More Listings</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            Three powerful AI systems working around the clock so you can focus on what you do best — closing deals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-surface border border-white/6 rounded-2xl p-7 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-xl border ${s.iconBg} flex items-center justify-center text-2xl mb-5`}>
                {s.icon}
              </div>
              <p className="text-xs text-faint tracking-widest uppercase mb-2 font-medium">{s.tag}</p>
              <h3 className="text-xl font-bold mb-3 leading-tight">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2.5">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-purple-pale mt-0.5 flex-shrink-0">•</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-sm text-purple-pale hover:text-white flex items-center gap-1 transition-colors group-hover:gap-2">
                Learn more <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
