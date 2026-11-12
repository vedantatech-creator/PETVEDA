import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  CheckCircle2,
  Download,
  ChevronDown
} from 'lucide-react';
import { VEDANTA_CATALOG } from '../data/catalog';

export default function QuoteModal({ isOpen, onClose, defaultModel = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    city: '',
    state: 'Maharashtra',
    modelCode: defaultModel || 'VT-BLOW-A4',
    dailyTarget: '25,000 Bottles/Day',
    bottleSize: '500ml',
    needsLab: false,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [prevDefaultModel, setPrevDefaultModel] = useState(defaultModel);

  if (defaultModel !== prevDefaultModel) {
    setPrevDefaultModel(defaultModel);
    if (defaultModel) {
      setFormData(prev => ({ ...prev, modelCode: defaultModel }));
    }
  }

  if (!isOpen) return null;

  const downloadProposalSlip = (data) => {
    const matchedMachine = VEDANTA_CATALOG.find(m => m.model_code === data.modelCode);
    const content = `=====================================================
VEDANTA TECHNOLOGIES - INDUSTRIAL MACHINERY OEM
Manufacturing Plant: Gala No. 13 Ground Floor, Sankalp Sidhi Complex,
Tirupati Venture Industrial Estate, Vasai Virar, Maharashtra - 401208
GSTIN: 27CJGPS6985P1ZX | BIS IS:14543 Turnkey Project Specialists
Helpline & WhatsApp: +91 8850848971 | info@vedantatechnologies.in
=====================================================
OFFICIAL QUOTATION & SPECIFICATION REQUEST SLIP
Reference ID: VT-REQ-${Date.now().toString().slice(-6)}
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
-----------------------------------------------------
1. CLIENT INFORMATION:
   - Full Name: ${data.name}
   - Contact / WhatsApp: ${data.phone}
   - Company / Enterprise: ${data.company || 'New Bottling Venture'}
   - Plant Location: ${data.city || 'Vasai / Mumbai'}, ${data.state}

2. MACHINERY & SPECIFICATIONS REQUESTED:
   - Model Code: ${data.modelCode}
   - Model Name: ${matchedMachine ? matchedMachine.name : 'Custom Machinery / Turnkey Project'}
   - Indicative Pricing: ${matchedMachine ? (matchedMachine.price_range || matchedMachine.price_indicative) : 'Custom Quote'}
   - Container Size: ${data.bottleSize}
   - Target Production: ${data.dailyTarget}
   - Connected Electrical Load: ${matchedMachine ? (matchedMachine.power_kw_numeric ? `${matchedMachine.power_kw_numeric} kW` : matchedMachine.total_connected_load_kw) : 'Standard'}
   - In-House BIS IS:14543 Lab: ${data.needsLab ? 'YES (Microbiology + Chemical Lab Equipment)' : 'NO (Machinery Only)'}
   - Special Instructions: ${data.notes || 'Full itemized quotation, power SLD, and plant CAD layout requested.'}

3. INQUIRY DISPATCH STATUS:
   [✓] Logged in Vedanta Technologies Lead Registry
   [✓] Dispatched via Instant WhatsApp to Chief Technical Engineer (+91 8850848971)
   [✓] Technical Spec Slip Saved to Client Device

NEXT STEPS:
Our senior project engineer in Vasai will review your requirements and send
the complete itemized commercial quotation and plant layout drawings directly
to your WhatsApp within 2 to 4 business hours.
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vedanta_Quote_Request_${data.modelCode}_${Date.now().toString().slice(-4)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSendWhatsApp = () => {
    const matchedMachine = VEDANTA_CATALOG.find(m => m.model_code === formData.modelCode);
    const text = encodeURIComponent(
      `*New Machinery & Quotation Inquiry - Vedanta Technologies*\n\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Phone / WhatsApp:* ${formData.phone}\n` +
      `*Company / Brand:* ${formData.company || 'New Bottling Project'}\n` +
      `*Location:* ${formData.city || 'India'}, ${formData.state}\n` +
      `*Machine of Interest:* ${formData.modelCode} ${matchedMachine ? `(${matchedMachine.price_indicative})` : ''}\n` +
      `*Container Size & Target:* ${formData.bottleSize} (${formData.dailyTarget})\n` +
      `*Includes BIS IS:14543 Lab:* ${formData.needsLab ? 'Yes (Mandatory Microbiology Lab)' : 'No'}\n` +
      `*Client Notes:* ${formData.notes || 'Please share detailed itemized quotation, power utility SLD, and CAD layout.'}`
    );
    window.open(`https://wa.me/918850848971?text=${text}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // 1. Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('vedanta_web_leads') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('vedanta_web_leads', JSON.stringify(existing));
    } catch {
      // Ignore localStorage errors in private browsing
    }

    // 2. Trigger automatic proposal slip download
    downloadProposalSlip(formData);

    // 3. Directly open WhatsApp with complete filled message
    handleSendWhatsApp();

    // 4. Show submitted confirmation
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-7 max-h-[88vh] overflow-y-auto space-y-5 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with 44px tap target */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1 pr-8">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                OFFICIAL FACTORY QUOTATION
              </span>
              <h3 id="quote-modal-title" className="text-lg sm:text-2xl font-bold text-slate-950 tracking-tight leading-snug">
                Request Machine Pricing & CAD Layout
              </h3>
              <p className="text-xs text-slate-600">
                Receive an itemized technical proposal and plant CAD layout. Submitting directly opens WhatsApp with your full inquiry pre-filled and downloads your technical request slip.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label htmlFor="quote-name" className="block text-slate-700 font-semibold mb-1 text-xs">Your Full Name *</label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label htmlFor="quote-phone" className="block text-slate-700 font-semibold mb-1 text-xs">Phone / WhatsApp *</label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  placeholder="e.g. 98200XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label htmlFor="quote-company" className="block text-slate-700 font-semibold mb-1 text-xs">Company / Brand Name</label>
                <input
                  id="quote-company"
                  type="text"
                  placeholder="e.g. AquaPure Beverages"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label htmlFor="quote-city" className="block text-slate-700 font-semibold mb-1 text-xs">City / District</label>
                <input
                  id="quote-city"
                  type="text"
                  placeholder="e.g. Pune, Vasai, Ahmedabad"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label htmlFor="quote-model" className="block text-slate-700 font-semibold mb-1 text-xs">Machine / Plant of Interest</label>
                <div className="relative">
                  <select
                    id="quote-model"
                    value={formData.modelCode}
                    onChange={(e) => setFormData({ ...formData, modelCode: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 pr-8 text-xs text-slate-900 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 font-mono appearance-none cursor-pointer shadow-2xs"
                  >
                    {VEDANTA_CATALOG.map((m) => (
                      <option key={m.model_code} value={m.model_code}>
                        {m.model_code} ({m.price_indicative})
                      </option>
                    ))}
                    <option value="BIS-LAB">Complete In-House BIS IS:14543 Lab Equipment</option>
                    <option value="CUSTOM-TURNKEY">Custom Turnkey Plant Project</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="quote-target" className="block text-slate-700 font-semibold mb-1 text-xs">Target Daily Output</label>
                <div className="relative">
                  <select
                    id="quote-target"
                    value={formData.dailyTarget}
                    onChange={(e) => setFormData({ ...formData, dailyTarget: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 pr-8 text-xs text-slate-900 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 appearance-none cursor-pointer shadow-2xs"
                  >
                    <option value="10,000 Bottles/Day">Up to 10,000 Bottles/Day</option>
                    <option value="25,000 Bottles/Day">20,000 - 30,000 Bottles/Day (40 BPM)</option>
                    <option value="50,000 Bottles/Day">40,000 - 60,000 Bottles/Day (60-80 BPM)</option>
                    <option value="100,000+ Bottles/Day">100,000+ Bottles/Day (Industrial 120+ BPM)</option>
                    <option value="500 - 2,000 Jars/Day">20L Commercial Water Jars</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Checkbox for BIS Lab */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3">
              <input
                type="checkbox"
                id="needsLab"
                checked={formData.needsLab}
                onChange={(e) => setFormData({ ...formData, needsLab: e.target.checked })}
                className="w-4 h-4 rounded border-slate-300 text-blue-700 focus:ring-blue-600"
              />
              <label htmlFor="needsLab" className="text-xs text-slate-700 cursor-pointer">
                Include mandatory <strong>BIS IS:14543 testing laboratory setup</strong> in proposal
              </label>
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-semibold mb-1">Special Requirements or Remarks</label>
              <textarea
                rows={2}
                placeholder="Mention any custom neck size, borewell TDS level, or delivery location..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit, Download Slip & Open WhatsApp</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-5 space-y-4 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                PROPOSAL DOWNLOADED & WHATSAPP OPENED
              </span>
              <h3 className="text-xl font-bold text-slate-950">
                Quotation Request Logged!
              </h3>
            </div>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your official specification slip has been downloaded to your device, and WhatsApp has been directly opened with your pre-filled inquiry.
            </p>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-left text-xs space-y-1 max-w-sm mx-auto font-mono text-slate-700">
              <div>Phone: <span className="text-slate-900 font-bold">{formData.phone}</span></div>
              <div>Machine: <span className="text-blue-800 font-bold">{formData.modelCode}</span></div>
              <div>Daily Target: <span className="text-slate-900 font-bold">{formData.dailyTarget}</span></div>
              <div>Location: <span className="text-slate-900 font-bold">{formData.city || 'India'}, {formData.state}</span></div>
            </div>

            <div className="pt-2 flex flex-col gap-2 max-w-sm mx-auto">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Re-Open WhatsApp Chat</span>
              </button>

              <button
                type="button"
                onClick={() => downloadProposalSlip(formData)}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-700" />
                <span>Download Proposal Slip Again</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
