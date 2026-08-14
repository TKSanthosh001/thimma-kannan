import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const { lang, t } = useLanguage();
  const waUrl = getWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl flex items-center gap-2.5 hover:scale-110 transition-transform whatsapp-pulse group"
      aria-label="WhatsApp Contact"
      title="WhatsApp Enquiry / தொடர்புகொள்ள"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline font-bold text-xs pr-1">
        {t.buttons.enquireWhatsApp}
      </span>
    </a>
  );
};
