import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Check, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isConcept = project.status === 'Concept';
  const hasValidDemo = project.demoUrl && project.demoUrl !== '#';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-space-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel bg-space-900/95 border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-space-950/70 border border-white/10 text-slate-400 hover:text-white hover:bg-space-900 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-violet"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-space-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-space-950/90 text-electric-cyan border border-electric-cyan/30 backdrop-blur-md">
                {project.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                  isConcept
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Highlights Note */}
            <div className="p-4 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-electric-violet shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Key Innovation: </span>
                {project.highlights}
              </div>
            </div>

            {/* Core Features */}
            <div>
              <h3 className="font-heading font-semibold text-white text-base mb-3">
                Key Features &amp; Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
                  >
                    <Check className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-heading font-semibold text-white text-base mb-3">
                Technologies &amp; Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-space-950 text-xs font-mono text-slate-300 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
              {hasValidDemo ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-xs font-semibold shadow-md flex items-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-space-950/80 border border-white/10 text-xs text-slate-400 font-mono">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>{isConcept ? 'Design Concept // Prototype View' : 'Demo Link on Request'}</span>
                </div>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold border border-white/10 flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
