'use client';

import { useState, useEffect } from 'react';

export default function GovernancePage() {
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
            Our Governance
          </h1>
          <p
            className={`text-lg md:text-xl text-[#d1d5db] max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Transparent oversight and accountability at the foundation of OYEN Group.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-black border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Corporate Governance</h2>
          <p className="text-base md:text-lg text-[#d1d5db] mb-6 leading-relaxed">
            OYEN Group maintains rigorous governance structures designed to ensure transparency, accountability, and
            ethical conduct across all operations. Our governance framework is aligned with international standards and
            best practices in corporate management.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Governance Principles</h3>
          <ul className="space-y-3 text-base md:text-lg text-[#d1d5db]">
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold mt-1">•</span>
              <span>Transparent decision-making and stakeholder engagement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold mt-1">•</span>
              <span>Ethical conduct and compliance with all regulatory requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold mt-1">•</span>
              <span>Risk management and continuous monitoring</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold mt-1">•</span>
              <span>Accountability to shareholders and the broader community</span>
            </li>
          </ul>

          <div className="mt-12 h-1 w-16 bg-[#d4af37]" />
        </div>
      </section>
    </main>
  );
}
