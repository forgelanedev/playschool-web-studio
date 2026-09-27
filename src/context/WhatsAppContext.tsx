import React, { createContext, useContext, useState, useEffect } from 'react';

interface WhatsAppContextType {
  phoneNumber: string; // 8015009377: Default and only contact for WhatsApp
  setPhoneNumber: (num: string) => void;
  getWhatsAppUrl: (message?: string) => string;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

// 8015009377 is the single, default, and only contact for WhatsApp
export const DEFAULT_WHATSAPP = "918015009377"; // +91 80150 09377

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export const WhatsAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phoneNumber, setPhoneState] = useState<string>(() => {
    const stored = localStorage.getItem('play_school_portfolio_whatsapp');
    // Ensure default and only contact for WhatsApp is 918015009377
    if (!stored || stored === '919876543210' || stored === '9876543210' || stored === '918122774287') {
      return DEFAULT_WHATSAPP;
    }
    return stored;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('play_school_portfolio_whatsapp', phoneNumber);
  }, [phoneNumber]);

  const setPhoneNumber = (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    setPhoneState(cleaned || DEFAULT_WHATSAPP);
  };

  // Everything directs strictly to WhatsApp on 8015009377
  const getWhatsAppUrl = (message?: string) => {
    const targetPhone = phoneNumber || DEFAULT_WHATSAPP;
    const base = `https://wa.me/${targetPhone}`;
    if (!message) return base;
    return `${base}?text=${encodeURIComponent(message)}`;
  };

  return (
    <WhatsAppContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        getWhatsAppUrl,
        isSettingsOpen,
        setIsSettingsOpen,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
};
