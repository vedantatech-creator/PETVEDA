import React from 'react';
import { 
  X, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  ShieldCheck, 
  Layers
} from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Vedanta Technologies, I am inquiring about model ${product.model_code}: ${product.name}. Please share pricing, machine delivery lead time, and technical brochure.`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="product-detail-modal-title">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          aria-label="Close product details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="space-y-1 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {product.model_code}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {product.category} • {product.sub_category}
            </span>
          </div>
          <h2 id="product-detail-modal-title" className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            {product.name}
          </h2>

          {/* Live Price Tag Banner */}
          <div className="flex flex-wrap items-baseline gap-3 pt-2">
            <span className="text-2xl font-black text-blue-800 font-mono">
              {product.price_range || product.price_indicative}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              ({product.gst_rate || '18% GST Applicable (HSN 84773000)'})
            </span>
            {product.lead_time_days && (
              <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-mono font-medium">
                Lead Time: {product.lead_time_days}
              </span>
            )}
          </div>
        </div>

        {/* Media & Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Image */}
          <div className="md:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-4 h-64 sm:h-72 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter contrast-105"
            />
          </div>

          {/* Quick Specifications Matrix */}
          <div className="md:col-span-7 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Technical Specifications Summary
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {product.production_capacity_bph && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Speed / Capacity</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">{product.production_capacity_bph}</span>
                </div>
              )}

              {product.line_speed && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Line Speed</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">{product.line_speed}</span>
                </div>
              )}

              {product.cavity && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Mould Cavities</span>
                  <span className="text-xs font-bold text-blue-800 font-mono">{product.cavity} Cavity</span>
                </div>
              )}

              {product.container_volume_range && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Container Volume</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">{product.container_volume_range}</span>
                </div>
              )}

              {product.blowing_pressure_bar && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Blowing Air</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">{product.blowing_pressure_bar}</span>
                </div>
              )}

              {product.total_connected_load_kw && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Connected Load</span>
                  <span className="text-xs font-bold text-blue-800 font-mono">{product.total_connected_load_kw}</span>
                </div>
              )}

              {product.chiller_requirement_tr && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">Chiller Cooling</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">{product.chiller_requirement_tr}</span>
                </div>
              )}

              {product.warranty && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block font-semibold">OEM Warranty</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">{product.warranty}</span>
                </div>
              )}
            </div>

            {/* Target Applications Chips */}
            {product.target_applications && (
              <div className="pt-1">
                <span className="text-[11px] text-slate-500 block mb-1.5 font-semibold">Target Bottling Applications:</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.target_applications.map((app, idx) => (
                    <span key={idx} className="text-xs bg-slate-50 text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Engineering Description */}
        {product.description && (
          <div className="space-y-2 pt-1 border-t border-slate-100">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Engineering Description
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        )}

        {/* Detailed Engineering Features & USPs */}
        {product.usps && product.usps.length > 0 && (
          <div className="space-y-3 pt-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Engineered Advantages
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              {product.usps.map((usp, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{usp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Specifications Table if available */}
        {product.specifications && (
          <div className="space-y-3 pt-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Layers className="w-4 h-4 text-blue-700" />
              Comprehensive Technical Parameters
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-2.5 border border-slate-200 font-semibold text-slate-800 w-1/3">
                        {key}
                      </td>
                      <td className="p-2.5 border border-slate-200 text-slate-700 font-mono">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
          <button
            onClick={() => {
              onClose();
              onOpenQuote(product.model_code);
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-4 rounded-lg shadow-sm transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Request Official Quotation & CAD Layout</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs py-3 px-5 rounded-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Chat on WhatsApp (+91 8850848971)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
