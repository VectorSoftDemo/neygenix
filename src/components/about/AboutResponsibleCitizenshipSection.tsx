import React from "react";

const AboutResponsibleCitizenshipSection = () => (
    <section className=" pl-8 bg-[#EFEFEF] flex  gap-4 justify-between items-center pt-8">
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-4xl text-[#424492]">Supporting Patients</h1>
                <p className="text-base">At AEON, we strive to continuously improve our processes and bring significant improvements in the lives of our patients.</p>
            </div>
            <div className="flex flex-col gap-4 max-w-[90%]">
                <h2 className="font-semibold text-2xl">Patient Safety</h2>
                <p className="text-base">We know that our work impacts the lives of people. We also understand that healthcare professionals depend on us to provide them with accurate information so that they can make informed decisions about their patients.</p>
                <p className="text-base pt-2">
                    Our approach is patient-centric. For us, patient safety comes first. AEON prides itself in ensuring quality, accuracy and speed in reporting – our reports are reviewed multiple times before being released to physicians. We enable physicians to prescribe with confidence.</p>
            </div>
        </div>
        <div className="w-[200px] h-[400px]">
            <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="AEON Core Values" className="w-full h-full"/>
        </div>
    </section>
);

export default AboutResponsibleCitizenshipSection; 