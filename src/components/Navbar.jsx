import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck, 
  Layers,
  Calculator,
  Droplets,
  Home as HomeIcon
} from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `text-xs tracking-tight transition-colors font-medium py-1.5 px-3 rounded-full ${
      isActive 
        ? 'text-blue-700 bg-blue-50 font-semibold' 
        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all">
      {/* Top Bar for Industrial Credentials & Factory Notice (Single Line Clean Bar) */}
      <div className="bg-slate-50/90 border-b border-slate-200/70 text-[11px] text-slate-500 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 truncate">
            <span className="flex items-center gap-1.5 text-blue-900 font-semibold text-[11px] sm:text-xs truncate">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
              <span className="truncate">OEM Plant: Vasai, Maharashtra</span>
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              BIS IS:14543 Turnkey Ready
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 font-mono text-[11px] shrink-0">
            <span className="hidden sm:inline text-slate-500">GSTIN: <span className="text-slate-900 font-bold">27CJGPS6985P1ZX</span></span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a 
              href="tel:+918850848971" 
              className="text-slate-900 hover:text-blue-700 flex items-center gap-1 font-bold transition-colors py-0.5 px-1.5 rounded active:bg-slate-200"
              title="Call Vedanta Technologies Sales"
            >
              <Phone className="w-3 h-3 text-blue-700" />
              <span>+91 8850848971</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
        >
          <img 
            src="/vedanta-logo.png" 
            alt="Vedanta Technologies Logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <div className="border-l border-slate-200 pl-2.5 sm:pl-3">
            <div className="text-[13px] sm:text-sm uppercase tracking-tight text-slate-950 font-bold font-sans leading-none">
              Vedanta Technologies
            </div>
            <div className="text-[9px] uppercase tracking-wider text-slate-500 font-medium font-mono mt-0.5">
              PET Machinery OEM
            </div>
          </div>
        </Link>

        {/* Streamlined Desktop Navigation Links (Direct Buttons, No Dropdowns) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* 1. Home */}
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>

          {/* 2. Machinery (Direct Button Only) */}
          <NavLink to="/machines" className={navLinkClasses}>
            Machinery
          </NavLink>

          {/* 3. Turnkey Plants */}
          <NavLink to="/turnkey" className={navLinkClasses}>
            Turnkey Plants
          </NavLink>

          {/* 4. Line Sizer & Calculator */}
          <NavLink to="/calculator" className={navLinkClasses}>
            Line Sizer & Calculator
          </NavLink>

          {/* 5. Contact & Factory */}
          <NavLink to="/contact" className={navLinkClasses}>
            Contact & Factory
          </NavLink>
        </nav>

        {/* Desktop Quick Action Buttons */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20am%20interested%20in%20PET%20Blow%20Moulding%20Machines%20and%20Turnkey%20Bottling%20Plants."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 py-1.5 px-3 rounded-full transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenQuote()}
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 shadow-2xs py-1.5 px-4 rounded-full transition-all hover:scale-[1.02] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Quote</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-800 hover:text-slate-950 active:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 px-4 py-5 space-y-3 text-sm font-medium text-slate-800 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold"
            >
              <HomeIcon className="w-4 h-4 text-blue-700" />
              <span>Home Overview</span>
            </Link>

            <Link
              to="/machines"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold"
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-blue-700" />
                <span>Machinery Catalog</span>
              </div>
              <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                15 Models
              </span>
            </Link>

            <Link
              to="/turnkey"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold"
            >
              <Droplets className="w-4 h-4 text-blue-700" />
              <span>Turnkey Bottling Plants</span>
            </Link>

            <Link
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold"
            >
              <Calculator className="w-4 h-4 text-blue-700" />
              <span>Bottling Line Sizer & Calculator</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Contact & Factory RFQ</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request Official Quotation</span>
            </button>
            <a
              href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20am%20interested%20in%20PET%20Blow%20Moulding%20Machines."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold py-2.5 px-4 rounded-xl text-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Chat on WhatsApp (+91 8850848971)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
