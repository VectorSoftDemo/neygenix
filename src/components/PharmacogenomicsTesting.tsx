export default function PharmacogenomicsTesting() {
    const whyAeon = [
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/TOX-Icon-1-66x66.png",
            title: "Broad Quantitative Testing",
            description: "We oﬀer accurate and rapid quantitative testing of drug metabolite levels in urine and oral ﬂuids. Our testing covers over 80 analytes and metabolites (produced in the body after a drug has been taken)."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/CGX-Icon-2-66x66.png",
            title: "State-of-the-Art Technology",
            description: "Our HPLC-tandem mass spectrometry has the ability to analyze wider molecular weight and polarity ranges of analytes, providing better selectivity and sensitivity. This high throughput equipment allows us to manage large volumes by quantifying drugs from a wide range of compound classes, in a single run."
        },

        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/BDX-Icon-2-66x66.png",
            title: "Eﬀective Quality Controls",
            description: "Our Quality Control program greatly reduces the likelihood of incorrect results. At AEON, every test result is thoroughly reviewed while the ﬁnal report is reviewed by a senior scientist before being released."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-5-66x66.png",
            title: "Well-Trained Scientists",
            description: "Our experienced management team and Ph.D. scientists position us well to achieve better results and improved performance. All pharmacogenetic patient samples are handled with the greatest care by highly trained genetic scientists in our state-of-the-art facility. The scientists are also available for in-depth consultations. AEON also has a strong, internationally renowned, cross-functional scientiﬁc advisory board that positions us as a leading player in scientiﬁc innovation in the areas of clinical diagnostics and healthcare technology."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/TOX-Icon-5-66x66.png",
            title: "Quick Turnaround Time",
            description: "At AEON, use of the latest technology helps analyze patient samples in a rapid and accurate manner. We employ HPLC-tandem mass spectrometry systems for precision and speed, allowing AEON to provide fast and reliable turnaround times."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-6-66x66.png",
            title: "Easily Interpreted and Clinically Actionable Reports",
            description: "Our testing reports are comprehensive and easy-to-understand; in each testing protocol the outcomes are produced in simple formats delivered via a secured portal, fax or EMR. AEON also provides professional assistance in the interpretation of results; trained genetic scientists are on-hand to help physicians understand the results and integrate them into a patient’s overall treatment plan."
        },
        {
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Icon-7-66x66.png",
            title: "Exceptional Customer Service",
            description: "We know that our work impacts the lives of people. We focus on providing exceptional customer service by providing our partner healthcare professionals with customized service plans to maximize the eﬀective delivery of care for patients."
        }

    ]
    return (
        <div className="flex flex-col items-center  p-8">
        <div className="flex flex-col max-w-[60%] gap-4">
            <h1 className="text-3xl font-bold text-center text-[#424492]">
                Who can Benefit from Toxicology Testing?
            </h1>
            <p className="text-lg text-start">
                Toxicology testing provides critical information and knowledge that can be used by regulatory agencies and healthcare professionals to put policies in place and administer treatment that limit exposures to substances, reducing the likelihood of adverse drugs events and negative health outcomes.
            </p>
            <p className="text-lg font-semibold max-w-[50%] text-start  ">
                Toxicology tests help physicians to:
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
                <ul className="list-disc ">
                    <li>Monitor the patient’s therapy</li>
                    <li>Conﬁrm suspected toxicity</li>
                    <li className="max-w-[80%]">Identify potential hazards due to other medications and help prevent mixed drug toxicity</li>
                </ul>
                <ul className="list-disc">
                    <li>Detect if a patient lacks a proper response</li>
                    <li>Monitor for patient’s compliance with therapy</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-3xl font-bold text-center text-[#424492]">Why AEON?</h1>
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