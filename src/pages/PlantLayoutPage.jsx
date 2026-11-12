import React from 'react';
import { Link } from 'react-router-dom';
import MetaSEO from '../components/MetaSEO';
import PlantCadFlow from '../components/PlantCadFlow';
import { Factory, Layers, Calculator, ArrowRight, FileText } from 'lucide-react';

export default function PlantLayoutPage({ onOpenQuote }) {
  const layoutSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vedanta Turnkey Bottling Plant CAD Layout & Engineering Flow",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All modern browsers",
    "description": "Interactive 8-stage industrial bottling plant layout blueprint. Visualizes raw water pre-filtration, RO treatment, V-Blow stretch blow moulding, air conveying, RFC triblock filling, BOPP labeling, and secondary shrink wrapping.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Turnkey Plants", path: "/turnkey" },
    { name: "CAD Plant Layout", path: "/plant-layout" }
  ];

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 lg:py-16">
      <MetaSEO 
        title="Interactive Bottling Plant Layout & CAD Engineering Flow | Vedanta Technologies"
        description="Inspect the step-by-step 8-stage turnkey packaged drinking water manufacturing workflow. Sized for BIS IS:14543 compliance with SS316 fluid paths, cleanroom zoning, and utility requirements."
        keywords="mineral water plant layout drawing, bottling plant CAD flow, water packaging line blueprint, BIS IS 14543 plant zoning, Vedanta Technologies Vasai"
        canonicalUrl="https://vedantatechnologies.in/plant-layout"
        schemaData={layoutSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Factory className="w-3.5 h-3.5 text-blue-700" />
            ENGINEERING BLUEPRINT
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Turnkey Bottling Plant Layout & CAD Flow
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Interactive 8-stage industrial automation journey from raw borehole water purification to boxed, palletized finished product.
          </p>
        </div>
      </div>

      {/* Interactive Plant CAD Flow Core Tool */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <PlantCadFlow onOpenQuote={onOpenQuote} />
      </div>

      {/* Spacious 2-Card Gateway */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-24 pt-12 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            Explore Turnkey Packages & Machinery Sizing
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Compare complete pre-engineered plant packages or estimate your electrical utility demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Turnkey Packages */}
          <div className="industrial-card p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Layers className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider block">
                TURNKEY PACKAGES
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Turnkey Bottling Plants (40 to 120 BPM)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review complete scope of supply, production speeds, indicative costs, and 8-stage commissioning blueprint.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/turnkey"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>View Turnkey Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Machinery Sizer */}
          <div className="industrial-card p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider block">
                DYNAMIC SIZING
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Bottling Line Sizer & Utility Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calculate your exact blower model, compressor CFM, and connected power (kW) based on your target daily bottles.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Open Line Sizer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenQuote('CAD-LAYOUT')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-blue-700" />
                <span>Request Custom CAD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
