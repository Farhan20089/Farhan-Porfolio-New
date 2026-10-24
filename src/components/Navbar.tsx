import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 text-white font-heading font-semibold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet rounded-lg p-1"
          aria-label="Back to home"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-electric-violet to-electric-cyan p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-space-950 rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
                FA
              </span>
            </div>
          </div>
          <span className="text-sm font-medium tracking-wide">
            {portfolioData.personal.name}
            <span className="text-electric-cyan ml-1 inline-block animate-pulse">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-space-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06] shadow-inner" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-electric-violet/30 to-electric-cyan/20 border border-electric-violet/40 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full overflow-hidden transition-all duration-300 border border-electric-violet/40 hover:border-electric-cyan/60 bg-electric-violet/10 hover:bg-electric-violet/20 text-slate-100 hover:text-white shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan"
          >
            <Sparkles className="w-3.5 h-3.5 text-electric-cyan transition-transform group-hover:rotate-12" />
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-electric-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-space-900/60 border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-electric-violet"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-space-950/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-electric-violet/15 text-white border border-electric-violet/30'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_8px_#06b6d4]" />}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-sm font-medium shadow-md shadow-electric-violet/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let's Connect</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
