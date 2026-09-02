import React from 'react';
import { trustLogos } from '../data/siteData';
import { ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  // Duplicate array 3 times for seamless wrapping marquee without visible jump cut
  const repeatedLogos = [...trustLogos, ...trustLogos, ...trustLogos];

  return (
    <section className="relative py-12 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      {/* Clean Inline Header Badge (No negative margins, no overlapping collisions) */}
      <div className="relative z-10 flex justify-center mb-8 px-4">
        <div className="px-4 py-1.5 rounded-full bg-[#141414] border border-white/10 text-xs sm:text-sm font-medium text-gray-400 flex items-center gap-2 shadow-lg">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>TRUSTED BY <strong className="text-white font-semibold">250+</strong> INNOVATIVE COMPANIES WORLDWIDE</span>
        </div>
      </div>

      {/* Fade Overlays on Left and Right Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex overflow-hidden group">
        <div className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-20 animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer select-none opacity-60 hover:opacity-100"
            >
              <span className="font-sans font-semibold tracking-wider uppercase text-lg sm:text-xl">
                {item.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
