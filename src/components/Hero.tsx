'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [activeNav, setActiveNav] = useState('results');

  const navItems = [
    { id: 'results', label: 'Results Announcement' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'powered', label: 'Powered by OYEN' },
  ];

  return (
    <section
      className="h-screen bg-cover bg-center relative flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1513821920989-ce674ee5551d?w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* Main Content - Left Aligned */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Label */}
            <p className="text-sm tracking-widest text-[#d4af37] uppercase font-semibold mb-6">
              Results Announcement
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white mb-6">
              The Future of Energy Starts Here
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Pioneering sustainable solutions that power tomorrow's world with innovation, 
              integrity, and commitment to excellence.
            </p>

            {/* Minimal CTA Button */}
            <Link
              href="/contact"
              className="inline-block border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-black transition duration-300"
            >
              Explore Our Vision
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-black/80 backdrop-blur-sm border-t border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start gap-12 py-6 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`text-sm font-medium whitespace-nowrap transition pb-1 border-b-2 ${
                  activeNav === item.id
                    ? 'text-white border-b-[#d4af37]'
                    : 'text-[#9ca3af] border-b-transparent hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
