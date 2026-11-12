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

        {/* Guide Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {guides.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGuide(g.id)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                activeGuide === g.id
                  ? 'bg-blue-50 border-blue-600 shadow-sm ring-1 ring-blue-600'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase mb-2">
                <span className={activeGuide === g.id ? 'text-blue-800' : 'text-slate-500'}>
                  {g.tag}
                </span>
                <span className="text-slate-400">{g.readTime}</span>
              </div>
              <h3 className={`text-xs sm:text-sm font-bold line-clamp-2 ${activeGuide === g.id ? 'text-blue-950' : 'text-slate-800'}`}>
                {g.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="industrial-card p-6 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm mb-12">
          {/* Guide 1: Semi vs Auto */}
          {activeGuide === 'semi-vs-auto' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">GUIDE 01</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2 mb-2">
                  Semi-Automatic vs Fully Automatic PET Blow Moulding Machine
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Which machine matches your production volume, budget, and labor constraints?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-950 text-base">Semi-Automatic (VT-BLOW-S2)</span>
                    <span className="font-mono text-xs font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      ₹3.50L - ₹4.80L
                    </span>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-700">
                    <li>• <strong>Output:</strong> 800 - 1,200 Bottles/Hour (500ml/1000ml)</li>
                    <li>• <strong>Labor:</strong> Requires 1 dedicated manual operator per shift to place preforms in the heater and transfer them into the mould</li>
                    <li>• <strong>Rejection Rate:</strong> 1.5% - 3.0% (dependent on operator speed and heating transfer time)</li>
                    <li>• <strong>Connected Power:</strong> 12 - 16 kW total (lower compressor demand)</li>
                    <li>• <strong>Best For:</strong> Startups, regional water plants (&lt; 10,000 bottles/day), custom edible oil, or pesticide bottles</li>
                  </ul>
                  <button
                    onClick={() => handleVideoRequest('Semi-Automatic 2-Cavity Blower')}
                    className="w-full mt-2 inline-flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-blue-700 fill-blue-700" />
                    <span>Watch Semi-Auto Run Video on WhatsApp</span>
                  </button>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-950 text-base">Fully Automatic (VT-BLOW-A4)</span>
                    <span className="font-mono text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
                      ₹14.50L - ₹18.00L
                    </span>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-700">
                    <li>• <strong>Output:</strong> 3,600 - 4,800 Bottles/Hour continuous</li>
                    <li>• <strong>Labor:</strong> 0 manual loading. Hopper elevator feeds preforms automatically; auto-ejection onto air conveyor</li>
                    <li>• <strong>Rejection Rate:</strong> &lt; 0.2% (precision infrared quartz heating with Schneider/Delta PLC servo stretch)</li>
                    <li>• <strong>Connected Power:</strong> 28 - 34 kW total (requires 30-bar high-pressure compressor)</li>
                    <li>• <strong>Best For:</strong> Commercial water brands, high-speed bottling lines (&gt; 25,000 bottles/day), continuous 2-shift operations</li>
                  </ul>
                  <button
                    onClick={() => handleVideoRequest('Fully Automatic 4-Cavity Blower')}
                    className="w-full mt-2 inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Auto 4-Cavity Run Video on WhatsApp</span>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <span className="font-bold text-slate-900 uppercase font-mono block">The Straight Truth Recommendation:</span>
                <p>
                  If you have less than ₹12 Lakhs total working capital, buy a Semi-Automatic unit with a good quality 30-bar compressor. You can blow bottles for regional supply, recover your capital within 4 to 6 months, and then upgrade to a Fully Automatic line once your daily sales cross 15,000 bottles.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenQuote('VT-BLOW-S2')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer"
                >
                  Get Itemized Quotation for Both Models
                </button>
                <button
                  onClick={() => handleWhatsApp('Semi vs Auto Machine Pricing')}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Ask an Engineer on WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* Guide 2: 20L Jar Plant */}
          {activeGuide === '20l-jar-plant' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">GUIDE 02</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2 mb-2">
                  Complete Setup Guide for a 20-Litre Jar Bottling Plant
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  What equipment, utility power, factory area, and BIS IS:14543 compliance do you actually need?
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl">
                  <thead className="bg-slate-100 font-mono text-slate-700 uppercase">
                    <tr>
                      <th className="p-3">Required Equipment</th>
                      <th className="p-3">Technical Rating</th>
                      <th className="p-3">Connected Power</th>
                      <th className="p-3">Indicative Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-semibold">20L PET Jar Blow Moulding Machine</td>
                      <td className="p-3">120 - 180 JPH (Handles 650g - 750g preforms)</td>
                      <td className="p-3 font-mono">18 kW</td>
                      <td className="p-3 font-mono font-bold">₹7,20,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">20-Bar Reciprocating High Pressure Air Compressor</td>
                      <td className="p-3">30 CFM with air receiver tank and refrigerated dryer</td>
                      <td className="p-3 font-mono">11 kW (15 HP)</td>
                      <td className="p-3 font-mono font-bold">₹3,80,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">20L Jar Internal/External Rinsing, Filling & Capping</td>
                      <td className="p-3">100 - 200 Jars/Hour Monoblock (SS 304)</td>
                      <td className="p-3 font-mono">3.5 kW</td>
                      <td className="p-3 font-mono font-bold">₹5,50,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Commercial RO Water Treatment Plant</td>
                      <td className="p-3">1,000 LPH output with Sand, Carbon & Micron Filters</td>
                      <td className="p-3 font-mono">3.0 kW</td>
                      <td className="p-3 font-mono font-bold">₹3,20,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">In-House BIS IS:14543 Testing Laboratory</td>
                      <td className="p-3">Laminar Air Flow, Autoclave, Incubator, Chemical Glassware</td>
                      <td className="p-3 font-mono">2.5 kW</td>
                      <td className="p-3 font-mono font-bold">₹2,80,000</td>
                    </tr>
                    <tr className="bg-blue-50/60 font-bold">
                      <td className="p-3 text-blue-900" colSpan="2">Complete Turnkey 20L Plant Package (Ex-Factory)</td>
                      <td className="p-3 font-mono text-blue-900">~38 kW</td>
                      <td className="p-3 font-mono text-blue-900 text-sm">₹22,50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Space Needed</span>
                  <p className="text-slate-600">Minimum 1,500 to 2,000 sq.ft industrial shed with clean epoxy flooring and partitioned laboratory room.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Commercial Power</span>
                  <p className="text-slate-600">40 HP (30 kW) 3-phase 415V industrial electric connection required.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 uppercase font-mono block mb-1">Profit Economics</span>
                  <p className="text-slate-600">Cost to produce 1 filled 20L jar: ₹5.50 (water + cap + power). Wholesale dispatch price: ₹22 - ₹35.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuote('VT-BLOW-JAR20')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer"
                >
                  Request 20L Jar Plant Quotation & Layout
                </button>
                <button
                  onClick={() => handleVideoRequest('20 Litre Jar Blowing Machine')}
                  className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 text-blue-700 fill-blue-700" />
                  <span>Watch 20L Jar Machine Video</span>
                </button>
              </div>
            </div>
          )}

          {/* Guide 3: Water Plant Cost */}
          {activeGuide === 'water-plant-cost' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">GUIDE 03</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2 mb-2">
                  Packaged Drinking Water Plant (40 / 60 / 120 BPM) Cost Breakdown
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  What does a single bottle actually cost to manufacture in India?
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900">
                  Raw Material & Production Cost per 500ml Packaged Water Bottle (2026 Mumbai/Maharashtra Benchmark)
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg">
                    <thead className="bg-white font-mono text-slate-700 uppercase">
                      <tr>
                        <th className="p-2.5">Cost Component</th>
                        <th className="p-2.5">Specification</th>
                        <th className="p-2.5 text-right">Cost Per Bottle (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-2.5 font-semibold">PET Preform</td>
                        <td className="p-2.5">11.5 gram (28mm PCO 1881 neck @ ₹125/kg)</td>
                        <td className="p-2.5 text-right font-mono font-bold">₹1.44</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Plastic Cap</td>
                        <td className="p-2.5">28mm 1-piece with tamper ring</td>
                        <td className="p-2.5 text-right font-mono font-bold">₹0.35</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">BOPP Roll Label</td>
                        <td className="p-2.5">Pearlized / Metallic printed roll film</td>
                        <td className="p-2.5 text-right font-mono font-bold">₹0.22</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Water Treatment & Disinfection</td>
                        <td className="p-2.5">RO filtration, Micron polishing, Ozone dosing</td>
                        <td className="p-2.5 text-right font-mono font-bold">₹0.08</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Power & High-Pressure Air</td>
                        <td className="p-2.5">Compressor, blower, chiller, conveyor power</td>
                        <td className="p-2.5 text-right font-mono font-bold">₹0.16</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Secondary Packaging (Shrink Film)</td>
                        <td className="p-2.5">LDPE film for 24-bottle matrix bundle</td>
                        <td className="p-2.5 text-right font-mono font-bold">₹0.30</td>
                      </tr>
                      <tr className="bg-emerald-50/70 font-bold text-emerald-950">
                        <td className="p-3" colSpan="2">TOTAL DIRECT MANUFACTURING COST (500ml)</td>
                        <td className="p-3 text-right font-mono text-sm">₹2.55</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 font-mono block">Wholesale Dispatch Price to Distributors:</span>
                    <span className="text-base font-black text-slate-950 font-mono">₹4.50 - ₹5.50 / bottle</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">(Net manufacturer margin: ₹1.95 - ₹2.95 per bottle)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 font-mono block">Consumer MRP:</span>
                    <span className="text-base font-black text-slate-950 font-mono">₹10.00 / bottle</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">(Standard retailer & dealer margin applies)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuote('VT-TURNKEY-60')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer"
                >
                  Get Complete Turnkey Plant Quotation
                </button>
                <button
                  onClick={() => handleWhatsApp('Packaged Drinking Water Plant Quotation')}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Discuss Project with Sales Engineer</span>
                </button>
              </div>
            </div>
          )}

          {/* Guide 4: Preform Sizing */}
          {activeGuide === 'preform-sizing' && (
            <div className="space-y-8 animate-fade-in text-slate-800 text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">GUIDE 04</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-2 mb-2">
                  PET Preform Grammage & Neck Selection Guide
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  How light-weighting your preforms saves ₹1,50,000+ per month in raw material expenses.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl">
                  <thead className="bg-slate-100 font-mono text-slate-700 uppercase">
                    <tr>
                      <th className="p-3">Bottle Size</th>
                      <th className="p-3">Optimal Weight Range</th>
                      <th className="p-3">Recommended Neck Standard</th>
                      <th className="p-3">Application Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-semibold">200ml - 250ml</td>
                      <td className="p-3 font-mono font-bold">9.0g - 11.0g</td>
                      <td className="p-3 font-mono">28mm Alaska / PCO 1881</td>
                      <td className="p-3">Packaged Water, Airlines, Events</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">500ml</td>
                      <td className="p-3 font-mono font-bold">11.5g - 13.5g</td>
                      <td className="p-3 font-mono">28mm PCO 1881 (Short Neck)</td>
                      <td className="p-3">Still Mineral Water (Standard)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">1,000ml (1 Litre)</td>
                      <td className="p-3 font-mono font-bold">17.5g - 20.0g</td>
                      <td className="p-3 font-mono">28mm PCO 1881</td>
                      <td className="p-3">Retail Water, Juice, FMCG</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">2,000ml (2 Litre)</td>
                      <td className="p-3 font-mono font-bold">32.0g - 36.0g</td>
                      <td className="p-3 font-mono">28mm PCO 1810 / 1881</td>
                      <td className="p-3">Bulk Household Water, Soft Drinks</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">5 Litre Can / Jar</td>
                      <td className="p-3 font-mono font-bold">85g - 95g</td>
                      <td className="p-3 font-mono">38mm / 45mm Neck</td>
                      <td className="p-3">Edible Oil, Institutional Water</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">20 Litre Commercial Bubble Top</td>
                      <td className="p-3 font-mono font-bold">680g - 740g</td>
                      <td className="p-3 font-mono">55mm Snap-on Neck</td>
                      <td className="p-3">Office & Household Water Delivery</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-950 space-y-2">
                <span className="font-bold uppercase font-mono block">The Preform Lightweighting Rule:</span>
                <p>
                  Every 1.0 gram reduction in preform weight saves approximately ₹0.12 per bottle. On a 4-cavity machine blowing 30,000 bottles per day, a 1-gram optimization saves ₹3,600 every day—which is <strong>₹1,08,000 per month straight into your bottom line</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuote('PREFORM-CONSULTATION')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer"
                >
                  Consult on Preform Molds & Grammage
                </button>
                <button
                  onClick={() => handleWhatsApp('Preform Mold Sizing and Preform Sourcing')}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Ask Preform Sourcing Questions</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Live Factory Video & Visit Callout */}
        <div className="industrial-card p-6 sm:p-8 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800">
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
