import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Gauge, 
  FileText, 
  Factory,
  ChevronRight
} from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import FaqSection from '../components/FaqSection';
import { VEDANTA_FAQS } from '../data/faqs';
import { VEDANTA_CATALOG } from '../data/catalog';

const HERO_ROTATING_PHRASES = [
  'Flawless Bottling Automation.',
  'Servo Linear Precision.',
  'High-Speed 4,800 BPH.',
  '25% Air Energy Recovery.',
  'Turnkey BIS Engineering.'
];

export default function Home({ onOpenQuote }) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % HERO_ROTATING_PHRASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const flagships = VEDANTA_CATALOG.filter(m => 
    ['VT-BLOW-A4', 'VT-BLOW-A2', 'VT-TURNKEY-60BPM', 'VT-BLOW-JAR20'].includes(m.model_code)
  );

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": VEDANTA_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbs = [
    { name: "Home", path: "/" }
  ];

  return (
    <div className="bg-white">
      <MetaSEO 
        title="PET Blow Moulding Machines & Turnkey Bottling Plants OEM"
        description="Leading Indian OEM manufacturer of Fully Automatic Servo PET Blow Moulding Machines (1,800 to 8,000 BPH), Turnkey Packaged Drinking Water Plants (40-120 BPM), and 20L Jar Lines in Vasai, Maharashtra."
        keywords="PET blow moulding machine manufacturer India, fully automatic pet bottle blowing machine price, 4 cavity pet blowing machine, mineral water bottling plant turnkey setup cost, 20 litre jar blowing machine, packaged drinking water machinery, CSD soda plant, Vedanta Technologies Vasai"
        canonicalUrl="https://vedantatechnologies.in/"
        ogImage="https://vedantatechnologies.in/images/products/automatic_pet_blowing_machine.jpeg"
        ogType="website"
        schemaData={homeFaqSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section (Industrial Precision Engineering, 100% Phone Native) */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-32 border-b border-slate-200">
        {/* Engineering CAD Grid & Atmospheric Drafting Aura (Zero layout shift, pure visual depth) */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:24px_24px]" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] sm:w-[850px] h-[320px] sm:h-[450px] bg-gradient-to-b from-blue-100/70 via-blue-50/20 to-transparent blur-3xl pointer-events-none rounded-full" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse shrink-0"></span>
              <span className="font-semibold text-blue-900 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
                Vasai OEM Engineering
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] sm:text-xs">BIS IS:14543 Ready</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              High-Speed PET Blow Moulding. <br className="hidden sm:inline" />
              <span className="block mt-1.5 sm:mt-2 min-h-[2.4em] sm:min-h-[1.25em] text-blue-700 relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 bg-clip-text text-transparent"
                  >
                    {HERO_ROTATING_PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed px-2"
            >
              Engineered with servo-stepping accuracy, 8-zone infrared quartz heating, and integrated high-pressure air recovery. From raw preform to palletized product.
            </motion.p>

            {/* Phone-First Telemetry Chips (Zero extra height, pure industrial credibility) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-2 pt-1"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-semibold text-slate-800 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 animate-pulse" />
                <span>4,800 BPH Speed</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-semibold text-slate-800 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                <span>30-Bar Air Recovery</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-semibold text-slate-800 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                <span>Siemens PLC Servo</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-semibold text-slate-800 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                <span>BIS & CE Ready</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-4"
            >
              <Link
                to="/machines"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm py-3.5 px-6 sm:px-7 rounded-full shadow-sm hover:shadow transition-all"
              >
                <span>Explore Full Machinery Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full border border-slate-300 transition-all shadow-2xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-700" />
                <span>Request Quotation & CAD Layout</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Flagship Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 sm:mt-14 max-w-5xl mx-auto industrial-card p-3 sm:p-8 bg-slate-50/80 border border-slate-200"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white p-5 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-3 sm:space-y-4 max-w-md w-full">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 inline-block">
                  FLAGSHIP MODEL • VT-BLOW-A4
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
                  4-Cavity Fully Automatic Stretch Blow Moulding Machine
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-speed 4,800 BPH linear machine featuring touch-screen Schneider/Delta PLC, infrared preform oven, and automatic preform elevator.
                </p>
                <div className="flex items-baseline gap-2.5 pt-1 sm:pt-2">
                  <span className="text-xl sm:text-2xl font-black text-slate-950 font-mono">₹16.5L - ₹22.0L</span>
                  <span className="text-xs text-slate-500 font-mono">+ 18% GST</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <Link
                    to="/machine/vedanta-v-blow-a4-fully-automatic-pet-blow-moulding-machine-4-cavity"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
                  >
                    <span>View Technical Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex items-center justify-center p-2 sm:p-4">
                <img
                  src="/images/products/automatic_pet_blowing_machine.jpeg"
                  alt="Vedanta Technologies VT-BLOW-A4 4-Cavity Fully Automatic PET Blow Moulding Machine Vasai Maharashtra"
                  className="max-h-56 sm:max-h-72 w-auto object-contain filter contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Pillars (4 Clean Apple-style Grid Tiles) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Precision Engineering Meets High-Output Reliability
            </h2>
            <p className="text-xs sm:text-base text-slate-600">
              Why commercial beverage bottlers and packaging converters partner with Vedanta Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="industrial-card p-5 sm:p-6 bg-slate-50/60 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 sm:mb-4">
                <Gauge className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">High Efficiency Output</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Up to 8,000 bottles/hour on 6-cavity models with sub-second cycle indexing and consistent neck finish alignment.
              </p>
            </div>

            <div className="industrial-card p-5 sm:p-6 bg-slate-50/60 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 sm:mb-4">
                <Cpu className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">25% Air Recovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard integrated air recycling systems channel 30-bar exhaust back to low-pressure pneumatic strokes.
              </p>
            </div>

            <div className="industrial-card p-5 sm:p-6 bg-slate-50/60 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 sm:mb-4">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">BIS IS:14543 Ready</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turnkey compliance with food-grade SS304/SS316 fluid paths, laminar flow capping zones, and in-house laboratory equipment.
              </p>
            </div>

            <div className="industrial-card p-5 sm:p-6 bg-slate-50/60 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 sm:mb-4">
                <Factory className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">Vasai Manufacturing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct OEM factory pricing with no middleman markup, genuine spare parts in stock, and nationwide technician support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Showcases (Grid of Key Machines) */}
      <section className="py-14 sm:py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                FEATURED PRODUCTION EQUIPMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                Popular Machines & Turnkey Packages
              </h2>
            </div>

            <Link
              to="/machines"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
            >
              <span>View All 15 Models with Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {flagships.map((prod) => (
              <div
                key={prod.model_code}
                className="industrial-card p-4 sm:p-5 bg-white border border-slate-200 flex flex-col justify-between group hover:border-blue-700 transition-colors"
              >
                <div>
                  <div className="h-44 sm:h-48 bg-slate-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={prod.image}
                      alt={`Vedanta ${prod.name} ${prod.model_code}`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold text-slate-700 border border-slate-200">
                      {prod.model_code}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">
                      {prod.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 line-clamp-2 leading-snug">
                      {prod.name}
                    </h3>
                    <div className="pt-1.5 sm:pt-2">
                      <span className="text-xs text-slate-500 uppercase font-mono block text-[10px]">Indicative Price:</span>
                      <span className="text-base sm:text-lg font-black text-slate-950 font-mono">
                        {prod.price_range || prod.price_indicative}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100">
                  <Link
                    to={`/machine/${prod.slug}`}
                    className="w-full flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs py-2.5 rounded-full border border-slate-300 transition-colors shadow-2xs"
                  >
                    <span>Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote(prod.model_code)}
                    className="w-full flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 rounded-full shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CapEx Sizer Teaser Banner */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="industrial-card p-6 sm:p-12 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl">
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800 inline-block">
                DYNAMIC CAPEX ESTIMATOR
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                Calculate Your Bottling Plant Investment & Daily ROI
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Determine exact machine sizing, power requirements (kW), compressor CFM, factory floor area, and gross profit per bottle in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm py-3 px-5 sm:px-6 rounded-full shadow-sm transition-all text-center"
              >
                <span>Launch Line Sizer Tool</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/turnkey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm py-3 px-5 sm:px-6 rounded-full border border-slate-700 transition-all text-center"
              >
                <span>Explore Turnkey Plants</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated B2B Knowledge & FAQ Section */}
      <FaqSection onOpenQuote={onOpenQuote} />
    </div>
  );
}
