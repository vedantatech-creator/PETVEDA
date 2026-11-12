import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { VEDANTA_CATALOG } from '../data/catalog';

export default function ProductCatalog({ onSelectProduct, onOpenQuote, activeCategoryFilter, setActiveCategoryFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Machinery & Plants' },
    { id: 'Fully Automatic', label: 'Fully Automatic Blowers' },
    { id: 'Semi-Automatic', label: 'Semi-Automatic Blowers' },
    { id: 'Large Container', label: '20L & 5L Jar Blowers' },
    { id: 'Turnkey', label: 'Turnkey Water Plants' },
    { id: 'Carbonated', label: 'CSD & Soda Plants' },
    { id: 'Packaging', label: 'BOPP, Shrink & Utilities' },
  ];

  const filteredProducts = VEDANTA_CATALOG.filter((prod) => {
    // Category match
    let matchCat = true;
    if (activeCategoryFilter && activeCategoryFilter !== 'all') {
      const catLower = prod.category.toLowerCase();
      const subLower = prod.sub_category.toLowerCase();
      const nameLower = prod.name.toLowerCase();
      const filterLower = activeCategoryFilter.toLowerCase();
      
      if (filterLower === 'fully automatic') {
        matchCat = subLower.includes('fully automatic') || nameLower.includes('fully automatic');
      } else if (filterLower === 'semi-automatic') {
        matchCat = subLower.includes('semi-automatic') || nameLower.includes('semi');
      } else if (filterLower === 'large container') {
        matchCat = subLower.includes('jar') || nameLower.includes('jar') || nameLower.includes('20-litre');
      } else if (filterLower === 'turnkey') {
        matchCat = catLower.includes('turnkey') || nameLower.includes('turnkey');
      } else if (filterLower === 'carbonated') {
        matchCat = catLower.includes('beverage') || nameLower.includes('carbonated') || nameLower.includes('soda');
      } else if (filterLower === 'packaging') {
        matchCat = catLower.includes('packaging') || catLower.includes('auxiliary') || nameLower.includes('compressor') || nameLower.includes('chiller');
      } else {
        matchCat = catLower.includes(filterLower) || subLower.includes(filterLower);
      }
    }

    // Search query match
    let matchSearch = true;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      matchSearch = (
        prod.name.toLowerCase().includes(q) ||
        prod.model_code.toLowerCase().includes(q) ||
        prod.category.toLowerCase().includes(q) ||
        prod.sub_category.toLowerCase().includes(q) ||
        (prod.production_capacity_bph && prod.production_capacity_bph.toLowerCase().includes(q)) ||
        (prod.line_speed && prod.line_speed.toLowerCase().includes(q)) ||
        prod.usps.some(u => u.toLowerCase().includes(q))
      );
    }

    return matchCat && matchSearch;
  });

  return (
    <section id="products" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              ENGINEERED FOR PRODUCTION THROUGHPUT & RELIABILITY
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Machinery & Turnkey Plants Catalog
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Explore our full line of linear stretch blow moulders, automatic bottling RFC blocks, BOPP labeling automation, and plant utilities with live indicative factory pricing.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, BPH, or container size..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id === 'all' ? null : cat.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-semibold transition-all ${
                (activeCategoryFilter === cat.id || (!activeCategoryFilter && cat.id === 'all'))
                  ? 'bg-blue-700 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 hover:border-slate-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.model_code}
              className="industrial-card p-5 flex flex-col justify-between group overflow-hidden bg-white"
            >
              <div>
                {/* Card Top: Code & Live Price Tag */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      {prod.model_code}
                    </span>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      {prod.sub_category.split(' ')[0]} {prod.cavity ? `• ${prod.cavity} Cavity` : ''}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-950 font-mono block">
                      {prod.price_indicative}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Ex-Factory Vasai
                    </span>
                  </div>
                </div>

                {/* Product Image Frame */}
                <div className="relative rounded-lg overflow-hidden bg-slate-50 border border-slate-200 h-48 sm:h-52 mb-4 p-3 flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/95 px-2 py-0.5 rounded text-[10px] text-slate-700 border border-slate-200 font-mono font-semibold shadow-2xs">
                    {prod.production_capacity_bph ? prod.production_capacity_bph.split('(')[0] : (prod.line_speed || 'Industrial Grade')}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                  {prod.name}
                </h3>

                {/* Description Snippet */}
                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {prod.description}
                </p>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  {prod.production_capacity_bph && (
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Output</span>
                      <span className="text-slate-900 font-bold font-mono text-xs">{prod.production_capacity_bph.split('(')[0]}</span>
                    </div>
                  )}

                  {prod.container_volume_range && (
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Volume</span>
                      <span className="text-slate-900 font-bold font-mono text-xs">{prod.container_volume_range.split('(')[0]}</span>
                    </div>
                  )}

                  {prod.line_speed && (
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Line Rate</span>
                      <span className="text-slate-900 font-bold font-mono text-xs">{prod.line_speed.split('(')[0]}</span>
                    </div>
                  )}

                  {prod.total_connected_load_kw && (
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Power Load</span>
                      <span className="text-blue-800 font-bold font-mono text-xs">{prod.total_connected_load_kw}</span>
                    </div>
                  )}
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 text-xs text-slate-700 mb-5">
                  {prod.usps.slice(0, 2).map((usp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200">
                <button
                  onClick={() => onSelectProduct(prod)}
                  className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs py-2.5 rounded-lg border border-slate-300 transition-colors"
                >
                  <span>Full Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => onOpenQuote(prod.model_code)}
                  className="w-full flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 text-slate-500">
            <p className="text-sm font-medium">No machines matching your search query.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategoryFilter(null);
              }}
              className="mt-3 text-xs text-blue-700 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
