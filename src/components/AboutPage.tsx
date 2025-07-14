import AboutCallToActionSection from "./about/AboutCallToActionSection";
import AboutCoreValuesSection from "./about/AboutCoreValuesSection";
import AboutHeroSection from "./about/AboutHeroSection";
import AboutMissionSection from "./about/AboutMissionSection";
import AboutResponsibleCitizenshipSection from "./about/AboutResponsibleCitizenshipSection";
import AboutVisionSection from "./about/AboutVisionSection";
import CareerItems from "./CareerItems";
import Curve from "./Curve";

export default function AboutPage() {
  const images = [

    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/10/bdx.jpg",
      title: "Blood Wellness",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/10/cgxnew.jpg",
      title: "Cancer Genomics",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/10/pgxnew.jpg",
      title: "Pharmacogenomics",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/10/toxnew.jpg",
      title: "Toxicology",
    },
  ]

  const valueImages = [
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/diversitynew.png",
      title: "DIVERSITY",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/respectnew.png",
      title: "RESPECT",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/intergritynew.png",
      title: "INTEGRITY",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/valornew.png",
      title: "VALOR",
    },
    {
      image: "https://aeonglobalhealth.com/wp-content/uploads/2020/09/excellencenew.png",
      title: "EXCELLENCE",
    },
  ]
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <AboutMissionSection />
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <AboutCoreValuesSection />
      <AboutVisionSection />
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <AboutResponsibleCitizenshipSection />
      <AboutCallToActionSection />
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <div className="flex flex-wrap justify-center items-center p-8 bg-[#EFEFEF] mx-auto gap-2">
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/09/innovation-400x284.jpg"
          title="INNOVATION"
          description="At AEON, we advance cutting-edge healthcare technologies to continuously improve our processes and bring significant improvements in the lives of our patients."
          titleClass="text-[#424492] text-center text-2xl"
          descriptionClass="text-black text-center max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/cs-400x284.jpg"
          title="EXCEPTIONAL CUSTOMER SERVICE"
          description="At AEON, we advance cutting-edge healthcare technologies to continuously improve our processes and bring significant improvements in the lives of our patients."
          titleClass="text-[#424492] text-center text-2xl"
          descriptionClass="text-black text-center max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/09/integrety-400x284.jpg"
          title="INTEGRITY"
          description="At AEON, we advance cutting-edge healthcare technologies to continuously improve our processes and bring significant improvements in the lives of our patients."
          titleClass="text-[#424492] text-center text-2xl"
          descriptionClass="text-black text-center max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8 bg-[#46A941] text-white gap-4">
        <h1 className="text-4xl font-semibold">What We Do – Advancing Healthcare Technologies</h1>
        <p className="text-xl font-semibold max-w-[60%]">
          At AEON, we advance cutting-edge healthcare technologies to continuously improve our processes and bring significant improvements in the lives of our patients. The use of the latest in laboratory technology and automated processes allows us to be a leading industry player in quality assurance and reporting accuracy. From our fast turnaround times to our clear and comprehensive reporting, our highly trained team of professionals offer outstanding customer service.
        </p>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <div className="flex justify-between items-center bg-[#EFEFEF] gap-4 py-8">
        <div className="flex flex-col  gap-4 p-8">
          <p className="text-base max-w-[80%]">
            Diagnostic test results, including blood tests, influence more than 70% of medical decisions. About 50% of the information in the average medical chart comes from laboratory data. 1It is imperative for patients to receive the highest level of service and accurate results.
          </p>
          <p className="text-base max-w-[80%]">
            AEON’s innovative testing solutions and methodologies make us a leading player in the market. Our test menu is an important first step in the overall treatment decisions rendered by medical professionals.
          </p>
        </div>
        <div className="">
          <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="AEON" className="w-[180px] h-[300px]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-8">
        <div className="flex flex-wrap gap-y-4 gap-x-8 max-w-[70%] ">
          {images.map((image) => (
            <div key={image.title} className="flex flex-col gap-8">
              <img src={image.image} alt={image.title} className="w-[400px] h-[200px]" />
              <p className="text-center text-lg font-semibold bg-[#424492] text-white py-1 px-4 ">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center text-center p-8 bg-[#46A941] text-white  gap-2">
        <div className="flex flex-col gap-4  max-w-[50%]">
          <p className="text-xl font-semibold">
            At AEON, we believe in helping people lead healthier and improved lives. We innovate to provide you information that helps you manage your health.
          </p>
        </div>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />

      <div className="flex justify-between items-center py-8 bg-[#EFEFEF]">
        <div className="flex justify-center items-center">
          <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20-Copy.png" alt="AEON" className="w-[170px] h-[300px]" />
        </div>
        <div className="flex flex-col gap-4 w-[80%] pr-8">
          <h1 className="text-4xl font-semibold text-[#424492]">Who We Are – An Emerging Leader</h1>
          <h3 className="text-xl font-semibold py-2 ">We are an Emerging Leader in the Provision of Clinically Actionable Information.</h3>
          <p className="">
            AEON Global Health is a leading healthcare company that drives better patient care and healthier lives. At our core, is a relentless focus on information – information that empowers healthcare professionals to make better and informed decisions. Each and every day, we deliver advanced laboratory diagnostic services to a global group of physician customers who share our commitment to enhance health outcomes and improve lives.
          </p>
          <p>
            We offer a broad portfolio of market-leading solutions that are well-aligned with
            long-term healthcare trends. Our mission is to help in the prevention, diagnosis, and treatment of diseases by providing healthcare professionals with clinically actionable information that promotes patient‐centric, personalized medical care.
          </p>
          <h2 className="text-2xl font-semibold text-[#46A941] pt-2">
            An Innovative and Growth-Oriented Healthcare Company
          </h2>
          <p>
            We are a publicly traded, growth-oriented healthcare company that provides laboratory diagnostic services. Operating out of a modern 30,000 square-foot facility in suburban Atlanta, the Company offers a comprehensive menu of healthcare services in Cancer Genomics, Pharmacogenomics, Toxicology and Infectious Diseases.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8 bg-[#46A941] text-white">
        <h1 className="text-4xl font-semibold">Our Vision</h1>
        <p className="text-xl font-semibold max-w-[60%] pt-2">
          To be an Admired Global Healthcare Company Inspiring Better Lives
        </p>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <div className="flex justify-center items-center p-8 bg-[#EFEFEF] w-full">
        <div className="flex justify-between items-center ">
          <div className="flex flex-wrap sm:flex-col md:flex-row justify-between items-center gap-20">
            {valueImages.map((image) => (
              <div key={image.title} className="flex flex-col items-center gap-2">
                <img src={image.image} alt={image.title} className="w-[80px] h-[80px]" />
                <p className="text-center text-sm font-semibold bg-[#424492] text-white py-1 px-4 rounded-full">{image.title}</p>
              </div>
            ))}
          </div>
          <div className="pl-8">
            <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/fullim-400x424.png" alt="AEON" className="w-[200px] h-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8 bg-[#46A941] text-white">
        <h1 className="text-4xl font-semibold">Our Promise</h1>
        <p className="text-xl font-semibold max-w-[60%] pt-2">
          Empower People to Lead Healthier and Better Lives
        </p>
      </div>
      <Curve innerColor="#46A941" outerColor="#424492" className="rotate-180" />
    </div>
  );
}