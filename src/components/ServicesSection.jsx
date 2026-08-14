import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../config/services';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-16 bg-main transition-colors">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'எங்களின் சேவைகள்' : 'Our Ceremonial Services'}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.servicesSection.title}
          </h2>
          <p className="text-base text-secondary">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const title = service.title[lang];
            const shortDesc = service.shortDesc[lang];
            const badge = service.badge[lang];
            const isFuneral = service.id === 'funeral-rituals';

            return (
              <div
                key={service.id}
                className={`card flex flex-col justify-between overflow-hidden group ${
                  isFuneral ? 'border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/30' : ''
                }`}
              >
                <div>
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={title}
                      className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ${
                        isFuneral ? 'grayscale-[40%]' : ''
                      }`}
                    />
                    {badge && (
                      <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow-md ${
                        isFuneral
                          ? 'bg-neutral-800 text-neutral-100'
                          : 'bg-gradient-to-r from-amber-600 to-red-700 text-white'
                      }`}>
                        {badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-primary mb-2 group-hover:text-saffron transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-secondary mb-4 leading-relaxed line-clamp-3">
                    {shortDesc}
                  </p>

                  {/* Included Highlights */}
                  {service.includes && service.includes[lang] && (
                    <div className="mb-6 space-y-1.5 border-t border-color pt-3">
                      {service.includes[lang].slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${isFuneral ? 'text-neutral-500' : 'text-saffron'}`} />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-color">
                  <button
                    onClick={() => onSelectService(service)}
                    className="btn btn-outline text-xs py-2.5 px-3 flex-1 text-center"
                  >
                    <span>{t.buttons.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(service.whatsappMessage[lang])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp text-xs py-2.5 px-3 flex-1 text-center font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{lang === 'ta' ? 'பட்டியலை அனுப்ப' : 'Send List'}</span>
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
