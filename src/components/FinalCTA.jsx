import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, Flame } from 'lucide-react';

export const FinalCTA = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-r from-maroon via-red-950 to-maroon text-amber-50 transition-colors border-b border-color overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-gold to-amber-500 absolute top-0 inset-x-0" />
      <div className="h-1 bg-gradient-to-r from-amber-500 via-gold to-amber-500 absolute bottom-0 inset-x-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
        
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-gold/60 mx-auto flex items-center justify-center shadow-xl">
          <Flame className="w-8 h-8 text-amber-300 animate-pulse" />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-amber-200 leading-tight">
            {t.finalCta.title}
          </h2>

          <p className="text-lg md:text-2xl text-amber-100/90 max-w-3xl mx-auto leading-relaxed">
            {t.finalCta.desc}
          </p>
        </div>

        {/* Hero-level Dominant CTA */}
        <div className="pt-4">
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-lg md:text-xl py-4.5 px-10 rounded-full shadow-2xl inline-flex items-center gap-3.5 font-extrabold hover:scale-105 transition-transform border border-emerald-400/40"
          >
            <MessageSquare className="w-7 h-7" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
