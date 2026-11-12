import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  Wind, 
  Cpu, 
  Activity, 
  Play, 
  Pause 
} from 'lucide-react';

export default function KineticHeroVisualizer({ onOpenQuote }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mode, setMode] = useState('standard'); // 'standard' (4800 BPH), 'turbo' (8000 BPH), 'inspection' (slow-mo)
  const [cycleCount, setCycleCount] = useState(14820);
  const [activeStage, setActiveStage] = useState(1); // 0: Infeed, 1: Heating, 2: Stretch Blow, 3: Ejection

  // Cycle speed multiplier
  const speed = mode === 'turbo' ? 0.6 : (mode === 'inspection' ? 2.5 : 1.2);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % 4);
      setCycleCount(prev => prev + (mode === 'turbo' ? 6 : 4));
    }, speed * 900);

    return () => clearInterval(interval);
  }, [isPlaying, mode, speed]);

  const stages = [
    { title: 'Preform Infeed', desc: 'Auto-scrambled & oriented', metric: '18g Virgin Resin' },
    { title: '8-Zone IR Heating', desc: 'NIR quartz penetration', metric: '118°C Controlled' },
    { title: '30-Bar Stretch Blow', desc: 'Servo dual rod elongation', metric: '0.02mm Precision' },
    { title: 'Air Recovery Eject', desc: '26% compressed air recycled', metric: '4,800 BPH Output' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-12 px-2 sm:px-4">
      {/* High-Tech Industrial Kinetic Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] overflow-hidden">
        {/* Subtle Ambient Laser & Blueprint Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Control Bar / Machine Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
          {/* Status Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs">
              <span className="font-bold text-slate-200 tracking-wide">
                VT-BLOW-A4 SIMULATOR
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-blue-400 font-semibold hidden sm:inline">
                HIGH-SPEED SERVO LINE
              </span>
            </div>
          </div>

          {/* Mode Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px] sm:text-xs font-mono">
              <button
                type="button"
                onClick={() => setMode('standard')}
                className={`px-2 sm:px-2.5 py-1 rounded transition-colors ${
                  mode === 'standard' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Standard 4,800 BPH Production Rate"
              >
                4.8K BPH
              </button>
              <button
                type="button"
                onClick={() => setMode('turbo')}
                className={`px-2 sm:px-2.5 py-1 rounded transition-colors ${
                  mode === 'turbo' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="High-Speed 8,000 BPH Turbo Rate"
              >
                8K Turbo
              </button>
              <button
                type="button"
                onClick={() => setMode('inspection')}
                className={`px-2 sm:px-2.5 py-1 rounded transition-colors ${
                  mode === 'inspection' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Slow-Motion Precision Inspection Mode"
              >
                Inspection
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Central Kinetic Animation Canvas */}
        <div className="relative z-10 px-4 sm:px-8 py-6 sm:py-10">
          {/* Real-time Animated Industrial SVG Stage */}
          <div className="relative w-full h-44 sm:h-56 flex items-center justify-between">
            {/* Background Conveyor Line (Glow Track) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
              <motion.div 
                className="h-full w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={isPlaying ? { x: ['-100%', '1100%'] } : {}}
                transition={{ duration: speed * 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Station 1: Preform Infeed Hopper */}
            <div className="relative flex flex-col items-center z-10 w-1/4">
              <motion.div 
                animate={isPlaying ? { y: [0, -3, 0] } : {}}
                transition={{ duration: speed, repeat: Infinity, ease: 'easeInOut' }}
                className={`w-14 h-24 sm:w-16 sm:h-28 rounded-xl border flex flex-col items-center justify-between p-2 transition-all duration-300 ${
                  activeStage === 0 
                    ? 'border-blue-500 bg-blue-950/60 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                    : 'border-slate-800 bg-slate-900/60'
                }`}
              >
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">1. FEED</span>
                {/* SVG Preform Graphic */}
                <div className="w-4 h-12 rounded-b-md bg-blue-300/40 border border-blue-400 flex items-center justify-center">
                  <div className="w-1.5 h-8 bg-blue-400/60 rounded-full"></div>
                </div>
                <span className="text-[10px] font-mono text-blue-400 font-semibold">18g PET</span>
              </motion.div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-200 block">Preform Infeed</span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">Auto-Oriented</span>
              </div>
            </div>

            {/* Station 2: 8-Zone Infrared Quartz Oven */}
            <div className="relative flex flex-col items-center z-10 w-1/4">
              <div className={`w-16 h-24 sm:w-20 sm:h-28 rounded-xl border flex flex-col items-center justify-between p-2 transition-all duration-300 relative overflow-hidden ${
                activeStage === 1 
                  ? 'border-blue-400 bg-slate-900 shadow-[0_0_25px_rgba(59,130,246,0.35)]' 
                  : 'border-slate-800 bg-slate-900/60'
              }`}>
                {/* Infrared Heating Lamp Glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-amber-500/15 to-blue-500/10"
                  animate={isPlaying ? { opacity: [0.4, 0.9, 0.4] } : { opacity: 0.3 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold relative z-10">2. OVEN</span>
                {/* Preform Heating Core */}
                <div className="w-4 h-12 rounded-b-md bg-amber-400/70 border border-amber-300 relative z-10 shadow-[0_0_12px_rgba(251,191,36,0.8)]">
                  <motion.div 
                    className="w-full h-full bg-amber-200/40 rounded-b-md"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
                <span className="text-[10px] font-mono text-amber-300 font-bold relative z-10">118°C IR</span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-200 block">8-Zone Heating</span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">NIR Quartz Rays</span>
              </div>
            </div>

            {/* Station 3: 30-Bar Stretch Blow Moulding Clamp */}
            <div className="relative flex flex-col items-center z-10 w-1/4">
              <div className={`w-18 h-24 sm:w-24 sm:h-28 rounded-xl border flex flex-col items-center justify-between p-2 transition-all duration-300 relative ${
                activeStage === 2 
                  ? 'border-blue-500 bg-blue-950/70 shadow-[0_0_30px_rgba(37,99,235,0.5)]' 
                  : 'border-slate-800 bg-slate-900/60'
              }`}>
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">3. BLOW</span>
                
                {/* Stretch Rod & Expanding Bottle Graphic */}
                <div className="relative flex items-center justify-center">
                  <motion.div 
                    className="w-1 bg-slate-200 rounded-full absolute -top-1"
                    animate={activeStage === 2 ? { height: ['0px', '28px', '10px'] } : { height: '8px' }}
                    transition={{ duration: speed * 0.8 }}
                  />
                  <motion.div 
                    className="w-6 h-12 sm:w-7 sm:h-14 rounded-t-lg rounded-b-md border-2 border-blue-400 bg-blue-400/25 flex items-center justify-center mt-3"
                    animate={activeStage === 2 ? { scaleX: [0.7, 1.25, 1], scaleY: [0.8, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: speed * 0.8 }}
                  >
                    <span className="text-[8px] font-mono text-blue-200 font-bold">30 BAR</span>
                  </motion.div>
                </div>

                <span className="text-[10px] font-mono text-blue-400 font-bold">120 kN Clamp</span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-200 block">Stretch Blow</span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">Servo Linear</span>
              </div>
            </div>

            {/* Station 4: Crystal Bottle Ejection & Air Recovery */}
            <div className="relative flex flex-col items-center z-10 w-1/4">
              <motion.div 
                animate={isPlaying ? { x: [0, 4, 0] } : {}}
                transition={{ duration: speed, repeat: Infinity, ease: 'easeInOut' }}
                className={`w-16 h-24 sm:w-20 sm:h-28 rounded-xl border flex flex-col items-center justify-between p-2 transition-all duration-300 ${
                  activeStage === 3 
                    ? 'border-emerald-500 bg-emerald-950/60 shadow-[0_0_25px_rgba(16,185,129,0.4)]' 
                    : 'border-slate-800 bg-slate-900/60'
                }`}
              >
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">4. OUTPUT</span>
                
                {/* Crystal 500ml Bottle Graphic */}
                <div className="w-6 h-13 sm:w-7 sm:h-14 rounded-t-lg rounded-b-md border-2 border-emerald-400 bg-emerald-400/20 flex flex-col items-center justify-center relative shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                  <div className="w-2.5 h-1.5 bg-blue-500 rounded-t-sm -mt-2"></div>
                  <span className="text-[8px] font-mono text-emerald-300 font-bold mt-1">500ml</span>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 font-bold">+26% Air Rec.</span>
              </motion.div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-200 block">Air Conveyor</span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">Defect-Free</span>
              </div>
            </div>
          </div>

          {/* Active Stage Callout Pill */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-3 sm:p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span>Current Phase: {stages[activeStage].title}</span>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                    {stages[activeStage].metric}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {stages[activeStage].desc}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block uppercase">Continuous Bottles</span>
                <span className="font-bold text-slate-200 text-sm">{cycleCount.toLocaleString()}</span>
              </div>
              <button
                onClick={() => onOpenQuote('VT-BLOW-A4')}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold transition-colors cursor-pointer"
              >
                Get Machine Specs
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Real-time Telemetry Readout Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-slate-800/80 bg-slate-950/90 text-xs font-mono">
          <div className="p-3 sm:p-4 border-r border-slate-800/80 flex items-center gap-2.5">
            <Gauge className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Air Pressure</span>
              <span className="font-bold text-slate-200 text-xs sm:text-sm">30.4 Bar</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 border-r border-slate-800/80 flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">IR Quartz Temp</span>
              <span className="font-bold text-slate-200 text-xs sm:text-sm">118.2 °C</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 border-r border-slate-800/80 flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Servo Cycle Time</span>
              <span className="font-bold text-slate-200 text-xs sm:text-sm">0.72 sec</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 flex items-center gap-2.5">
            <Wind className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Air Recycling</span>
              <span className="font-bold text-emerald-400 text-xs sm:text-sm">+26.4% Recycled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
