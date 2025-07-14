import React from "react";
import Curve from "../Curve";

const AboutMissionSection = () => (
    <section className="py-8 bg-[#46A941] w-full">
        <div className="flex flex-col justify-center items-center w-full">
            <div className="text-center flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl font-bold text-white">Responsible Citizenship</h2>
                <p className="text-xl text-white leading-relaxed mt-4 max-w-6xl">
                AEON has an enduring commitment to be a responsible business. We run our business in the right way – for the benefit of the people we serve, including patients, shareholders, employees and our communities.
                </p>
                <p className="text-lg text-white leading-relaxed max-w-6xl">
                As a health care company, people depend on our services to help them live healthier and better lives. That’s why responsible citizenship is integrated throughout our business.
                </p>
            </div>
        </div>
    </section>
);

export default AboutMissionSection; 