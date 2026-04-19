'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl mb-12 text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Let's work together to bring your vision to life and achieve your business objectives.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}
