import React from "react";


const AboutCoreValuesSection = () => (
    <section className="py-20 bg-[#EFEFEF] flex  justify-between">
        <div className="flex flex-col gap-4 p-8 pl-16">
            <p>Throughout the organization, we leverage our fundamental business strengths and assets to enhance lives, concentrating on:</p>
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-2xl">Investing in the future</h1>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Welcoming Interns and Promoting Education</h2>
                    <p className="max-w-[80%]">At Neugenix, we are committed to utilizing our expertise and knowledge to tackle worldwide challenges, enabling our communities to achieve their complete potential and establish the groundwork for advancement.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Promoting Education</h2>
                    <p className="max-w-[80%]">Building a brighter future for people by providing them with access to high-quality educational opportunities represents a fundamental pillar of Neugenix's corporate social responsibility efforts. From providing scholarships to students in Georgia's local communities to founding educational institutions in developing nations like Tajikistan, Neugenix has led the way in creating new opportunities for young people.</p>
                </div>
                <div className="flex flex-col gap-2 max-w-[80%] ">
                    <ul className="flex flex-col gap-6 list-disc ">
                        <li>
                            <span className="font-semibold text-lg">Endowment Fund at UGA</span>
                            <p className="ml-2 mt-1">In 2018, a contribution of US$ 1 million was made to the University of Georgia to establish an endowment fund for higher education scholarships at UGA. The university matched these funds, resulting in a US$ 2 million endowment fund at UGA.</p>
                        </li>
                        <li>
                            <span className="font-semibold text-lg">Scholarship for Medical Students from India</span>
                            <p className="ml-2 mt-1">In July 2018 at the AAPI (American Association of Physicians of Indian Origin) Annual Conference, Neugenix unveiled a US$25,000 scholarship for Indian students. Through Neugenix's scholarship program offered to AAPI's YPS/MSRF (Young Physicians Section/Medical Students' and Residents' Forum), students from India will have the opportunity to pursue medical education in the United States.</p>
                        </li>
                        <li>
                            <span className="font-semibold text-lg">Supporting the Aga Khan Foundation USA</span>
                            <p className="ml-2 mt-1">For more than 50 years, the Aga Khan Foundation has collaborated with communities in some of the most isolated, difficult-to-access regions of Asia and Africa to create better futures collectively. In 2015, Neugenix contributed US$ 1.5 million to the Foundation. These funds were utilized to construct a new educational facility in Tajikistan. In partnership with the Government of Tajikistan, the Aga Khan Foundation has developed schools that encourage children's critical thinking, enabling them to evaluate situations independently, collaborate effectively in teams, and think creatively.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="w-[400px]">
            <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="Neugenix Core Values" />
        </div>
    </section>
);

export default AboutCoreValuesSection; 