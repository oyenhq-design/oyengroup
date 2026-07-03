'use client';

import Link from 'next/link';

export default function LeadershipPreview() {
  const leaders = [
    {
      name: 'Ahmed Al-Maktoum',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop',
    },
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & COO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop',
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
            LEADERSHIP
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-3xl tracking-tight">
            Building OYEN GROUP for the next generation of technology.
          </h2>
        </div>

        {/* Side-by-Side Portraits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-2xl border border-white/10 bg-[#111] mb-6">
                <img
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-xs tracking-widest text-[#d4af37] uppercase font-medium">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action block */}
        <div className="text-center border-t border-white/5 pt-12 max-w-xl mx-auto">
          <p className="text-base text-gray-400 mb-8 font-light leading-relaxed">
            Meet the people leading OYEN GROUP's long-term vision.
          </p>
          <Link
            href="/about/leadership"
            className="inline-flex items-center group px-6 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-sm"
          >
            <span>Meet the Leadership</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
