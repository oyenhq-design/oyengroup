'use client';

import { useState, useEffect } from 'react';

export default function OfficesPage() {
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
            Our Offices & Facilities
          </h1>
          <p
            className={`text-lg md:text-xl text-[#d1d5db] max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Global presence, local expertise. Operating from strategic locations worldwide.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-black border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Global Operations</h2>
          <p className="text-base md:text-lg text-[#d1d5db] mb-8 leading-relaxed">
            OYEN Group maintains a global network of offices and facilities strategically positioned to serve markets
            across multiple continents. Our facilities are equipped with state-of-the-art technology and staffed with
            experienced professionals dedicated to delivering exceptional results.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Facility Overview</h3>
          <p className="text-base md:text-lg text-[#d1d5db] mb-6 leading-relaxed">
            Each location operates with the highest standards of safety, environmental responsibility, and operational
            excellence. Our facilities support upstream exploration and development, midstream logistics coordination,
            and downstream distribution operations.
          </p>

          <p className="text-base md:text-lg text-[#d1d5db] mb-6 leading-relaxed">
            Whether serving regional markets or global operations, OYEN Group's office network ensures local knowledge
            with global reach—enabling rapid response to market opportunities and client needs.
          </p>

          <div className="mt-12 h-1 w-16 bg-[#d4af37]" />
        </div>
      </section>
    </main>
  );
}
