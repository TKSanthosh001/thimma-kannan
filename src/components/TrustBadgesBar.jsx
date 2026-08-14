import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, DollarSign, Smile, Tag, CheckCircle2 } from 'lucide-react';

export const TrustBadgesBar = () => {
  const { lang } = useLanguage();

  const trustItems = [
    {
      icon: Clock,
      title: { ta: 'துல்லியமான நேரத்திற்கு விநியோகம்', en: 'Guaranteed On-Time Delivery' },
      desc: { ta: 'ஹோம நேரத்திற்கு முன்பே மதுரை முழுவதும் டெலிவரி', en: 'Punctual delivery across Madurai before ritual time' }
    },
    {
      icon: DollarSign,
      title: { ta: 'நியாயமான சந்தை விலை', en: 'Affordable Market Price' },
      desc: { ta: 'சந்தை விலைக்கு ஏற்ற நியாயமான நியாய விலை', en: 'Reasonable, transparent market-matched rates' }
    },
    {
      icon: Smile,
      title: { ta: 'அலைச்சல் இல்லை, டென்ஷன் இல்லை', en: 'No Hassle, Zero Tension' },
      desc: { ta: 'கடை கடையாக அலைய வேண்டாம், ஒரே WhatsApp மெசேஜ்', en: 'No running between multiple shops in Madurai' }
    },
    {
      icon: Tag,
      title: { ta: 'தனித்தனி பெயர் சீட்டு லேபிள்', en: 'Itemized Labeled Packing' },
      desc: { ta: 'வாத்தியார் பட்டியல் படி 100% துல்லிய பேக்கிங்', en: 'Checked line-by-line against your Purohit list' }
    }
  ];

  return (
    <section className="bg-gradient-to-r from-amber-900 via-slate-900 to-amber-950 text-white py-6 border-y border-amber-500/20 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 border border-amber-500/30">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-200 flex items-center gap-1.5">
                    <span>{item.title[lang]}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
