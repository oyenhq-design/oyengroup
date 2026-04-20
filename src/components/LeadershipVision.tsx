'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function LeadershipVision() {
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
    <section className="py-20 md:py-28 lg:py-32 bg-[#0a0a0a] border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div
            ref={ref}
            className={`order-2 md:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Leadership team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right: Text and CTA */}
          <div
            className={`order-1 md:order-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Leadership Built on Vision and Execution
            </h2>

            <p className="text-base md:text-lg text-[#d1d5db] leading-relaxed mb-8">
              At OYEN Group, leadership is defined by decisive action and long-term thinking. Our executive team shapes
              strategic direction while empowering teams across upstream, midstream, and downstream operations to drive
              innovation and deliver results. We focus on building sustainable growth that creates value for all
              stakeholders.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center group px-6 py-3 bg-[#d4af37] text-black font-semibold text-sm rounded-lg hover:bg-[#e5c158] transition-colors duration-300"
            >
              Explore Our Strategy
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
