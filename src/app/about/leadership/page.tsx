'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
  mission: string;
  vision: string;
  quote: string;
  highlights: string[];
  linkedin?: string;
}

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leaders: Leader[] = [
    {
      id: 'ahmed',
      name: 'Ahmed Al-Maktoum',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
      bio: [
        'Ahmed founded OYEN GROUP to solve a fundamental issue in contemporary technological development: the gap between transient software interfaces and enduring infrastructure.',
        'He believes that the next generation of organizations and future ecosystems must be built on platforms that prioritize structural robustness, low-latency communication networks, and long-term architectural stability.',
        'With an extensive background in digital system design, high-performance computing, and technical operations, Ahmed works directly with engineering teams to guide OYEN GROUP\'s product development, research initiatives, and long-term expansion across the African continent and globally.'
      ],
      mission: 'To engineer the foundational technologies that enable modern organizations and complex industries to scale seamlessly without technical debt.',
      vision: 'Establishing OYEN GROUP as the premier infrastructure technology provider in Africa, bringing state-of-the-art computational and industrial platforms to emerging economies.',
      quote: 'Technology should outlive trends. We\'re building OYEN GROUP to become the foundation for intelligent organizations across Africa and beyond.',
      highlights: [
        '10+ years directing digital infrastructure and enterprise platform architecture.',
        'Led development of high-performance cloud databases serving multi-million active users.',
        'Advises governmental bodies on industrial modernization and technology ecosystems.'
      ],
      linkedin: '#'
    },
    {
      id: 'sarah',
      name: 'Sarah Johnson',
      role: 'Co-Founder & COO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop',
      bio: [
        'Sarah leads operations, strategic partnerships, and technology integration at OYEN GROUP.',
        'With a track record of scaling technology systems and coordinating complex industrial operations, she ensures that OYEN GROUP\'s platforms scale efficiently and remain aligned with real-world requirements.',
        'Sarah is passionate about developing sustainable ecosystems, building strong operational teams, and expanding OYEN GROUP\'s reach across key industries, ensuring our long-term goals translate into precise execution.'
      ],
      mission: 'To build operational excellence and strategic frameworks that support scalable, compliant, and sustainable technology deployment.',
      vision: 'Creating a highly efficient, robust operational footprint that bridges software engineering with heavy industry operations.',
      quote: 'Excellence is not an accident; it is the result of deliberate infrastructure and operational discipline.',
      highlights: [
        'Former Director of Operations at a leading energy logistics and engineering firm.',
        'Successfully scaled technical systems across 5+ regional offices in Western Africa.',
        'Expert in regulatory compliance, industrial logistics, and strategic business planning.'
      ],
      linkedin: '#'
    }
  ];

  const philosophyStatements = [
    {
      title: 'Long-term Thinking',
      description: 'We prioritize architectural endurance over short-term milestones. Every database schema, network framework, and digital system we design is built to support operations for decades to come, refusing the urge to build around passing software trends.',
    },
    {
      title: 'Engineering Excellence',
      description: 'We hold our engineering to rigorous standards. Clean abstractions, comprehensive testing, and low-latency performance are not optional additions; they are the foundational requirements of systems that organizations depend on daily.',
    },
    {
      title: 'Responsible Innovation',
      description: 'As we apply emerging technologies like artificial intelligence to critical infrastructure, we do so with deliberate care. We ensure our intelligent systems remain reliable, transparent, and aligned with the safety standards of the industries we serve.',
    },
    {
      title: 'Building African Technology',
      description: 'We believe Africa should not merely consume global technology platforms, but build them. OYEN GROUP is dedicated to engineering world-class technological infrastructure right here, establishing deep technical capabilities across the continent.',
    },
    {
      title: 'Customer Obsession',
      description: 'We build deep relationships with our clients, engineering custom solutions that address their most complex, critical infrastructure challenges. Their operational success drives our design decisions and our product roadmap.',
    },
  ];

  // Handle Esc key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedLeader(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* Background Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen select-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="text-xs md:text-sm tracking-[0.35em] text-[#d4af37] uppercase font-semibold block mb-4">
            LEADERSHIP
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tight max-w-4xl">
            Building the people <br />
            behind the future.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#9ca3af] font-light max-w-2xl leading-relaxed">
            The team shaping OYEN GROUP's long-term vision.
          </p>
        </div>
      </section>

      {/* Executive Leadership Grid */}
      <section className="py-20 md:py-32 border-t border-white/5 relative z-10 bg-[#050505]/40 backdrop-blur-[2px]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              EXECUTIVE TEAM
            </span>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              Executive Leadership
            </h2>
          </div>

          {/* Premium side-by-side grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
            {leaders.map((leader) => (
              <div key={leader.id} className="group relative">
                {/* Photo container with luxury overlay and aspect ratio */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-8 border border-white/10 bg-[#111] transition-all duration-500 group-hover:border-[#d4af37]/40 shadow-2xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Cinematic gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-xs md:text-sm tracking-widest text-[#d4af37] uppercase font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {leader.bio[0]}
                  </p>
                  
                  {/* Premium Link Trigger to open expanded Bio Modal */}
                  <button
                    onClick={() => setSelectedLeader(leader)}
                    className="inline-flex items-center text-xs font-semibold text-[#d4af37] hover:text-[#e5c158] uppercase tracking-wider group/btn"
                  >
                    <span className="relative pb-0.5">
                      View Profile
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Leadership (Showcasing future roles) */}
      <section className="py-20 md:py-32 border-t border-white/5 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              ORGANIZATION
            </span>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              Meet the Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Founder */}
            <div className="border-b border-white/10 pb-8 flex flex-col justify-between h-48">
              <div className="space-y-1">
                <p className="text-[10px] tracking-wider text-gray-500 uppercase font-semibold">Founder</p>
                <h4 className="text-lg font-semibold text-white">Ahmed Al-Maktoum</h4>
              </div>
              <p className="text-xs tracking-widest text-[#d4af37] uppercase font-medium">Founder & CEO</p>
            </div>

            {/* Co-Founder */}
            <div className="border-b border-white/10 pb-8 flex flex-col justify-between h-48">
              <div className="space-y-1">
                <p className="text-[10px] tracking-wider text-gray-500 uppercase font-semibold">Co-Founder</p>
                <h4 className="text-lg font-semibold text-white">Sarah Johnson</h4>
              </div>
              <p className="text-xs tracking-widest text-[#d4af37] uppercase font-medium">Co-Founder & COO</p>
            </div>

            {/* CTO Placeholder */}
            <div className="border-b border-white/5 pb-8 flex flex-col justify-between h-48 opacity-40">
              <div className="space-y-1">
                <p className="text-[10px] tracking-wider text-gray-600 uppercase font-semibold">Coming Soon</p>
                <h4 className="text-lg font-light text-gray-400 italic">Chief Technology Officer</h4>
              </div>
              <p className="text-[10px] tracking-widest text-gray-600 uppercase font-semibold">Infrastructure & Engineering</p>
            </div>

            {/* CSO Placeholder */}
            <div className="border-b border-white/5 pb-8 flex flex-col justify-between h-48 opacity-40">
              <div className="space-y-1">
                <p className="text-[10px] tracking-wider text-gray-600 uppercase font-semibold">Coming Soon</p>
                <h4 className="text-lg font-light text-gray-400 italic">Chief Strategy Officer</h4>
              </div>
              <p className="text-[10px] tracking-widest text-gray-600 uppercase font-semibold">Ecosystem & Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-24 md:py-36 bg-[#050505]/40 backdrop-blur-[2px] border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              OUR PRINCIPLES
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              Leadership Philosophy
            </h2>
          </div>

          {/* Clean text statements with generous spacing */}
          <div className="space-y-16 md:space-y-24 max-w-4xl">
            {philosophyStatements.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="text-xl md:text-2xl font-light text-[#d4af37] flex items-center gap-3">
                    <span className="text-xs md:text-sm font-semibold tracking-wider text-white/40">{(index + 1).toString().padStart(2, '0')}</span>
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Advisors Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              GOVERNANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Governance & Advisors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-6 text-base md:text-lg text-gray-400 leading-relaxed font-light">
              <p>
                OYEN GROUP is guided by experienced professionals and strategic advisors who support our long-term vision as we continue to grow.
              </p>
            </div>
            <div className="md:col-span-6 text-base md:text-lg text-gray-400 leading-relaxed font-light">
              <p>
                Our governance framework is designed to support scalable expansion, ensuring transparency, robust corporate oversight, and deep compliance as we partner with major industries and organizations.
              </p>
            </div>
          </div>

          {/* Governance Pillars placeholders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Independent Advisors</h4>
              <p className="text-xs text-gray-500 font-light">Strategic governance and independent compliance guidance.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Strategic Partnerships</h4>
              <p className="text-xs text-gray-500 font-light">Collaborations driving structural growth and regional access.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Industry Experts</h4>
              <p className="text-xs text-gray-500 font-light">Subject matter experts across energy, software, and ecosystems.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Future Board</h4>
              <p className="text-xs text-gray-500 font-light">Formal fiduciary board structuring in progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section className="py-32 md:py-48 bg-[#050505]/40 backdrop-blur-[2px] border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-8">
            FUTURE OUTLOOK
          </span>
          <p className="text-2xl sm:text-4xl md:text-5xl font-light text-white leading-[1.25] tracking-tight max-w-4xl mx-auto italic">
            "Our ambition isn't to build another software company. It's to build one of Africa's most influential technology companies—creating platforms that strengthen organizations, industries, and future generations."
          </p>
        </div>
      </section>

      {/* Contact Leadership Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative z-10">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-light text-white mb-6">
            Get in touch with the executive office.
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto font-light">
            For strategic partnerships, speaking engagements, or investment discussions, reach out to our leadership team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center group px-6 py-3.5 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#e5c158] transition-colors duration-300 shadow-md"
          >
            <span>Contact Leadership</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Luxury Interactive Profile Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          {/* Main Modal Card */}
          <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-10 z-50">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close Profile"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-4">
              {/* Left Column: Portrait */}
              <div className="md:col-span-5">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/5 bg-[#111]">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Dynamic Info */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <span className="text-xs md:text-sm tracking-widest text-[#d4af37] uppercase font-semibold">
                    {selectedLeader.role}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mt-1">
                    {selectedLeader.name}
                  </h3>
                </div>

                {/* Biography Paragraphs */}
                <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed font-light">
                  {selectedLeader.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Quotation */}
                <blockquote className="border-l-2 border-[#d4af37] pl-4 italic text-white/90 text-sm md:text-base">
                  "{selectedLeader.quote}"
                </blockquote>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <h5 className="text-[10px] tracking-wider text-[#d4af37] uppercase font-bold mb-1">Mission</h5>
                    <p className="text-xs text-gray-400 leading-normal font-light">{selectedLeader.mission}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] tracking-wider text-[#d4af37] uppercase font-bold mb-1">Vision</h5>
                    <p className="text-xs text-gray-400 leading-normal font-light">{selectedLeader.vision}</p>
                  </div>
                </div>

                {/* Career Highlights */}
                <div className="pt-4 border-t border-white/5">
                  <h5 className="text-[10px] tracking-wider text-[#d4af37] uppercase font-bold mb-2">Career Highlights</h5>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs text-gray-400 font-light">
                    {selectedLeader.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Clickable Background overlay backstop */}
          <div
            onClick={() => setSelectedLeader(null)}
            className="absolute inset-0 z-40 cursor-default"
          />
        </div>
      )}
    </main>
  );
}
