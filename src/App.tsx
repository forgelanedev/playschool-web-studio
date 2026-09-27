import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PositioningValue } from './components/PositioningValue';
import { Pricing } from './components/Pricing';
import { FreePreview } from './components/FreePreview';
import { EarlyLearningSection } from './components/EarlyLearningSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppSettingsModal } from './components/WhatsAppSettingsModal';
import { TermsAndConditions } from './components/TermsAndConditions';
import { NotFound } from './components/NotFound';

export const App: React.FC = () => {
  // Simple, robust client-side routing
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const normalized = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
      setCurrentPath(normalized);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    const normalized = path.toLowerCase().replace(/\/+$/, '') || '/';
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route 1: Terms & Conditions
  if (currentPath === '/terms' || currentPath === '/terms-and-conditions') {
    return (
      <>
        <TermsAndConditions onNavigateHome={() => navigateTo('/')} />
        <FloatingWhatsApp />
        <WhatsAppSettingsModal />
      </>
    );
  }

  // Route 2: 404 Not Found (any invalid route other than root)
  if (currentPath !== '/') {
    return (
      <>
        <NotFound onNavigateHome={() => navigateTo('/')} />
        <FloatingWhatsApp />
        <WhatsAppSettingsModal />
      </>
    );
  }

  // Route 3: Main Landing Page (/)
  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-700">
      {/* Sticky Navigation Header (Side Logo with green outline) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Titanium Mockup */}
        <Hero />

        {/* 2. Positioning & Business Value For Play Schools */}
        <PositioningValue />

        {/* 3. Transparent Pricing (₹999 Startup Plan + Interactive Customizer) */}
        <Pricing />

        {/* 4. Strong "Get a Free Preview" Generator */}
        <FreePreview />

        {/* 5. Early Learning Community Specialization */}
        <EarlyLearningSection />

        {/* 6. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Studio Footer with Terms & Conditions link */}
      <Footer onNavigateTerms={() => navigateTo('/terms')} />

      {/* Floating 1-Tap WhatsApp Conversion Button */}
      <FloatingWhatsApp />

      {/* WhatsApp Number Settings Modal */}
      <WhatsAppSettingsModal />
    </div>
  );
};

export default App;
