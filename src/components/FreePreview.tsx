import React, { useState } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Building2,
  MapPin
} from 'lucide-react';

export const FreePreview: React.FC = () => {
  const { getWhatsAppUrl } = useWhatsApp();

  const [schoolName, setSchoolName] = useState('Sunshine Valley Play School');
  const [city, setCity] = useState('Bangalore');
  const [focus, setFocus] = useState('Playgroup & Montessori');
  const [themeColor, setThemeColor] = useState('#F43F5E');

  const colorOptions = [
    { label: 'Warm Rose', hex: '#F43F5E', gradient: 'from-rose-500 to-amber-500' },
    { label: 'Sage Emerald', hex: '#059669', gradient: 'from-emerald-600 to-teal-600' },
    { label: 'Golden Honey', hex: '#D97706', gradient: 'from-amber-600 to-orange-500' },
    { label: 'Royal Violet', hex: '#7C3AED', gradient: 'from-violet-600 to-indigo-600' },
    { label: 'Sky Blue', hex: '#0284C7', gradient: 'from-sky-600 to-blue-600' },
  ];

  const activeColorObj = colorOptions.find((c) => c.hex === themeColor) || colorOptions[0];

  const handleClaimPreview = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const message = `Hi! I would like to get a Free Website Preview for my play school:
- School Name: ${schoolName || 'My Preschool'}
- Location: ${city || 'Our City'}
- Focus: ${focus}
- Preferred Vibe: ${activeColorObj.label}

Can you prepare an interactive sample mockup for my school?`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="free-preview" className="py-20 sm:py-28 bg-gradient-to-b from-cream-50 via-amber-50/30 to-cream-50 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            100% Free • No Payment Required
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-ink-900 tracking-tight leading-tight">
            See Your School Website In Action Before You Pay A Single Rupee
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Send me your play school name and city. I'll personally design a custom interactive homepage mockup tailored to your school and send you a private preview link directly on WhatsApp.
          </p>
        </div>

        {/* Interactive Preview Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold font-display text-ink-900">
                Interactive Mockup Generator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Type your details below and watch the live preview update in real-time &rarr;
              </p>
            </div>

            <form onSubmit={handleClaimPreview} className="space-y-4">
              
              {/* School Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Play School / Preschool Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="e.g. Little Stars Early Academy"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    required
                  />
                </div>
              </div>

              {/* City / Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  City & Locality
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Koramangala, Bangalore"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    required
                  />
                </div>
              </div>

              {/* School Focus */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Main Focus / Offerings
                </label>
                <select
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium bg-white"
                >
                  <option value="Playgroup & Montessori">Playgroup & Montessori</option>
                  <option value="Vibrant Play School & Daycare">Vibrant Play School & Daycare</option>
                  <option value="Daycare & Infant Care">Daycare & Infant Care</option>
                  <option value="Pre-K, LKG & UKG Formal School Prep">Pre-K, LKG & UKG Formal School Prep</option>
                  <option value="STEM & Nature Discovery">STEM & Nature Discovery</option>
                </select>
              </div>

              {/* Theme Color Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Pick Your School's Preferred Brand Color
                </label>
                <div className="flex items-center gap-2 pt-1">
                  {colorOptions.map((opt) => (
                    <button
                      key={opt.hex}
                      type="button"
                      onClick={() => setThemeColor(opt.hex)}
                      className={`w-8 h-8 rounded-full transition-transform flex items-center justify-center ${
                        themeColor === opt.hex ? 'scale-110 ring-2 ring-offset-2 ring-slate-800' : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: opt.hex }}
                      title={opt.label}
                    >
                      {themeColor === opt.hex && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 ml-2 font-medium">
                    {activeColorObj.label}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 group active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Claim My Free Preview on WhatsApp &rarr;</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  ⚡ Takes 10 seconds • 100% Free • No commitment to buy
                </p>
              </div>

            </form>

          </div>

          {/* Right Column: Live Generated Preview Mockup Card */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="w-full max-w-[420px] rounded-3xl p-5 sm:p-6 bg-slate-900 text-white shadow-2xl border border-slate-700 relative overflow-hidden">
              
              {/* Top simulation badge */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
                <span className="text-amber-400 font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  LIVE PREVIEW MOCKUP
                </span>
                <span className="text-slate-400">Mobile Ready</span>
              </div>

              {/* Mini Generated Header */}
              <div className="rounded-2xl p-5 text-white space-y-3 bg-gradient-to-br transition-all duration-500 shadow-md relative overflow-hidden"
                style={{ backgroundColor: themeColor }}
              >
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 backdrop-blur-xs">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Admissions Open 2025-26</span>
                </div>

                <h4 className="text-xl font-black font-display tracking-tight leading-snug">
                  {schoolName || 'Your School Name Here'}
                </h4>

                <p className="text-xs text-white/90">
                  {focus} • Premier Early Learning Center
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span>📍 {city || 'Your Neighborhood'}</span>
                  <span className="bg-white text-ink-900 px-2 py-0.5 rounded-md font-bold text-[10px]">
                    1-Tap WhatsApp
                  </span>
                </div>
              </div>

              {/* Mini Features List */}
              <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-xs">
                <p className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">
                  What Will Be Included In Your Free Mockup:
                </p>
                <div className="space-y-1.5 text-slate-300 text-[11px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your exact school name, photos & neighborhood landmarks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Programs breakdown matching your specific curriculum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Live WhatsApp inquiry button routed directly to your number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CCTV safety & hygiene reassurance badges</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                <p className="text-xs font-semibold text-amber-300">
                  🎁 Delivered directly to your WhatsApp with zero commitment.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
