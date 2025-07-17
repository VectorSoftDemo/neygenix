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
        <div className="flex flex-col items-center  p-8">
        <div className="flex flex-col max-w-[60%] gap-4">
            <h1 className="text-3xl font-bold text-center text-[#424492]">
                Who can Benefit from Toxicology Testing?
            </h1>
            <p className="text-lg text-start">
                Toxicology examination delivers essential information and insights that regulatory authorities and healthcare professionals can utilize to establish policies and provide treatment that restricts substance exposures, diminishing the probability of adverse drug reactions and harmful health consequences.
            </p>
            <p className="text-lg font-semibold max-w-[50%] text-start  ">
                Toxicology examinations assist physicians to:
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
                <ul className="list-disc ">
                    <li>Observe the patient's treatment</li>
                    <li>Verify suspected toxicity</li>
                    <li className="max-w-[80%]">Recognize potential risks from other medications and help prevent combined drug toxicity</li>
                </ul>
                <ul className="list-disc">
                    <li>Identify if a patient shows inadequate response</li>
                    <li>Track patient's adherence to treatment</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-3xl font-bold text-center text-[#424492]">Why Neugenix?</h1>
            <div className="flex  flex-col justify-center items-center gap-4 mt-4">
                {whyAeon.map((item, index) => (
                    <div key={index} className="flex justify-center gap-4 items-start w-full">
                        <div className="flex justify-center items-center w-[3%]">
                            <img src={item.image} alt="" className="w-15 h-15" />
                        </div>
                        <div className="flex flex-col gap-4 w-[90%] max-w-[40%] ">
                            <h1 className="text-2xl font-bold mt-4">{item.title}</h1>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}