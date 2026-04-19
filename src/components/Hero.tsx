'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Oyengroup
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Excellence in Service, Innovation in Action
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-blue-50">
            We deliver innovative solutions and exceptional service to help your business thrive
            in today's dynamic market.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition border-2 border-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
