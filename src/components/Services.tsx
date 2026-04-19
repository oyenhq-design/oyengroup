'use client';

export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'Strategic Consulting',
      description: 'Expert guidance to help you achieve your business goals and overcome challenges.',
    },
    {
      icon: '💻',
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize your operations and stay competitive in the digital age.',
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock to assist you.',
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Our Services</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">{service.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
