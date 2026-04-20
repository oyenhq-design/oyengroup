'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LeaderProfilePage() {
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
            Leadership Profile
          </h1>
          <p
            className={`text-lg md:text-xl text-[#d1d5db] max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Driving innovation and strategic direction at OYEN Group.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-black border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-base md:text-lg text-[#d1d5db] mb-8 leading-relaxed">
            This section contains detailed information about our leadership team members, their background, expertise,
            and contributions to OYEN Group.
          </p>

          <Link href="/about/leadership" className="inline-flex items-center group text-[#d4af37] font-semibold">
            <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span className="relative pb-1">
              Back to Leadership
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
