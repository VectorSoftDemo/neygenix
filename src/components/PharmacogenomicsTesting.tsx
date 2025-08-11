import Image from "next/image";

export default function PharmacogenomicsTesting() {
    const whyAeon = [
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/TOX-Icon-1-66x66.png",
            title: "Broad Quantitative Testing",
            description: "We provide precise, rapid quantitative analysis of drug metabolites in urine and oral fluids. Our testing covers over 80 analytes and metabolites, ensuring comprehensive and reliable results for every patient sample."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/CGX-Icon-2-66x66.png",
            title: "State-of-the-Art Technology",
            description: "We utilize advanced HPLC-tandem mass spectrometry to analyze a wide range of analytes with high selectivity and sensitivity. This technology allows us to process large volumes efficiently and deliver accurate results."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/BDX-Icon-2-66x66.png",
            title: "Effective Quality Controls",
            description: "Our rigorous Quality Control program minimizes the risk of errors. Every test result is thoroughly reviewed, and final reports are examined by senior scientists to ensure accuracy and reliability for clinicians."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-5-66x66.png",
            title: "Well-Trained Scientists",
            description: "Our experienced management and Ph.D. scientists handle every specimen with care. Our team is available for consultations, and our advisory board ensures we remain leaders in clinical diagnostics and healthcare innovation."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/TOX-Icon-5-66x66.png",
            title: "Quick Turnaround Time",
            description: "By leveraging the latest technology, we analyze specimens swiftly and precisely. Our high-throughput systems enable us to provide rapid, dependable turnaround times for all toxicology and pharmacogenomics testing."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-6-66x66.png",
            title: "Clear, Actionable Reports",
            description: "Our reports are easy to interpret and clinically actionable, delivered securely via portal, fax, or EMR. Our experts are available to help physicians understand results and apply them to patient care strategies."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-7-66x66.png",
            title: "Exceptional Customer Service",
            description: "We are committed to outstanding customer service, offering tailored support to healthcare professionals. Our team ensures effective communication and helps optimize patient care at every step of the process."
        }
    ]
    return (
        <section className="flex flex-col items-center w-full px-2 py-8 sm:px-3 md:px-4 lg:px-10 xl:px-15">
            {/* Who can Benefit */}
            <div className="flex flex-col w-full gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center text-[#144afc]">
                    Who can Benefit from Toxicology Testing?
                </h1>
                <p className="text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl text-left">
                    Toxicology examination delivers essential information and insights that regulatory authorities and healthcare professionals can utilize to establish policies and provide treatment that restricts substance exposures, diminishing the probability of adverse drug reactions and harmful health consequences.
                </p>
                <p className="text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl font-semibold text-left">
                    Toxicology examinations assist physicians to:
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-start gap-4 mt-2 w-full ">
                    <ul className="list-disc pl-5 flex-1 space-y-1 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl">
                        <li>Observe the patient's treatment</li>
                        <li>Verify suspected toxicity</li>
                        <li>Recognize potential risks from other medications and help prevent combined drug toxicity</li>
                        <li>Identify if a patient shows inadequate response</li>
                        <li>Track patient's adherence to treatment</li>
                    </ul>
                </div>
            </div>
            {/* Why Neugenix */}
            <div className="flex flex-col items-center pt-10 w-full">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center text-[#144afc]">Why Neugenix?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full ">
                    {whyAeon.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 h-full transition hover:shadow-lg"
                        >
                            <div className="flex justify-center items-center mb-3 w-full">
                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                        loading="lazy"
                                        sizes="(max-width: 640px) 3rem, (max-width: 768px) 3.5rem, (max-width: 1024px) 4rem, (max-width: 1280px) 5rem, 6rem"
                                    />
                                </div>
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold text-center text-[#144afc] mb-2">{item.title}</h2>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-left text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}