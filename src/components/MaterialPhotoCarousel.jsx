import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getImageUrl } from '../utils/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const MaterialPhotoCarousel = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const carouselItems = [
    {
      id: 1,
      image: '/images/hero_pooja_banner.jpg',
      title: { ta: 'பூஜை & வழிபாட்டு பொருட்கள்', en: 'Pooja & Worship Essentials' },
      tag: { ta: 'பூஜை பொருட்கள்', en: 'Pooja Materials' }
    },
    {
      id: 2,
      image: '/images/pooja_homam.jpg',
      title: { ta: 'ஹோம விறகுகள் & சமித்துகள்', en: 'Homam Samithu & Sacred Woods' },
      tag: { ta: 'ஹோம பொருட்கள்', en: 'Homam Materials' }
    },
    {
      id: 3,
      image: '/images/gruhapravesam_pooja.jpg',
      title: { ta: 'கிரகப்பிரவேச கலச சாமான்கள்', en: 'Gruhapravesam Kalasam Setup' },
      tag: { ta: 'கிரகப்பிரவேசம்', en: 'Housewarming' }
    },
    {
      id: 4,
      image: '/images/marriage.jpg',
      title: { ta: 'திருமண தாம்பூல பொருட்கள்', en: 'Wedding Ceremony Materials' },
      tag: { ta: 'திருமணம்', en: 'Wedding' }
    },
    {
      id: 5,
      image: '/images/nischayathartham_package.jpg',
      title: { ta: 'நிச்சயதார்த்த மங்கள சாமான்கள்', en: 'Nischayathartham Essentials' },
      tag: { ta: 'நிச்சயதார்த்தம்', en: 'Engagement' }
    },
    {
      id: 6,
      image: '/images/other_events.jpg',
      title: { ta: 'பாரம்பரிய சடங்கு பொருட்கள்', en: 'Traditional Ritual Materials' },
      tag: { ta: 'சடங்கு பொருட்கள்', en: 'Traditional Rituals' }
    }
  ];

  const totalItems = carouselItems.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Autoplay with pause-on-hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  // Calculate visible indices for 3-up on desktop
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(carouselItems[(currentIndex + i) % totalItems]);
    }
    return items;
  };

  return (
    <section 
      className="py-16 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40 border-b border-amber-200/50 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'ta' ? 'மாதிரி பொருட்கள் பார்வை' : 'Material Sourcing Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight mb-3">
            {lang === 'ta' ? 'பூஜை முதல் பாரம்பரிய சடங்குகள் வரை' : 'From Everyday Pooja to Sacred Rituals'}
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ta'
              ? 'உங்கள் Iyer / Priest கொடுத்த பட்டியலின் அடிப்படையில் தேவையான பூஜை மற்றும் சடங்கு பொருட்களை நாங்கள் ஏற்பாடு செய்து தருகிறோம்.'
              : 'We source and arrange all required pooja and ceremony materials strictly based on the material list given by your Iyer or Priest.'}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Slides Grid (3 visible on desktop, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleItems().map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-amber-200/80 dark:border-amber-500/20 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title[lang]}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-amber-950/80 backdrop-blur-xs text-amber-200 font-bold text-[11px] px-3 py-1 rounded-full border border-amber-400/30">
                    {item.tag[lang]}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {item.title[lang]}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Previous / Next Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-amber-300 dark:border-amber-600/40 shadow-lg flex items-center justify-center hover:bg-amber-50 dark:hover:bg-slate-800 transition-all cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-amber-300 dark:border-amber-600/40 shadow-lg flex items-center justify-center hover:bg-amber-50 dark:hover:bg-slate-800 transition-all cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-amber-600'
                  : 'w-2 bg-amber-200 dark:bg-slate-700 hover:bg-amber-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
