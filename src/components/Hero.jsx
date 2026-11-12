import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Gauge, 
  Cpu,
  Factory
} from 'lucide-react';

export default function Hero({ onOpenQuote, onExploreMachines, onOpenCalculator }) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:py-20 border-b border-slate-200">
      {/* Subtle Engineering Grid Background */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-medium mb-6 shadow-2xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
          </span>
          <span className="font-bold tracking-wide uppercase text-[11px] font-mono text-blue-950">
            2026 High-Efficiency Series
          </span>
          <span className="text-blue-300">|</span>
          <span className="text-blue-800 font-medium">
            Servo-Electric Clamping & Air-Recovery Ready
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12] font-sans">
              Precision <span className="text-blue-700">PET Blow Moulding</span> & Turnkey Bottling Automation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Manufactured in Vasai, Maharashtra for regional commercial bottlers, water brands, and beverage co-packers. From raw borewell water purification to palletized shrink-wrapped packs: high-speed linear stretch blow moulding (1,800 to 8,000 BPH), SS316 RFC monoblocks, and complete BIS IS:14543 certification guidance.
            </p>

            {/* Industrial Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">Zero Parting-Line Flash</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <Cpu className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">8-Zone NIR Quartz Heating</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <Gauge className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">25% Air Energy Recovery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={onOpenCalculator}
                className="flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Calculate Bottling Line CapEx</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreMachines}
                className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-5 py-3.5 rounded-lg border border-slate-300 transition-all shadow-2xs"
              >
                <span>View Machinery Specs</span>
              </button>

              <a
                href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20am%20looking%20for%20PET%20Blow%20Moulding%20Machine%20prices."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm px-4 py-3.5 rounded-lg border border-emerald-300 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Video Demo</span>
              </a>
            </div>

            {/* Credential Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>12-Month Comprehensive OEM Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Factory className="w-4 h-4 text-blue-700" />
                <span>Direct Factory Trials in Vasai</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Machine Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="industrial-card p-6 bg-white border border-slate-200 shadow-md">
              {/* Top Badge & Live Price */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    FLAGSHIP MODEL: VT-BLOW-A4
                  </span>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    4-Cavity Fully Automatic Stretch Blower
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-slate-950 font-mono">
                    ₹16.5L - ₹22.0L
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    + 18% GST (HSN 84773000)
                  </div>
                </div>
              </div>

              {/* Machine Image Frame */}
              <div className="relative rounded-lg overflow-hidden bg-slate-50 border border-slate-200 h-56 sm:h-64 mb-4 p-4 flex items-center justify-center">
                <img
                  src="/images/products/automatic_pet_blowing_machine.jpeg"
                  alt="Vedanta V-Blow A4 Fully Automatic PET Blowing Machine"
                  className="w-full h-full object-contain filter contrast-105 transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 px-2.5 py-1 rounded text-[11px] text-slate-700 font-mono font-bold border border-slate-200 shadow-2xs">
                  Speed: 4,800 BPH
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-blue-700 text-white px-2 py-0.5 rounded text-[10px] font-mono font-semibold">
                  100ml - 2000ml
                </div>
              </div>

              {/* Technical Matrix */}
              <div className="grid grid-cols-3 gap-2.5 text-center text-xs mb-5">
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Clamping</div>
                  <div className="text-slate-900 font-bold font-mono text-xs">180 kN</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Blowing Air</div>
                  <div className="text-slate-900 font-bold font-mono text-xs">28 - 35 Bar</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Lead Time</div>
                  <div className="text-blue-800 font-bold font-mono text-xs">20 - 25 Days</div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => onOpenQuote('VT-BLOW-A4')}
                  className="w-full flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <span>Request Machine Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20please%20send%20brochure%20and%20quotation%20for%20VT-BLOW-A4."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs py-2.5 rounded-lg transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Send WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
