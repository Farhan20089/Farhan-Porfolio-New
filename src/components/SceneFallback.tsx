import React from 'react';
import { motion } from 'framer-motion';

export const SceneFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      {/* Background ambient glow circles */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-electric-violet/20 blur-3xl animate-pulse-slow" />
      <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full bg-electric-cyan/15 blur-2xl translate-x-12 -translate-y-8" />

      {/* Futuristic 3D geometric illustration */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative w-64 h-64 md:w-88 md:h-88 flex items-center justify-center"
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-electric-violet/30 border-dashed animate-spin-slow" />
        
        {/* Secondary tilted ring */}
        <div 
          className="absolute inset-4 rounded-full border border-electric-cyan/40"
          style={{ transform: 'rotateX(60deg) rotateY(15deg)' }}
        />

        {/* Third counter-rotating ring */}
        <div 
          className="absolute inset-10 rounded-full border border-electric-sky/30 border-dotted"
          style={{ transform: 'rotateX(-45deg) rotateY(35deg)' }}
        />

        {/* Central glowing crystalline core */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-electric-violet/60 via-purple-700/50 to-electric-cyan/60 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(139,92,246,0.6)] transform rotate-45 flex items-center justify-center">
          <div className="w-14 h-14 rounded-lg bg-white/10 border border-white/30 backdrop-blur-md transform -rotate-12" />
        </div>
      </motion.div>
    </div>
  );
};
