import React from 'react'

const plans = [
  {
    badge: '🔒 Early Access Price',
    name: 'Lead Capture System',
    desc: 'Never miss another lead again.',
    oldPrice: '$997/month',
    price: '497',
    note: 'Limited to first 10 clients. Price increases to $997/month after launch. $0 setup.',
    features: [
      '24/7 AI chatbot that instantly responds to enquiries',
      'Lead capture form (name, phone, email, intent, budget)',
      'Instant SMS alerts to agent when leads submit',
      'AI lead scoring (1–100 based on intent & budget)',
      'Live dashboard showing all leads in real-time',
      'Multi-channel capture (website, SMS, Facebook)',
      'Source tracking for every lead',
    ],
    cta: 'Lock In Early Rate →',
    ctaStyle: 'outline',
    featured: false,
  },
  {
    badge: '★ Most Popular Plan',
    name: 'Client Conversion System',
    desc: 'Turn more leads into booked calls & paying clients.',
    oldPrice: '$3,500–$3,900 once-off',
    price: '1,997',
    note: 'Everything in Lead Capture, plus:',
    features: [
      'Everything in Lead Capture',
      'Automated SMS & email follow-ups',
      'Booking system (fills your calendar automatically)',
      'Lead nurturing sequences',
      'CRM & pipeline automation',
      'Missed lead recovery system',
    ],
    cta: 'Book a Demo →',
    ctaStyle: 'filled',
    featured: true,
  },
  {
    badge: null,
    name: 'Revenue Engine',
    desc: 'Scale your revenue with a fully automated AI system.',
    oldPrice: '$10k+ setup elsewhere',
    price: '3,500',
    note: '$10 setup',
    features: [
      'Everything in Tier 1 & Tier 2',
      'AI voice assistant handling inbound calls 24/7',
      'Outbound AI calling for unresponsive leads',
      'Custom-built workflows for your business',
      'A/B testing & conversion optimisation',
      'Monthly strategy calls & performance reviews',
      'White-label branding option',
      'Priority support & dedicated account manager',
    ],
    cta: 'Contact Sales →',
    ctaStyle: 'outline',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-bg2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-purple/12 border border-purple/25 text-purple-pale text-xs font-medium px-4 py-1.5 rounded-full mb-5">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Investment That<br />
            <span className="gradient-text-purple">Pays for Itself</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map(p => (
            <div
              key={p.name}
              className={`relative bg-surface rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? 'border-2 border-purple/40 shadow-lg shadow-purple/10'
                  : 'border border-white/6 hover:border-white/10'
              }`}
            >
              {p.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-4 py-1.5 rounded-full ${
                  p.featured
                    ? 'bg-gradient-to-r from-purple to-purple-light text-white'
                    : 'bg-surface2 border border-white/12 text-purple-pale'
                }`}>
                  {p.badge}
                </div>
              )}

              <div className={p.badge ? 'mt-4' : ''}>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-faint mb-4 leading-snug">{p.desc}</p>

                <div className="text-sm text-faint line-through mb-1">{p.oldPrice}</div>
                <div className="flex items-start gap-1 mb-1">
                  <span className="text-base text-muted mt-2 font-medium">$</span>
                  <span className="text-5xl font-black tracking-tight leading-none">{p.price}</span>
                  <span className="text-sm text-faint self-end mb-1.5">/month</span>
                </div>
                <p className="text-xs text-faint mb-6 leading-relaxed">{p.note}</p>
              </div>

              <hr className="border-white/6 mb-5" />

              <ul className="space-y-3 mb-7">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="text-green-light mt-0.5 flex-shrink-0 text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                  p.ctaStyle === 'filled'
                    ? 'bg-purple hover:bg-purple-light text-white glow-purple hover:-translate-y-0.5'
                    : 'border border-white/12 hover:border-purple/40 text-white hover:text-purple-pale'
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-faint mt-8">
          Need a custom solution?{' '}
          <button className="text-purple-pale hover:text-white transition-colors underline underline-offset-2">
            Contact our sales team.
          </button>
        </p>
      </div>
    </section>
  )
}
