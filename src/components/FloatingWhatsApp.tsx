import React, { useState } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-100 max-w-[240px] text-left animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[11px] font-bold text-ink-900 uppercase tracking-wider">Contacts</p>
          </div>
          
          <p className="text-[11px] text-slate-500 leading-snug">
            Need a website for your play school? Tap below to chat on WhatsApp directly!
          </p>

          <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col gap-1 text-[11px] font-mono font-bold">
            <span className="text-emerald-600">+91 80150 09377</span>
            <span className="text-slate-700">+91 81227 74287</span>
          </div>
        </div>
      )}

      {/* Pulsing Floating Action Button */}
      <a
        href={getWhatsAppUrl("Hi! I came across your portfolio website and I'd like to talk about creating a website for my play school.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/35 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-75 blur-sm transition duration-300 animate-pulse" />
        
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full z-20" />
      </a>

    </div>
  );
};
