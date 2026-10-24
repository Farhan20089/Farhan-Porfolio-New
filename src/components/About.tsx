import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Sparkles, Compass, UserCheck, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-electric-cyan" />,
  Code2: <Code2 className="w-5 h-5 text-electric-violet" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
  Compass: <Compass className="w-5 h-5 text-sky-400" />,
};

export const About: React.FC = () => {
  const { personal, about } = portfolioData;

  return (
    <section id="about" className="relative py-24 md:py-32 w-full overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric-violet/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-electric-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-electric-cyan/30 text-electric-cyan text-xs font-mono uppercase tracking-widest mb-4"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>01 // BIOGRAPHY &amp; VISION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Engineering With Passion &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
              AI Velocity
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Blending creative frontend aesthetics, solid web programming foundations, and contemporary AI-driven tooling to build delightful software.
          </motion.p>
        </div>

        {/* Main Content Grid: Bio Card + Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Intro Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric-violet/20 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-electric-violet to-electric-cyan p-[2px] shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full bg-space-950 rounded-[14px] flex items-center justify-center font-heading font-bold text-xl text-white">
                  {personal.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">{personal.name}</h3>
                <p className="text-xs font-mono text-electric-cyan">{personal.role}</p>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-white/[0.08] pt-6">
              {personal.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Links inside Card */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-electric-violet/20 hover:text-white text-slate-400 border border-white/[0.06] transition-colors"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-electric-cyan/20 hover:text-white text-slate-400 border border-white/[0.06] transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-purple-500/20 hover:text-white text-slate-400 border border-white/[0.06] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <span className="text-[11px] font-mono text-slate-400">
                STATUS: <span className="text-emerald-400 font-semibold">ACTIVE</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Philosophies & Metrics */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 4 Pillars of Development */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.philosophy.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="glass-panel glass-panel-hover rounded-xl p-5 relative overflow-hidden group"
                >
                  <div className="mb-3 p-2.5 rounded-lg bg-space-900/80 w-fit border border-white/[0.08] group-hover:border-electric-violet/40 transition-colors">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-electric-cyan" />}
                  </div>
                  <h4 className="font-heading font-semibold text-white text-base mb-1.5 group-hover:text-electric-cyan transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 glass-panel rounded-xl p-5 border border-white/[0.08]"
            >
              {about.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 mt-0.5">
                    {metric.label}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 font-mono">
                    {metric.sublabel}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
