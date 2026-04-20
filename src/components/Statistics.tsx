'use client';

import Link from 'next/link';
import { statistics } from '@/data/statistics';
import { useEffect, useRef, useState } from 'react';

const CARD_ICONS = ['⚡', '📊', '🌱', '🔗'];

export default function Statistics() {
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header first
            setHeaderVisible(true);

            // Animate cards with stagger (0ms, 100ms, 200ms, 300ms)
            statistics.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems((prev) => new Set(prev).add(index));
              }, index * 100);
            });

            // Stop observing after animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-28 lg:py-32 bg-[#0A1628] text-white overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E30] via-transparent to-[#0A1628] opacity-40 pointer-events-none" />

      {/* Optional faint energy wave texture at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628]/60 to-transparent pointer-events-none" />
      <style>{`
        .header-section {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 60px;
          opacity: 0;
          animation: fadeInHeaderSection 0.7s ease-out forwards;
        }

        @keyframes fadeInHeaderSection {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-left {
          flex: 0 1 auto;
        }

        .header-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #d4af37;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .header-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 12px;
        }

        @media (min-width: 768px) {
          .header-title {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .header-title {
            font-size: 4rem;
          }
        }

        .header-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          max-width: 300px;
        }

        .header-divider {
          flex-grow: 1;
          align-self: center;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          min-width: 40px;
          animation: lineGrow 0.7s ease-out forwards 0.15s;
          animation-fill-mode: both;
        }

        @keyframes lineGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        .header-right {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
        }

        .cta-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease;
          animation: fadeInCta 0.6s ease-out forwards 0.3s;
        }

        @keyframes fadeInCta {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
          transform: translateX(6px);
        }

        /* CARD STYLES */
        .stat-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 28px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
        }

        .stat-card.animated {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          background: linear-gradient(to top, rgba(212, 175, 55, 0.15), transparent);
          transition: height 0.3s ease;
          pointer-events: none;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .stat-card:hover::before {
          height: 60px;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .card-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d4af37;
          transition: color 0.3s ease;
        }

        .stat-card:hover .card-number {
          color: #e5c158;
        }

        .card-icon {
          font-size: 1.75rem;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover .card-icon {
          opacity: 0.9;
        }

        .card-divider {
          width: 40px;
          height: 2px;
          background-color: #d4af37;
          margin: 12px 0 16px 0;
          transition: width 0.3s ease;
        }

        .stat-card:hover .card-divider {
          width: 48px;
        }

        .card-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .card-description {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          flex-grow: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .header-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 48px;
          }

          .header-divider {
            display: none;
          }

          .header-title {
            font-size: 2rem;
          }

          .stat-card {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Premium Header with CTA */}
        {headerVisible && (
          <div className="header-section">
            <div className="header-left">
              <span className="header-label">Overview</span>
              <h2 className="header-title">At a Glance</h2>
              <p className="header-description">
                Four pillars driving integrated energy solutions and sustainable value creation.
              </p>
            </div>
            <div className="header-divider" />
            <div className="header-right">
              <Link href="/about/at-a-glance" className="cta-link">
                <span>Explore More</span>
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Premium Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${animatedItems.has(index) ? 'animated' : ''}`}
              style={{
                transitionDelay: animatedItems.has(index) ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="card-top">
                <div className="card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="card-icon">{CARD_ICONS[index]}</div>
              </div>
              <div className="card-divider" />
              <h3 className="card-label">{stat.label}</h3>
              <p className="card-description">{stat.description}</p>
              <div className="mt-auto pt-4 text-3xl md:text-4xl font-bold text-[#d4af37]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
