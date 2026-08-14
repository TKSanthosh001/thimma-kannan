import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Clock, PackageCheck } from 'lucide-react';

export const WhyChooseUs = () => {
  const { lang } = useLanguage();

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-saffron" />,
      title: lang === 'ta' ? 'பல கடைகளில் தேட வேண்டாம்' : 'No Multiple Shop Visits',
      desc: lang === 'ta'
        ? 'நீண்ட பட்டியலுடன் பல கடைகளில் அலைய வேண்டிய அவசியம் இல்லை.'
        : 'Save time without wandering across multiple stores.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-maroon dark:text-gold" />,
      title: lang === 'ta' ? 'உங்கள் பட்டியலின்படி ஏற்பாடு' : 'Sourced Per Your List',
      desc: lang === 'ta'
        ? 'உங்கள் Iyer / Priest கொடுத்த பட்டியலின்படி பொருட்களை ஏற்பாடு செய்கிறோம்.'
        : 'All items arranged strictly according to your priest material list.'
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-saffron" />,
      title: lang === 'ta' ? 'முறையாக தொகுத்து வழங்குகிறோம்' : 'Neatly Packed & Delivered',
      desc: lang === 'ta'
        ? 'அனைத்து பொருட்களும் முறையாக தொகுக்கப்பட்டு Delivery / Collection-க்கு தயாராகும்.'
        : 'Neatly packed and delivered or prepared for shop collection.'
    }
  ];

  return (
    <section id="why-choose" className="py-16 md:py-20 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'சிறப்பம்சங்கள்' : 'Why Choose Us'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {lang === 'ta' ? 'ஏன் திருமா கண்ணன்?' : 'Why Choose Thimma Kannan?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-card p-6 rounded-2xl border border-color shadow-sm space-y-3 hover:border-saffron transition-all">
              <div className="w-12 h-12 rounded-xl bg-tertiary flex items-center justify-center border border-color">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold font-heading text-primary">
                {b.title}
              </h3>
              <p className="text-xs md:text-sm text-secondary leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
