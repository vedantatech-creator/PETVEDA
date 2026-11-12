import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

export default function LocationHubs({ onOpenQuote }) {
  const hubs = [
    {
      region: 'Maharashtra (Primary Hub)',
      cities: ['Vasai (HQ & Factory)', 'Mumbai', 'Thane', 'Pune', 'Nashik', 'Aurangabad', 'Nagpur', 'Kolhapur'],
      highlight: 'Direct factory pickup, live showroom trials, and same-day service dispatch.'
    },
    {
      region: 'Gujarat Industrial Belt',
      cities: ['Ahmedabad', 'Rajkot', 'Surat', 'Vadodara', 'Vapi', 'Morbi', 'Bhavnagar'],
      highlight: 'Dedicated field engineers stationed across South and Central Gujarat.'
    },
    {
      region: 'North & Central India',
      cities: ['Delhi-NCR', 'Faridabad', 'Jaipur', 'Kanpur', 'Lucknow', 'Indore', 'Bhopal'],
      highlight: 'Fast road freight connectivity and scheduled plant commissioning visits.'
    },
    {
      region: 'South India Distribution',
      cities: ['Hyderabad', 'Bengaluru', 'Chennai', 'Coimbatore', 'Vijayawada', 'Kochi'],
      highlight: 'Full turnkey project supply including reverse osmosis and jar filling plants.'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Factory Headquarter Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-700" />
              FACTORY & HEAD OFFICE
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Visit Our Factory in Vasai, Maharashtra
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Experience live machine trial runs before placing your order. Inspect preform loading, mould clamping precision, and RFC monoblock filling accuracy right on our manufacturing floor.
            </p>

            {/* Direct Contact Card */}
            <div className="industrial-card p-6 bg-white border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900 text-sm">Vedanta Technologies</div>
                  <div className="text-slate-600 mt-1 leading-relaxed">
                    Gala no. 13 Ground Floor, Sankalp Sidhi Complex,<br />
                    Tirupati Venture Industrial Estate, Vasai Virar,<br />
                    Vasai, Maharashtra - 401208, India
                  </div>
                  <div className="text-slate-500 font-mono mt-1 text-[11px]">
                    GSTIN: <span className="text-slate-900 font-semibold">27CJGPS6985P1ZX</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 block text-[10px]">Direct Sales & Technical Helpline:</span>
                  <a href="tel:+918850848971" className="text-slate-900 font-mono font-bold hover:text-blue-700 transition-colors">
                    +91 8850848971
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 block text-[10px]">Official Technical Inquiries:</span>
                  <a href="mailto:vedantatechn@gmail.com" className="text-slate-900 font-mono hover:text-blue-700 transition-colors">
                    vedantatechn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500 block text-[10px]">Working Hours:</span>
                  Monday to Saturday: 9:00 AM – 7:00 PM IST
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote('FACTORY-VISIT')}
              className="w-full py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Live Factory Demo & Trial</span>
            </button>
          </div>

          {/* Right: Regional Hubs Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Pan-India Supply & Field Service Coverage
              </h3>
              <p className="text-slate-600 text-xs">
                With regional logistics and dedicated field technicians, Vedanta Technologies provides quick machinery dispatch and 24 to 48-hour on-site commissioning across primary industrial regions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hubs.map((hub, idx) => (
                <div 
                  key={idx}
                  className="industrial-card p-5 bg-white border border-slate-200 space-y-3"
                >
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <Truck className="w-4 h-4 text-blue-700" />
                    {hub.region}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {hub.cities.map((city, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                    {hub.highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-700 shrink-0" />
              <div className="text-xs text-blue-950">
                <span className="font-bold text-sm block">Export Ready to Middle East & Africa</span>
                We handle seaworthy export packaging, wooden crating, container stuffing, and international CE / compliance documentation for overseas beverage bottlers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
