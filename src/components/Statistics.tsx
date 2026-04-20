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
      { threshold: 0.1 }
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
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

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
                transform: animatedItems.has(index)
                  ? 'translateY(0)'
                  : 'translateY(20px)',
                transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                willChange: 'opacity, transform',
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
