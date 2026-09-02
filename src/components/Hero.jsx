import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';
import Radar from './Radar';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section id="hero" className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0a]">
      {/* Radar Animation Background with Website Emerald Palette */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none overflow-hidden flex items-center justify-center">
        <Radar
          speed={0.8}
          scale={0.55}
          ringCount={8}
          spokeCount={8}
          ringThickness={0.04}
          spokeThickness={0.008}
          sweepSpeed={0.9}
          sweepWidth={2.2}
          sweepLobes={1}
          color="#10b981"
          backgroundColor="#0a0a0a"
          falloff={2.0}
          brightness={0.85}
          enableMouseInteraction={true}
          mouseInfluence={0.15}
        />
      </div>

      {/* Dynamic Animated Line Grid with Pulsing Light Waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-line-grid opacity-30" />
        <div className="pulse-wave-h" />
        <div className="pulse-wave-v" style={{ animationDelay: '3s' }} />
      </div>

      {/* Decorative ambient radial green glows */}
      <div className="glow-blob glow-top-left" />
      <div className="glow-blob glow-center-right" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/40 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-lg shadow-emerald-950/40"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Next-Generation AI Agency</span>
        </motion.div>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans max-w-4xl"
        >
          Build Smarter, Faster <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-emerald-100 via-50% to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
            & Better with AI
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Dark / Outline Button */}
          <a
            href="#our-work"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#161616] hover:bg-[#202020] text-gray-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-emerald-500/50 shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Layers className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
            <span>Our Works</span>
          </a>

          {/* Solid Green Button */}
          <button
            onClick={() => onOpenQuoteModal('General AI Development Quote')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1a7a4a] via-emerald-600 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 border border-emerald-400/40 group"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
