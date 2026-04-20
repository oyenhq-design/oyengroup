'use client';

import { statistics } from '@/data/statistics';
import { useEffect, useRef, useState } from 'react';

export default function Statistics() {
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items one by one
            statistics.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems((prev) => new Set(prev).add(index));
              }, index * 120); // 120ms stagger between items
            });
            // Stop observing after animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-32 bg-[#111827] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-tight">
          At a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                opacity: animatedItems.has(index) ? 1 : 0,
                filter: animatedItems.has(index) ? 'blur(0)' : 'blur(4px)',
                transform: animatedItems.has(index)
                  ? 'translateY(0)'
                  : 'translateY(12px)',
                transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'opacity, transform, filter',
              }}
            >
              <div className="text-6xl md:text-7xl font-bold text-[#d4af37] mb-6 leading-tight">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-tight">
                {stat.label}
              </h3>
              <p className="text-[#9ca3af] text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
