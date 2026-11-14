import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

export default function SpecTooltip({ term, definition, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <span ref={containerRef} className="relative inline-flex items-center gap-1 group">
      <span className="border-b border-dotted border-slate-400 group-hover:border-blue-600 transition-colors">
        {children || term}
      </span>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-400 hover:text-blue-700 focus:text-blue-700 focus:outline-none p-0.5 rounded cursor-pointer transition-colors"
        aria-label={`Definition of ${term}`}
        aria-expanded={isOpen}
      >
        <HelpCircle className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <span 
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-50 animate-fade-in pointer-events-auto leading-relaxed border border-slate-800 text-left font-sans"
        >
          <span className="block font-bold text-blue-400 mb-1 font-mono text-[11px] uppercase tracking-wide">
            {term}
          </span>
          <span className="block text-slate-200">
            {definition}
          </span>
          {/* Caret */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
        </span>
      )}
    </span>
  );
}
