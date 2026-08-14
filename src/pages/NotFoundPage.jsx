import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Home } from 'lucide-react';

export const NotFoundPage = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-main transition-colors text-center px-4">
      <SEOHead title="404 - Page Not Found" path="/404" />
      <div className="space-y-4 max-w-md mx-auto">
        <h1 className="text-6xl font-extrabold font-heading text-maroon dark:text-gold">404</h1>
        <h2 className="text-xl font-bold text-primary">
          {lang === 'ta' ? 'பக்கம் காணப்படவில்லை' : 'Page Not Found'}
        </h2>
        <p className="text-sm text-secondary">
          {lang === 'ta'
            ? 'நீங்கள் தேடும் பக்கம் தற்காலிகமாக அகற்றப்பட்டிருக்கலாம் அல்லது தவறான முகவரி.'
            : 'The page you are looking for might have been moved or does not exist.'}
        </p>
        <div className="pt-4">
          <Link to="/" className="btn btn-primary text-sm py-3 px-6">
            <Home className="w-4 h-4" />
            <span>{lang === 'ta' ? 'முகப்பிற்குச் செல்ல' : 'Back to Home'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
