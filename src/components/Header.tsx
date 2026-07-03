'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'company' | 'resources' | null>(null);

  const productsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !(productsRef.current && productsRef.current.contains(target)) &&
        !(companyRef.current && companyRef.current.contains(target)) &&
        !(resourcesRef.current && resourcesRef.current.contains(target))
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Esc key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDropdown = (dropdown: 'products' | 'company' | 'resources') => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent, dropdown: 'products' | 'company' | 'resources') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(dropdown);
    }
  };

  const productItems = [
    { name: 'Upstream Operations', desc: 'Exploration support and drilling solutions', href: '/services' },
    { name: 'Midstream Operations', desc: 'Logistics, storage, and energy transport', href: '/services' },
    { name: 'Downstream Operations', desc: 'Refining support and distribution', href: '/services' },
  ];

  const companyItems = [
    { name: 'About OYEN', desc: 'Learn our story and mission.', href: '/about' },
    { name: 'Leadership', desc: 'Meet the people building the future.', href: '/about/leadership' },
    { name: 'Careers', desc: 'Join our growing team.', href: '#' },
    { name: 'Partners', desc: 'Build with OYEN.', href: '#' },
  ];

  const resourceItems = [
    { name: 'Blog', desc: 'Read our latest news and updates.', href: '/news' },
    { name: 'Case Studies', desc: 'Explore our projects and success stories.', href: '/case-studies' },
    { name: 'Documentation', desc: 'Technical guides and API resources.', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#111] border-b border-[#1f2937]/50">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-xs">
          {/* Left: Language + Contacts */}
          <div className="hidden md:flex items-center gap-6 text-[#9ca3af]">
            <button className="hover:text-white transition font-medium">English</button>
            <span className="text-[#1f2937]">|</span>
            <Link href="/contact" className="hover:text-white transition font-medium">
              Global contacts
            </Link>
          </div>

          {/* Right: Location */}
          <div className="flex items-center gap-2 text-[#9ca3af]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11.028 13.77A2.003 2.003 0 0112 10a2 2 0 001.5-3h.5m-3.5 13.52c0-.528.113-1.03.315-1.48L11 15h.75a1 1 0 011 1v1a1 1 0 001 1h.5a1 1 0 011 1v.76M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hover:text-white transition">You are in OYEN Global</span>
          </div>
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${scrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#EAE8E4]'
            : 'bg-[#FAF9F6] border-b border-[#EAE8E4]/50'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <img
                  src="/logo.png"
                  alt="Oyen Group Logo"
                  className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => toggleDropdown('products')}
                  onKeyDown={(e) => handleDropdownKeyDown(e, 'products')}
                  aria-expanded={activeDropdown === 'products'}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-[#EAE8E4] rounded-xl shadow-xl py-4 z-50">
                    {productItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-6 py-3 hover:bg-[#FAF9F6] transition-colors rounded-lg mx-2"
                      >
                        <p className="text-sm font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">{item.name}</p>
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

              {/* Company Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onClick={() => toggleDropdown('company')}
                  onKeyDown={(e) => handleDropdownKeyDown(e, 'company')}
                  aria-expanded={activeDropdown === 'company'}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
                >
                  Company
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-[#EAE8E4] rounded-xl shadow-xl py-4 z-50">
                    {companyItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-6 py-3 hover:bg-[#FAF9F6] transition-colors rounded-lg mx-2"
                      >
                        <p className="text-sm font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesRef}>
                <button
                  onClick={() => toggleDropdown('resources')}
                  onKeyDown={(e) => handleDropdownKeyDown(e, 'resources')}
                  aria-expanded={activeDropdown === 'resources'}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-[#EAE8E4] rounded-xl shadow-xl py-4 z-50">
                    {resourceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-6 py-3 hover:bg-[#FAF9F6] transition-colors rounded-lg mx-2"
                      >
                        <p className="text-sm font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#"
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition duration-200"
              >
                Pricing
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
            <div className="md:hidden py-4 border-t border-[#EAE8E4] space-y-4 bg-[#FAF9F6] max-h-[calc(100vh-120px)] overflow-y-auto px-2">
              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Products</p>
                {productItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-sm text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
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
              <div className="border-t border-[#EAE8E4] my-2"></div>
              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Company</p>
                {companyItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-sm text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-[#EAE8E4] my-2"></div>
              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Resources</p>
                {resourceItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-sm text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-[#EAE8E4] my-2"></div>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF9F6] rounded-lg"
              >
                Pricing
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
