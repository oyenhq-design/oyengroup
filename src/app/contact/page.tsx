'use client';

import Link from 'next/link';
import { FormEvent, useState, useRef } from 'react';

type TopicType = 'Organization' | 'Partnership' | 'Investment' | 'Media' | 'General';

export default function Contact() {
  const [topic, setTopic] = useState<TopicType>('General');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'How quickly do you respond?',
      a: 'Usually within 1–2 business days.',
    },
    {
      q: 'Can I request a demo?',
      a: 'Yes.',
    },
    {
      q: 'Do you work internationally?',
      a: 'Yes.',
    },
    {
      q: 'Can I invest in OYEN GROUP?',
      a: 'We welcome conversations with investors who share our long-term vision.',
    },
  ];

  const handleCardClick = (selectedTopic: TopicType) => {
    setTopic(selectedTopic);
    // Smooth scroll to the form section
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'topic') {
      setTopic(value as TopicType);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Routing enquiry to relevant department:', {
      department: topic === 'Organization' ? 'Sales / Product Team'
                  : topic === 'Investment' ? 'Investor Relations'
                  : topic === 'Partnership' ? 'Business Development'
                  : topic === 'Media' ? 'Communications'
                  : 'General Inbox',
      data: formData
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', organization: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <main className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-black opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold mb-4 block">
            CONTACT
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight max-w-4xl">
            Let's Build The Future Together.
          </h1>
          <p className="text-base md:text-xl text-[#9ca3af] leading-relaxed max-w-2xl">
            Whether you're exploring partnership opportunities, interested in our technology, or simply want to connect, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Section 1: How Can We Help? */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">How Can We Help?</h2>
            <p className="text-xs text-gray-400 mt-2">Select a path below to direct your enquiry to the right department.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Organizations */}
            <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 flex flex-col justify-between hover:border-[#d4af37]/30 transition duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest block">Organizations</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">Modernize your operations</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Interested in adopting OYEN products for your organization.</p>
              </div>
              <button
                onClick={() => handleCardClick('Organization')}
                className="mt-8 inline-flex items-center gap-1 text-xs font-bold text-[#d4af37] hover:text-white transition duration-200"
              >
                <span>Explore Solutions</span>
                <span>→</span>
              </button>
            </div>

            {/* Investors */}
            <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 flex flex-col justify-between hover:border-[#d4af37]/30 transition duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest block">Investors</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">Learn about OYEN</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Looking to discuss investment opportunities or company growth.</p>
              </div>
              <button
                onClick={() => handleCardClick('Investment')}
                className="mt-8 inline-flex items-center gap-1 text-xs font-bold text-[#d4af37] hover:text-white transition duration-200"
              >
                <span>Investor Relations</span>
                <span>→</span>
              </button>
            </div>

            {/* Partnerships */}
            <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 flex flex-col justify-between hover:border-[#d4af37]/30 transition duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest block">Partnerships</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">Build together</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Interested in collaborating with OYEN GROUP on strategic projects.</p>
              </div>
              <button
                onClick={() => handleCardClick('Partnership')}
                className="mt-8 inline-flex items-center gap-1 text-xs font-bold text-[#d4af37] hover:text-white transition duration-200"
              >
                <span>Become a Partner</span>
                <span>→</span>
              </button>
            </div>

            {/* General */}
            <div className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 flex flex-col justify-between hover:border-[#d4af37]/30 transition duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest block">General</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">Questions & Support</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Questions, feedback or media and communication requests.</p>
              </div>
              <button
                onClick={() => handleCardClick('General')}
                className="mt-8 inline-flex items-center gap-1 text-xs font-bold text-[#d4af37] hover:text-white transition duration-200"
              >
                <span>Contact Us</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Send Us A Message */}
      <section ref={formSectionRef} className="py-20 md:py-24 bg-[#050505] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Block */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Start A Conversation.
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Every meaningful partnership begins with a conversation. We're always interested in connecting with organizations, investors and innovators.
              </p>
            </div>

            {/* Right Block - Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5 bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="topic" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Select Topic</label>
                    <select
                      id="topic"
                      name="topic"
                      value={topic}
                      onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition"
                    >
                      <option value="Organization">Organization (Sales / Product)</option>
                      <option value="Partnership">Partnership (Business Dev)</option>
                      <option value="Investment">Investment (Investor Relations)</option>
                      <option value="Media">Media (Communications)</option>
                      <option value="General">General (General Inbox)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#e5c158] text-black font-semibold text-xs rounded-xl py-3.5 transition duration-300"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-3 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-xl text-center animate-pulse">
                    Thank you! Your message has been routed to the relevant team.
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Contact Information */}
      <section className="py-16 bg-[#080808] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 text-center">
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider block mb-2">Email</span>
              <a href="mailto:contact@oyengroup.com" className="text-sm font-semibold text-white hover:text-[#d4af37] transition duration-200">
                contact@oyengroup.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 text-center">
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider block mb-2">Phone</span>
              <a href="tel:+234" className="text-sm font-semibold text-white hover:text-[#d4af37] transition duration-200">
                +234 XXX XXX XXXX
              </a>
            </div>

            {/* Location */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6.5 text-center">
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider block mb-2">Location</span>
              <p className="text-sm font-semibold text-white">Nigeria</p>
              <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Serving organizations globally</p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Connect With Us */}
      <section className="py-10 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Connect With Us</span>
          
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="group w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
              <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="X" className="group w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
              <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="group w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
              <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="group w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:bg-[#141414] transition-all">
              <svg className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Frequently Asked Questions */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              
              return (
                <div key={idx} className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold hover:text-[#d4af37] transition duration-200"
                  >
                    <span>{item.q}</span>
                    <span className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-24 opacity-100 border-t border-white/5 p-5' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Technology has the power to transform organizations and industries. Let's start the conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                if (formSectionRef.current) {
                  formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3.5 text-xs font-semibold tracking-wider bg-[#d4af37] hover:bg-[#e5c158] text-black rounded-xl transition duration-300 shadow-md shadow-[#d4af37]/10"
            >
              Partner With Us
            </button>
            <Link
              href="https://oyengridlanding.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-semibold tracking-wider bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-xl transition duration-300"
            >
              Explore OYEN GRID
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
