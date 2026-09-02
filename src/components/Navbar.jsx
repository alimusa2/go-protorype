import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar({ onOpenQuoteModal, activeNav, setActiveNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, name) => {
    e.preventDefault();
    setActiveNav(name);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-5 py-2.5 ${
          scrolled
            ? 'bg-[#121212]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-emerald-950/20'
            : 'bg-[#121212]/50 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Left: Perfectly Fitted Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'Home')}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0 py-0.5"
        >
          <img
            src="/go logo.png"
            alt="GoArrow Logo"
            className="h-8 sm:h-9 max-h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </a>

        {/* Center Nav Links with Interactive Hover Bubble Effect */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#1a1a1a]/70 p-1.5 rounded-full border border-white/10 relative"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            const isHovered = hoveredNav === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.name)}
                onClick={(e) => handleNavClick(e, link.name)}
                className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {/* Hover Bubble Effect */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hoverBubble"
                    className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  />
                )}

                {/* Active Nav Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#1a7a4a] to-emerald-600 rounded-full border border-emerald-400/40 shadow-md shadow-emerald-950/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={() => onOpenQuoteModal('Partners & Technologies')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1a7a4a] to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-emerald-400/30"
          >
            <span>Partners & Technologies</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.name)}
                  className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                    activeNav === link.name
                      ? 'bg-emerald-800/60 text-white border border-emerald-500/40 font-bold'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal('Partners & Technologies');
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#1a7a4a] to-emerald-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
              >
                <span>Partners & Technologies</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
