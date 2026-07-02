'use client';

import { useEffect, useRef, useState } from 'react';

interface Milestone {
  phase: string;
  subtitle: string;
  bullets: string[];
  status: 'completed' | 'current' | 'future';
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const milestones: Milestone[] = [
    {
      phase: 'Foundation',
      subtitle: 'OYEN GROUP Established',
      bullets: ['OYEN GROUP established', 'Vision defined', 'First product initiated'],
      status: 'completed',
    },
    {
      phase: 'Growth',
      subtitle: 'OYEN GRID Launch',
      bullets: ['OYEN GRID launch', 'Organization onboarding', 'Customer growth'],
      status: 'current',
    },
    {
      phase: 'Expansion',
      subtitle: 'New Technologies',
      bullets: ['AI capabilities', 'Knowledge ecosystem', 'Additional enterprise products'],
      status: 'future',
    },
    {
      phase: 'Future',
      subtitle: 'Energy & Industrial Innovation',
      bullets: ['Industrial technology', 'Energy innovation', 'Global impact'],
      status: 'future',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress percentage through the container
      const start = windowHeight * 0.8;
      const progress = (start - rect.top) / (rect.height + start - windowHeight);
      const clampedProgress = Math.max(0, Math.min(100, progress * 100));
      setLineWidth(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-28 lg:py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5"
    >
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold mb-4 block">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
            Building For The Long Term.
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            OYEN GROUP is being built with a long-term vision to create technology that transforms organizations today while expanding into artificial intelligence, industrial innovation, and energy technology tomorrow. Every milestone strengthens the foundation for what comes next.
          </p>
        </div>

        {/* Timeline Visualization Container */}
        <div className="relative mb-20">
          
          {/* Horizontal Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[2px] bg-white/10 z-0">
            <div
              className="h-full bg-gradient-to-r from-[#d4af37] to-[#e5c158] transition-all duration-300 ease-out"
              style={{ width: `${lineWidth}%` }}
            />
          </div>

          {/* Vertical Connector Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[35px] w-[2px] bg-white/10 z-0">
            <div
              className="w-full bg-gradient-to-b from-[#d4af37] to-[#e5c158] transition-all duration-300 ease-out origin-top"
              style={{ height: `${lineWidth}%` }}
            />
          </div>

          {/* Grid of Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {milestones.map((milestone, idx) => {
              const isActive = activeCard === idx;
              
              return (
                <div
                  key={idx}
                  className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  
                  {/* Timeline Node Ring */}
                  <div className="flex-shrink-0 w-[72px] h-[72px] lg:mb-8 flex items-center justify-center relative">
                    {/* Ring glow */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      milestone.status === 'completed' || milestone.status === 'current'
                        ? 'bg-[#d4af37]/5 border border-[#d4af37]/20 scale-110'
                        : 'bg-white/3 border border-white/5 scale-90'
                    } group-hover:scale-125 group-hover:border-[#d4af37]/40`} />

                    {/* Central Dot */}
                    <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                      milestone.status === 'completed'
                        ? 'bg-[#d4af37]'
                        : milestone.status === 'current'
                        ? 'bg-black border-2 border-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                        : 'bg-black border border-white/30'
                    } group-hover:bg-[#d4af37] group-hover:scale-110`}>
                      {milestone.status === 'completed' && (
                        <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="ml-6 lg:ml-0 lg:w-full flex-grow">
                    <div className={`bg-[#0d0d0d] border rounded-2xl p-6 transition-all duration-300 transform ${
                      isActive 
                        ? 'border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.08)] -translate-y-1' 
                        : 'border-white/5 shadow-md'
                    } group-hover:border-[#d4af37]/45`}>
                      
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                        {milestone.phase}
                      </div>
                      
                      <h3 className="text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-tight mb-4">
                        {milestone.subtitle}
                      </h3>

                      {/* Interactive bullet details */}
                      <ul className="space-y-2 text-left">
                        {milestone.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="text-[#d4af37] mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Concluding Footer Sentence */}
        <div className="text-center pt-8 border-t border-white/5 max-w-xl mx-auto">
          <p className="text-xs text-gray-400 leading-relaxed font-semibold">
            Every milestone moves us closer to building one connected technology ecosystem for organizations, industry, and the future of energy.
          </p>
        </div>

      </div>
    </section>
  );
}
