import React from "react";

const coreValues = [
    {
        title: "DIVERSITY",
        icon: "🌎",
        description: "We attract and nurture a diverse group of employees and perspectives."
    },
    {
        title: "RESPECT",
        icon: "🤝",
        description: "We value every individual and treat everyone with dignity."
    },
    {
        title: "INTEGRITY",
        icon: "🛡️",
        description: "We operate with transparency, honesty, and ethical practices."
    },
    {
        title: "VALOR",
        icon: "🏅",
        description: "We face challenges with courage and determination."
    },
    {
        title: "EXCELLENCE",
        icon: "⭐",
        description: "We strive for superior quality in every aspect of our services."
    },
];

const AboutCoreValuesSection = () => (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#4a4e57] mb-4">What We Believe In – Our Core Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We are committed to positively impact the lives of our patients and physicians through innovation and leadership in the field of healthcare diagnostics.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {coreValues.map((value, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-bold text-[#4a4e57] mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AboutCoreValuesSection; 