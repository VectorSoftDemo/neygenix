import React from "react";

const AboutResponsibleCitizenshipSection = () => (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#4a4e57] mb-4">Supporting Patients</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    At AEON, we strive to continuously improve our processes and bring significant improvements in the lives of our patients.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl font-semibold text-[#4a4e57] mb-4">Patient Safety</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We know that our work impacts the lives of people. We also understand that healthcare professionals depend on us to provide them with accurate information so that they can make informed decisions about their patients.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Our approach is patient-centric. For us, patient safety comes first. AEON prides itself in ensuring quality, accuracy and speed in reporting – our reports are reviewed multiple times before being released to physicians. We enable physicians to prescribe with confidence.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="text-[#65bc7b] mr-3">•</span>
                            <span className="text-gray-600">Multiple review process for accuracy</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#65bc7b] mr-3">•</span>
                            <span className="text-gray-600">Patient-centric approach</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#65bc7b] mr-3">•</span>
                            <span className="text-gray-600">Fast turnaround times</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl font-semibold text-[#4a4e57] mb-4">Innovative Testing Solutions</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        AEON's innovative testing solutions and methodologies make us a leading player in the market. Our test menu is an important first step in the overall treatment decisions rendered by medical professionals.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        From our fast turnaround times to our clear and comprehensive reporting, our highly trained team of professionals offer outstanding customer service.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="text-[#65bc7b] mr-3">•</span>
                            <span className="text-gray-600">Cutting-edge methodologies</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#65bc7b] mr-3">•</span>
                            <span className="text-gray-600">Comprehensive test menu</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#65bc7b] mr-3">•</span>
                            <span className="text-gray-600">Highly trained professionals</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default AboutResponsibleCitizenshipSection; 