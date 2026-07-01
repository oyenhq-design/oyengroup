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
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footer-gold-grad-1" x1="30%" y1="10%" x2="70%" y2="90%">
                      <stop offset="0%" stopColor="#FFF3B3" />
                      <stop offset="30%" stopColor="#D4AF37" />
                      <stop offset="70%" stopColor="#AA7A1E" />
                      <stop offset="100%" stopColor="#5B3E00" />
                    </linearGradient>
                    <linearGradient id="footer-gold-grad-2" x1="70%" y1="90%" x2="30%" y2="10%">
                      <stop offset="0%" stopColor="#FFF3B3" />
                      <stop offset="30%" stopColor="#D4AF37" />
                      <stop offset="70%" stopColor="#AA7A1E" />
                      <stop offset="100%" stopColor="#5B3E00" />
                    </linearGradient>
                    <filter id="footer-logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#8B6508" floodOpacity="0.25" />
                    </filter>
                  </defs>
                  <g filter="url(#footer-logo-shadow)">
                    <path
                      d="M 50 14 C 70 14 86 30 86 50 C 86 64 78 76 66 82 C 57 86 48 87 40 85 C 46 80 50 74 53 66 C 55 60 55 54 53 48 C 50 38 41 31 31 30 C 37 25 46 22 55 22 C 68 22 77 31 77 44 C 77 54 70 63 60 67 C 68 62 71 52 69 43 C 67 34 59 27 50 27 C 42 27 35 31 31 37 C 33 24 40 14 50 14 Z"
                      fill="url(#footer-gold-grad-1)"
                    />
                    <path
                      d="M 50 86 C 30 86 14 70 14 50 C 14 36 22 24 34 18 C 43 14 52 13 60 15 C 54 20 50 26 47 34 C 45 40 45 46 47 52 C 50 62 59 69 69 70 C 63 75 54 78 45 78 C 32 78 23 69 23 56 C 23 46 30 37 40 33 C 32 38 29 48 31 57 C 33 66 41 73 50 73 C 58 73 65 69 69 63 C 67 76 60 86 50 86 Z"
                      fill="url(#footer-gold-grad-2)"
                    />
                  </g>
                </svg>
                <div className="flex flex-col justify-center leading-none text-white">
                  <span className="text-lg font-bold tracking-tight">OYEN</span>
                  <span className="text-[8px] font-semibold tracking-[0.25em] text-gray-400 uppercase mt-0.5">GROUP</span>
                </div>
              </div>
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
