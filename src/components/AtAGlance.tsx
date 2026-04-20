export default function AtAGlance() {
  const items = [
    {
      number: '01',
      title: 'Global Operations',
      description: 'Operating across multiple continents with integrated upstream, midstream, and downstream capabilities.',
    },
    {
      number: '02',
      title: 'Proven Track Record',
      description: 'Delivering consistent results with decades of expertise in complex energy projects and markets.',
    },
    {
      number: '03',
      title: 'Advanced Technology',
      description: 'Leveraging digital innovation, AI, and data analytics to optimize operations and drive efficiency.',
    },
    {
      number: '04',
      title: 'Sustainability Focus',
      description: 'Committed to reducing carbon footprint and advancing cleaner energy solutions for the future.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-default transition-transform duration-300 hover:translate-y-[-4px]"
            >
              {/* Number */}
              <p className="text-lg font-medium text-[#d4af37] mb-2">
                {item.number}
              </p>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
