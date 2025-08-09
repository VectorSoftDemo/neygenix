import Link from "next/link";
import Image from "next/image";
import Curve from "@/components/decoractiveItems/Curve";
import ContactDetails from "@/components/ContactDetails";


import Toxicology from '@/components/Toxicology';
import Pharmacogenomics from '@/components/Pharmacogenomics';


export default function Home() {


  return (
    <main className="">

      {/* Hero Section */}
      <section
        className="
        relative
        min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
        flex items-center justify-center
        px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
        py-12 sm:py-16 md:py-20
        overflow-hidden
      "
      >
        {/* Background Image */}
        <Image
          src="/Home/AEON1.webp"
          alt="Medical Laboratory Diagnostics"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Vignette effect for darkened corners */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)"
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div
          className="absolute inset-0 bg-black/20 z-0"
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 text-center text-white w-full max-w-2xl sm:max-w-3xl md:max-w-5xl">
          <div className="bg-white/90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#424492]">
              Medical Laboratory Diagnostics
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight sm:leading-snug drop-shadow-lg">
              We Have The TOX Advantage
              <sup className="text-lg sm:text-2xl md:text-4xl align-super ml-1">
                TM
              </sup>
            </h1>

            <details className="max-w-full mx-auto text-left group">
              <summary className="cursor-pointer text-sm sm:text-base md:text-lg xl:text-xl text-white/90 hover:text-white transition-colors font-medium list-none">
                <span>
                  The CDC reports that opioid dependency represents an escalating health crisis with 115 Americans perishing daily from overdose incidents. Drug-related adverse reactions  (ADEs) constitute a significant
                  <span className="inline group-open:hidden text-green-200 ml-5">(Read more)</span>
                  <span className="hidden group-open:inline text-green-200 ml-5">(Show less)</span>
                </span>
              </summary>
              <p className="mt-2 text-sm sm:text-base md:text-lg xl:text-xl font-medium text-white/90">
                 healthcare concern  in the United States. Approximately
                82% of American adults consume at least one pharmaceutical while 29% utilize five or more medications. ADEs result in 700,000 emergency department encounters, 120,000 hospital admissions, and 100,000 fatalities annually in the US. Furthermore, this generates over $30 billion in excess healthcare expenditures yearly.
              </p>
            </details>

            <div className="flex justify-center">
              <button className="bg-[#46A941] hover:bg-green-600 transition-colors text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-3xl text-base sm:text-lg shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit from Toxicology Testing */}
      <article className="flex flex-col justify-center items-center text-center bg-white px-3 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold text-[#4a4e57] mb-4 sm:mb-6">
          Who Can Benefit From Toxicology Testing?
        </h2>
        <p className="text-sm sm:text-base md:text-lg xl:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-full mx-auto text-left">
          <b>Toxicology examination</b> delivers vital information and insights that regulatory authorities and medical professionals can utilize to establish guidelines and provide care that restricts substance exposure, diminishing the probability of adverse drug reactions and harmful health consequences.
        </p>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-center mb-4">
            <Image
              src="/Home/img1-1.webp"
              alt="Toxicology Testing"
              width={400}
              height={158}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg xl:max-w-2xl h-auto object-contain rounded-lg "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-[#46A941] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-3xl font-semibold hover:bg-green-600 transition-colors text-base sm:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </article>

      {/* Core Values Section */}
      <article className="flex flex-col items-center justify-center  bg-[#424492] text-white px-4 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <h4 className="text-base sm:text-lg md:text-2xl xl:text-3xl font-bold mb-8 sm:mb-10 max-w-full mx-auto leading-snug sm:leading-normal">
          Each and every day, we supply information that transforms lives. We guarantee that we transmit this knowledge in the swiftest, most precise, and most beneficial manner achievable. Lives rely on it.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full mx-auto">
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base xl:text-xl leading-relaxed">
              We aim to motivate and enable you to make well-informed health choices and experience superior lives. With renewed perspectives, we discover innovative approaches to satisfy your requirements, through groundbreaking products and services, valuable guidance and a supportive and compassionate mindset.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center ">
            <p className="text-xs sm:text-sm md:text-base xl:text-xl leading-relaxed">
              We aim to motivate and enable you to make well-informed health choices and experience superior lives. With renewed perspectives, we discover innovative approaches to satisfy your requirements, through groundbreaking products and services, valuable guidance and a supportive and compassionate mindset.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base xl:text-xl leading-relaxed font-medium">
              We provide knowledge. We furnish understanding. We supply authority to medical professionals. Experience Enhanced Living.
            </p>
          </div>
        </div>
      </article>

      {/* Decorative Curve */}
      <Curve innerColor="#424492" outerColor="#EFEFEF" className="rotate-180" />

      {/* Services Section */}
      <article className="w-full bg-[#EFEFEF] px-2 py-8 sm:px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: "Pharmacogenomics Testing",
              img: "/Home/pgx-1.webp",
            },
            {
              title: "Drug Testing Facilities",
              img: "/Home/tox-1.webp",
            },
            {
              title: "COVID-19 Testing",
              img: "covid19.png",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6"
            >
              <div className="w-full flex justify-center mb-4">
                <Image
                  src={`${item.img}`}
                  alt={item.title}
                  width={256}
                  height={256}
                  className="w-40 h-40 sm:w-56 sm:h-56 xl:w-64 xl:h-64 object-contain"
                />
              </div>
              <h2 className="text-center text-lg sm:text-xl xl:text-2xl text-[#292929] font-bold mb-2">
                {item.title}
              </h2>
              <button className="mt-2 bg-[#46A941] hover:bg-green-600 transition-colors text-white font-semibold px-6 py-2 rounded-2xl text-sm sm:text-base">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </article>

      {/* Culture Section */}
      <article className="flex flex-col lg:flex-row justify-between items-center w-full  py-10 ">
        {/* Left content */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#424492] font-semibold mb-3 sm:mb-4">
              Our Culture
            </h2>
            <p className="text-[#292929] text-sm sm:text-base md:text-lg lg:text-2xl ">
              We recognize that our efforts influence people's lives. Each day at Neugenix overflows with vitality, dedication and purpose – our work holds meaning and our team understands that their contributions create significant impact in another person's existence.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-[#46A941] font-semibold">
              Together, We DRIVE Success.
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {[
                { label: "Diversity", src: "/About/logo1.webp" },
                { label: "Respect", src: "/About/logo2.webp" },
                { label: "Integrity", src: "/About/logo3.webp" },
                { label: "Valor", src: "/About/logo4.webp" },
                { label: "Excellence", src: "/About/logo5.webp" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2  bg-white rounded-xl shadow-sm p-3 sm:p-4 lg:p-8 transition-transform hover:scale-105"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={96}
                    height={96}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 object-contain"
                  />
                  <p className="text-center text-xs sm:text-sm md:text-base text-white py-2 px-4 rounded-2xl bg-[#424492] font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image (unchanged size) */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-end items-center">
          <Image
            src="halflogo.webp"
            alt="Culture Visual"
            width={200}
            height={400}
            className="object-contain"
          />
        </div>
      </article>

      {/* Career Opportunities */}
      <article className="flex flex-col bg-[#EFEFEF] lg:flex-row gap-8 justify-around items-center  p-2">
        {/* Text Content */}
        <div className="flex flex-col gap-4 max-w-7xl p-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-black">
            Career Opportunities
          </h1>
          <p className="text-lg lg:text-2xl text-black">
            Our enterprise spans numerous diverse functions. You can discover possibilities in laboratory operations and oversight, research initiatives, information technology, finance and administration, sales and client management, marketing and brand development, human resources and additional areas.
          </p>
          <button className="bg-[#1578fa] rounded-2xl text-white px-5 py-2 lg:py-4 font-semibold w-fit text-sm lg:text-xl">
            APPLY NOW
          </button>
        </div>

        {/* Image */}
        <div className="w-[360px] h-[360px]">
          <img
            src="https://aeonglobalhealth.com/wp-content/uploads/2022/06/aeon-ijmage-02.png"
            alt="Career Opportunities"
            className="w-full h-full object-cover"
          />
        </div>
      </article>

      {/* Testimonials */}
      <article className="flex justify-between items-center w-full bg-[#] py-4 gap-10">
        <div className="flex flex-col gap-4">
          <Image
            src="halflogo2.webp"
            alt="Toxicology Testing"
            className="w-full h-full"
            width={200}
            height={444}
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-2xl px-4 sm:px-8 xl:pr-8 gap-4 mx-auto">
          <h1 className="text-xl sm:text-2xl xl:text-4xl font-bold text-[#424492] text-center xl:text-left">
            Client Testimonials
          </h1>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-base sm:text-lg">
            <p className="text-gray-700 leading-relaxed">
              Neugenix represents one of the most progressive organizations that comprehends the complete range of the current Healthcare System. Neugenix has demonstrated their solid foundation in the industry through their emphasis on excellence in care.
            </p>
          </div>
          <p className="text-base sm:text-lg text-gray-800 text-center xl:text-left">
            <span className="font-semibold">Mustafa Chagani </span>
            <span className="block sm:inline"> CEO of The Texas International Institute of Health Professions</span>
          </p>
        </div>
      </article>

      {/* Work With Us */}
      {/* <article className="flex flex-col gap-4 justify-center items-center bg-[#424492] p-8">
        <p className="2xl:text-4xl sm:text-2xl font-bold text-[#46A941]">Work With Us</p>
        <p className="text-3xl text-white">
          Unite with us and explore a professional environment rich in diversity and commitment.
        </p>
      </article> */}

      {/* Decorative Curve */}
      {/* <Curve innerColor="#86efac" outerColor="#424492" /> */}

   
      {/* Blog & Contact Section */}
      <section className="flex flex-col bg-white xl:flex-row justify-around items-center w-full  px-2 sm:px-4 md:px-8 py-8 gap-8 xl:gap-12 pb-12 xl:pb-20">
        {/* Blog Section */}
        <div className="flex flex-col gap-4 w-full xl:w-1/2 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[40px] text-black py-2 sm:py-4 font-medium text-center xl:text-left">
            Latest Blogs
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {[...Array(3)].map((_, index) => {
                const data = [
                  {
                    src: "/Home/b1.webp",
                    label: "Necessity",
                  },
                  {
                    src: "/Home/b2.webp",
                    label: "Subspecialties",
                  },
                  {
                    src: "/Home/b3.webp",
                    label: "Toxicology Test",
                  },
                ];
                const { src, label } = data[index];
                return (
                  <div
                    key={index}
                    className={`
                        relative group flex-1 min-w-0
                        h-[180px] sm:h-[200px] md:h-[220px] xl:h-[250px]
                        rounded-lg overflow-hidden shadow-lg
                        transition-all duration-300
                        cursor-pointer
                      `}
                  >
                    <Image
                      src={src}
                      alt={label}
                      fill
                      className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 250px"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-base sm:text-lg font-semibold px-2 text-center drop-shadow">
                        {label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center xl:justify-start mt-2">
            <Link
              href="/blog"
              className="bg-[#424492] text-white px-5 py-2 rounded-md font-semibold w-fit text-base sm:text-lg hover:bg-[#35356e] transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
        {/* Contact Section */}
        <div className="w-full xl:w-1/2 max-w-xl mt-8 xl:mt-0">
          <ContactDetails />
        </div>
      </section>

    </main>

  );
}
