'use client';

import { useEffect, useRef, useState } from 'react';

interface CardData {
  title: string;
  description: string;
}

interface AtGlanceSectionProps {
  title: string;
  cards: CardData[];
  accent?: boolean;
}

export default function AtGlanceSection({ title, cards, accent = false }: AtGlanceSectionProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(cards.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger animation for cards
          cards.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 150);
          });
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [cards.length]);

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 lg:py-32 border-t border-white/8 ${
        accent ? 'bg-black' : 'bg-[#0a0a0a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#d4af37]" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="group">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 group-hover:text-[#d4af37] transition duration-300">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-[#d1d5db] leading-relaxed">
                  {card.description}
                </p>

                {/* Subtle underline on hover */}
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#d4af37] to-transparent group-hover:w-12 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
