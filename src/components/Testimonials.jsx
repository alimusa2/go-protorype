import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Quote, ArrowDown } from 'lucide-react';
import { testimonialsData } from '../data/siteData';

export default function Testimonials({ onOpenWebsiteModal }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="testimonials" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient background accent */}
      <div className="glow-blob glow-center-right" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Client Satisfaction
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans"
          >
            What our Clients say About us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            At GoArrow, we take pride in delivering exceptional digital products and services that drive success for our clients.
          </motion.p>
        </div>

        {/* 2x2 Grid (1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-white/10 hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                {/* Bold Headline & Quote */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                  "{item.headline}"
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/40 shadow-md"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">{item.author}</div>
                    <div className="text-[11px] text-gray-400">{item.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenWebsiteModal(item)}
                  className="px-3.5 py-1.5 rounded-full bg-[#1e1e1e] hover:bg-emerald-900/60 text-gray-300 hover:text-white font-medium text-xs border border-white/10 hover:border-emerald-500/40 transition-all duration-200 flex items-center gap-1.5"
                >
                  <span>Open Website</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Expanded Reviews */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 overflow-hidden"
            >
              {[
                {
                  id: 5,
                  headline: 'Unmatched speed and execution capabilities.',
                  quote: 'GoArrow completed our AI pipeline automation in just 8 days. Their deep understanding of modern enterprise LLMs saved us months of internal dev time.',
                  author: 'David Chen',
                  role: 'CTO of DataPulse',
                  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
                  website: 'datapulse.io'
                },
                {
                  id: 6,
                  headline: 'The ROI on custom AI tools was visible in week 2.',
                  quote: 'Our support ticket triage time dropped by 74% within two weeks of launching GoArrow custom internal AI agents.',
                  author: 'Elena Rostova',
                  role: 'VP Operations at CloudFlex',
                  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
                  website: 'cloudflex.net'
                }
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-white/10 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-emerald-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">"{item.headline}"</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 italic">"{item.quote}"</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/40" />
                      <div>
                        <div className="text-xs font-bold text-white">{item.author}</div>
                        <div className="text-[11px] text-gray-400">{item.role}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenWebsiteModal(item)}
                      className="px-3.5 py-1.5 rounded-full bg-[#1e1e1e] hover:bg-emerald-900/60 text-gray-300 hover:text-white text-xs border border-white/10 flex items-center gap-1.5"
                    >
                      <span>Open Website</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Centered green "Read more" pill button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-7 py-3 rounded-full bg-[#1a7a4a] hover:bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-950/60 hover:scale-[1.03] active:scale-95 transition-all duration-200 inline-flex items-center gap-2 border border-emerald-400/30"
          >
            <span>{showMore ? 'Show Less' : 'Read more'}</span>
            <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
