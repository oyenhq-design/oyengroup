'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-32 border-t border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-12">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">OYEN Group</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Building a unified energy ecosystem across upstream, midstream, and downstream operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-[#9ca3af] text-sm">
                <a href="mailto:info@oyengroup.com" className="hover:text-[#d4af37] transition duration-300">
                  info@oyengroup.com
                </a>
              </li>
              <li className="text-[#9ca3af] text-sm">
                <a href="tel:+234" className="hover:text-[#d4af37] transition duration-300">
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300 text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-[#9ca3af] hover:text-[#d4af37] transition duration-300 text-sm"
                  >
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[#9ca3af]">
              &copy; {currentYear} OYEN Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#9ca3af] hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <span className="text-[#1f2937]">|</span>
              <a href="#" className="text-[#9ca3af] hover:text-white transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
