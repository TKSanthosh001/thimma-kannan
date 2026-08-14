import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServiceCard = ({ service }) => {
  const { lang, t } = useLanguage();
  const title = service.title[lang];
  const shortDesc = service.shortDesc[lang];
  const badge = service.badge[lang];
  const isFuneral = service.id === 'funeral-rituals';

  return (
    <div className={`card flex flex-col justify-between overflow-hidden group ${
      isFuneral ? 'border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/30' : ''
    }`}>
      <div>
        {/* Card Header & Badge */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={service.image}
            alt={title}
            className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ${
              isFuneral ? 'grayscale-[40%]' : ''
            }`}
          />
          {badge && (
            <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow-md ${
              isFuneral 
                ? 'bg-neutral-800 text-neutral-100' 
                : 'bg-gradient-to-r from-amber-600 to-red-700 text-white'
            }`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title & Desc */}
        <h3 className="text-xl font-bold font-heading text-primary mb-2 group-hover:text-saffron transition-colors">
          {title}
        </h3>
        <p className="text-sm text-secondary mb-4 leading-relaxed line-clamp-3">
          {shortDesc}
        </p>

        {/* Key Included Bullet Highlights */}
        {service.includes && service.includes[lang] && (
          <div className="mb-6 space-y-1.5 border-t border-color pt-3">
            {service.includes[lang].slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${isFuneral ? 'text-neutral-500' : 'text-saffron'}`} />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-color">
        <Link
          to={`/services/${service.slug}`}
          className="btn btn-outline text-xs py-2.5 px-3 flex-1 text-center"
        >
          <span>{t.buttons.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={getWhatsAppUrl(service.whatsappMessage[lang])}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp text-xs py-2.5 px-3 flex-1 text-center"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
