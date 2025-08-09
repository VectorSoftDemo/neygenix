import Image from "next/image";

export default function AboutUs() { 

  const images = [

    {
      image: "/About/img1.webp",
      title: "Blood Wellness",
    },
    {
      image: "/About/img2.webp",
      title: "Cancer Genomics",
    },
    {
      image: "/About/img3.webp",
      title: "Pharmacogenomics",
    },
    {
      image: "/About/img4.webp",
      title: "Toxicology",
    },
  ]

  const valueImages = [
    {
      image: "/About/logo1.webp",
      title: "DIVERSITY",
    },
    {
      image: "/About/logo2.webp",
      title: "RESPECT",
    },
    {
      image: "/About/logo3.webp",
      title: "INTEGRITY",
    },
    {
      image: "/About/logo4.webp",
      title: "VALOR",
    },
    {
      image: "/About/logo5.webp",
      title: "EXCELLENCE",
    },
  ]
  return (
    <main className="min-h-screen ">
      <section
        className="relative flex justify-center items-center min-h-[60vh] overflow-hidden"
      >
        {/* Background image */}
        <Image
          src="/About/flower_image.webp"
          alt="Flower background"
          fill
          priority
          className="object-cover"
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)"
          }}
        ></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center w-full relative z-10">
          <div className="flex flex-col h-full text-white w-full max-w-7xl gap-8">
            <h1 className="text-4xl font-semibold text-left drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-left drop-shadow-lg max-w-md">
              We conduct our operations ethically and responsibly – to serve the interests of those who depend on us, including patients, stakeholders, staff members, and the communities we support.
            </p>
          </div>
        </div>
      </section>

      {/* <AboutMissionSection /> */}
      <section className="py-8 w-full bg-white ">
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-8">
          <div className=" flex flex-col justify-center items-center gap-4 max-w-full w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center">
              Responsible Citizenship
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed mt-4  ">
              Neugenix maintains a steadfast dedication to ethical business practices. We conduct our operations with integrity – to serve the interests of those who rely on us, including patients, stakeholders, staff members, and the communities we support.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed mt-4  ">
              As a healthcare organization, individuals rely on our services to enhance their well-being and quality of life. This is why ethical stewardship is woven into every aspect of our operations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg- text-gray-800">
        {/* Mission Section */}
        <article className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-[#22641e]">Our Mission</h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Our mission is to revolutionize diagnostics and healthcare by providing cutting-edge laboratory services with unmatched accuracy and efficiency. We aim to empower healthcare providers and patients with reliable, timely results that support informed medical decisions.
              </p>
            </div>
            {/* Our Identity Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-[#22641e]">Our Identity</h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                We are a dedicated team of scientists, healthcare professionals, and innovators committed to raising the standards of laboratory diagnostics. Our identity is rooted in integrity, innovation, and an unwavering commitment to improving lives through better healthcare solutions.
              </p>
            </div>
          </div>
        </article>

        {/* Image Grid */}
        <article className="max-w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {images.map((img, idx) => (
              <div key={idx} className="relative w-full aspect-[4/3]  overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                <Image src={img.image} alt={img.title} fill className="object-cover rounded-2xl" />
              </div>
            ))}
          </div>
        </article>

        {/* Core Values Section */}
        <article className="bg-white py-10 w-full">
          <article className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-[#22641e]">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
                Our core values guide every decision we make and every service we provide:
              </p>
              <ul
                className="
                  grid
                 grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4
                  gap-4
                  sm:gap-6
                  md:gap-8
                  w-full
                  mb-2
                "
              >
                <li className="bg-[#f1f5ff] rounded-2xl shadow p-5 flex flex-col items-center transition hover:shadow-lg">
                  <span className="font-semibold text-[#424492] text-base sm:text-lg text-center">
                    Integrity and ethical responsibility
                  </span>
                </li>
                <li className="bg-[#f1f5ff] rounded-2xl shadow p-5 flex flex-col items-center transition hover:shadow-lg">
                  <span className="font-semibold text-[#424492] text-base sm:text-lg text-center">
                    Innovation in diagnostics and healthcare
                  </span>
                </li>
                <li className="bg-[#f1f5ff] rounded-2xl shadow p-5 flex flex-col items-center transition hover:shadow-lg">
                  <span className="font-semibold text-[#424492] text-base sm:text-lg text-center">
                    Commitment to accuracy and reliability
                  </span>
                </li>
                <li className="bg-[#f1f5ff] rounded-2xl shadow p-5 flex flex-col items-center transition hover:shadow-lg">
                  <span className="font-semibold text-[#424492] text-base sm:text-lg text-center">
                    Patient-focused care
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* Value Images */}
          <article className="max-w-full mx-auto mt-8 px-2 sm:px-4 md:px-6 lg:px-8 w-full">
            <div className="grid  gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {valueImages.map((img, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-stretch w-full"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden  group">
                    <Image
                      src={img.image}
                      alt={img.title}
                      fill
                      className="object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"

                    />
                  </div>
                  <div className="mt-3 flex items-center justify-center">
                    <span className="bg-white/90 not-last:rounded-lg px-4 py-2 text-[#22641e] font-bold text-base sm:text-lg text-center  w-full truncate">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </article>
      </section>

      <article className="max-w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-[#22641e]">Our Future Outlook</h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            As we look ahead, we aim to expand our service portfolio, integrate advanced AI-driven diagnostics, and build stronger collaborations with healthcare providers worldwide. We remain committed to setting new industry benchmarks and contributing to a healthier future.
          </p>
        </div>
      </article>

      {/* <AboutCoreValuesSection /> */}
      <section className="py-20 bg-">
        <div className="w-full  md flex flex-col lg:flex-row justify-between items-center gap-8 ">

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6 ml-15">
            <h1 className="font-bold text-2xl sm:text-3xl text-[#424492] mb-4">
              Investing in the Future
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col gap-2 border border-[#e5e7eb]">
                <h2 className="font-semibold text-lg sm:text-xl text-[#22641e]">
                  Welcoming Interns and Promoting Education
                </h2>
                <p className="text-gray-700 text-sm md:text-lg">
                  At Neugenix, we are committed to utilizing our expertise and knowledge to tackle worldwide challenges, enabling our communities to achieve their complete potential and establish the groundwork for advancement.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col gap-2 border border-[#e5e7eb]">
                <h2 className="font-semibold text-lg sm:text-xl text-[#22641e]">
                  Promoting Education
                </h2>
                <p className="text-gray-700 text-sm md:text-lg">
                  Building a brighter future for people by providing them with access to high-quality educational opportunities represents a fundamental pillar of Neugenix's corporate social responsibility efforts. From providing scholarships to students in Georgia's local communities to founding educational institutions in developing nations like Tajikistan, Neugenix has led the way in creating new opportunities for young people.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col gap-3 border border-[#e5e7eb] col-span-1 md:col-span-2">
                <ul className="flex flex-col gap-6 pl-5">
                  <li>
                    <span className="font-semibold text-lg sm:text-xl text-[#424492]">Endowment Fund at UGA</span>
                    <p className=" mt-1 text-gray-700 text-sm md:text-lg">
                      In 2018, a contribution of US$ 1 million was made to the University of Georgia to establish an endowment fund for higher education scholarships at UGA. The university matched these funds, resulting in a US$ 2 million endowment fund at UGA.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-lg sm:text-xl text-[#424492]">Scholarship for Medical Students from India</span>
                    <p className=" mt-1 text-gray-700 text-sm md:text-lg">
                      In July 2018 at the AAPI (American Association of Physicians of Indian Origin) Annual Conference, Neugenix unveiled a US$25,000 scholarship for Indian students. Through Neugenix's scholarship program offered to AAPI's YPS/MSRF (Young Physicians Section/Medical Students' and Residents' Forum), students from India will have the opportunity to pursue medical education in the United States.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-lg sm:text-xl text-[#424492]">Supporting the Aga Khan Foundation USA</span>
                    <p className=" mt-1 text-gray-700 text-sm md:text-lg">
                      For more than 50 years, the Aga Khan Foundation has collaborated with communities in some of the most isolated, difficult-to-access regions of Asia and Africa to create better futures collectively. In 2015, Neugenix contributed US$ 1.5 million to the Foundation. These funds were utilized to construct a new educational facility in Tajikistan. In partnership with the Government of Tajikistan, the Aga Khan Foundation has developed schools that encourage children's critical thinking, enabling them to evaluate situations independently, collaborate effectively in teams, and think creatively.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[400px] flex justify-center lg:justify-end ">
            <Image
              src="/halflogo.webp"
              alt="Neugenix Core Values"
              className="max-w-full h-auto"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </section>


      {/* <AboutVisionSection /> */}
      <article className="py-8 bg-white flex flex-col gap-4 justify-between items-center text-black px-10">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-semibold text-4xl text-center">Welcoming Interns at Neugenix</h1>
          <p className="md:text-2xl text-gray-700">Neugenix continuously strives to recruit a varied workforce. Diverse viewpoints and concepts are fostered and cultivated at Neugenix. Our robust internship initiative enables us to welcome numerous skilled and enthusiastic young professionals who collaborate closely with seasoned and proficient Neugenix staff members on high-priority projects. The interests of interns are carefully considered when assigning them to projects. We appreciate our interns, and many choose to remain as permanent members of the organization.</p>
        </div>
      </article>


      {/* <AboutResponsibleCitizenshipSection /> */}
      <section className="bg-[#] flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10  md:py-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6 w-full mx-15">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[#424492] text-center md:text-left">
              Supporting Patients
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 text-center md:text-left">
              At Neugenix, we endeavor to constantly enhance our procedures and create meaningful improvements in our patients' lives.
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-full">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-[#061f05] text-center md:text-left">
              Patient Safety
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 text-center md:text-left">
              We recognize that our work affects people's lives. We also comprehend that healthcare professionals rely on us to supply them with precise information, enabling them to make well-informed decisions regarding their patients.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 text-center md:text-left pt-1">
              Our methodology is patient-focused. For us, patient safety takes priority. Neugenix takes pride in guaranteeing quality, precision, and timeliness in reporting – our reports undergo multiple reviews before being delivered to physicians. We empower physicians to prescribe with assurance.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="flex-shrink-0 w-full max-w-[220px] sm:max-w-[260px] md:max-w-[200px] md:w-[200px] h-[220px] sm:h-[300px] md:h-[400px] mb-6 md:mb-0 flex items-center justify-center">
          <Image
            src="/halflogo.webp"
            alt="Neugenix Core Values"
            className="w-full h-full object-contain"
            width={200}
            height={400}
            priority
          />
        </div>
      </section>


      {/* <AboutCallToActionSection /> */}
      {/* <section className="w-full bg-white py-10 px-4 sm:py-14 md:py-20 flex justify-center items-center text-black">
        <div className="flex flex-col gap-4  max-w-[50%]">
          <h1 className="font-semibold text-4xl mx-auto">Ready to Experience Excellence?</h1>
          <p className="text-xl mx-auto">We are dedicated to creating positive effects on the lives of our patients and physicians through innovation and leadership in healthcare diagnostic services.</p>
        </div>
      </section> */}
    </main>
  );
}