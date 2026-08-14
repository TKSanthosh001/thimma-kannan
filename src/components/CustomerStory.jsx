import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, ArrowRight, FileText, Send, CheckCircle2, Package, Truck } from 'lucide-react';

export const CustomerStory = () => {
  const { lang, t } = useLanguage();

  const flowIcons = [
    <FileText className="w-6 h-6 text-saffron" />,
    <Send className="w-6 h-6 text-maroon dark:text-gold" />,
    <CheckCircle2 className="w-6 h-6 text-saffron" />,
    <Package className="w-6 h-6 text-maroon dark:text-gold" />,
    <Truck className="w-6 h-6 text-saffron" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Editorial Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron block">
              {t.about.subtitle}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
              {t.story.problemTitle}
            </h2>

            <p className="text-lg md:text-xl text-primary font-bold leading-relaxed bg-card p-6 rounded-2xl border-l-4 border-saffron shadow-sm">
              {t.story.problemSubtitle}
            </p>

            <p className="text-base text-secondary leading-relaxed">
              {t.about.p2}
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-saffron/30 group">
              <img
                src={getImageUrl('/images/gruhapravesam_pooja.jpg')}
                alt="Gruhapravesam Kalasam Pooja Setup"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-xs font-semibold">
                  {lang === 'ta' ? 'பாரம்பரிய பூஜா கலசம் & மங்கள பொருட்கள் ஏற்பாடு' : 'Traditional Kalasam & Ceremony Material Arrangements'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Story Journey Flow: LIST -> SEND -> WE ARRANGE -> PACK -> DELIVER */}
        <div className="bg-card border-2 border-saffron/30 rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-maroon dark:text-gold">
              {lang === 'ta' ? 'எளிமையான 5 படிகள்' : 'Simple 5-Step Customer Journey'}
            </h3>
            <p className="text-sm text-secondary">
              {lang === 'ta' ? 'பட்டியலிலிருந்து உங்கள் பூஜை அறை வரை' : 'From your priest list to your ceremony room'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {t.story.flowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col justify-between p-5 rounded-2xl bg-tertiary border border-color relative group hover:border-saffron transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center border border-color shadow-sm group-hover:scale-110 transition-transform">
                      {flowIcons[idx]}
                    </div>
                    <span className="text-2xl font-extrabold font-heading text-saffron/30">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold font-heading text-primary pt-1">
                    {step.label}
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-saffron/50">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Callout inside Story */}
          <div className="text-center pt-4">
            <a
              href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm md:text-base py-3.5 px-8 font-bold shadow-lg inline-flex items-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.buttons.sendListWhatsApp}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
