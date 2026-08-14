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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading leading-[1.2] tracking-tight">
              <span className="text-maroon block mb-2">{businessConfig.businessName[lang]}</span>
              <span className="text-primary font-bold block">
                {lang === 'ta'
                  ? 'உங்கள் பட்டியலை அனுப்புங்கள். தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து தருகிறோம்.'
                  : 'Send your list. We arrange all required materials.'}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl text-secondary font-medium leading-relaxed max-w-2xl">
              {lang === 'ta'
                ? 'Iyer / Priest கொடுத்த பொருட்கள் பட்டியலை WhatsApp-ல் அனுப்புங்கள். பட்டியலில் உள்ள தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து, முறையாக தொகுத்து வழங்குகிறோம்.'
                : 'Send the pooja material list given by your Iyer / Priest on WhatsApp. We source all required items, pack everything neatly, and have it ready for delivery or pickup.'}
            </p>

            {/* Primary Dominant CTA & Secondary Link */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all inline-flex items-center gap-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{lang === 'ta' ? 'WhatsApp-ல் பட்டியலை அனுப்புங்கள்' : 'Send List on WhatsApp'}</span>
                </a>

                <a
                  href="#services"
                  onClick={scrollToServices}
                  className="text-xs md:text-sm font-bold text-saffron hover:underline inline-flex items-center gap-1.5 py-3 px-2"
                >
                  <span>{lang === 'ta' ? 'சேவைகளைப் பார்க்க ↓' : 'View Services ↓'}</span>
                </a>
              </div>

              {/* 3 Concise Benefit Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-color max-w-xl">
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'ta' ? 'Iyer பட்டியல் அனுப்புங்கள்' : 'Send Priest List'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'ta' ? 'நாங்கள் ஏற்பாடு செய்கிறோம்' : 'We Source All Items'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'ta' ? 'Delivery / Collection' : 'Delivery & Pickup'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Single Strong Devotional Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-200/80 dark:border-amber-500/20 bg-white p-2">
              <img
                src={getImageUrl('/images/hero_pooja_banner.jpg')}
                alt="Thimma Kannan Traditional Pooja Setup"
                fetchpriority="high"
                className="w-full h-[340px] sm:h-[440px] object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
