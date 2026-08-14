import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export const AboutSection = () => {
  const { lang, t } = useLanguage();

  const featureIcons = [
    <FileText className="w-6 h-6 text-maroon dark:text-gold" />,
    <ShoppingBag className="w-6 h-6 text-saffron" />,
    <ShieldCheck className="w-6 h-6 text-maroon dark:text-gold" />,
    <Truck className="w-6 h-6 text-saffron" />
  ];

  return (
    <section id="about" className="py-16 bg-secondary transition-colors border-y border-color">
      <div className="container mx-auto">
        
        {/* Value Proposition Headline Banner */}
        <div className="bg-card border-2 border-saffron/40 rounded-2xl p-8 mb-12 shadow-md text-center max-w-4xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.valueProp.title}
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.valueProp.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-amber-500/20 group">
              <img
                src="/images/gruhapravesam_pooja.jpg"
                alt="Gruhapravesam Kalasam Pooja Material Setup"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                <p className="text-white text-xs font-semibold">
                  {lang === 'ta' ? 'பாரம்பரிய பூஜா கலசம் & மங்கள பொருட்கள் ஏற்பாடு' : 'Traditional Kalasam & Ceremony Material Arrangements'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-saffron block mb-1">
                {t.about.subtitle}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary">
                {t.about.title}
              </h2>
            </div>

            <div className="space-y-4 text-secondary leading-relaxed text-base">
              <p className="bg-card p-5 rounded-xl border border-color shadow-sm">
                {t.about.p1}
              </p>
              <p className="bg-card p-5 rounded-xl border border-color shadow-sm">
                {t.about.p2}
              </p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.about.features.map((feat, idx) => (
                <div key={idx} className="card flex items-start gap-3 p-4">
                  <div className="w-10 h-10 rounded-lg bg-tertiary flex items-center justify-center flex-shrink-0">
                    {featureIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary font-heading">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
