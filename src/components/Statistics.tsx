'use client';

import { statistics } from '@/data/statistics';

export default function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">At a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">{stat.value}</div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
