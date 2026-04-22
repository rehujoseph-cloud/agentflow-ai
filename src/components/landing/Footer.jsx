import React from 'react';
import { Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API Docs", "Changelog"],
  Company: ["About", "Careers", "Blog", "Press Kit", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Templates", "Webinars"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR", "Cookie Policy"]
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-lg">🏠</div>
              <span className="text-xl font-bold text-white">AgentFlow AI</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-xs">AI automation built specifically for real estate agents. More appraisals, more listings, less manual work.</p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}><a href="#" className="text-slate-400 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 AgentFlow AI. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
