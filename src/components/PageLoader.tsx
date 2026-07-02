'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function LoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Trigger load state on internal link clicks
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        const targetAttr = anchor.getAttribute('target');
        
        // Match relative internal paths but avoid hash links or mailto/tel
        if (
          href &&
          href.startsWith('/') &&
          !href.startsWith('/#') &&
          !href.includes('#') &&
          targetAttr !== '_blank' &&
          href !== pathname
        ) {
          setIsLoading(true);
          setShouldRender(true);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  // Turn off loading once navigation completes
  useEffect(() => {
    if (isLoading) {
      // Small timeout to ensure transition feels smooth
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Hide overlay completely after fade out animation
        const fadeTimer = setTimeout(() => setShouldRender(false), 300);
        return () => clearTimeout(fadeTimer);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-300 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Golden Rotating Spinner */}
        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/10 border-t-[#d4af37] animate-spin" />
        
        {/* Centered Oyen Logo */}
        <img
          src="/logo.png"
          alt="OYEN Logo"
          className="w-12 h-12 object-contain animate-pulse"
        />
      </div>
      
      {/* Subtitle */}
      <span className="text-[10px] font-bold text-gray-400 tracking-[0.25em] uppercase mt-4 animate-pulse">
        OYEN GROUP
      </span>
    </div>
  );
}

export default function PageLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderContent />
    </Suspense>
  );
}
