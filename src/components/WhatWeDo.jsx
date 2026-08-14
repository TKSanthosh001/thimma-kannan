import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export const WhatWeDo = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="what-we-do" className="py-16 md:py-20 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Image (1 Image) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-saffron/40 group">
              <img
                src={getImageUrl('/images/gruhapravesam_pooja.jpg')}
                alt="Traditional Pooja Material Arrangements"
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-amber-200 text-xs font-extrabold uppercase tracking-wider">
                  {lang === 'ta' ? 'திம்மா கண்ணன் சடங்கு ஏற்பாடு' : 'Thimma Kannan Sourcing'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
              {lang === 'ta' ? 'எங்கள் சேவை நோக்கம்' : 'Our Purpose'}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
              {lang === 'ta' ? 'பல கடைகளில் தேடி வாங்க வேண்டிய சிரமம் வேண்டாம்.' : 'No More Wandering Across Multiple Shops for Your List.'}
            </h2>

            <p className="text-base md:text-lg text-secondary leading-relaxed font-medium">
              {lang === 'ta'
                ? 'Iyer / Priest கொடுத்த பொருட்கள் பட்டியலை எங்களுக்கு WhatsApp-ல் அனுப்புங்கள். பட்டியலில் உள்ள தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து, முறையாக தொகுத்து வழங்குகிறோம்.'
                : 'Send us the material list given by your Iyer or priest on WhatsApp. We arrange all required items strictly per your list, pack them neatly together, and deliver them to you.'}
            </p>

            <div className="space-y-3 pt-2 border-t border-color">
              <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-primary">
                <CheckCircle2 className="w-5 h-5 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'நீண்ட பொருட்கள் பட்டியலுடன் பல கடைகளில் அலைவது மிச்சம்' : 'Avoid visiting dozens of shops with a long handwritten list'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-primary">
                <CheckCircle2 className="w-5 h-5 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'உங்கள் Iyer பட்டியலின்படி சரியான அளவில் ஏற்பாடு' : 'Arranged accurately according to your priest list'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-primary">
                <CheckCircle2 className="w-5 h-5 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? 'ஒரே தொகுப்பாக Delivery அல்லது கடையில் பெற்றுக்கொள்ளலாம்' : 'Neatly packed and available for delivery or store pickup'}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm md:text-base py-3.5 px-7 font-extrabold shadow-md inline-flex items-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.buttons.sendListWhatsApp}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
