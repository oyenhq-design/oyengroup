'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-10">
            Welcome to Oyengroup
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-[#9ca3af] leading-relaxed">
            Excellence in Service, Innovation in Action
          </p>
          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-[#9ca3af] leading-relaxed">
            We deliver innovative solutions and exceptional service to help your business thrive
            in today's dynamic market.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-[#d4af37] px-8 py-3 rounded-lg font-semibold hover:bg-[#111827] transition border-2 border-[#d4af37]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
