import Link from "next/link";
import Image from "next/image";
import ContactDetails from "@/components/ContactForm";




export default function Home() {


  return (
    <main className=" mt-10  lg:mt-18 ">

      {/* Hero Section */}
      <section
        className="
          relative
          min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
          flex items-center justify-center
          px-3 xs:px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
          py-8 xs:py-10 sm:py-16 md:py-20
          overflow-hidden
        "
      >
        {/* Background Image */}
        <Image
          src="/Home/AEON.webp"
          alt="Medical Laboratory Diagnostics"
          fill
          priority
          className="object-cover object-center z-0"
          sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 100vw,
    100vw
  "
          quality={80} // reduces file size without much visual loss
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
        <div className="relative z-10 flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 text-center text-white w-full max-w-xs xs:max-w-sm sm:max-w-3xl md:max-w-5xl">
          <div className="bg-white/90 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg shadow-md w-full max-w-[90vw] xs:max-w-xs sm:max-w-sm mx-auto">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl font-medium text-[#424492]">
              Medical Laboratory Diagnostics
            </p>
          </div>

          <div className="space-y-3 xs:space-y-4 sm:space-y-6 w-full">
            <h1 className="text-lg xs:text-xl sm:text-3xl md:text-5xl xl:text-6xl font-bold leading-tight xs:leading-tight sm:leading-snug drop-shadow-lg">
              We Have The Solution You Need
              {/* <sup className="text-base xs:text-lg sm:text-2xl md:text-4xl align-super ml-1">
                
              </sup> */}
            </h1>

            <details className="max-w-full mx-auto text-left group">
              <summary className="cursor-pointer text-sm sm:text-base md:text-lg xl:text-2xl text-white/90 hover:text-white transition-colors font-medium list-none">
                <span>
                  The CDC reports that opioid dependency represents an escalating health crisis with 115 Americans perishing daily from overdose incidents. Drug-related adverse reactions  (ADEs) constitute a significant
                  <span className="inline group-open:hidden text-green-200 ml-3 xs:ml-5">(Read more)</span>
                  <span className="hidden group-open:inline text-green-200 ml-3 xs:ml-5">(Show less)</span>
                </span>
              </summary>
              <p className="mt-2 text-sm sm:text-base md:text-lg xl:text-2xl font-medium text-white/90">
                healthcare concern  in the United States. Approximately
                82% of American adults consume at least one pharmaceutical while 29% utilize five or more medications. ADEs result in 700,000 emergency department encounters, 120,000 hospital admissions, and 100,000 fatalities annually in the US. Furthermore, this generates over $30 billion in excess healthcare expenditures yearly.
              </p>
            </details>

            <Link
              href="#1"
              className="bg-[#2F7A2F] hover:bg-green-700 transition-colors text-white font-semibold px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-3xl text-sm xs:text-base sm:text-lg xl:text-2xl shadow-md inline-block"
            >
              Learn More about Neugenix
            </Link>

          </div>
        </div>
      </section>

      {/* Benefit from Toxicology Testing */}
      <article
        id="1"
        className="flex flex-col justify-center items-center text-center bg-white px-2 py-6 xs:px-3 xs:py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24"
      >
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold text-[#144afc] mb-3 xs:mb-4 sm:mb-6">
          Who Can Benefit From Toxicology Testing?
        </h2>
        <p className="text-sm sm:text-base md:text-lg xl:text-2xl text-gray-600 mb-4 xs:mb-6 sm:mb-8 max-w-full mx-auto text-left">
          <b>Toxicology examination</b> delivers vital information and insights that regulatory authorities and medical professionals can utilize to establish guidelines and provide care that restricts substance exposure, diminishing the probability of adverse drug reactions and harmful health consequences.
        </p>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-center mb-3 xs:mb-4">
            <Image
              src="/img1-1.webp"
              alt="Toxicology Testing"
              width={400}
              height={158}
              className="w-full max-w-[90vw] xs:max-w-xs sm:max-w-md md:max-w-lg xl:max-w-2xl h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              href="/services"
              className="bg-[#2E7D32] text-white px-4 xs:px-6 py-2 sm:px-8 sm:py-3 rounded-3xl font-semibold hover:bg-green-700 transition-colors text-sm xs:text-base sm:text-lg xl:text-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              See Services
            </Link>
          </div>
        </div>
      </article>

      {/* Core Values Section */}
      <article className="flex flex-col items-center justify-center bg-[#424492] text-white px-2 py-6 xs:px-3 xs:py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <h2 className="text-sm xs:text-base sm:text-lg md:text-xl xl:text-3xl font-bold mb-6 xs:mb-8 sm:mb-10 max-w-full mx-auto leading-snug sm:leading-normal text-center">
          Each and every day, we supply information that transforms lives. We guarantee that we transmit this knowledge in the swiftest, most precise, and most beneficial manner achievable. Lives rely on it.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 w-full max-w-full mx-auto">
          <div className="bg-white/10 rounded-xl shadow-lg p-4 xs:p-6 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base xl:text-xl leading-relaxed text-left">
              We aim to motivate and enable you to make well-informed health choices and experience superior lives. With renewed perspectives, we discover innovative approaches to satisfy your requirements, through groundbreaking products and services, valuable guidance and a supportive and compassionate mindset.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-4 xs:p-6 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base xl:text-xl leading-relaxed text-left">
              We aim to motivate and enable you to make well-informed health choices and experience superior lives. With renewed perspectives, we discover innovative approaches to satisfy your requirements, through groundbreaking products and services, valuable guidance and a supportive and compassionate mindset.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-4 xs:p-6 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base xl:text-xl leading-relaxed font-medium text-left">
              We provide knowledge. We furnish understanding. We supply authority to medical professionals. Experience Enhanced Living.
            </p>
          </div>
        </div>
      </article>

      {/* Decorative Curve */}
      {/* <Curve innerColor="#424492" outerColor="#EFEFEF" className="rotate-180" /> */}

      {/* Services Section */}
      <article className="w-full bg-[#EFEFEF] px-2 py-6 xs:px-3 sm:px-4 md:px-8">
        <div className="max-w-full mx-auto lg:mx-40 grid grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 xl:grid-cols-2 md:gap-8 xl:gap-10 px-0 xs:px-2 sm:px-0">
          {[
            {
              title: "Pharmacogenomics Testing",
              img: "/Home/h1.webp",
              href:'/services/#pharmacogenomics '
            },
            {
              title: "Drug Testing Facilities",
              img: "/Home/h3.webp",
              href: '/services/#drug-testing '
            },
            // {
            //   title: "COVID-19 Testing",
            //   img: "/Home/covid.webp",
            //   href: '/services '
            // },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-full"
            >
              <div className="w-full flex justify-center mb-3 xs:mb-4 relative h-32 xs:h-40 sm:h-48 md:h-56 xl:h-72">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, (max-width: 1280px) 24rem, 28rem"
                  className="object-cover rounded-2xl"
                  priority={idx === 0}
                />
              </div>
              <h3 className="text-center text-base xs:text-lg sm:text-xl xl:text-xl text-[#292929] font-bold mb-2">
                {item.title}
              </h3>
              <Link
                href={item.href}
                className="mt-2 bg-[#2E7D32] hover:bg-green-700 transition-colors text-white font-semibold px-4 xs:px-6 py-2 sm:px-8 sm:py-2 rounded-2xl text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl inline-block text-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                Explore Services
              </Link>

            </div>
          ))}
        </div>
      </article>

      {/* Culture Section */}
      <article className="flex flex-col lg:flex-row justify-between items-center w-full py-6 xs:py-8 sm:py-10">
        {/* Left content */}
        <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 w-full px-2 xs:px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div>
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#144afc] font-semibold mb-2 xs:mb-3 sm:mb-4">
              Our Culture
            </h2>
            <p className="text-[#292929] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              We recognize that our efforts influence people's lives. Each day at Neugenix overflows with vitality, dedication and purpose – our work holds meaning and our team understands that their contributions create significant impact in another person's existence.
            </p>
          </div>

          <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4">
            <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-[#277734] font-semibold">
              Together, We DRIVE Success.
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
              {[
                { label: "Diversity", src: "/About/logo1.webp" },
                { label: "Respect", src: "/About/logo2.webp" },
                { label: "Integrity", src: "/About/logo3.webp" },
                { label: "Valor", src: "/About/logo4.webp" },
                { label: "Excellence", src: "/About/logo5.webp" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1 xs:gap-2 bg-white rounded-xl shadow-sm p-2 xs:p-3 sm:p-4 lg:p-6 transition-transform hover:scale-105"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={72}
                    height={72}
                    className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                  />
                  <p className="text-center text-xs sm:text-sm md:text-base xl:text-lg text-white py-1 xs:py-2 px-2 xs:px-4 rounded-2xl bg-[#424492] font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image (unchanged size) */}
        <div className="hidden lg:flex w-full lg:w-1/2 mt-6 lg:mt-0 justify-end items-center">
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
      <article className="flex flex-col bg-[#EFEFEF] lg:flex-row gap-6 sm:gap-8 justify-around items-center p-2 sm:p-4">
        {/* Text Content */}
        <div className="flex flex-col gap-3 sm:gap-4 max-w-7xl p-2 sm:p-4">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-5xl font-bold text-[#144afc]">
            Career Opportunities
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-black">
            Our enterprise spans numerous diverse functions. You can discover possibilities in laboratory operations and oversight, research initiatives, information technology, finance and administration, sales and client management, marketing and brand development, human resources and additional areas.
          </p>
          <Link
            href="/contact"
            className="bg-[#0D63CE] rounded-2xl text-white px-4 sm:px-5 py-2 lg:py-3 font-semibold w-fit text-xs sm:text-sm lg:text-lg hover:bg-[#0B57B3] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Apply Now
          </Link>

        </div>

        {/* Image */}
        <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
          <img
            src="https://aeonglobalhealth.com/wp-content/uploads/2022/06/aeon-ijmage-02.png"
            alt="Career Opportunities"
            className="w-full h-full object-cover"
          />
        </div>
      </article>

      {/* Testimonials */}
      <article className="flex flex-col md:flex-row justify-between items-center w-full bg-[#] py-4 gap-6 md:gap-10">
        {/* Left image (hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-4">
          <Image
            src="halflogo2.webp"
            alt="Toxicology Testing"
            className="w-full h-full"
            width={200}
            height={444}
            unoptimized
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-center w-full max-w-7xl px-4 sm:px-8 xl:pr-8 gap-4 mx-auto">
          <h1 className="text-lg sm:text-xl xl:text-5xl font-bold text-[#144afc] text-center xl:text-left">
            Client Testimonials
          </h1>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-sm sm:text-base xl:text-2xl">
            <p className="text-gray-700 leading-relaxed">
              Neugenix represents one of the most progressive organizations that comprehends the complete range of the current Healthcare System. Neugenix has demonstrated their solid foundation in the industry through their emphasis on excellence in care.
            </p>
          </div>
          <p className="text-sm sm:text-base xl:text-2xl text-gray-800 text-center xl:text-left">
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
      {/* <section className="flex flex-col bg-white xl:flex-row justify-around items-center w-full sm:px-4 md:px-8 py-8 gap-8 xl:gap-12 px-4 xl:px-20">
        <article className="flex flex-col gap-4 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl text-[#144afc] py-2 sm:py-4 font-medium text-center xl:text-left">
            Latest Blogs
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full">
              {[
                { src: "/Home/b1.webp", label: "Necessity" },
                { src: "/Home/b2.webp", label: "Subspecialties" },
                { src: "/Home/b3.webp", label: "Toxicology Test" },
              ].map(({ src, label }, index) => (
                <div
                  key={index}
                  className="relative group flex-1 min-w-[200px] sm:min-w-[30%] w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={label}
                    width={600}
                    height={338}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 220px"
                    unoptimized
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold px-2 text-center drop-shadow text-white">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center xl:justify-start mt-2">
            <Link
              href="/blog"
              className="bg-[#424492] text-white px-5 py-2 rounded-md font-semibold w-fit text-base sm:text-lg md:text-xl xl:text-2xl hover:bg-[#35356e] transition-colors"
            >
              Read More Blogs
            </Link>
          </div>
        </article>

      
      </section> */}


      {/* Contact Section */}
      <section className="w-full p-1 xl:mt-0 bg-white">
        <ContactDetails />
      </section>

    </main>

  );
}
