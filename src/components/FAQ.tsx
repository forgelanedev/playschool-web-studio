import React, { useState } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need any technical knowledge or computer skills to have this website?",
      a: "None whatsoever! You don't have to write a single line of code, configure servers, or learn complex software. You simply send me your school logo, photos, program details, and address on WhatsApp. I handle all the design, mobile optimization, writing, and setup for you end-to-end."
    },
    {
      q: "Why do landing pages start from just ₹999? Are there any hidden fees?",
      a: "There are zero hidden costs. I've streamlined the entire design process specifically for preschools so school owners can get a world-class landing page without paying inflated agency retainers (which typically run ₹15,000 to ₹30,000). The ₹999 Starter package includes your full mobile-responsive landing page ready to accept WhatsApp admissions inquiries."
    },
    {
      q: "How will parent admission enquiries reach me?",
      a: "Directly into your personal WhatsApp inbox and phone! Every button on your landing page ('Book a Tour', 'Enquire for Playgroup', 'Fee Structure') is programmed to open a WhatsApp chat directly with your number, pre-filled with the parent's chosen program so you can respond instantly."
    },
    {
      q: "How quickly will my website be completed and live?",
      a: "As soon as you share your school photos, timings, and details on WhatsApp, I start working on your design right away. You will receive a private preview link to review, and once you are satisfied, we launch your live website immediately."
    },
    {
      q: "Can I update photos later for Annual Day, Sports Day, or festival celebrations?",
      a: "Yes! Whenever you hold a new event, festival celebration, or summer camp, simply message me the photos on WhatsApp and I will update your website gallery promptly so your page always looks fresh and active."
    },
    {
      q: "What if I already have a school domain (e.g. myschool.com)?",
      a: "I can easily connect your new high-converting landing page to your existing domain name. If you don't have a domain yet, I will guide you on how to get one affordably (usually under ₹500–₹800/yr) with zero markup."
    },
    {
      q: "How do we get started?",
      a: "Simply tap the 'WhatsApp Me' button anywhere on this page! Tell me your school name and city, and we can start with a Free Preview mockup or kick off your website immediately."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      
      {/* Background accent */}
      <div className="ambient-glow-center" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-200/80 text-slate-800 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            Clear Answers For School Owners
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-ink-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about getting an admissions website for your preschool.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-ink-900 hover:text-rose-600 transition-colors"
                >
                  <span className="text-sm sm:text-base font-display">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-rose-100 text-rose-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Hook */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-ink-900">Have a specific question not listed here?</p>
            <p className="text-xs text-slate-500">I respond within minutes on WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hi! I have a question about getting a website for my preschool.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
