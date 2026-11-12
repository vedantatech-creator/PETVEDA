import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  ArrowRight
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50/80 text-slate-600 border-t border-slate-200 text-xs">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/vedanta-logo.png" 
                alt="Vedanta Technologies Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="border-l border-slate-200 pl-3">
                <span className="text-base font-black text-slate-950 tracking-tight font-sans uppercase block">
                  VEDANTA TECHNOLOGIES
                </span>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                  Industrial Machinery OEM
                </div>
              </div>
            </Link>

            <p className="text-slate-600 leading-relaxed text-xs">
              Vedanta Technologies is a premier Indian manufacturer and turnkey engineering provider for high-speed PET Stretch Blow Moulding Machines, Automatic Bottling RFC Lines, and Beverage Packaging Automation in Vasai, Maharashtra.
            </p>

            <div className="space-y-1.5 font-mono text-[11px] text-slate-600">
              <div>GSTIN: <span className="text-slate-900 font-bold">27CJGPS6985P1ZX</span></div>
              <div>Govt Registered MSME / UDYAM Enterprise</div>
            </div>

            <div className="pt-1">
              <span className="text-blue-800 font-semibold flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                BIS IS:14543 Turnkey Project Specialists
              </span>
            </div>
          </div>

          {/* Machinery Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
              Machinery Catalog
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <Link to="/machines?cat=Fully Automatic" className="hover:text-blue-700 transition-colors">
                  Fully Automatic Servo Blowers (2-6 Cavity)
                </Link>
              </li>
              <li>
                <Link to="/machines?cat=Semi-Automatic" className="hover:text-blue-700 transition-colors">
                  Semi-Automatic & Auto-Drop Blowers
                </Link>
              </li>
              <li>
                <Link to="/machines?cat=Large Container" className="hover:text-blue-700 transition-colors">
                  20 Litre & 5L Jar Blowing Machines
                </Link>
              </li>
              <li>
                <Link to="/machines?cat=Packaging" className="hover:text-blue-700 transition-colors">
                  Rotary BOPP Hot Melt Labeling Machines
                </Link>
              </li>
              <li>
                <Link to="/machines?cat=Packaging" className="hover:text-blue-700 transition-colors">
                  Automatic Shrink Film Web Sealers
                </Link>
              </li>
              <li>
                <Link to="/machines" className="text-blue-700 hover:text-blue-800 font-semibold flex items-center gap-1 pt-1">
                  <span>View All 15 Machines</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Turnkey Solutions & Tools Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
              Solutions & Tools
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <Link to="/turnkey" className="hover:text-blue-700 transition-colors">
                  Turnkey Water Plants (40-120 BPM)
                </Link>
              </li>
              <li>
                <Link to="/plant-layout" className="hover:text-blue-700 transition-colors">
                  Interactive CAD Plant Layout
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-blue-700 transition-colors">
                  Bottling Line Sizer & Utilities
                </Link>
              </li>
              <li>
                <Link to="/roi" className="hover:text-blue-700 transition-colors">
                  Bottle Profit & ROI Calculator
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-blue-700 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1">
                  <span>Buyer Decision Guides</span>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-1.5 py-0.2 rounded border border-blue-200">New</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-blue-700 transition-colors">
                  BIS IS:14543 Lab Equipment
                </Link>
              </li>
              <li>
                <Link to="/factory" className="hover:text-blue-700 transition-colors">
                  Vasai Manufacturing Facility
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-700 transition-colors">
                  Direct RFQ Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Factory Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
              Factory Location
            </h4>
            <div className="space-y-2.5 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Gala no. 13 Ground Floor, Sankalp Sidhi Complex, Tirupati Venture Industrial Estate, Vasai Virar, Vasai, Maharashtra - 401208
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href="tel:+918850848971" className="font-mono text-slate-900 hover:text-blue-700 font-bold">
                  +91 8850848971
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                <a href="mailto:vedantatechn@gmail.com" className="font-mono hover:text-blue-700">
                  vedantatechn@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote('CATALOG-DOWNLOAD')}
                className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-2xs"
              >
                Download Product Catalog (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-200 bg-slate-100/70 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © {CURRENT_YEAR} Vedanta Technologies. All rights reserved. Vasai, Maharashtra, India.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline">Precision OEM Engineering for Packaged Drinking Water & Beverage Bottlers.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
