import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, LayoutDashboard, TrendingUp, Zap, Smartphone, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { servicesData } from '../data/siteData';

const iconMap = {
  Cpu: Cpu,
  Sparkles: Sparkles,
  LayoutDashboard: LayoutDashboard,
  TrendingUp: TrendingUp,
  Zap: Zap,
  Smartphone: Smartphone,
};

export default function Services({ onOpenQuoteModal }) {
  const [selectedService, setSelectedService] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'scroll'

  const scrollLeft = () => {
    const el = document.getElementById('services-scroll-container');
    if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const el = document.getElementById('services-scroll-container');
    if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-blob glow-bottom-left" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            What We Do
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Transform your enterprise with specialized AI engineering solutions built for speed, security, and measurable ROI.
          </motion.p>

          {/* Toggle View Mode Pill (Grid vs Scrollable Cards) */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="p-1 rounded-full bg-[#141414] border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Grid Layout
              </button>
              <button
                onClick={() => setViewMode('scroll')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'scroll'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Scrollable Cards
              </button>
            </div>

            {viewMode === 'scroll' && (
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  aria-label="Scroll Left"
                  className="p-2 rounded-full bg-[#181818] border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="Scroll Right"
                  className="p-2 rounded-full bg-[#181818] border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Mode 1: Standard Synchronized Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Cpu;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative p-6 sm:p-7 rounded-3xl premium-card flex flex-col justify-between h-full shadow-xl"
                >
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/40 transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase">
                        {service.badgeText}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full py-2.5 rounded-full bg-[#1e1e1e] hover:bg-emerald-800/80 text-gray-200 hover:text-white font-medium text-xs border border-white/10 hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* View Mode 2: Scrollable Horizontal Cards (Reference Image style) */
          <div
            id="services-scroll-container"
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-2 snap-x snap-mandatory"
          >
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Cpu;
              return (
                <div
                  key={service.id}
                  className="shrink-0 w-[290px] sm:w-[340px] snap-start rounded-3xl premium-card p-6 sm:p-7 flex flex-col justify-between shadow-2xl hover:border-emerald-500/50 transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/50 transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full uppercase">
                        {service.badgeText}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full py-2.5 rounded-full bg-[#1e1e1e] hover:bg-emerald-800/80 text-gray-200 hover:text-white font-medium text-xs border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#141414] border border-emerald-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                {React.createElement(iconMap[selectedService.icon] || Cpu, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <span className="text-xs text-emerald-400 font-semibold uppercase">{selectedService.badgeText}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#1e1e1e] border border-white/10 text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered for Maximum Impact</span>
              </div>
              <p>{selectedService.details}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 rounded-full bg-[#1e1e1e] text-gray-300 hover:text-white font-medium text-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteModal(name);
                }}
                className="flex-1 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/40"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
