import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Zap,
  Layers,
  GitBranch,
  Terminal,
  Bot,
  Sparkles,
  Layout,
  Smartphone,
  CheckCircle2,
  Boxes
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData, type SkillItem } from '../data/portfolio';

const iconComponents: Record<string, React.ReactNode> = {
  FileCode2: <FileCode2 className="w-5 h-5 text-amber-400" />,
  Palette: <Palette className="w-5 h-5 text-sky-400" />,
  Zap: <Zap className="w-5 h-5 text-yellow-300" />,
  Layers: <Layers className="w-5 h-5 text-electric-cyan" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
  Github: <GithubIcon className="w-5 h-5 text-slate-100" />,
  Terminal: <Terminal className="w-5 h-5 text-blue-400" />,
  Bot: <Bot className="w-5 h-5 text-electric-violet" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-300" />,
  Layout: <Layout className="w-5 h-5 text-pink-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
};

type TabType = 'all' | 'frontend' | 'tools' | 'workflow';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const { skills } = portfolioData;

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend Core' },
    { id: 'tools', label: 'Development Tools' },
    { id: 'workflow', label: 'Creative & AI Workflow' },
  ];

  const getFilteredSkills = (): { item: SkillItem; category: string }[] => {
    const list: { item: SkillItem; category: string }[] = [];
    if (activeTab === 'all' || activeTab === 'frontend') {
      skills.frontend.forEach((s) => list.push({ item: s, category: 'Frontend' }));
    }
    if (activeTab === 'all' || activeTab === 'tools') {
      skills.tools.forEach((s) => list.push({ item: s, category: 'Dev Tools' }));
    }
    if (activeTab === 'all' || activeTab === 'workflow') {
      skills.creativeWorkflow.forEach((s) => list.push({ item: s, category: 'AI & Workflow' }));
    }
    return list;
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className="relative py-24 md:py-32 w-full overflow-hidden bg-space-950/60">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-electric-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-electric-violet/30 text-electric-violet text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Skills, Tools &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
              Modern Workflow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Focused strictly on technologies I actively code with, learn, and use daily to build functional digital products. No arbitrary percentages — only demonstrated skills.
          </motion.p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-electric-violet to-electric-cyan text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'bg-space-900/60 text-slate-400 hover:text-white border-white/[0.08] hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {currentSkills.map(({ item, category }) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel glass-panel-hover rounded-xl p-5 relative group flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/5 via-transparent to-electric-cyan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-space-950/80 border border-white/[0.08] group-hover:border-electric-cyan/40 transition-colors shadow-inner">
                      {iconComponents[item.icon] || <Sparkles className="w-5 h-5 text-electric-cyan" />}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-white text-base group-hover:text-electric-cyan transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-electric-violet">
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan" />
                    <span>{item.level}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
