import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const icons = [
    <Award className="w-6 h-6 text-saffron" />,
    <Clock className="w-6 h-6 text-maroon dark:text-gold" />,
    <ShieldCheck className="w-6 h-6 text-saffron" />,
    <HeartHandshake className="w-6 h-6 text-maroon dark:text-gold" />
  ];

  return (
    <section id="why-choose" className="py-16 bg-tertiary transition-colors border-y border-color">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary">
            {t.whyChoose.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChoose.reasons.map((reason, idx) => (
            <div key={idx} className="card p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 mx-auto flex items-center justify-center">
                {icons[idx]}
              </div>
              <h3 className="text-base font-bold font-heading text-primary">
                {reason.title}
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
