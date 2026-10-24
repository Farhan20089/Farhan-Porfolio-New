import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Smooth springs for fluid mouse follow
  const cursorX = useSpring(-100, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(-100, { damping: 28, stiffness: 350 });
  const auraX = useSpring(-100, { damping: 20, stiffness: 180 });
  const auraY = useSpring(-100, { damping: 20, stiffness: 180 });

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasPointer);

    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      auraX.set(e.clientX);
      auraY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .interactive-target')
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [cursorX, cursorY, auraX, auraY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer Glowing Aura */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.8 : 1,
          opacity: isHovered ? 0.8 : 0.45,
          borderColor: isHovered ? '#22d3ee' : '#8b5cf6',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'rgba(139, 92, 246, 0.08)',
        }}
        transition={{ duration: 0.15 }}
        className="w-9 h-9 rounded-full border border-electric-violet/50 backdrop-blur-[1px] shadow-[0_0_15px_rgba(139,92,246,0.3)]"
      />

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_8px_#22d3ee]"
      />
    </div>
  );
};
