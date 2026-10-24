import React from 'react';
import { ArrowUp, Mail, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-space-950 border-t border-white/[0.08] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-electric-violet to-electric-cyan p-[1px]">
                <div className="w-full h-full bg-space-950 rounded-[5px] flex items-center justify-center font-mono font-bold text-[10px] text-white">
                  FA
                </div>
              </div>
              <span className="font-heading font-bold text-white text-base tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400 font-mono">
              {personal.role}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-space-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-electric-violet/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-space-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-electric-cyan/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg bg-space-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-purple-400 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-space-900 border border-white/[0.08] text-slate-400 hover:text-electric-cyan hover:border-electric-cyan/40 transition-colors group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-300 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>Designed &amp; Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>using React, Three.js &amp; Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
            <span className="inline-flex items-center gap-1 text-electric-cyan">
              <Sparkles className="w-3 h-3" />
              <span>AI-Assisted Workflow</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
