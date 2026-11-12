import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Truck, 
  Factory, 
  Award, 
  CheckCircle2
} from 'lucide-react';

export default function WhyChooseVedanta({ onOpenQuote }) {
  const pillars = [
    {
      icon: Factory,
      title: 'Direct Vasai OEM Manufacturer',
      subtitle: 'Zero Middlemen Markup',
      desc: 'All machines are machined, assembled, and trial-tested in our Vasai Virar factory. You buy directly from the manufacturer with 100% genuine replacement parts and direct factory accountability.'
    },
    {
      icon: Cpu,
      title: 'High-Efficiency Servo Architecture',
      subtitle: '25% Electrical & Air Savings',
      desc: 'Servo-electric preform stepping and mechanical clamping eliminate parting-line flash while our integrated high-pressure air recovery unit reduces compressor running costs by up to 25%.'
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed BIS IS:14543 Compliance',
      subtitle: '100% Inspection Pass Record',
      desc: 'We supply certified chemical and microbiological laboratory setups, hygienic cleanroom partitioning layouts, and standard operating procedures to guarantee your ISI mark license approval.'
    },
    {
      icon: Truck,
      title: 'Pan-India Field Engineering & Spares',
      subtitle: '24-48 Hour On-Site Support',
      desc: 'Dedicated field engineers stationed across Maharashtra, Gujarat, North, and South India ensure fast plant erection, calibration, operator training, and lifetime preventative maintenance.'
    }
  ];

  const specsList = [
    'Food Grade SS304/SS316 Product Contact Components',
    'Delta / Schneider Touchscreen PLC with Remote Diagnostics',
    'Festo / SMC Pneumatic Valves & Hydro-Pneumatic Clamping',
    'Hard-Chrome Plated High-Tensile Tie Bars & CNC Machined Platens',
    'Modular Quick-Change Mould Bed (< 25 Mins Format Swap)',
    '12-Month Comprehensive On-Site Warranty Coverage'
  ];

  return (
    <section id="why-vedanta" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            THE VEDANTA ENGINEERING STANDARD
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Commercial Bottlers Choose Vedanta Technologies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Engineered in Vasai, Maharashtra with heavy-duty structural steel, precision servo mechanics, and food-grade stainless contact parts for decades of continuous operation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="industrial-card p-6 bg-white border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-blue-800 font-bold mb-1">
                    {p.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standards & Engineering Specifications Banner */}
        <div className="industrial-card p-6 sm:p-8 bg-white border border-slate-200 shadow-xs">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                Industrial Build Standard
              </span>
              <h4 className="text-xl font-extrabold text-slate-950 mt-1">
                Zero Compromise on Components, Plating & Pneumatics
              </h4>
            </div>

            <button
              onClick={() => onOpenQuote('FACTORY-VISIT')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-5 rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              Book Vasai Factory Trial & Live Run
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 text-xs text-slate-700 font-medium">
            {specsList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
