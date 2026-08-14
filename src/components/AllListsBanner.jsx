import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, Sparkles } from 'lucide-react';

export const AllListsBanner = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-10 bg-amber-500/10 border-b border-saffron/30">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron/20 text-saffron text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-saffron" />
          <span>{lang === 'ta' ? 'அனைத்து வகையான பட்டியல்களுக்கும்' : 'For All Ceremony Lists'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-maroon dark:text-gold">
          {lang === 'ta'
            ? 'எந்த வகையான பட்டியலாக இருந்தாலும் பரவாயில்லை'
            : 'Whatever Type of Ceremony List You Have'}
        </h2>

        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
          {lang === 'ta'
            ? 'கிரகப்பிரவேசம், பூஜை, ஹோமம், திருமணம் போன்ற சுப நிகழ்ச்சிகளாக இருந்தாலும், பாரம்பரிய குடும்பச் சடங்குகள் அல்லது இறுதி சடங்குகளுக்கான தேவைகளாக இருந்தாலும், உங்கள் Iyer / Priest கொடுத்த பட்டியலை எங்களுக்கு அனுப்புங்கள். தேவையான பொருட்களை அதன்படி ஏற்பாடு செய்து தருகிறோம்.'
            : 'Whether for auspicious functions like Housewarming, Wedding, and Homam, or traditional family ceremonies and final rites, send us the material list given by your priest. We will arrange all required items strictly per your list.'}
        </p>

        <div className="pt-2">
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-sm md:text-base py-3 px-6 shadow-md inline-flex items-center gap-2 font-extrabold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'ta' ? 'WhatsApp-ல் பட்டியலை அனுப்புங்கள்' : 'Send List on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
