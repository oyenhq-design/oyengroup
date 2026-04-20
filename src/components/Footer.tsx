'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-[#111827]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d4af37]">OYEN Group</h3>
            <p className="text-[#9ca3af]">
              Building a unified energy ecosystem across upstream, midstream, and downstream operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-[#9ca3af]">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#d4af37] transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-[#9ca3af]">
              <li>
                <Link href="/case-studies" className="hover:text-[#d4af37] transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-[#d4af37] transition">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#d4af37] transition">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-[#9ca3af]">
              <li>Email: info@oyengroup.com</li>
              <li>Phone: +234 XXX XXX XXXX</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-[#d4af37] transition">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#111827] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#9ca3af]">
              &copy; {currentYear} OYEN Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-[#9ca3af]">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
