import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  FileText, 
  Layers 
} from 'lucide-react';

export default function MobileBottomNav({ onOpenQuote }) {
  const location = useLocation();

  const isMachinesActive = location.pathname.startsWith('/machine');

  return (
    <nav 
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(15,23,42,0.08)]"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0.5rem))' }}
    >
      <div className="grid grid-cols-4 items-center justify-around px-2 pt-1.5 pb-1">
        {/* Home / Catalog Tab */}
        <Link
          to="/machines"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-colors ${
            isMachinesActive 
              ? 'text-blue-700 font-semibold' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Machines</span>
        </Link>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20am%20inquiring%20about%20PET%20Blow%20Moulding%20Machines."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 text-emerald-700 hover:text-emerald-800 rounded-xl transition-colors"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">WhatsApp</span>
        </a>

        {/* Direct Call to Factory Sales */}
        <a
          href="tel:+918850848971"
          className="flex flex-col items-center justify-center py-1 px-1 text-slate-700 hover:text-blue-700 rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5 text-blue-700" />
          <span className="text-[10px] font-medium tracking-tight">Call Sales</span>
        </a>

        {/* Instant Quote Button */}
        <button
          type="button"
          onClick={() => onOpenQuote()}
          className="flex flex-col items-center justify-center py-1 px-1 text-white bg-blue-700 hover:bg-blue-800 rounded-xl font-semibold shadow-2xs transition-transform active:scale-95 cursor-pointer"
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Get Quote</span>
        </button>
      </div>
    </nav>
  );
}
