import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast loading progress animation (completes in ~700ms)
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
        return prev + 12;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient Center Radial Emerald Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none animate-pulse" />

          {/* Animated Logo Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-6 text-center"
          >
            {/* Logo Image with Subtle Floating Animation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative p-2"
            >
              <img
                src="/go logo.png"
                alt="GoArrow Logo"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              />
            </motion.div>

            {/* Sleek Emerald Progress Loader Bar */}
            <div className="w-52 h-1.5 bg-[#141414] rounded-full overflow-hidden border border-white/10 relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1a7a4a] via-emerald-400 to-teal-300 rounded-full shadow-[0_0_14px_#10b981]"
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
