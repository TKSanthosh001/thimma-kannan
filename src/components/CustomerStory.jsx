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
    <section id="about" className="py-16 md:py-24 bg-amber-50/40 dark:bg-slate-900/40 transition-colors border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Story Layout: 1 Strong Image + Text + 3 Small Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Strong Devotional Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-200/80 dark:border-amber-500/20 bg-white p-2">
              <img
                src={getImageUrl('/images/gruhapravesam_pooja.jpg')}
                alt="Gruhapravesam Kalasam Pooja Setup"
                className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right: Text & 3 Small Supporting Points */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
              {lang === 'ta' ? 'எளிமையான தீர்வு' : 'Simple Solution'}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
              {lang === 'ta'
                ? 'பல கடைகளில் தேடி வாங்க வேண்டிய சிரமம் வேண்டாம்.'
                : 'No need to search across multiple shops.'}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {lang === 'ta'
                ? 'Iyer / Priest கொடுத்த பொருட்கள் பட்டியலை WhatsApp-ல் அனுப்புங்கள். தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து தருகிறோம்.'
                : 'Simply send the material list given by your Iyer / Priest on WhatsApp. We source all required items and pack everything together.'}
            </p>

            {/* 3 Very Small Supporting Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {lang === 'ta' ? 'ஐயர் கொடுத்த பட்டியலை அப்படியே அனுப்புங்கள்' : 'Send your exact priest list as provided'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {lang === 'ta' ? 'ஒவ்வொரு பொருளும் தனித்தனியாக பெயர் சீட்டுடன் பேக் செய்யப்படும்' : 'Every item is itemized and clearly labeled'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {lang === 'ta' ? 'மதுரையில் கடை கடையாக அலைய வேண்டிய டென்ஷன் இல்லை' : 'No running around multiple shops in Madurai'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'ta' ? 'WhatsApp-ல் பட்டியலை அனுப்புங்கள்' : 'Send List on WhatsApp'}</span>
              </a>
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
