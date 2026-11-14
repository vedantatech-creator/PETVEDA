import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Home, MessageSquare } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-16 text-center max-w-3xl mx-auto">
      <MetaSEO 
        title="Page Not Found (404) | Vedanta Technologies"
        description="The requested page could not be located. Browse our PET blow moulding machinery catalog or turnkey bottling plant solutions."
        canonicalUrl="https://vedantatechnologies.in/"
      />

      <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-6 shadow-2xs">
        <Layers className="w-8 h-8" />
      </div>

      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 mb-3">
        Error 404 • Page Not Found
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
        The Requested Page Does Not Exist
      </h1>

      <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-lg leading-relaxed">
        The URL you followed may have changed, or the requested resource is no longer available. You can browse our active machinery catalog or contact our engineering desk directly.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full transition-all shadow-sm hover:shadow"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>

        <Link
          to="/machines"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full border border-slate-300 transition-colors shadow-2xs"
        >
          <Layers className="w-4 h-4 text-blue-700" />
          <span>Browse Machinery Catalog (15 Models)</span>
        </Link>

        <a
          href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20encountered%20a%20missing%20page%20on%20your%20website%20and%20need%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full border border-emerald-200 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-700" />
          <span>WhatsApp Factory Support</span>
        </a>
      </div>

      {/* Helpful Directory Links */}
      <div className="pt-8 border-t border-slate-200 w-full max-w-md">
        <p className="text-xs text-slate-500 font-medium mb-3">Popular Factory Sections:</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
          <Link to="/turnkey" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors font-medium">
            Turnkey Bottling Plants
          </Link>
          <Link to="/calculator" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors font-medium">
            Line Sizer & CapEx Calculator
          </Link>
          <Link to="/guides" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors font-medium">
            Buyer Decision Guides
          </Link>
          <Link to="/contact" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors font-medium">
            Contact & Factory RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
