import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { tamilFestivals, getActiveOrUpcomingFestival } from '../config/tamilCalendar';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Calendar, Flame, MessageSquare, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const TamilFestivalBanner = () => {
  const { lang, t } = useLanguage();
  const { festival: activeFestival, isToday } = getActiveOrUpcomingFestival();
  const [showCalendarList, setShowCalendarList] = useState(false);

  const festName = activeFestival.name[lang];
  const festMonth = activeFestival.tamilMonth[lang];
  const festDesc = activeFestival.desc[lang];
  const festItems = activeFestival.itemsNote[lang];
  const waMsg = activeFestival.whatsappMessage[lang];

  return (
    <section className="bg-gradient-to-r from-amber-900/90 via-maroon to-red-950 text-amber-50 py-8 px-6 border-b-2 border-saffron/40 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Main Smart Banner Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Title & Festival Identity */}
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-saffron/40 flex items-center justify-center flex-shrink-0 text-amber-300 shadow-md">
              <Flame className="w-6 h-6 animate-pulse text-amber-300" />
            </div>
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-saffron/20 border border-saffron/40 text-[11px] font-extrabold uppercase tracking-wider text-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isToday
                    ? (lang === 'ta' ? 'இன்றைய தமிழ் பண்டிகை!' : 'Today\'s Tamil Festival!')
                    : (lang === 'ta' ? 'அடுத்த சிறப்பு தமிழ் பண்டிகை' : 'Upcoming Tamil Festival')}
                </span>
                <span className="text-amber-400">• {festMonth} ({activeFestival.date})</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-amber-100">
                {festName}
              </h2>

              <p className="text-xs md:text-sm text-amber-100/80 max-w-2xl leading-relaxed">
                {festDesc}
              </p>

              <div className="flex items-center gap-2 text-xs text-amber-200/90 pt-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-saffron flex-shrink-0" />
                <span>{lang === 'ta' ? `தேவையான பொருட்கள்: ${festItems}` : `Arranged Items: ${festItems}`}</span>
              </div>
            </div>
          </div>

          {/* Right Action & Calendar Toggle */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
            <a
              href={getWhatsAppUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs md:text-sm py-3.5 px-6 font-extrabold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>
                {lang === 'ta'
                  ? `${festName} பட்டியலை அனுப்புக`
                  : `Send List for ${festName}`}
              </span>
            </a>

            <button
              onClick={() => setShowCalendarList(!showCalendarList)}
              className="btn btn-outline text-xs py-3.5 px-4 text-amber-200 border-amber-400/40 hover:border-amber-300 font-semibold"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'ta' ? 'தமிழ் நாட்காட்டி →' : 'Tamil Calendar →'}</span>
            </button>
          </div>

        </div>

        {/* Expandable Tamil Calendar Festival List Tracker */}
        {showCalendarList && (
          <div className="pt-6 border-t border-saffron/30 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold font-heading text-amber-200 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-saffron" />
                <span>{lang === 'ta' ? '2026-2027 தமிழ் முக்கிய பண்டிகைகள் & பூஜை பொருட்கள்:' : 'Major Tamil Festivals & Sourcing Calendar:'}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tamilFestivals.map((fest) => {
                const name = fest.name[lang];
                const month = fest.tamilMonth[lang];
                const isSelected = fest.id === activeFestival.id;

                return (
                  <div
                    key={fest.id}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-saffron/20 border-saffron shadow-md'
                        : 'bg-black/20 border-saffron/20 hover:border-saffron/50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold text-amber-300 mb-1">
                      <span>{month}</span>
                      <span>{fest.date}</span>
                    </div>

                    <h4 className="text-sm font-extrabold font-heading text-amber-100 mb-1">
                      {name}
                    </h4>

                    <p className="text-[11px] text-amber-100/70 line-clamp-2 mb-3">
                      {fest.desc[lang]}
                    </p>

                    <a
                      href={getWhatsAppUrl(fest.whatsappMessage[lang])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-300 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{lang === 'ta' ? 'பட்டியலை அனுப்ப' : 'Send List'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
