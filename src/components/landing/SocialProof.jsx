import React from 'react';
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const logos = [
  { name: "Ray White", letter: "R" },
  { name: "LJ Hooker", letter: "L" },
  { name: "McGrath", letter: "M" },
  { name: "Harcourts", letter: "H" },
  { name: "Barry Plant", letter: "B" },
  { name: "Jellis Craig", letter: "J" },
];

const testimonials = [
  {
    quote: "I used to lose leads because I couldn't respond fast enough. Now my AI assistant replies instantly at 11pm and I wake up to booked appraisals. Game changer.",
    author: "Jason Mercer", role: "Principal Agent", company: "Ray White Brisbane", avatar: "J"
  },
  {
    quote: "Within 3 weeks of going live, I had 11 extra appraisals booked that I would have missed. It literally pays for itself in one deal.",
    author: "Melissa Hart", role: "Senior Sales Agent", company: "McGrath Sydney", avatar: "M"
  },
  {
    quote: "My database was sitting there doing nothing. The AI follow-up system reactivated 40 old leads and booked 6 appraisals in the first month.",
    author: "Chris Nguyen", role: "Real Estate Agent", company: "Harcourts Melbourne", avatar: "C"
  }
];

export default function SocialProof() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-10">Trusted by top real estate agents across Australia</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center font-bold text-lg">{logo.letter}</div>
                  <span className="font-semibold text-lg">{logo.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="h-full bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 p-8 hover:border-violet-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold">{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{t.author}</div>
                    <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
