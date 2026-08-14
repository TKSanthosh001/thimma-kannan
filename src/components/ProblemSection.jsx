import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, FileText } from 'lucide-react';

export const ProblemSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Visual Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-saffron/30 group">
              <img
                src="/images/gruhapravesam_pooja.jpg"
                alt="Gruhapravesam Kalasam Pooja Material Setup"
                className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {lang === 'ta' ? 'ஒரே இடத்தில் தீர்வு' : 'One Stop Sourcing'}
                  </p>
                  <p className="text-sm font-medium">
                    {lang === 'ta' ? 'உங்கள் ஐயர் கொடுத்த பட்டியலின்படி அனைத்து பொருட்களும் ஒரே தொகுப்பாக ஏற்பாடு செய்யப்படும்' : 'All materials from your priest list arranged into a single prepared kit'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Problem & Solution Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
                {t.about.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
                {t.valueProp.title}
              </h2>
            </div>

            <p className="text-base md:text-lg text-secondary leading-relaxed bg-card p-6 rounded-2xl border border-color shadow-sm">
              {t.valueProp.desc}
            </p>

            {/* Highlighted Solution Box */}
            <div className="bg-card border-2 border-saffron p-6 md:p-8 rounded-2xl space-y-4 shadow-lg">
              <div className="flex items-center gap-3 text-maroon dark:text-gold font-extrabold font-heading text-xl md:text-2xl">
                <FileText className="w-6 h-6 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'பட்டியலை எங்களுக்கு அனுப்புங்கள்.' : 'Send Your List to Us.'}</span>
              </div>
              <p className="text-sm md:text-base text-secondary leading-relaxed">
                {lang === 'ta'
                  ? 'அதில் உள்ள தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து தருகிறோம். பல கடைகளுக்கு அலைந்து நேரம் வீணடிக்க வேண்டாம்.'
                  : 'We arrange all required items present on your priest list. Avoid wasting time visiting multiple markets.'}
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp text-sm py-3.5 px-6 font-bold shadow-md inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.buttons.sendListWhatsApp}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
