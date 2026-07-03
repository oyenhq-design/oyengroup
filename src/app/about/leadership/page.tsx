import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Leadership - OYEN GROUP',
  description: 'Meet the team building OYEN GROUP for the next generation of technology infrastructure.',
};

export default function LeadershipPage() {
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

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/5 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <span className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
            Leadership
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight max-w-3xl tracking-tight">
            Building technology with <br />
            long-term vision.
          </h1>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-24 md:py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Meet the People Leading Our Vision
            </h2>
          </div>
          
          <div className="space-y-24 md:space-y-32">
            {/* Ahmed Al-Maktoum */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/10 bg-[#111]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                    alt="Ahmed Al-Maktoum, Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Ahmed Al-Maktoum</h3>
                  <p className="text-xs md:text-sm tracking-widest text-[#d4af37] uppercase font-medium">Founder & CEO</p>
                </div>
                <div className="space-y-4 text-base text-gray-400 leading-relaxed font-light">
                  <p>
                    Ahmed founded OYEN GROUP to solve a fundamental issue in contemporary technological development: the gap between transient software interfaces and enduring infrastructure. He believes that the next generation of organizations and future ecosystems must be built on platforms that prioritize structural robustness and engineering discipline.
                  </p>
                  <p>
                    With extensive background in digital system design and technical operations, Ahmed works directly with engineering teams to guide OYEN GROUP's product development, research initiatives, and long-term expansion across the African continent and globally.
                  </p>
                </div>
                <blockquote className="border-l-2 border-[#d4af37] pl-6 py-1 italic text-lg font-light text-white">
                  "Technology should outlive trends. We're building OYEN GROUP to become the foundation for intelligent organizations across Africa and beyond."
                </blockquote>
              </div>
            </div>

            {/* Sarah Johnson */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-5 md:order-last">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/10 bg-[#111]">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop"
                    alt="Sarah Johnson, Co-Founder & COO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Sarah Johnson</h3>
                  <p className="text-xs md:text-sm tracking-widest text-[#d4af37] uppercase font-medium">Co-Founder & COO</p>
                </div>
                <div className="space-y-4 text-base text-gray-400 leading-relaxed font-light">
                  <p>
                    Sarah leads operations, strategic partnerships, and technology integration at OYEN GROUP. With a track record of scaling technology systems and coordinating complex industrial operations, she ensures that OYEN GROUP's platforms scale efficiently and remain aligned with real-world requirements.
                  </p>
                  <p>
                    Sarah is passionate about developing sustainable ecosystems, building strong operational teams, and expanding OYEN GROUP's reach across key industries, ensuring our long-term goals translate into precise execution.
                  </p>
                </div>
                <blockquote className="border-l-2 border-[#d4af37] pl-6 py-1 italic text-lg font-light text-white">
                  "Excellence is not an accident; it is the result of deliberate infrastructure and operational discipline."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Leadership Philosophy
            </h2>
          </div>

          {/* Clean text statements (no cards or feature boxes) */}
          <div className="space-y-12 md:space-y-16 max-w-4xl">
            {philosophyStatements.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Advisors Section */}
      <section className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
              GOVERNANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Governance & Advisors
            </h2>
          </div>

          <div className="max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed font-light space-y-6">
            <p>
              OYEN GROUP is guided by experienced professionals and strategic advisors who support our long-term vision as we continue to grow.
            </p>
            <p>
              Our governance framework is designed to support scalable expansion, ensuring transparency, robust corporate oversight, and deep compliance as we partner with major industries and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Building the Future Section */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-6">
            Future Outlook
          </span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-tight max-w-3xl mx-auto">
            Our ambition isn't to build another software company. It's to build one of Africa's most influential technology companies—creating platforms that strengthen organizations, industries, and future generations.
          </p>
        </div>
      </section>

      {/* Contact Leadership Section */}
      <section className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative">
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
    </main>
  );
}
