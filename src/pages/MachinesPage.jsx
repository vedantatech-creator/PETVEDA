import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  FileText,
  ChevronRight,
  Calculator,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { VEDANTA_CATALOG } from '../data/catalog';

export default function MachinesPage({ onOpenQuote }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'all';
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Equipment (15)' },
    { id: 'Fully Automatic', label: 'Fully Automatic Blowers' },
    { id: 'Semi-Automatic', label: 'Semi-Automatic Blowers' },
    { id: 'Large Container', label: '20L & 5L Jar Blowers' },
    { id: 'Turnkey', label: 'Turnkey Bottling Plants' },
    { id: 'Carbonated', label: 'CSD & Soda Plants' },
    { id: 'Packaging', label: 'BOPP Labelers & Utilities' },
  ];

  const handleSelectCategory = (catId) => {
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
  };

  const filtered = VEDANTA_CATALOG.filter((prod) => {
    let matchCat = true;
    if (activeCategory && activeCategory !== 'all') {
      const catLower = prod.category.toLowerCase();
      const subLower = prod.sub_category.toLowerCase();
      const nameLower = prod.name.toLowerCase();
      const filterLower = activeCategory.toLowerCase();

      if (filterLower === 'fully automatic') {
        matchCat = subLower.includes('fully automatic') || nameLower.includes('fully automatic');
      } else if (filterLower === 'semi-automatic') {
        matchCat = subLower.includes('semi-automatic') || nameLower.includes('semi');
      } else if (filterLower === 'large container') {
        matchCat = subLower.includes('jar') || nameLower.includes('jar') || nameLower.includes('20-litre');
      } else if (filterLower === 'turnkey') {
        matchCat = catLower.includes('turnkey') || nameLower.includes('turnkey') || nameLower.includes('plant');
      } else if (filterLower === 'carbonated') {
        matchCat = subLower.includes('carbonated') || nameLower.includes('soda') || nameLower.includes('carbonated');
      } else if (filterLower === 'packaging') {
        matchCat = catLower.includes('labeling') || catLower.includes('packaging') || catLower.includes('utility') || catLower.includes('auxiliary') || catLower.includes('laboratory');
      }
    }

    let matchSearch = true;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      matchSearch =
        prod.name.toLowerCase().includes(term) ||
        prod.model_code.toLowerCase().includes(term) ||
        prod.description.toLowerCase().includes(term) ||
        prod.category.toLowerCase().includes(term);
    }

    return matchCat && matchSearch;
  });

  // Schema.org ItemList for Catalog Page SEO
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vedanta Technologies PET Blow Moulding Machines Catalog",
    "description": "Comprehensive catalog of linear stretch blow moulding machines, turnkey bottling plants, 20L jar blowers, and packaging automation.",
    "itemListElement": filtered.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://vedantatechnologies.in/machine/${item.slug}`,
      "name": item.name,
      "image": `https://vedantatechnologies.in${item.image}`
    }))
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "PET Machinery Catalog", path: "/machines" }
  ];

  return (
    <div className="bg-white min-h-screen py-8 lg:py-14">
      <MetaSEO 
        title="PET Blow Moulding Machines Catalog & Live Prices | Vedanta Technologies"
        description="Browse 15 models of Fully Automatic (2 to 6 cavity) and Semi-Automatic PET Blow Moulding Machines, Turnkey Bottling Plants, and 20L Jar Blowers. Sourced with live indicative OEM prices in Vasai, Maharashtra."
        keywords="PET blow moulding machines catalog, 4 cavity pet machine price, 2 cavity fully automatic blowing machine, 20 litre jar blowing machine, Vedanta Technologies Vasai"
        canonicalUrl="https://vedantatechnologies.in/machines"
        schemaData={catalogSchema}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section (Apple Style: Generous whitespace & crisp typography) */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wider block mb-2">
            PRECISION PACKAGING HARDWARE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Industrial PET Blow Moulding Machines & Downstream Automation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            All equipment engineered in our Vasai manufacturing plant with Schneider/Delta touch PLC, infrared quartz oven, and genuine factory warranties.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-stretch md:items-center">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full whitespace-nowrap font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-2xs font-semibold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Search machine models by name, cavity, or specs"
              placeholder="Search model, cavity, CFM..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700 transition-colors"
            />
          </div>
        </div>

        {/* Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((prod) => (
            <div
              key={prod.model_code}
              className="industrial-card p-5 bg-white border border-slate-200 flex flex-col justify-between group hover:border-blue-700 transition-all hover:shadow-sm"
            >
              <div>
                <div className="h-52 bg-slate-50 rounded-xl p-4 mb-4 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={prod.image}
                    alt={`Vedanta Technologies ${prod.name} ${prod.model_code} manufactured in Vasai Maharashtra`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-slate-800 border border-slate-200">
                    {prod.model_code}
                  </div>
                  {prod.cavity && (
                    <div className="absolute top-3 right-3 bg-blue-50 text-blue-800 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-blue-200">
                      {prod.cavity} Cavity
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">
                    {prod.series}
                  </span>
                  <h2 className="text-base font-bold text-slate-950 line-clamp-2 leading-snug">
                    {prod.name}
                  </h2>
                  <div className="pt-2">
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Indicative Price:</span>
                    <span className="text-lg font-black text-slate-950 font-mono">
                      {prod.price_range || prod.price_indicative}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  {prod.production_capacity_bph && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Capacity</span>
                      <span className="text-slate-900 font-bold font-mono text-xs">{prod.production_capacity_bph.split('(')[0]}</span>
                    </div>
                  )}

                  {prod.container_volume_range && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Volume</span>
                      <span className="text-slate-900 font-bold font-mono text-xs">{prod.container_volume_range.split('(')[0]}</span>
                    </div>
                  )}

                  {prod.total_connected_load_kw && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Power Load</span>
                      <span className="text-blue-800 font-bold font-mono text-xs">{prod.total_connected_load_kw}</span>
                    </div>
                  )}

                  {prod.chiller_requirement_tr && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Cooling</span>
                      <span className="text-slate-900 font-bold font-mono text-xs">{prod.chiller_requirement_tr}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                <Link
                  to={`/machine/${prod.slug}`}
                  className="w-full flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs py-2 rounded-full border border-slate-300 transition-colors shadow-2xs"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <button
                  onClick={() => onOpenQuote(prod.model_code)}
                  className="w-full flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2 rounded-full transition-colors shadow-2xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 mb-16">
            <p className="text-sm font-semibold">No machinery found matching your filter.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                handleSelectCategory('all');
              }}
              className="mt-3 text-xs text-blue-700 font-bold hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Clean Helper Gateway (Replacing bulky FAQs with elegant cross-links) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 sm:mt-16 pt-8 border-t border-slate-200">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-900">
              Need Help Choosing the Right Machine Sizing?
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Compare semi-automatic vs. fully automatic blowers, review 20L jar setup CapEx, or let our sizing engine calculate your exact kW and CFM requirements.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 px-4 py-2.5 rounded-full border border-slate-300 transition-colors shadow-2xs"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-700" />
              <span>Line Sizer</span>
            </Link>

            <Link
              to="/guides"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-full transition-colors shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buyer Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
