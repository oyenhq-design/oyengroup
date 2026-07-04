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
        <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/10 rounded-2xl py-10 px-8 md:py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          {/* Animated dot wave background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-70 mix-blend-screen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 300"
              className="w-full h-full object-cover"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cta-dots-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                  <stop offset="40%" stopColor="#ff9f43" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#e5c158" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M -50 200 Q 250 80 550 200 T 1150 140"
                fill="none"
                stroke="url(#cta-dots-glow)"
                strokeWidth="1.5"
                strokeDasharray="1, 10"
                strokeLinecap="round"
              />
              <path
                d="M -50 210 Q 270 90 570 210 T 1170 150"
                fill="none"
                stroke="url(#cta-dots-glow)"
                strokeWidth="2.5"
                strokeDasharray="1, 12"
                strokeLinecap="round"
              />
              <path
                d="M -50 220 Q 290 100 590 220 T 1190 160"
                fill="none"
                stroke="url(#cta-dots-glow)"
                strokeWidth="3.5"
                strokeDasharray="1, 14"
                strokeLinecap="round"
              />
              <path
                d="M -50 230 Q 310 110 610 230 T 1210 170"
                fill="none"
                stroke="url(#cta-dots-glow)"
                strokeWidth="2"
                strokeDasharray="1, 9"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Left Block */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-xl space-y-4">
            <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-bold">
              BUILD THE FUTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Let's Build What's Next.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
              Whether you're an organization, investor, partner, or future team member, we'd love to explore how we can create meaningful impact together.
            </p>
          </div>

          {/* Right Block - Contact Button */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider bg-[#d4af37] hover:bg-[#e5c158] text-black rounded-xl transition duration-300 shadow-lg shadow-[#d4af37]/10 group"
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
