import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';
import MobileBottomNav from './components/MobileBottomNav';
import LoadingScreen from './components/LoadingScreen';

// Separate Dedicated Pages (Multi-Page Architecture)
import Home from './pages/Home';
import MachinesPage from './pages/MachinesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TurnkeyPage from './pages/TurnkeyPage';
import CalculatorPage from './pages/CalculatorPage';
import RoiPage from './pages/RoiPage';
import PlantLayoutPage from './pages/PlantLayoutPage';
import CompliancePage from './pages/CompliancePage';
import FactoryPage from './pages/FactoryPage';
import ContactPage from './pages/ContactPage';
import BuyerGuidesPage from './pages/BuyerGuidesPage';

import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultModel, setQuoteDefaultModel] = useState('');

  const handleOpenQuote = (modelCode = '') => {
    setQuoteDefaultModel(typeof modelCode === 'string' ? modelCode : '');
    setQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-700 selection:text-white overflow-x-hidden">
        {/* Navigation Header */}
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        {/* Multi-Page Routes with Safe Mobile Bottom Padding */}
        <main className="flex-1 bg-white pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/machines" element={<MachinesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/machine/:modelCode" element={<ProductDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/turnkey" element={<TurnkeyPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/plant-layout" element={<PlantLayoutPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/calculator" element={<CalculatorPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/roi" element={<RoiPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/compliance" element={<CompliancePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/factory" element={<FactoryPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/guides" element={<BuyerGuidesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Request Official Quotation & CAD Layout Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultModel={quoteDefaultModel}
        />

        {/* Desktop Floating WhatsApp Button */}
        <aside aria-label="Desktop Quick WhatsApp" className="hidden lg:flex fixed bottom-6 right-6 z-40 items-end">
          <a
            href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20am%20interested%20in%20PET%20Blow%20Moulding%20Machines%20and%20Turnkey%20Bottling%20Plants.%20Please%20share%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-full shadow-lg transition-all hover:scale-105"
            title="Chat on WhatsApp (+91 8850848971)"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="font-sans">WhatsApp Live Support</span>
          </a>
        </aside>

        {/* Dedicated Mobile Sticky Action Bar for Phones */}
        <MobileBottomNav onOpenQuote={handleOpenQuote} />
      </div>
    </BrowserRouter>
  );
}
