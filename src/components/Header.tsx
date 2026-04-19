'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 border-b border-[#111827]">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Company Name */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#d4af37] hover:text-[#e5c158] transition">
              Oyengroup
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#d4af37] transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#d4af37] transition">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#d4af37] transition">
              Services
            </Link>
            <Link href="/news" className="text-white hover:text-[#d4af37] transition">
              News
            </Link>
            <Link href="/case-studies" className="text-white hover:text-[#d4af37] transition">
              Case Studies
            </Link>
            <Link href="/reports" className="text-white hover:text-[#d4af37] transition">
              Reports
            </Link>
            <Link href="/contact" className="text-white hover:text-[#d4af37] transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#d4af37] text-black px-6 py-2 rounded-lg hover:bg-[#e5c158] transition font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
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
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/news" className="block py-2 text-gray-700 hover:text-blue-600">
              News
            </Link>
            <Link href="/case-studies" className="block py-2 text-gray-700 hover:text-blue-600">
              Case Studies
            </Link>
            <Link href="/reports" className="block py-2 text-gray-700 hover:text-blue-600">
              Reports
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
