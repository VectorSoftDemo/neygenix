export default function ValuesSection() {
  const values = [
    {
      title: "Diversity",
      description: "We embrace diversity in all its forms and believe it strengthens our organization.",
      icon: "🤝"
    },
    {
      title: "Respect",
      description: "We treat everyone with dignity and respect, fostering an inclusive environment.",
      icon: "🙏"
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices.",
      icon: "⚖️"
    },
    {
      title: "Valor",
      description: "We demonstrate courage in facing challenges and making difficult decisions.",
      icon: "💪"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, continuously improving our services.",
      icon: "⭐"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4a4e57] mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do and shape our company culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-[#4a4e57] mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}