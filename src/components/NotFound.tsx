import React from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import { ArrowLeft, MessageCircle, Home, Compass, Sparkles } from 'lucide-react';

interface NotFoundProps {
  onNavigateHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  const { getWhatsAppUrl } = useWhatsApp();

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 font-sans selection:bg-rose-100 selection:text-rose-700 flex flex-col justify-between">
      
      {/* Top Header Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 sm:px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-ink-900 transition-colors group"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Back to Homepage</span>
          </button>

          {/* Logo with Green Outline */}
          <div
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-white border-2 border-emerald-500 shadow-xs flex items-center justify-center text-lg">
              🌱
            </div>
            <span className="font-display font-black text-base tracking-tight text-ink-900">
              TinySteps<span className="text-emerald-600">.studio</span>
            </span>
          </div>

          {/* WhatsApp Direct Help */}
          <a
            href={getWhatsAppUrl("Hi! I came across your page and wanted to enquire about a website for my play school.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Main 404 Visual Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-xl w-full text-center space-y-6">
          
          {/* Playful Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Lost on the Playground?</span>
          </div>

          {/* 404 Large Display */}
          <div className="relative inline-block my-2">
            <div className="text-8xl sm:text-9xl font-black font-display tracking-tight text-slate-200 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl transform -rotate-6 filter drop-shadow-md">
                🧸
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-black font-display text-ink-900 tracking-tight">
              Oops! This Classroom Doesn’t Exist
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              The page you're searching for might have taken recess or doesn't exist yet. But creating a high-converting website for your play school is only one click away!
            </p>
          </div>

          {/* Value Prop Snapshot Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Looking for play school website solutions?</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We design mobile-first admissions landing pages starting at <strong>₹999</strong> with zero headaches, custom feature add-ons, and direct WhatsApp parent inquiries.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-ink-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 group"
            >
              <Home className="w-4 h-4 text-slate-300 group-hover:text-white" />
              <span>Back to Homepage</span>
            </button>

            <a
              href={getWhatsAppUrl("Hi! I was visiting your website and I would like to enquire about getting a website made for my preschool.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} TinySteps Web Studio. High-converting websites for Play Schools & Preschools.</p>
      </footer>

    </div>
  );
};

export default NotFound;
