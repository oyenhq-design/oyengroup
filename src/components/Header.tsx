'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setShowAboutDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'ABOUT US', href: '/about', hasDropdown: true },
    { label: 'WHAT WE DO', href: '/services' },
    { label: 'SUSTAINABILITY', href: '/about' },
    { label: 'INVESTORS', href: '/reports' },
    { label: 'NEWS & MEDIA', href: '/news' },
    { label: 'CAREERS', href: '/contact' },
  ];

  const aboutMenuItems = [
    { label: 'About us', href: '#', isSectionLabel: true },
    { label: 'At a glance', href: '/' },
    { label: 'Our leadership', href: '/about', hasArrow: true },
    { label: 'Our governance', href: '/about', hasArrow: true },
    { label: 'Our offices and facilities', href: '/about' },
    { label: 'Our history', href: '/about', hasArrow: true },
    { label: 'Our brand', href: '/about', hasArrow: true },
  ];

  return (
    <header className="sticky top-0 z-50">
      <style>{`
        .about-dropdown-item {
          position: relative;
          transition: color 0.3s ease;
        }

        .about-dropdown-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #d4af37;
          transition: width 0.2s ease;
        }

        .about-dropdown-item:hover {
          color: white;
        }

        .about-dropdown-item:hover::after {
          width: 100%;
        }

        .about-dropdown-item.has-arrow:hover {
          transform: translateX(4px);
        }

        .about-dropdown-enter {
          animation: aboutDropdownEnter 0.3s ease forwards;
        }

        @keyframes aboutDropdownEnter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-dropdown-backdrop {
          backdrop-filter: blur(8px);
        }
      `}</style>

      {/* Top Utility Bar */}
      <div className="bg-[#111] border-b border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-xs">
          {/* Left: Language + Contacts */}
          <div className="hidden md:flex items-center gap-6 text-[#9ca3af]">
            <button className="hover:text-white transition">العربية</button>
            <span className="text-[#1f2937]">|</span>
            <button className="hover:text-white transition">English</button>
            <span className="text-[#1f2937]">|</span>
            <Link href="/contact" className="hover:text-white transition">
              Global contacts
            </Link>
          </div>

          {/* Right: Location */}
          <div className="flex items-center gap-2 text-[#9ca3af]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hover:text-white transition">You are in OYEN Global</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-black border-b border-[#1f2937]' : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 gap-8">
            {/* Left: Search Icon */}
            <div className="hidden md:block relative">
              {showSearch ? (
                <input
                  type="text"
                  placeholder="Search OYEN..."
                  className="bg-[#111] border border-[#1f2937] rounded-lg px-4 py-2 text-sm text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#d4af37] w-64 transition"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-white hover:text-[#d4af37] transition p-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={aboutDropdownRef}>
                    <button
                      onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                      onMouseEnter={() => setShowAboutDropdown(true)}
                      onMouseLeave={() => setShowAboutDropdown(false)}
                      className="text-xs font-semibold text-white hover:text-[#d4af37] transition tracking-wider group relative"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                    </button>

                    {/* Dropdown Menu */}
                    {showAboutDropdown && (
                      <div
                        className="about-dropdown-enter absolute top-full left-0 mt-2 w-72 bg-gradient-to-b from-[#111] to-[#0b0b0b] border-t border-[#1f2937] rounded-lg shadow-xl about-dropdown-backdrop"
                        onMouseEnter={() => setShowAboutDropdown(true)}
                        onMouseLeave={() => setShowAboutDropdown(false)}
                      >
                        {/* Soft divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-0" />

                        {/* Menu items */}
                        <div className="py-6 px-6">
                          {aboutMenuItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className={`block transition-colors duration-200 ${
                                item.isSectionLabel
                                  ? 'text-xs text-[#6b7280] font-semibold uppercase tracking-widest mb-4'
                                  : 'about-dropdown-item text-sm text-[#d1d5db] py-2.5 mb-1'
                              } ${
                                item.hasArrow ? 'has-arrow' : ''
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold text-white hover:text-[#d4af37] transition tracking-wider group relative"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              )}
            </div>

            {/* Right: Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                className="text-xl font-bold text-[#d4af37] hover:text-[#e5c158] transition"
              >
                OYEN
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#d4af37]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-[#1f2937]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm text-white hover:text-[#d4af37] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
