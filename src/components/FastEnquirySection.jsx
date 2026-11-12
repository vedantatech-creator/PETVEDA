import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import { VEDANTA_CATALOG } from '../data/catalog';

export default function FastEnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    modelCode: 'VT-BLOW-A4',
    dailyTarget: '25,000 Bottles/Day',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('vedanta_web_leads') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('vedanta_web_leads', JSON.stringify(existing));

    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Factory RFQ Inquiry - Vedanta Technologies*\n\n` +
      `*Client:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City:* ${formData.city || 'India'}\n` +
      `*Model/Plant:* ${formData.modelCode}\n` +
      `*Target Output:* ${formData.dailyTarget}\n` +
      `*Notes:* ${formData.notes || 'Please provide quotation and specifications.'}`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  return (
    <section id="fast-rfq" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="industrial-card p-8 sm:p-12 bg-slate-50/70 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Direct Factory Helpline */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded">
                DIRECT OEM SALES & TECHNICAL HELPLINE
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Ready to Plan Your Bottling Facility?
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Connect directly with our senior application engineers in Vasai. Receive an itemized machinery quotation, civil floorplan drawing, power/air utility audit, and bank loan project report within 24 hours.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block font-mono">Direct Technical Helpline:</span>
                    <a href="tel:+918850848971" className="text-slate-900 font-bold font-mono text-sm hover:text-blue-700">
                      +91 8850848971
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block font-mono">Email for Official RFP / Tenders:</span>
                    <a href="mailto:vedantatechn@gmail.com" className="text-slate-900 font-mono text-sm hover:text-blue-700">
                      vedantatechn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block font-mono">Factory Working Hours:</span>
                    <span className="text-slate-900 font-medium">Monday to Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-blue-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>GST Registered OEM | Vasai Virar Industrial Estate</span>
              </div>
            </div>

            {/* Right Column: Inline RFQ Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-950">
                      Request Official Itemized Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Enter your project requirements to receive pricing and technical brochures.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label htmlFor="rfq-name" className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                      <input
                        id="rfq-name"
                        type="text"
                        required
                        placeholder="e.g. Deepak Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="rfq-phone" className="block text-slate-700 font-semibold mb-1">Phone / WhatsApp *</label>
                      <input
                        id="rfq-phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 98200XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="rfq-city" className="block text-slate-700 font-semibold mb-1">Your City / State</label>
                      <input
                        id="rfq-city"
                        type="text"
                        placeholder="e.g. Pune / Maharashtra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="rfq-model" className="block text-slate-700 font-semibold mb-1">Machine / Plant Category</label>
                      <select
                        id="rfq-model"
                        value={formData.modelCode}
                        onChange={(e) => setFormData({ ...formData, modelCode: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-700 font-mono text-xs"
                      >
                        {VEDANTA_CATALOG.map((m) => (
                          <option key={m.model_code} value={m.model_code}>
                            {m.model_code} ({m.price_indicative})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold text-xs mb-1">Target Daily Production</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {['10K Bottles', '25K Bottles', '60K Bottles', '20L Jars'].map((target) => (
                        <button
                          key={target}
                          type="button"
                          onClick={() => setFormData({ ...formData, dailyTarget: target })}
                          className={`py-2 px-2 text-center rounded border font-semibold transition-all ${
                            formData.dailyTarget === target
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {target}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold text-xs mb-1">Additional Project Details</label>
                    <textarea
                      rows={2}
                      placeholder="Specify container sizes (e.g. 500ml/1L), raw water source TDS, or floor space available..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Submit RFQ & Get Instant PDF Proposal</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    RFQ Received Successfully!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Vasai engineering team has received your project details for <strong className="text-blue-800 font-mono">{formData.modelCode}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto pt-2">
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-4 rounded-lg shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp (+91 8850848971)</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="py-3 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
                    >
                      New RFQ
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
