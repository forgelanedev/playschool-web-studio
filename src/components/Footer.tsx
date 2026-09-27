import React from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import { MessageCircle, Heart, Sparkles, Settings } from 'lucide-react';

interface FooterProps {
  onNavigateTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTerms }) => {
  const { getWhatsAppUrl, phoneNumber, setIsSettingsOpen } = useWhatsApp();

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateTerms) {
      onNavigateTerms();
    } else {
      window.history.pushState({}, '', '/terms');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="bg-ink-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-emerald-500 flex items-center justify-center text-lg shadow-sm">
                🌱
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                TinySteps<span className="text-emerald-400">.studio</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              We design and build bespoke, high-converting websites and landing pages exclusively for play schools, preschools, and early learning centers. Helping neighborhood parents discover the right school for their children.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 font-semibold border border-slate-700">
                Landing pages starting from ₹999
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">100% Done-For-You</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#value" className="hover:text-white transition-colors">
                  Why Play Schools Need A Website
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Early Learning Focus & Guarantee
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing & Customizer (From ₹999)
                </a>
              </li>
              <li>
                <a href="#free-preview" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Get A Free Preview Mockup</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  onClick={handleTermsClick}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-slate-400"
                >
                  <span>Terms & Conditions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts Section at Bottom Right */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Contacts
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have a question or want to see a free mockup for your preschool? Connect directly with me on WhatsApp:
            </p>

            {/* Contacts Numbers */}
            <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-800 space-y-2 text-sm font-mono font-bold text-slate-100">
              <div>+91 80150 09377</div>
              <div className="pt-2 border-t border-slate-800/80 text-slate-300">+91 81227 74287</div>
            </div>
            
            <a
              href={getWhatsAppUrl("Hi! I run a play school and I want to enquire about creating a website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition-all w-full justify-center group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp Directly</span>
            </a>

            <div className="flex items-center justify-between pt-0.5 text-[11px] text-slate-400">
              <span className="font-mono text-emerald-400 font-semibold">+91 80150 09377</span>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="text-slate-400 hover:text-white underline flex items-center gap-1 cursor-pointer"
              >
                <Settings className="w-3 h-3" />
                <span>Change Number</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} TinySteps Web Studio. Crafted with{' '}
            <Heart className="w-3 h-3 inline text-rose-500 fill-rose-500 mx-0.5" /> for Early Childhood Educators.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <button
              onClick={handleTermsClick}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <span className="text-slate-500">Starting at ₹999</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
