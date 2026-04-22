import React from 'react';
import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  { number: "01", icon: Lightbulb, title: "We Set It Up For You", description: "We handle everything — connecting your enquiry sources, building your AI assistant, and syncing it to your calendar. You don't touch a thing.", colorClass: "violet" },
  { number: "02", icon: Wrench, title: "AI Goes Live in 48hrs", description: "Your AI starts responding to leads instantly, qualifying buyers and sellers, and booking appraisals — all in your brand voice.", colorClass: "blue" },
  { number: "03", icon: Rocket, title: "You Close More Deals", description: "Wake up to a full calendar. Focus on listing presentations and negotiations while the AI handles the rest 24/7.", colorClass: "emerald" }
];

const colorMap = {
  violet: { icon: 'bg-violet-500/10 border-violet-500/20', iconColor: 'text-violet-400', dot: 'bg-violet-500', num: 'text-violet-400' },
  blue: { icon: 'bg-blue-500/10 border-blue-500/20', iconColor: 'text-blue-400', dot: 'bg-blue-500', num: 'text-blue-400' },
  emerald: { icon: 'bg-emerald-500/10 border-emerald-500/20', iconColor: 'text-emerald-400', dot: 'bg-emerald-500', num: 'text-emerald-400' },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b08_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b08_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Up and Running
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">In 48 Hours</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">No tech skills needed. We do the full setup and you start booking more appraisals within days, not months.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-emerald-500/20 -translate-y-1/2" />
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const colors = colorMap[step.colorClass];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 hover:border-slate-600 transition-all duration-500">
                    <div className="flex items-center justify-between mb-8">
                      <span className={`text-6xl font-bold ${colors.num} opacity-30`}>{step.number}</span>
                      <div className={`w-14 h-14 rounded-2xl border ${colors.icon} flex items-center justify-center`}>
                        <step.icon className={`w-7 h-7 ${colors.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                  <div className={`hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 items-center justify-center`}>
                    <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
