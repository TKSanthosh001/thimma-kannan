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

        {/* 2x2 Large Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service) => {
            const title = service.title[lang];
            const shortDesc = service.shortDesc[lang];
            const badge = service.badge[lang];
            const isFuneral = service.id === 'funeral-rituals';
            const imgPath = getImageUrl(service.image);

            return (
              <div
                key={service.id}
                className="bg-card flex flex-col justify-between rounded-3xl overflow-hidden border-2 border-color hover:border-saffron group shadow-md transition-all"
              >
                <div>
                  {/* Visually Larger Image */}
                  <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
                    <img
                      src={imgPath}
                      alt={title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                        isFuneral ? 'grayscale-[30%]' : ''
                      }`}
                    />
                    {badge && (
                      <span className="absolute top-4 right-4 bg-maroon text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Concise Narrative */}
                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary group-hover:text-maroon dark:group-hover:text-gold transition-colors">
                      {title}
                    </h3>
                    <p className="text-base md:text-lg text-secondary leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="p-8 pt-0 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="btn btn-outline text-xs md:text-sm py-3 px-5"
                  >
                    <span>{t.buttons.viewDetails}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppUrl(service.whatsappMessage[lang])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp text-xs md:text-sm py-3 px-5 font-bold inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.buttons.sendListWhatsApp}</span>
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
