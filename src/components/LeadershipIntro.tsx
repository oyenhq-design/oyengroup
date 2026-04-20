'use client';

import { useEffect, useRef, useState } from 'react';

export default function LeadershipIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-[#0a0a0a] border-t border-white/8">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-base md:text-lg text-[#d1d5db] leading-relaxed mb-8">
            Our leadership philosophy centers on innovation, operational efficiency, sustainability, and long-term
            growth. Each member of our leadership team brings decades of experience in the energy sector, combining deep
            technical knowledge with strategic vision to drive OYEN Group's mission forward.
          </p>

          <div className="inline-block">
            <div className="h-1 w-12 bg-[#d4af37]" />
          </div>
        </div>
      </div>
    </section>
  );
}
