import React, { useEffect } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  MessageCircle,
  CheckCircle2,
  Lock,
  Heart,
  HelpCircle,
  Building2
} from 'lucide-react';

interface TermsProps {
  onNavigateHome: () => void;
}

export const TermsAndConditions: React.FC<TermsProps> = ({ onNavigateHome }) => {
  const { getWhatsAppUrl } = useWhatsApp();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 font-sans selection:bg-rose-100 selection:text-rose-700">
      
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
            href={getWhatsAppUrl("Hi! I have a question regarding the terms of service for play school websites.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Questions? Chat</span>
          </a>
        </div>
      </nav>

      {/* Main Document Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Document Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            Official Service Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-ink-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Last Updated: September 2026 • Effective for all play school website design and customization services.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">1</span>
              <span>Services Provided</span>
            </h2>
            <p>
              TinySteps Studio provides bespoke web design, landing page creation, mobile optimization, content formatting, and WhatsApp lead integration specifically for play schools, preschools, daycares, kindergartens, and early learning centers. 
            </p>
            <p>
              All services are delivered as a done-for-you technical solution to help schools present their programs, showcase safety infrastructure, and accept admission inquiries from local neighborhood parents.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">2</span>
              <span>Pricing, Startup Plan & Custom Upgrades</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Startup Base Plan (₹999):</strong> Covers a complete, mobile-responsive single-page admissions landing page including program overviews, campus highlights, timings, location map, and direct 1-tap WhatsApp lead buttons.
              </li>
              <li>
                <strong>Custom Add-ons:</strong> Additional features (such as campus photo galleries, online registration forms, CCTV hubs, brand-matching, and local SEO) are quoted and agreed upon mutually prior to commencement.
              </li>
              <li>
                <strong>No Hidden Recurring Fees:</strong> There are no secret agency retainers or hidden recurring charges from TinySteps Studio for the base landing page.
              </li>
            </ul>
          </section>

          {/* Section 3: Child Safety & Media */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">3</span>
              <span>Child Safety, Photos & Media Rights</span>
            </h2>
            <p>
              The safety and privacy of young children is paramount:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                The school client represents that it possesses the necessary parental consent, media releases, and legal authorization for all photographs, videos, and names of enrolled students provided for inclusion on the website.
              </li>
              <li>
                TinySteps Studio acts solely as a design service provider incorporating the media supplied by the school management and assumes that all school imagery respects children's privacy.
              </li>
              <li>
                Stock photos of early childhood play and learning may be used upon client request or where authentic school photographs are not yet available.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">4</span>
              <span>Client Review & Approval Process</span>
            </h2>
            <p>
              Once your initial design is assembled, a private preview link will be sent to your WhatsApp or email for review.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                Clients are invited to review text, contact numbers, batch timings, and photographs.
              </li>
              <li>
                Revisions are carried out promptly to ensure your school is accurately represented.
              </li>
              <li>
                Once the client formally confirms approval via WhatsApp or email, the website will be deployed live to the public internet.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">5</span>
              <span>Domain Names & Third-Party Platforms</span>
            </h2>
            <p>
              TinySteps Studio assists in linking custom domain names (e.g. <code>yourschool.com</code> or <code>.in</code>). 
            </p>
            <p>
              Domain names are purchased through accredited registrars (e.g. GoDaddy, Namecheap) under the school's legal ownership. Any annual domain renewal fees are the direct responsibility of the school with their chosen registrar.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">6</span>
              <span>WhatsApp Integration & Communications</span>
            </h2>
            <p>
              WhatsApp admission inquiries are routed directly between visiting parents and your registered phone number via official WhatsApp deep-linking (<code>https://wa.me/</code>). 
            </p>
            <p>
              TinySteps Studio does not monitor, store, or interfere with private admissions conversations between parents and school authorities.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">7</span>
              <span>Intellectual Property & Ownership</span>
            </h2>
            <p>
              Upon complete payment of the agreed service fees, the play school holds full rights to use and display the website content, graphics, and layout for its ongoing operations. School logos and trademarks remain the sole property of the school.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold font-display text-ink-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">8</span>
              <span>Contact & Support</span>
            </h2>
            <p>
              For any questions, modifications, or clarifications regarding these terms, school owners can contact us directly via WhatsApp or email. We are dedicated to providing early childhood educators with a transparent, trusted experience.
            </p>
          </section>

        </div>

        {/* Bottom Return Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-ink-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Homepage</span>
          </button>
        </div>

      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} TinySteps Web Studio. Crafted for Early Childhood Educators.</p>
      </footer>

    </div>
  );
};
