import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const FinalCTA = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-950 via-maroon-dark to-amber-950 text-amber-50 text-center relative overflow-hidden border-b border-color">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-amber-200 leading-tight">
          {lang === 'ta'
            ? 'பட்டியல் உங்களிடம். மீதியை எங்களிடம் விட்டுவிடுங்கள்.'
            : 'Keep Your List With You. Leave the Rest to Us.'}
        </h2>

        <p className="text-base sm:text-xl text-amber-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
          {lang === 'ta'
            ? 'சுப நிகழ்ச்சிகளாக இருந்தாலும், பாரம்பரிய சடங்கு அல்லது இறுதி சடங்குகளுக்கான தேவைகளாக இருந்தாலும், உங்கள் Iyer / Priest கொடுத்த பட்டியலை எங்களுக்கு அனுப்புங்கள்.'
            : 'Whether for auspicious functions or traditional family rituals and final rites, send us the material list given by your priest. We will arrange all required items.'}
        </p>

        <div className="pt-4">
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg rounded-full shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3 border border-white/20"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
