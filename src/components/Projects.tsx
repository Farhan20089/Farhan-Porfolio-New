import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import { portfolioData, type ProjectItem } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const { projects } = portfolioData;

  const categories = ['All', 'Web App', 'Frontend', 'Concept', 'Database', '3D Experience'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-electric-cyan/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-electric-cyan/30 text-electric-cyan text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>03 // PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Featured Projects &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
              Digital Concepts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Explore a curated selection of educational web applications, corporate digital concepts, structured database architectures, and interactive 3D experiments.
          </motion.p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-electric-violet to-electric-cyan text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'bg-space-900/60 text-slate-400 hover:text-white border-white/[0.08] hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={(p) => setActiveModalProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Customization Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-slate-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-electric-cyan" />
            <span>All projects are easily customizable in <code className="text-electric-violet">src/data/portfolio.ts</code></span>
          </div>
        </div>
      </div>

      {/* Modal Detail Window */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
