import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, Phone, ChevronRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-saffron text-xs md:text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ta' ? 'பாரம்பரிய பூஜா பொருட்கள் சேவை' : 'Authentic South Indian Ritual Materials'}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-primary leading-tight">
              <span className="text-maroon dark:text-gold block mb-2">{businessConfig.businessName[lang]}</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-saffron font-medium block">
                {t.tagline}
              </span>
            </h1>

            <p className="text-base md:text-lg text-secondary max-w-2xl leading-relaxed">
              {t.heroSubtext}
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm py-3 px-5 shadow-lg hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.buttons.enquireWhatsApp}</span>
              </a>

              <Link
                to="/services"
                className="btn btn-primary text-sm py-3 px-5"
              >
                <span>{t.buttons.exploreServices}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${businessConfig.phone}`}
                className="btn btn-outline text-sm py-3 px-4"
              >
                <Phone className="w-4 h-4" />
                <span>{t.buttons.callNow}</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-color">
              <div>
                <h3 className="text-lg font-bold text-maroon dark:text-gold font-heading">100% Pure</h3>
                <p className="text-xs text-muted">{lang === 'ta' ? 'தூய்மையான பொருட்கள்' : 'Authentic Ingredients'}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-maroon dark:text-gold font-heading">Priest List</h3>
                <p className="text-xs text-muted">{lang === 'ta' ? 'ஐயர் பட்டியல் படி பேக்கிங்' : 'Packed Per Priest List'}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-maroon dark:text-gold font-heading">WhatsApp</h3>
                <p className="text-xs text-muted">{lang === 'ta' ? 'உடனடி விசாரணை' : 'Instant Order Support'}</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-500/20 group">
              <img
                src="/images/hero_pooja_banner.jpg"
                alt="Thimma Kannan Traditional Pooja Setup"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {lang === 'ta' ? 'தெய்வீக பாரம்பரியம்' : 'Devotional Visual'}
                  </p>
                  <p className="text-sm font-medium">
                    {lang === 'ta' ? 'அனைத்து சடங்குகளுக்கான பூரண பூஜா தொகுப்புகள்' : 'Complete Material Packages for Every Hindu Ceremony'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
