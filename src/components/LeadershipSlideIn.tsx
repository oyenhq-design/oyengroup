'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LeadershipSlideIn() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check path exclusions - only show on the homepage
    if (pathname !== '/') {
      return;
    }

    // Check session storage
    const dismissed = sessionStorage.getItem('leadership-popup-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    let timer: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isDismissed || isVisible) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight || 1)) * 100;
      
      // Trigger after user scrolls 35-45%
      if (scrollPercent >= 38) {
        setIsVisible(true);
        clearTimeout(timer);
      }
    };

    // Trigger after 12 seconds
    timer = setTimeout(() => {
      if (!isDismissed && !isVisible) {
        setIsVisible(true);
      }
    }, 12000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [pathname, isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('leadership-popup-dismissed', 'true');
  };

  // Only render on homepage
  if (pathname !== '/' || isDismissed || !isVisible) {
    return null;
  }

  return (
    <div
      style={{
        background: 'rgba(15, 15, 18, 0.82)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
      }}
      className="fixed z-50 p-6 border rounded-2xl backdrop-blur-lg transition-all duration-700 ease-out transform group hover:border-white/15
        /* Mobile Positioning */
        bottom-4 left-4 right-4 w-auto
        /* Desktop Positioning */
        md:bottom-10 md:left-8 md:right-auto md:w-[360px] md:max-w-[360px]
        /* Animation states */
        animate-slideIn"
    >
      {/* CSS Animation injection inline */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideInUp 650ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Close button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors duration-200"
        aria-label="Dismiss leadership announcement"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content Layout */}
      <div className="flex gap-5 items-start">
        {/* Founder square image */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-white/5 bg-[#111] shrink-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
            alt="Ahmed Al-Maktoum"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Text information */}
        <div className="space-y-3.5">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold block">
              OUR PEOPLE
            </span>
            <h3 className="text-sm font-light text-white leading-tight">
              Meet the people shaping the future of OYEN GROUP.
            </h3>
          </div>

          {/* Bullet points */}
          <ul className="text-[11px] text-gray-400 font-light space-y-1">
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#d4af37]/60" />
              Long-term vision
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#d4af37]/60" />
              Engineering excellence
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#d4af37]/60" />
              African innovation
            </li>
          </ul>

          {/* CTA Link */}
          <div className="pt-1.5">
            <Link
              href="/about/leadership"
              onClick={handleDismiss}
              className="inline-flex items-center text-xs font-bold text-[#d4af37] hover:text-[#e5c158] uppercase tracking-wider group/cta"
            >
              <span className="relative pb-0.5">
                Meet the Leadership
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover/cta:w-full" />
              </span>
              <span className="ml-1.5 transition-transform duration-300 transform group-hover:translate-x-1 group-hover/cta:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
