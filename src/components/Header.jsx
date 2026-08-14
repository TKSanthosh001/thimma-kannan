import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { Sun, Moon, Menu, X, MessageSquare, Flame } from 'lucide-react';

export const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'how-it-works', 'packages', 'materials', 'why-choose', 'faq', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'how-it-works', label: t.nav.workflow },
    { id: 'packages', label: t.nav.packages },
    { id: 'materials', label: t.nav.materials },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-main/95 backdrop-blur-md shadow-sm border-b border-color' : 'bg-main'
    }`}>
      <div className="h-1.5 bg-gradient-to-r from-maroon via-saffron to-maroon" />
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 text-decoration-none group"
        >
          <div className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center text-gold shadow-md group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-extrabold font-heading text-maroon dark:text-gold tracking-tight block leading-none">
              {businessConfig.businessName[lang]}
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[10px] uppercase tracking-wider text-muted font-medium block">
                {lang === 'ta' ? 'மதுரை தெற்கு வாசல் • பூஜை சாமான்கள்' : 'South Gate, Madurai • Pooja Samagri'}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-xs uppercase font-bold tracking-wider transition-all py-1 ${
                  isActive
                    ? 'text-maroon dark:text-gold border-b-2 border-saffron'
                    : 'text-secondary hover:text-maroon dark:hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Lang, Theme, WhatsApp */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-md border border-color text-xs font-bold hover:border-saffron transition-all flex items-center gap-1 bg-card text-primary"
            title="Switch Language / மொழியை மாற்றுக"
          >
            <span className={lang === 'ta' ? 'text-saffron font-extrabold' : 'text-muted'}>தமிழ்</span>
            <span className="text-muted">|</span>
            <span className={lang === 'en' ? 'text-saffron font-extrabold' : 'text-muted'}>EN</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-color hover:bg-secondary text-primary transition-all bg-card"
            title="Toggle Light / Dark Mode"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-amber-800" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Quiet WhatsApp Link */}
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-xs py-2.5 px-4 font-bold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.nav.whatsappAction}</span>
          </a>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded border border-color text-xs font-bold text-saffron bg-card"
          >
            {lang === 'ta' ? 'EN' : 'தமிழ்'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-color text-primary bg-card"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-main border-b border-color py-6 px-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-base py-2 font-semibold border-b border-color ${
                    isActive ? 'text-maroon dark:text-gold font-bold' : 'text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="flex flex-col gap-3 mt-4 pt-2">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full text-center font-bold py-3.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.buttons.sendListWhatsApp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
