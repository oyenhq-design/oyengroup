'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [activeNav, setActiveNav] = useState('results');
  const [contentKey, setContentKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { id: 'results', label: 'Results announcement' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'powered', label: 'Powered by OYEN' },
  ];

  const navOrder = ['results', 'partnerships', 'sustainability', 'powered'];

  const contentData = {
    results: {
      label: 'Unified Energy Ecosystem',
      heading: 'Driving Measurable Energy Impact',
      paragraph: 'Delivering consistent performance across global operations with proven efficiency gains and optimized energy systems.',
      ctaText: 'View Results',
      ctaHref: '/reports',
    },
    partnerships: {
      label: 'Strategic Collaborations',
      heading: 'Building Strong Energy Partnerships',
      paragraph: 'Collaborating with industry leaders, governments, and innovators to deliver scalable and reliable energy solutions worldwide.',
      ctaText: 'Our Partnerships',
      ctaHref: '/case-studies',
    },
    sustainability: {
      label: 'Environmental Commitment',
      heading: 'Advancing Sustainable Energy Solutions',
      paragraph: 'Committed to reducing environmental impact through cleaner technologies, responsible operations, and long-term sustainability strategies.',
      ctaText: 'Sustainability Focus',
      ctaHref: '/about',
    },
    powered: {
      label: 'Innovative Technology',
      heading: 'Powered by Intelligent Energy Technology',
      paragraph: 'Leveraging data, AI, and advanced analytics to optimize operations, improve decision-making, and drive the future of energy.',
      ctaText: 'Explore Technology',
      ctaHref: '/services',
    },
  };

  const current = contentData[activeNav as keyof typeof contentData];

  // Auto-switch tabs every 6 seconds
  useEffect(() => {
    const switchTab = () => {
      setActiveNav((prev) => {
        const currentIndex = navOrder.indexOf(prev);
        const nextIndex = (currentIndex + 1) % navOrder.length;
        return navOrder[nextIndex];
      });
      setContentKey((prev) => prev + 1); // Trigger fade animation
    };

    timerRef.current = setInterval(switchTab, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Handle manual tab click
  const handleTabClick = (tabId: string) => {
    setActiveNav(tabId);
    setContentKey((prev) => prev + 1);

    // Reset timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveNav((prev) => {
        const currentIndex = navOrder.indexOf(prev);
        const nextIndex = (currentIndex + 1) % navOrder.length;
        return navOrder[nextIndex];
      });
      setContentKey((prev) => prev + 1);
    }, 6000);
  };

  return (
    <section className="h-screen relative overflow-hidden flex flex-col">
      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideUnderline {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      `}</style>

      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop')`,
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Gradient Overlay: Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Main Content Area */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: Dynamic Text Content + Tabs */}
            <div className="flex flex-col justify-center max-w-2xl">
              {/* Animated Container with Fade Transition */}
              <div
                key={contentKey}
                className="transition-opacity duration-500"
                style={{
                  opacity: 1,
                }}
              >
                {/* Label */}
                <p className="text-sm tracking-widest text-[#d4af37] uppercase font-semibold mb-8">
                  {current.label}
                </p>

                {/* Heading */}
                <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-white mb-8">
                  {current.heading}
                </h1>

                {/* Supporting Paragraph */}
                <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                  {current.paragraph}
                </p>

                {/* Hero Actions: CTA + Tabs Container */}
                <div className="flex flex-col gap-6">
                  {/* CTA: Minimal Text + Arrow */}
                  <Link
                    href={current.ctaHref}
                    className="inline-flex items-center gap-4 text-[#d4af37] hover:text-[#e5c158] transition duration-300 font-medium group w-fit"
                  >
                    <span>{current.ctaText}</span>
                    <div className="w-10 h-10 border border-[#d4af37] rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/10 transition">
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </Link>

                  {/* Tab Navigation */}
                  <div>
                    {/* Subtle Divider Line */}
                    <div className="border-t border-[#1f2937] mb-6" />

                    {/* Tab Buttons with Progress Animation */}
                    <div className="flex items-center justify-start gap-8 overflow-x-auto pb-3">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleTabClick(item.id)}
                          className="relative text-base font-medium whitespace-nowrap transition duration-300"
                          style={{
                            color: activeNav === item.id ? '#ffffff' : '#9ca3af',
                          }}
                          onMouseEnter={(e) => {
                            if (activeNav !== item.id) {
                              e.currentTarget.style.color = '#ffffff';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeNav !== item.id) {
                              e.currentTarget.style.color = '#9ca3af';
                            }
                          }}
                        >
                          {item.label}
                          {activeNav === item.id && (
                            <span
                              className="absolute bottom-0 left-0 h-0.5 bg-[#d4af37]"
                              style={{
                                animation: 'slideUnderline 6s linear forwards',
                                width: '100%',
                              }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Empty (Focus on Image) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
