import Curve from "./Curve";
import PharmacogenomicsTesting from "./PharmacogenomicsTesting";

export default function Toxicology() {

    return (
        <div className="min-h-screen bg-[#EFEFEF]">
            <div className="flex flex-col justify-center p-8  bg-[#424492] text-white w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://aeonglobalhealth.com/wp-content/uploads/2020/10/Toxicology-Services-AEON-GLOBAL-HEALHT-scaled.jpg')" }}>
                <div className="">
                    <h1 className="2xl:text-4xl  font-semibold 2xl:pl-40">Toxicology Services</h1>
                </div>
            </div>
            <div className="flex  pl-8  justify-between items-center ">
                <p className="text-lg font-semibold max-w-[90%]">
                    The CDC reports that opioid dependency represents an escalating health crisis with 115 Americans perishing daily from overdose incidents. Drug-related adverse reactions (ADEs) constitute a significant healthcare concern in the United States. Approximately 82% of American adults consume at least one pharmaceutical while 29% utilize five or more medications. ADEs result in 700,000 emergency department encounters, 120,000 hospital admissions and 100,000 fatalities annually in the US. Furthermore, this generates over $30 billion in excess healthcare expenditures yearly.1
                </p>
                <div className="flex justify-center items-center">
                    <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="" className="w-30 h-[300px]" />
                </div>
            </div>
            <div className="flex flex-col items-center bg-[#46A941] text-center text-white p-8 pt-10 gap-4">
                <h1 className="text-2xl font-semibold">
                    TOX Advantage <sup className="text-sm">TM</sup>
                </h1>
                <h1 className="text-2xl font-semibold">
                    Toxicology Testing
                </h1>
                <p className="text-lg font-semibold max-w-[50%]">
                    At Neugenix, we are dedicated to supplying physicians across all specialties with the advanced tools required to track adherence, diversion and effectiveness. Neugenix's toxicology examination, TOX Advantage, delivers information regarding medication and other substances in a patient's system utilizing either urine or oral fluid specimens. This information enables physicians to observe compliance, directs their continuous treatment of a patient and assists in ensuring the secure use of prescriptions.
                </p>
                <p className="text-lg font-semibold max-w-[50%]">
                    We recognize that as physicians, you must consistently discover methods to improve the care you deliver to each of your patients. Our toxicology examinations supply information that empowers you to provide more individualized care and customized medication suggestions to satisfy your patient's requirements with favorable results.
                </p>
            </div>
            <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
           <PharmacogenomicsTesting />
            <div className="flex flex-col items-center gap-4 mt-4">
                <h1 className="text-4xl font-bold text-center text-[#424492]">The Testing Process</h1>
                <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/bdx-testing-600x237.png" alt="" className="w-[600px] h-[250px]" />
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
                <div className="flex flex-col items-center gap-10 mt-4 max-w-[60%]">
                    <h1 className="text-4xl font-bold text-center text-[#424492]">Tested Analytes Within Each Drug Class</h1>
                    <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/Tox-1200x764.png" alt="" className="w-full h-full" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 py-10">
                <h1 className="text-4xl font-bold text-start text-[#424492] w-full max-w-[60%]">References</h1>
                <ol type="1" className="max-w-[58%] text-lg flex flex-col gap-4 " style={{listStyleType: 'decimal'}}>
                    <li>
                        <p>The Essentials of Diagnostics whitepaper. DX Insights. January 2012.</p>
                    </li>
                    <li>
                        <p>Pathan, Hasan, and John Williams. “Basic opioid pharmacology: an update.” British journal of pain vol. 6,1 (2012): 11-6.</p>
                        <p>doi:10.1177/2049463712438493</p>
                    </li>
                    <li>
                        <p>Mbughuni, Michael M et al. “Mass Spectrometry Applications for Toxicology.” EJIFCC vol. 27,4 272-287. 1 Dec. 2016</p>
                    </li>
                    <li>
                        <p>Raouf, Mena et al. “A Practical Guide to Urine Drug Monitoring.” Federal practitioner: for the health care professionals of the VA, DoD, and PHS vol. 35,4 (2018): 38-44.
                        </p>
                    </li>
                    <li>
                        <p>Thomas G. Rosano, Patrice Y. Ohouo, Michelle Wood, Screening with Quantification for 64 Drugs and Metabolites in Human Urine using UPLC–MS-MS Analysis and a Threshold Accurate Calibration, Journal of Analytical Toxicology, Volume 41, Issue 6, July-August 2017, Pages 536–546,</p>
                    </li>
                    <p className="font-bold">https://doi.org/10.1093/jat/bkx035</p>
                </ol>
            </div>
        </div>
    );
}