import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Lead Capture System", badge: "Early Adopter Rate", price: "$497", originalPrice: "$997", period: "/month",
    priceNote: "Limited to first 10 clients. Price increases to $997/month after launch period.",
    description: "Never miss another lead again", setup: "$0 setup",
    features: ["24/7 AI chatbot that instantly responds to enquiries","Lead capture form (name, phone, email, intent, budget)","Instant SMS alerts to agent when leads submit","AI lead scoring (1-100 based on intent & budget)","Live dashboard showing all leads in real-time","Multi-channel capture (website, SMS, Facebook)","Source tracking for every lead"],
    cta: "Lock In Early Rate", popular: false
  },
  {
    name: "Client Conversion System", badge: "Most Popular", price: "$1,997", period: "/month",
    description: "Turn more leads into booked calls & paying clients", setup: "$500–$1,000 setup",
    features: ["Everything in Lead Capture","Automated SMS & email follow-ups","Booking system (fills your calendar automatically)","Lead nurturing sequences","CRM & pipeline automation","Missed lead recovery system"],
    cta: "Book a Demo", popular: true
  },
  {
    name: "Revenue Engine", price: "$3,500", period: "/month",
    description: "Scale your revenue with a fully automated AI system", setup: "$500 setup",
    features: ["Everything in Tier 1 & Tier 2","AI voice assistant handling inbound calls 24/7","Outbound AI calling for unresponsive leads","Custom-built workflows for your business","A/B testing & conversion optimization","Monthly strategy calls & performance reviews","White-label branding option","Priority support & dedicated account manager"],
    bestFor: "Businesses ready to scale fast and automate client acquisition",
    cta: "Contact Sales", popular: false, highlight: true
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b05_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b05_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment That
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Pays for Itself</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Transparent pricing with no hidden fees. Choose the plan that fits your business needs.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`relative ${plan.popular || plan.badge ? 'lg:-mt-4 lg:mb-4' : ''}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white text-sm font-medium flex items-center gap-2 whitespace-nowrap z-10">
                  <Sparkles className="w-4 h-4" />{plan.badge}
                </div>
              )}
              <div className={`h-full rounded-3xl p-8 ${plan.popular || plan.highlight ? 'bg-gradient-to-b from-violet-600/20 to-slate-900/90 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20' : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600'} backdrop-blur-sm transition-all duration-500`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>
                <div className="mb-8">
                  {plan.originalPrice && <span className="text-xl text-slate-500 line-through mr-2">{plan.originalPrice}/month</span>}
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  {plan.priceNote && <p className="text-violet-400 text-xs mt-2 leading-relaxed">{plan.priceNote}</p>}
                  {plan.setup && <p className="text-slate-500 text-sm mt-1">{plan.setup}</p>}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular || plan.highlight ? 'bg-violet-500/20' : 'bg-slate-700/50'}`}>
                        <Check className={`w-3 h-3 ${plan.popular || plan.highlight ? 'text-violet-400' : 'text-slate-400'}`} />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.bestFor && <p className="text-slate-400 text-sm mb-6"><span className="text-slate-300 font-medium">Best for: </span>{plan.bestFor}</p>}
                <Button className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${plan.popular || plan.highlight ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                  {plan.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-slate-500 mt-12">
          Need a custom solution? <a href="#" className="text-violet-400 hover:text-violet-300 underline underline-offset-4">Contact our sales team</a>
        </motion.p>
      </div>
    </section>
  );
}
