import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { useActiveSection } from './hooks/useActiveSection';

export const App: React.FC = () => {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
  const activeSection = useActiveSection(sectionIds, 250);

  // Top page scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animated intro loading state for initial load polish
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 selection:bg-electric-violet/30 selection:text-white">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-electric-violet via-purple-400 to-electric-cyan z-50 origin-left shadow-[0_0_10px_#06b6d4]"
        style={{ scaleX }}
      />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Main Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
