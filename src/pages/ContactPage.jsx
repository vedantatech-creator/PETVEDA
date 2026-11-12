import React from 'react';
import MetaSEO from '../components/MetaSEO';
import FastEnquirySection from '../components/FastEnquirySection';
import FaqSection from '../components/FaqSection';
import { MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vedanta Technologies OEM Engineering",
    "description": "Direct contact page for machinery quotations, technical inquiries, and factory visit bookings.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Vedanta Technologies",
      "telephone": "+918850848971",
      "email": "contact@vedantatechnologies.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gala no. 13 Ground Floor, Sankalp Sidhi Complex, Tirupati Venture Ind Estate, Vasai Virar",
        "addressLocality": "Vasai",
        "addressRegion": "Maharashtra",
        "postalCode": "401208",
        "addressCountry": "IN"
      }
    }
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Engineering Sales", path: "/contact" }
  ];

  return (
    <div className="bg-white min-h-screen py-10 lg:py-16">
      <MetaSEO 
        title="Contact Factory Sales & Request Machinery Quotation | Vedanta Technologies"
        description="Get in touch with Vedanta Technologies application engineers in Vasai, Maharashtra. Direct OEM pricing, quotation requests, live showroom trial bookings, and WhatsApp support (+91 8850848971)."
        keywords="contact Vedanta Technologies, PET machine quotation, water plant machine supplier phone number, Vasai machine factory contact, WhatsApp PET machine sales"
        canonicalUrl="https://vedantatechnologies.in/contact"
        schemaData={contactSchema}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-blue-700" />
            DIRECT OEM TECHNICAL HELPLINE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Contact Factory Engineering & Request Quotation
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Connect directly with our senior application engineers in Vasai, Maharashtra for immediate machinery pricing, civil CAD plant layouts, and bank loan feasibility reports.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <FastEnquirySection />
      </div>

      {/* Embedded FAQ Section */}
      <FaqSection limit={3} />
    </div>
  );
}
