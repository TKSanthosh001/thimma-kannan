import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, Flame } from 'lucide-react';

export const FinalCTA = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-amber-500/10 via-main to-amber-500/5 transition-colors border-b border-color text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        
        <div className="w-14 h-14 rounded-full bg-maroon text-gold mx-auto flex items-center justify-center shadow-lg">
          <Flame className="w-7 h-7 text-amber-300 animate-pulse" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
          {lang === 'ta' ? 'பட்டியல் உங்களிடம் இருக்கிறதா?' : 'Have the List Ready?'}
        </h2>

        <p className="text-base md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
          {lang === 'ta'
            ? 'அதை WhatsApp-ல் அனுப்புங்கள். தேவையான பொருட்கள் ஏற்பாடு செய்வதை எங்களிடம் விட்டுவிடுங்கள்.'
            : 'Send it to us on WhatsApp. We\'ll take complete care of the material arrangements.'}
        </p>

        <div className="pt-4">
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-lg md:text-xl py-4 px-10 rounded-full shadow-2xl inline-flex items-center gap-3 font-extrabold hover:scale-105 transition-transform"
          >
            <MessageSquare className="w-6 h-6" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
