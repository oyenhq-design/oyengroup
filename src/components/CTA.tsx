'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-[#0a0a0a] border border-[#1f2937]/50 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          {/* Animated/Interactive dot wave SVG background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 mix-blend-screen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 300"
              className="w-full h-full object-cover"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="dots-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                  <stop offset="40%" stopColor="#e5c158" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#dda13c" stopOpacity="0.55" />
                  <stop offset="90%" stopColor="#d4af37" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Overlapping sine wave paths with dashes simulating a particle grid */}
              <path
                d="M -50 150 Q 300 30 650 180 T 1250 130"
                fill="none"
                stroke="url(#dots-grad)"
                strokeWidth="5"
                strokeDasharray="1, 15"
                strokeLinecap="round"
              />
              <path
                d="M -50 170 Q 280 50 630 200 T 1250 150"
                fill="none"
                stroke="url(#dots-grad)"
                strokeWidth="4"
                strokeDasharray="1, 12"
                strokeLinecap="round"
              />
              <path
                d="M -50 130 Q 320 10 670 160 T 1250 110"
                fill="none"
                stroke="url(#dots-grad)"
                strokeWidth="6"
                strokeDasharray="1, 18"
                strokeLinecap="round"
              />
              <path
                d="M -50 190 Q 260 70 610 220 T 1250 170"
                fill="none"
                stroke="url(#dots-grad)"
                strokeWidth="3"
                strokeDasharray="1, 9"
                strokeLinecap="round"
              />
              <path
                d="M -50 110 Q 340 -10 690 140 T 1250 90"
                fill="none"
                stroke="url(#dots-grad)"
                strokeWidth="7"
                strokeDasharray="1, 22"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Left Side: Typography */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              Let's Build The Future Together
            </h2>
            <p className="text-[#9ca3af] text-sm md:text-base leading-relaxed font-medium">
              Whether you're an organization, investor or builder, we'd love to hear from you.
            </p>
          </div>

          {/* Right Side: Action Button */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg group"
            >
              <span>Contact Us Today</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
