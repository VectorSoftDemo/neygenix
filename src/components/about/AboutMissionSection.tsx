import React from "react";

const AboutMissionSection = () => (
    <section className="py-20  bg-gradient-to-r from-[#65bc7b] to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#4a4e57] mb-6">Responsible Citizenship</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    AEON has an enduring commitment to be a responsible business. We run our business in the right way – for the benefit of the people we serve, including patients, shareholders, employees, and our communities.
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                    As a health care company, people depend on our services to help them live healthier and better lives. That's why responsible citizenship is integrated throughout our business.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-[#4a4e57] mb-6">Investing in the Future</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        At AEON, we believe in applying our skills and know-how to address global challenges so that we can help our communities reach their full potential and lay the foundation for progress.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-[#65bc7b] mr-3 text-xl mt-1">•</span>
                            <div>
                                <h4 className="font-semibold text-[#4a4e57]">Welcoming Interns and Promoting Education</h4>
                                <p className="text-gray-600 text-sm">Creating opportunities for talented youth to work with experienced professionals</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#65bc7b] mr-3 text-xl mt-1">•</span>
                            <div>
                                <h4 className="font-semibold text-[#4a4e57]">Scholarship Programs</h4>
                                <p className="text-gray-600 text-sm">Supporting education through various scholarship initiatives</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                    <div className="text-center">
                        <div className="text-6xl text-[#65bc7b] mb-4">🎓</div>
                        <h3 className="text-2xl font-semibold text-[#4a4e57] mb-4">Education Initiatives</h3>
                        <p className="text-gray-600 mb-4">
                            Creating a better tomorrow by offering opportunities for attaining good quality education.
                        </p>
                        <ul className="text-left space-y-2 text-sm">
                            <li className="flex items-center">
                                <span className="text-[#65bc7b] mr-2">•</span>
                                <span>Endowment Fund at UGA</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#65bc7b] mr-2">•</span>
                                <span>Scholarship for Medical Students from India</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#65bc7b] mr-2">•</span>
                                <span>Supporting the Aga Khan Foundation USA</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMissionSection; 