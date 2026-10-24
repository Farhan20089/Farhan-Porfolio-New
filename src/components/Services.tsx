import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Sparkles, Cpu, Layers, Wrench, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const serviceIcons: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6 text-electric-cyan" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Cpu: <Cpu className="w-6 h-6 text-electric-violet" />,
  Layers: <Layers className="w-6 h-6 text-sky-400" />,
  Wrench: <Wrench className="w-6 h-6 text-pink-400" />,
};

export const Services: React.FC = () => {
  const { services } = portfolioData;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 md:py-32 w-full overflow-hidden bg-space-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-electric-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-electric-violet/30 text-electric-violet text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // SERVICES &amp; SOLUTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            What I Can Build &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
              Collaborate On
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            From mobile-responsive landing pages to interactive prototypes and visual modernization, here are the services I offer and actively develop.
          </motion.p>
        </div>

        {/* Services Grid (5 editable service cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between group overflow-hidden border border-white/[0.08]"
            >
              {/* Corner Glow Highlight */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-electric-violet/15 to-transparent rounded-bl-full pointer-events-none group-hover:from-electric-cyan/20 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-space-950/80 border border-white/[0.08] shadow-inner group-hover:border-electric-cyan/40 transition-colors">
                    {serviceIcons[service.icon] || <Sparkles className="w-6 h-6 text-electric-cyan" />}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-electric-cyan border border-white/[0.08]">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-lg sm:text-xl group-hover:text-electric-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-2">
                    Scope of Deliverables:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-electric-violet shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-electric-violet/15 text-slate-300 hover:text-white border border-white/[0.08] hover:border-electric-violet/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 group/btn"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-electric-cyan transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
