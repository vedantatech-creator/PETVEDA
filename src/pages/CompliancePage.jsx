import React from 'react';
import MetaSEO from '../components/MetaSEO';
import ResourceArticles from '../components/ResourceArticles';
import FaqSection from '../components/FaqSection';
import { ShieldCheck } from 'lucide-react';

export default function CompliancePage({ onOpenQuote }) {
  const labEquipMicro = [
    { name: 'Laminar Air Flow (LAF) Bench', purpose: 'Class 100 sterile cabinet for culture inoculation and plating.' },
    { name: 'Vertical High-Pressure Autoclave', purpose: 'Sterilization of glassware, pipette tips, and nutrient agar media.' },
    { name: 'BOD / Bacteriological Incubator', purpose: 'Precision 37°C and 44°C incubation for total coliform and E. Coli tests.' },
    { name: 'Membrane Filtration Funnel System', purpose: 'Vacuum manifold for 0.45 micron microbiological water retention.' },
    { name: 'Digital Colony Counter', purpose: 'Illuminated magnifying grid for accurate bacterial colony quantification.' }
  ];

  const labEquipChem = [
    { name: 'UV-Visible Spectrophotometer', purpose: 'Quantitative analysis of nitrates, sulphates, fluorides, and trace minerals.' },
    { name: 'Digital Benchtop pH & Temperature Meter', purpose: 'Continuous pH measurement calibrated with pH 4.0, 7.0, and 9.2 buffers.' },
    { name: 'Microprocessor Conductivity / TDS Meter', purpose: 'Verification of total dissolved solids in purified permeate.' },
    { name: 'Nephelometric Turbidity Meter', purpose: 'Measurement of suspended colloidal particles (< 1 NTU standard).' },
    { name: 'Analytical Electronic Balance (0.1mg)', purpose: 'High-precision reagent weighing with internal motorized calibration.' }
  ];

  const complianceSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Setup a BIS IS:14543 Compliant Packaged Drinking Water Laboratory",
    "description": "Step-by-step regulatory infrastructure guide for in-house chemical and microbiological laboratory setup to obtain Bureau of Indian Standards (ISI Mark) license.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Class 100 Microbiology Clean Room Setup",
        "text": "Install Laminar Air Flow bench, vertical autoclave, and dual 37°C/44°C bacteriological incubators with HEPA filtration."
      },
      {
        "@type": "HowToStep",
        "name": "Chemical Testing Station Installation",
        "text": "Equip UV-Visible Spectrophotometer, digital pH meter, nephelometric turbidity meter, and analytical 0.1mg balance."
      },
      {
        "@type": "HowToStep",
        "name": "NABL Calibration Certification",
        "text": "Execute calibration verification for all thermal, pressure, and optical instruments with NABL accredited reference standards."
      },
      {
        "@type": "HowToStep",
        "name": "Chemist Appointment & BIS Audit",
        "text": "Deploy qualified graduate chemist and microbiologist, initiate 7-day preliminary test batches, and host BIS field auditor."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "BIS IS:14543 Compliance & Lab Setup", path: "/compliance" }
  ];

  return (
    <div className="bg-white min-h-screen py-10 lg:py-16">
      <MetaSEO 
        title="BIS IS:14543 Mandatory Quality Lab Setup & Licensing Checklist | Vedanta Technologies"
        description="Comprehensive guide to setting up a BIS IS:14543 compliant chemical and microbiological in-house laboratory for Packaged Drinking Water manufacturing in India. Equipment lists, calibration standards, and licensing support."
        keywords="BIS IS 14543 laboratory equipment, water plant lab setup cost, packaged drinking water testing lab, ISI mark license procedure water, NABL calibration water plant, Vedanta Technologies"
        canonicalUrl="https://vedantatechnologies.in/compliance"
        schemaData={complianceSchema}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            REGULATORY INFRASTRUCTURE & ISI MARK
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            BIS IS:14543 Compliance & In-House Testing Laboratory Setup
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In India, selling packaged drinking water without an ISI Mark license under IS:14543 is legally prohibited. Vedanta Technologies designs, manufactures, and equips your on-site quality control lab with NABL-traceable instruments for guaranteed Bureau of Indian Standards inspection clearance.
          </p>
        </div>

        {/* Laboratory Apparatus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          {/* Microbiology Lab */}
          <div className="industrial-card p-6 sm:p-8 bg-white border border-slate-200">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
                M
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">Microbiology Testing Apparatus</h2>
                <span className="text-[11px] font-mono text-slate-500 font-medium">IS:14543 Annex D Requirements</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {labEquipMicro.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-600 text-[11px] mt-0.5">{item.purpose}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chemical Lab */}
          <div className="industrial-card p-6 sm:p-8 bg-white border border-slate-200">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
                C
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">Chemical & Physical Testing Apparatus</h2>
                <span className="text-[11px] font-mono text-slate-500 font-medium">IS:14543 Table 1 Parameter Testing</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {labEquipChem.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-600 text-[11px] mt-0.5">{item.purpose}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Turnkey Lab Callout */}
        <div className="industrial-card p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-blue-800 uppercase">
              Model Code: VT-LAB-BIS
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Complete Turnkey Testing Laboratory Package
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Includes complete instruments, NABL calibration certificates, chemical reagents, glassware, SOP logbook templates, and 3-day on-site practical training for your appointed chemist.
            </p>
          </div>

          <div className="text-right shrink-0">
            <div className="text-2xl font-black text-slate-950 font-mono mb-2">
              ₹3.5L - ₹5.0L
            </div>
            <button
              onClick={() => onOpenQuote('VT-LAB-BIS')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-5 rounded-full shadow-2xs transition-all cursor-pointer"
            >
              Request Lab Proposal
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Whitepapers & Guides */}
      <ResourceArticles onOpenQuote={onOpenQuote} />

      {/* Embedded FAQ Section */}
      <FaqSection onOpenQuote={onOpenQuote} limit={3} />
    </div>
  );
}
