import React from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import {
  Heart,
  Sparkles,
  MessageCircle
} from 'lucide-react';

export const EarlyLearningSection: React.FC = () => {
  const { getWhatsAppUrl } = useWhatsApp();

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-rose-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-200 mb-4">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            Niche Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-ink-900 tracking-tight leading-tight">
            Crafted Specifically For The Growing Early Learning Community
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Preschool websites require a completely different design psychology than e-commerce or corporate SaaS. Here is why choosing an early learning specialist makes all the difference.
          </p>
        </div>

        {/* 3 Pillars of Preschool Web Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Emotional Parent Psychology */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-ink-900">
              Parent-First Emotional Trust
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Parents aren't buying software — they are handing over their most precious treasure in the world. Our designs prioritize safety indicators, hygienic food routines, CCTV transparency, and teacher warmth to soothe parent anxieties.
            </p>
            <div className="pt-2 text-xs font-bold text-rose-600 flex items-center gap-1">
              <span>Built for nervous first-time parents</span>
            </div>
          </div>

          {/* Card 2: Professional Yet Warm (Not Childish) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-ink-900">
              Warm & Vibrant (Never Cheap or Cartoonish)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generic web freelancers either make preschool sites look like boring corporate law firms or infantile cartoon clip-art. We strike the perfect balance: joyful and warm for early childhood, but polished and premium for school directors.
            </p>
            <div className="pt-2 text-xs font-bold text-amber-700 flex items-center gap-1">
              <span>Design studio level typography & aesthetic</span>
            </div>
          </div>

          {/* Card 3: Mobile & WhatsApp First */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-ink-900">
              Built For Busy Working Parents On The Go
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              85%+ of preschool website visits happen on smartphones while parents are commuting or between meetings. Our pages load in under 1.5 seconds and let parents enquire via 1-tap WhatsApp without typing lengthy forms.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
              <span>Instant lead generation directly to your phone</span>
            </div>
          </div>

        </div>

        {/* Narrative Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-cream-100 to-amber-50/60 border border-amber-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              My Commitment To School Owners
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-ink-900">
              "You focus on educating children. I will handle your entire website."
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No technical jargon, no server management, no confusing dashboards. Simply send me your school photos and details on WhatsApp, and I will deliver an admissions-ready website for your school.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl("Hi! I'd like to consult with you about building a website for my play school.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-ink-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Let's Talk On WhatsApp &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
