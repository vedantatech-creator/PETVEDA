import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  FileCheck, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export default function ResourceArticles({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const articles = [
    {
      title: 'Packaged Drinking Water Plant Setup Cost in India (2026/2027 Complete Guide)',
      category: 'Project Feasibility',
      snippet: 'Total capital investment ranges from ₹18 Lakhs for a starter 24 BPM setup to ₹65+ Lakhs for a high-speed 120 BPM automated line.',
      content: (
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          <p>
            Starting a packaged drinking water plant in India requires balancing machinery procurement, civil works, laboratory testing infrastructure, and licensing fees. Below is the realistic capital requirement by line speed:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-blue-700 font-mono font-bold block uppercase">Starter Plant (24-30 BPM)</span>
              <span className="text-base font-extrabold text-slate-900 font-mono">₹16 - ₹22 Lakhs</span>
              <p className="text-[11px] text-slate-500 mt-1">Semi-automatic blower, 1,500 LPH RO, 24 BPM filler, and manual packaging.</p>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-blue-600 shadow-2xs ring-1 ring-blue-600/20">
              <span className="text-[10px] text-blue-800 font-mono font-bold block uppercase">Commercial Plant (40-60 BPM)</span>
              <span className="text-base font-extrabold text-blue-800 font-mono">₹28 - ₹42 Lakhs</span>
              <p className="text-[11px] text-slate-600 mt-1">Fully automatic 4-cavity blower, 4,000 LPH RO, RFC monoblock, and BOPP labeler.</p>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-700 font-mono font-bold block uppercase">Industrial Line (100-120 BPM)</span>
              <span className="text-base font-extrabold text-slate-900 font-mono">₹55 - ₹80+ Lakhs</span>
              <p className="text-[11px] text-slate-500 mt-1">Rotary RFC 24-24-8, 6-cavity servo blower, 8,000 LPH RO, and automated case packaging.</p>
            </div>
          </div>
          <p>
            <strong>Key takeaway:</strong> Over 70% of first-time bottlers choose the 40 to 60 BPM configuration because it reaches positive operating cash flow within 30 to 45 days of commercial launch while qualifying for MSME subsidy schemes in Maharashtra, Gujarat, and other states.
          </p>
        </div>
      )
    },
    {
      title: 'Semi-Automatic vs. Fully Automatic PET Blow Moulding Machines: ROI Comparison',
      category: 'Machinery Selection',
      snippet: 'Compare initial capital expenditure, labor requirements, rejection rates, and per-bottle cost between semi-auto and servo automatic blowers.',
      content: (
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          <p>
            Choosing between a semi-automatic blower (e.g. VT-BLOW-S2 or VT-BLOW-S4-AD) and a fully automatic machine (VT-BLOW-A4) is an important strategic decision for a new plant owner:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 text-[11px]">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="p-2 border border-slate-200 font-bold">Feature</th>
                  <th className="p-2 border border-slate-200 font-bold">Semi-Automatic (2-4 Cavity)</th>
                  <th className="p-2 border border-slate-200 text-blue-800 font-bold">Fully Automatic Servo (4-Cavity)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-2 border border-slate-200 font-semibold text-slate-900">Initial CapEx</td>
                  <td className="p-2 border border-slate-200 text-slate-700">₹3.5 - ₹6.5 Lakhs</td>
                  <td className="p-2 border border-slate-200 text-blue-800 font-bold">₹16.5 - ₹22.0 Lakhs</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 border border-slate-200 font-semibold text-slate-900">Labor Required</td>
                  <td className="p-2 border border-slate-200 text-slate-700">2-3 operators per shift</td>
                  <td className="p-2 border border-slate-200 text-blue-800 font-semibold">1 operator (handles preform bin)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border border-slate-200 font-semibold text-slate-900">Rejection Rate</td>
                  <td className="p-2 border border-slate-200 text-slate-700">2% - 4% (human timing error)</td>
                  <td className="p-2 border border-slate-200 text-blue-800 font-bold">&lt; 0.2% (PLC synchronized)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 border border-slate-200 font-semibold text-slate-900">Air Consumption</td>
                  <td className="p-2 border border-slate-200 text-slate-700">Continuous venting</td>
                  <td className="p-2 border border-slate-200 text-blue-800 font-semibold">Air recovery ready (-25% power)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Recommendation:</strong> If your planned daily output is over 15,000 bottles/day, a fully automatic machine pays for itself in less than 7 months through saved labor wages and lower bottle rejection rates alone.
          </p>
        </div>
      )
    },
    {
      title: 'BOPP Hot-Melt Labeling vs. Self-Adhesive Sticker Labeling: Which Saves More Money?',
      category: 'Packaging Cost Optimization',
      snippet: 'Switching from sticker labels to roll-fed BOPP wrap-around labels reduces per-bottle packaging expense from ₹0.40 to ₹0.15.',
      content: (
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          <p>
            Labeling is the second-largest recurring operational cost after PET resin. Here is the direct math on why national brands (Bisleri, Kinley, Aquafina) use BOPP hot-melt labeling:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Self-Adhesive Sticker Labels:</strong> Cost approximately <strong>₹0.38 - ₹0.45 per label</strong> because they require silicone release paper backing which is thrown away.
              </div>
            </li>
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">BOPP Hot-Melt Labels:</strong> Cost only <strong>₹0.12 - ₹0.16 per label</strong>. Roll-fed film without waste backing, glued with a precision hot-melt roller.
              </div>
            </li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-blue-900 font-mono">
            Annual Savings Calculation: Producing 30,000 bottles/day saves ₹8,400 daily = <strong>₹26 Lakhs saved every single year</strong>!
          </div>
        </div>
      )
    },
    {
      title: 'BIS IS:14543 Mandatory In-House Laboratory & Licensing Checklist',
      category: 'Legal & Compliance',
      snippet: 'Everything required to pass the Bureau of Indian Standards inspection for Packaged Drinking Water manufacturing.',
      content: (
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          <p>
            Under Indian law, no packaged drinking water can be sold without the standard ISI mark under <strong>IS 14543:2018</strong>. Vedanta Technologies equips your factory with the exact testing apparatus required:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                Microbiological Testing Equipment:
              </h5>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                <li>Laminar Air Flow (LAF) Clean Bench</li>
                <li>Vertical Autoclave (Sterilization)</li>
                <li>BOD / Bacteriological Incubator</li>
                <li>Membrane Filtration Funnel Unit</li>
                <li>Colony Counter with Magnifier</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-blue-700" />
                Chemical & Physical Testing Apparatus:
              </h5>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                <li>UV-Visible Spectrophotometer</li>
                <li>Digital pH & Conductivity / TDS Meters</li>
                <li>Turbidity Meter (Nephelometric)</li>
                <li>Analytical Electronic Balance (0.1mg)</li>
                <li>Muffle Furnace & Hot Air Oven</li>
              </ul>
            </div>
          </div>
          <p>
            Vedanta provides standard calibration certificates, chemical reagents, and on-site training for your appointed chemist and microbiologist.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="resources" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            ENGINEERING & REGULATORY KNOWLEDGE BASE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Industry Guides, Compliance & Plant Planning
          </h2>
          <p className="text-slate-600 text-sm">
            Read our engineering whitepapers and operational guidelines for setting up and scaling beverage manufacturing facilities across India.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="industrial-card border border-slate-200 overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`article-content-${idx}`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block mb-2">
                    {art.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {art.snippet}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                  {openIndex === idx ? <ChevronUp className="w-5 h-5 text-blue-700" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {openIndex === idx && (
                <div 
                  id={`article-content-${idx}`}
                  className="px-5 sm:px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/50"
                >
                  {art.content}
                  <div className="mt-4 pt-4 border-t border-slate-200 flex justify-end">
                    <button
                      onClick={() => onOpenQuote('GUIDE-CONSULT')}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Consult with Vedanta Plant Engineer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
