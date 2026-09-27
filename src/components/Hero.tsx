import React, { useState } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Zap,
  CheckCircle,
  Phone,
  Video,
  Radio,
  Eye,
  Star,
  Users
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { getWhatsAppUrl, phoneNumber } = useWhatsApp();
  const [activeProgram, setActiveProgram] = useState<'playgroup' | 'nursery' | 'kinder'>('nursery');
  const [isIslandExpanded, setIsIslandExpanded] = useState(false);

  const programs = {
    playgroup: {
      title: 'Playgroup',
      age: '1.5 - 2.5 Yrs',
      emoji: '🧸',
      desc: 'Sensory exploration, motor skills, loving social circle',
      bgClass: 'bg-amber-50/90 border-amber-300 text-amber-800'
    },
    nursery: {
      title: 'Nursery',
      age: '2.5 - 3.5 Yrs',
      emoji: '🎨',
      desc: 'Creative expression, phonics foundations, speech growth',
      bgClass: 'bg-rose-50/90 border-rose-300 text-rose-800'
    },
    kinder: {
      title: 'Kinder Prep',
      age: '3.5 - 5.5 Yrs',
      emoji: '📚',
      desc: 'Early math, reading fluency, STEM curiosity & sports',
      bgClass: 'bg-emerald-50/90 border-emerald-300 text-emerald-800'
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Pitch */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Category Focus & Price Anchor Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                Exclusively For Play Schools & Preschools
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm shadow-amber-500/20">
                <Zap className="w-3.5 h-3.5 fill-white" />
                Landing pages starting from ₹999
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink-900 tracking-tight leading-[1.12]">
              Turn Neighborhood Parents Into Enrolled Students With A{' '}
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">
                Modern Admissions Website
              </span>
            </h1>

            {/* High-Converting Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Most play schools rely on paper flyers and word of mouth, missing dozens of young families searching online. I build beautiful, mobile-first websites that showcase your safety, programs, and curriculum — turning parent visits into instant WhatsApp admission bookings.
            </p>

            {/* Primary Action Button CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              
              {/* Primary Action Button: Jump to Free Preview Generator */}
              <a
                href="#free-preview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-extrabold text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get A Free Mockup For Your School</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA: Transparent Pricing Plan (₹999) */}
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 shadow-sm transition-all"
              >
                <span>View ₹999 Plan & Customizer</span>
              </a>

              {/* Instant WhatsApp CTA */}
              <a
                href={getWhatsAppUrl("Hi! I run a preschool and I would like to see a demo admissions website for my school.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Micro-Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900 leading-tight">100% Done-For-You</p>
                  <p className="text-[11px] text-slate-500">Hassle-Free Setup</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900 leading-tight">100% Mobile</p>
                  <p className="text-[11px] text-slate-500">Parents Browse Here</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900 leading-tight">Zero Tech Skills</p>
                  <p className="text-[11px] text-slate-500">I Handle Everything</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900 leading-tight">WhatsApp Leads</p>
                  <p className="text-[11px] text-slate-500">Direct To You</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Simulated High-Converting Preschool Mobile Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Background Radiant Aura */}
            <div className="absolute -top-16 -right-16 w-96 h-96 bg-gradient-to-br from-rose-400/25 via-amber-300/20 to-emerald-300/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-14 -left-14 w-80 h-80 bg-gradient-to-tr from-emerald-300/20 to-sky-300/20 rounded-full blur-3xl pointer-events-none" />

            {/* 3D Perspective Wrapper */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] phone-perspective-container">
              
              {/* Floating Glassmorphism Alert 1 (Top Left, elevated): Parent Admission Lead */}
              <div className="absolute -top-8 -left-5 sm:-left-10 z-40 bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-emerald-100 flex items-center gap-3 animate-bounce shadow-emerald-500/15 max-w-[270px] pointer-events-auto">
                <div className="relative w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/35">
                  <span className="animate-ping absolute -inset-0.5 rounded-xl bg-emerald-400 opacity-60"></span>
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-500 relative z-10" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">New Admission Lead</span>
                  </div>
                  <p className="text-xs font-bold text-ink-900 mt-0.5 leading-tight">Priya M. requesting Playgroup seat for Aryan (2.5 yrs)</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Just now • via 1-Tap WhatsApp</p>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 2 (Top Right): Verified Google Trust Badge */}
              <div className="absolute top-14 -right-4 sm:-right-8 z-40 bg-white/95 backdrop-blur-xl px-3.5 py-2.5 rounded-2xl shadow-xl border border-amber-200/90 flex items-center gap-2.5 shadow-slate-900/10 pointer-events-auto">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs shadow-inner">
                  ⭐
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-ink-900 font-display">4.9 / 5.0 Rating</span>
                  </div>
                  <p className="text-[10px] text-emerald-600 font-bold">120+ Enrolled Kids</p>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 3 (Mid-Right / Bottom): Contacts */}
              <a
                href={getWhatsAppUrl("Hi! I would like to chat about getting a website for my play school.")}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-64 -right-5 sm:-right-10 z-40 bg-ink-950/95 hover:bg-slate-900 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-slate-700/80 text-white flex items-center gap-3 max-w-[270px] pointer-events-auto cursor-pointer group transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Contacts</span>
                  </div>
                  <p className="font-mono font-bold text-slate-100 mt-1">+91 80150 09377</p>
                  <p className="font-mono font-bold text-slate-300 mt-0.5">+91 81227 74287</p>
                </div>
              </a>

              {/* 3D Tilted Phone Chassis */}
              <div className="phone-3d-tilt">
                
                {/* Outer Titanium Bezel with Hardware Buttons */}
                <div className="phone-titanium-bezel relative">
                  
                  {/* Realistic Antenna Isolation Bands */}
                  <div className="antenna-band -left-[10px] top-16" />
                  <div className="antenna-band -left-[10px] bottom-20" />
                  <div className="antenna-band -right-[10px] top-16" />
                  <div className="antenna-band -right-[10px] bottom-20" />

                  {/* Hardware Buttons: Left Side */}
                  {/* Action Button with Amber Accent */}
                  <div 
                    className="absolute -left-[12px] top-22 w-[3.5px] h-6 bg-slate-700 hover:bg-amber-500 rounded-l-sm transition-colors border-l border-amber-400/50 shadow-xs cursor-pointer"
                    title="Action Button"
                  />
                  {/* Volume Up */}
                  <div 
                    className="absolute -left-[12px] top-32 w-[3.5px] h-12 bg-slate-700 rounded-l-sm shadow-xs border-l border-slate-500/60"
                    title="Volume Up"
                  />
                  {/* Volume Down */}
                  <div 
                    className="absolute -left-[12px] top-48 w-[3.5px] h-12 bg-slate-700 rounded-l-sm shadow-xs border-l border-slate-500/60"
                    title="Volume Down"
                  />
                  
                  {/* Hardware Buttons: Right Side */}
                  {/* Power Button */}
                  <div 
                    className="absolute -right-[12px] top-32 w-[3.5px] h-16 bg-slate-700 rounded-r-sm shadow-xs border-r border-slate-500/60"
                    title="Power Button"
                  />
                  {/* Camera Control Haptic Button */}
                  <div 
                    className="absolute -right-[12px] top-56 w-[3.5px] h-12 bg-slate-800 rounded-r-sm border border-slate-600/70 shadow-inner"
                    title="Camera Control"
                  />

                  {/* Inner Phone Screen Container */}
                  <div className="rounded-[40px] bg-slate-950 overflow-hidden border border-slate-800/90 relative shadow-inner">
                    
                    {/* Glass Reflection Sheen */}
                    <div className="phone-screen-sheen" />
                    
                    {/* Dynamic Moving Glint Sweep across glass */}
                    <div className="phone-specular-sweep" />

                    {/* Top Status Bar with Interactive Dynamic Island */}
                    <div className="h-10 bg-slate-950 px-5 flex items-center justify-between text-[11px] text-white/90 shrink-0 font-semibold relative z-40 border-b border-slate-900">
                      
                      {/* Clock */}
                      <span className="font-mono text-xs text-slate-200">9:41</span>
                      
                      {/* Interactive Dynamic Island */}
                      <div 
                        onClick={() => setIsIslandExpanded(!isIslandExpanded)}
                        className={`transition-all duration-300 bg-black rounded-full px-2.5 py-1 flex items-center justify-between shadow-inner border border-slate-800/80 cursor-pointer ${
                          isIslandExpanded ? 'w-44 h-7' : 'w-28 h-5.5'
                        }`}
                        title="Click to toggle Dynamic Island"
                      >
                        {/* Camera Lens */}
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {/* Interactive Status Display */}
                        {isIslandExpanded ? (
                          <div className="flex items-center gap-1.5 text-[8px] text-emerald-400 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>Tour Live: 8015009377</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-[8px] font-bold text-emerald-400 uppercase tracking-tight">
                            <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                            <span>Live Tour</span>
                          </div>
                        )}

                        {/* Sensor Dot */}
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                      </div>

                      {/* Network & Battery Pill */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <span className="text-[10px] font-bold font-mono">5G</span>
                        <div className="w-4.5 h-2.5 border border-slate-400 rounded-xs p-[1px] flex items-center">
                          <div className="h-full bg-emerald-400 rounded-xs w-4/5" />
                        </div>
                      </div>

                    </div>

                    {/* Simulated School Mobile Screen Content */}
                    <div className="p-3.5 space-y-3 bg-[#FAF8F5] pb-6 text-left relative z-20">
                      
                      {/* School Top Nav Bar */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-xl bg-white border-2 border-emerald-500 flex items-center justify-center text-xs shadow-xs">
                            🌱
                          </div>
                          <div>
                            <span className="text-xs font-black text-ink-900 font-display block leading-none">
                              Little Acorns Pre-K
                            </span>
                            <span className="text-[9px] text-slate-500 font-medium">Indiranagar • Bangalore</span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-100 text-emerald-700 flex items-center gap-1 border border-emerald-200 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Admissions 2025-26
                        </span>
                      </div>

                      {/* High-Impact Hero Card */}
                      <div className="rounded-2xl p-4 bg-gradient-to-br from-rose-500 via-pink-600 to-amber-500 text-white shadow-md space-y-2 relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xs pointer-events-none" />
                        
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[9px] font-bold backdrop-blur-xs">
                          <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                          <span>Ages 1.5 – 6 Years</span>
                        </div>

                        <h4 className="text-sm font-black leading-snug font-display text-white">
                          Where Joyful Play Meets Lifelong Confidence
                        </h4>
                        
                        <p className="text-[10px] text-white/95 leading-tight">
                          Live CCTV parent app • Child-safe sensory gym • Loving certified educators
                        </p>

                        <div className="pt-1 flex items-center gap-2">
                          <a
                            href={getWhatsAppUrl("Hi! I would like to book a tour of Little Acorns Preschool.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-white text-emerald-700 font-bold text-[10px] shadow-sm flex items-center gap-1 hover:scale-105 transition-transform"
                          >
                            <MessageCircle className="w-3 h-3 fill-emerald-600 text-white" />
                            <span>Book School Tour</span>
                          </a>
                          <span className="text-[9px] text-white/80 font-medium">Free Welcome Kit</span>
                        </div>
                      </div>

                      {/* Interactive Programs Selector */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-extrabold text-slate-800">Our Programs (Tap to View)</span>
                          <span className="text-rose-600 font-bold text-[9px]">Ages 1.5 - 6 Yrs</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          <button
                            type="button"
                            onClick={() => setActiveProgram('playgroup')}
                            className={`p-2 rounded-xl border text-center transition-all ${
                              activeProgram === 'playgroup'
                                ? 'bg-amber-100 border-amber-400 shadow-sm scale-102 font-bold'
                                : 'bg-white border-slate-200 hover:border-amber-300'
                            }`}
                          >
                            <span className="text-sm block">🧸</span>
                            <p className="text-[9px] font-bold text-ink-900 mt-0.5">Playgroup</p>
                            <p className="text-[8px] text-slate-500">1.5 - 2.5 Y</p>
                          </button>

                          <button
                            type="button"
                            onClick={() => setActiveProgram('nursery')}
                            className={`p-2 rounded-xl border text-center transition-all ${
                              activeProgram === 'nursery'
                                ? 'bg-rose-100 border-rose-400 shadow-sm scale-102 font-bold'
                                : 'bg-white border-slate-200 hover:border-rose-300'
                            }`}
                          >
                            <span className="text-sm block">🎨</span>
                            <p className="text-[9px] font-bold text-rose-700 mt-0.5">Nursery</p>
                            <p className="text-[8px] text-rose-600 font-semibold">2.5 - 3.5 Y</p>
                          </button>

                          <button
                            type="button"
                            onClick={() => setActiveProgram('kinder')}
                            className={`p-2 rounded-xl border text-center transition-all ${
                              activeProgram === 'kinder'
                                ? 'bg-emerald-100 border-emerald-400 shadow-sm scale-102 font-bold'
                                : 'bg-white border-slate-200 hover:border-emerald-300'
                            }`}
                          >
                            <span className="text-sm block">📚</span>
                            <p className="text-[9px] font-bold text-ink-900 mt-0.5">Kinder Prep</p>
                            <p className="text-[8px] text-slate-500">3.5 - 5.5 Y</p>
                          </button>
                        </div>

                        {/* Selected Program Mini Highlight */}
                        <div className={`p-2 rounded-xl border text-[9px] leading-tight flex items-center justify-between ${programs[activeProgram].bgClass}`}>
                          <div>
                            <span className="font-extrabold">{programs[activeProgram].title}:</span> {programs[activeProgram].desc}
                          </div>
                          <span className="text-xs shrink-0 ml-1.5">{programs[activeProgram].emoji}</span>
                        </div>
                      </div>

                      {/* Safety & Trust Card with Live CCTV Beacon */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1 font-bold text-slate-900">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Campus Safety Assured</span>
                          </div>
                          <span className="text-[8px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            <span>CAM 02 • LIVE 1080p</span>
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[9px] text-slate-600">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-2.5 h-2.5 text-emerald-500" /> 1:8 Teacher Ratio
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-2.5 h-2.5 text-emerald-500" /> Sanitized Play Area
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-2.5 h-2.5 text-emerald-500" /> Organic Snack Plan
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-2.5 h-2.5 text-emerald-500" /> Rubber Anti-Shock Floor
                          </span>
                        </div>
                      </div>

                      {/* Floating Bottom 1-Tap Admission Conversion Dock */}
                      <a
                        href={getWhatsAppUrl("Hi! I would like to enquire about admission seats at Little Acorns.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-between shadow-md shadow-emerald-600/25 transition-all w-full cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 text-[10px] font-bold">
                          <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                          <span>WhatsApp Admission Enquiry</span>
                        </div>
                        <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-md font-semibold text-white">
                          1-Tap Chat
                        </span>
                      </a>

                      {/* Developer Contact Footer Banner inside Simulated Phone */}
                      <a
                        href={getWhatsAppUrl("Hi! I'm interested in building a website for my play school.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-100 hover:bg-emerald-50 rounded-lg p-1.5 text-center text-[8px] text-slate-600 hover:text-emerald-700 flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span>Built by TinySteps Studio</span>
                        <span className="font-mono font-bold text-emerald-600 flex items-center gap-1">
                          <MessageCircle className="w-2.5 h-2.5 fill-emerald-600 text-emerald-600" />
                          +91 80150 09377
                        </span>
                      </a>

                      {/* iOS Home Indicator Bar */}
                      <div className="pt-1 flex justify-center">
                        <div className="w-24 h-1 bg-slate-300 rounded-full" />
                      </div>

                    </div>

                  </div>

                  {/* Speaker Holes & USB-C Port Cutouts at Phone Chin */}
                  <div className="flex items-center justify-center gap-3 pt-1.5 pb-0.5">
                    {/* Left Speaker Dots */}
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                    </div>
                    {/* USB-C Port */}
                    <div className="w-6 h-1.5 rounded-full bg-slate-800 border border-slate-700 shadow-inner" />
                    {/* Right Speaker Dots */}
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                    </div>
                  </div>

                </div>

              </div>

              {/* Realistic 3D Ground Shadow */}
              <div className="phone-ground-shadow" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
