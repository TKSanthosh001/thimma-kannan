import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { X, MessageSquare, Check, Sparkles, Info, FileText } from 'lucide-react';

export const PackageModal = ({ pkg, onClose }) => {
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

  if (!pkg) return null;

  const title = pkg.title[lang];
  const desc = pkg.desc[lang];
  const items = pkg.itemsList[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Window */}
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-card border-2 border-saffron/40 rounded-2xl p-6 md:p-8 shadow-2xl z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-color hover:bg-secondary text-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-saffron">
            <Sparkles className="w-3.5 h-3.5" />
            {pkg.itemCount}
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-maroon dark:text-gold">
            {title}
          </h2>

          <p className="text-sm text-secondary leading-relaxed bg-tertiary p-4 rounded-lg border border-color">
            {desc}
          </p>
        </div>

        {/* Itemized Breakdown List */}
        <div className="space-y-3">
          <h3 className="text-base font-bold font-heading text-primary border-b border-color pb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-saffron" />
            <span>{lang === 'ta' ? 'தொகுப்பில் அடங்கியுள்ள பொருட்கள் விபரம்:' : 'Complete Package Item Breakdown:'}</span>
          </h3>

          <div className="space-y-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-secondary bg-card p-2.5 rounded border border-color">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Priest List Customization Note */}
        <div className="bg-amber-500/10 p-4 rounded-xl border border-saffron/30 space-y-1">
          <div className="flex items-center gap-2 text-saffron font-bold text-xs">
            <Info className="w-4 h-4" />
            <span>{lang === 'ta' ? 'பிரத்யேக ஐயர் பட்டியல் மாற்றம்' : 'Priest List Customization'}</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            {lang === 'ta'
              ? 'உங்கள் ஐயர் கொடுத்த பட்டியலின்படி இந்த பேக்கேஜில் பொருட்கள் சேர்க்க அல்லது மாற்றியமைக்கலாம். விவரங்களுக்கு WhatsApp-ல் அனுப்பவும்.'
              : 'Items in this package can be adjusted per your specific priest list. Simply notify us on WhatsApp.'}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={getWhatsAppUrl(pkg.whatsappMessage[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-sm py-3.5 font-bold w-full text-center shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
