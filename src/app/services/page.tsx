
import Image from "next/image";

import PharmacogenomicsTesting from "@/components/PharmacogenomicsTesting";

export default function ServicesPage() {
   

    const cardsData = [
        {
            type: "light",
            title: "Drug-related Adverse Reactions in the US",
            short:
                "Drug-related adverse reactions (ADEs) constitute a significant healthcare concern in the United States. Approximately 82% of American adults consume at least one pharmaceutical while 29% utilize five or more medications.",
            remaining:
                "ADEs result in 700,000 emergency department encounters, 120,000 hospital admissions and 100,000 fatalities annually in the US. This generates over $30 billion in excess healthcare expenditures yearly. Pharmacogenomics investigations have demonstrated that over 50% of the patient population receive ineffective dosing due partly to genetic incompatibility between the patient's metabolism and the medication. Current genetic research has assisted in developing superior comprehension of this incompatibility by clarifying the importance of genetics in drug metabolism. This knowledge regarding a patient's genetic composition, combined with their lifestyle patterns and additional risk elements, improves the physician's capacity to deliver individualized medical care and treatment to each patient."
        },
        {
            type: "dark",
            title: (
                <>
                    PGX Advantage Pharmacogenomics Testing
                </>
            ),
            short:
                "At Neugenix, we are dedicated to enhancing awareness, comprehension, and clinical application of pharmacogenomics testing. Our 17 gene PGX Advantage testing profile delivers information  ",
            remaining:
                "regarding the relationship between a patient's distinct genetic composition and their response to specific cardiology, pain and psychiatry medications. We recognize that as physicians, you must consistently discover methods to improve the care you deliver to each of your patients. Our pharmacogenomics examinations supply information that empowers you to provide individualized care and customized medication to satisfy your patient's distinctive requirements with favorable results."
        }
    ];


    const toxicologyCards = [
        {
            title: "Opioid Dependency Crisis",
            shortText:
                "The CDC reports that opioid dependency is an escalating health crisis with 115 Americans dying daily from overdoses. Drug-related adverse reactions (ADEs) are a major healthcare concern.",
            fullText:
                " Around 82% of American adults take at least one medication, and 29% take five or more. ADEs lead to 700,000 ER visits, 120,000 hospital admissions, and 100,000 deaths annually — costing over $30 billion each year.",
            image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png",
            gradient: false,
        },
        {
            title: "Advantage Toxicology Testing",
            subTitle: "Toxicology Testing",
            shortText:
                "Neugenix provides physicians with advanced tools to track adherence, diversion, and effectiveness through toxicology testing. Using urine or oral fluid specimens, TOX Advantage delivers ",
            fullText:
                "crucial information on a patient's medication and substance use. This helps ensure safe prescription use, personalized care, and better treatment outcomes. We help physicians discover ways to enhance patient care through more tailored medication recommendations and treatment plans.",
            gradient: true,
        },
    ];



    return (
        <main className=" mt-10 lg:mt-18">

    

            <section>

                <article className="relative flex flex-col justify-center p-4 sm:p-8 text-white w-full h-[60vh] sm:h-screen">
                    {/* Background Image */}
                    <Image
                        src="/Services/s1.webp"
                        alt="Pharmacogenomics Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Vignette effect for darkened corners */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)"
                        }}
                    ></div>

                    {/* Overlay for better text readability */}
                    <div
                        className="absolute inset-0 bg-black/20 z-0"
                        aria-hidden="true"
                    ></div>

                    {/* Overlay */}
                    <div className="relative z-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold sm:pl-0 2xl:pl-40">
                            <span className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl">Pharmacogenomics</span> – the Promise of Personalized Medicine
                        </h1>
                    </div>
                </article>

                <article className="flex flex-col items-center py-2 md:py-4 lg:py-6  px-2 sm:px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-full">
                        {cardsData.map((card, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col gap-2 sm:gap-4 transition-all duration-200 bg-[#F1F5FF]"
                            >
                                <details className="group">
                                    <summary className="cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl font-semibold transition-colors list-none outline-none">
                                        <div>
                                            <div className="text-[#144afc]">{card.title}</div>
                                            <span className="p-2 mt-2 text-sm sm:text-base md:text-lg xl:text-xl font-medium text-black/90">
                                                {card.short}
                                            </span>
                                            <span className="inline group-open:hidden text-green-800 ml-2 text-xs sm:text-sm xl:text-base">(Read more)</span>
                                            <span className="hidden group-open:inline text-green-800 ml-2 text-xs sm:text-sm xl:text-base">(Show less)</span>
                                        </div>
                                    </summary>
                                    <div className="mt-2 text-sm sm:text-base md:text-lg xl:text-xl font-medium text-black/90">
                                        {card.remaining}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6   lg:mt-4 w-full items-center">
                    {/* The Testing Process */}
                    <div className="flex flex-col items-center gap-3 sm:gap-4 w-full md:w-1/3 rounded-2xl ">
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-[#144afc]">
                            The Testing Process
                        </h1>
                        <div className="w-full flex justify-center">
                            <Image
                                src="img1-1.webp"
                                alt="Testing Process"
                                width={600}
                                height={237}
                                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto rounded-lg object-contain"
                            />
                        </div>
                    </div>

                    {/* Impacted Medications and Genes Tested */}
                    <div className="flex flex-col items-center gap-3 sm:gap-4 w-full md:w-2/3 rounded-2xl p-1 md:p-3 lg:p-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-center text-[#144afc]">
                            Impacted Medications and Genes Tested
                        </h1>
                        <div className="w-full flex justify-center">
                            <Image
                                src="/Services/s11.webp"
                                alt="Impacted Medications and Genes"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-lg object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                </article>

                {/* References */}
                <article className="flex flex-col items-center  mt-2 md:mt-4 lg:mt-6 mx-2 sm:mx-8 md:mx-16 lg:mx-24">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#144afc]">References</h1>

                    <div className="w-full p-1 sm:p-2 lg:p-5">
                        <ol className="w-full space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base xl:text-lg">
                            {[
                                `The Essentials of Diagnostics whitepaper. DX Insights. January 2012. National Center for Complementary and Integrative Health (NCCIH) and the Centers for Disease Control and Prevention (CDC), based on data from a special supplement—on use of complementary health approaches—to the 2012 National Health Interview Survey (NHIS).`
                            ].map((reference, idx) => (
                                <li
                                    key={idx}
                                    className="bg-white/80 rounded-md px-3 sm:px-4 py-2 sm:py-3 shadow-sm list-decimal list-inside text-gray-800 leading-relaxed"
                                >
                                    {reference}
                                </li>
                            ))}
                        </ol>
                    </div>

                </article>
            </section>

            <section className="min-h-screen bg-[#]">

                <article className="relative flex flex-col justify-center p-4 sm:p-8 text-white w-full h-[60vh] sm:h-screen">
                    <Image
                        src="/Services/s2.webp"
                        alt="Toxicology Services Background"
                        fill
                        className="object-cover object-center z-0"
                        priority
                    /> 
                    
                    {/* Vignette effect for darkened corners */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)"
                        }}
                    ></div>

                    {/* Overlay for better text readability */}
                    <div
                        className="absolute inset-0 bg-black/20 z-0"
                        aria-hidden="true"
                    ></div>
                    
                    <div className="relative z-10 ml-0 sm:ml-10">
                        <h1 className="text-2xl md:text-3xl 2xl:text-6xl font-semibold 2xl:pl-40">
                            Toxicology Services
                        </h1>
                        <p className="text-base sm:text-base md:text-lg lg:text-3xl mt-2">
                            Fast, reliable results for medication monitoring and substance detection.
                        </p>
                    </div>
                </article>

                <article className="flex flex-col items-center gap-8 w-full py-10 px-3 sm:px-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full">
                        {toxicologyCards.map((card, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-all duration-200 bg-[#F1F5FF]"
                            >
                                <details className="group">
                                    <summary className="cursor-pointer text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold transition-colors list-none outline-none">
                                        <div>
                                            <div className="text-[#144afc]">{card.title}</div>
                                            <span className="p-2 mt-2 text-sm sm:text-base md:text-base lg:text-lg   text-black/90">
                                                {card.shortText}
                                            </span>
                                            <span className="inline group-open:hidden text-green-800 ml-2 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">(Read more)</span>
                                            <span className="hidden group-open:inline text-green-800 ml-2 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">(Show less)</span>
                                        </div>
                                    </summary>
                                    <div className="mt-2 text-sm sm:text-base md:text-base lg:text-lg font-medium  text-black/90">
                                        {card.fullText}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </article>
               


                <article className="flex flex-col md:flex-row gap-8 p-3 sm:p-4 md:p-5 w-full items-center">
                    {/* The Testing Process */}
                    <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6 w-full md:w-1/3 rounded-2xl ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#144afc]">
                            The Testing Process
                        </h1>
                        <div className="w-full flex justify-center">
                            <Image
                                src="img1-1.webp"
                                alt="Testing Process"
                                width={600}
                                height={237}
                                className="w-full max-w-[90vw] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto rounded-lg object-contain"
                            />
                        </div>
                    </div>

                    {/* Tested Analytes Within Each Drug Class */}
                    <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6   w-full md:w-2/3 rounded-2xl ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#144afc]">
                            Tested Analytes Within Each Drug Class
                        </h1>
                        <div className="w-full flex justify-center bg-gray-200 p-1 md:p-2 lg:p-3 rounded-2xl">
                            <Image
                                src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Tox-1200x764.png"
                                alt="Tested Analytes"
                                width={1200}
                                height={764}
                                priority
                                className="w-full max-w-[95vw] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </article>



                <article className="w-full flex flex-col items-center py-4 lg:py-10 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-30">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#144afc] w-full mb-6 text-center">
                        References
                    </h2>
                    <ol
                        className="
    w-full
    max-w-full
    text-sm sm:text-lg lg:text-xl
    flex flex-col gap-6
    bg-[#F7F7F7]
    rounded-xl
    shadow
    p-4 sm:p-6 md:p-8
    list-decimal list-inside
  "
                    >
                        <li className="pl-2 text-gray-800">
                            The Essentials of Diagnostics whitepaper. DX Insights. January 2012.
                        </li>

                        <li className="pl-2 text-gray-800">
                            Pathan, Hasan, and John Williams. “Basic opioid pharmacology: an update.”
                            <em> British Journal of Pain</em> vol. 6,1 (2012): 11-6.
                            <div className="text-sm text-gray-600 break-all">
                                doi:10.1177/2049463712438493
                            </div>
                        </li>

                        <li className="pl-2 text-gray-800">
                            Mbughuni, Michael M et al. “Mass Spectrometry Applications for Toxicology.”
                            <em> EJIFCC</em> vol. 27,4 272-287. 1 Dec. 2016.
                        </li>

                        <li className="pl-2 text-gray-800">
                            Raouf, Mena et al. “A Practical Guide to Urine Drug Monitoring.”
                            <em> Federal Practitioner: for the health care professionals of the VA, DoD, and PHS</em> vol. 35,4 (2018): 38-44.
                        </li>

                        <li className="pl-2 text-gray-800">
                            Thomas G. Rosano, Patrice Y. Ohouo, Michelle Wood, Screening with Quantification
                            for 64 Drugs and Metabolites in Human Urine using UPLC–MS-MS Analysis and a
                            Threshold Accurate Calibration, <em>Journal of Analytical Toxicology</em>,
                            Volume 41, Issue 6, July-August 2017, Pages 536–546.
                            <div className="font-bold text-green-700 break-all">
                                https://doi.org/10.1093/jat/bkx035
                            </div>
                        </li>
                    </ol>


                </article>
            </section>

            <PharmacogenomicsTesting />

        </main>
    );
}


