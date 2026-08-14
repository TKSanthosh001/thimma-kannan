import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, Flame } from 'lucide-react';

export const FinalCTA = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-r from-maroon via-red-950 to-maroon text-amber-50 transition-colors border-b border-color overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-amber-500 via-gold to-amber-500 absolute top-0 inset-x-0" />
      <div className="h-1 bg-gradient-to-r from-amber-500 via-gold to-amber-500 absolute bottom-0 inset-x-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        
        <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-gold/60 mx-auto flex items-center justify-center shadow-xl">
          <Flame className="w-7 h-7 text-amber-300 animate-pulse" />
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-amber-200 leading-tight">
            {lang === 'ta' ? 'உங்கள் பூஜை பொருட்கள் பட்டியல் தயாரா?' : 'Ready to Send Your Material List?'}
          </h2>

          <p className="text-base md:text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'ta'
              ? 'Iyer / Priest கொடுத்த பட்டியலை WhatsApp-ல் அனுப்புங்கள். தேவையான பொருட்களை ஏற்பாடு செய்வதை எங்களிடம் விட்டுவிடுங்கள்.'
              : 'Send the list given by your Iyer or priest on WhatsApp. Leave the material sourcing and arrangement to us.'}
          </p>
        </div>

        <div className="pt-2">
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-base md:text-lg py-4 px-9 rounded-full shadow-2xl inline-flex items-center gap-3 font-extrabold hover:scale-105 transition-transform border border-emerald-400/40"
          >
            <MessageSquare className="w-6 h-6" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
