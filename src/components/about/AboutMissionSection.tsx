import React from "react";
import Curve from "../Curve";

const AboutMissionSection = () => (
    <section className="py-8 bg-[#46A941] w-full">
        <div className="flex flex-col justify-center items-center w-full">
            <div className="text-center flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl font-bold text-white">Responsible Citizenship</h2>
                <p className="text-xl text-white leading-relaxed mt-4 max-w-6xl">
                Neugenix maintains a steadfast dedication to ethical business practices. We conduct our operations with integrity – to serve the interests of those who rely on us, including patients, stakeholders, staff members, and the communities we support.
                </p>
                <p className="text-lg text-white leading-relaxed max-w-6xl">
                As a healthcare organization, individuals rely on our services to enhance their well-being and quality of life. This is why ethical stewardship is woven into every aspect of our operations.
                </p>
            </div>
        </div>
    </section>
);

export default AboutMissionSection; 