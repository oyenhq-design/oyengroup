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
      <style>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #d4af37;
          transition: width 0.3s ease;
        }
        
        .footer-link:hover {
          color: #d4af37;
          transform: translateX(2px);
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-input:focus {
          border-color: #d4af37;
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/8">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">OYEN Group</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed max-w-xs">
                Building a unified energy ecosystem across upstream, midstream, and downstream operations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="footer-link text-[#9ca3af]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link text-[#9ca3af]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="footer-link text-[#9ca3af]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="footer-link text-[#9ca3af]">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link text-[#9ca3af]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/case-studies" className="footer-link text-[#9ca3af]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="footer-link text-[#9ca3af]">
                    Reports
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link text-[#9ca3af]">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="footer-link text-[#9ca3af]">
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stay Connected */}
            <div>
              <h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-widest">
                Stay Connected
              </h4>
              <p className="text-xs text-[#9ca3af] mb-4 max-w-xs">
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
                  className="footer-input px-3 py-2 bg-black border border-white/15 rounded-md text-white text-sm placeholder-[#6b7280] focus:outline-none transition duration-300"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#d4af37] text-black text-xs font-semibold rounded-md hover:bg-[#e5c158] transition duration-300 w-fit"
                >
                  {isSubmitted ? '✓ Subscribed' : 'Subscribe'}
                </button>
              </form>

              {/* Contact Info */}
              <div className="space-y-2">
                <p className="text-xs">
                  <a href="mailto:info@oyengroup.com" className="footer-link text-[#9ca3af]">
                    info@oyengroup.com
                  </a>
                </p>
                <p className="text-xs">
                  <a href="tel:+234" className="footer-link text-[#9ca3af]">
                    +234 XXX XXX XXXX
                  </a>
                </p>
                <div className="flex gap-4 pt-3">
                  <a
                    href="#"
                    className="footer-link text-xs text-[#9ca3af]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="footer-link text-xs text-[#9ca3af]"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-[#9ca3af]">
              &copy; {currentYear} OYEN Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="footer-link text-[#9ca3af]">
                Privacy Policy
              </a>
              <span className="text-[#1f2937]">|</span>
              <a href="#" className="footer-link text-[#9ca3af]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
