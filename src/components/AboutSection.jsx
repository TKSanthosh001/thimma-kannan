import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const featureIcons = [
    <FileText className="w-6 h-6 text-maroon dark:text-gold" />,
    <ShoppingBag className="w-6 h-6 text-saffron" />,
    <ShieldCheck className="w-6 h-6 text-maroon dark:text-gold" />,
    <Truck className="w-6 h-6 text-saffron" />
  ];

  return (
    <section className="py-16 bg-secondary transition-colors">
      <div className="container mx-auto">
        
        {/* Strong Value Proposition Banner */}
        <div className="bg-card border-2 border-saffron/40 rounded-2xl p-8 mb-12 shadow-md text-center max-w-4xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.valueProp.title}
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.valueProp.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-6 space-y-4 text-secondary leading-relaxed text-base">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-primary">
              {t.about.title}
            </h3>
            <p className="bg-card p-5 rounded-xl border border-color shadow-sm">
              {t.about.p1}
            </p>
            <p className="bg-card p-5 rounded-xl border border-color shadow-sm">
              {t.about.p2}
            </p>
          </div>

          {/* Right 4 Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.features.map((feat, idx) => (
              <div key={idx} className="card flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-tertiary flex items-center justify-center">
                    {featureIcons[idx]}
                  </div>
                  <h3 className="text-base font-bold text-primary font-heading">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
