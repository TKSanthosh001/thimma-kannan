import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, FileCheck, Layers, Truck } from 'lucide-react';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const icons = [
    <ShoppingBag className="w-8 h-8 text-saffron" />,
    <FileCheck className="w-8 h-8 text-maroon dark:text-gold" />,
    <Layers className="w-8 h-8 text-saffron" />,
    <Truck className="w-8 h-8 text-maroon dark:text-gold" />
  ];

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
            {t.whyChoose.title}
          </h2>
        </div>

        {/* 4 Spacious Benefit Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyChoose.reasons.map((reason, idx) => (
            <div key={idx} className="card p-8 text-center space-y-4 border border-color hover:border-saffron shadow-sm transition-all">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 mx-auto flex items-center justify-center border border-saffron/20">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary">
                {reason.title}
              </h3>
              <p className="text-xs md:text-sm text-secondary leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
