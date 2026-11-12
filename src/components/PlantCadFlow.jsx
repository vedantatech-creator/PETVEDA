import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileText,
  Factory
} from 'lucide-react';

export default function PlantCadFlow({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(2); // Default to Blow Moulding

  const flowSteps = [
    {
      id: 0,
      short: '01. Raw Water',
      name: 'Raw Water Source & Multi-Media Pre-Filtration',
      category: 'Water Treatment',
      equipment: 'Raw Water Tanks + Dual Media Sand & Carbon Filters',
      specs: 'Removes suspended solids, turbidity, color, odor, and heavy organic matter down to 10 microns.',
      power: '3.5 kW',
      pressure: '3 - 4 Bar',
      labor: 'Automated backwash cycle',
      bisClause: 'IS:14543 Clause 4.1 (Source Water Quality Standards)'
    },
    {
      id: 1,
      short: '02. RO & Ozone',
      name: 'Dual-Pass RO Purification & Ozone Sterilization',
      category: 'Water Purification',
      equipment: 'Industrial RO System (3,000 - 10,000 LPH) + UV & Ozone Generator',
      specs: 'Dow/Toray TFC membranes reduce TDS to < 100 ppm, followed by 0.2 micron sterile filtration and ozone injection.',
      power: '7.5 - 15 kW',
      pressure: '12 - 14 Bar High Pressure RO Pump',
      labor: 'PLC automated conductivity & pH monitoring',
      bisClause: 'IS:14543 Table 1 (Microbiological & Chemical Limits)'
    },
    {
      id: 2,
      short: '03. V-Blow Blower',
      name: 'V-Blow Automated Linear PET Stretch Blow Moulder',
      category: 'Bottle Manufacturing',
      equipment: 'Vedanta VT-BLOW-A4 / A6 Series (3,600 - 8,000 BPH)',
      specs: 'Preforms automatically fed, oriented, heated in 8-zone NIR quartz ovens, and blown into sterile crystal-clear bottles.',
      power: '36 - 60 kW',
      pressure: '28 - 35 Bar High-Pressure Blowing Air',
      labor: '1 Operator for preform hopper replenishment',
      bisClause: 'IS:14543 Clause 5.2 (Food-Grade Virgin PET Packaging)'
    },
    {
      id: 3,
      short: '04. Air Conveyor',
      name: 'Pneumatic Stainless Steel Neck Air Conveyor',
      category: 'Bottle Transfer',
      equipment: 'SS304 Overhead Air Conveyor with Centrifugal Blower',
      specs: 'Transfers lightweight blown bottles by their neck ring without base touching, maintaining cleanroom sterility.',
      power: '2.2 kW',
      pressure: 'Low-pressure filtered laminar air',
      labor: 'Fully unattended automated buffer transfer',
      bisClause: 'IS:14543 Hygienic Cleanroom Zoning (Class 10,000)'
    },
    {
      id: 4,
      short: '05. RFC Monoblock',
      name: 'Automatic Rinsing, Filling & Capping (RFC) Monoblock',
      category: 'Core Bottling',
      equipment: 'Vedanta RFC 16-16-5 / 24-24-8 Monoblock (SS316 Contact Parts)',
      specs: 'Inverted bottle ozonated water rinsing, zero-drip gravity/isobaric filling, and magnetic torque chuck capping.',
      power: '5.5 - 11 kW',
      pressure: '2 - 3 Bar rinse pressure + 6 Bar cap hopper pneumatics',
      labor: '1 Operator supervising cap elevator and fill levels',
      bisClause: 'IS:14543 Clause 6.1 (Hermetic Closure & Sanitization)'
    },
    {
      id: 5,
      short: '06. Visual Inspection & CIJ',
      name: 'Online Visual Inspection Booth & Continuous Inkjet Coding',
      category: 'Quality Gate & Traceability',
      equipment: 'High-Lumen Inspection Screen + Continuous Inkjet (CIJ) Batch Coder',
      specs: 'Illuminated background for foreign particle inspection; CIJ codes MRP, batch number, date, and time on the bottle neck.',
      power: '1.2 kW',
      pressure: 'Electronic non-contact ink drop deflection',
      labor: '1 Trained quality inspector',
      bisClause: 'Legal Metrology & FSSAI Mandatory Batch Coding'
    },
    {
      id: 6,
      short: '07. BOPP Labeler',
      name: 'Automatic Rotary Hot-Melt BOPP Labeling Machine',
      category: 'Secondary Packaging',
      equipment: 'Vedanta VT-LABEL-BOPP (Up to 150 BPM)',
      specs: 'Applies roll-fed wrap-around plastic labels with hot-melt glue drum, reducing label cost to ₹0.15/bottle.',
      power: '7.5 kW',
      pressure: '6 Bar pneumatic vacuum drum',
      labor: '1 Operator replenishing label rolls and adhesive pellets',
      bisClause: 'Packaging Cost Reduction (-60% vs Sticker Labels)'
    },
    {
      id: 7,
      short: '08. Shrink Bundler',
      name: 'Automatic Web-Sealer Shrink Bundling Machine & Tunnel',
      category: 'Tertiary Bundling',
      equipment: 'Vedanta VT-PACK-SHRINK (8 - 14 Packs/Minute)',
      specs: 'Collates bottles into 6, 12, or 24 matrices, seals LDPE shrink film, and shrinks through recirculating heat tunnel.',
      power: '18 - 24 kW (Tunnel heating elements)',
      pressure: '6 - 8 Bar pneumatic pusher',
      labor: '1 Operator stacking finished packs onto wooden pallets',
      bisClause: 'Eliminates corrugated carton boxes (saves ₹10/pack)'
    }
  ];

  const current = flowSteps[activeStep];

  return (
    <section id="line-flow" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Factory className="w-3.5 h-3.5 text-blue-700" />
            FACTORY FLOORPLAN & ENGINEERING CAD SCHEMATIC
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Interactive Turnkey Bottling Line Blueprint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click any processing phase below to inspect the engineered machinery specifications, power requirements, and regulatory compliance standards across a complete Vedanta bottling facility.
          </p>
        </div>

        {/* Step Navigation Pill Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          {flowSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-3.5 py-2 rounded-lg font-mono font-bold whitespace-nowrap transition-all text-xs ${
                activeStep === step.id
                  ? 'bg-blue-700 text-white shadow-2xs'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {step.short}
            </button>
          ))}
        </div>

        {/* Interactive CAD Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Process Flow Graphic */}
          <div className="lg:col-span-5 industrial-card p-6 bg-slate-50/60 border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                Phase {current.id + 1} of 8: {current.category}
              </span>
              <span className="text-[10px] font-mono font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                Active CAD Stage
              </span>
            </div>

            {/* Visual Schematic Diagram Representation */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-black text-xl font-mono shrink-0">
                  {current.id + 1}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-blue-700 font-bold">
                    {current.category}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                    {current.name}
                  </h3>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong>Machine Deployed:</strong> {current.equipment}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {current.specs}
              </p>
            </div>

            {/* Quick Step Buttons */}
            <div className="flex justify-between items-center pt-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="text-xs font-semibold px-3 py-1.5 rounded border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700"
              >
                Previous Stage
              </button>

              <span className="text-xs font-mono text-slate-500 font-medium">
                Stage {activeStep + 1} / 8
              </span>

              <button
                disabled={activeStep === flowSteps.length - 1}
                onClick={() => setActiveStep(prev => Math.min(flowSteps.length - 1, prev + 1))}
                className="text-xs font-semibold px-3 py-1.5 rounded border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700"
              >
                Next Stage
              </button>
            </div>
          </div>

          {/* Right Column: Engineering Parameters & Regulatory Requirements */}
          <div className="lg:col-span-7 industrial-card p-6 sm:p-7 bg-white border border-slate-200 space-y-5 shadow-xs">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-800 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Engineering Spec Sheet
                </span>
                <h4 className="text-lg font-bold text-slate-950 mt-1">
                  Technical Operating Parameters
                </h4>
              </div>
              <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">
                  Connected Power Load
                </span>
                <span className="text-sm font-bold text-slate-900 font-mono mt-0.5 block">
                  {current.power}
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">
                  Operating Pressure
                </span>
                <span className="text-sm font-bold text-blue-800 font-mono mt-0.5 block">
                  {current.pressure}
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">
                  Labor & Oversight Requirement
                </span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                  {current.labor}
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">
                  BIS Compliance Reference
                </span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                  {current.bisClause}
                </span>
              </div>
            </div>

            {/* Hygiene Zoning & Cleanroom Compliance Callout */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-xs space-y-1.5 text-slate-700">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-700" />
                Factory Architecture & AutoCAD Zoning Guarantee:
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Vedanta provides certified civil AutoCAD floor plans partitioning your factory into <strong>Raw Water Intake</strong>, <strong>Machine Utility Zone</strong>, <strong>Class 10,000 Cleanroom Filling Area</strong>, and <strong>Secondary Packaging & Dispatch Warehouse</strong> in full compliance with BIS inspection audits.
              </p>
            </div>

            {/* Direct Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
              <button
                onClick={() => onOpenQuote('CAD-BLUEPRINT')}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-4 rounded-lg shadow-sm transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom 2D/3D Factory AutoCAD Layout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
