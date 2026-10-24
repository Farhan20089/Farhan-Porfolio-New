import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Send, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Scene3D } from './Scene3D';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-16 md:py-28 overflow-hidden"
    >
      {/* Background Lighting & Grid Architecture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-electric-violet/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[350px] md:w-[500px] h-[350px] bg-electric-cyan/10 blur-[120px] rounded-full" />

        {/* Subtle cyber background grid */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Gradient edge masks */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-space-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-space-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/80 border border-electric-violet/30 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-electric-cyan animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-slate-200 font-semibold uppercase">
              {personal.badge}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/60 border border-emerald-500/30 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-300">
              {personal.availability}
            </span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-100 leading-[1.12]"
        >
          Turning Ideas Into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet via-purple-300 to-electric-cyan text-glow-violet">
            Digital Experiences.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-center text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed"
        >
          {personal.subheadline}
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-sm font-semibold shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <FolderGit2 className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Explore My Work</span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-space-900/80 hover:bg-space-850 text-slate-200 hover:text-white text-sm font-semibold border border-white/10 hover:border-electric-violet/50 backdrop-blur-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <Send className="w-4 h-4 text-electric-cyan transition-transform group-hover:translate-x-0.5" />
            <span>Let's Connect</span>
          </button>
        </motion.div>

        {/* 3D Interactive Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="w-full max-w-4xl mt-4 sm:mt-6 relative"
        >
          {/* Subtle frame hints */}
          <div className="absolute top-2 left-4 text-[10px] font-mono text-slate-500 hidden sm:flex items-center gap-1.5 select-none pointer-events-none">
            <Terminal className="w-3 h-3 text-electric-violet" />
            <span>INTERACTIVE_3D_VIEWPORT // ROTATE WITH POINTER</span>
          </div>

          <Scene3D />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-2 flex flex-col items-center gap-2 select-none"
        >
          <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            Scroll to explore
          </span>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-electric-cyan hover:border-electric-cyan/40 transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
