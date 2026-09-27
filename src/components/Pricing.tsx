import React, { useState } from 'react';
import { STARTUP_PLAN, CUSTOMIZATION_OPTIONS } from '../data/pricing';
import { useWhatsApp } from '../context/WhatsAppContext';
import confetti from 'canvas-confetti';
import {
  Check,
  Zap,
  MessageCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  Sliders,
  ArrowRight
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['gallery', 'cctv_hub']);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedTitles = CUSTOMIZATION_OPTIONS
    .filter(opt => selectedAddons.includes(opt.id))
    .map(opt => opt.title);

  const handleCustomQuote = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    const message = selectedTitles.length > 0
      ? `Hi! I want to get a website for my play school based on your ₹999 Startup Plan, and I'd like to add these customizations:
${selectedTitles.map(t => `• ${t}`).join('\n')}

Can you share a customized quote and timeline for my school?`
      : `Hi! I am interested in getting a custom website for my play school. Can you share options and pricing?`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
            <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            Simple Base Plan + Tailored Customizations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-ink-900 tracking-tight leading-tight">
            High-Impact Website For ₹999. Everything Else Built Your Way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Start with our proven, admissions-ready basic landing page for just <span className="font-bold text-ink-900">₹999</span>. 
            Need extra features? Select from our custom add-ons below and we'll align the pricing to your exact school requirements.
          </p>
        </div>

        {/* 2-Column Split: The Startup Plan (₹999) + Interactive Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: The ₹999 Startup Plan Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-slate-900 to-ink-950 text-white shadow-2xl ring-2 ring-rose-500 relative flex flex-col justify-between">
            
            {/* Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-extrabold shadow-md flex items-center gap-1 uppercase tracking-wider whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Basic Plan • Works & Gets Admissions</span>
            </div>

            <div>
              {/* Plan Title & Tag */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <h3 className="text-2xl font-black font-display tracking-tight text-white">
                  {STARTUP_PLAN.name}
                </h3>
              </div>

              {/* Price Anchor */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-black font-display tracking-tight text-white">
                  ₹{STARTUP_PLAN.price}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  one-time investment
                </span>
              </div>

              {/* Delivery Quality */}
              <div className="flex items-center gap-1.5 text-xs font-semibold mb-6 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Done-For-You • Live & Admissions-Ready</span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 mb-6">
                {STARTUP_PLAN.description}
              </p>

              {/* Features List */}
              <div className="pt-6 border-t border-slate-800 space-y-3 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Included In The ₹999 Base Website:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {STARTUP_PLAN.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-emerald-500/20 text-emerald-400">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-slate-200 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(STARTUP_PLAN.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-600/30 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get The ₹999 Startup Plan &rarr;</span>
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                ⚡ 1-Tap WhatsApp Setup • Zero technical knowledge required
              </p>
            </div>

          </div>

          {/* RIGHT: Interactive Customization & Add-ons Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-cream-50/80 rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-card flex flex-col justify-between">
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-inner">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-ink-900">
                      Customize Your School Website
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select any optional features you want. We'll align the custom quote.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 self-start sm:self-auto shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{selectedAddons.length} Customizations Picked</span>
                </div>
              </div>

              {/* Add-ons List */}
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {CUSTOMIZATION_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                        isChecked
                          ? 'bg-white border-rose-300 shadow-sm ring-1 ring-rose-200'
                          : 'bg-white/60 hover:bg-white border-slate-200/70 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-rose-600 text-white'
                          : 'border-2 border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-xs sm:text-sm font-bold ${
                            isChecked ? 'text-ink-900 font-display' : 'text-slate-700'
                          }`}>
                            {addon.title}
                          </h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                            Custom Add-on
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Customizer Action Footer */}
            <div className="pt-6 mt-6 border-t border-slate-200">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Tailored Package
                  </p>
                  <p className="text-sm font-bold text-ink-900 mt-0.5">
                    ₹999 Base Website + {selectedAddons.length} Custom Feature{selectedAddons.length !== 1 ? 's' : ''}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {selectedAddons.length > 0
                      ? 'I will provide an all-inclusive custom price based on your selection.'
                      : 'Select any add-ons above or talk to me directly.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCustomQuote}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Get Custom Quote on WhatsApp &rarr;</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Reassuring Guarantees Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-ink-900">Zero Technical Complexity</p>
              <p className="text-[11px] text-slate-500">I handle the copy, photos, mobile layout, and WhatsApp links.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-ink-900">Admissions-Season Ready</p>
              <p className="text-[11px] text-slate-500">Launch smoothly to capture peak neighborhood admissions.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-ink-900">Flexible Custom Scope</p>
              <p className="text-[11px] text-slate-500">Add exactly what your school needs. No wasted budget.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
