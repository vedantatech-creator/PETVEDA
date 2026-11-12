import React from 'react';
import MetaSEO from '../components/MetaSEO';
import LineConfigurator from '../components/LineConfigurator';
import { Calculator } from 'lucide-react';

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
    </div>
  );
}
