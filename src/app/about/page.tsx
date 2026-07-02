export const metadata = {
  title: 'About Us - Oyengroup',
  description: 'Learn more about Oyengroup and our mission.',
};

export default function About() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About OYEN GROUP</h1>
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
            Building the technology infrastructure and engineering solutions of tomorrow.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-base text-[#9ca3af] mb-4 leading-relaxed">
                OYEN GROUP was founded with a long-term vision to bridge the gap between complex industrial systems and modern software design. What started as a focus on digital tools has evolved into a strategic path targeting connected infrastructure, artificial intelligence, and sustainable technology.
              </p>
              <p className="text-base text-[#9ca3af] leading-relaxed">
                As a team of engineers, developers, and innovators, we construct products that help organizations and industries scale smoothly, automate workflows, and operate with maximum efficiency.
              </p>
            </div>
            <div className="bg-[#111] h-64 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent pointer-events-none" />
              <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">OYEN GROUP HEADQUARTERS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-20 md:py-24 lg:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold mb-4 block">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Engineering The Future Through Technology.
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed mb-8 max-w-3xl mx-auto">
            We believe technology is the foundation of progress. Our mission is to build intelligent products, digital infrastructure, and future industrial solutions that empower organizations, strengthen industries, and contribute to a more innovative and sustainable world.
          </p>
          <div className="inline-block px-4.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[10px] font-bold tracking-wider text-[#d4af37] uppercase">
            Engineering Progress. Building The Future.
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#111] rounded-xl border border-white/5">
              <h3 className="text-4xl font-bold text-[#d4af37] mb-2">1,280+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Active Participants</p>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-xl border border-white/5">
              <h3 className="text-4xl font-bold text-[#d4af37] mb-2">14+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Cohorts Coordinated</p>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-xl border border-white/5">
              <h3 className="text-4xl font-bold text-[#d4af37] mb-2">100%</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Reliability Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#050505] p-10 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Core Principles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div>
                <h3 className="text-lg font-bold text-[#d4af37] mb-3">Innovation First</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  We constantly push boundaries, adopting emerging technologies to build robust, modern digital products.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#d4af37] mb-3">Sustained Progress</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  We commit to building long-term value, focusing on strategic steps that strengthen industrial and organizational operations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#d4af37] mb-3">Engineering Quality</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  Exceptional quality forms the foundation of all our systems. We build robust tools designed to scale securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
