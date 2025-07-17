import CareerItems from "./CareerItems";
import CareerOpportunities from "./CareerOpportunities";
import Curve from "./Curve";
import OurCulture from "./OurCulture";

export default function CareersPage() {
  return (
    <section className="  bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" >
      <div className="relative">
        <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/10/WWUnew.jpg" alt="Careers" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0  h-full flex flex-col justify-center items-center w-5xl">
          <p className="text-[#424492] text-4xl font-semibold">Working With Us</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8 pb-10 bg-[#46A941] text-white">
        <p className="text-2xl font-semibold">Join us and discover a workplace abundant in diversity and dedication.</p>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <OurCulture
        title="Career Opportunities"
        description="We acknowledge that our efforts significantly influence individual lives. Each day at Nuegenix is powered by zeal and commitment – our endeavors hold purpose, and our colleagues realize that their involvement creates substantial impact in another person's existence."
      />
      <CareerOpportunities
        image="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Career-1-400x400.jpg"
        title="Career Opportunities"
        description="Our enterprise encompasses varied operational sectors. You may explore possibilities within laboratory functions and supervision, investigative projects, technological systems, financial and administrative services, sales and client relations, promotional and brand oversight, personnel management, and countless additional divisions."
        buttonClass="bg-[#46A941] border-2 border-white "
      />
      <div className="grid grid-cols-[auto_auto] justify-center items-start gap-10 p-8">
        <CareerItems
          image="	https://aeonglobalhealth.com/wp-content/uploads/2020/10/culture-of-innovation.jpg"
          title="Culture of Innovation"
          description="We strongly advocate that varied viewpoints ignite inventiveness and pioneering solutions to medical obstacles. We enthusiastically support novel and revolutionary concepts to create improved services, procedures, and techniques that enable individuals to pursue healthier lifestyles."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
            imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/10/mutual-respect.jpg"
          title="Mutual Respect"
          description="We approach everyone with reciprocal confidence and regard. We nurture an atmosphere that honors, comprehends, and foresees our clients' requirements – our clients remain our foremost concern. Each day at Nuegenix presents a chance for our workforce to cooperate purposefully in enhancing lives."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/10/integrity.jpg"
          title="Integrity"
          description="We sustain steadfast dedication to exceptional quality benchmarks throughout all functional domains, distinction in client associations, and transparency with reciprocal regard in alliances. We preserve our fundamental principles of truthfulness, authenticity, and justice across all engagements. We persistently maintain accountability to the supreme ethical and operational criteria."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
            imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/10/career-growth.jpg"
          title="Career Growth"
          description="We strive to offer vocations abundant with stimulating and fulfilling work prospects, coupled with individual and occupational advancement. Ongoing education, workplace guidance, and distinctly structured progression programs stay paramount at Nuegenix. Targets and aims are meticulously detailed to assist staff in comprehending their role in organizational achievement. Supervisors provide regular input to empower personnel to successfully handle their productivity and career progression. Advancement and acknowledgment are granted according to concrete outcomes and individual efficiency."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-[#46A941]">
        <div className="flex flex-col gap-10 justify-center items-center p-8 pb-10  text-white max-w-7xl">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h1 className="text-4xl font-semibold">Apply Now</h1>
            <p className="text-xl font-semibold">Candidates must forward their curriculum vitae and accompanying letter explaining how they satisfy the particular role specifications to hr@aeonglobalhealth.com. Though we sincerely value every submission, solely selected applicants will receive communication.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h1 className="text-4xl font-semibold">Apply Now to Intern at Nuegenix</h1>
            <p className="text-xl font-semibold">Candidates must forward their curriculum vitae and accompanying letter explaining how they satisfy the particular role specifications to hr@aeonglobalhealth.com.</p>
          </div>
        </div>
      </div>
      <Curve innerColor="#46A941" outerColor="#424492" className="rotate-180" />
    </section>
  );
}