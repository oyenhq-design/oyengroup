'use client';

import Link from 'next/link';

export default function LeadershipPreview() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
            LEADERSHIP
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-3xl tracking-tight">
            Building OYEN GROUP for the next generation of technology.
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Column 1: Large portrait */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-2xl border border-white/10 group bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                alt="Ahmed Al-Maktoum, Founder & CEO"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Column 2: Biography, Quote, Button */}
          <div className="md:col-span-7 space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Ahmed Al-Maktoum
              </h3>
              <p className="text-xs md:text-sm tracking-widest text-[#d4af37] uppercase font-medium">
                Founder & CEO
              </p>
            </div>

            <p className="text-base text-gray-400 leading-relaxed font-light max-w-xl">
              Ahmed founded OYEN GROUP with a vision to build durable, intelligent foundations for organizations and industries. With background in engineering systems and digital platform architecture, he leads OYEN GROUP's commitment to creating long-term value that bridges the gap between infrastructure and software.
            </p>

            <blockquote className="border-l-2 border-[#d4af37] pl-6 py-1">
              <p className="text-lg md:text-2xl font-light text-white italic leading-relaxed">
                "Technology should outlive trends. We're building OYEN GROUP to become the foundation for intelligent organizations across Africa and beyond."
              </p>
            </blockquote>

            <div>
              <Link
                href="/about/leadership"
                className="inline-flex items-center group px-6 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-sm"
              >
                <span>Meet the Leadership</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
