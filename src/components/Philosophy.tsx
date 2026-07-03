'use client';

import React from 'react';

export default function Philosophy() {
  return (
    <section className="relative bg-[#080808] py-28 md:py-40 overflow-hidden">
      {/* Background Element - Subtle Technical Blueprint & Engineering Grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="philosophy-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.25" />
              <circle cx="0" cy="0" r="1.5" fill="#d4af37" fillOpacity="0.4" />
            </pattern>
          </defs>
          {/* Main Grid */}
          <rect width="100%" height="100%" fill="url(#philosophy-grid)" />
          
          {/* Abstract Architectural Lines & Engineering Circles */}
          <circle cx="15%" cy="35%" r="180" fill="none" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="4 8" strokeOpacity="0.3" />
          <circle cx="15%" cy="35%" r="120" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="15%" y1="5%" x2="15%" y2="65%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.2" />
          <line x1="0%" y1="35%" x2="30%" y2="35%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.2" />
          
          <circle cx="85%" cy="65%" r="240" fill="none" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="5 5" strokeOpacity="0.3" />
          <circle cx="85%" cy="65%" r="90" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="85%" y1="35%" x2="85%" y2="95%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.2" />
          <line x1="65%" y1="65%" x2="100%" y2="65%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        {/* Section Label */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold">
            Our Philosophy
          </span>
        </div>

        {/* Large Typography Statement */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.2] tracking-tight">
            We don't build software. <br className="hidden md:inline" />
            We build the technology <span className="text-[#d4af37] font-normal">infrastructure</span> that enables organizations, industries, and future ecosystems to operate more intelligently.
          </h2>
        </div>

        {/* Supporting Copy - Two Columns with plenty of whitespace */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed">
              Technology evolves. <br />
              Platforms improve. <br />
              Markets change.
            </p>
            <p className="text-[#d4af37] text-lg md:text-xl font-medium mt-2">
              But strong infrastructure remains.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[#9ca3af] text-sm md:text-base leading-relaxed font-light">
              That's why OYEN GROUP is focused on creating technologies designed not just for today's challenges, but for the decades ahead.
            </p>
          </div>
        </div>

        {/* Optional Quote */}
        <div className="text-center border-t border-white/5 pt-10 max-w-xl mx-auto">
          <p className="text-xs md:text-sm text-[#9ca3af]/50 italic font-light tracking-wide">
            "Great companies build products. Lasting companies build foundations."
          </p>
        </div>
      </div>

      {/* Gold Divider Line Transitioning into Strategic Pillars */}
      <div className="absolute bottom-0 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto h-[1px] bg-[#d4af37]/30" />
      </div>
    </section>
  );
}
