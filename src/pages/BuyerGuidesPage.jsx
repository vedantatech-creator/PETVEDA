import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Play,
  Phone
} from 'lucide-react';
import MetaSEO from '../components/MetaSEO';

export default function BuyerGuidesPage({ onOpenQuote }) {
  const [activeGuide, setActiveGuide] = useState('semi-vs-auto');

  const guides = [
    {
      id: 'semi-vs-auto',
      title: 'Semi-Automatic vs Fully Automatic PET Blow Moulding Machine',
      subtitle: 'Real CapEx, labor expense, and break-even calculations for 2026',
      tag: 'CapEx & ROI',
      readTime: '4 min read'
    },
    {
      id: '20l-jar-plant',
      title: 'How to Setup a 20-Litre Jar Bottling Plant',
      subtitle: 'Machinery checklist, power, space, and BIS IS:14543 lab requirements',
      tag: 'Plant Setup',
      readTime: '6 min read'
    },
    {
      id: 'water-plant-cost',
      title: 'Turnkey Packaged Water Plant (40 / 60 / 120 BPM) Cost Breakdown',
      subtitle: 'Complete equipment schedule and exact ₹ per bottle manufacturing cost',
      tag: 'Turnkey Economics',
      readTime: '5 min read'
    },
    {
      id: 'preform-sizing',
      title: 'PET Preform Grammage & Neck Selection Guide',
      subtitle: 'Standard weights for 250ml, 500ml, 1L, 2L & 20L bottles to optimize raw material',
      tag: 'Technical Guide',
      readTime: '3 min read'
    }
  ];

  const handleWhatsApp = (topic) => {
    const text = encodeURIComponent(
      `Hello Vedanta Technologies, I am reading your Buyer Guide on "${topic}". I need real supplier pricing, factory specs, and equipment availability.`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  const handleVideoRequest = (machine) => {
    const text = encodeURIComponent(
      `Hello Vedanta Technologies, I want to watch a 60-second video of the ${machine} running at your Vasai manufacturing unit. Please share on WhatsApp.`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <MetaSEO
        title="PET Machinery Buyer Guides & Plant Setup Economics | Vedanta Technologies"
        description="Factual, supplier-verified machinery guides for beverage entrepreneurs. Semi vs fully auto blowers, 20L jar plant requirements, and BIS IS:14543 water bottling costs."
        keywords="semi automatic vs fully automatic pet blowing machine, 20 litre jar plant cost, packaged drinking water plant cost India, pet preform weight for 500ml, mineral water plant setup"
        canonicalUrl="https://vedantatechnologies.in/guides"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>REAL BUYER DECISION GUIDES • FACTORY SOURCED</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Honest Numbers Before You Buy Machinery.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Written directly from our shop-floor engineering data in Vasai, Maharashtra. No marketing fluff, no theoretical estimates—just real capital requirements, power loads, and operating costs.
          </p>
        </div>

        {/* Guide Switcher Tabs (Nielsen Law #4: Consistency & Standards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {guides.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGuide(g.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                activeGuide === g.id
                  ? 'bg-blue-50/70 border-2 border-blue-700 shadow-xs'
                  : 'bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 hover:shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase mb-2">
                <span className={activeGuide === g.id ? 'text-blue-900 font-extrabold' : 'text-slate-500'}>
                  {g.tag}
                </span>
                <span className="text-slate-500 font-mono">{g.readTime}</span>
              </div>
              <h3 className={`text-xs sm:text-sm font-bold line-clamp-2 ${activeGuide === g.id ? 'text-blue-950 font-black' : 'text-slate-800'}`}>
                {g.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Content Box (Standardized Nielsen 10-Law Design Rhythm across all Guides) */}
        <div className="p-6 sm:p-10 bg-white border border-slate-300 rounded-2xl shadow-sm mb-12">
          {/* ============================================================== */}
          {/* GUIDE 1: Semi vs Fully Automatic */}
          {/* ============================================================== */}
          {activeGuide === 'semi-vs-auto' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              {/* 1. Header */}
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  GUIDE 01 • DECISION MATRIX
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2.5 mb-1.5">
                  Semi-Automatic vs Fully Automatic PET Blow Moulding Machine
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Compare output speed, labor dependency, rejection rates, power load, and initial investment before finalizing your purchase.
                </p>
              </div>

              {/* 2. Key Metric Scorecard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Output Speed</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5 block">
                    1K vs 4.8K BPH
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Semi: 1,200 | Auto: 4,800 BPH</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Connected Power</span>
                  <span className="text-base sm:text-lg font-black text-blue-800 font-mono mt-0.5 block">
                    14 kW vs 36 kW
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">20 HP vs 45 HP Sanctioned</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Machinery CapEx</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5 block">
                    ₹3.5L vs ₹16.5L
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Ex-factory benchmark rates</span>
                </div>
              </div>

              {/* 3. Standardized Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl">
                  <thead className="bg-slate-100 font-mono text-slate-700 uppercase">
                    <tr>
                      <th className="p-3">Parameter / Feature</th>
                      <th className="p-3">Semi-Automatic (VT-BLOW-S2)</th>
                      <th className="p-3">Fully Automatic (VT-BLOW-A4)</th>
                      <th className="p-3">First-Time Buyer Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Rated Output Speed</td>
                      <td className="p-3 font-mono">800 - 1,200 Bottles / Hour</td>
                      <td className="p-3 font-mono font-bold text-blue-900">3,600 - 4,800 Bottles / Hour</td>
                      <td className="p-3 text-slate-600">Auto yields 4x higher daily volume</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Operator Labor Required</td>
                      <td className="p-3">1 dedicated manual loader per shift</td>
                      <td className="p-3 font-semibold text-slate-900">0 manual loading (Hopper elevator)</td>
                      <td className="p-3 text-slate-600">Saves ₹18,000/month operator wages on Auto</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Defect & Rejection Rate</td>
                      <td className="p-3 font-mono">1.5% - 3.0% (Manual timing)</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">&lt; 0.2% (Infrared PID + Servo)</td>
                      <td className="p-3 text-slate-600">Consistent bottle wall distribution and zero parting flash</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Blowing Air Pressure</td>
                      <td className="p-3 font-mono">20 - 25 Bar</td>
                      <td className="p-3 font-mono">28 - 35 Bar (with Air Recovery)</td>
                      <td className="p-3 text-slate-600">Auto recycles 25% compressed air back to low-pressure</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold">
                      <td className="p-3 text-slate-900">Indicative Machine Cost</td>
                      <td className="p-3 font-mono text-slate-900">₹3,50,000 - ₹4,80,000</td>
                      <td className="p-3 font-mono text-blue-900">₹16,50,000 - ₹22,00,000</td>
                      <td className="p-3 text-blue-900">Low upfront barrier vs long-term automation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. First-Time Buyer Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Factory Space</span>
                  <p className="text-slate-600 leading-relaxed">
                    600 sq.ft for Semi-Auto setup vs 1,200 sq.ft for Fully Auto with automatic air conveying lines.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Commercial Power</span>
                  <p className="text-slate-600 leading-relaxed">
                    20 HP 3-phase connection for Semi-Auto vs 45 HP sanctioned commercial power for Fully Auto.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Recommended Payback</span>
                  <p className="text-slate-600 leading-relaxed">
                    Under ₹12L capital: start with Semi-Auto S2, recover costs in 4-6 months, then upgrade to Fully Auto A4.
                  </p>
                </div>
              </div>

              {/* 5. Standardized Dual-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenQuote('VT-BLOW-S2')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  Request Itemized Quotation for Both Models
                </button>
                <button
                  onClick={() => handleWhatsApp('Semi vs Auto Machinery Comparison')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>Discuss Sizing with Engineer on WhatsApp</span>
                </button>
              </div>

              {/* 6. Pricing Disclaimer */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-mono text-slate-600 space-y-1">
                <p className="font-semibold text-slate-900">• Clause 1: Prices and production rates are indicative benchmarks based on 2026 raw material pricing.</p>
                <p className="text-slate-600">• Clause 2: Please submit an official inquiry or speak with our sales engineers for an exact, project-specific commercial proposal.</p>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* GUIDE 2: 20L Jar Plant */}
          {/* ============================================================== */}
          {activeGuide === '20l-jar-plant' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              {/* 1. Header */}
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  GUIDE 02 • PROJECT SPECIFICATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2.5 mb-1.5">
                  Complete Setup Guide for a 20-Litre Jar Bottling Plant
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  What equipment, utility power, factory floor area, and BIS IS:14543 compliance do you actually need to start commercial operations?
                </p>
              </div>

              {/* 2. Key Metric Scorecard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Output Speed</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5 block">
                    120 - 200 JPH
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Handles 650g - 750g 20L preforms</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Connected Power</span>
                  <span className="text-base sm:text-lg font-black text-blue-800 font-mono mt-0.5 block">
                    ~38 kW Total
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">40 HP 3-Phase 415V connection</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Complete Turnkey CapEx</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5 block">
                    ₹22,50,000
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Ex-factory Vasai turnkey package</span>
                </div>
              </div>

              {/* 3. Standardized Equipment Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl">
                  <thead className="bg-slate-100 font-mono text-slate-700 uppercase">
                    <tr>
                      <th className="p-3">Required Equipment</th>
                      <th className="p-3">Technical Specification</th>
                      <th className="p-3">Connected Power</th>
                      <th className="p-3">Indicative Investment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">20L PET Jar Blow Moulding Machine</td>
                      <td className="p-3">120 - 180 JPH (Handles 650g - 750g preforms)</td>
                      <td className="p-3 font-mono">18 kW</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹7,20,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">20-Bar Reciprocating High Pressure Air Compressor</td>
                      <td className="p-3">30 CFM with air receiver tank and refrigerated dryer</td>
                      <td className="p-3 font-mono">11 kW (15 HP)</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹3,80,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">20L Jar Monoblock (Wash, Fill & Cap)</td>
                      <td className="p-3">100 - 200 Jars/Hour automated SS 304 monoblock</td>
                      <td className="p-3 font-mono">3.5 kW</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹5,50,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Commercial RO Water Treatment Plant</td>
                      <td className="p-3">1,000 LPH output with Sand, Carbon & Micron polishing</td>
                      <td className="p-3 font-mono">3.0 kW</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹3,20,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">In-House BIS IS:14543 Testing Laboratory</td>
                      <td className="p-3">Laminar Air Flow, Autoclave, Incubator, Chemical Glassware</td>
                      <td className="p-3 font-mono">2.5 kW</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹2,80,000</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold">
                      <td className="p-3 text-blue-900" colSpan="2">Complete Turnkey 20L Plant Package (Ex-Factory)</td>
                      <td className="p-3 font-mono text-blue-900">~38 kW</td>
                      <td className="p-3 font-mono text-blue-900 text-sm">₹22,50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. First-Time Buyer Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Factory Space</span>
                  <p className="text-slate-600 leading-relaxed">
                    1,500 to 2,000 sq.ft industrial shed with clean epoxy flooring and partitioned lab room.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Commercial Power</span>
                  <p className="text-slate-600 leading-relaxed">
                    40 HP (30 kW) 3-phase 415V industrial electric connection required.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Profit Economics</span>
                  <p className="text-slate-600 leading-relaxed">
                    Cost to produce 1 filled 20L jar: ₹5.50 (water + cap + power). Wholesale dispatch: ₹22 - ₹35 (Net: ₹16.50 - ₹29.50/jar).
                  </p>
                </div>
              </div>

              {/* 5. Standardized Dual-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenQuote('VT-BLOW-JAR20')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  Request 20L Jar Plant Quotation & Layout
                </button>
                <button
                  onClick={() => handleWhatsApp('20L Jar Bottling Plant Inquiry')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>Discuss 20L Project with Engineer on WhatsApp</span>
                </button>
              </div>

              {/* 6. Pricing Disclaimer */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-mono text-slate-600 space-y-1">
                <p className="font-semibold text-slate-900">• Clause 1: Prices and production rates are indicative benchmarks based on 2026 raw material pricing.</p>
                <p className="text-slate-600">• Clause 2: Please submit an official inquiry or speak with our sales engineers for an exact, project-specific commercial proposal.</p>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* GUIDE 3: Water Plant Cost Breakdown */}
          {/* ============================================================== */}
          {activeGuide === 'water-plant-cost' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              {/* 1. Header */}
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  GUIDE 03 • PRODUCTION UNIT ECONOMICS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2.5 mb-1.5">
                  Packaged Drinking Water Plant (40 / 60 / 120 BPM) Cost Breakdown
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  What does a single bottle actually cost to manufacture in India? Complete breakdown of raw materials, power, and margins.
                </p>
              </div>

              {/* 2. Key Metric Scorecard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Standard Bottling Line</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5 block">
                    60 BPM (3,600 BPH)
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">28,000 - 36,000 Bottles / Shift</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Direct Cost / 500ml Bottle</span>
                  <span className="text-base sm:text-lg font-black text-emerald-700 font-mono mt-0.5 block">
                    ₹2.55 / Bottle
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Preform + Cap + Label + Power + Water</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Wholesale Dispatch Price</span>
                  <span className="text-base sm:text-lg font-black text-blue-800 font-mono mt-0.5 block">
                    ₹4.50 - ₹5.50
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Gross Margin: ₹1.95 - ₹2.95 / bottle</span>
                </div>
              </div>

              {/* 3. Standardized Cost Breakdown Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl">
                  <thead className="bg-slate-100 font-mono text-slate-700 uppercase">
                    <tr>
                      <th className="p-3">Cost Component</th>
                      <th className="p-3">Engineering Specification</th>
                      <th className="p-3">Material Standard</th>
                      <th className="p-3 text-right">Cost Per Bottle (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">PET Preform</td>
                      <td className="p-3">11.5 gram (28mm PCO 1881 short-neck)</td>
                      <td className="p-3">Virgin Food-Grade Resin @ ₹125/kg</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">₹1.44</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Plastic Cap</td>
                      <td className="p-3">28mm 1-piece with tamper evident ring</td>
                      <td className="p-3">Food Grade HDPE / PP</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">₹0.35</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">BOPP Roll Label</td>
                      <td className="p-3">Pearlized / metallic printed roll film</td>
                      <td className="p-3">Hot-Melt Cut & Stack Application</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">₹0.22</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Water Treatment & Disinfection</td>
                      <td className="p-3">RO filtration, micron polishing, ozone dosing</td>
                      <td className="p-3">Borehole Raw Water</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">₹0.08</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Power & Compressed Air</td>
                      <td className="p-3">Compressor, blower, chiller, conveyor power</td>
                      <td className="p-3">65 kW industrial connected load</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">₹0.16</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Secondary Packaging (Shrink Film)</td>
                      <td className="p-3">LDPE film bundle for 24-bottle matrix</td>
                      <td className="p-3">Automated Secondary Wrapper</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">₹0.30</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold">
                      <td className="p-3 text-emerald-950" colSpan="3">TOTAL DIRECT MANUFACTURING COST (500ml)</td>
                      <td className="p-3 text-right font-mono text-sm text-emerald-700">₹2.55</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. First-Time Buyer Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Factory Space</span>
                  <p className="text-slate-600 leading-relaxed">
                    2,500 - 3,500 sq.ft industrial shed for 60 BPM line including raw storage and finished goods staging.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Commercial Power</span>
                  <p className="text-slate-600 leading-relaxed">
                    65 kW (80 HP connection) sanctioned power for continuous 2-shift operations.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Net Monthly Profit</span>
                  <p className="text-slate-600 leading-relaxed">
                    At 30,000 bottles/day x 26 days = 7,80,000 bottles/month. Net manufacturer profit: ₹15.2L to ₹23.0L / month.
                  </p>
                </div>
              </div>

              {/* 5. Standardized Dual-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenQuote('VT-TURNKEY-60BPM')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  Get Complete Turnkey Plant Quotation
                </button>
                <button
                  onClick={() => handleWhatsApp('Packaged Drinking Water Plant Quotation')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>Discuss Project with Sales Engineer on WhatsApp</span>
                </button>
              </div>

              {/* 6. Pricing Disclaimer */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-mono text-slate-600 space-y-1">
                <p className="font-semibold text-slate-900">• Clause 1: Production unit costs and machinery rates are indicative benchmarks based on 2026 raw material pricing.</p>
                <p className="text-slate-600">• Clause 2: Please submit an official inquiry or speak with our sales engineers for an exact, project-specific commercial proposal.</p>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* GUIDE 4: Preform Sizing */}
          {/* ============================================================== */}
          {activeGuide === 'preform-sizing' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              {/* 1. Header */}
              <div className="border-b border-slate-200 pb-5">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  GUIDE 04 • MATERIAL OPTIMIZATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2.5 mb-1.5">
                  PET Preform Grammage & Neck Selection Guide
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  How light-weighting your preforms saves ₹1,50,000+ per month in recurring raw material expenses without compromising bottle strength.
                </p>
              </div>

              {/* 2. Key Metric Scorecard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Standard 500ml Weight</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5 block">
                    11.5g - 12.5g
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">28mm PCO 1881 short-neck standard</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Standard 1000ml Weight</span>
                  <span className="text-base sm:text-lg font-black text-blue-800 font-mono mt-0.5 block">
                    17.5g - 19.5g
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Optimal retail drop-test strength</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Monthly Savings</span>
                  <span className="text-base sm:text-lg font-black text-emerald-700 font-mono mt-0.5 block">
                    ~₹1.08 Lakhs
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Per 1 gram reduction at 30K bottles/day</span>
                </div>
              </div>

              {/* 3. Standardized Preform Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl">
                  <thead className="bg-slate-100 font-mono text-slate-700 uppercase">
                    <tr>
                      <th className="p-3">Bottle Volume</th>
                      <th className="p-3">Optimal Weight Range</th>
                      <th className="p-3">Recommended Neck Standard</th>
                      <th className="p-3">Primary Commercial Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">200ml - 250ml</td>
                      <td className="p-3 font-mono font-bold text-slate-900">9.0g - 11.0g</td>
                      <td className="p-3 font-mono">28mm Alaska / PCO 1881</td>
                      <td className="p-3 text-slate-600">Packaged Water, Airlines, Event Catering</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">500ml (Standard)</td>
                      <td className="p-3 font-mono font-bold text-slate-900">11.5g - 13.5g</td>
                      <td className="p-3 font-mono">28mm PCO 1881 (Short Neck)</td>
                      <td className="p-3 text-slate-600">Still Mineral Water (India Standard)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">1,000ml (1 Litre)</td>
                      <td className="p-3 font-mono font-bold text-slate-900">17.5g - 20.0g</td>
                      <td className="p-3 font-mono">28mm PCO 1881</td>
                      <td className="p-3 text-slate-600">Retail Bottled Water, FMCG, Juices</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">2,000ml (2 Litre)</td>
                      <td className="p-3 font-mono font-bold text-slate-900">32.0g - 36.0g</td>
                      <td className="p-3 font-mono">28mm PCO 1810 / 1881</td>
                      <td className="p-3 text-slate-600">Bulk Household Water, Carbonated Soda</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">5 Litre Can / Jar</td>
                      <td className="p-3 font-mono font-bold text-slate-900">85g - 95g</td>
                      <td className="p-3 font-mono">38mm / 45mm Neck</td>
                      <td className="p-3 text-slate-600">Edible Oil, Institutional Water Dispensers</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold">
                      <td className="p-3 text-slate-900">20 Litre Bubble Top</td>
                      <td className="p-3 font-mono text-blue-900">680g - 740g</td>
                      <td className="p-3 font-mono text-blue-900">55mm Snap-on Neck</td>
                      <td className="p-3 text-blue-900">Commercial 20L Water Jars</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. First-Time Buyer Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Neck Selection</span>
                  <p className="text-slate-600 leading-relaxed">
                    PCO 1881 short-neck saves 1.2g plastic per bottle compared to legacy PCO 1810.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Polymer Quality</span>
                  <p className="text-slate-600 leading-relaxed">
                    Always source IV 0.80 - 0.84 beverage-grade virgin PET resin for maximum wall strength and burst resistance.
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Annual Cost Impact</span>
                  <p className="text-slate-600 leading-relaxed">
                    Light-weighting by just 1.0g saves 780 kg of resin/month—adding ₹1,08,000 cash straight into monthly profits.
                  </p>
                </div>
              </div>

              {/* 5. Standardized Dual-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenQuote('PREFORM-CONSULTATION')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  Consult on Preform Molds & Grammage
                </button>
                <button
                  onClick={() => handleWhatsApp('Preform Mold Sizing and Sourcing')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>Discuss Preforms with Engineer on WhatsApp</span>
                </button>
              </div>

              {/* 6. Pricing Disclaimer */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-mono text-slate-600 space-y-1">
                <p className="font-semibold text-slate-900">• Clause 1: Prices and production rates are indicative benchmarks based on 2026 raw material pricing.</p>
                <p className="text-slate-600">• Clause 2: Please submit an official inquiry or speak with our sales engineers for an exact, project-specific commercial proposal.</p>
              </div>
            </div>
          )}
        </div>

        {/* Live Factory Video & Visit Callout */}
        <div className="p-6 sm:p-8 bg-slate-950 text-white rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-800 inline-block">
              LIVE MACHINE DEMONSTRATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              See the Machines Running Live in Vasai.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Don't buy machinery from brochures. Visit our Vasai workshop to see mould trials, cycle speeds, and preform heating live in person—or request a 60-second video trial on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => handleVideoRequest('All Machine Models')}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 px-5 rounded-full transition-all cursor-pointer shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Get 60s Video on WhatsApp</span>
            </button>
            <a
              href="tel:+918850848971"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-bold py-3 px-5 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Factory Sales</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
