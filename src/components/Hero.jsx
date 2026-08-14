import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, ArrowDown, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const { lang, t } = useLanguage();

  const scrollToServices = (e) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative py-16 md:py-24 lg:py-28 bg-gradient-to-b from-amber-500/5 via-main to-main border-b border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-saffron/30 text-saffron text-xs md:text-sm font-bold uppercase tracking-wider">
              <span>{lang === 'ta' ? 'பாரம்பரிய சடங்கு & பூஜை பொருட்கள் ஏற்பாடு சேவை' : 'Ceremony Material Sourcing Service'}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-primary leading-[1.18] tracking-tight">
              <span className="text-maroon dark:text-gold block mb-2">{businessConfig.businessName[lang]}</span>
              <span className="text-primary font-bold block">
                {t.tagline}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-2xl text-secondary font-semibold leading-relaxed">
              {t.subTagline}
            </p>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
              {t.heroSubtext}
            </p>

            {/* Primary Dominant CTA & Secondary Link */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp text-base md:text-lg py-4 px-8 shadow-xl hover:scale-105 transition-transform font-extrabold"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>{t.buttons.sendListWhatsApp}</span>
                </a>

                <a
                  href="#services"
                  onClick={scrollToServices}
                  className="text-xs md:text-sm font-bold text-saffron hover:underline inline-flex items-center gap-1.5 py-3 px-2"
                >
                  <span>{t.buttons.exploreServices}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>

              {/* 3 Concise Benefit Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-color max-w-xl">
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0" />
                  <span>{lang === 'ta' ? 'Iyer பட்டியல் அனுப்புங்கள்' : 'Send Priest List'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0" />
                  <span>{lang === 'ta' ? 'நாங்கள் ஏற்பாடு செய்கிறோம்' : 'We Source All Items'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0" />
                  <span>{lang === 'ta' ? 'Delivery / Collection' : 'Delivery & Pickup'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Single Strong Devotional Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-saffron/30 group">
              <img
                src={getImageUrl('/images/hero_pooja_banner.jpg')}
                alt="Thimma Kannan Traditional Pooja Setup"
                fetchpriority="high"
                className="w-full h-[360px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {lang === 'ta' ? 'பாரம்பரிய சேவை' : 'Authentic Sourcing'}
                  </p>
                  <p className="text-sm font-medium leading-snug">
                    {lang === 'ta' ? 'உங்கள் ஐயர் கொடுத்த பட்டியலின்படி அனைத்து பொருட்களும் ஏற்பாடு செய்து தரப்படும்' : 'All required items arranged strictly per your priest material list'}
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
