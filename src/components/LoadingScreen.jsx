import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast loading progress animation (completes in ~600ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onFinish) onFinish();
          }, 200);
          return 100;
        }
        return prev + 15;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient center glow */}
          <div className="absolute w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none animate-pulse" />

          {/* Logo & Brand Mark */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a7a4a] to-emerald-500 border border-emerald-400/50 shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '4s' }} />
            </div>

            <div className="text-center space-y-1">
              <h1 className="text-2xl font-extrabold tracking-tight text-white font-sans">
                Go<span className="text-emerald-400">Arrow</span>
              </h1>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                Next-Gen AI Systems
              </p>
            </div>

            {/* Sleek Progress Bar */}
            <div className="w-48 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden border border-white/10 mt-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 rounded-full shadow-[0_0_12px_#10b981]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
