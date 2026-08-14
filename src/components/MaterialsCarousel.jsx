import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { materialsData } from '../config/materials';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ChevronLeft, ChevronRight, Eye, FileText } from 'lucide-react';

export const MaterialsCarousel = ({ onSelectMaterial }) => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = materialsData.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? maxIndex : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx >= maxIndex ? 0 : prevIdx + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      next();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prev();
    }
  };

  return (
    <section id="materials" className="py-16 md:py-20 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Header & Nav Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
              {lang === 'ta' ? 'பூஜை பொருட்கள் எடுத்துக்காட்டு' : 'Pooja Materials Examples'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-primary">
              {lang === 'ta'
                ? 'உங்கள் பட்டியலில் உள்ள பொருட்களை நாங்கள் ஏற்பாடு செய்கிறோம்'
                : 'We Arrange Materials Required in Your List'}
            </h2>
            <p className="text-sm text-secondary">
              {lang === 'ta'
                ? 'பூஜை மற்றும் சடங்கு பொருட்களின் சில எடுத்துக்காட்டுகள்:'
                : 'Informational showcase of ceremony items we source strictly per your list:'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-color hover:border-saffron bg-card text-primary hover:text-maroon transition-all shadow-sm"
              aria-label="Previous material"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-color hover:border-saffron bg-card text-primary hover:text-maroon transition-all shadow-sm"
              aria-label="Next material"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Window */}
        <div
          className="overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`
            }}
          >
            {materialsData.map((item) => {
              const name = item.name[lang];
              const desc = item.desc[lang];

              return (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-card rounded-2xl p-6 flex flex-col justify-between border border-color shadow-sm space-y-4 hover:border-saffron transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-saffron">
                      <FileText className="w-4 h-4" />
                      <span>{lang === 'ta' ? 'பட்டியலின்படி ஏற்பாடு' : 'Arranged Per List'}</span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-primary line-clamp-1">
                      {name}
                    </h3>

                    <p className="text-xs md:text-sm text-secondary leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-color">
                    <button
                      onClick={() => onSelectMaterial(item)}
                      className="btn btn-outline text-xs py-2.5 px-3 flex-1 text-center"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'ta' ? 'விவரம்' : 'Details'}</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(item.whatsappMessage[lang])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp text-xs py-2.5 px-3 flex-1 text-center font-bold"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{lang === 'ta' ? 'கேளுங்கள்' : 'Inquire'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-saffron' : 'w-2.5 bg-color hover:bg-saffron/50'
              }`}
              aria-label={`Go to material slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
