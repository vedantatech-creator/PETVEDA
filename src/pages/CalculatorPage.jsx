import React from 'react';
import { Link } from 'react-router-dom';
import MetaSEO from '../components/MetaSEO';
import LineConfigurator from '../components/LineConfigurator';
import { Calculator, Coins, Layers, ArrowRight, FileText } from 'lucide-react';

export default function CalculatorPage({ onOpenQuote }) {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vedanta Bottling Plant Machinery Sizer & Utility Estimator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All modern browsers",
    "description": "Interactive bottling line sizing calculator for PET blow moulding machinery, RFC monoblock filling speeds, electrical power loads (kW), high-pressure air CFM, and turnkey factory floor footprints.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Bottling Line Sizer", path: "/calculator" }
  ];

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 lg:py-16">
      <MetaSEO 
        title="Interactive Bottling Line Sizer & Utility Estimator | Vedanta Technologies"
        description="Calculate exact blow moulding machinery, RFC filling speeds, connected power load (kW), high-pressure compressor CFM, and factory floor space for packaged water and beverage bottling plants."
        keywords="bottling plant machinery sizer, pet blow moulding machine sizing, mineral water plant power requirement, compressor CFM calculator, Vedanta Technologies Vasai"
        canonicalUrl="https://vedantatechnologies.in/calculator"
        schemaData={calculatorSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Page Header (Apple Style: Generous whitespace, single crisp title, zero clutter) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Calculator className="w-3.5 h-3.5 text-blue-700" />
            ENGINEERING SIZING ENGINE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Bottling Line Sizer & Utility Estimator
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Select your target beverage, container size, and daily production to instantly calculate your recommended blow moulding machine, RFC filling speed, connected power load (kW), and factory floor area.
          </p>
        </div>
      </div>

      {/* Equipment Sizer Core Tool */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <LineConfigurator onOpenQuote={onOpenQuote} hideHeader={true} />
      </div>

      {/* Spacious 2-Card Gateway to ROI Tool & Turnkey Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-24 pt-12 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            Next Steps in Your Bottling Project
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Explore dedicated financial payback models or inspect complete turnkey line packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Link to Dedicated Bottle Profit & ROI Tool */}
          <div className="industrial-card p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Coins className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider block">
                FINANCIAL FEASIBILITY
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Bottle Profit & ROI Calculator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calculate standard 500ml or custom bottle manufacturing costs, preform weight, cap, label, electricity cost, gross margins, and monthly net cashflow.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/roi"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Launch Bottle Profit & ROI Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Link to Turnkey Bottling Packages */}
          <div className="industrial-card p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Layers className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider block">
                FULL PROJECT ENGINEERING
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Turnkey Bottling Plant Packages
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore complete 40, 60, and 120 BPM packaged drinking water lines and CSD soda plants with in-house BIS IS:14543 microbiology lab setup.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                to="/turnkey"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>View Turnkey Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenQuote('LINE-SIZER')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-blue-700" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
