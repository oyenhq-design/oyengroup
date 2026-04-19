'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-100">
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
