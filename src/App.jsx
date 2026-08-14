import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { TamilFestivalBanner } from './components/TamilFestivalBanner';
import { Hero } from './components/Hero';
import { CustomerStory } from './components/CustomerStory';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { HowItWorks } from './components/HowItWorks';
import { PackagesSection } from './components/PackagesSection';
import { PackageModal } from './components/PackageModal';
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
  const [selectedPackage, setSelectedPackage] = useState(null);
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

            {/* 2. CUSTOMER STORY (PROBLEM -> SOLUTION FLOW) */}
            <CustomerStory />

            {/* 3. CEREMONY SERVICES */}
            <ServicesSection onSelectService={(service) => setSelectedService(service)} />

            {/* 4. HOW IT WORKS */}
            <HowItWorks />

            {/* 5. POPULAR CEREMONY PACKAGES */}
            <PackagesSection onSelectPackage={(pkg) => setSelectedPackage(pkg)} />

            {/* 6. MATERIALS CATALOGUE */}
            <MaterialsSection onSelectMaterial={(mat) => setSelectedMaterial(mat)} />

            {/* 7. WHY THIMMA KANNAN */}
            <WhyChooseUs />

            {/* 8. FAQ */}
            <FAQSection />

            {/* 9. FINAL WHATSAPP CONVERSION CTA */}
            <FinalCTA />

            {/* 10. CONTACT & LOCATION */}
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

          {selectedPackage && (
            <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
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
