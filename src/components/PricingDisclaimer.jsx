import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function PricingDisclaimer({ className = '' }) {
  return (
    <div className={`p-4 sm:p-5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-600 shadow-2xs ${className}`}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
          <ShieldAlert className="w-4 h-4" />
        </div>
        <div className="space-y-1 leading-relaxed">
          <p className="font-semibold text-slate-800">
            • Clause 1: Displayed machinery and turnkey plant prices are indicative factory benchmarks and are subject to revision based on raw material costs, component availability, and specific bottle/mold customization.
          </p>
          <p className="text-slate-500">
            • Clause 2: Please submit a direct inquiry or contact our sales engineering desk for a verified commercial quotation before finalizing orders or relying on pricing.
          </p>
        </div>
      </div>
    </div>
  );
}
