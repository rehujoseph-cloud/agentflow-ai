import React from 'react'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'API Docs', 'Changelog'],
  Company: ['About', 'Careers', 'Blog', 'Press Kit', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'Webinars'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-bg px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple to-purple-light flex items-center justify-center text-sm">
                🏠
              </div>
              <span className="font-bold text-lg text-white">AgentFlow AI</span>
            </div>
            <p className="text-sm text-faint leading-relaxed max-w-xs mb-6">
              AI automation built specifically for real estate agents. More appraisals, more listings, less manual work.
            </p>
            <div className="flex gap-2">
              {['𝕏', 'in', '▷'].map(icon => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-lg bg-surface border border-white/6 hover:border-white/12 flex items-center justify-center text-faint hover:text-muted text-xs transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-sm font-semibold text-white mb-4">{col}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-faint hover:text-muted transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs text-faint">© 2024 AgentFlow AI. All rights reserved.</span>
          <div className="flex items-center gap-2 text-xs text-faint">
            <span className="w-2 h-2 rounded-full bg-green-light inline-block" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
