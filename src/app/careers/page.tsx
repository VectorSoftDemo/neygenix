import Curve from "@/components/decoractiveItems/Curve";
import Link from "next/link";
import Image from "next/image";


export default function CareersPage() {

    const careerValues = [
        {
            image: "/Career/c2.webp",
            title: "Culture of Innovation",
            description:
                "We encourage diverse perspectives to spark innovation and deliver pioneering healthcare solutions. Our culture empowers ideas that lead to better services, processes, and outcomes.",
        },
        {
            image: "/Career/c3.webp",
            title: "Mutual Respect",
            description:
                "We foster an environment of mutual trust and respect where every voice is heard and valued. Our clients and team members always come first.",
        },
        {
            image: "/Career/c4.webp",
            title: "Integrity",
            description:
                "We uphold the highest standards of honesty and transparency in all we do. Integrity is at the core of our commitment to patients, clients, and partners.",
        },
        {
            image: "/Career/c5.webp",
            title: "Career Growth",
            description:
                "We provide rewarding careers with continuous learning, mentorship, and advancement opportunities that help individuals grow professionally and personally.",
        },
    ];


    return (
        <main className="mt-16 lg:mt-20 xl:mt-25 min-h-screen">
            {/* Hero Image Section */}
            <section className="relative  bg-white w-full h-[60vh] md:h-[95vh]  ">
                <Image
                    src="/Career/careers.webp"
                    alt="Careers"
                    fill
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                />
                {/* Vignette effect for darkened corners */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    aria-hidden="true"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true"></div>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10 px-6">
                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold mb-4 drop-shadow-md">
                        Build a Career That Makes a Difference
                    </h1>
                    <p className="text-white text-lg md:text-xl lg:text-4xl text-left mb-6 drop-shadow-sm">
                        At Neugenix, we don’t just offer jobs - we offer purpose. Join a passionate team that’s redefining diagnostics and empowering healthier futures every day.
                    </p>
                  
                </div>
            </section>

            {/* Intro Text */}
            {/* <article className="flex flex-col justify-center items-center px-6 py-12 bg-[#46A941] text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
                    Discover a workplace rich in diversity, driven by purpose, and committed to excellence. At Neugenix, every role contributes to a greater impact — advancing healthcare and transforming lives.
                </p>
                <p className="text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                    Whether you're just starting out or looking to elevate your career, you'll find the mentorship, resources, and growth opportunities you need to thrive.
                </p>
                <p className="text-base md:text-lg max-w-2xl leading-relaxed">
                    Come be a part of a dynamic, innovative team where your passion meets purpose — and your work truly matters.
                </p>
            </article> */}



        
            {/* Our Culture Section */}
            <article className="flex flex-col items-center justify-center px-30 py-12 bg-[#F9FAFB] text-center">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#144afc] mb-6">
                    A Culture That Inspires
                </h2>
                <p className="text-left text-lg md:text-xl xl:text-4xl text-gray-700 leading-relaxed">
                    At Neugenix, we thrive in a culture built on collaboration, innovation, and purpose. We celebrate diversity of thought and empower every team member to bring their full potential to work. Our inclusive environment nurtures creativity and fuels our shared mission to transform lives through healthcare excellence.
                </p>
            </article>

            {/* Career Opportunities Card */}
            <article className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-8 md:px-12 py-8 md:py-16 text-left rounded-xl  mx-20 max-w-full ">
                <div className="w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#144afc] drop-shadow-lg mb-2">
                        Career Opportunities
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl xl:text-4xl text-black/90 leading-relaxed">
                        Our enterprise encompasses varied operational sectors. You may explore possibilities within laboratory functions and supervision, investigative projects, technological systems, financial and administrative services, sales and client relations, promotional and brand oversight, personnel management, and countless additional divisions.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="mt-2 px-6 py-2 text-base sm:text-lg font-semibold bg-[#144afc] text-white border-2 border-[#46A941] rounded-3xl shadow hover:bg-[#46A941]  transition-colors duration-200">
                            View Opportunities
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <Image
                        src="/Career/c1.webp"
                        alt="Career"
                        width={320}
                        height={320}
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 xl:w-80 xl:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white"
                        unoptimized
                    />
                </div>
            </article>

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 py-10 md:px-10 bg-[#F9FAFB]">
                {careerValues.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="w-full h-auto object-cover"
                            unoptimized
                        />
                        <div className="p-5 flex flex-col gap-3 flex-1">
                            <h2 className="text-xl xl:text-4xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 text-sm xl:text-2xl">{item.description}</p>
                        </div>
                    </div>
                ))}
            </section>



            {/* Apply Now Section */}
            <article className="flex flex-col justify-center items-center w-full bg-[#]">
                <div className="flex flex-col gap-8 justify-center items-center p-8 pb-10 text-black max-w-full text-center">
                    <h1 className="text-4xl xl:text-6xl font-semibold text-[#144afc]">Apply Now</h1>
                    <p className="text-xl  xl:text-4xl text-left ">
                        To apply for a position or internship at Neugenix, please send your curriculum vitae and a cover letter explaining how you meet the specific role requirements to{" "}
                        <a href="mailto:hr@Neugenix.com" className="underline">hr@Neugenix.com</a>. We appreciate all applications, but only shortlisted candidates will be contacted.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-4 px-8 py-3 bg-[#1578fa] text-white rounded-2xl font-semibold text-lg xl:text-2xl hover:bg-[#125fc1] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </article>


        </main>
    );
}
