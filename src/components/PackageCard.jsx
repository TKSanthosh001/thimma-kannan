import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, Check, Sparkles } from 'lucide-react';

export const PackageCard = ({ pkg }) => {
  const { lang, t } = useLanguage();
  const title = pkg.title[lang];
  const desc = pkg.desc[lang];
  const items = pkg.itemsList[lang];

  return (
    <div className="card flex flex-col justify-between border-2 border-amber-500/20 hover:border-saffron relative">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-saffron">
            <Sparkles className="w-3 h-3" />
            {pkg.itemCount}
          </span>
        </div>

        <h3 className="text-xl font-bold font-heading text-maroon dark:text-gold mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-secondary mb-4 leading-relaxed">
          {desc}
        </p>

        {/* Itemized checklist preview */}
        <div className="bg-tertiary p-3 rounded-lg mb-6 space-y-1.5 border border-color">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            {lang === 'ta' ? 'முக்கிய பொருட்கள்:' : 'Key Included Items:'}
          </p>
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-secondary">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={getWhatsAppUrl(pkg.whatsappMessage[lang])}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp text-sm py-2.5 w-full text-center"
      >
        <MessageSquare className="w-4 h-4" />
        <span>{t.buttons.enquireWhatsApp}</span>
      </a>
    </div>
  );
};
