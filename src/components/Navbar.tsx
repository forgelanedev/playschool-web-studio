import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="absolute top-5 left-4 sm:top-7 sm:left-8 z-30">
      <a href="#" className="inline-flex items-center gap-3 group select-none">
        {/* Brand Logo in crisp green outline */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border-2 border-emerald-500 shadow-sm shadow-emerald-500/15 group-hover:scale-105 group-hover:border-emerald-600 transition-all flex items-center justify-center text-xl sm:text-2xl">
          🌱
        </div>
        <div>
          <span className="font-display font-black text-lg sm:text-xl tracking-tight text-ink-900 group-hover:text-emerald-600 transition-colors">
            TinySteps<span className="text-emerald-600">.studio</span>
          </span>
          <p className="text-[11px] font-medium text-slate-500 tracking-tight hidden sm:block">
            Websites for Play Schools
          </p>
        </div>
      </a>
    </header>
  );
};
