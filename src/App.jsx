import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { TamilFestivalBanner } from './components/TamilFestivalBanner';
import { Hero } from './components/Hero';
import { TrustBadgesBar } from './components/TrustBadgesBar';
import { CustomerStory } from './components/CustomerStory';
import { IyerHomamListResolver } from './components/IyerHomamListResolver';
import { AuthenticityGuaranteeSection } from './components/AuthenticityGuaranteeSection';
import { ServicesSection } from './components/ServicesSection';
import { MaterialPhotoCarousel } from './components/MaterialPhotoCarousel';
import { ServiceModal } from './components/ServiceModal';
import { HowItWorks } from './components/HowItWorks';
import { MaterialsSection } from './components/MaterialsSection';
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

            {/* 1.5 TRUST PILLARS BAR */}
            <TrustBadgesBar />

            {/* 2. CUSTOMER STORY (PROBLEM -> SOLUTION FLOW) */}
            <CustomerStory />

            {/* 2.5 IYER & HOMAM SAMAGRI LIST RESOLVER */}
            <IyerHomamListResolver />

            {/* 2.8 AUTHENTICITY & QUALITY GUARANTEE */}
            <AuthenticityGuaranteeSection />

            {/* 3. CEREMONY SERVICES */}
            <ServicesSection onSelectService={(service) => setSelectedService(service)} />

            {/* 3.5 MATERIAL & ARRANGEMENT PHOTO SHOWCASE CAROUSEL */}
            <MaterialPhotoCarousel />

            {/* 4. HOW IT WORKS */}
            <HowItWorks />

            {/* 5. MATERIALS CATALOGUE */}
            <MaterialsSection onSelectMaterial={(mat) => setSelectedMaterial(mat)} />

            {/* 6. WHY THIMMA KANNAN */}
            <WhyChooseUs />

            {/* 7. FAQ */}
            <FAQSection />

            {/* 8. FINAL WHATSAPP CONVERSION CTA */}
            <FinalCTA />

            {/* 9. CONTACT & LOCATION */}
            <ContactSection />
          </main>
          
          {/* FOOTER */}
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
