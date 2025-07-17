import CareerOpportunities from "./CareerOpportunities";
import ContactDetails from "./ContactDetails";
import Curve from "./Curve";
import OurCulture from "./OurCulture";

export default function HomePage() {
  return (
    <section className="  bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" style={{ backgroundImage: "url('https://aeonglobalhealth.com/wp-content/uploads/2022/06/AEON-Global-Health3.png-scaled.jpg')" }}>
      <div className="max-w-7xl px-20 py-50 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-8">
          <div className=" bg-white max-w-md px-4 py-2">
            <p className="text-xl text-[#424492] font-medium">Medical Laboratory Diagnostics</p>
          </div>
          <div className="flex flex-col gap-5 text-white">
            <h1 className="text-3xl font-bold">
              We Have The TOX Advantage<sup className="text-4xl">TM</sup>
            </h1>
            <p className="text-xl max-w-xl">
              The CDC indicates that opioid addiction has emerged as an extensive health emergency, taking the lives of 115 Americans each day through overdose events. Drug-related adverse effects (ADEs) constitute a significant healthcare obstacle nationally. Roughly 82% of American adults utilize at least one medicinal compound, with 29% employing five or more treatments concurrently. These harmful reactions cause 700,000 emergency room encounters, 120,000 hospitalization cases, and 100,000 deaths yearly throughout the United States. Furthermore, these occurrences produce over $30 billion in additional healthcare costs annually.
            </p>
            <button className="bg-[#46A941] text-white px-8 py-3 rounded-3xl font-semibold hover:bg-green-600 transition-colors w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="h-min-screen">
        <div className="flex flex-col justify-center items-center text-center bg-white p-8">
          <h2 className="2xl:text-4xl sm:text-2xl text-[#4a4e57] mb-6">
            Who Can Benefit From Toxicology Testing?
          </h2>
          <p className="2xl:text-xl sm:text-sm text-gray-600 mb-8 max-w-7xl">
            <b>Toxicology examination</b> provides crucial information and knowledge that empowers regulatory agencies and healthcare professionals to develop guidelines and deliver treatment that reduces substance exposure dangers, lowering the likelihood of drug-related complications and detrimental health outcomes.
          </p>
          <div className="flex flex-col justify-center items-center w-full">
            <img
              src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/bdx-testing-400x158.png"
              alt="Toxicology Testing"
              className="w-[637px] h-[252]" />
            <div className="flex flex-col justify-center items-center">
              <button className="bg-[#46A941] text-white px-8 py-3 rounded-3xl font-semibold hover:bg-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#424492] text-white p-8">
          <h4 className="2xl:text-2xl sm:text-xl  mb-6 max-w-7xl font-bold">
            Each day, we provide essential information that changes lives. We ensure the transmission of this knowledge through the swiftest, most accurate, and most advantageous approaches possible. Human existence depends on this balance.
          </h4>
          <p className="2xl:text-xl sm:text-sm  mb-8 max-w-7xl">
            Our objective is to inspire and empower you to make informed medical decisions and attain improved wellness. Through creative viewpoints, we uncover innovative methods to meet your needs via advanced solutions and services, professional counsel, and a caring, understanding approach.
          </p>
          <p className="2xl:text-xl sm:text-sm  mb-8 max-w-7xl">
            Our purpose is to motivate and enhance your capacity to make well-informed health decisions and enjoy better life quality. Utilizing innovative insight, we recognize new approaches to satisfy your needs through revolutionary products and services, expert advice, and a positive, supportive attitude.
          </p>
          <p className="2xl:text-xl sm:text-sm  mb-8 max-w-7xl">
            We deliver information. We furnish comprehension. We arm medical professionals with insights. Achieve Superior Awareness. Enjoy Elevated Living.
          </p>
        </div>
        <Curve innerColor="#424492" outerColor="#EFEFEF" className="rotate-180" />
        <div className="flex 2xl:flex-row flex-col justify-center items-center w-full bg-[#EFEFEF] p-8 gap-10">
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <div className="w-[293px] h-[293px]">
              <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/pgx-1.png" alt="Toxicology Testing" className="w-full h-full" />
            </div>
            <h2 className="text-center text-2xl text-[#292929] font-bold">Pharmacogenomics Testing</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <div className="w-[293px] h-[293px]">
              <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/tox-1.png" alt="Toxicology Testing" className="w-full h-full" />
            </div>
            <h2 className="text-center text-2xl text-[#292929] font-bold">Drug Testing Facilities</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <div className="w-[293px] h-[293px]">
              <img src="https://aeonglobalhealth.com/wp-content/uploads/2022/03/covid19.png" alt="Toxicology Testing" className="w-full h-full" />
            </div>
            <h2 className="text-center text-2xl text-[#292929] font-bold">COVID-19 Testing</h2>
          </div>
        </div>
        <OurCulture
          title="Our Culture"
          description="We acknowledge that our endeavors affect human lives directly. Every day at Nuegenix overflows with energy, commitment, and meaning – our contributions possess importance, and our team members understand that their individual positions generate significant impact in others' lives." />
        <Curve innerColor="#46A941" outerColor="#EFEFEF" />
        <div className="flex justify-center items-center w-full bg-[#46A941] p-8 gap-10 pb-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-[40px] text-white py-4 font-medium">Latest Blogs</h2>
            <div className="flex flex-col gap-1">
              <div className="flex w-[600px] h-[250px] overflow-hidden rounded group">
                {[
                  {
                    src: "https://aeonglobalhealth.com/wp-content/uploads/2022/06/Understanding-the-Necessity-of-a-Toxicology-Lab.jpg",
                    label: "UNDERSTANDING-THE-NECESSITY-OF-A-"
                  },
                  {
                    src: "https://aeonglobalhealth.com/wp-content/uploads/2022/06/Ten-Subspecialties-of-Toxicology.jpg",
                    label: "TEN-SUBSPECIALTIES-OF-TOXICOLOGY"
                  },
                  {
                    src: "https://aeonglobalhealth.com/wp-content/uploads/2022/06/What-is-a-toxicology-test-and-why-do-we-need-it.jpg",
                    label: "WHAT-IS-A-TOXICOLOGY-TEST-AND-WHY-"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative flex-[1] transition-all duration-300 group-hover:flex-[1] hover:flex-[8] cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="object-cover w-full h-full transition-all duration-300 shadow-lg "
                    />
                    <div className="absolute inset-0 bg-black/30 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold px-2 text-center">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-[#424492] text-white px-4 py-2 rounded-md font-semibold w-fit">
              Read More
            </button>
          </div>
          <div>
            <ContactDetails className="bg-[#3E973A] text-white" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full bg-[#EFEFEF] py-4 gap-10 ">
          <div className="flex flex-col gap-4">
            <img
              src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20-Copy-200x444.png"
              alt="Toxicology Testing" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-4 justify-center w-7xl pr-8">
            <h1 className="2xl:text-4xl sm:text-2xl font-bold">Client Testimonials</h1>
            <div className="text-lg bg-white p-4 ">
              <p>Nuegenix represents one of the most progressive organizations that understands the full scope of today's Healthcare System. Nuegenix has shown their strong foundation in the field through their dedication to excellence in patient care.</p>
            </div>
            <p className="text-lg"><b>Mustafa Chagani</b>, CEO of The Texas International Institute of Health Professions</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center bg-[#424492] p-8">
          <p className="2xl:text-4xl sm:text-2xl font-bold text-[#46A941]">Work With Us</p>
          <p className="text-3xl text-white">Unite with us and explore a professional environment rich in diversity and commitment.</p>
        </div>
        <Curve innerColor="#46A941" outerColor="#424492" />
        <CareerOpportunities
          image="	https://aeonglobalhealth.com/wp-content/uploads/2022/06/aeon-ijmage-02.png"
          title="Career Opportunities"
          description="Our enterprise encompasses various distinct functions. You might find opportunities in laboratory operations and supervision, scientific investigation, information technology, financial and administrative support, sales and customer relations, marketing and brand management, personnel services, and other departments."
        />
      </div>
    </section>
  );
}