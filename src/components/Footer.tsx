'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 2000);
    }
  };

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

          {/* Stay Connected */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-xs text-[#9ca3af] mb-4">
              Get updates on our energy solutions and insights.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-3 py-2 bg-black border border-white/15 rounded-md text-white text-sm placeholder-[#6b7280] focus:outline-none focus:border-[#d4af37] transition duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#d4af37] text-black text-sm font-semibold rounded-md hover:bg-[#e5c158] transition duration-300 w-fit"
              >
                {isSubmitted ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-xs text-[#9ca3af]">
                <a href="mailto:info@oyengroup.com" className="hover:text-[#d4af37] transition duration-300">
                  info@oyengroup.com
                </a>
              </p>
              <p className="text-xs text-[#9ca3af]">
                <a href="tel:+234" className="hover:text-[#d4af37] transition duration-300">
                  +234 XXX XXX XXXX
                </a>
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="text-xs text-[#9ca3af] hover:text-[#d4af37] transition duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-xs text-[#9ca3af] hover:text-[#d4af37] transition duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
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
