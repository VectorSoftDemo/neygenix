import Curve from "./decoractiveItems/Curve";
import PharmacogenomicsTesting from "./PharmacogenomicsTesting";

export default function Pharmacogenomics() {
    return (
        <div className="min-h-screen bg-[#EFEFEF]">
            <div className="flex flex-col justify-center p-8  bg-[#424492] text-white w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://aeonglobalhealth.com/wp-content/uploads/2020/10/pharmacogenomicsSlider.jpg')" }}>
                <div className="">
                    <h1 className="2xl:text-4xl  font-semibold 2xl:pl-40 max-w-[20%]">Pharmacogenomics – the Promise of Personalized Medicine</h1>
                </div>
            </div>
            <div className="flex  pl-8  justify-between items-center ">
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold max-w-[90%]">
                        Drug-related adverse reactions (ADEs) constitute a significant healthcare concern in the United States. Approximately 82% of American adults consume at least one pharmaceutical while 29% utilize five or more medications. ADEs result in 700,000 emergency department encounters, 120,000 hospital admissions and 100,000 fatalities annually in the US. This generates over $30 billion in excess healthcare expenditures yearly. 1
                    </p>
                    <p className="text-lg font-semibold max-w-[90%]">
                        Pharmacogenomics investigations have demonstrated that over 50% of the patient population receive ineffective dosing due partly to genetic incompatibility between the patient's metabolism and the medication. Current genetic research has assisted in developing superior comprehension of this incompatibility by clarifying the importance of genetics in drug metabolism.
                    </p>
                    <p className="text-lg font-semibold max-w-[90%]">
                        This knowledge regarding a patient's genetic composition, combined with their lifestyle patterns and additional risk elements, improves the physician's capacity to deliver individualized medical care and treatment to each patient.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="" className="w-[200px] h-[300px]" />
                </div>
            </div>
            <div className="flex flex-col items-center bg-[#46A941] text-center text-white p-8 pt-10 gap-4">
                <h1 className="text-2xl font-semibold">
                    PGX Advantage<sup className="text-sm">TM</sup>
                </h1>
                <h1 className="text-2xl font-semibold">
                    Pharmacogenomics Testing
                </h1>
                <p className="text-lg font-semibold max-w-[50%]">
                    At Neugenix, we are dedicated to enhancing awareness, comprehension, and clinical application of pharmacogenomics testing. Our 17 gene PGX Advantage testing profile delivers information regarding the relationship between a patient's distinct genetic composition and their response to specific cardiology, pain and psychiatry medications.
                </p>
                <p className="text-lg font-semibold max-w-[50%]">
                    We recognize that as physicians, you must consistently discover methods to improve the care you deliver to each of your patients. Our pharmacogenomics examinations supply information that empowers you to provide individualized care and customized medication to satisfy your patient's distinctive requirements with favorable results.
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
                    <h1 className="text-4xl font-bold text-center text-[#424492]">Impacted Medications and Genes Tested*</h1>
                    <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/PGx-1200x690.png" alt="" className="w-full h-full" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 py-10">
                <h1 className="text-4xl font-bold text-center text-[#424492] w-full max-w-[60%]">References</h1>
                <ol type="1" className="max-w-[58%] text-lg flex flex-col gap-4 " style={{ listStyleType: 'decimal' }}>
                    <li>
                        <p>The Essentials of Diagnostics whitepaper. DX Insights. January 2012. National Center for Complementary and Integrative Health (NCCIH) and the Centers for Disease Control and Prevention (CDC), based on data from a special supplement—on use of complementary health approaches—to the 2012 National Health Interview Survey (NHIS).</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}