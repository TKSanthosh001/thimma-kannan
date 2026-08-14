import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { X, MessageSquare, CheckCircle, Info, FileText } from 'lucide-react';

export const ServiceModal = ({ service, onClose }) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  const title = service.title[lang];
  const fullDesc = service.fullDesc[lang];
  const includes = service.includes[lang];
  const isFuneral = service.id === 'funeral-rituals';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Window */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-2 border-saffron/40 rounded-2xl p-6 md:p-8 shadow-2xl z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-color hover:bg-secondary text-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Image */}
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src={service.image}
              alt={title}
              className={`w-full h-56 sm:h-72 object-cover ${isFuneral ? 'grayscale-[30%]' : ''}`}
            />
            {service.badge && (
              <span className="absolute top-3 left-3 bg-maroon text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                {service.badge[lang]}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-maroon dark:text-gold">
            {title}
          </h2>

          <p className="text-sm text-secondary leading-relaxed bg-tertiary p-4 rounded-lg border border-color">
            {fullDesc}
          </p>
        </div>

        {/* Checklist of Includes */}
        <div className="space-y-3">
          <h3 className="text-base font-bold font-heading text-primary border-b border-color pb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-saffron" />
            <span>{lang === 'ta' ? 'பட்டியலின்படி திரட்டப்படும் முக்கிய பொருட்கள்:' : 'Key Materials Arranged Per List:'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {includes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-secondary">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Priest List Guidance Box */}
        <div className="bg-amber-500/10 p-4 rounded-xl border border-saffron/30 space-y-1.5">
          <div className="flex items-center gap-2 text-saffron font-bold text-sm">
            <Info className="w-4 h-4" />
            <span>{lang === 'ta' ? 'உங்கள் பூஜை பொருட்கள் பட்டியல் தயாரா?' : 'Have Your Priest List Ready?'}</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            {lang === 'ta'
              ? 'Iyer / Priest கொடுத்த பட்டியலை WhatsApp-ல் அனுப்புங்கள். தேவையான பொருட்கள் அனைத்தையும் ஒரே தொகுப்பாக ஏற்பாடு செய்து தருகிறோம்.'
              : 'Simply send us the pooja or ceremony material list given by your Iyer or priest. We arrange all the required items.'}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppUrl(service.whatsappMessage[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-sm py-3 font-bold w-full text-center shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
