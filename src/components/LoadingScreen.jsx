import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing OEM Systems...');

  useEffect(() => {
    // 2.4-second total splash sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 5;
        if (next > 40 && next < 80) {
          setStatusText('Calibrating Precision Tooling...');
        } else if (next >= 80) {
          setStatusText('Welcome to Vedanta Technologies');
        }
        return next;
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
  };

  const handleExitComplete = () => {
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="vedanta-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 select-none cursor-default"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.04)_0%,transparent_70%)] pointer-events-none" />

          {/* Centered Logo Assembling Container */}
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* The Logo Vector & Image Assembly */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center">
              {/* Outer Precision Geometry Rings */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* Animated Rotating Laser Accent */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeDasharray="70 200"
                  strokeLinecap="round"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
                  style={{ transformOrigin: "50% 50%" }}
                />
              </svg>

              {/* Vector Logo "V" Shape Drawing Itself */}
              <svg 
                className="w-16 h-16 sm:w-20 sm:h-20 z-10" 
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Precision Chevron 1 */}
                <motion.path
                  d="M12 16L32 50L52 16H42L32 36L22 16H12Z"
                  fill="#1D4ED8"
                  initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                  }}
                />
                {/* Precision Inlay Stroke */}
                <motion.path
                  d="M22 16L32 36L42 16"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: 1,
                    transition: { duration: 1.0, delay: 0.3, ease: "easeInOut" } 
                  }}
                />
              </svg>

              {/* Official Brand Stamp Fade & Glow Sync */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 blur-xl" />
              </motion.div>
            </div>

            {/* Brand Typography Reveal (Apple-style Refinement) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5"
            >
              <h1 className="text-xl sm:text-2xl font-black text-slate-950 font-sans tracking-[0.22em] uppercase leading-none">
                Vedanta Technologies
              </h1>
              <p className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.26em] text-slate-500">
                Precision PET Machinery & Turnkey Plants
              </p>
            </motion.div>

            {/* Hairline Progress Meter */}
            <div className="w-48 sm:w-56 mt-8 space-y-2">
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 p-[0.5px]">
                <motion.div
                  className="h-full bg-blue-700 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span className="truncate max-w-[140px] text-slate-500 font-medium">{statusText}</span>
                <span className="font-semibold text-slate-900">{progress}%</span>
              </div>
            </div>

            {/* Location & Trust Stamp */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-t border-slate-100 pt-3 flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>OEM Manufacturing Plant • Vasai, Maharashtra</span>
            </motion.div>
          </div>

          {/* Quick Skip Button in Corner for Fast Access */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute bottom-6 right-6 text-[11px] font-mono text-slate-400 hover:text-slate-800 transition-colors py-1 px-3 rounded-full hover:bg-slate-100 cursor-pointer"
            aria-label="Skip loading animation"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
