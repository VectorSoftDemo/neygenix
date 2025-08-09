
import Image from "next/image";

export default function ServicesPage() {
    const services = [
        {
            title: "Pharmacogenomics Testing",
            desc: "Identify how a patient's genes influence their response to medications. This personalized approach helps reduce adverse effects and optimize drug therapy.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/pgx-1.png",
        },
        {
            title: "Toxicology Testing",
            desc: "Detect the presence of drugs, chemicals, or other toxic substances in the body. Widely used for compliance monitoring, pain management, and workplace screening.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/tox-1.png",
        },
        {
            title: "COVID-19 Testing",
            desc: "Fast and reliable PCR, Antigen, and Antibody tests to help detect current or past infection and manage community health risks.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/covid19.png",
        },
        {
            title: "Molecular Diagnostics",
            desc: "Advanced techniques like PCR and RT-PCR for detecting pathogens and genetic mutations with high sensitivity and specificity.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/molecular.png",
        },
        {
            title: "Blood Chemistry Panels",
            desc: "Comprehensive metabolic panels, liver function tests, and lipid profiles to evaluate overall health and detect disorders.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/blood-panel.png",
        },
        {
            title: "Pathology Services",
            desc: "Accurate analysis of tissue samples for cancer diagnosis, infection identification, and disease staging.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/pathology.png",
        },
        {
            title: "Genetic Carrier Screening",
            desc: "Screen individuals or couples for inherited genetic conditions that could be passed on to their children, aiding in family planning.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/genetic-screening.png",
        },
        {
            title: "Women's Health Panels",
            desc: "Comprehensive tests including hormone levels, reproductive health markers, and cancer screening tailored for women’s wellness.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/women-health.png",
        },
        {
            title: "Infectious Disease Panels",
            desc: "Multiplex PCR panels to rapidly detect a wide range of viral, bacterial, and fungal pathogens from a single sample.",
            img: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/infectious.png",
        },


    ];

    return (
        <main>
          
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#46A941] to-[#2F855A] text-white min-h-[30vh] flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Comprehensive Diagnostic Services</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        We deliver cutting-edge testing solutions that enable precise, personalized healthcare for better patient outcomes.
                    </p>
                </div>
            </section>
            {/* Curve Separator */}
            {/* <Curve innerColor="#424492" outerColor="#EFEFEF" className="rotate-180" /> */}

            {/* Services Overview */}
            <section className="bg-[#F7F7F7] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={200}
                                height={200}
                                className="object-contain mb-4"
                            />
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#292929] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                            <button className="mt-4 bg-[#46A941] hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold text-sm sm:text-base">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg- py-16 px-6 sm:px-10 md:px-20 lg:px-32">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2124ca] mb-6">Why Choose Neugenix Diagnostics?</h2>
                    <p className="text-gray-800 text-base sm:text-lg mb-10">
                        We blend innovation, precision, and compassion to deliver world-class diagnostic services. Here's why we're trusted by healthcare providers nationwide:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Cutting-edge Technology</h3>
                            <p className="text-gray-600 text-sm">Utilizing the latest diagnostic platforms for fast, accurate, and reliable results.</p>
                        </div>
                        <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Certified Lab Experts</h3>
                            <p className="text-gray-600 text-sm">Our team includes board-certified pathologists, lab technologists, and data analysts.</p>
                        </div>
                        <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Rapid Turnaround</h3>
                            <p className="text-gray-600 text-sm">Timely results delivered to empower quick clinical decision-making.</p>
                        </div>
                        <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-[#292929] mb-2">Nationwide Reach</h3>
                            <p className="text-gray-600 text-sm">Serving clinics, hospitals, and physicians across the U.S. with dedicated support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F7F7] py-16 px-6 sm:px-10 md:px-20 lg:px-32">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#424492]">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <p className="text-gray-700 text-sm mb-4">"Their PGx testing helped us adjust prescriptions and reduce side effects for our patients. Truly transformative service."</p>
                        <h4 className="font-semibold text-[#46A941]">Dr. Priya S., Internal Medicine</h4>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <p className="text-gray-700 text-sm mb-4">"Quick turnaround and precise toxicology results have helped us streamline our occupational health testing."</p>
                        <h4 className="font-semibold text-[#46A941]">John M., HR Director</h4>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <p className="text-gray-700 text-sm mb-4">"Very responsive team and excellent molecular diagnostics. Highly recommended for clinical practices."</p>
                        <h4 className="font-semibold text-[#46A941]">Dr. Emily R., Family Physician</h4>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#] text-black text-center py-12 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Partner with Us?
                </h2>
                <p className="mb-6 text-base sm:text-lg max-w-2xl mx-auto">
                    Discover how our diagnostic solutions can transform your care delivery and improve patient outcomes.
                </p>
                <button className="bg-white text-[#0e0f0e] font-semibold px-6 py-3 rounded-3xl hover:bg-[#46A941] hover:text-white transition-colors">
                    Contact Us
                </button>
            </section>
        </main>
    );
}
