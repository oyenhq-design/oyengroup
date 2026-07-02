'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [activeNav, setActiveNav] = useState('results');
  const [contentKey, setContentKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navOrder = ['results', 'partnerships', 'sustainability', 'powered'];

  const navItems = [
    { id: 'results', label: 'Results announcement' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'powered', label: 'Powered by OYEN' },
  ];

  const bgImages = [
    {
      id: 'results',
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
      position: 'center 30%',
      isLight: false,
    },
    {
      id: 'partnerships',
      url: '/hero-bg-2.png',
      position: 'right center',
      isLight: true,
    },
    {
      id: 'sustainability',
      url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop',
      position: 'center center',
      isLight: false,
    },
    {
      id: 'powered',
      url: '/hero-bg-3.png',
      position: 'center center',
      isLight: true,
    },
  ];

  const contentData = {
    results: {
      label: 'RESULTS ANNOUNCEMENT',
      heading: 'Driving Measurable Energy Impact',
      paragraph: 'Delivering consistent performance across global operations with proven efficiency gains and optimized energy systems.',
      ctaText: 'View Results →',
      ctaHref: '/reports',
    },
    partnerships: {
      label: 'STRATEGIC PARTNERSHIPS',
      heading: 'Building Strong Energy Alliances',
      paragraph: 'Collaborating with global partners to deliver scalable energy solutions across upstream, midstream, and downstream operations.',
      ctaText: 'Explore Partnerships →',
      ctaHref: '/case-studies',
    },
    sustainability: {
      label: 'SUSTAINABILITY',
      heading: 'Advancing a Lower-Carbon Future',
      paragraph: 'Integrating cleaner technologies and responsible practices to reduce emissions and support long-term energy sustainability.',
      ctaText: 'Our Sustainability Approach →',
      ctaHref: '/about',
    },
    powered: {
      label: 'POWERED BY OYEN',
      heading: 'A Unified Energy Ecosystem',
      paragraph: 'Combining technology, data, and engineering to deliver intelligent, end-to-end energy solutions at scale.',
      ctaText: 'Discover OYEN →',
      ctaHref: '/services',
    },
  };

  const currentIndex = navOrder.indexOf(activeNav);
  const currentBg = bgImages[currentIndex];
  const currentContent = contentData[activeNav as keyof typeof contentData];

  // Auto-switch tabs every 6 seconds
  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveNav((prev) => {
        const idx = navOrder.indexOf(prev);
        const nextIdx = (idx + 1) % navOrder.length;
        return navOrder[nextIdx];
      });
      setContentKey((prev) => prev + 1);
    }, 6000);
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoplay();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handleTabClick = (tabId: string) => {
    setActiveNav(tabId);
    setContentKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + navOrder.length) % navOrder.length;
    setActiveNav(navOrder[prevIdx]);
    setContentKey((prev) => prev + 1);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % navOrder.length;
    setActiveNav(navOrder[nextIdx]);
    setContentKey((prev) => prev + 1);
  };

  return (
    <section
      className="h-screen relative overflow-hidden flex flex-col transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preload images in background */}
      <div className="hidden">
        {bgImages.map((bg) => (
          <img key={bg.id} src={bg.url} alt="preload" />
        ))}
      </div>

      <style>{`
        @keyframes kenBurns {
          from {
            transform: scale(1.01) translateZ(0);
          }
          to {
            transform: scale(1.07) translateZ(0);
          }
        }
        .ken-burns-active {
          animation: kenBurns 7s ease-out forwards;
        }
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

      {/* Carousel Background Layers */}
      {bgImages.map((bg, idx) => (
        <div
          key={bg.id}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-all duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url('${bg.url}')`,
            backgroundPosition: bg.position,
          }}
        >
          {/* Individual zoom effect on active layer */}
          <div
            className={`w-full h-full bg-cover bg-no-repeat ${
              idx === currentIndex ? 'ken-burns-active' : ''
            }`}
            style={{
              backgroundImage: `url('${bg.url}')`,
              backgroundPosition: bg.position,
            }}
          />
        </div>
      ))}

      {/* Dark & Light Gradients: Cross-fades depending on background brightness */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-1000 pointer-events-none ${
          currentBg.isLight ? 'opacity-100' : 'opacity-0'
        } bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/50 to-transparent`}
      />
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-1000 pointer-events-none ${
          currentBg.isLight ? 'opacity-0' : 'opacity-100'
        } bg-gradient-to-r from-black/85 via-black/30 to-transparent`}
      />

      {/* Left/Right Manual Arrow Controls */}
      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 pointer-events-auto ${
            currentBg.isLight
              ? 'border-black/10 hover:border-black/30 hover:bg-black/5 text-black'
              : 'border-white/10 hover:border-white/30 hover:bg-white/5 text-white'
          }`}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 pointer-events-auto ${
            currentBg.isLight
              ? 'border-black/10 hover:border-black/30 hover:bg-black/5 text-black'
              : 'border-white/10 hover:border-white/30 hover:bg-white/5 text-white'
          }`}
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative flex-1 flex items-start pt-6 md:pt-8 lg:pt-10 z-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: Dynamic Text Content */}
            <div className="flex flex-col max-w-2xl">
              <div
                key={contentKey}
                className="transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                {/* Label */}
                <p className="text-sm tracking-widest text-[#d4af37] uppercase font-semibold mb-8">
                  {currentContent.label}
                </p>

                {/* Heading */}
                <h1
                  className={`text-5xl lg:text-6xl font-bold leading-tight mb-8 transition-colors duration-500 ${
                    currentBg.isLight ? 'text-[#1A1A1A]' : 'text-white'
                  }`}
                >
                  {currentContent.heading}
                </h1>

                {/* Supporting Paragraph */}
                <p
                  className={`text-lg mb-12 leading-relaxed font-medium transition-colors duration-500 ${
                    currentBg.isLight ? 'text-[#4A4A4A]' : 'text-gray-300'
                  }`}
                >
                  {currentContent.paragraph}
                </p>

                {/* Hero Actions: CTA + Tabs Container */}
                <div className="flex flex-col gap-6">
                  {/* CTA: Minimal Text + Arrow */}
                  <Link
                    href={currentContent.ctaHref}
                    className="inline-flex items-center gap-4 text-[#d4af37] hover:text-[#e5c158] transition duration-300 font-semibold group w-fit"
                  >
                    <span>{currentContent.ctaText}</span>
                    <div className="w-10 h-10 border border-[#d4af37] rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/10 transition">
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </Link>

                  {/* Tab Navigation */}
                  <div className="mt-4">
                    {/* Subtle Divider Line */}
                    <div className={`border-t mb-6 transition-colors duration-500 ${
                      currentBg.isLight ? 'border-[#EAE8E4]' : 'border-white/10'
                    }`} />

                    {/* Tab Buttons with Progress Animation */}
                    <div className="flex items-center justify-between w-full pb-3">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleTabClick(item.id)}
                          className="relative flex-1 text-center text-xs md:text-sm font-semibold whitespace-nowrap transition-colors duration-500 pb-3"
                          style={{
                            color: activeNav === item.id 
                              ? (currentBg.isLight ? '#1A1A1A' : '#ffffff') 
                              : (currentBg.isLight ? '#767676' : '#9ca3af'),
                          }}
                          onMouseEnter={(e) => {
                            if (activeNav !== item.id) {
                              e.currentTarget.style.color = currentBg.isLight ? '#1A1A1A' : '#ffffff';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeNav !== item.id) {
                              e.currentTarget.style.color = currentBg.isLight ? '#767676' : '#9ca3af';
                            }
                          }}
                        >
                          {item.label}
                          {activeNav === item.id && (
                            <span
                              className="absolute left-1/2 transform -translate-x-1/2 h-0.5 bg-[#d4af37]"
                              style={{
                                bottom: '-6px',
                                animation: 'slideUnderline 6s linear forwards',
                                width: '80%',
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

      {/* Slide Navigation Dots (indicators) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {navOrder.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-[#d4af37]'
                : (currentBg.isLight ? 'bg-black/20 hover:bg-black/40' : 'bg-white/20 hover:bg-white/40')
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
