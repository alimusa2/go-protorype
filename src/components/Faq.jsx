import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { faqData } from '../data/siteData';

export default function Faq() {
  const [openId, setOpenId] = useState('01');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const col1 = faqData.slice(0, 4);
  const col2 = faqData.slice(4, 8);

  const renderAccordionItem = (item) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'bg-[#161616] border-emerald-500/50 shadow-xl shadow-emerald-950/30'
            : 'bg-[#121212] border-white/10 hover:border-white/20'
        }`}
      >
        <button
          onClick={() => toggleAccordion(item.id)}
          className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 rounded-2xl"
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-3">
            <span className={`w-7 h-7 rounded-xl shrink-0 text-xs font-mono font-bold flex items-center justify-center transition-colors ${
              isOpen
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                : 'bg-[#1e1e1e] text-gray-400 border border-white/5'
            }`}>
              {item.id}
            </span>
            <span className="text-sm sm:text-base font-bold text-white leading-snug pt-0.5">
              {item.question}
            </span>
          </div>

          <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
            isOpen ? 'bg-emerald-950 text-emerald-400 rotate-45' : 'bg-white/5 text-gray-400'
          }`}>
            <Plus className="w-4 h-4" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-1 pt-3 pl-14">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      <div className="glow-blob glow-top-left" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Everything you need to know about partnering with GoArrow to build your AI applications.
          </motion.p>
        </div>

        {/* 2-Column Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="space-y-3.5">
            {col1.map(renderAccordionItem)}
          </div>
          <div className="space-y-3.5">
            {col2.map(renderAccordionItem)}
          </div>
        </div>
      </div>
    </section>
  );
}
