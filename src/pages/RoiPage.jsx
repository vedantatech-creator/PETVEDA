import React from 'react';
import { Link } from 'react-router-dom';
import MetaSEO from '../components/MetaSEO';
import UnitEconomics from '../components/UnitEconomics';
import { Coins, Calculator, ArrowRight, BookOpen, FileText } from 'lucide-react';

export default function RoiPage({ onOpenQuote }) {
  const roiSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vedanta Bottle Profit & ROI Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All modern browsers",
    "description": "Interactive bottle manufacturing cost and profit calculator for 500ml and 1000ml packaged drinking water in India. Calculates raw preform, cap, label, power, labor costs, gross margins, and plant payback period.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Bottle Profit & ROI Calculator", path: "/roi" }
  ];

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 lg:py-16">
      <MetaSEO 
        title="Bottle Profit & ROI Calculator (500ml Manufacturing Cost) | Vedanta Technologies"
        description="Calculate exact manufacturing cost per bottle (preform, cap, label, power, labor), wholesale selling price, gross margin (~58%), and monthly payback timeline for packaged drinking water plants in India."
        keywords="mineral water bottle manufacturing cost, 500ml water bottle profit margin, packaged drinking water plant ROI, preform cost calculator, Vedanta Technologies"
        canonicalUrl="https://vedantatechnologies.in/roi"
        schemaData={roiSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Page Header (Apple Style: Generous whitespace, calm single title, zero clutter) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Coins className="w-3.5 h-3.5 text-blue-700" />
            COMMERCIAL FEASIBILITY & ROI MODEL
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Bottle Profit & ROI Calculator
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Transparent per-bottle unit economics and monthly cashflow simulation for commercial packaged drinking water and beverage bottling plants in India.
          </p>
        </div>
      </div>

      {/* Financial Simulator Core Tool */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <UnitEconomics onOpenQuote={onOpenQuote} hideHeader={true} />
      </div>

      {/* Spacious 2-Card Gateway */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-24 pt-12 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            Continue Planning Your Production Line
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Size your machinery to meet these volume goals, or read our honest equipment buyer guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Link to Sizer */}
          <div className="industrial-card p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider block">
                MACHINERY SIZING
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Bottling Line Sizer & Utility Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Determine the exact PET stretch blow moulder (2K to 8K BPH), RFC monoblock filling speed, compressor CFM, and power requirements for this volume.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Launch Bottling Line Sizer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Link to Buyer Decision Guides */}
          <div className="industrial-card p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider block">
                BUYER INTEL & CAPEX
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Bottling Machinery Buyer Guides
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear comparisons between semi-automatic vs. fully automatic blowers, 20L jar plant costs, and mandatory BIS IS:14543 laboratory setups.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read Buyer Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenQuote('FINANCIAL-MODEL')}
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
