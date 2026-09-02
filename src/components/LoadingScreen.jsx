import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  // Fallback timer in case video fails to play or onEnded doesn't fire
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 12000);

    return () => clearTimeout(fallbackTimer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden select-none"
        >
          <video
            ref={videoRef}
            src="/go loading 2.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
