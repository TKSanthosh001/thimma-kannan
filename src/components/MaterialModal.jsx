import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { X, MessageSquare, CheckCircle2, Tag, Info } from 'lucide-react';

export const MaterialModal = ({ material, onClose }) => {
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

  if (!material) return null;

  const name = material.name[lang];
  const desc = material.desc[lang];
  const priceText = material.price ? `₹${material.price}` : t.buttons.contactUsPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Window */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border-2 border-saffron/40 rounded-2xl p-6 md:p-8 shadow-2xl z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-color hover:bg-secondary text-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {lang === 'ta' ? 'இருப்பில் உள்ளது' : 'In Stock'}
            </span>
            <span className="text-xs font-bold text-saffron flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {priceText}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold font-heading text-maroon dark:text-gold">
            {name}
          </h2>

          <p className="text-sm text-secondary leading-relaxed bg-tertiary p-4 rounded-lg border border-color">
            {desc}
          </p>
        </div>

        {/* List Note */}
        <div className="bg-amber-500/10 p-4 rounded-xl border border-saffron/30 space-y-1">
          <div className="flex items-center gap-2 text-saffron font-bold text-xs">
            <Info className="w-4 h-4" />
            <span>{lang === 'ta' ? 'பொருட்கள் பட்டியல் தகவல்' : 'List Item Sourcing'}</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            {lang === 'ta'
              ? 'இந்த பொருள் உங்கள் Iyer அளித்த பட்டியலில் உள்ளதா? WhatsApp மூலம் கோரிக்கை அனுப்பி உங்கள் பேக்கேஜில் சேர்த்துக்கொள்ளலாம்.'
              : 'Is this item present on your priest list? Ask us on WhatsApp to include it in your custom package.'}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={getWhatsAppUrl(material.whatsappMessage[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-sm py-3.5 font-bold w-full text-center shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.buttons.enquireWhatsApp}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
