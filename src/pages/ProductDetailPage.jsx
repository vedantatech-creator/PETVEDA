import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight,
  Play
} from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import FaqSection from '../components/FaqSection';
import { VEDANTA_CATALOG } from '../data/catalog';

export default function ProductDetailPage({ onOpenQuote }) {
  const { modelCode } = useParams();
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'usps', 'applications'

  // Match by model_code OR by SEO slug
  const product = VEDANTA_CATALOG.find(
    m => m.model_code.toLowerCase() === (modelCode || '').toLowerCase() ||
         m.slug.toLowerCase() === (modelCode || '').toLowerCase()
  ) || VEDANTA_CATALOG[0];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Vedanta Technologies, I am inquiring about model ${product.model_code}: ${product.name}. Please share pricing, machine delivery lead time, and technical brochure.`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  const handleVideoRequest = () => {
    const text = encodeURIComponent(
      `Hello Vedanta Technologies, I am viewing model ${product.model_code}: ${product.name}. Please send me a 60-second video of this machine running at your Vasai facility, along with direct factory pricing.`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  const related = VEDANTA_CATALOG.filter(
    m => m.category === product.category && m.model_code !== product.model_code
  ).slice(0, 3);

  // High-Resolution Schema.org Product Rich Snippet
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": [
      `https://vedantatechnologies.in${product.image}`
    ],
    "description": product.description,
    "sku": product.model_code,
    "mpn": product.model_code,
    "brand": {
      "@type": "Brand",
      "name": "Vedanta Technologies"
    },
    "category": product.category,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": product.price_value_lakhs ? product.price_value_lakhs * 100000 : 1500000,
      "highPrice": (product.price_value_lakhs ? product.price_value_lakhs * 100000 : 1500000) * 1.35,
      "offerCount": "1",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "priceValidUntil": "2027-12-31",
      "seller": {
        "@type": "Organization",
        "name": "Vedanta Technologies"
      }
    },
    "additionalProperty": Object.entries(product.specifications || {}).map(([key, val]) => ({
      "@type": "PropertyValue",
      "name": key,
      "value": val
    }))
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "PET Machinery Catalog", path: "/machines" },
    { name: product.name, path: `/machine/${product.slug}` }
  ];

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8 lg:py-14">
      <MetaSEO 
        title={`${product.model_code} | ${product.name}`}
        description={`${product.name} manufactured by Vedanta Technologies in Vasai, Maharashtra. Speed: ${product.production_capacity_bph || product.line_speed}. Indicative Price: ${product.price_range}. Total Connected Load: ${product.total_connected_load_kw || 'N/A'}.`}
        keywords={`${product.name}, ${product.model_code}, ${product.sub_category}, PET blow moulding machine India, PET bottle machine price, Vedanta Technologies`}
        canonicalUrl={`https://vedantatechnologies.in/machine/${product.slug}`}
        ogImage={`https://vedantatechnologies.in${product.image}`}
        ogType="product"
        schemaData={productSchema}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb Navigation (Mobile Wrap Friendly) */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-500 mb-5 sm:mb-6 flex-wrap">
          <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link to="/machines" className="hover:text-blue-700 transition-colors">Machinery</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-mono text-slate-900 font-semibold truncate max-w-[180px] sm:max-w-none">{product.model_code}</span>
        </nav>

        {/* Product Title Section */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {product.model_code}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {product.series} • {product.sub_category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {product.name}
          </h1>
        </div>

        {/* Floating Quick Summary Bar */}
        <div className="industrial-card p-4 sm:p-5 bg-slate-50/80 border border-slate-200 mb-8 sm:mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-baseline gap-2.5 sm:gap-3">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Ex-Factory Vasai Price:</span>
              <span className="text-xl sm:text-2xl font-black text-slate-950 font-mono">
                {product.price_range || product.price_indicative}
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              ({product.gst_rate || '18% GST Applicable'})
            </span>
            {product.lead_time_days && (
              <span className="text-xs bg-white text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200 font-mono font-medium">
                Lead Time: {product.lead_time_days}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => onOpenQuote(product.model_code)}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 sm:py-2.5 px-4 sm:px-5 rounded-full shadow-2xs transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quotation</span>
            </button>

            <button
              onClick={handleVideoRequest}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-800 border border-blue-300 font-semibold text-xs py-3 sm:py-2.5 px-4 rounded-full transition-all cursor-pointer shadow-2xs"
            >
              <Play className="w-3.5 h-3.5 text-blue-700 fill-blue-700" />
              <span>Get 60s Run Video</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs py-3 sm:py-2.5 px-4 rounded-full transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-14 sm:mb-16">
          {/* Machine Image Frame */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
            <img
              src={product.image}
              alt={`Vedanta Technologies ${product.name} ${product.model_code} manufactured in Vasai Maharashtra`}
              className="max-h-full max-w-full object-contain filter contrast-105"
            />
            <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 rounded-full text-[11px] text-slate-700 border border-slate-200 font-mono font-semibold shadow-2xs">
              {product.production_capacity_bph ? product.production_capacity_bph.split('(')[0] : product.line_speed}
            </div>
          </div>

          {/* Quick Specifications Matrix */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div>
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Executive Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>

              {/* Price Disclaimer Clause */}
              <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] sm:text-xs text-slate-700 font-mono space-y-1">
                <p className="font-semibold text-slate-900">• Notice: Listed prices are indicative benchmarks and subject to change based on raw material costs, component availability, and container customization.</p>
                <p className="text-slate-600">• Action: Please submit a direct inquiry or contact our sales engineering desk for a verified commercial quotation before finalizing orders.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
              {product.production_capacity_bph && (
                <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Speed / Throughput</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-0.5 block">{product.production_capacity_bph}</span>
                </div>
              )}

              {product.container_volume_range && (
                <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Container Range</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-0.5 block">{product.container_volume_range}</span>
                </div>
              )}

              {product.blowing_pressure_bar && (
                <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Blowing Pressure</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-0.5 block">{product.blowing_pressure_bar}</span>
                </div>
              )}

              {product.total_connected_load_kw && (
                <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Connected Power</span>
                  <span className="text-xs sm:text-sm font-bold text-blue-800 font-mono mt-0.5 block">{product.total_connected_load_kw}</span>
                </div>
              )}
            </div>

            {product.warranty && (
              <div className="bg-slate-50 border border-slate-200 p-3 sm:p-3.5 rounded-xl text-xs text-slate-700 flex items-center gap-2.5 sm:gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
                <span><strong>OEM Warranty:</strong> {product.warranty} with Pan-India service engineer coverage.</span>
              </div>
            )}
          </div>
        </div>

        {/* Tabbed Engineering Data Section (Mobile Horizontal Scroll Tabs) */}
        <div className="mb-16 sm:mb-20">
          <div className="flex border-b border-slate-200 gap-2 mb-6 sm:mb-8 text-xs font-semibold overflow-x-auto whitespace-nowrap scrollbar-none pb-1">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'border-blue-700 text-blue-700 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Technical Specifications
            </button>

            <button
              onClick={() => setActiveTab('usps')}
              className={`pb-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'usps'
                  ? 'border-blue-700 text-blue-700 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Engineered Advantages
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`pb-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'applications'
                  ? 'border-blue-700 text-blue-700 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Target Applications
            </button>
          </div>

          {activeTab === 'specs' && (
            <div className="industrial-card p-4 sm:p-8 bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-950 mb-4">
                Factory Parameters & Mechanical Tolerances
              </h3>
              {product.specifications ? (
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full min-w-[460px] text-left border-collapse border border-slate-200 text-xs">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-3 border border-slate-200 font-semibold text-slate-800 w-1/3">
                            {key}
                          </td>
                          <td className="p-3 border border-slate-200 text-slate-700 font-mono">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-xs text-slate-500">Contact factory engineers for custom CAD drawings and parameter sheets.</p>
              )}
            </div>
          )}

          {activeTab === 'usps' && (
            <div className="industrial-card p-4 sm:p-8 bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-950 mb-4">
                Engineering Highlights & Built-in Efficiencies
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-slate-700">
                {product.usps.map((usp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{usp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="industrial-card p-4 sm:p-8 bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-950 mb-4">
                Recommended Packaging Verticals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs">
                {product.target_applications.map((app, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Equipment */}
        {related.length > 0 && (
          <div className="border-t border-slate-200 pt-10 sm:pt-12 pb-12 sm:pb-16">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-6">
              Complementary Machinery in {product.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.model_code}
                  to={`/machine/${rel.slug}`}
                  className="industrial-card p-4 sm:p-5 bg-white border border-slate-200 group block hover:border-blue-700 transition-colors"
                >
                  <div className="h-36 sm:h-40 bg-slate-50 rounded-lg p-3 mb-3 flex items-center justify-center">
                    <img
                      src={rel.image}
                      alt={`Vedanta ${rel.name}`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-xs font-mono font-bold text-blue-800">{rel.model_code}</div>
                  <div className="text-sm font-bold text-slate-950 mt-1 line-clamp-1">{rel.name}</div>
                  <div className="text-xs font-mono font-bold text-slate-700 mt-2">{rel.price_indicative}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Embedded FAQ Section with FAQPage Schema */}
      <FaqSection onOpenQuote={onOpenQuote} limit={4} />
    </div>
  );
}
