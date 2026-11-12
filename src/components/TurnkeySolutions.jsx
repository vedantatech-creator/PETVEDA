import React from 'react';
import { 
  Droplets, 
  CheckCircle2, 
  FileText
} from 'lucide-react';

export default function TurnkeySolutions({ onOpenQuote }) {
  const steps = [
    {
      num: '01',
      title: 'Water Source Testing & Civil CAD Layout',
      desc: 'Complete TDS, hardness, and microbiological testing of raw borewell water, followed by a customized AutoCAD factory floorplan design adhering to BIS IS:14543 hygienic zoning.'
    },
    {
      num: '02',
      title: 'Multi-Stage Industrial RO Water Plant',
      desc: 'Heavy-duty sand and carbon filtration, antiscalant dosing, high-rejection RO membranes, micron cartridge polishers, UV sterilizer, and recirculating ozone generator.'
    },
    {
      num: '03',
      title: 'V-Blow Automated PET Blow Moulding',
      desc: 'Preforms are loaded, oriented, heated via NIR quartz ovens, and stretch-blown with 30-Bar compressed air into sterile, crystal-clear bottles at up to 8,000 BPH.'
    },
    {
      num: '04',
      title: 'Automatic RFC Monoblock (SS316)',
      desc: 'Continuous stainless steel rotary / linear monoblock washes incoming bottles with ozonated water, fills under gravity/counter-pressure, and seals caps with magnetic torque chucks.'
    },
    {
      num: '05',
      title: 'High-Efficiency Rotary BOPP Labeling',
      desc: 'Applies roll-fed BOPP wrap-around labels with precision hot-melt glue, cutting labeling costs by up to 60% compared to self-adhesive stickers.'
    },
    {
      num: '06',
      title: 'Batch Coding & Shrink Film Bundling',
      desc: 'Continuous CIJ inkjet printer codes MRP, batch, and expiry on necks, followed by an automatic web-sealer shrink tunnel bundling bottles into firm 12 or 24 packs without boxes.'
    },
    {
      num: '07',
      title: 'BIS IS:14543 In-House Lab Setup',
      desc: 'Supply and installation of complete chemical and microbiological lab equipment: autoclave, laminar air flow chamber, incubator, spectrophotometer, and pH/TDS meters.'
    },
    {
      num: '08',
      title: 'On-Site Commissioning & Operator Training',
      desc: 'Vedanta senior service engineers stay on your plant floor until trial batches run seamlessly, licensing audits pass, and your operators are 100% self-sufficient.'
    }
  ];

  const packages = [
    {
      name: '40 BPM Commercial Bottling Plant',
      speed: '2,400 Bottles / Hour',
      dailyOutput: '18,000 - 24,000 Bottles / Shift',
      price: '₹28.0L - ₹34.0L',
      idealFor: 'Regional startups, local water brands, contract packers',
      code: 'VT-TURNKEY-40BPM',
      specs: [
        '2,000 LPH Dual-Pass Industrial RO Plant',
        'V-Blow A2 Fully Automatic PET Blower (2,000 BPH)',
        'RFC 12-12-4 Monoblock Filling Unit (SS316)',
        'Automatic BOPP Hot-Melt Labeling Machine',
        'Secondary Web Sealer & Shrink Tunnel',
        '30-Bar Reciprocating High Pressure Air Compressor'
      ],
      tag: 'Best-Seller for Startups'
    },
    {
      name: '60 BPM High-Yield Bottling Plant',
      speed: '3,600 Bottles / Hour',
      dailyOutput: '28,000 - 36,000 Bottles / Shift',
      price: '₹38.0L - ₹48.0L',
      idealFor: 'Established beverage brands & multi-district distribution',
      code: 'VT-TURNKEY-60BPM',
      specs: [
        '4,000 LPH High-Rejection RO Purification Plant',
        'V-Blow A4 4-Cavity Servo Blow Moulder (4,000 BPH)',
        'RFC 16-16-5 Monoblock with HEPA Clean Enclosure',
        'High-Speed Rotary BOPP Labeler (80 BPM)',
        'Continuous Inkjet (CIJ) Batch Coder',
        'Automatic Shrink Bundler with Collator'
      ],
      tag: 'Maximum ROI Configuration'
    },
    {
      name: '120 BPM Industrial Enterprise Line',
      speed: '7,200 Bottles / Hour',
      dailyOutput: '60,000 - 80,000 Bottles / Shift',
      price: '₹65.0L - ₹85.0L',
      idealFor: 'National beverage co-packing & 24/7 continuous production',
      code: 'VT-TURNKEY-120BPM',
      specs: [
        '8,000 - 10,000 LPH Industrial Water System',
        'V-Blow A6 High-Speed Servo Blower (8,000 BPH)',
        'Rotary RFC 24-24-8 Monoblock with Class-100 Air',
        'Rotary Hot-Melt BOPP Labeler (150 BPM)',
        'High-Speed Continuous Shrink Bundler',
        'IoT Telematics & Remote Diagnostics Dashboard'
      ],
      tag: 'Enterprise High-Speed'
    }
  ];

  return (
    <section id="turnkey" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Droplets className="w-3.5 h-3.5 text-blue-700" />
            END-TO-END TURNKEY EXECUTION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Turnkey Packaged Drinking Water & Soda Bottling Plants
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We deliver complete, compliant beverage production factories—from raw borewell water testing to BIS IS:14543 certification and final shrink-bundled packs.
          </p>
        </div>

        {/* Turnkey Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="industrial-card p-7 flex flex-col justify-between transition-all bg-white hover:border-slate-400"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {pkg.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">{pkg.speed}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{pkg.name}</h3>

                {/* Live Price Tag */}
                <div className="my-3 pb-3 border-b border-slate-100 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Complete Turnkey Plant:</span>
                    <div className="text-xl font-black text-blue-800 font-mono">
                      {pkg.price}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    + 18% GST (HSN 84223000)
                  </span>
                </div>

                <div className="text-xs text-slate-600 mb-4">
                  <span className="font-semibold text-slate-800">Ideal For:</span> {pkg.idealFor}
                </div>

                <div className="text-xs font-mono text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-5">
                  Output: <strong className="text-slate-950 font-bold">{pkg.dailyOutput}</strong>
                </div>

                <div className="space-y-2 mb-8 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider mb-2">
                    Included Machinery & Scope:
                  </div>
                  {pkg.specs.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(pkg.code)}
                className={`w-full flex items-center justify-center gap-2 font-semibold text-xs py-3 rounded-lg transition-all ${
                  idx === 1
                    ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-2xs'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Project Proposal & CAD Layout</span>
              </button>
            </div>
          ))}
        </div>

        {/* 8-Stage Turnkey Workflow */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              The 8-Stage Vedanta Turnkey Deployment Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From bare concrete floor to licensed, revenue-generating beverage bottling operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="bg-slate-50 border border-slate-200 p-5 rounded-lg hover:border-blue-400 transition-colors"
              >
                <div className="text-2xl font-black text-blue-700 font-mono mb-2">
                  {st.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
