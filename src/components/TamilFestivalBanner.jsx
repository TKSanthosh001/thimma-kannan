import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { tamilFestivals, getActiveOrUpcomingFestival } from '../config/tamilCalendar';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Calendar, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';

export const TamilFestivalBanner = () => {
  const { lang } = useLanguage();
  const { festival: activeFestival } = getActiveOrUpcomingFestival();
  const [showCalendarList, setShowCalendarList] = useState(false);

  const waMsg = activeFestival.whatsappMessage[lang];

  return (
    <section className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 text-amber-50 py-3.5 px-4 border-b border-amber-500/20 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Brand Service Announcement Ticker */}
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-amber-100 tracking-wide">
            {lang === 'ta' ? (
              <>
                <span className="font-bold text-amber-300">பூஜை • ஹோமம் • கிரகப்பிரவேசம் • திருமணம் • சடங்குகள்</span>
                <span className="hidden sm:inline text-amber-400/60 mx-2">|</span>
                <span className="text-amber-200">உங்கள் பட்டியலை WhatsApp-ல் அனுப்புங்கள்</span>
              </>
            ) : (
              <>
                <span className="font-bold text-amber-300">Pooja • Homam • Housewarming • Wedding • Rituals</span>
                <span className="hidden sm:inline text-amber-400/60 mx-2">|</span>
                <span className="text-amber-200">Send your priest list on WhatsApp</span>
              </>
            )}
          </p>
        </div>

        {/* Right: Quick Action & Festival Tracker Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={getWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'ta' ? 'பட்டியலை அனுப்ப' : 'Send List'}</span>
          </a>

          <button
            onClick={() => setShowCalendarList(!showCalendarList)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-amber-200 border border-amber-400/30 text-xs font-semibold transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ta' ? 'தமிழ் நாட்காட்டி' : 'Calendar'}</span>
          </button>
        </div>

      </div>

      {/* Expandable Tamil Calendar Festival List Tracker */}
      {showCalendarList && (
        <div className="max-w-7xl mx-auto px-4 pt-6 mt-3 border-t border-amber-500/20 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-heading text-amber-200 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
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
                      ? 'bg-amber-500/20 border-amber-400 shadow-md'
                      : 'bg-black/20 border-amber-500/20 hover:border-amber-400/50'
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
    </section>
  );
};
