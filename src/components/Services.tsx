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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
