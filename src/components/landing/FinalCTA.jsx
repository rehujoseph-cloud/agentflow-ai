import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/50 via-slate-950 to-slate-950" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-t from-violet-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 mb-10">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Live in 48 hours. No tech skills needed.</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Fill Your
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Calendar With Appraisals?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 200+ real estate agents already using AgentFlow AI to respond faster, book more appraisals, and close more listings — on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-violet-500/30 transition-all duration-300 hover:shadow-violet-500/50 hover:scale-105">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800/50 px-10 py-7 text-lg rounded-2xl backdrop-blur-sm">
              <MessageCircle className="mr-2 w-5 h-5" /> Chat with AI
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
            {["No tech skills required", "Live in 48 hours", "Pays for itself in one deal"].map(t => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
