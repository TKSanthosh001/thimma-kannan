import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { HowItWorks } from './components/HowItWorks';
import { PackagesSection } from './components/PackagesSection';
import { PackageModal } from './components/PackageModal';
import { MaterialsSection } from './components/MaterialsSection';
import { MaterialModal } from './components/MaterialModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App = () => {
  // Modal state management for details views on single page
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead />
        <div className="flex flex-col min-h-screen bg-main transition-colors text-primary font-body">
          <Header />
          <main className="flex-grow">
            {/* 1. HERO SECTION */}
            <Hero />

            {/* 2. ABOUT / VALUE PROPOSITION SECTION */}
            <AboutSection />

            {/* 3. OUR SERVICES SECTION */}
            <ServicesSection onSelectService={(service) => setSelectedService(service)} />

            {/* 4. HOW IT WORKS WORKFLOW SECTION */}
            <HowItWorks />

            {/* 5. POPULAR CEREMONY PACKAGES SECTION */}
            <PackagesSection onSelectPackage={(pkg) => setSelectedPackage(pkg)} />

            {/* 6. MATERIALS CATALOGUE SECTION */}
            <MaterialsSection onSelectMaterial={(mat) => setSelectedMaterial(mat)} />

            {/* 7. WHY CHOOSE THIMMA KANNAN SECTION */}
            <WhyChooseUs />

            {/* 8. FAQ SECTION */}
            <FAQSection />

            {/* 9. CONTACT & LOCATION SECTION */}
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
