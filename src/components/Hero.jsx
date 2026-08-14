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
    <section id="home" className="relative py-12 md:py-16 bg-gradient-to-b from-amber-500/5 via-main to-main border-b border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-saffron/30 text-saffron text-xs md:text-sm font-bold uppercase tracking-wider">
              <span>{lang === 'ta' ? 'பாரம்பரிய சடங்கு & பூஜை பொருட்கள் ஏற்பாடு' : 'Ceremony Material Sourcing'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-primary leading-tight tracking-tight">
              <span className="text-maroon dark:text-gold block mb-1">{businessConfig.businessName[lang]}</span>
              <span className="text-primary font-bold block">
                {lang === 'ta' ? 'உங்கள் பட்டியலை அனுப்புங்கள். தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்கிறோம்.' : 'Send Us Your List. We\'ll Arrange What You Need.'}
              </span>
            </h1>

            <p className="text-base md:text-lg text-secondary font-medium leading-relaxed max-w-2xl">
              {lang === 'ta'
                ? 'Iyer / Priest கொடுத்த பொருட்கள் பட்டியலை WhatsApp-ல் அனுப்புங்கள். பட்டியலில் உள்ள தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து, முறையாக தொகுத்து வழங்குகிறோம்.'
                : 'Send us the material list provided by your Iyer or priest. We arrange the required items according to your list, pack them together and make them ready for delivery or collection.'}
            </p>

            {/* Single Primary CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm md:text-base py-3 px-6 shadow-md hover:scale-102 transition-transform font-extrabold"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.buttons.sendListWhatsApp}</span>
              </a>

              <a
                href="#services"
                onClick={scrollToServices}
                className="text-xs md:text-sm font-bold text-saffron hover:underline inline-flex items-center gap-1 py-2 px-2"
              >
                <span>{lang === 'ta' ? 'எங்கள் சேவைகளைப் பார்க்க' : 'Explore Services'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Quick Benefit Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-color max-w-xl">
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'Priest பட்டியல் அனுப்பலாம்' : 'Send Priest List'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'நாங்கள் ஏற்பாடு செய்கிறோம்' : 'We Source Items'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-secondary">
                <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'Delivery / Pickup' : 'Delivery & Pickup'}</span>
              </div>
            </div>

          </div>

          {/* Right Devotional Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-saffron/30 group">
              <img
                src={getImageUrl('/images/hero_pooja_banner.jpg')}
                alt="Thimma Kannan Traditional Pooja Material Arrangements"
                fetchpriority="high"
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
