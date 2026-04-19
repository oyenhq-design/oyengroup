export const metadata = {
  title: 'Services - Oyengroup',
  description: 'Explore our comprehensive range of services.',
};

export default function Services() {
  const serviceDetails = [
    {
      id: 1,
      icon: '🎯',
      title: 'Strategic Consulting',
      description:
        'Our expert consultants work closely with your team to develop strategies that drive growth and maximize your competitive advantage.',
      features: ['Market Analysis', 'Business Strategy', 'Process Optimization', 'Risk Management'],
    },
    {
      id: 2,
      icon: '💻',
      title: 'Custom Development',
      description:
        'From concept to deployment, we build custom solutions tailored to your unique business requirements.',
      features: ['Web Development', 'Mobile Apps', 'API Integration', 'Cloud Solutions'],
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Digital Transformation',
      description:
        'Accelerate your digital journey with our comprehensive transformation services and expertise.',
      features: ['Legacy Modernization', 'Cloud Migration', 'Automation', 'Data Analytics'],
    },
    {
      id: 4,
      icon: '🤝',
      title: '24/7 Support',
      description:
        'Our dedicated support team ensures your systems run smoothly around the clock with minimal downtime.',
      features: ['Technical Support', 'Maintenance', 'Monitoring', 'Quick Response Times'],
    },
  ];

  return (
    <main>
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive solutions designed to meet your business needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              className={`mb-16 ${index % 2 === 0 ? 'flex flex-col md:flex-row' : 'flex flex-col md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 bg-blue-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Service visualization</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
