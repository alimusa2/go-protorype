import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, ArrowUpRight } from 'lucide-react';

export default function FinalCta({ onOpenQuoteModal }) {
  const [isHovered, setIsHovered] = useState(false);

  const tickerText = "LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • ";

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-16 sm:py-20 bg-[#0a0a0a] overflow-hidden border-t border-white/5 cursor-pointer group"
      onClick={() => onOpenQuoteModal('General Inquiry')}
    >
      {/* Interactive Green Glow Circle */}
      <motion.div
        animate={{
          scale: isHovered ? 1 : 0.7,
          opacity: isHovered ? 0.8 : 0.15,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(26, 122, 74, 0.25) 50%, transparent 75%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Cube Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
            <Box className="w-5 h-5" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Thank you for your Interest in GoArrow.
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-sm sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-normal">
          We would love to hear from you and discuss how we can help bring your digital ideas to life.
        </p>

        {/* Quick Contact CTA Button */}
        <div className="mt-6">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600/90 text-white text-xs sm:text-sm font-semibold shadow-lg group-hover:bg-emerald-500 transition-colors">
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>

      {/* Ticker Marquee */}
      <div className="mt-12 sm:mt-16 relative overflow-hidden py-3 border-y border-white/10 bg-[#0d0d0d]/80 backdrop-blur-sm z-10">
        <div className="flex whitespace-nowrap min-w-full">
          <div className="flex shrink-0 animate-marquee text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-emerald-400 group-hover:from-emerald-300 group-hover:to-white transition-all duration-300 select-none">
            {tickerText}
          </div>
          <div className="flex shrink-0 animate-marquee text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-emerald-400 group-hover:from-emerald-300 group-hover:to-white transition-all duration-300 select-none">
            {tickerText}
          </div>
        </div>
      </div>
    </section>
  );
}
