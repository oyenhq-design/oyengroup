'use client';

import React, { useEffect, useRef } from 'react';

interface LayeredScrollContainerProps {
  children: React.ReactNode[];
}

export default function LayeredScrollContainer({ children }: LayeredScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, children.length);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const windowHeight = window.innerHeight;

      // We use requestAnimationFrame for optimal performance
      window.requestAnimationFrame(() => {
        sectionRefs.current.forEach((section, index) => {
          if (!section) return;

          const rect = section.getBoundingClientRect();
          const nextSection = sectionRefs.current[index + 1];
          
          // Set base z-index so later sections stack on top of earlier ones
          section.style.zIndex = `${(index + 1) * 10}`;
          section.style.position = 'relative';

          if (nextSection) {
            const nextRect = nextSection.getBoundingClientRect();
            
            // If next section is entering the viewport
            if (nextRect.top < windowHeight && nextRect.top > 0) {
              const progress = (windowHeight - nextRect.top) / windowHeight; // 0 to 1
              
              // Parallax movement for outgoing section (slower than normal scroll)
              const translateY = -progress * (windowHeight * 0.15); // moves up gradually by 15% of viewport
              const scale = 1 - progress * 0.04; // subtle scale down to 96%
              const opacity = 1 - progress * 0.3; // subtle fade out

              section.style.transform = `translateY(${translateY}px) scale(${scale})`;
              section.style.opacity = `${opacity}`;
            } else if (nextRect.top <= 0) {
              // Once next section fully covers this one, hide it / keep it shifted
              section.style.transform = `translateY(${-windowHeight * 0.15}px) scale(0.96)`;
              section.style.opacity = '0.7';
            } else {
              // Next section hasn't started entering yet
              section.style.transform = 'translateY(0px) scale(1)';
              section.style.opacity = '1';
            }
          } else {
            // Last section doesn't have a next section to overlay it
            if (rect.top < windowHeight && rect.top > -rect.height) {
              section.style.transform = 'translateY(0px) scale(1)';
              section.style.opacity = '1';
            }
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [children.length]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        // Custom shadow styling for a premium layered effect
        return (
          <div
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="w-full transition-all duration-75 ease-out will-change-transform"
            style={{
              boxShadow: index > 0 ? '0 -15px 30px rgba(0, 0, 0, 0.5)' : 'none',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
