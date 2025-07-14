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
        <p className="text-2xl font-semibold">Come and experience a culture rich in diversity and passion.</p>
      </div>
      <Curve innerColor="#46A941" outerColor="#EFEFEF" className="rotate-180" />
      <OurCulture
        title="Career Opportunities"
        description="We understand that our work impacts the lives of people. Each day at AEON is filled with energy, enthusiasm and passion – our work is meaningful and our people understand that the role they play is making a difference in someone else’s life."
      />
      <CareerOpportunities
        image="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Career-1-400x400.jpg"
        title="Career Opportunities"
        description="Our business encompasses many different functions. You can explore opportunities in laboratory operations and management, research, information technology, finance and administration, sales and account management, marketing and brand management, human resources and more."
        buttonClass="bg-[#46A941] border-2 border-white "
      />
      <div className="grid grid-cols-[auto_auto] justify-center items-start gap-10 p-8">
        <CareerItems
          image="	https://aeonglobalhealth.com/wp-content/uploads/2020/10/culture-of-innovation.jpg"
          title="Culture of Innovation"
          description="We believe that diverse perspectives inspire creativity and new ways to address healthcare challenges. We encourage new and innovative ideas to shape better services, processes and methodologies that enable people to lead healthier lives."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
            imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/10/mutual-respect.jpg"
          title="Mutual Respect"
          description="We treat everyone with mutual trust and respect. We foster an environment that respects, understands and anticipates the needs of our customers – our customers come first. Each day at AEON is a day where people work collaboratively to improve lives."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/10/integrity.jpg"
          title="Integrity"
          description="We are committed to the highest standards of quality in all areas of operations, excellence in customer relationships, and honesty and mutual respect in partnerships. We uphold our values of honesty, integrity and fairness in all our interactions. We hold ourselves accountable to the highest ethical and performance standards."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
            imageClass="w-[400px] h-[200px]"
        />
        <CareerItems
          image="https://aeonglobalhealth.com/wp-content/uploads/2020/10/career-growth.jpg"
          title="Career Growth"
          description="We strive to provide careers full of challenging and rewarding work, as well as personal and professional growth. Continuous training, on-site mentoring and clearly defined development programs are a priority at AEON. Goals and objectives are clearly defined to help employees understand how they can contribute to organizational success. Managers provide consistent feedback to enable employees to manage their performance and their careers. Promotions and recognition are based on tangible results and personal effectiveness."
          titleClass="bg-[#424492] text-white max-w-[400px] py-1"
          descriptionClass="bg-[#46A941] text-white max-w-[400px] py-1"
          imageClass="w-[400px] h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-[#46A941]">
        <div className="flex flex-col gap-10 justify-center items-center p-8 pb-10  text-white max-w-7xl">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h1 className="text-4xl font-semibold">Apply Now</h1>
            <p className="text-xl font-semibold">Applicants should send a resume and cover letter outlining how they meet the specific requirements of the position to hr@aeonglobalhealth.com. While we sincerely appreciate all applications, only shortlisted candidates will be contacted.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h1 className="text-4xl font-semibold">Apply Now to Intern at AEON</h1>
            <p className="text-xl font-semibold">Applicants should send a resume and cover letter outlining how they meet the specific requirements of the position to hr@aeonglobalhealth.com.</p>
          </div>
        </div>
      </div>
      <Curve innerColor="#46A941" outerColor="#424492" className="rotate-180" />
    </section>
  );
}