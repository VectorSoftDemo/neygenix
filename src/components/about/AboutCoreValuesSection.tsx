import React from "react";


const AboutCoreValuesSection = () => (
    <section className="py-20 bg-[#EFEFEF] flex  justify-between">
        <div className="flex flex-col gap-4 p-8 pl-16">
            <p>Across the company, we apply our core business capabilities and resources to improve lives, and focus on:</p>
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-2xl">Investing in the future</h1>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Welcoming Interns and Promoting Education</h2>
                    <p className="max-w-[80%]">At AEON, we believe in applying our skills and know-how to address global challenges so that we can help our communities reach their full potential and lay the foundation for progress.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Promoting Education</h2>
                    <p className="max-w-[80%]">Creating a better tomorrow for individuals by offering them opportunities for attaining good quality education is an important cornerstone of AEON’s CSR initiatives. From scholarships to students in the local communities of Georgia to establishing schools in developing countries like Tajikistan, AEON has been at the forefront to empower new possibilities for the youth.</p>
                </div>
                <div className="flex flex-col gap-2 max-w-[80%] ">
                    <ul className="flex flex-col gap-6 list-disc ">
                        <li>
                            <span className="font-semibold text-lg">Endowment Fund at UGA</span>
                            <p className="ml-2 mt-1">In 2018, an amount of US$ 1 million was donated to the University of Georgia to create an endowment fund for scholarships for higher education at UGA. The funds were matched by the University for a US$ 2 million endowment fund at UGA.</p>
                        </li>
                        <li>
                            <span className="font-semibold text-lg">Scholarship for Medical Students from India</span>
                            <p className="ml-2 mt-1">In July 2018 at the AAPI (American Association of Physicians of Indian Origin) Annual Conference, AEON announced a scholarship of US$25,000 for students from India. Through AEON’s scholarship award presented to AAPI’s YPS/MSRF (Young Physicians Section/Medical Students’ and Residents’ Forum) students from India will be able to pursue medical studies in the US.</p>
                        </li>
                        <li>
                            <span className="font-semibold text-lg">Supporting the Aga Khan Foundation USA</span>
                            <p className="ml-2 mt-1">For over 50 years, the Aga Khan Foundation has partnered with communities in some of the most remote, hard-to-reach parts of Asia and Africa to build better futures together. In 2015, AEON donated US$ 1.5 million to the Foundation. The funds were used to build a new school in Tajikistan. With the Government of Tajikistan, Aga Khan Foundation has worked to make schools that stimulate children’s thinking so that they can assess things for themselves, learn how to work in groups, and think innovatively.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="w-[400px]">
            <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="AEON Core Values" />
        </div>
    </section>
);

export default AboutCoreValuesSection; 