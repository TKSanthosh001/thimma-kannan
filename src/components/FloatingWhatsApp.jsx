import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-white/20"
        title="WhatsApp-ல் உங்கள் பட்டியலை அனுப்புங்கள்"
      >
        <MessageSquare className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">
          {lang === 'ta' ? 'WhatsApp-ல் பட்டியல் அனுப்ப' : 'Send List'}
        </span>
      </a>
    </div>
  );
};
