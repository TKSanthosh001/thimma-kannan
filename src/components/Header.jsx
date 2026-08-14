import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { Sun, Moon, Menu, X, Phone, MessageSquare, Flame } from 'lucide-react';

export const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/packages', label: t.nav.packages },
    { path: '/materials', label: t.nav.materials },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header shadow-md' : 'bg-transparent'}`}>
      <div className="devotional-top-bar" />
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 text-decoration-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-red-800 flex items-center justify-center text-amber-100 shadow-md">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-heading tracking-wide leading-tight text-maroon dark:text-gold">
              {businessConfig.businessName[lang]}
            </h1>
            <p className="text-xs text-secondary dark:text-muted hidden sm:block">
              {lang === 'ta' ? 'பாரம்பரிய பூஜா பொருட்கள்' : 'Traditional Ritual Material Package'}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-saffron ${
                  isActive ? 'text-maroon dark:text-gold font-bold border-b-2 border-saffron pb-1' : 'text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher, Theme Switcher, Quick WhatsApp */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full border border-color text-xs font-semibold hover:border-saffron transition-all flex items-center gap-1"
            title="Switch Language / மொழியை மாற்றுக"
          >
            <span className={lang === 'ta' ? 'text-saffron font-bold' : 'text-muted'}>தமிழ்</span>
            <span className="text-muted">|</span>
            <span className={lang === 'en' ? 'text-saffron font-bold' : 'text-muted'}>EN</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-color hover:bg-secondary text-primary transition-all"
            title="Toggle Light / Dark Mode"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-amber-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* WhatsApp CTA */}
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-xs py-2 px-3"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Header Buttons (Lang, Theme, Hamburger) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-full border border-color text-xs font-bold text-saffron"
          >
            {lang === 'ta' ? 'EN' : 'தமிழ்'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full border border-color text-primary"
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
        <div className="lg:hidden glass-header border-b border-color py-4 px-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base py-2 font-medium border-b border-color ${
                    isActive ? 'text-maroon dark:text-gold font-bold' : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-2 mt-4 pt-2">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.buttons.enquireWhatsApp}</span>
              </a>

              <a
                href={`tel:${businessConfig.phone}`}
                className="btn btn-outline w-full text-center"
              >
                <Phone className="w-4 h-4" />
                <span>{t.buttons.callNow}: {businessConfig.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
