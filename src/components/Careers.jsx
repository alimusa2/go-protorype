import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, X, CheckCircle2, Send, Sparkles, Building2, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';
import { careersData } from '../data/siteData';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeDept, setActiveDept] = useState('All');
  const [applied, setApplied] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', portfolio: '', notes: '' });

  const departments = ['All', 'Engineering', 'Product', 'Consulting'];

  const filteredJobs = activeDept === 'All'
    ? careersData
    : careersData.filter(j => j.department === activeDept);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setApplied(false);
    setApplicant({ name: '', email: '', portfolio: '', notes: '' });
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-blob glow-bottom-left" />
      <div className="glow-blob glow-top-right opacity-30" />
      <div className="absolute inset-0 star-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-950/50"
          >
            <Briefcase className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>JOIN GOARROW AI ENGINEERING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans"
          >
            Build Next-Gen Autonomous <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
              AI Software Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Work on cutting-edge LLMs, multi-agent frameworks, and high-concurrency microservices alongside top-tier AI researchers.
          </motion.p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/60 space-y-3 shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 group"
          >
            <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 w-fit border border-emerald-500/40 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors">Top 5% Pay & Equity</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              We offer top-market compensation, generous stock options, and annual performance bonuses for high impact.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/60 space-y-3 shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 group"
          >
            <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 w-fit border border-emerald-500/40 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors">Remote-First Flexibility</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Work from anywhere in the world with flexible hours, home office stipends, and annual international team retreats.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/60 space-y-3 shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 group"
          >
            <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 w-fit border border-emerald-500/40 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors">Dedicated Compute Budget</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Unrestricted GPU compute budget to train, benchmark, and experiment with state-of-the-art AI architectures.
            </p>
          </motion.div>
        </div>

        {/* Open Positions Section */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Open Roles</h2>
              <p className="text-xs text-gray-400 mt-1">Select a department to filter active hiring requisitions.</p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeDept === dept
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 border border-emerald-400/40'
                      : 'bg-[#141414] text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl bg-[#121212]/95 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-2xl border border-white/10 hover:border-emerald-500/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden"
                >
                  {/* Top Subtle Hover Light Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-3 py-1 rounded-full uppercase shadow-sm">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full py-3 rounded-full bg-[#1c1c1c] hover:bg-gradient-to-r hover:from-[#1a7a4a] hover:to-emerald-600 text-gray-200 hover:text-white font-semibold text-xs border border-white/15 hover:border-emerald-400/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
                    >
                      <span>Apply for Position</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#141414] border border-emerald-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6"
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!applied ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Careers at GoArrow</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedJob.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{selectedJob.location} • {selectedJob.department}</p>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Lee"
                      value={applicant.name}
                      onChange={e => setApplicant({ ...applicant, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={applicant.email}
                      onChange={e => setApplicant({ ...applicant, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://github.com/username"
                      value={applicant.portfolio}
                      onChange={e => setApplicant({ ...applicant, portfolio: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1a7a4a] to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Sent!</h3>
                <p className="text-sm text-gray-300">
                  Thank you <strong className="text-emerald-400">{applicant.name}</strong>. We have received your application for <strong className="text-white">{selectedJob.title}</strong> and sent confirmation to <strong className="text-white">{applicant.email}</strong>.
                </p>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
