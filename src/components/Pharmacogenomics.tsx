import Curve from "./Curve";
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
                        Adverse drug events (ADEs) are a serious health issue in the United States. About 82% of American adults take at least one medication while 29% take ﬁve or more. ADEs lead to 700,000 emergency room visits, 120,000 hospitalizations and 100,000 deaths in the US each year. This results in over $30 billion in additional spend annually. 1
                    </p>
                    <p className="text-lg font-semibold max-w-[90%]">
                        Pharmacogenomics studies have shown that more than 50% of the patient population are dosing ineﬀectively due at least in part to a genetic mismatch between the patient’s metabolism and the medication. Recent genetic research has helped to create a better understanding of this mismatch by explaining the signiﬁcance of genetics in drug metabolism.
                    </p>
                    <p className="text-lg font-semibold max-w-[90%]">
                        This information about a patient’s genetic makeup, coupled with their lifestyle behavior and other risk factors, enhances the physician’s ability to provide personalized medical care and treatment to each patient.
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
                    At AEON, we are committed to increasing awareness, understanding, and clinical use of pharmacogenomics testing. Our 17 gene PGX Advantage testing proﬁle provides information about the connection between a patient’s unique genetic makeup and their response to certain cardiology, pain and psychiatry medications.
                </p>
                <p className="text-lg font-semibold max-w-[50%]">
                    We understand that as physicians, you must continually seek out ways to enhance the care you provide to each of your patients. Our pharmacogenomics tests provide information that enable you to oﬀer personalized care and tailored medication to meet your patient’s unique needs with positive outcomes.
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
                        <p>The Essentials of Diagnostics whitepaper. DX Insights. January 2012.National Center for Complementary and Integrative Health (NCCIH) and the Centers for Disease Control and Prevention (CDC), based on data from a special supplement—on use of complementary health approaches—to the 2012 National Health Interview Survey (NHIS).</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}