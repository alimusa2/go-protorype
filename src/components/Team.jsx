import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Sparkles, X, CheckCircle2, Award, ShieldCheck, Code2, BrainCircuit } from 'lucide-react';
import { teamData } from '../data/siteData';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const founder = teamData[0]; // Founder Marcus Vance
  const engineers = teamData.slice(1);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 star-pattern opacity-40 pointer-events-none" />
      <div className="glow-blob glow-center-right" />
      <div className="glow-blob glow-top-left opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-950/50"
          >
            <Users className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>EXPERT LEADERSHIP & ENGINEERS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans"
          >
            Meet the Minds Behind <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
              GoArrow Autonomous AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Ex-Google Brain researchers, Stanford ML PhDs, and enterprise systems architects engineering resilient AI infrastructure.
          </motion.p>
        </div>

        {/* Featured Founder Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          whileHover={{ y: -4 }}
          className="rounded-3xl bg-gradient-to-r from-[#141414] via-[#161616] to-[#0d261a] border border-emerald-500/50 hover:border-emerald-400 p-6 sm:p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 group relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

          <div className="relative shrink-0 w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-emerald-500/60 shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <img src={founder.avatar} alt={founder.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-300 font-bold bg-emerald-950/90 px-2.5 py-1 rounded-md border border-emerald-500/60 backdrop-blur-md">
              FOUNDER & CEO
            </span>
          </div>

          <div className="flex-1 space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Executive Spotlight</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
              {founder.name}
            </h2>

            <p className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wide">
              {founder.role} • {founder.specialty}
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {founder.bio} Marcus guides GoArrow's technology vision, advising fortune 500 executive teams on agentic AI deployment and zero-trust security.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedMember(founder)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1a7a4a] to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/60 transition-all border border-emerald-400/30 hover:scale-105"
              >
                View Full Bio & Credentials
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1e1e1e] hover:bg-emerald-950 text-gray-400 hover:text-emerald-400 transition-all border border-white/10 hover:border-emerald-500/40"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Engineering Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/10 hover:border-emerald-500/40 space-y-3 shadow-xl transition-all hover:-translate-y-1">
            <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 w-fit">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Research-Backed Models</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our engineering team publishes peer-reviewed research on vector search optimization and multi-agent coordination.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/10 hover:border-emerald-500/40 space-y-3 shadow-xl transition-all hover:-translate-y-1">
            <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 w-fit">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Production-First Code</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              We ship tested, high-concurrency microservices designed for 99.9% uptime with automated regression monitoring.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/10 hover:border-emerald-500/40 space-y-3 shadow-xl transition-all hover:-translate-y-1">
            <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Enterprise Privacy</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              All team members operate under strict ISO 27001 data protection protocols ensuring client code confidentiality.
            </p>
          </div>
        </div>

        {/* Team Engineers Grid */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white font-sans">Engineering Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {engineers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-[#121212]/95 backdrop-blur-2xl p-6 flex flex-col justify-between h-full shadow-2xl border border-white/10 hover:border-emerald-500/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Subtle Hover Light Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square border border-white/10 group-hover:border-emerald-500/40 transition-colors shadow-lg">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-[10px] text-emerald-300 font-bold uppercase backdrop-blur-md shadow-md">
                      {member.specialty}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wide mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between relative z-10">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-semibold text-emerald-400 hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>View Profile</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-full bg-[#1c1c1c] hover:bg-emerald-950 text-gray-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#141414] border border-emerald-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedMember.avatar}
                alt={selectedMember.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/50 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                <p className="text-xs text-emerald-400 font-semibold">{selectedMember.role}</p>
                <span className="text-[10px] text-gray-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-mono mt-1 inline-block">
                  {selectedMember.specialty}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {selectedMember.bio}
            </p>

            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>GoArrow Technical Advisory Committee</span>
              </div>
              <p>Oversees architectural review, model fine-tuning validation, and security auditing for enterprise client deliverables.</p>
            </div>

            <button
              onClick={() => setSelectedMember(null)}
              className="w-full py-3 rounded-full bg-[#1e1e1e] hover:bg-[#252525] text-gray-200 font-semibold text-sm transition-colors"
            >
              Close Profile
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
