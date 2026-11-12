import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Cpu, 
  Wind, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Pause,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WORKFLOW_STAGES = [
  {
    id: 'heating',
    stepNumber: '01',
    name: 'Preform Conditioning',
    subtitle: '8-Zone NIR Quartz Heating',
    icon: Flame,
    color: '#D97706', // Amber solid
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    description: 'Preforms rotate continuously through an 8-zone near-infrared quartz oven with independent PID temperature loops for neck, body, and base distribution.',
    telemetry: [
      { label: 'Oven Temperature', value: '118.5 °C', note: 'PID Regulated' },
      { label: 'Preform Rotation', value: '360° Continuous', note: 'Axial Balance' },
      { label: 'Neck Air Cooling', value: 'Active Chilled', note: 'Zero Thread Distortion' }
    ],
    statusPill: 'Infrared Penetration Depth: 100% Core Optimized',
    modelLink: '/machine/vedanta-v-blow-a4-fully-automatic-pet-blow-moulding-machine-4-cavity'
  },
  {
    id: 'blowing',
    stepNumber: '02',
    name: 'Servo Stretch Blow',
    subtitle: 'Linear Stepping & 30-Bar Clamp',
    icon: Cpu,
    color: '#1D4ED8', // Solid Vedanta Blue
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
    description: 'Precision dual servo motors drive stretch rods downward while heavy-duty 180 kN toggle platens clamp the mould. 30 to 35 Bar high-pressure air forms crystal-clear bottles.',
    telemetry: [
      { label: 'Toggle Clamp Force', value: '180 kN', note: 'Rigid Platen Lock' },
      { label: 'Blowing Pressure', value: '30.4 Bar', note: 'Food-Grade Air' },
      { label: 'Servo Cycle Speed', value: '0.72 sec', note: 'Repeatability ±0.02mm' }
    ],
    statusPill: 'Parting-Line Precision: Sub-Millimeter Flash-Free',
    modelLink: '/machine/vedanta-v-blow-a4-fully-automatic-pet-blow-moulding-machine-4-cavity'
  },
  {
    id: 'recovery',
    stepNumber: '03',
    name: 'Air Energy Recovery',
    subtitle: 'Recapturing High-Pressure Exhaust',
    icon: Wind,
    color: '#059669', // Emerald solid
    badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    description: 'Integrated dual pneumatic recovery manifold intercepts the high-pressure exhaust before venting, routing 25% of compressed air back into the 10-Bar low-pressure line.',
    telemetry: [
      { label: 'Compressed Air Recycled', value: '25.8%', note: 'To Low-Pressure Line' },
      { label: 'Compressor Duty Cycle', value: '-22% Load', note: 'Lower Heat & Wear' },
      { label: 'Electricity Savings', value: '₹14,500/mo', note: 'At 16 Hrs/Day Running' }
    ],
    statusPill: 'Energy Recovery Circuit: Active & Recapturing',
    modelLink: '/machine/vedanta-v-blow-a4-fully-automatic-pet-blow-moulding-machine-4-cavity'
  },
  {
    id: 'bottling',
    stepNumber: '04',
    name: 'Filling & Monoblock',
    subtitle: 'Air Conveyor to RFC Monoblock',
    icon: Droplets,
    color: '#1D4ED8', // Solid Vedanta Blue
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
    description: 'Blown bottles discharge onto high-velocity sanitary air conveyors leading directly into the RFC 16-16-5 Monoblock for rinsing, filling, and magnetic torque capping.',
    telemetry: [
      { label: 'Line Output Speed', value: '4,800 BPH', note: '80 Bottles / Minute' },
      { label: 'Liquid Contact Parts', value: 'SS316 Food-Grade', note: 'Zero Contamination' },
      { label: 'Cap Torque Accuracy', value: '1.8 - 2.4 Nm', note: 'Magnetic Head Chucks' }
    ],
    statusPill: 'BIS IS:14543 Hygiene Protocol Verified',
    modelLink: '/turnkey'
  }
];

export default function IndustrialBottlingWorkflow({ onOpenQuote }) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const currentStage = WORKFLOW_STAGES[activeStageIndex];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-7 shadow-xs">
      {/* Component Header (21st.dev Style: Technical, Crisp, Non-Vibe Coded) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
              OEM Operational Pipeline
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight mt-0.5">
            Servo Linear Bottling Automation Workflow
          </h3>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            type="button"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 text-xs font-mono font-semibold transition-colors cursor-pointer"
            title={isAutoPlay ? "Pause Auto-Advancing" : "Resume Auto-Advancing"}
            aria-label={isAutoPlay ? "Pause Auto-Advancing" : "Resume Auto-Advancing"}
          >
            {isAutoPlay ? (
              <>
                <Pause className="w-3 h-3 text-blue-700" />
                <span>Live Cycle</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-slate-600" />
                <span>Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 4-Stage Step Bar (21st.dev Stepper Navigation) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
        {WORKFLOW_STAGES.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          const StageIcon = stage.icon;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => {
                setActiveStageIndex(idx);
                setIsAutoPlay(false);
              }}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-50/70 border-blue-700 shadow-2xs'
                  : 'bg-slate-50/60 hover:bg-slate-100/70 border-slate-200/80 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {stage.stepNumber}
                </span>
                <StageIcon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
              </div>
              <div className={`text-xs font-bold truncate ${isActive ? 'text-slate-950' : 'text-slate-700'}`}>
                {stage.name}
              </div>
              <div className="text-[10px] text-slate-500 font-mono truncate mt-0.5">
                {stage.subtitle.split('&')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card (Solid White, High-Contrast Industrial Layout) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 sm:p-6"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-800 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  STAGE {currentStage.stepNumber} OF 04
                </span>
                <span className={`text-[11px] font-medium font-mono px-2 py-0.5 rounded border ${currentStage.badgeColor}`}>
                  {currentStage.statusPill}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-950">
                {currentStage.name} — <span className="text-slate-700 font-medium">{currentStage.subtitle}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                {currentStage.description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-end">
              <Link
                to={currentStage.modelLink}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 px-3.5 py-2 rounded-full border border-slate-300 transition-colors shadow-2xs"
              >
                <span>View Specs</span>
                <ArrowRight className="w-3 h-3 text-slate-500" />
              </Link>
              {onOpenQuote && (
                <button
                  type="button"
                  onClick={() => onOpenQuote('VT-BLOW-A4')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white px-3.5 py-2 rounded-full transition-colors shadow-2xs cursor-pointer"
                >
                  <Gauge className="w-3 h-3" />
                  <span>Get Quotation</span>
                </button>
              )}
            </div>
          </div>

          {/* Telemetry Readouts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentStage.telemetry.map((t, i) => (
              <div 
                key={i} 
                className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs"
              >
                <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold mb-0.5">
                  {t.label}
                </div>
                <div className="text-base font-black text-slate-950 font-mono">
                  {t.value}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{t.note}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
