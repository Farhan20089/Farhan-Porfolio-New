import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../data/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Gentle 3D perspective tilt
    setRotateX(-yPct * 12);
    setRotateY(xPct * 12);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const isConcept = project.status === 'Concept';

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border border-white/[0.08] group relative transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)]"
      >
        {/* Glowing border highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-electric-violet/10 via-transparent to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Thumbnail Preview */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-space-950">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-black/20" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-space-950/80 text-electric-cyan border border-white/10 backdrop-blur-md">
              {project.category}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                isConcept
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between relative z-10">
          <div>
            <h3 className="font-heading font-bold text-white text-lg sm:text-xl group-hover:text-electric-cyan transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-950/90 text-slate-300 border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Card Controls */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-electric-cyan transition-colors group/btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-electric-violet group-hover/btn:rotate-12 transition-transform" />
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
