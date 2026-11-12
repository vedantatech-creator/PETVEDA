import React, { useState } from 'react';
import { 
  Calculator, 
  Settings, 
  Droplets, 
  Wind, 
  Zap, 
  Maximize2, 
  TrendingUp, 
  MessageSquare, 
  FileText, 
  Check, 
  Layers 
} from 'lucide-react';

export default function LineConfigurator({ onOpenQuote, hideHeader = false }) {
  // State variables for buyer requirements
  const [beverageType, setBeverageType] = useState('water'); // 'water', 'csd', 'juice', 'jar'
  const [bottleSize, setBottleSize] = useState('500ml'); // '250ml', '500ml', '1000ml', '2000ml', '20L'
  const [dailyBottles, setDailyBottles] = useState(25000);
  const [shiftHours, setShiftHours] = useState(10); // 8, 10, 16, 24 hrs

  // Sizing Calculations
  const effectiveHours = Math.max(1, shiftHours);
  const requiredBPH = Math.round(dailyBottles / effectiveHours);
  const requiredBPM = Math.round(requiredBPH / 60);

  // Determine Recommended Equipment & Indicative CapEx
  let recommendedBlower = {
    code: 'VT-BLOW-A4',
    name: 'Vedanta V-Blow A4 (4-Cavity Fully Automatic)',
    speed: '4,000 - 4,800 BPH',
    price: '₹16.5L - ₹22.0L',
    power: '36 kW',
    air: '30 Bar, 65 CFM'
  };

  let recommendedRFC = {
    name: 'Automatic RFC 16-16-5 Monoblock with Enclosure',
    speed: '60 BPM (3,600 BPH)',
    price: '₹12.0L - ₹15.5L',
    filling: 'SS316 Gravity Fill with Ozonated Rinse'
  };

  let recommendedRO = '4,000 LPH Dual-Pass RO with Ozone & UV Sterilization';
  let recommendedCompressor = '30 Bar 25 HP Reciprocating High-Pressure Compressor';
  let recommendedChiller = '5 TR Industrial Water Chiller @ 10°C';
  let estimatedFloorArea = '2,500 - 3,200 sq. ft.';
  let totalConnectedKW = 68;
  let estimatedTurnkeyCapEx = '₹38.0L - ₹48.0L';

  if (beverageType === 'jar') {
    recommendedBlower = {
      code: 'VT-BLOW-JAR20',
      name: 'Vedanta V-Blow 20L Semi-Auto Jar Blower (1-Cavity)',
      speed: '120 Jars/Hour',
      price: '₹4.5L - ₹6.5L',
      power: '22 kW',
      air: '25 Bar, 45 CFM'
    };
    recommendedRFC = {
      name: 'Automatic 20L Jar 5-Stage Washing, Filling & Capping Unit',
      speed: '150 - 200 JPH',
      price: '₹6.5L - ₹9.0L',
      filling: 'Automatic Internal Sanitization & 55mm Press Capping'
    };
    recommendedRO = '2,000 LPH RO Water Treatment Plant';
    recommendedCompressor = '25 Bar 15 HP High-Pressure Air Unit';
    recommendedChiller = '3 TR Chiller';
    estimatedFloorArea = '1,800 - 2,400 sq. ft.';
    totalConnectedKW = 42;
    estimatedTurnkeyCapEx = '₹18.0L - ₹25.0L';
  } else if (requiredBPH <= 1200) {
    recommendedBlower = {
      code: 'VT-BLOW-S2',
      name: 'Vedanta V-Blow S2 (2-Cavity Semi-Automatic)',
      speed: '1,000 - 1,200 BPH',
      price: '₹3.5L - ₹4.5L',
      power: '12 kW',
      air: '20 Bar, 35 CFM'
    };
    recommendedRFC = {
      name: '24 BPM Rinsing Filling Capping Machine',
      speed: '24 BPM (1,400 BPH)',
      price: '₹5.5L - ₹7.5L',
      filling: 'SS304 Food Grade Fill Valve'
    };
    recommendedRO = '1,500 LPH Industrial RO Plant';
    recommendedCompressor = '20 Bar 15 HP Reciprocating Compressor';
    recommendedChiller = '2 TR Chiller';
    estimatedFloorArea = '1,200 - 1,600 sq. ft.';
    totalConnectedKW = 35;
    estimatedTurnkeyCapEx = '₹16.0L - ₹22.0L';
  } else if (requiredBPH <= 2400) {
    recommendedBlower = {
      code: 'VT-BLOW-A2',
      name: 'Vedanta V-Blow A2 (2-Cavity Fully Automatic)',
      speed: '2,000 - 2,200 BPH',
      price: '₹11.0L - ₹14.0L',
      power: '20 kW',
      air: '28 Bar, 45 CFM'
    };
    recommendedRFC = {
      name: 'Automatic RFC 12-12-4 Monoblock System',
      speed: '40 BPM (2,400 BPH)',
      price: '₹8.5L - ₹11.5L',
      filling: 'Zero-drip Magnetic Torque Capping'
    };
    recommendedRO = '2,500 LPH RO Plant with Micron Filter';
    recommendedCompressor = '30 Bar 20 HP High Pressure Unit';
    recommendedChiller = '3 TR Chiller';
    estimatedFloorArea = '1,800 - 2,200 sq. ft.';
    totalConnectedKW = 48;
    estimatedTurnkeyCapEx = '₹28.0L - ₹34.0L';
  } else if (requiredBPH <= 5000) {
    recommendedBlower = {
      code: 'VT-BLOW-A4',
      name: 'Vedanta V-Blow A4 (4-Cavity Fully Automatic)',
      speed: '4,000 - 4,800 BPH',
      price: '₹16.5L - ₹22.0L',
      power: '36 kW',
      air: '30 Bar, 65 CFM'
    };
    recommendedRFC = {
      name: 'Automatic RFC 16-16-5 Monoblock with Laminar Enclosure',
      speed: '60 - 80 BPM (3,600 - 4,800 BPH)',
      price: '₹12.0L - ₹15.5L',
      filling: 'Clean-in-Place (CIP) Manifold Ready'
    };
    recommendedRO = '4,000 LPH Industrial RO Treatment System';
    recommendedCompressor = '30 Bar 30 HP Reciprocating Unit';
    recommendedChiller = '5 TR Industrial Chiller';
    estimatedFloorArea = '2,500 - 3,500 sq. ft.';
    totalConnectedKW = 72;
    estimatedTurnkeyCapEx = '₹38.0L - ₹48.0L';
  } else {
    recommendedBlower = {
      code: 'VT-BLOW-A6',
      name: 'Vedanta V-Blow A6 High-Speed Servo (6-Cavity)',
      speed: '7,000 - 8,000 BPH',
      price: '₹28.0L - ₹36.0L',
      power: '60 kW',
      air: '35 Bar, 110 CFM'
    };
    recommendedRFC = {
      name: 'Rotary RFC 24-24-8 Monoblock Enclosure',
      speed: '120 BPM (7,200 BPH)',
      price: '₹22.0L - ₹28.0L',
      filling: 'High-Speed Rotary Isobaric / Gravity'
    };
    recommendedRO = '8,000 LPH High-Capacity RO Plant with Ozonator';
    recommendedCompressor = '35 Bar 40 HP Heavy Industrial Compressor';
    recommendedChiller = '7.5 TR Chiller';
    estimatedFloorArea = '4,000 - 5,500 sq. ft.';
    totalConnectedKW = 125;
    estimatedTurnkeyCapEx = '₹65.0L - ₹85.0L';
  }

  // Adjust for CSD
  if (beverageType === 'csd') {
    recommendedRFC.name = `Isobaric Counter-Pressure ${recommendedRFC.speed.split('(')[0]} Monoblock with CO2 Carbonator`;
    estimatedTurnkeyCapEx = '₹42.0L - ₹54.0L';
  } else if (beverageType === 'juice') {
    recommendedRFC.name = `Hot-Fill / Vacuum Juice ${recommendedRFC.speed.split('(')[0]} Monoblock with Recirculation`;
    estimatedTurnkeyCapEx = '₹45.0L - ₹58.0L';
  }

  // Calculate Unit Economics Margin
  const profitPerBottle = beverageType === 'jar' ? 14.5 : (beverageType === 'csd' ? 3.8 : 2.6);
  const estimatedMonthlyGrossMarginLakhs = ((dailyBottles * 26 * profitPerBottle) / 100000).toFixed(1);

  return (
    <section id="calculator" className={`${hideHeader ? 'py-4 lg:py-6' : 'py-16 lg:py-24 border-b border-slate-200'} bg-white relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header (Only shown when not embedded in dedicated page) */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
              <Calculator className="w-3.5 h-3.5 text-blue-700" />
              DYNAMIC SIZING & CAPEX ENGINE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Interactive Bottling Line Configurator
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select your desired output, beverage category, and container volume. Our sizing engine instantly calculates your required blow moulding machine, RFC monoblock, RO purification capacity, compressor, and floor layout.
            </p>
          </div>
        )}

        {/* Configurator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Inputs */}
          <div className="lg:col-span-5 industrial-card p-6 sm:p-7 bg-white border border-slate-200 space-y-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Settings className="w-4 h-4 text-blue-700" />
              1. Project Specifications
            </h3>

            {/* Beverage Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Beverage Category
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'water', label: 'Packaged Water (ISI)' },
                  { id: 'csd', label: 'CSD Soda & Soft Drinks' },
                  { id: 'juice', label: 'Fruit Juice / Hot Fill' },
                  { id: 'jar', label: '20L Bulk Water Jars' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setBeverageType(item.id);
                      if (item.id === 'jar') setBottleSize('20L');
                      else if (bottleSize === '20L') setBottleSize('500ml');
                    }}
                    className={`py-2.5 px-3 rounded-lg border text-left font-semibold transition-all ${
                      beverageType === item.id
                        ? 'bg-blue-700 text-white border-blue-700 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottle Volume */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Target Container Size
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                {beverageType === 'jar' ? (
                  ['5 Litre Can', '20 Litre Jar (5 Gallon)'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setBottleSize(s)}
                      className="py-2 px-3.5 rounded-lg border bg-blue-700 text-white border-blue-700 font-semibold"
                    >
                      {s}
                    </button>
                  ))
                ) : (
                  ['200ml - 250ml', '500ml (Standard)', '1000ml (1 Litre)', '2000ml (2 Litre)'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setBottleSize(s)}
                      className={`py-2 px-3.5 rounded-lg border text-xs font-semibold transition-all ${
                        bottleSize === s
                          ? 'bg-blue-700 text-white border-blue-700 shadow-2xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Target Output Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Target Daily Production
                </label>
                <span className="text-sm font-mono font-bold text-blue-800">
                  {dailyBottles.toLocaleString()} {beverageType === 'jar' ? 'Jars' : 'Bottles'} / Day
                </span>
              </div>
              <input
                type="range"
                min={beverageType === 'jar' ? 500 : 5000}
                max={beverageType === 'jar' ? 5000 : 100000}
                step={beverageType === 'jar' ? 100 : 2500}
                value={dailyBottles}
                onChange={(e) => setDailyBottles(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>{beverageType === 'jar' ? '500' : '5,000'}</span>
                <span>{beverageType === 'jar' ? '2,500' : '50,000'}</span>
                <span>{beverageType === 'jar' ? '5,000+' : '100,000+'}</span>
              </div>
            </div>

            {/* Daily Operational Shift */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Daily Operational Hours
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {[8, 10, 16, 24].map((hrs) => (
                  <button
                    key={hrs}
                    onClick={() => setShiftHours(hrs)}
                    className={`py-2 rounded-lg border text-center font-mono font-bold transition-all ${
                      shiftHours === hrs
                        ? 'bg-blue-700 text-white border-blue-700 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    {hrs} Hrs
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Hourly Output Display */}
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg flex justify-between items-center text-xs">
              <div>
                <span className="text-slate-600 font-medium">Required Hourly Output:</span>
                <div className="text-base font-extrabold text-slate-900 font-mono mt-0.5">
                  {requiredBPH.toLocaleString()} {beverageType === 'jar' ? 'JPH' : 'BPH'} ({requiredBPM} BPM)
                </div>
              </div>
              <div className="text-right font-mono text-[11px] text-blue-800 bg-blue-100 border border-blue-200 px-2 py-1 rounded font-bold">
                Calculated Sizing
              </div>
            </div>
          </div>

          {/* Right Side: Recommended Line & CapEx Summary */}
          <div className="lg:col-span-7 bg-white border border-slate-300 rounded-2xl p-5 sm:p-7 space-y-5 shadow-xs">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-700" />
                2. Recommended Machine Line & Investment
              </h3>
              <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                Matched Setup
              </span>
            </div>

            {/* Primary Machinery Modules (Clean & Streamlined) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-blue-700" />
                  PET Blow Moulder
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {recommendedBlower.name}
                </div>
                <div className="text-blue-800 text-xs mt-1 font-mono font-bold">
                  {recommendedBlower.price} • {recommendedBlower.speed}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-blue-700" />
                  RFC Filling Monoblock
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {recommendedRFC.name}
                </div>
                <div className="text-blue-800 text-xs mt-1 font-mono font-bold">
                  {recommendedRFC.price} • {recommendedRFC.speed}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-blue-700" />
                  Water Purification (RO)
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {recommendedRO}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-blue-700" />
                  Compressor & Chiller
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {recommendedCompressor}
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-mono">
                  {recommendedChiller}
                </div>
              </div>
            </div>

            {/* Utility Requirements Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono flex items-center justify-center gap-1 font-semibold">
                  <Zap className="w-3 h-3 text-blue-700" /> Power Load
                </div>
                <div className="text-sm sm:text-base font-black text-slate-900 font-mono mt-1">
                  ~{totalConnectedKW} kW
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono flex items-center justify-center gap-1 font-semibold">
                  <Maximize2 className="w-3 h-3 text-blue-700" /> Factory Area
                </div>
                <div className="text-sm sm:text-base font-black text-slate-900 font-mono mt-1">
                  {estimatedFloorArea}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase font-mono flex items-center justify-center gap-1 font-semibold">
                  <TrendingUp className="w-3 h-3 text-emerald-700" /> Total CapEx
                </div>
                <div className="text-sm sm:text-base font-black text-blue-800 font-mono mt-1">
                  {estimatedTurnkeyCapEx}
                </div>
              </div>
            </div>

            {/* Turnkey Scope Summary (Clean, human, uncluttered) */}
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-semibold text-slate-900">
                  Turnkey Scope: RO Water + Blow Moulder + Monoblock + BOPP Labeler + Packaging + BIS Lab.
                </div>
                <div className="font-mono text-[11px] text-emerald-700 font-bold">
                  Estimated Operating Gross Margin: ~₹{estimatedMonthlyGrossMarginLakhs} Lakhs/month (@ 26 working days)
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenQuote(recommendedBlower.code)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-4 rounded-full shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Project Quotation & CAD Layout</span>
              </button>

              <a
                href={`https://wa.me/918850848971?text=Hi%20Vedanta%20Technologies,%20I%20configured%20a%20turnkey%20line%20for%20${dailyBottles}%20bottles/day%20(${beverageType}).%20Recommended%20model:%20${recommendedBlower.code}.%20Please%20share%20quotation%20and%20factory%20CAD%20layout.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-4 rounded-full transition-all"
                title="Send configuration to WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Sizing</span>
              </a>
            </div>

            {/* 2-Clause Sizing & CapEx Pricing Notice */}
            <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-mono text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">• Notice: Machinery, power load, and CapEx estimates are indicative engineering benchmarks based on standard factory setups and subject to change.</p>
              <p className="text-slate-500">• Please submit a project inquiry or contact our sales engineering desk for a verified commercial quotation based on your exact layout and water test parameters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
