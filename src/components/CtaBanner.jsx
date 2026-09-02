import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenQuoteModal }) {
  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-gradient-to-br from-[#121212] via-[#161616] to-[#0a1f14] border border-white/10 p-7 sm:p-10 lg:p-12 overflow-hidden shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative 3D Glossy Green Sphere & Faceted Shape */}
          <div className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 pointer-events-none z-0 opacity-80 sm:opacity-100">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                <polygon points="100,10 170,60 170,140 100,190 30,140 30,60" fill="none" stroke="#10b981" strokeWidth="2" />
                <polygon points="100,10 170,140 30,60" fill="rgba(16, 185, 129, 0.1)" stroke="#1a7a4a" strokeWidth="1.5" />
                <polygon points="170,60 30,140 100,190" fill="rgba(26, 122, 74, 0.15)" stroke="#10b981" strokeWidth="1.5" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #34d399 0%, #10b981 25%, #1a7a4a 55%, #064e3b 80%, #022c22 100%)',
                boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.8), 0 20px 50px rgba(16,185,129,0.3)'
              }}
            >
              <div className="absolute top-6 left-10 w-24 h-16 rounded-full bg-white/40 blur-md transform -rotate-45" />
              <div className="absolute top-10 left-16 w-8 h-8 rounded-full bg-white/70 blur-sm" />
            </motion.div>
          </div>

          {/* Banner Text Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
              READY TO TRANSFORM <br />
              <span className="bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                YOUR BUSINESS?
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-300 flex items-center gap-2 font-normal">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>30-min free consultation with AI solutions expert</span>
            </p>

            <div className="mt-6">
              <button
                onClick={() => onOpenQuoteModal('30-Min Free AI Consultation')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1a7a4a] via-emerald-600 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/80 hover:shadow-emerald-600/40 hover:scale-[1.03] active:scale-95 transition-all duration-200 inline-flex items-center gap-2 border border-emerald-400/40 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
