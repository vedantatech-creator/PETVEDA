import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown,
  Layers,
  ArrowRight,
  Factory,
  Calculator,
  Droplets,
  Coins,
  BookOpen,
  Home as HomeIcon
} from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [machineryDropdown, setMachineryDropdown] = useState(false);
  const [turnkeyDropdown, setTurnkeyDropdown] = useState(false);
  const [toolsDropdown, setToolsDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMachineryActive = location.pathname.startsWith('/machine');
  const isTurnkeyActive = ['/turnkey', '/plant-layout'].includes(location.pathname);
  const isToolsActive = ['/calculator', '/roi', '/guides'].includes(location.pathname);
  const isCompanyActive = ['/contact', '/factory', '/compliance'].includes(location.pathname);

  const closeAllDropdowns = () => {
    setMachineryDropdown(false);
    setTurnkeyDropdown(false);
    setToolsDropdown(false);
    setCompanyDropdown(false);
  };

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    closeAllDropdowns();
    navigate(path);
  };

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
          onClick={() => {
            setMobileMenuOpen(false);
            closeAllDropdowns();
          }}
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

        {/* Streamlined Desktop Navigation Links (Strictly 5 Minimalist Items) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {/* 1. Home */}
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>

          {/* 2. Machinery: Clickable Catalog Link + Dropdown Menu to Sort */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setMachineryDropdown(true);
              setTurnkeyDropdown(false);
              setToolsDropdown(false);
              setCompanyDropdown(false);
            }}
            onMouseLeave={() => setMachineryDropdown(false)}
          >
            <Link
              to="/machines"
              onClick={() => {
                setMachineryDropdown(false);
                closeAllDropdowns();
              }}
              className={`text-xs tracking-tight transition-colors font-medium py-1.5 px-3 rounded-full flex items-center gap-1 focus:outline-none cursor-pointer ${
                isMachineryActive
                  ? 'text-blue-700 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
              title="Click to open full machinery catalog, or hover to view sort menu"
            >
              <span>Machinery</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-150 ${machineryDropdown ? 'rotate-180 text-blue-700' : ''}`} />
            </Link>

            {machineryDropdown && (
              <div 
                className="absolute left-0 top-full pt-1.5 w-72 z-50 animate-fade-in"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 text-xs">
                  <div className="px-3.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Sort Machinery by Category
                  </div>

                  <button
                    onClick={() => handleNavClick('/machines?cat=Fully Automatic')}
                    className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                  >
                    <span>Fully Automatic Blowers</span>
                    <span className="font-mono text-[10px] text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">2K - 8K BPH</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('/machines?cat=Semi-Automatic')}
                    className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                  >
                    <span>Semi-Automatic Blowers</span>
                    <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">From ₹3.5L</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('/machines?cat=Large Container')}
                    className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                  >
                    <span>20L Jar & 5L Can Blowers</span>
                    <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">5 Gallon</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('/machines?cat=Packaging')}
                    className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                  >
                    <span>BOPP Labelers & Utilities</span>
                    <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">Downstream</span>
                  </button>

                  <div className="pt-1.5 mt-1 border-t border-slate-100 px-3.5 flex items-center justify-between">
                    <Link
                      to="/machines"
                      onClick={() => setMachineryDropdown(false)}
                      className="text-blue-700 hover:text-blue-800 font-bold text-[11px] flex items-center gap-1 py-1"
                    >
                      <span>Open Full Catalog (15)</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      to="/guides"
                      onClick={() => setMachineryDropdown(false)}
                      className="text-slate-600 hover:text-blue-700 font-semibold text-[11px] py-1"
                    >
                      <span>Buyer Guides</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Turnkey Plants Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setTurnkeyDropdown(true);
              setMachineryDropdown(false);
              setToolsDropdown(false);
              setCompanyDropdown(false);
            }}
            onMouseLeave={() => setTurnkeyDropdown(false)}
          >
            <button
              onClick={() => {
                setTurnkeyDropdown(!turnkeyDropdown);
                setMachineryDropdown(false);
                setToolsDropdown(false);
                setCompanyDropdown(false);
              }}
              className={`text-xs tracking-tight transition-colors font-medium py-1.5 px-3 rounded-full flex items-center gap-1 focus:outline-none cursor-pointer ${
                isTurnkeyActive
                  ? 'text-blue-700 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>Turnkey Plants</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-150 ${turnkeyDropdown ? 'rotate-180 text-blue-700' : ''}`} />
            </button>

            {turnkeyDropdown && (
              <div 
                className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 text-xs animate-fade-in"
              >
                <div className="px-3.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                  Industrial Engineering
                </div>

                <button
                  onClick={() => handleNavClick('/turnkey')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-blue-700" />
                    <span>Turnkey Packages (40-120 BPM)</span>
                  </div>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">Packages</span>
                </button>

                <button
                  onClick={() => handleNavClick('/plant-layout')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Factory className="w-3.5 h-3.5 text-blue-700" />
                    <span>Interactive CAD Plant Layout</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">8-Stage</span>
                </button>
              </div>
            )}
          </div>

          {/* 4. Tools & ROI Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setToolsDropdown(true);
              setMachineryDropdown(false);
              setTurnkeyDropdown(false);
              setCompanyDropdown(false);
            }}
            onMouseLeave={() => setToolsDropdown(false)}
          >
            <button
              onClick={() => {
                setToolsDropdown(!toolsDropdown);
                setMachineryDropdown(false);
                setTurnkeyDropdown(false);
                setCompanyDropdown(false);
              }}
              className={`text-xs tracking-tight transition-colors font-medium py-1.5 px-3 rounded-full flex items-center gap-1 focus:outline-none cursor-pointer ${
                isToolsActive
                  ? 'text-blue-700 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>Tools & ROI</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-150 ${toolsDropdown ? 'rotate-180 text-blue-700' : ''}`} />
            </button>

            {toolsDropdown && (
              <div 
                className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 text-xs animate-fade-in"
              >
                <div className="px-3.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                  Calculators & Guides
                </div>

                <button
                  onClick={() => handleNavClick('/calculator')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Calculator className="w-3.5 h-3.5 text-blue-700" />
                    <span>Bottling Line Sizer</span>
                  </div>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">kW & CFM</span>
                </button>

                <button
                  onClick={() => handleNavClick('/roi')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Coins className="w-3.5 h-3.5 text-blue-700" />
                    <span>Bottle Profit & ROI Tool</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">Margin</span>
                </button>

                <button
                  onClick={() => handleNavClick('/guides')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                    <span>Buyer Decision Guides</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">Articles</span>
                </button>
              </div>
            )}
          </div>

          {/* 5. Contact & Factory Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setCompanyDropdown(true);
              setMachineryDropdown(false);
              setTurnkeyDropdown(false);
              setToolsDropdown(false);
            }}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <button
              onClick={() => {
                setCompanyDropdown(!companyDropdown);
                setMachineryDropdown(false);
                setTurnkeyDropdown(false);
                setToolsDropdown(false);
              }}
              className={`text-xs tracking-tight transition-colors font-medium py-1.5 px-3 rounded-full flex items-center gap-1 focus:outline-none cursor-pointer ${
                isCompanyActive
                  ? 'text-blue-700 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>Contact & Factory</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-150 ${companyDropdown ? 'rotate-180 text-blue-700' : ''}`} />
            </button>

            {companyDropdown && (
              <div 
                className="absolute right-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 text-xs animate-fade-in"
              >
                <div className="px-3.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                  Company & Plant
                </div>

                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                    <span>Contact & Direct RFQ</span>
                  </div>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">Helpline</span>
                </button>

                <button
                  onClick={() => handleNavClick('/factory')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Factory className="w-3.5 h-3.5 text-blue-700" />
                    <span>Vasai Factory & Hubs</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">Facility</span>
                </button>

                <button
                  onClick={() => handleNavClick('/compliance')}
                  className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-800 text-slate-700 font-medium flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    <span>BIS IS:14543 Lab Setup</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">ISI Mark</span>
                </button>
              </div>
            )}
          </div>
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
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 px-4 py-5 space-y-4 text-sm font-medium text-slate-800 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider px-3">
              Main Pages
            </span>

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold"
            >
              <HomeIcon className="w-4 h-4 text-blue-700" />
              <span>Home Overview</span>
            </Link>

            <div className="space-y-1">
              <Link
                to="/machines"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-blue-700" />
                  <span>Machinery Catalog (All 15)</span>
                </div>
                <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  Open Catalog
                </span>
              </Link>

              {/* Quick Sort Category Pills in Mobile Menu */}
              <div className="grid grid-cols-2 gap-1.5 pl-8 pr-2 pt-0.5 pb-1">
                <button
                  onClick={() => handleNavClick('/machines?cat=Fully Automatic')}
                  className="text-left py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-medium text-[11px] truncate cursor-pointer transition-colors"
                >
                  • Fully Automatic
                </button>
                <button
                  onClick={() => handleNavClick('/machines?cat=Semi-Automatic')}
                  className="text-left py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-medium text-[11px] truncate cursor-pointer transition-colors"
                >
                  • Semi-Automatic
                </button>
                <button
                  onClick={() => handleNavClick('/machines?cat=Large Container')}
                  className="text-left py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-medium text-[11px] truncate cursor-pointer transition-colors"
                >
                  • 20L Jar Blowers
                </button>
                <button
                  onClick={() => handleNavClick('/machines?cat=Packaging')}
                  className="text-left py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-medium text-[11px] truncate cursor-pointer transition-colors"
                >
                  • BOPP & Packaging
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider px-3">
              Turnkey & Engineering
            </span>

            <Link
              to="/turnkey"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <Droplets className="w-4 h-4 text-blue-700" />
              <span>Turnkey Bottling Packages</span>
            </Link>

            <Link
              to="/plant-layout"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <Factory className="w-4 h-4 text-blue-700" />
              <span>Interactive CAD Plant Layout</span>
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider px-3">
              Tools & Decision Guides
            </span>

            <Link
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <Calculator className="w-4 h-4 text-blue-700" />
              <span>Bottling Line Sizer & Power</span>
            </Link>

            <Link
              to="/roi"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <Coins className="w-4 h-4 text-blue-700" />
              <span>Bottle Profit & ROI Calculator</span>
            </Link>

            <Link
              to="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>Buyer Decision Guides</span>
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider px-3">
              Company & Standards
            </span>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Contact & Direct RFQ Proposal</span>
            </Link>

            <Link
              to="/factory"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <Factory className="w-4 h-4 text-blue-700" />
              <span>Vasai Factory & Regional Hubs</span>
            </Link>

            <Link
              to="/compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800"
            >
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span>BIS IS:14543 Testing Lab Setup</span>
            </Link>
          </div>

          {/* Quick CTA Buttons inside Drawer */}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3.5 rounded-xl shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request Official Quotation & CAD</span>
            </button>

            <a
              href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20am%20interested%20in%20PET%20Blow%20Moulding%20Machines."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs py-3.5 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Helpline (+91 8850848971)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
