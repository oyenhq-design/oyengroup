'use client';

import { useState, useEffect } from 'react';

export default function BrandPage() {
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
            Our Brand
          </h1>
          <p
            className={`text-lg md:text-xl text-[#d1d5db] max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            The identity and values that define OYEN Group's mission in the energy landscape.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-black border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Brand Identity</h2>
            <p className="text-base md:text-lg text-[#d1d5db] mb-6 leading-relaxed">
              The OYEN Group brand represents a commitment to integrated energy solutions, technological excellence, and
              sustainable practices. Our brand identity is rooted in the core values that guide every decision and
              initiative across our organization.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Core Values</h3>
            <ul className="space-y-3 text-base md:text-lg text-[#d1d5db]">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">•</span>
                <span><strong>Excellence:</strong> Delivering superior performance across all operations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">•</span>
                <span><strong>Innovation:</strong> Pioneering solutions that shape the energy future</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">•</span>
                <span><strong>Responsibility:</strong> Building sustainable energy systems for generations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold mt-1">•</span>
                <span><strong>Integrity:</strong> Maintaining the highest standards of ethical conduct</span>
              </li>
            </ul>

            <p className="text-base md:text-lg text-[#d1d5db] mt-8 leading-relaxed">
              Our visual identity—the OYEN wordmark and our refined color palette of black and gold—reflects our
              commitment to sophistication, stability, and forward-thinking leadership in the energy sector.
            </p>
          </div>

          {/* Gold accent line */}
          <div className="mt-12 h-1 w-16 bg-[#d4af37]" />
        </div>
      </section>
    </main>
  );
}
