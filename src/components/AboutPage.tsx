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
          description="At Nuegenix, we pioneer innovative healthcare technologies to enhance our operational excellence and create meaningful impact in patient care."
          titleClass="text-[#424492] text-center text-2xl"
          descriptionClass="text-black text-center max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/cs-400x284.jpg"
          title="EXCEPTIONAL CUSTOMER SERVICE"
          description="At Nuegenix, we provide outstanding client support through the utilization of sophisticated healthcare technologies to optimize our operations and elevate patient results."
          titleClass="text-[#424492] text-center text-2xl"
          descriptionClass="text-black text-center max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/09/integrety-400x284.jpg"
          title="INTEGRITY"
          description="At Nuegenix, we maintain unwavering ethical principles while developing healthcare innovations to refine our methodologies and strengthen patient support."
          titleClass="text-[#424492] text-center text-2xl"
          descriptionClass="text-black text-center max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8 bg-[#46A941] text-white gap-4">
        <h1 className="text-4xl font-semibold">Our Mission – Pioneering Healthcare Innovation</h1>
        <p className="text-xl font-semibold max-w-[60%]">
          At Nuegenix, we develop state-of-the-art healthcare solutions to perpetually refine our operations and elevate patient treatment. Through implementing modern laboratory equipment and streamlined workflows, we sustain our status as a premier industry leader in quality control and diagnostic precision. Our expertly qualified professional staff provides exceptional client service via rapid response times and transparent, detailed documentation.
        </p>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <div className="flex justify-between items-center bg-[#EFEFEF] gap-4 py-8">
        <div className="flex flex-col  gap-4 p-8">
          <p className="text-base max-w-[80%]">
            Laboratory test outcomes, encompassing blood analysis, impact over 70% of clinical decisions. Approximately 50% of data in typical medical records originates from diagnostic testing. It remains essential for patients to obtain superior service quality and precise results.
          </p>
          <p className="text-base max-w-[80%]">
            Through our advanced testing solutions and cutting-edge methodologies, Nuegenix has positioned itself as a market leader. Our extensive test offerings play a vital role in guiding the clinical decisions of healthcare professionals.
          </p>
        </div>
        <div className="">
          <img src="	https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="Nuegenix" className="w-[180px] h-[300px]" />
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
            At Nuegenix, we are dedicated to supporting individuals in achieving better and enhanced well-being. We create solutions to deliver insights that enable you to take control of your health journey.
          </p>
        </div>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />

      <div className="flex justify-between items-center py-8 bg-[#EFEFEF]">
        <div className="flex justify-center items-center">
          <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20-Copy.png" alt="Nuegenix" className="w-[170px] h-[300px]" />
        </div>
        <div className="flex flex-col gap-4 w-[80%] pr-8">
          <h1 className="text-4xl font-semibold text-[#424492]">Our Identity – A Rising Industry Pioneer</h1>
          <h3 className="text-xl font-semibold py-2 ">We stand as a Rising Authority in Delivering Clinically Relevant Data.</h3>
          <p className="">
            Nuegenix Global Health represents a premier healthcare organization that promotes superior patient treatment and wellness. Our foundation centers on an unwavering dedication to data – insights that enable medical professionals to make enhanced and knowledgeable choices. Daily, we provide sophisticated laboratory diagnostic solutions to an international community of physician clients who align with our mission to improve health results and transform lives.
          </p>
          <p>
            We present an extensive range of industry-leading solutions that seamlessly align with enduring healthcare developments. Our purpose is to support disease prevention, identification, and management by supplying medical practitioners with clinically relevant intelligence that fosters patient-focused, individualized healthcare delivery.
          </p>
          <h2 className="text-2xl font-semibold text-[#46A941] pt-2">
            A Progressive and Expansion-Focused Healthcare Enterprise
          </h2>
          <p>
            We represent a publicly listed, expansion-focused healthcare organization that delivers laboratory diagnostic solutions. Functioning from a contemporary 30,000 square-foot complex in suburban Atlanta, our Company presents a complete spectrum of healthcare services spanning Cancer Genomics, Pharmacogenomics, Toxicology and Infectious Disease management.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8 bg-[#46A941] text-white">
        <h1 className="text-4xl font-semibold">Our Future Outlook</h1>
        <p className="text-xl font-semibold max-w-[60%] pt-2">
          To become a Respected Worldwide Healthcare Organization Motivating Enhanced Well-being
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
            <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/fullim-400x424.png" alt="Nuegenix" className="w-[200px] h-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8 bg-[#46A941] text-white">
        <h1 className="text-4xl font-semibold">Our Commitment</h1>
        <p className="text-xl font-semibold max-w-[60%] pt-2">
          Enable Individuals to Achieve Wellness and Enhanced Quality of Life
        </p>
      </div>
      <Curve innerColor="#46A941" outerColor="#424492" className="rotate-180" />
    </div>
  );
}