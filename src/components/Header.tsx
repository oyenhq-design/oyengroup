'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productItems = [
    { name: 'Upstream Operations', desc: 'Exploration support and drilling solutions', href: '/services' },
    { name: 'Midstream Operations', desc: 'Logistics, storage, and energy transport', href: '/services' },
    { name: 'Downstream Operations', desc: 'Refining support and distribution', href: '/services' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#EAE8E4]'
            : 'bg-[#FAF9F6] border-b border-[#EAE8E4]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <svg className="w-9 h-9 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E5C158" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#9E7D3B" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 10C27.9 10 10 27.9 10 50C10 65.5 18.8 79 31.8 85.5C30.2 75.3 35.2 64.9 44.7 58.7C55.2 51.9 69 53.6 77.7 62.5C72 52.8 60.5 48.5 49.8 52C40.8 55 35.2 64.8 37.8 74.2C39.8 81.3 46.5 86.2 54 86.2C76.1 86.2 94 68.3 94 46.2C94 30.7 85.2 17.2 72.2 10.7C73.8 20.9 68.8 31.3 59.3 37.5C48.8 44.3 35 42.6 26.3 33.7C32 43.4 43.5 47.7 54.2 44.2C63.2 41.2 68.8 31.4 66.2 22C64.2 14.9 57.5 10 50 10Z"
                    fill="url(#gold-gradient)"
                  />
                </svg>
                <div className="flex flex-col justify-center leading-none text-black">
                  <span className="text-xl font-bold tracking-tight">OYEN</span>
                  <span className="text-[9px] font-semibold tracking-[0.25em] text-[#6b7280] uppercase mt-0.5">GROUP</span>
                </div>
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-[#EAE8E4] rounded-xl shadow-xl py-4 z-50">
                    {productItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="block px-6 py-3 hover:bg-[#FAF9F6] transition-colors"
                      >
                        <p className="text-sm font-semibold text-[#1A1A1A]">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about#vision"
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
              >
                Vision
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
              >
                Company
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Right: CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="px-6 py-2.5 text-xs font-semibold tracking-wider bg-[#0A0A0A] hover:bg-black text-white rounded-xl transition duration-300 flex items-center gap-2 group shadow-sm"
              >
                Partner With Us
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#1A1A1A] hover:text-[#D4AF37] p-2"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-[#EAE8E4] space-y-3 bg-[#FAF9F6]">
              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Products</p>
                {productItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-[#EAE8E4] my-2"></div>
              <Link
                href="/about#vision"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
              >
                Vision
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
              >
                Company
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
              >
                Contact
              </Link>
              <div className="pt-2 px-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center px-6 py-3 text-xs font-semibold tracking-wider bg-[#0A0A0A] text-white rounded-xl transition duration-300 flex items-center gap-2"
                >
                  Partner With Us
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
