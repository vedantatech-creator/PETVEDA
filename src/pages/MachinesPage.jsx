import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  FileText,
  ChevronRight,
  Calculator,
  SlidersHorizontal
} from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { VEDANTA_CATALOG } from '../data/catalog';

export default function MachinesPage({ onOpenQuote }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    { id: 'all', label: 'All Equipment (15)' },
    { id: 'Fully Automatic', label: 'Fully Automatic Blowers' },
    { id: 'Semi-Automatic', label: 'Semi-Automatic Blowers' },
    { id: 'Large Container', label: '20L & 5L Jar Blowers' },
    { id: 'Turnkey', label: 'Turnkey Bottling Plants' },
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

  // Best Sellers (Top Priority Flagships)
  const bestSellers = VEDANTA_CATALOG.filter(p => p.is_best_seller);

  // Filter Catalog
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

  // Sort Catalog:
  // Default is High to Low: Output (BPH) -> Power (kW / BHP) -> Price
  // User can also select 3 Low to High modes:
  // 1. Bottle Quantity / Output (BPH: Low to High)
  // 2. Power / BHP (kW: Low to High)
  // 3. Price (₹: Low to High)
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'default') {
      if ((b.bph_numeric || 0) !== (a.bph_numeric || 0)) {
        return (b.bph_numeric || 0) - (a.bph_numeric || 0);
      }
      if ((b.power_kw_numeric || 0) !== (a.power_kw_numeric || 0)) {
        return (b.power_kw_numeric || 0) - (a.power_kw_numeric || 0);
      }
      return (b.price_value_lakhs || 0) - (a.price_value_lakhs || 0);
    }
    if (sortBy === 'bph_asc') {
      return (a.bph_numeric || 0) - (b.bph_numeric || 0);
    }
    if (sortBy === 'power_asc') {
      return (a.power_kw_numeric || 0) - (b.power_kw_numeric || 0);
    }
    if (sortBy === 'price_asc') {
      return (a.price_value_lakhs || 0) - (b.price_value_lakhs || 0);
    }
    if (sortBy === 'price_desc') {
      return (b.price_value_lakhs || 0) - (a.price_value_lakhs || 0);
    }
    if (sortBy === 'bph_desc') {
      return (b.bph_numeric || 0) - (a.bph_numeric || 0);
    }
    return 0;
  });

  // Schema.org ItemList for Catalog Page SEO
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vedanta Technologies PET Blow Moulding Machines Catalog",
    "description": "Comprehensive catalog of linear stretch blow moulding machines, turnkey bottling plants, 20L jar blowers, and packaging automation.",
    "itemListElement": sorted.map((item, idx) => ({
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
        {/* Page Header (Apple & 21st.dev Style: High-Signal, Solid Colors) */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-semibold mb-3">
            <span>VASAI OEM MANUFACTURING</span>
            <span className="text-slate-300">|</span>
            <span>15 INDUSTRIAL MODELS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Industrial PET Blow Moulding Machines & Downstream Automation
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All equipment engineered in our Vasai plant with Schneider/Delta PLC, infrared quartz oven, and genuine factory warranties. Default catalog sorted by capacity & power (High to Low).
          </p>
        </div>

        {/* ============================================================== */}
        {/* BEST SELLERS TOP SHELF (Requested High-Priority Interface) */}
        {/* ============================================================== */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0" />
              <h2 className="text-sm sm:text-base font-bold text-slate-950 uppercase font-mono tracking-wider">
                Best Sellers & Flagships
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              High-Demand OEM Production Lines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bestSellers.map((item) => (
              <div 
                key={`bestseller-${item.model_code}`}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:border-blue-700 transition-colors shadow-2xs"
              >
                <div>
                  <div className="h-40 bg-white rounded-xl p-3 mb-3 flex items-center justify-center relative border border-slate-200/80">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-2 left-2 bg-blue-700 text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                      {item.model_code}
                    </div>
                    <div className="absolute top-2 right-2 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                      BEST SELLER
                    </div>
                  </div>

                  <div className="space-y-1 mb-3">
                    <h3 className="text-sm font-bold text-slate-950 line-clamp-2 leading-snug">
                      {item.name}
                    </h3>
                    <div className="text-base font-black text-slate-950 font-mono pt-1">
                      {item.price_range || item.price_indicative}
                    </div>
                    <span className="block text-[10px] text-slate-500 font-mono mt-0.5">*Indicative price. Formal quote required.</span>
                  </div>

                  {/* Micro Specs */}
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono mb-3">
                    <div className="bg-white p-1.5 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Speed</span>
                      <span className="font-bold text-slate-900 truncate block">
                        {item.bph_numeric ? `${item.bph_numeric.toLocaleString()} BPH` : 'Line Rated'}
                      </span>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Power</span>
                      <span className="font-bold text-blue-800 truncate block">
                        {item.power_kw_numeric ? `${item.power_kw_numeric} kW` : 'Standard'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                  <Link
                    to={`/machine/${item.slug}`}
                    className="flex items-center justify-center gap-1 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs py-2 rounded-full border border-slate-300 transition-colors"
                  >
                    <span>Specs</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenQuote(item.model_code)}
                    className="flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* FILTER & SORT CONTROLS BAR */}
        {/* ============================================================== */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none text-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-blue-700 text-white font-semibold shadow-2xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                aria-label="Search machine models by name, cavity, or specs"
                placeholder="Search model, cavity, kW..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700 transition-colors"
              />
            </div>
          </div>

          {/* Dedicated Sort Selector Bar (3 Low to High Options + Default High to Low) */}
          <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-700" />
              <span className="font-mono font-bold text-slate-800 uppercase text-[11px]">
                Sort Catalog:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSortBy('default')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  sortBy === 'default'
                    ? 'bg-blue-700 text-white font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
                title="Default: High to Low Output, Power, and Price"
              >
                High → Low (Default)
              </button>

              <button
                type="button"
                onClick={() => setSortBy('bph_asc')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  sortBy === 'bph_asc'
                    ? 'bg-blue-700 text-white font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
                title="Sort Bottle Quantity / Output Low to High"
              >
                Output (Low → High)
              </button>

              <button
                type="button"
                onClick={() => setSortBy('power_asc')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  sortBy === 'power_asc'
                    ? 'bg-blue-700 text-white font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
                title="Sort Motor Power / BHP Low to High"
              >
                Power kW (Low → High)
              </button>

              <button
                type="button"
                onClick={() => setSortBy('price_asc')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  sortBy === 'price_asc'
                    ? 'bg-blue-700 text-white font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
                title="Sort Price Low to High"
              >
                Price (Low → High)
              </button>

              <button
                type="button"
                onClick={() => setSortBy('price_desc')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  sortBy === 'price_desc'
                    ? 'bg-blue-700 text-white font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
                title="Sort Price High to Low"
              >
                Price (High → Low)
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FULL MACHINERY LISTING (Sorted Default: High to Low) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sorted.map((prod) => (
            <div
              key={prod.model_code}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-700 transition-all hover:shadow-sm"
            >
              <div>
                <div className="h-52 bg-slate-50 rounded-xl p-4 mb-4 flex items-center justify-center relative overflow-hidden border border-slate-100">
                  <img
                    src={prod.image}
                    alt={`Vedanta Technologies ${prod.name} ${prod.model_code} manufactured in Vasai Maharashtra`}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-slate-800 border border-slate-200 shadow-2xs">
                    {prod.model_code}
                  </div>
                  {prod.cavity && (
                    <div className="absolute top-3 right-3 bg-blue-50 text-blue-900 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-blue-200">
                      {prod.cavity} Cavity
                    </div>
                  )}
                </div>

                <div className="space-y-1 mb-4">
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
                    <span className="block text-[10px] text-slate-500 font-mono mt-0.5">*Indicative price. Formal quote required.</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Capacity</span>
                    <span className="text-slate-900 font-bold font-mono text-xs">
                      {prod.bph_numeric ? `${prod.bph_numeric.toLocaleString()} BPH` : (prod.production_capacity_bph ? prod.production_capacity_bph.split('(')[0] : 'Line Specific')}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Power Load</span>
                    <span className="text-blue-800 font-bold font-mono text-xs">
                      {prod.power_kw_numeric ? `${prod.power_kw_numeric} kW` : (prod.total_connected_load_kw || 'Custom')}
                    </span>
                  </div>

                  {prod.container_volume_range && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Volume</span>
                      <span className="text-slate-900 font-bold font-mono text-xs truncate block">
                        {prod.container_volume_range.split('(')[0]}
                      </span>
                    </div>
                  )}

                  {prod.chiller_requirement_tr && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block font-mono uppercase font-semibold">Cooling</span>
                      <span className="text-slate-900 font-bold font-mono text-xs truncate block">
                        {prod.chiller_requirement_tr}
                      </span>
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
                  type="button"
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

        {sorted.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 mb-16">
            <p className="text-sm font-semibold">No machinery found matching your filter.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                handleSelectCategory('all');
                setSortBy('default');
              }}
              className="mt-3 text-xs text-blue-700 font-bold hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Transparent Pricing Disclaimer (2-Clause Regulatory Notice) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-10 text-xs font-mono text-slate-700 space-y-1.5">
          <p className="font-semibold text-slate-900">
            • Clause 1: Displayed machinery and turnkey plant prices are indicative factory benchmarks and are subject to revision based on raw material costs, component availability, and specific bottle/mold customization.
          </p>
          <p className="text-slate-600">
            • Clause 2: Please submit a direct inquiry or contact our sales engineering desk for a verified commercial quotation before finalizing orders or relying on pricing.
          </p>
        </div>

        {/* Clean Sizing Helper Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-900">
              Need Exact Plant Sizing & Utility Estimates?
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Calculate electrical power load (kW), high-pressure compressor CFM, and factory floor square footage with our interactive sizing engine.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 px-4 py-2.5 rounded-full border border-slate-300 transition-colors shadow-2xs"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-700" />
              <span>Launch Line Sizer</span>
            </Link>

            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-full transition-colors shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
