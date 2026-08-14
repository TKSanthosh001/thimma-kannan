import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-main transition-colors">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-2 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-saffron" />
            <span>{t.faq.title}</span>
          </h2>
          <p className="text-xs md:text-sm text-secondary">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="card p-4 transition-all cursor-pointer border border-color hover:border-saffron"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold font-heading text-primary">
                    {item.q}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-saffron transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-color text-sm text-secondary leading-relaxed animate-fadeIn">
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
