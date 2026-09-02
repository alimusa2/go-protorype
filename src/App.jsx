import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import OurWork from './components/OurWork';
import FeatureShowcase from './components/FeatureShowcase';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Careers from './components/Careers';
import CtaBanner from './components/CtaBanner';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WebsiteModal from './components/WebsiteModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

  const handleOpenQuoteModal = (serviceName = '') => {
    setModalService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleOpenWebsiteModal = (clientData) => {
    setSelectedClient(clientData);
  };

  const handleCloseWebsiteModal = () => {
    setSelectedClient(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans relative selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      {/* 0. Initial Animated Video Loading Screen */}
      <LoadingScreen />

      {/* 1. Header Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Area */}
      <main>
        {activeNav === 'Home' && (
          <>
            {/* 2. Hero Section */}
            <Hero onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 3. Trust Bar Marquee */}
            <TrustBar />

            {/* 4. Services Grid */}
            <Services onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 5. Systems We Build Feature Showcase */}
            <FeatureShowcase />

            {/* 6. Client Testimonials */}
            <Testimonials onOpenWebsiteModal={handleOpenWebsiteModal} />

            {/* 7. CTA Banner with 3D Sphere */}
            <CtaBanner onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 8. FAQ Accordion */}
            <Faq />

            {/* 9. Final CTA & Marquee */}
            <FinalCta onOpenQuoteModal={handleOpenQuoteModal} />
          </>
        )}

        {activeNav === 'Our Work' && (
          <OurWork onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {activeNav === 'Team' && (
          <Team />
        )}

        {activeNav === 'Blogs' && (
          <Blogs />
        )}

        {activeNav === 'Career' && (
          <Careers />
        )}
      </main>

      {/* Footer Navigation */}
      <Footer setActiveNav={setActiveNav} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={modalService}
      />

      <WebsiteModal
        client={selectedClient}
        onClose={handleCloseWebsiteModal}
      />
    </div>
  );
}
