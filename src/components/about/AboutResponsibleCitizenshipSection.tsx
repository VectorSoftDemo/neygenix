import React from "react";

const AboutResponsibleCitizenshipSection = () => (
    <section className=" pl-8 bg-[#EFEFEF] flex  gap-4 justify-between items-center pt-8">
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-4xl text-[#424492]">Supporting Patients</h1>
                <p className="text-base">At Nuegenix, we endeavor to constantly enhance our procedures and create meaningful improvements in our patients' lives.</p>
            </div>
            <div className="flex flex-col gap-4 max-w-[90%]">
                <h2 className="font-semibold text-2xl">Patient Safety</h2>
                <p className="text-base">We recognize that our work affects people's lives. We also comprehend that healthcare professionals rely on us to supply them with precise information, enabling them to make well-informed decisions regarding their patients.</p>
                <p className="text-base pt-2">
                    Our methodology is patient-focused. For us, patient safety takes priority. Nuegenix takes pride in guaranteeing quality, precision, and timeliness in reporting – our reports undergo multiple reviews before being delivered to physicians. We empower physicians to prescribe with assurance.</p>
            </div>
        </div>
        <div className="w-[200px] h-[400px]">
            <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="Nuegenix Core Values" className="w-full h-full"/>
        </div>
    </section>
);

export default AboutResponsibleCitizenshipSection; 