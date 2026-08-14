import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = t.faq.items.slice(0, 4);

  return (
    <section id="faq" className="py-16 md:py-20 bg-main transition-colors border-b border-color">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-saffron" />
            <span>{t.faq.title}</span>
          </h2>
          <p className="text-xs md:text-sm text-secondary">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl border border-color overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-primary hover:text-maroon dark:hover:text-gold"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-saffron transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-secondary leading-relaxed border-t border-color/50 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
