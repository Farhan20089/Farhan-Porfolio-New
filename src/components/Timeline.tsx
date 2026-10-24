import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { portfolioData, type TimelineItem } from '../data/portfolio';

export const Timeline: React.FC = () => {
  const { timeline } = portfolioData;

  const getStatusBadge = (status: TimelineItem['status']) => {
    switch (status) {
      case 'Current':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40">
            <Clock className="w-3 h-3 animate-spin" />
            <span>CURRENT FOCUS</span>
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>MILESTONE</span>
          </span>
        );
      case 'Future Goal':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Sparkles className="w-3 h-3" />
            <span>FUTURE GOAL</span>
          </span>
        );
    }
  };

  return (
    <section id="timeline" className="relative py-24 md:py-32 w-full overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-electric-violet/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-electric-cyan/30 text-electric-cyan text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>05 // EVOLUTION &amp; ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Learning Journey &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
              Milestones
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            A transparent overview of completed learning phases, current technical explorations, and where I am heading as an aspiring creative technologist.
          </motion.p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central glowing line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-electric-violet via-electric-cyan to-purple-800 opacity-40" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node on Line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-space-950 border-2 border-electric-cyan shadow-[0_0_12px_#06b6d4] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-violet" />
                    </div>
                  </div>

                  {/* Spacer for Alternate Column */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative group border border-white/[0.08]">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        {getStatusBadge(item.status)}
                        <span className="text-xs font-mono text-slate-400">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-white text-lg sm:text-xl group-hover:text-electric-cyan transition-colors">
                        {item.title}
                      </h3>

                      {item.organization && (
                        <p className="text-xs font-mono text-electric-violet mt-1">
                          {item.organization}
                        </p>
                      )}

                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tech Tags */}
                      <div
                        className={`mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-950/80 text-slate-300 border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
