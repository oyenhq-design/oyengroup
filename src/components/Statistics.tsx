'use client';

import Link from 'next/link';
import { statistics } from '@/data/statistics';
import { useEffect, useRef, useState } from 'react';

export default function Statistics() {
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const [ctaVisible, setCtaVisible] = useState(false);
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

            // Animate CTA after items finish
            setTimeout(() => {
              setCtaVisible(true);
            }, statistics.length * 120 + 200);

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
      <style>{`
        .cta-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.25s ease;
          text-decoration: none;
        }

        .cta-link::before {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #d4af37;
          transition: width 0.25s ease;
        }

        .cta-link:hover {
          color: #d4af37;
        }

        .cta-link:hover::before {
          width: 100%;
        }

        .cta-arrow {
          transition: transform 0.25s ease;
          display: inline-block;
        }

        .cta-link:hover .cta-arrow {
          transform: translateX(4px);
        }

        .cta-container {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: 0.2s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
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

        {/* CTA Footer */}
        {ctaVisible && (
          <div className="cta-container mt-16 md:mt-20 lg:mt-24 pt-12 border-t border-white/15 flex justify-end">
            <Link href="/about/at-a-glance" className="cta-link">
              <span>Explore More</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
