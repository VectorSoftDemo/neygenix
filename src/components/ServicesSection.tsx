export default function ServicesSection() {
  const services = [
    {
      title: "Pharmacogenomics Testing",
      description: "Advanced genetic testing to determine how your body processes medications, enabling personalized treatment plans.",
      icon: "🧬",
      features: ["Genetic Analysis", "Medication Optimization", "Personalized Reports"]
    },
    {
      title: "Drug Testing Facilities",
      description: "Comprehensive drug screening services for workplace safety, legal compliance, and medical purposes.",
      icon: "🔬",
      features: ["Workplace Testing", "Legal Compliance", "Quick Results"]
    },
    {
      title: "COVID-19 Testing",
      description: "Reliable and fast COVID-19 testing services including PCR and rapid antigen tests.",
      icon: "🦠",
      features: ["PCR Testing", "Rapid Results", "Travel Certificates"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4a4e57] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge medical laboratory services with the highest standards of accuracy and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#4a4e57] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[#65bc7b] mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-[#65bc7b] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}