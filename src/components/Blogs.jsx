import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowUpRight, X, Sparkles, Flame, Search } from 'lucide-react';
import { blogsData } from '../data/siteData';

export default function Blogs() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Engineering Insights', 'AI Architecture', 'Case Studies'];

  const filteredBlogs = blogsData.filter(b => {
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogsData[0];
  const regularArticles = filteredBlogs.filter(b => b.id !== featuredArticle.id || activeCategory !== 'All' || searchQuery !== '');

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="glow-blob glow-top-left" />
      <div className="glow-blob glow-bottom-right opacity-30" />
      <div className="absolute inset-0 star-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-950/50"
          >
            <BookOpen className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>AI RESEARCH & ENGINEERING BLOG</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans"
          >
            Insights & Technical <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
              Breakthroughs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Deep dives into autonomous agent architecture, 10M+ vector DB scaling, multi-agent orchestration, and enterprise RAG deployments.
          </motion.p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Segmented Glassmorphic Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#121212] border border-white/10 shadow-inner">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 z-10 ${
                    isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBlogFilter"
                      className="absolute inset-0 bg-gradient-to-r from-[#1a7a4a] to-emerald-600 rounded-xl shadow-lg shadow-emerald-950/60 border border-emerald-400/40 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#121212] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Featured Master Article Banner (Shows when category is All and no search) */}
        {activeCategory === 'All' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.015, rotateY: 1.5, y: -6 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-emerald-500/50 hover:border-emerald-400 p-6 sm:p-8 overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group transition-all duration-300 relative perspective-1000"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:border-emerald-500/40 transition-colors">
              <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
              <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-[10px] font-bold text-emerald-300 uppercase backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <Flame className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span>FEATURED RESEARCH</span>
              </span>
            </div>

            <div className="lg:col-span-6 space-y-4 relative z-10">
              <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                <span className="text-emerald-400 font-semibold">{featuredArticle.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-emerald-400" />{featuredArticle.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" />{featuredArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                {featuredArticle.title}
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1a7a4a] to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/60 inline-flex items-center gap-2 transition-all border border-emerald-400/30 hover:scale-105"
                >
                  <span>Read Full Technical Report</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-200" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Articles Grid with 3D Reverse Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch perspective-1000">
          <AnimatePresence mode="popLayout">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -3 : 3, rotateX: 2, y: -8 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/70 shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Top Subtle Hover Light Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="relative h-52 overflow-hidden border-b border-white/10 group-hover:border-emerald-500/40 transition-colors">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-3 left-3 text-[10px] font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-3 py-1 rounded-full uppercase backdrop-blur-md shadow-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/10 mt-4 relative z-10">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-3 rounded-full bg-[#1c1c1c] hover:bg-gradient-to-r hover:from-[#1a7a4a] hover:to-emerald-600 text-gray-200 hover:text-white font-semibold text-xs border border-white/15 hover:border-emerald-400/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
                  >
                    <span>Read Technical Article</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#141414] border border-emerald-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-52 rounded-2xl overflow-hidden border border-white/10">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
            </div>

            <div>
              <div className="flex items-center gap-3 text-xs text-emerald-400 font-semibold mb-2">
                <span>{selectedArticle.category}</span> • <span>{selectedArticle.date}</span> • <span>{selectedArticle.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">{selectedArticle.title}</h3>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {selectedArticle.content}
            </p>

            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>GoArrow Technical Report</span>
              </div>
              <p>For architectural consultation on implementing these patterns in your codebase, contact our engineering leads.</p>
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full py-3 rounded-full bg-[#1e1e1e] hover:bg-[#252525] text-gray-200 font-semibold text-sm transition-colors"
            >
              Close Article
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
