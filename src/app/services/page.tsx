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
      <section className="bg-black text-white py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Services</h1>
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
            Comprehensive solutions designed to meet your business needs.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              className={`mb-16 ${index % 2 === 0 ? 'flex flex-col md:flex-row' : 'flex flex-col md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-lg text-[#9ca3af] mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#9ca3af]">
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 bg-[#111827] h-64 rounded-lg flex items-center justify-center border border-[#1f2937]">
                <span className="text-[#9ca3af]">Service visualization</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
