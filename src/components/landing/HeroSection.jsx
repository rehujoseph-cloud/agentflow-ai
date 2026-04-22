import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import VSLPlayer from "@/components/landing/VSLPlayer";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b10_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b10_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 200+ real estate agents across Australia</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Turn Property Enquiries Into
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Appointments Automatically
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Turn property enquiries into booked appraisals automatically. Our AI assistant responds in seconds, qualifies leads, and fills your calendar 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-105">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800/50 px-8 py-6 text-lg rounded-xl backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>

            <div className="flex gap-12 mt-14 pt-8 border-t border-slate-800">
              {[
                { value: "+32%", label: "More Appraisals" },
                { value: "10s", label: "Response Time" },
                { value: "100%", label: "Lead Capture" },
                { value: "6-Fig", label: "Pipeline" }
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative hidden lg:block" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="relative">
              <VSLPlayer />

              <div className="flex gap-2 mt-4">
                {[
                  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=200&h=120&fit=crop", label: "Booked ✓" },
                  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&h=120&fit=crop", label: "Booked ✓" },
                  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=120&fit=crop", label: "Pending..." }
                ].map((item, i) => (
                  <div key={i} className="flex-1 rounded-xl overflow-hidden border border-slate-700/50 relative">
                    <img src={item.src} alt="Property" className="w-full h-16 object-cover opacity-70" />
                    <div className="absolute bottom-1 left-2 text-xs text-white font-medium bg-black/40 px-1.5 py-0.5 rounded">{item.label}</div>
                  </div>
                ))}
              </div>

              <motion.div className="absolute -top-6 -right-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">+127 Leads</div>
                    <div className="text-slate-500 text-xs">This week</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="absolute -bottom-4 -left-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">98% Satisfied</div>
                    <div className="text-slate-500 text-xs">Customer rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
