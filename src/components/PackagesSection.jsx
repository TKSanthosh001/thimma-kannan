import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { packagesData } from '../config/packages';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, ArrowRight, Check, Sparkles } from 'lucide-react';

export const PackagesSection = ({ onSelectPackage }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="packages" className="py-20 md:py-28 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'சிறப்பு தொகுப்புகள்' : 'Prepared Bundles'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {lang === 'ta' ? 'பிரபலமான நிகழ்ச்சி தொகுப்புகள்' : 'Popular Ceremony Packages'}
          </h2>
          <p className="text-base text-secondary">
            {lang === 'ta'
              ? 'உங்கள் வசதிக்காக முன்னரே தொகுக்கப்பட்ட பிரபலமான நிகழ்ச்சி பொருட்கள் பேக்கேஜ்கள்.'
              : 'Curated material bundles arranged for popular Hindu ceremonies for your convenience.'}
          </p>
        </div>

        {/* 3 Spacious Featured Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packagesData.map((pkg) => {
            const title = pkg.title[lang];
            const desc = pkg.desc[lang];
            const items = pkg.itemsList[lang];
            const imgPath = getImageUrl(pkg.image);

            return (
              <div key={pkg.id} className="bg-card rounded-3xl overflow-hidden flex flex-col justify-between border-2 border-color hover:border-saffron group shadow-md transition-all">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imgPath}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 right-3 bg-amber-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md inline-flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.itemCount}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold font-heading text-maroon dark:text-gold">
                      {title}
                    </h3>
                    <p className="text-xs md:text-sm text-secondary leading-relaxed">
                      {desc}
                    </p>

                    <div className="bg-tertiary p-4 rounded-2xl space-y-2 border border-color">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2">
                        {lang === 'ta' ? 'முக்கிய பொருட்கள்:' : 'Key Included Items:'}
                      </p>
                      {items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-secondary truncate">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="btn btn-outline text-xs py-3 w-full text-center"
                  >
                    <span>{t.buttons.viewDetails}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppUrl(pkg.whatsappMessage[lang])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp text-xs py-3 w-full text-center font-bold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.buttons.enquireWhatsApp}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
