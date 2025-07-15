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
              According to the CDC, the crisis of Opioid addiction is a growing epidemic with 115 Americans dying every day from an opioid overdose. Adverse drug events (ADEs) are a serious health issue in the United States. About 82% of American adults take at least one medication while 29% take ﬁve or more. ADEs lead to 700,000 emergency room visits, 120,000 hospitalizations, and 100,000 deaths in the US each year. Moreover, this results in over $30 billion in additional spending annually.
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
            <b>Toxicology testing</b> provides critical information and knowledge that can be used by regulatory agencies and healthcare professionals to put policies in place and administer treatment that limits exposures to substances, reducing the likelihood of adverse drug events and negative health outcomes.
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
            Every single day, we provide information that changes lives. We ensure that we deliver this information in the quickest, most accurate, and most useful way possible.  Lives depend on it.
          </h4>
          <p className="2xl:text-xl sm:text-sm  mb-8 max-w-7xl">
            We want to inspire and empower you to make informed health decisions and lead better lives. With fresh eyes, we seek out new ways to meet your needs, through innovative products and services, insightful advice and a positive and caring attitude.
          </p>
          <p className="2xl:text-xl sm:text-sm  mb-8 max-w-7xl">
            We want to inspire and empower you to make informed health decisions and lead better lives. With fresh eyes, we seek out new ways to meet your needs, through innovative products and services, insightful advice and a positive and caring attitude.
          </p>
          <p className="2xl:text-xl sm:text-sm  mb-8 max-w-7xl">
            We deliver information. We deliver insight. We deliver power to physicians. Know Better. Live Better.
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
          description="We understand that our work impacts the lives of people. Each day at AEON is filled with energy, enthusiasm and passion – our work is meaningful and our people understand that the role they play is making a difference in someone else’s life." />
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
              <p>Aeon is one of the most innovative agencies which understands the whole spectrum of the present Health Care System. Aeon has proven their strong footing in the industry with insistence on quality care.</p>
            </div>
            <p className="text-lg"><b>Mustafa Chagani</b>, CEO of The Texas International Institute of Health Professions</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center bg-[#424492] p-8">
          <p className="2xl:text-4xl sm:text-2xl font-bold text-[#46A941]">Work With Us</p>
          <p className="text-3xl text-white">Come and experience a culture rich in diversity and passion.</p>
        </div>
        <Curve innerColor="#46A941" outerColor="#424492" />
        <CareerOpportunities
          image="	https://aeonglobalhealth.com/wp-content/uploads/2022/06/aeon-ijmage-02.png"
          title="Career Opportunities"
          description="Our business encompasses many different functions. You can explore opportunities in laboratory operations and management, research, information technology, finance and administration, sales and account management, marketing and brand management, human resources and more."
        />
      </div>
    </section>
  );
}