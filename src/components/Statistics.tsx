'use client';

import { statistics } from '@/data/statistics';

export default function Statistics() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-tight">At a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-blue-400 mb-6 leading-tight">{stat.value}</div>
              <h3 className="text-lg font-semibold mb-3 leading-tight">{stat.label}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
