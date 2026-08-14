import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../config/services';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';
import { MessageSquare, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const ServicesCarousel = ({ onSelectService }) => {
  const { lang, t } = useLanguage();
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

  const totalSlides = servicesData.length;
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
    <section id="services" className="py-16 md:py-24 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-sm font-extrabold uppercase tracking-wider text-saffron block">
              {lang === 'ta' ? 'சேவைகள்' : 'Services Categories'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
              {t.servicesSection.title}
            </h2>
            <p className="text-base md:text-lg text-secondary font-medium">
              {t.servicesSection.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3.5 rounded-full border border-color hover:border-saffron bg-card text-primary hover:text-maroon transition-all shadow-sm"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3.5 rounded-full border border-color hover:border-saffron bg-card text-primary hover:text-maroon transition-all shadow-sm"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
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
            {servicesData.map((service) => {
              const title = service.title[lang];
              const shortDesc = service.shortDesc[lang];
              const imgPath = getImageUrl(service.image);

              return (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-card rounded-3xl overflow-hidden border border-color hover:border-saffron group shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 sm:h-60 overflow-hidden">
                      <img
                        src={imgPath}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 md:p-7 space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-primary group-hover:text-maroon dark:group-hover:text-gold transition-colors">
                        {title}
                      </h3>
                      <p className="text-base text-secondary leading-relaxed font-medium">
                        {shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-7 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="btn btn-outline text-sm md:text-base py-3 px-4 flex-1 text-center font-bold"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.buttons.viewDetails}</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(service.whatsappMessage[lang])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp text-sm md:text-base py-3 px-4 flex-1 text-center font-extrabold"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.nav.whatsappAction}</span>
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
              className={`h-3 rounded-full transition-all ${
                currentIndex === idx ? 'w-9 bg-saffron' : 'w-3 bg-color hover:bg-saffron/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
