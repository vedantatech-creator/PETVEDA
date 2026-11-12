import React from 'react';
import MetaSEO from '../components/MetaSEO';
import WhyChooseVedanta from '../components/WhyChooseVedanta';
import LocationHubs from '../components/LocationHubs';
import FaqSection from '../components/FaqSection';
import { Factory } from 'lucide-react';

export default function FactoryPage({ onOpenQuote }) {
  const factorySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vedanta Technologies OEM Manufacturing Plant",
    "description": "Primary machinery fabrication and assembly plant for PET blow moulding machines, turnkey water bottling lines, and automation systems.",
    "telephone": "+918850848971",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gala no. 13 Ground Floor, Sankalp Sidhi Complex, Tirupati Venture Ind Estate, Vasai Virar",
      "addressLocality": "Vasai",
      "addressRegion": "Maharashtra",
      "postalCode": "401208",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.3919,
      "longitude": 72.8397
    },
    "openingHours": "Mo-Sa 09:00-19:00"
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Manufacturing Plant & Service Hubs", path: "/factory" }
  ];

  return (
    <div className="bg-white min-h-screen py-10 lg:py-16">
      <MetaSEO 
        title="Vasai OEM Manufacturing Facility & Regional Service Hubs | Vedanta Technologies"
        description="Visit Vedanta Technologies manufacturing plant at Sankalp Sidhi Complex, Vasai, Maharashtra. Direct OEM supply, pre-dispatch trial runs, and Pan-India field engineering network."
        keywords="Vedanta Technologies Vasai address, PET machine manufacturer Vasai, blow moulding machine factory Maharashtra, Tirupati Venture Ind Estate Vasai"
        canonicalUrl="https://vedantatechnologies.in/factory"
        schemaData={factorySchema}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
            <Factory className="w-3.5 h-3.5 text-blue-700" />
            OEM MANUFACTURING FACILITY & HEADQUARTERS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Manufacturing Facility in Vasai, Maharashtra
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Located in the industrial belt of Vasai Virar, Vedanta Technologies manufactures, machines, and rigorously tests every stretch blow moulder and filling monoblock prior to customer dispatch.
          </p>
        </div>
      </div>

      {/* Part 1: Why Choose Vedanta Standards */}
      <div className="border-b border-slate-200 pb-16 mb-16">
        <WhyChooseVedanta onOpenQuote={onOpenQuote} />
      </div>

      {/* Part 2: Factory Location Details & Regional Hubs */}
      <div className="border-b border-slate-200 pb-16 mb-16">
        <LocationHubs onOpenQuote={onOpenQuote} />
      </div>

      {/* Embedded FAQ Section */}
      <FaqSection onOpenQuote={onOpenQuote} limit={3} />
    </div>
  );
}
