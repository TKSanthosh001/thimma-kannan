import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { packagesData } from '../config/packages';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, Check, Sparkles } from 'lucide-react';

export const PackagesSection = ({ onSelectPackage }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="packages" className="py-16 bg-secondary transition-colors">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'சிறப்பு தொகுப்புகள்' : 'Ceremony Bundles'}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {lang === 'ta' ? 'பிரபலமான நிகழ்ச்சி பேக்கேஜ்கள்' : 'Popular Ceremony Material Packages'}
          </h2>
          <p className="text-sm text-secondary">
            {lang === 'ta'
              ? 'உங்கள் வசதிக்காக முன்னரே தொகுக்கப்பட்ட பிரபலமான நிகழ்ச்சி பொருட்கள் பேக்கேஜ்கள்.'
              : 'Curated material bundles arranged for popular Hindu ceremonies for your convenience.'}
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.map((pkg) => {
            const title = pkg.title[lang];
            const desc = pkg.desc[lang];
            const items = pkg.itemsList[lang];

            return (
              <div key={pkg.id} className="card flex flex-col justify-between border-2 border-amber-500/20 hover:border-saffron relative">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-saffron">
                      <Sparkles className="w-3 h-3" />
                      {pkg.itemCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-maroon dark:text-gold mb-2">
                    {title}
                  </h3>

                  <p className="text-sm text-secondary mb-4 leading-relaxed line-clamp-3">
                    {desc}
                  </p>

                  {/* Highlights preview */}
                  <div className="bg-tertiary p-3 rounded-lg mb-6 space-y-1.5 border border-color">
                    <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1.5">
                      {lang === 'ta' ? 'முக்கிய பொருட்கள்:' : 'Key Included Items:'}
                    </p>
                    {items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-secondary truncate">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-color">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="btn btn-outline text-xs py-2 w-full text-center"
                  >
                    <span>{t.buttons.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(pkg.whatsappMessage[lang])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp text-xs py-2 w-full text-center font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
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
