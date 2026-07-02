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
    <footer className="bg-[#050505] text-white pt-12 pb-6 border-t border-white/10 relative overflow-hidden">
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
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 relative z-10">
          
          {/* Left Column - Company Info & Details */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Oyen Group Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              Building technology infrastructure for organizations, industry and the future of energy.
            </p>
            
            {/* Gold Accent Line */}
            <div className="w-12 h-[2px] bg-[#d4af37]"></div>
            
            {/* Features Info list */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-4.5 h-4.5 flex items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-gray-300">Founded in Nigeria.</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="w-4.5 h-4.5 flex items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-gray-300">Building globally.</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="w-4.5 h-4.5 flex items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25m-11.142 0L12 7.5l4.179 2.25m-8.358 2.25L12 14.25l4.179-2.25m-8.358 2.25V18L12 20.25 16.179 18v-3.75" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-gray-300">Infrastructure First.</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a href="#" aria-label="LinkedIn" className="group w-8 h-8 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="X" className="group w-8 h-8 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="group w-8 h-8 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="group w-8 h-8 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column Group - 6 Cols total */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-5 gap-6">
            
            {/* PRODUCTS */}
            <div>
              <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-3.5">
                Products
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li className="border-b border-white/5 pb-1.5">
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    OYEN GRID
                  </Link>
                </li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-3.5">
                Industries
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Organizations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Energy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Industrial Operations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Digital Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-3.5">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/about#vision" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-3.5">
                Resources
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/news" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Brand Assets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-3.5">
                Legal
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link text-gray-400 hover:text-[#d4af37]">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column - Newsletter Form */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-3">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400 leading-normal">
              Get product updates, engineering insights and company news.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition duration-300"
              />
              <button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#e5c158] text-black font-semibold text-xs rounded-xl py-3 px-5 flex items-center justify-between transition duration-300"
              >
                <span>{isSubmitted ? 'Subscribed' : 'Subscribe'}</span>
                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section - Abstract Interactive Map */}
        <div className="relative w-full h-[130px] mb-4 border-t border-white/5 pt-3 overflow-hidden select-none">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
            {/* High-tech world map grid SVG */}
            <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="80" r="1.5" fill="white" />
              <circle cx="230" cy="70" r="1.5" fill="white" />
              <circle cx="260" cy="110" r="1" fill="white" />
              <circle cx="280" cy="140" r="2" fill="white" />
              <circle cx="310" cy="180" r="1.5" fill="white" />
              <circle cx="350" cy="220" r="2" fill="white" />
              <circle cx="430" cy="70" r="1.5" fill="white" />
              <circle cx="460" cy="65" r="1" fill="white" />
              <circle cx="500" cy="50" r="2.5" fill="white" />
              <circle cx="530" cy="90" r="1.5" fill="white" />
              <circle cx="580" cy="80" r="2.5" fill="white" />
              <circle cx="620" cy="70" r="1.5" fill="white" />
              <circle cx="650" cy="110" r="2" fill="white" />
              <circle cx="690" cy="120" r="1" fill="white" />
              <circle cx="730" cy="150" r="2" fill="white" />
              <circle cx="770" cy="180" r="1.5" fill="white" />
              <circle cx="810" cy="210" r="2" fill="white" />
              <circle cx="850" cy="240" r="1" fill="white" />
              
              {/* Interconnecting cyber paths */}
              <path d="M490 80 L465 175 M480 170 L570 130 M570 130 L710 210 M465 175 L480 170" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Interactive Glowing Cities Overlay */}
          <div className="absolute inset-0 max-w-5xl mx-auto w-full h-full">
            
            {/* London */}
            <div className="absolute left-[49%] top-[22%] flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
              </span>
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider">London</span>
            </div>

            {/* Lagos */}
            <div className="absolute left-[41.5%] top-[54%] flex items-center gap-1.5 translate-x-[-100%]">
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider">Lagos</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
              </span>
            </div>

            {/* Abuja */}
            <div className="absolute left-[45.5%] top-[58%] flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
              </span>
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider">Abuja</span>
            </div>

            {/* Dubai */}
            <div className="absolute left-[56.5%] top-[42%] flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
              </span>
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider">Dubai</span>
            </div>

            {/* Singapore */}
            <div className="absolute left-[70%] top-[68%] flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
              </span>
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider">Singapore</span>
            </div>

          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full h-[1px] bg-[#d4af37]/20 mb-5"></div>

        {/* Bottom Bar Info */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 text-[9px] text-gray-500 font-medium">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; {currentYear} OYEN GROUP. All rights reserved.</span>
            <span className="hidden md:inline text-gray-800">|</span>
            <span>Designed and Built in Nigeria.</span>
            <span className="hidden md:inline text-gray-800">|</span>
            <span className="text-[#d4af37]/80">Building Technology Infrastructure For Organizations And Industry.</span>
          </div>

          <div className="flex items-center gap-x-3">
            <span>Version 1.0</span>
            <span className="text-gray-800">|</span>
            <button className="flex items-center gap-1 hover:text-white transition duration-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
              </svg>
              <span>English</span>
              <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <span className="text-gray-800">|</span>
            <span>Powered by OYEN GROUP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
