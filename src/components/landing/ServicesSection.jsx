import React from 'react';
import { motion } from "framer-motion";
import { BellRing, RefreshCw, Target, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: BellRing,
    title: "Never Miss Another Enquiry",
    subtitle: "Instant Enquiry Handling",
    description: "Your AI assistant responds to every property enquiry in under 10 seconds — 24/7, so no lead ever falls through the cracks.",
    features: ["Responds to new leads in under 10 seconds","Captures 100% of website, portal & SMS enquiries","Automatically qualifies buyers & sellers","Books appraisal calls directly into your calendar","Follows up instantly (even after hours)","Syncs with your CRM in real time"],
    gradient: "from-violet-500 to-purple-600"
  },
  {
    icon: RefreshCw,
    title: "Turn Old Leads Into New Listings",
    subtitle: "Database Reactivation",
    description: "Stop letting old leads go cold. Our AI automatically re-engages your database and turns forgotten contacts into booked appraisals.",
    features: ["Re-Engage 6–24 Month Old Enquiries","AI Detects Sellers Ready to Move","Automated, Personal Follow-Up","Books Appraisals Directly Into Your Calendar","Zero Manual Calling Required"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "More Appraisals. Automatically.",
    subtitle: "Calendar Automation",
    description: "Turn every seller enquiry into a booked appraisal without lifting a finger. Your pipeline stays full while you focus on winning listings.",
    features: ["Instant Response to Seller Enquiries","AI Qualifies & Prioritises Hot Leads","Automated Follow-Up Until They Book","Calendar-Integrated Valuation Scheduling","Consistent Weekly Appraisal Flow"],
    gradient: "from-emerald-500 to-teal-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for Real Estate Agents
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Who Want More Listings</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Three powerful AI systems working around the clock so you can focus on what you do best — closing deals.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group relative">
              <div className="h-full bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 p-8 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-8`}>
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-slate-500 uppercase tracking-wider">{service.subtitle}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{service.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-violet-400 font-medium group-hover:text-violet-300 transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
