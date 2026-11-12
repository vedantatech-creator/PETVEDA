import React, { useState } from 'react';
import { 
  TrendingUp, 
  Coins, 
  PieChart, 
  ArrowRight, 
  Calendar 
} from 'lucide-react';

export default function UnitEconomics({ onOpenQuote, hideHeader = false }) {
  const [dailyVolume, setDailyVolume] = useState(25000);

  // Financial model constants (for 500ml Packaged Drinking Water in India)
  const costBreakdown = [
    { item: 'PET Preform (18g virgin resin)', cost: 1.15, pct: '57%' },
    { item: 'Plastic Cap (28mm Alaska neck)', cost: 0.22, pct: '11%' },
    { item: 'BOPP Roll-fed Label (Wrap-around)', cost: 0.15, pct: '7%' },
    { item: 'Power, Water & Purification', cost: 0.18, pct: '9%' },
    { item: 'Secondary LDPE Shrink Film', cost: 0.12, pct: '6%' },
    { item: 'Direct Labor & Routine Spares', cost: 0.20, pct: '10%' },
  ];

  const totalCostPerBottle = costBreakdown.reduce((acc, c) => acc + c.cost, 0); // ₹2.02
  const wholesaleSellingPrice = 4.80;
  const netMarginPerBottle = wholesaleSellingPrice - totalCostPerBottle; // ₹2.78

  const monthlyWorkingDays = 26;
  const monthlyBottles = dailyVolume * monthlyWorkingDays;
  const monthlyRevenueLakhs = ((monthlyBottles * wholesaleSellingPrice) / 100000).toFixed(1);
  const monthlyProductionCostLakhs = ((monthlyBottles * totalCostPerBottle) / 100000).toFixed(1);
  const monthlyNetProfitLakhs = ((monthlyBottles * netMarginPerBottle) / 100000).toFixed(1);

  return (
    <section id="economics" className={`${hideHeader ? 'py-4 lg:py-6' : 'py-16 lg:py-24 border-b border-slate-200'} bg-slate-50/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header (Only shown when not embedded in dedicated page) */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
              <Coins className="w-3.5 h-3.5 text-blue-700" />
              COMMERCIAL FEASIBILITY & ROI MODEL
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Transparent Unit Economics & Payback Timeline
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why is packaged drinking water and beverage bottling considered one of India's strongest manufacturing businesses? Here is the exact cost-of-production breakdown for a standard 500ml bottle.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Cost Breakdown Table */}
          <div className="lg:col-span-6 industrial-card p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-blue-700" />
                Input Cost Breakdown (500ml Bottle)
              </h3>
              <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Indian Market Benchmarks
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              {costBreakdown.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                    <span className="text-slate-800 font-semibold">{row.item}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-slate-500 text-[11px] font-medium">{row.pct}</span>
                    <span className="text-slate-900 font-bold">₹{row.cost.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Cost Highlight */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-300 flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-500 block font-mono uppercase font-semibold">Total Manufacturing Cost</span>
                <span className="text-xs text-slate-600">Ex-factory packed in shrink bundle</span>
              </div>
              <div className="text-2xl font-black font-mono text-slate-900">
                ₹{totalCostPerBottle.toFixed(2)}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-700 pt-2 border-t border-slate-100">
              <span className="font-medium">Avg. Wholesale Selling Price:</span>
              <span className="font-mono font-bold text-slate-900 text-sm">₹{wholesaleSellingPrice.toFixed(2)} / Bottle</span>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-700">
              <span className="font-bold text-slate-900">Net Production Margin per Bottle:</span>
              <span className="font-mono font-extrabold text-blue-800 text-sm">₹{netMarginPerBottle.toFixed(2)} (~58% Gross Margin)</span>
            </div>
          </div>

          {/* Right: Interactive ROI & Monthly Cashflow Simulator */}
          <div className="lg:col-span-6 industrial-card p-6 sm:p-8 bg-white border border-slate-200 space-y-6 shadow-md">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-700" />
                Monthly Revenue & Profit Simulation
              </h3>
              <span className="text-xs font-mono text-slate-500 font-semibold">26 Days / Month</span>
            </div>

            {/* Daily Volume Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Select Production Volume
                </label>
                <span className="text-sm font-mono font-bold text-blue-800">
                  {dailyVolume.toLocaleString()} Bottles / Day
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={60000}
                step={2500}
                value={dailyVolume}
                onChange={(e) => setDailyVolume(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>5,000 (Small Line)</span>
                <span>25,000 (40 BPM)</span>
                <span>60,000 (80+ BPM)</span>
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Monthly Output</span>
                <span className="text-base sm:text-lg font-black text-slate-900 font-mono mt-1 block">
                  {monthlyBottles.toLocaleString()}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Production Cost</span>
                <span className="text-base sm:text-lg font-black text-slate-700 font-mono mt-1 block">
                  ₹{monthlyProductionCostLakhs} Lakhs
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Gross Revenue</span>
                <span className="text-base sm:text-lg font-black text-blue-800 font-mono mt-1 block">
                  ₹{monthlyRevenueLakhs} Lakhs
                </span>
              </div>
            </div>

            {/* Net Profit Banner */}
            <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-xs text-blue-900 font-mono uppercase tracking-wider font-bold block">
                  Estimated Monthly Net Margin
                </span>
                <span className="text-slate-600 text-xs">After all raw material, power, and labor costs</span>
              </div>
              <div className="text-3xl font-black font-mono text-blue-800 whitespace-nowrap">
                ₹{monthlyNetProfitLakhs} L<span className="text-xs font-normal text-slate-600 font-sans"> / mo</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-700" />
                Estimated Total Plant Payback Period:
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                At this production rate, a standard 40 BPM or 60 BPM complete turnkey packaged drinking water plant typically recovers its full capital expenditure in <strong className="text-slate-900">6 to 9 months</strong> of steady commercial operation.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote('FINANCIAL-PLAN')}
              className="w-full py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Download Detailed Project Financial Model (PDF)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
