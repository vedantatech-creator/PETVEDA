import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import ScrollReveal, { StaggerGrid } from '../components/ScrollReveal';

export default function TurnkeyPage({ onOpenQuote }) {
  const packages = [
    {
      name: '40 BPM Commercial Bottling Plant',
      speed: '2,400 Bottles / Hour',
      dailyOutput: '18,000 - 24,000 Bottles / Shift',
      price: '₹28.0L - ₹34.0L',
      idealFor: 'Regional startups, local water brands, contract packers',
      code: 'VT-TURNKEY-40BPM',
      specs: [
        '2,000 LPH Dual-Pass Industrial RO Plant with Ozone/UV',
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
    },
    {
      name: '60 BPM Carbonated Soft Drink (CSD) & Soda Plant',
      speed: '3,600 Bottles / Hour (CSD)',
      dailyOutput: '25,000 - 32,000 Bottles / Shift',
      price: '₹42.0L - ₹54.0L',
      idealFor: 'Flavored soda, carbonated beverages & cold drinks',
      code: 'VT-CSD-60BPM',
      specs: [
        'Sugar Dissolving & Syrup Room (SS304 Jacketed Tanks)',
        'Continuous Carbonator & CO2 Inline Saturator (SS316)',
        'Isobaric Counter-Pressure RFC 18-18-6 Triblock',
        'Carbonated PET Blow Moulding with Chilled Base Molds',
        'Automatic Cap Feeder with UV Sanitization Tunnel',
        'Automatic Heavy-Duty Shrink Film Wrapper'
      ],
      tag: 'High Margins (CSD)'
    }
  ];

  const steps = [
    { num: '01', title: 'Raw Water & Site Audit', desc: 'Comprehensive chemical/microbiological borehole water analysis & 2D/3D plant footprint layout.' },
    { num: '02', title: 'Civil & Flooring Specs', desc: 'Epoxy flooring guidance, drainage slope blueprints, clean-room partitions, and BIS lab zoning.' },
    { num: '03', title: 'Custom Hardware Fabrication', desc: 'High-precision machining at our Vasai facility with food-grade SS304/SS316 contact surfaces.' },
    { num: '04', title: 'Factory Acceptance Testing', desc: 'Full dry and wet line trial runs in Vasai before freight dispatch to your production site.' },
    { num: '05', title: 'On-Site Line Rigging', desc: 'Senior Vedanta mechanical & electrical engineers supervise piping, power wiring, and pneumatic lines.' },
    { num: '06', title: 'BIS IS:14543 Lab Setup', desc: 'Installation of Class-100 laminar flow, incubators, autoclave, and NABL calibration paperwork.' },
    { num: '07', title: 'Operator Training & SOPs', desc: 'Hands-on operator training for PLC recipe management, mold changeover, and preventive maintenance.' },
    { num: '08', title: 'Commercial Handover', desc: 'Final production rate certification, commercial production startup, and 12-month warranty activation.' }
  ];

  const turnkeySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Turnkey Packaged Drinking Water & CSD Bottling Plant Engineering",
    "provider": {
      "@type": "Organization",
      "name": "Vedanta Technologies",
      "url": "https://vedantatechnologies.in"
    },
    "serviceType": "Turnkey Industrial Machinery Setup",
    "areaServed": "India",
    "description": "Complete turnkey engineering for mineral water and soda bottling plants from 40 BPM to 120 BPM, including RO purification, PET blowing, filling, labeling, packaging, and BIS IS:14543 testing lab setup.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Turnkey Plant Capacities",
      "itemListElement": packages.map(p => ({
        "@type": "Offer",
        "name": p.name,
        "description": `${p.speed} - ${p.idealFor}`,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": p.price,
          "priceCurrency": "INR"
        }
      }))
    }
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Turnkey Bottling Plants", path: "/turnkey" }
  ];

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8 lg:py-14">
      <MetaSEO 
        title="Turnkey Packaged Drinking Water & Soda Bottling Plants | Vedanta Technologies"
        description="Complete turnkey mineral water and carbonated soda plants (40 to 120 BPM) by Vedanta Technologies. Engineered with RO water systems, PET blow moulders, RFC monoblocks, BOPP labelers, and BIS IS:14543 testing labs."
        keywords="turnkey mineral water plant setup cost, 40 bpm water plant price, 60 bpm bottling line, soda bottling plant turnkey, BIS IS 14543 water plant cost, Vedanta Technologies Vasai"
        canonicalUrl="https://vedantatechnologies.in/turnkey"
        schemaData={turnkeySchema}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono font-bold text-blue-800 uppercase tracking-wider block mb-2">
            COMPLETE INDUSTRIAL PROJECTS
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Turnkey Packaged Drinking Water & CSD Bottling Plants
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
            From raw borehole water filtration to boxed, palletized commercial bottles. 100% BIS IS:14543 turnkey compliance with guaranteed production speed.
          </p>
        </div>

        {/* Turnkey Packages Grid (Uniform Industrial Card Scheme with Stagger Reveal) */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.code}
              className="group p-5 sm:p-8 bg-white rounded-2xl flex flex-col justify-between transition-all duration-200 border border-slate-300 hover:border-blue-700 hover:shadow-md hover:-translate-y-1 shadow-2xs h-full"
            >
              <div>
                <div className="flex justify-between items-start gap-3 mb-3 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border text-slate-700 bg-slate-100 border-slate-200 group-hover:border-slate-300 transition-colors">
                    {pkg.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {pkg.code}
                  </span>
                </div>

                <h2 className="text-lg sm:text-2xl font-bold text-slate-950 mb-1.5 sm:mb-2 leading-snug">
                  {pkg.name}
                </h2>
                <p className="text-xs text-slate-600 mb-4 sm:mb-6 font-medium">
                  {pkg.idealFor}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 group-hover:border-slate-300 mb-4 sm:mb-6 text-xs transition-colors">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Rated Speed:</span>
                    <span className="text-slate-900 font-bold font-mono text-xs sm:text-sm">{pkg.speed}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Indicative Cost:</span>
                    <span className="text-blue-800 font-bold font-mono text-xs sm:text-sm">{pkg.price}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Scope of Turnkey Equipment:
                  </span>
                  {pkg.specs.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                      <span className="leading-snug">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(pkg.code)}
                className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:scale-[0.98] text-white font-semibold text-xs py-3 rounded-full shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Project Proposal & CAD Layout</span>
              </button>
            </div>
          ))}
        </StaggerGrid>

        {/* Dedicated Gateway to Interactive CAD Plant Layout */}
        <ScrollReveal className="mb-16 sm:mb-24">
          <div className="p-6 sm:p-10 bg-slate-950 text-white rounded-2xl sm:rounded-3xl border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 shadow-md">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800 inline-block">
                INTERACTIVE ENGINEERING BLUEPRINT
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                Inspect the 8-Stage Turnkey Bottling Plant CAD Flow
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Step through borehole pre-filtration, dual-pass RO purification, high-speed V-Blow linear moulding, cleanroom air conveying, RFC isobaric filling, BOPP labeling, and shrink bundling.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                to="/plant-layout"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-sm transition-all"
              >
                <span>Launch Interactive CAD Flow</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 8-Stage Turnkey Workflow */}
        <div className="pt-4 sm:pt-8 pb-12 sm:pb-16 border-t border-slate-200">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-950">
              The 8-Stage Turnkey Deployment Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From bare concrete floor to licensed, revenue-generating beverage bottling operations.
            </p>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-blue-700 hover:shadow-sm hover:-translate-y-1 transition-all duration-200 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono mb-2">
                    {st.num}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerGrid>

          {/* Clean Bottom Actions & 2-Clause Statutory Pricing Disclaimer */}
          <ScrollReveal delay={0.1} className="mt-12 sm:mt-16 text-center space-y-6">
            <button
              onClick={() => onOpenQuote('TURNKEY-GENERAL')}
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request Turnkey Plant Feasibility Proposal & CAD Layout</span>
            </button>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-xs font-mono text-slate-700 space-y-1.5 text-left max-w-4xl mx-auto shadow-2xs">
              <p className="font-semibold text-slate-900">
                • Clause 1: Turnkey plant investment figures and machinery pricing are indicative factory benchmarks based on 2026 raw material pricing and standard configurations, subject to change.
              </p>
              <p className="text-slate-600">
                • Clause 2: Please request an itemized project proposal or consult with our senior application engineers in Vasai for a verified commercial quotation tailored to your source water analysis and civil layout.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
