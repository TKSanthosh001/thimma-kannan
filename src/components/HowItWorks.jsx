import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, FileText, Send, CheckCircle2, Package } from 'lucide-react';

export const HowItWorks = () => {
  const { lang } = useLanguage();

  const stepsData = [
    {
      num: '01',
      icon: FileText,
      title: { ta: 'பட்டியலைத் தயாராக வைத்திருங்கள்', en: 'Keep your material list ready' },
      desc: { 
        ta: 'Iyer / Priest கொடுத்த பொருட்களை தாளில் அல்லது மொபைலில் தயாராக வைத் திருங்கள்.',
        en: 'Have the pooja or homam material list provided by your priest ready.' 
      }
    },
    {
      num: '02',
      icon: Send,
      title: { ta: 'WhatsApp-ல் அனுப்புங்கள்', en: 'Send it on WhatsApp' },
      desc: { 
        ta: 'பட்டியலை போட்டோ எடுத்து அல்லது டைப் செய்து எங்களின் WhatsApp எண்ணிற்கு அனுப்புங்கள்.',
        en: 'Simply take a photo or type out the items and send it to our WhatsApp number.' 
      }
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: { ta: 'நாங்கள் பொருட்களை ஏற்பாடு செய்கிறோம்', en: 'We arrange the materials' },
      desc: { 
        ta: 'தேவையான பொருட்களை பட்டியலின்படி சரிபார்த்து, தூய்மையாக தனித்தனியாக பேக் செய்கிறோம்.',
        en: 'We source, verify line-by-line, and hygienically label each required material.' 
      }
    },
    {
      num: '04',
      icon: Package,
      title: { ta: 'பெற்றுக்கொள்ளுங்கள்', en: 'Receive or collect your items' },
      desc: { 
        ta: 'மதுரையில் உங்கள் முகவரிக்கு நேரத்திற்கு முன்பே விநியோகம் அல்லது கடையில் பெறலாம்.',
        en: 'Prompt doorstep delivery in Madurai before your ceremony time or collect at store.' 
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-3 py-1 rounded-full mb-3 inline-block">
            {lang === 'ta' ? 'எளிமையான செயல்முறை' : '4-Step Process'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            {lang === 'ta' ? 'எப்படி செயல்படுகிறது?' : 'How It Works'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2">
            {lang === 'ta' 
              ? '4 எளிய படிகளில் உங்கள் சடங்கு பொருட்களை ஒரே இடத்தில் பெறுங்கள்'
              : 'Receive all your ceremony materials hassle-free in 4 simple steps'}
          </p>
        </div>

        {/* Connected Workflow Journey Container */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-24 right-24 h-0.5 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300 -translate-y-1/2 z-0" />

          {/* Mobile Vertical Connecting Line */}
          <div className="lg:hidden absolute top-8 bottom-8 left-7 w-0.5 bg-amber-300 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {stepsData.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-amber-200/80 dark:border-amber-500/20 hover:shadow-lg transition-all relative flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold border border-amber-500/20 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black font-heading text-amber-600/30 dark:text-amber-400/20">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title & Desc */}
                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-100 mb-2">
                      {step.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA After How It Works (Section 13 of Prompt) */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl border border-amber-500/30 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-100 mb-3">
            {lang === 'ta' ? 'உங்கள் பட்டியல் தயாரா?' : 'Is Your Priest List Ready?'}
          </h3>
          <p className="text-amber-200/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            {lang === 'ta'
              ? 'Iyer / Priest கொடுத்த பட்டியலை WhatsApp-ல் அனுப்புங்கள். தேவையான பொருட்களை ஏற்பாடு செய்வதை எங்களிடம் விட்டுவிடுங்கள்.'
              : 'Send the material list given by your Iyer / Priest on WhatsApp. Leave all the material arrangements to us.'}
          </p>
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{lang === 'ta' ? 'WhatsApp-ல் பட்டியலை அனுப்புங்கள்' : 'Send List on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
