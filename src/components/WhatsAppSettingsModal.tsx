import React, { useState } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';
import { X, Phone, CheckCircle2, MessageCircle } from 'lucide-react';

export const WhatsAppSettingsModal: React.FC = () => {
  const { phoneNumber, setPhoneNumber, isSettingsOpen, setIsSettingsOpen, getWhatsAppUrl } = useWhatsApp();
  const [inputVal, setInputVal] = useState(phoneNumber);
  const [saved, setSaved] = useState(false);

  if (!isSettingsOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneNumber(inputVal);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setIsSettingsOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={() => setIsSettingsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink-900 font-display">WhatsApp Pitch Number</h3>
            <p className="text-xs text-slate-500">Configure where client inquiries will be routed</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          Every <span className="font-semibold text-emerald-600">"WhatsApp Me"</span> button and enquiry form across this portfolio opens a direct WhatsApp chat with this number.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Your WhatsApp Phone Number (With Country Code)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="e.g. 918015009377"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-ink-900 font-mono text-sm"
                required
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Format: Country code without spaces or symbols (e.g. 91 followed by your 10-digit number).
            </p>
          </div>

          {/* Quick Preset Button */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Default WhatsApp Number:</span>
            <div>
              <button
                type="button"
                onClick={() => setInputVal("918015009377")}
                className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium border text-left transition-colors flex items-center justify-between ${
                  inputVal === "918015009377"
                    ? "bg-emerald-50 border-emerald-400 text-emerald-800 font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div>
                  <span className="block text-[10px] font-sans text-slate-500 font-normal">WhatsApp Number</span>
                  <span>+91 80150 09377</span>
                </div>
                <span className="text-[10px] bg-emerald-600 text-white font-sans px-2 py-0.5 rounded-md font-semibold">
                  Default
                </span>
              </button>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
                  <span>Number Saved!</span>
                </>
              ) : (
                <span>Save WhatsApp Number</span>
              )}
            </button>

            <a
              href={getWhatsAppUrl("Hi, this is a test message from your portfolio website settings!")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              Test WhatsApp Link Now &rarr;
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
