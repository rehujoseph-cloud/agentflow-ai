import React from 'react'

const brands = [
  { letter: 'R', name: 'Ray White' },
  { letter: 'L', name: 'LJ Hooker' },
  { letter: 'M', name: 'McGrath' },
  { letter: 'H', name: 'Harcourts' },
  { letter: 'B', name: 'Barry Plant' },
  { letter: 'J', name: 'Jellis Craig' },
]

const testimonials = [
  {
    stars: 5,
    text: '"I used to lose leads because I couldn\'t respond fast enough. Now my AI assistant replies instantly at 11pm and I wake up to booked appraisals. Game changer."',
    name: 'Jason Mercer',
    role: 'Principal Agent, Ray White Brisbane',
    avatar: 'J',
    color: 'bg-purple',
  },
  {
    stars: 5,
    text: '"Within 3 weeks of going live, I had 11 extra appraisals booked that I would have missed. It literally pays for itself in one deal."',
    name: 'Melissa Hart',
    role: 'Senior Sales Agent, McGrath Sydney',
    avatar: 'M',
    color: 'bg-purple-light',
  },
  {
    stars: 5,
    text: '"My database was sitting there doing nothing. The AI follow-up system reactivated 40 old leads and booked 6 appraisals in the first month."',
    name: 'Chris Nguyen',
    role: 'Real Estate Agent, Harcourts Melbourne',
    avatar: 'C',
    color: 'bg-blue-600',
  },
]

export default function SocialProof() {
  return (
    <section className="border-t border-white/6">
      {/* Logos */}
      <div className="border-b border-white/6 py-10 px-6 text-center">
        <p className="text-xs text-faint tracking-widest uppercase mb-6">
          Trusted by top real estate agents across Australia
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {brands.map(b => (
            <div
              key={b.name}
              className="flex items-center gap-2 bg-surface border border-white/6 rounded-lg px-4 py-2.5 hover:border-white/12 transition-colors"
            >
              <div className="w-6 h-6 rounded bg-purple/20 text-purple-pale text-xs font-bold flex items-center justify-center">
                {b.letter}
              </div>
              <span className="text-sm text-muted font-medium">{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="bg-surface border border-white/6 rounded-2xl p-6 hover:border-white/10 transition-colors"
            >
              <div className="text-yellow-400 text-base mb-4 tracking-widest">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-faint">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
