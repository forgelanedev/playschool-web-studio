import React from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import {
  Search,
  BookOpen,
  Clock,
  MessageCircle,
  TrendingUp,
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const PositioningValue: React.FC = () => {
  const { getWhatsAppUrl } = useWhatsApp();

  const pillars = [
    {
      icon: Search,
      color: "from-sky-500 to-blue-600",
      bgLight: "bg-sky-50",
      textColor: "text-sky-600",
      title: "1. Neighborhood Parent Discovery",
      headline: "Be the first preschool parents find on Google Maps & Search",
      desc: "Young parents don't look at telephone directories or physical noticeboards anymore. They search 'best play school near me'. We optimize your page with your exact neighborhood location, so local families find you first."
    },
    {
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      textColor: "text-amber-600",
      title: "2. Crystal-Clear Programs",
      headline: "Parents understand Playgroup, Nursery, LKG, UKG & Daycare in seconds",
      desc: "No more spending 20 minutes explaining age criteria and daily routines over phone calls. Your landing page cleanly showcases curriculum, age cutoffs, and teaching philosophy at a single glance."
    },
    {
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      title: "3. Facilities & Safety Showcase",
      headline: "Highlight CCTV, sanitized play zones, and child-safe infrastructure",
      desc: "Safety is the #1 anxiety for young parents. We visually emphasize your CCTV monitoring, first-aid protocols, hygienic kitchen, and rubber play floors so parents feel total peace of mind."
    },
    {
      icon: Clock,
      color: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
      title: "4. Timings, Meals & Transport",
      headline: "Eliminate repetitive phone inquiries with upfront answers",
      desc: "Display daily batch hours, extended daycare options, transport routes, and nutritionist-approved meal menus upfront so serious parents arrive ready to enroll."
    },
    {
      icon: MessageCircle,
      color: "from-emerald-500 to-green-600",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      title: "5. Frictionless WhatsApp Leads",
      headline: "1-Tap admission inquiries straight to your personal phone",
      desc: "Clunky 10-field web forms fail on mobile. Our landing pages feature high-converting 1-tap WhatsApp buttons that start an instant admission conversation before the parent loses interest."
    },
    {
      icon: TrendingUp,
      color: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50",
      textColor: "text-rose-600",
      title: "6. Admissions Season Acceleration",
      headline: "The ultimate marketing engine for your flyers, Instagram & banners",
      desc: "When you distribute pamphlets or run social media ads, send parents to an impressive, dedicated landing page instead of an empty profile. Watch your enquiry conversion rate double."
    }
  ];

  return (
    <section id="value" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-rose-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Designed For Parents & School Owners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-ink-900 tracking-tight leading-tight">
            Why Every Play School Needs A Dedicated Landing Page
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A play school website isn't just an online business card — it is your most powerful 24/7 admissions counsellor and trust builder.
          </p>
        </div>

        {/* The Real-World Comparison: Paper Flyers vs Our Admissions Engine */}
        <div className="mb-20">
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                  Reality Check For School Owners
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-ink-900 mt-2">
                  The Difference Between Lost Enquiries vs Maximum Admissions
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
                <span>ROI Fact:</span>
                <span className="text-emerald-700">1 Student Admission = 10x The Website Cost</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* The Old / Inefficient Way */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 text-rose-600">
                  <XCircle className="w-6 h-6 shrink-0" />
                  <h4 className="font-bold text-base text-ink-900">Without A Modern Dedicated Landing Page</h4>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Parents search Google Maps for "preschool near me" and end up enrolling in competitor schools that appear higher.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>You waste hours repeating simple details (timings, age criteria, curriculum) over endless phone calls.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Paper pamphlets get thrown away within minutes; parents cannot see live photos or verify CCTV safety.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>No streamlined contact mechanism; prospective parents hesitate and forget to call back.</span>
                  </li>
                </ul>
              </div>

              {/* The Modern High-Converting Way */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-teal-50/60 border border-emerald-200 shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
                  Recommended Solution
                </div>
                <div className="flex items-center gap-2.5 text-emerald-600">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h4 className="font-bold text-base text-ink-900">With Your Custom Play School Website (Starting ₹999)</h4>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Instant Credibility:</strong> Neighborhood parents discover your school 24/7 with professional photos and directions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Programs Made Clear:</strong> Parents explore Playgroup, Nursery & Daycare routines right from their smartphone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Safety & CCTV Confidence:</strong> Visual assurance of hygienic classrooms, child-safe rubber floors, and loving teachers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>1-Tap WhatsApp Admissions:</strong> Parents tap once, and their enquiry arrives directly in your WhatsApp inbox.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Key Benefits / Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-card hover:-translate-y-1 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bgLight} ${pillar.textColor} flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {pillar.title}
                    </span>
                    <h3 className="text-lg font-bold font-display text-ink-900 mt-1 leading-snug">
                      {pillar.headline}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Admissions impact</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    High Conversion <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Hook */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-ink-950 via-slate-900 to-ink-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Ready to give your play school the online presence it deserves?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Starting from just ₹999. I handle all copy, design, photos, and WhatsApp setup.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#pricing"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              See Pricing Plans
            </a>
            <a
              href={getWhatsAppUrl("Hi! I'd like to talk about getting an admissions website built for my play school.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Me</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
