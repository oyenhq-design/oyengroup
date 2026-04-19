'use client';

export default function Services() {
  const features = [
    {
      title: 'Tools',
      description: 'Advanced technology designed for optimal performance and efficiency.',
    },
    {
      title: 'Learning',
      description: 'Continuous insights and resources to drive innovation and growth.',
    },
    {
      title: 'Insights',
      description: 'Data-driven intelligence to inform strategic decision making.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Block - Center Aligned */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* Label */}
          <p className="text-sm tracking-widest text-[#d4af37] uppercase font-semibold mb-6">
            Discover OYEN
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
            Everything You Need to Succeed
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed">
            Comprehensive solutions and resources tailored to your business objectives and growth aspirations.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/5 rounded-xl p-6 hover:border-[#d4af37] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
