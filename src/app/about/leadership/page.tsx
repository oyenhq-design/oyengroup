'use client';

import { useState, useEffect } from 'react';

export default function LeadershipPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Leadership
          </h1>
          <p
            className={`text-lg md:text-xl text-[#d1d5db] max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Visionary leaders driving innovation and excellence across OYEN Group.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-black border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Leadership Team</h2>
          <p className="text-base md:text-lg text-[#d1d5db] mb-6 leading-relaxed">
            Our leadership team brings decades of combined experience in the energy sector, blending deep technical
            expertise with strategic vision. Each leader is dedicated to advancing OYEN Group's mission of delivering
            integrated energy solutions while maintaining the highest standards of governance and responsibility.
          </p>

          <div className="mt-12 h-1 w-16 bg-[#d4af37]" />
        </div>
      </section>
    </main>
  );
}
