import React from 'react';
import { automationTechStack } from '../data/siteData';
import { Cpu, CpuIcon, Terminal, Zap, Layers, Sparkles } from 'lucide-react';

export default function TrustBar() {
  // Duplicate array 3 times for seamless infinite marquee loop
  const repeatedTech = [...automationTechStack, ...automationTechStack, ...automationTechStack];

  return (
    <section className="relative py-10 bg-[#080808] border-y border-white/10 overflow-hidden">
      {/* Header Badge for Tech Stack */}
      <div className="relative z-10 flex justify-center mb-7 px-4">
        <div className="px-4 py-1.5 rounded-full bg-[#121212] border border-emerald-500/30 text-xs sm:text-sm font-semibold text-gray-300 flex items-center gap-2 shadow-xl shadow-emerald-950/40">
          <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>POWERED BY <strong className="text-emerald-400 font-bold uppercase tracking-wider">CUTTING-EDGE AUTOMATION & AI TECH STACK</strong></span>
        </div>
      </div>

      {/* Fade Overlays on Left and Right Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex overflow-hidden group">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8 animate-marquee group-hover:[animation-play-state:paused] py-1">
          {repeatedTech.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#121212] border border-white/10 hover:border-emerald-500/60 text-white transition-all duration-300 cursor-pointer select-none group/pill hover:bg-emerald-950/40 shadow-lg hover:shadow-emerald-900/30 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover/pill:scale-125 transition-transform animate-pulse" />
              <span className="font-sans font-extrabold text-base sm:text-lg tracking-tight text-gray-100 group-hover/pill:text-emerald-300 transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#1d1d1d] text-emerald-400/90 border border-white/5 uppercase tracking-wider group-hover/pill:bg-emerald-900/60">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
