import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../config/services';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'எங்களின் சேவைகள்' : 'Our Ceremonial Sourcing'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.servicesSection.title}
          </h2>
          <p className="text-base md:text-lg text-secondary">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const title = service.title[lang];
            const shortDesc = service.shortDesc[lang];
            const badge = service.badge[lang];
            const isFuneral = service.id === 'funeral-rituals';
            const imgPath = getImageUrl(service.image);

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 flex flex-col justify-between rounded-2xl overflow-hidden border border-amber-200/80 dark:border-amber-500/20 hover:border-amber-400 group shadow-md hover:shadow-lg transition-all"
              >
                <div>
                  {/* Large Dominant Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={imgPath}
                      alt={title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        isFuneral ? 'grayscale-[20%]' : ''
                      }`}
                    />
                    {badge && (
                      <span className="absolute top-3 right-3 bg-amber-900/90 text-amber-100 font-bold text-[11px] px-3 py-1 rounded-full shadow-xs">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="p-6 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                      {lang === 'ta' ? 'சேவை வகை' : 'Service Category'}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                {/* Subtle Action Link */}
                <div className="p-6 pt-0 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage[lang])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'ta' ? 'பட்டியலை அனுப்ப →' : 'Send List →'}</span>
                  </a>

                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 font-semibold"
                  >
                    {lang === 'ta' ? 'விவரங்கள்' : 'Details'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
