import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { TamilFestivalBanner } from './components/TamilFestivalBanner';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { ServicesCarousel } from './components/ServicesCarousel';
import { AllListsBanner } from './components/AllListsBanner';
import { ServiceModal } from './components/ServiceModal';
import { HowItWorks } from './components/HowItWorks';
import { MaterialsCarousel } from './components/MaterialsCarousel';
import { MaterialModal } from './components/MaterialModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead />
        <div className="flex flex-col min-h-screen bg-main transition-colors text-primary font-body">
          <Header />
          <TamilFestivalBanner />

          <main className="flex-grow">
            <Hero />
            <WhatWeDo />
            <ServicesCarousel onSelectService={(service) => setSelectedService(service)} />
            <AllListsBanner />
            <HowItWorks />
            <MaterialsCarousel onSelectMaterial={(mat) => setSelectedMaterial(mat)} />
            <WhyChooseUs />
            <FaqSection />
            <FinalCTA />
            <ContactSection />
          </main>

          <Footer />
          <FloatingWhatsApp />

          {/* Modals */}
          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}

          {selectedMaterial && (
            <MaterialModal
              material={selectedMaterial}
              onClose={() => setSelectedMaterial(null)}
            />
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
