import React from "react";

const AboutVisionSection = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#4a4e57] mb-6">What We Do – Advancing Healthcare Technologies</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    At AEON, we advance cutting-edge healthcare technologies to continuously improve our processes and bring significant improvements in the lives of our patients. The use of the latest in laboratory technology and automated processes allows us to be a leading industry player in quality assurance and reporting accuracy.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-[#4a4e57] mb-6">Who We Are – An Emerging Leader</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        <strong>We are an Emerging Leader in the Provision of Clinically Actionable Information.</strong>
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        AEON Global Health is a leading healthcare company that drives better patient care and healthier lives. At our core, is a relentless focus on information – information that empowers healthcare professionals to make better and informed decisions.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We offer a broad portfolio of market-leading solutions that are well-aligned with long-term healthcare trends. Our mission is to help in the prevention, diagnosis, and treatment of diseases by providing healthcare professionals with clinically actionable information that promotes patient‐centric, personalized medical care.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-[#4a4e57] mb-4">Our Vision</h4>
                        <p className="text-lg text-gray-600 font-semibold">To be an Admired Global Healthcare Company Inspiring Better Lives</p>
                    </div>
                </div>

                <div className="bg-[#4a4e57] rounded-lg p-8 text-white">
                    <div className="text-center">
                        <div className="text-6xl text-[#65bc7b] mb-4">🔬</div>
                        <h3 className="text-2xl font-semibold mb-4">Diagnostic Services</h3>
                        <p className="leading-relaxed mb-6">
                            Diagnostic test results, including blood tests, influence more than 70% of medical decisions. About 50% of the information in the average medical chart comes from laboratory data.
                        </p>
                        <div className="space-y-3 text-left">
                            <div className="flex items-center">
                                <span className="text-[#65bc7b] mr-3 text-xl">•</span>
                                <span>Cancer Genomics</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#65bc7b] mr-3 text-xl">•</span>
                                <span>Pharmacogenomics</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#65bc7b] mr-3 text-xl">•</span>
                                <span>Toxicology</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#65bc7b] mr-3 text-xl">•</span>
                                <span>Blood Wellness</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutVisionSection; 