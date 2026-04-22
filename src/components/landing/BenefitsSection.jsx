import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Shield, Zap, BarChart3 } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "More Appraisals Booked", stat: "+32%", description: "Average increase in booked appraisals within the first 30 days" },
  { icon: Clock, title: "Hours Saved Per Week", stat: "15+", description: "Stop chasing leads manually — your AI handles it all" },
  { icon: Users, title: "Zero Leads Missed", stat: "100%", description: "Every enquiry gets an instant response, even at 2am on weekends" },
  { icon: Shield, title: "Your Brand Voice", stat: "Custom", description: "AI trained to sound exactly like you — professional and on-brand" },
  { icon: Zap, title: "10-Second Response", stat: "<10s", description: "Beat every competitor to the reply and win more listings" },
  { icon: BarChart3, title: "Pipeline Visibility", stat: "Live", description: "See every lead, follow-up, and booked appointment in one dashboard" }
];

export default function BenefitsSection() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Losing Deals
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">To Slow Follow-Up</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">The agents winning more listings aren't working harder — they're responding faster. Here's what AgentFlow AI delivers.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
              <div className="h-full bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{benefit.stat}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
