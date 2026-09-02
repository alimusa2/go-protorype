import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Bot, BarChart3, Users, GitMerge, MoreHorizontal, 
  FileText, ArrowDown, Sparkles, ArrowRight, ShieldCheck
} from 'lucide-react';

export default function FeatureShowcase() {
  const [activeBar, setActiveBar] = useState(4);
  const [activeDoor, setActiveDoor] = useState('door-1');
  const rightColumnRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rightColumnRef,
    offset: ["start 70%", "end 60%"]
  });

  const glowTopPercentage = useTransform(scrollYProgress, [0, 1], ["0%", "88%"]);
  const lineHeightPercentage = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const doors = [
    {
      id: 'door-1',
      doorNumber: 'DOOR 01',
      title: 'Digital Launch - AI Assistant',
      subtitle: 'Your new ultimate productivity companion.',
      price: 'Basic Plan €490',
      icon: Bot,
      type: 'chat'
    },
    {
      id: 'door-2',
      doorNumber: 'DOOR 02',
      title: 'Real-Time Simple Analytics',
      subtitle: 'Track what really matters with predictive AI insights.',
      price: 'Analytics Pro €790',
      icon: BarChart3,
      type: 'analytics'
    },
    {
      id: 'door-3',
      doorNumber: 'DOOR 03',
      title: 'Seamless Easy Collaboration',
      subtitle: 'High-performance real-time workflow sync for modern teams.',
      price: 'Team Hub €590',
      icon: Users,
      type: 'collaboration'
    },
    {
      id: 'door-4',
      doorNumber: 'DOOR 04',
      title: 'Smart Automation Pipelines',
      subtitle: 'Streamline repetitive tasks with zero workflow friction.',
      price: 'Workflow Engine €890',
      icon: GitMerge,
      type: 'automation'
    }
  ];

  return (
    <section id="what-we-offer" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] overflow-clip">
      {/* Background star pattern & ambient neon green glow */}
      <div className="absolute inset-0 star-pattern opacity-40 pointer-events-none" />
      <div className="glow-blob glow-top-left" />
      <div className="glow-blob glow-bottom-left opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Split Layout: Left Intact Sticky Card + Animated Scroll Glow Line + Right Scrolling Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* Left Intact Sticky Card (Stays fixed in place while right cards scroll down) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20 self-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 sm:p-8 bg-[#121212]/95 backdrop-blur-2xl border border-emerald-500/40 shadow-2xl shadow-emerald-950/40 space-y-6 relative overflow-hidden group hover:border-emerald-400 transition-all duration-300"
            >
              {/* Subtle card ambient top glow */}
              <div className="absolute -top-24 -left-24 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-950/50">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>SYSTEMS WE BUILD</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight font-sans leading-[1.15]">
                Systems built around <br />
                <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                  real business work.
                </span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
                GoArrow brings digital systems, AI automation, custom workflows, and intelligent software into one accountable delivery model.
              </p>

              {/* Quality & Standards Commitment Card inside Left Main Card */}
              <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Operational Commitments</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  <span className="px-3 py-1 rounded-lg bg-[#181818] border border-emerald-500/40 text-[11px] font-mono text-emerald-300 shadow-sm">
                    ISO 27001 Certified
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#181818] border border-white/10 text-[11px] font-mono text-gray-300">
                    99.9% Uptime SLA
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#181818] border border-white/10 text-[11px] font-mono text-gray-300">
                    Zero Data Leakage
                  </span>
                </div>
              </div>

              {/* Link to capabilities */}
              <div className="pt-1">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 group/link transition-colors"
                >
                  <span>View all capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Scrollable Cards with Vertical Timeline Line & Animated Scroll Glow Effect */}
          <div ref={rightColumnRef} className="lg:col-span-7 space-y-16 sm:space-y-24 relative pl-0 sm:pl-10 pt-2 pb-8">
            
            {/* Base Center Vertical Timeline Line */}
            <div className="absolute top-6 bottom-6 left-0 w-1 bg-white/10 hidden sm:block pointer-events-none rounded-full" />

            {/* Dynamic Scroll-Glow Active Line (Fills down as user scrolls) */}
            <motion.div 
              style={{ height: lineHeightPercentage }}
              className="absolute top-6 left-0 w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-400 hidden sm:block pointer-events-none rounded-full shadow-[0_0_12px_#10b981]"
            />

            {/* Scroll Glow Traveling Pointer (Moves DOWN dynamically as user scrolls) */}
            <motion.div 
              style={{ top: glowTopPercentage }}
              className="hidden sm:flex absolute left-[-16px] z-20 items-center justify-center pointer-events-none transition-all duration-75"
            >
              <div className="relative flex items-center justify-center">
                {/* Glowing Outer Halo */}
                <div className="absolute w-10 h-10 rounded-full bg-emerald-400/50 blur-md animate-pulse" />
                {/* Glowing Neon Arrow Circle */}
                <div className="relative w-9 h-9 rounded-full bg-[#0a0a0a] border-2 border-emerald-400 text-emerald-300 shadow-[0_0_20px_#10b981] flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-emerald-400 stroke-[3] animate-bounce" />
                </div>
              </div>
            </motion.div>

            {doors.map((door, index) => {
              const IconComp = door.icon;
              const isActive = activeDoor === door.id;

              return (
                <motion.div
                  key={door.id}
                  onMouseEnter={() => setActiveDoor(door.id)}
                  onViewportEnter={() => setActiveDoor(door.id)}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 border shadow-2xl ${
                    isActive
                      ? 'bg-[#141414] border-emerald-500/80 shadow-[0_0_35px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/40 scale-[1.01]'
                      : 'bg-[#121212]/90 border-white/10 hover:border-emerald-500/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Timeline Indicator Dot on Left */}
                  <div
                    className={`absolute -left-[45px] top-9 w-4.5 h-4.5 rounded-full border-2 border-[#0d0d0d] hidden sm:block transition-all duration-300 ${
                      isActive ? 'bg-emerald-400 shadow-[0_0_16px_#10b981] scale-125' : 'bg-gray-700'
                    }`}
                  />

                  {/* Top Bar: DOOR Step Badge + Price Tag */}
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase transition-colors ${
                        isActive
                          ? 'text-emerald-300 bg-emerald-950 border border-emerald-500/60'
                          : 'text-gray-400 bg-[#1e1e1e] border border-white/10'
                      }`}>
                        {door.doorNumber}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                        {door.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#1e1e1e] text-gray-300 border border-white/10">
                      {door.price}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {door.subtitle}
                  </p>

                  {/* Embedded Live Interactive Mockups */}
                  {door.type === 'chat' && (
                    <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-5 space-y-4 shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="text-xs font-semibold text-white">AI Assistant</span>
                        </div>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </div>

                      <div className="flex items-start gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                          alt="Lisa"
                          className="w-8 h-8 rounded-full border border-emerald-500/40 object-cover"
                        />
                        <div className="bg-[#1a1a1a] rounded-2xl rounded-tl-none p-3 border border-white/5 max-w-[85%]">
                          <div className="text-[11px] text-gray-400 font-medium mb-0.5">Lisa Jackson</div>
                          <div className="text-xs text-gray-200">Create a document for our next meeting.</div>
                        </div>
                      </div>

                      <div className="flex items-start justify-end gap-3">
                        <div className="bg-emerald-950/80 border border-emerald-500/30 rounded-2xl rounded-tr-none p-3 max-w-[88%] space-y-2">
                          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                            <Sparkles className="w-3 h-3" />
                            <span>GoArrow AI Engine</span>
                          </div>
                          <div className="text-xs text-emerald-100">Sure, here is your meeting roadmap draft.</div>
                          <div className="p-2.5 rounded-xl bg-[#0d0d0d] border border-emerald-500/30 flex items-start gap-2.5">
                            <div className="p-1.5 rounded-lg bg-emerald-900/60 text-emerald-400">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white">Meeting Roadmap.pdf</div>
                              <div className="text-[11px] text-gray-400 leading-snug mt-0.5">
                                Milestones & AI system specifications attached.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {door.type === 'analytics' && (
                    <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-5 space-y-4 shadow-inner">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Analytics Overview</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
                          ↑ 28.4% Efficiency
                        </span>
                      </div>
                      <div className="h-28 flex items-end justify-between gap-2 pt-2">
                        {[45, 65, 30, 80, 95, 60, 85].map((h, i) => (
                          <div
                            key={i}
                            onMouseEnter={() => setActiveBar(i)}
                            className="flex-1 flex flex-col items-center gap-1.5 cursor-pointer"
                          >
                            <div className="w-full bg-[#1a1a1a] rounded-t-lg h-20 relative flex items-end overflow-hidden">
                              <div
                                style={{ height: `${h}%` }}
                                className={`w-full rounded-t-lg transition-colors ${
                                  i === activeBar
                                    ? 'bg-gradient-to-t from-[#1a7a4a] to-emerald-400 shadow-md shadow-emerald-500/40'
                                    : 'bg-gray-700/60'
                                }`}
                              />
                            </div>
                            <span className="text-[9px] text-gray-500 font-mono">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {door.type === 'collaboration' && (
                    <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 space-y-2.5 shadow-inner">
                      {[
                        { name: 'Emma Carter', role: 'Chief Executive Officer', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' },
                        { name: 'James Patel', role: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' }
                      ].map((m, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#141414] border border-white/5">
                          <div className="flex items-center gap-3">
                            <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                            <div>
                              <div className="text-xs font-semibold text-white">{m.name}</div>
                              <div className="text-[10px] text-gray-400">{m.role}</div>
                            </div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {door.type === 'automation' && (
                    <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-4 space-y-2.5 shadow-inner">
                      <div className="p-3 rounded-xl bg-[#141414] border border-emerald-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <GitMerge className="w-4 h-4 text-emerald-400" />
                          <span className="text-xs font-semibold text-white">Automated Customer Onboarding Pipeline</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                    </div>
                  )}

                  {/* Card Bottom Read More Action */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors"
                    >
                      <span>Explore Capability Details</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
