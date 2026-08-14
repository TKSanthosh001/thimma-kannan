import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { TamilFestivalBanner } from './components/TamilFestivalBanner';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { ServicesCarousel } from './components/ServicesCarousel';
import { ServiceModal } from './components/ServiceModal';
import { HowItWorks } from './components/HowItWorks';
import { MaterialsCarousel } from './components/MaterialsCarousel';
import { MaterialModal } from './components/MaterialModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FaqSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead />
        <div className="flex flex-col min-h-screen bg-main transition-colors text-primary font-body">
          {/* HEADER */}
          <Header />

          {/* DYNAMIC TAMIL CALENDAR FESTIVAL BANNER */}
          <TamilFestivalBanner />

          <main className="flex-grow">
            {/* 1. HERO */}
            <Hero />

            {/* 2. WHAT WE DO */}
            <WhatWeDo />

            {/* 3. SERVICES CAROUSEL (CAROUSEL 1) */}
            <ServicesCarousel onSelectService={(service) => setSelectedService(service)} />

            {/* 4. HOW IT WORKS */}
            <HowItWorks />

            {/* 5. MATERIAL EXAMPLES CAROUSEL (CAROUSEL 2) */}
            <MaterialsCarousel onSelectMaterial={(mat) => setSelectedMaterial(mat)} />

            {/* 6. WHY THIMMA KANNAN */}
            <WhyChooseUs />

            {/* 7. FAQ */}
            <FAQSection />

            {/* 8. FINAL WHATSAPP CTA */}
            <FinalCTA />

            {/* 9. CONTACT */}
            <ContactSection />
          </main>
          
          {/* 10. FOOTER */}
          <Footer />

          {/* FLOATING WHATSAPP BUTTON */}
          <FloatingWhatsApp />

          {/* DETAIL MODALS */}
          {selectedService && (
            <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
          )}

          {selectedMaterial && (
            <MaterialModal material={selectedMaterial} onClose={() => setSelectedMaterial(null)} />
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
