import React from "react";

const AboutCallToActionSection = () => (
    <section className="py-20 bg-[#4a4e57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of healthcare providers who trust AEON Global Health for their diagnostic testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#65bc7b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    Contact Us Today
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4a4e57] transition-colors">
                    View Our Services
                </button>
            </div>
        </div>
    </section>
);

export default AboutCallToActionSection; 