import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VEDANTA_FAQS } from '../data/faqs';

export default function FaqSection({ onOpenQuote, limit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const displayFaqs = limit ? VEDANTA_FAQS.slice(0, limit) : VEDANTA_FAQS;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            Engineering & Project FAQ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-600 font-normal">
            Essential technical, CapEx, regulatory, and operational answers for PET blow moulding machinery buyers and plant investors.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-blue-700 bg-slate-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex-1 pr-1 sm:pr-2">
                    <span className="inline-block text-[10px] sm:text-xs font-medium text-blue-700 uppercase tracking-wider mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-lg font-semibold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? 'border-blue-700 bg-blue-700 text-white rotate-180'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">Have a specific production requirement?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Speak with a Vedanta senior packaging engineer for custom mold design or turn-key line sizing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            {onOpenQuote && (
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Request Plant Proposal
              </button>
            )}
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              Contact Engineering <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
