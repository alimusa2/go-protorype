import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowUpRight, TrendingUp, Sparkles, X, Search, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { projectsData } from '../data/siteData';
import PixelCard from './PixelCard';

function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1.6 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const targetValue = parseFloat(value);
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Smooth easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * targetValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function OurWork({ onOpenQuoteModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Custom AI Development', 'AI Process Automation', 'Internal Business Tools', 'Mobile & Web Apps'];

  const filteredProjects = projectsData.filter(p => {
    const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-blob glow-top-left" />
      <div className="glow-blob glow-center-right" />
      <div className="absolute inset-0 star-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-950/50"
          >
            <Layers className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans"
          >
            Proven AI & Engineering <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
              Deliveries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Explore real enterprise deployments powered by sub-second RAG architectures, custom LLMs, and high-concurrency microservices.
          </motion.p>

          {/* Quick Metrics Bar with Animated Count Up */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {[
              { label: 'Deploys Completed', target: 45, suffix: '+', decimals: 0 },
              { label: 'Avg ROI Increase', target: 340, suffix: '%', decimals: 0 },
              { label: 'System Uptime SLA', target: 99.9, suffix: '%', decimals: 1 },
              { label: 'Client Retention', target: 98, suffix: '%', decimals: 0 }
            ].map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#121212] border border-white/10 hover:border-emerald-500/40 text-center transition-colors shadow-lg">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">
                  <AnimatedCounter value={m.target} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <div className="text-[11px] text-gray-400 font-medium uppercase mt-0.5">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 border border-emerald-400/40'
                    : 'bg-[#141414] text-gray-400 hover:text-white hover:bg-[#1f1f1f] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#121212] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid of Premium Portfolio Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/70 shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Subtle Radial Emerald Glow on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/25 transition-all duration-500 pointer-events-none" />

                <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-5 relative z-10">
                  <div>
                    {/* Top Header Meta Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 shadow-sm">
                        {project.client}
                      </span>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold font-mono shadow-sm">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{project.metric}</span>
                      </div>
                    </div>

                    {/* Image Banner */}
                    <div className="relative h-56 rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-xl group-hover:border-emerald-500/40 transition-colors">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-3 left-3 text-[11px] font-mono font-medium text-emerald-200 bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-emerald-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors mb-2.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 min-h-[48px]">
                      {project.description}
                    </p>

                    {/* Tech Stack Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-[#181818] text-emerald-300 font-mono border border-white/10 group-hover:border-emerald-500/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button (Aligned at base) */}
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3.5 rounded-full bg-[#1a1a1a] hover:bg-gradient-to-r hover:from-[#1a7a4a] hover:to-emerald-600 text-gray-200 hover:text-white font-semibold text-xs border border-white/15 hover:border-emerald-400/50 shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>View Case Details</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#121212] rounded-3xl border border-white/10">
            <Cpu className="w-10 h-10 text-emerald-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-gray-400 text-xs mt-1">Try adjusting your search query or filter selection.</p>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#141414] border border-emerald-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <span>{selectedProject.client}</span> • <span>{selectedProject.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProject.title}</h3>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-emerald-200 font-semibold">Verified Impact Metric</span>
              </div>
              <span className="text-base font-extrabold text-emerald-400 font-mono">{selectedProject.metric}</span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Solution Architecture</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedProject.description} GoArrow engineered custom RAG pipelines, fine-tuned domain LLMs, and low-latency microservices ensuring 99.9% uptime with enterprise governance.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-[#1e1e1e] text-xs font-mono text-emerald-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex-1 py-3 rounded-full bg-[#1e1e1e] hover:bg-[#252525] text-gray-300 font-medium text-sm transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  if (onOpenQuoteModal) onOpenQuoteModal(`Build Project Similar to ${title}`);
                }}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#1a7a4a] to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/60 transition-all"
              >
                Build Similar Solution
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
