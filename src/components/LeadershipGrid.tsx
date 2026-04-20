'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Leader {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

const leaders: Leader[] = [
  {
    id: 'leader-1',
    name: 'Ahmed Al-Maktoum',
    role: 'President & Chief Executive Officer',
    description: 'Driving strategic direction and operational excellence across OYEN Group.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop',
  },
  {
    id: 'leader-2',
    name: 'Sarah Johnson',
    role: 'Co-President & Chief Operations Officer',
    description: 'Leading innovation, partnerships, and technology integration.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop',
  },
];

export default function LeadershipGrid() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(leaders.length).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          leaders.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-black border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className={`transition-all duration-700 ease-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="group">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-lg shadow-2xl h-80">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition duration-300">
                    {leader.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#d4af37] uppercase tracking-widest mb-4">
                    {leader.role}
                  </p>

                  <p className="text-sm md:text-base text-[#d1d5db] mb-6 leading-relaxed">
                    {leader.description}
                  </p>

                  {/* Link with animation */}
                  <Link href={`/about/leadership/${leader.id}`} className="inline-flex items-center group/link">
                    <span className="text-sm font-semibold text-[#d4af37] relative pb-1">
                      View Profile
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
