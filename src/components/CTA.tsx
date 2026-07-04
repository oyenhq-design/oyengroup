'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-black py-20 md:py-24 lg:py-28 text-white relative overflow-hidden border-t border-white/5">
      {/* Background Image with opacity overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.14] mix-blend-screen pointer-events-none select-none"
        style={{ backgroundImage: "url('/cta-bg.jpg')" }}
      />

      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section 1: BUILD WITH OYEN */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold mb-4 block">
            BUILD WITH OYEN
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
            Join Us In Building The Future.
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking to modernize your organization, invest in long-term innovation, or collaborate on transformative ideas, OYEN GROUP is building for the future—and we're looking for partners who share that vision.
          </p>
        </div>

        {/* Three Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          
          {/* Card 1: Organizations */}
          <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Organizations
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                Transform Your Operations
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Modernize how your organization works with technology built for efficiency, collaboration, and long-term growth.
              </p>
            </div>
            
            <div className="pt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] group-hover:text-white transition-colors"
              >
                <span>Explore Our Solutions</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Investors */}
          <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Investors
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                Invest In The Future
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Support the growth of OYEN GROUP as we build the next generation of technology infrastructure for organizations, industry, and energy.
              </p>
            </div>
            
            <div className="pt-8">
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] group-hover:text-white transition-colors"
              >
                <span>Investor Relations</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Strategic Partners */}
          <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Strategic Partners
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                Build Together
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Collaborate with us on technology, research, innovation, and strategic initiatives that create lasting impact.
              </p>
            </div>
            
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] group-hover:text-white transition-colors"
              >
                <span>Become a Partner</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Section 2: BUILD THE FUTURE (Final CTA Box) */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0a0a0c] to-[#0c0c10] border border-white/10 rounded-3xl py-12 px-8 md:py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)] group/banner">
          
          {/* Subtle Ambient Glow behind the wave */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[150px] bg-gradient-to-r from-[#ff9f43]/5 to-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

          {/* Organic Glowing Particle Wave Ribbon */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 mix-blend-screen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 300"
              className="w-full h-full object-cover scale-y-110"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cta-dots-glow-premium" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                  <stop offset="25%" stopColor="#e05e00" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#ffb900" stopOpacity="0.6" />
                  <stop offset="75%" stopColor="#ffe082" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Ribbon line 1 */}
              <path
                d="M -50 180 Q 250 80 550 180 T 1150 120"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="1.5"
                strokeDasharray="1, 11"
                strokeLinecap="round"
              />
              {/* Ribbon line 2 */}
              <path
                d="M -50 185 Q 265 90 565 175 T 1165 125"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="2.5"
                strokeDasharray="1, 13"
                strokeLinecap="round"
              />
              {/* Ribbon line 3 */}
              <path
                d="M -50 190 Q 280 70 580 190 T 1180 115"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="3.5"
                strokeDasharray="1, 15"
                strokeLinecap="round"
              />
              {/* Ribbon line 4 */}
              <path
                d="M -50 195 Q 295 100 595 170 T 1195 130"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="2"
                strokeDasharray="1, 9"
                strokeLinecap="round"
              />
              {/* Ribbon line 5 */}
              <path
                d="M -50 200 Q 310 60 610 195 T 1210 110"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="3.5"
                strokeDasharray="1, 16"
                strokeLinecap="round"
              />
              {/* Ribbon line 6 */}
              <path
                d="M -50 205 Q 325 110 625 165 T 1225 135"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="1.5"
                strokeDasharray="1, 12"
                strokeLinecap="round"
              />
              {/* Ribbon line 7 */}
              <path
                d="M -50 210 Q 340 50 640 200 T 1240 105"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="2.5"
                strokeDasharray="1, 14"
                strokeLinecap="round"
              />
              {/* Ribbon line 8 */}
              <path
                d="M -50 215 Q 355 120 655 160 T 1255 140"
                fill="none"
                stroke="url(#cta-dots-glow-premium)"
                strokeWidth="2"
                strokeDasharray="1, 10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Left Block */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-xl space-y-4">
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-1">
              BUILD THE FUTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
              Let's Build What's Next.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
              Whether you're an organization, investor, partner, or future team member, <br className="hidden sm:inline" />
              we'd love to explore how we can create meaningful impact together.
            </p>
          </div>

          {/* Right Block - Premium Contact Button */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold tracking-wider bg-[#d4af37] hover:bg-[#e5c158] text-black rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 group"
            >
              <span>Contact Us Today</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
