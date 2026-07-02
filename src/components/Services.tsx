'use client';

export default function Services() {
  const features = [
    {
      title: 'Digital Infrastructure',
      description: 'Building connected software platforms that modernize how organizations operate, collaborate, and grow.',
    },
    {
      title: 'Intelligence & Innovation',
      description: 'Applying artificial intelligence and emerging technologies to improve decision-making, automation, and operational efficiency.',
    },
    {
      title: 'Industry & Energy',
      description: 'Developing technology and engineering solutions that support the future of energy, industrial operations, and sustainable infrastructure.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Block - Center Aligned */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Label */}
          <p className="text-sm tracking-widest text-[#d4af37] uppercase font-semibold mb-6">
            DISCOVER OYEN
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
            Engineering Tomorrow Through Technology.
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed">
            OYEN GROUP is a technology company building digital infrastructure, intelligent software, and future industrial solutions that help organizations and industries operate more efficiently. Our long-term vision extends beyond software into artificial intelligence, engineering innovation, and energy technology.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/5 rounded-xl p-8 hover:border-[#d4af37]/50 transition duration-300 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
