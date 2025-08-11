import Image from "next/image";

export default function PharmacogenomicsTesting() {
    const whyAeon = [
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/TOX-Icon-1-66x66.png",
            title: "Broad Quantitative Testing",
            description: "We provide precise and swift quantitative examination of drug metabolite concentrations in urine and oral fluids. Our analysis encompasses over 80 analytes and metabolites (generated in the body following drug consumption)."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/CGX-Icon-2-66x66.png",
            title: "State-of-the-Art Technology",
            description: "Our HPLC-tandem mass spectrometry possesses the capability to examine broader molecular weight and polarity ranges of analytes, delivering superior selectivity and sensitivity. This high-throughput equipment enables us to handle substantial volumes by quantifying drugs from an extensive range of compound classes in a single analysis."
        },

        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/BDX-Icon-2-66x66.png",
            title: "Eﬀective Quality Controls",
            description: "Our Quality Control program significantly minimizes the probability of inaccurate results. At Neugenix, every test outcome undergoes comprehensive review while the final report receives examination by a senior scientist before release."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-5-66x66.png",
            title: "Well-Trained Scientists",
            description: "Our seasoned management team and Ph.D. scientists position us favorably to accomplish superior results and enhanced performance. All pharmacogenetic patient specimens receive handling with utmost care by extensively trained genetic scientists in our cutting-edge facility. The scientists remain available for comprehensive consultations. Neugenix also maintains a robust, internationally recognized, cross-functional scientific advisory board that establishes us as a premier player in scientific innovation within clinical diagnostics and healthcare technology."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/TOX-Icon-5-66x66.png",
            title: "Quick Turnaround Time",
            description: "At Neugenix, utilization of the newest technology assists in analyzing patient specimens in a swift and precise manner. We employ HPLC-tandem mass spectrometry systems for accuracy and velocity, enabling Neugenix to deliver rapid and dependable turnaround times."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-6-66x66.png",
            title: "Easily Interpreted and Clinically Actionable Reports",
            description: "Our testing reports are thorough and straightforward to comprehend; in each testing protocol the results are generated in simple formats delivered through a secure portal, fax or EMR. Neugenix also offers professional support in result interpretation; skilled genetic scientists are available to assist physicians in understanding the results and incorporating them into a patient's comprehensive treatment strategy."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-7-66x66.png",
            title: "Exceptional Customer Service",
            description: "We understand that our work influences people's lives. We concentrate on delivering outstanding customer service by supplying our partner healthcare professionals with tailored service plans to optimize the effective provision of care for patients."
        }

    ]
    return (
        <section className="flex flex-col items-center w-full px-4 py-8 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            {/* Who can Benefit */}
            <div className="flex flex-col w-full gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#144afc]">
                    Who can Benefit from Toxicology Testing?
                </h1>
                <p className="text-base sm:text-lg lg:text-2xl text-left">
                    Toxicology examination delivers essential information and insights that regulatory authorities and healthcare professionals can utilize to establish policies and provide treatment that restricts substance exposures, diminishing the probability of adverse drug reactions and harmful health consequences.
                </p>
                <p className="text-base sm:text-lg font-semibold text-left lg:text-3xl">
                    Toxicology examinations assist physicians to:
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-start gap-4 mt-2 w-full ">
                    <ul className="list-disc pl-5 flex-1 space-y-1 lg:text-2xl">
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#144afc]">Why Neugenix?</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full ">
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
                            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold text-center text-[#144afc] mb-2">{item.title}</h2>
                            <p className="text-sm sm:text-base lg:text-2xl text-center text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}