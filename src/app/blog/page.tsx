import Image from "next/image";

const Blog = ()=>{
    const blogPosts = [
        {
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2025/02/How-Toxicology-Testing-Supports-Substance-Abuse-Recovery-Blog-200x113.jpg',
            title: 'How Toxicology Testing Supports Substance Abuse Recovery',
            desc: 'Substance dependency represents a critical health concern impacting millions globally. Conquering addiction proves challenging—it demands medical intervention...',
        },
        {
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/12/Laboratory-Risks-that-are-commonly-neglected-200x113.jpg',
            title: 'Laboratory Risks that are commonly neglected',
            desc: 'numerous laboratories present greater dangers and threats than standard work environments. Consequently, you and the complete team must recognize each laboratory peril,',
        },
        {
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2025/01/Toxicology-testing-how-it-works-and-what-it-detects.-_-Blog-Cover-200x113.jpg',
            title: 'Toxicology testing: how it works and what it detects.',
            desc: 'Toxicology examination involves the evaluation of biological specimens (such as urine, blood, or hair) to identify the existence of damaging compounds.',
        },
        {
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/10/How-Medical-Laboratories-can-benefit-from-Telehealth-200x113.jpg',
            title: 'How Medical Laboratories can benefit from Telehealth',
            desc: "medical laboratory supervisors endeavoring to identify creative methods of gathering samples for analysis that assist Telehealth practitioners. Consequently, conventional physicians might potentially be substituted by Telehealth.",
        },
        {
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/12/Laboratory-Risks-that-are-commonly-neglected-200x113.jpg',
            title: 'Top Emerging Lab Trends 2025',
            desc: "The patterns in laboratory settings evolve alongside scientific and technological advancement. We'll explore the leading laboratory movements",
        },
        {
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/10/Different-types-of-genetic-testing-AEON-GLOBAL-HEALTH-200x113.jpg',
            title: 'Different types of genetic testing',
            desc: "An individual's DNA, the molecular blueprint containing directives for bodily operations, undergoes examination during genetic",
        },
    ];
    const extraPosts = [
        {
            date: { day: '14', month: '09', year: '2022' },
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/09/The-Influence-of-Telehealth-in-the-Modern-Era-AEON-GLOBAL-HEALTH-320x202.jpg',
            title: 'The Influence of Telehealth in the Modern Era',
            published: 'September 14, 2022',
            desc: 'From the beginning of the 20th century, the concept of Telehealth has existed and been utilized across various medical specialties. Conversely, since the',
        },
        {
            date: { day: '16', month: '08', year: '2022' },
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/09/The-Influence-of-Telehealth-in-the-Modern-Era-AEON-GLOBAL-HEALTH-320x202.jpg',
            title: 'Ultimate Guide for Medical Laboratory Technician',
            published: 'August 16, 2022',
            desc: 'Laboratory technicians represent the professionals who execute daily functions within medical facilities. Through performing analyses on tissue specimens, blood samples, and additional',
        },
        {
            date: { day: '28', month: '07', year: '2022' },
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/09/The-Influence-of-Telehealth-in-the-Modern-Era-AEON-GLOBAL-HEALTH-320x202.jpg',
            title: 'Five Traits of a Great Medical Laboratory Scientist',
            published: 'July 28, 2022',
            desc: 'The field of laboratory science represents a crucial domain within healthcare that influences the wellness of each individual. As the demand for expansion in',
        },
        {
            date: { day: '20', month: '07', year: '2022' },
            image: 'https://aeonglobalhealth.com/wp-content/uploads/2022/09/The-Influence-of-Telehealth-in-the-Modern-Era-AEON-GLOBAL-HEALTH-320x202.jpg',
            title: 'Difference between medical and clinical laboratory scientists',
            published: 'July 20, 2022',
            desc: 'Highly educated and trained professionals operating in laboratory settings encompass medical technologists and clinical laboratory scientists. They remain responsible for executing comprehensive',
        },
    ];
    return (
        <main className="flex flex-col items-center  mt-10 lg:mt-18 min-h-screen">

            {/* hero section */}
            <section className="w-full flex justify-center m-1 md:m-4">
                {/* <h1 className="text-4xl sm:text-5xl font-semibold text-[#23272b] mb-8 w-full">CURRENT NEWS</h1> */}
                <div
                    className="
                        relative
                        w-full
                        max-w-[98vw]
                        md:max-w-3xl
                        lg:max-w-5xl
                        xl:max-w-[1300px]
                        min-h-[50vh]
                        md:min-h-[70vh]
                        rounded
                        overflow-hidden
                        shadow-lg
                    "
                >
                    <Image
                        src="/Blog/BlogImg.webp"
                        alt="Current News"
                        className="w-full h-full object-cover rounded-2xl"
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1300px"
                    />
                    {/* Headline overlay */}
                    <div
                        className="
                            absolute
                            bottom-6
                            sm:bottom-10
                            md:bottom-16
                            left-0
                            w-[95%]
                            bg-black
                            opacity-80
                            py-3
                            sm:py-6
                            px-2
                            sm:px-4
                            text-center
                            rounded-br-2xl
                            rounded-tr-2xl
                        "
                    >
                        <span
                            className="
                                text-white
                                text-lg
                                sm:text-2xl
                                md:text-3xl
                                font-semibold
                            "
                        >
                            7 Warning Signs You May Need Toxicology Testing Immediately
                        </span>
                    </div>
                </div>
            </section>

            {/* Blog/news cards */}
            <section
                className="
                    w-full max-w-full
                    grid grid-cols-1 lg:grid-cols-3
                    gap-x-6 sm:gap-x-7 md:gap-x-8
                    gap-y-4 md:gap-y-8
                    mt-2 md:mt-12
                    px-1 md:px-4 lg:px-6
                "
            >
                <h2 className="col-span-full text-2xl md:text-3xl xl:text-5xl font-bold text-[#144afc] mb-4 text-left">
                    Latest Blog Posts
                </h2>
                {blogPosts.map((post, idx) => (
                    <div
                        key={idx}
                        className={`
                            flex flex-col sm:flex-row
                            bg-white rounded-xl shadow
                            hover:shadow-lg transition-shadow
                            p-4 sm:p-5
                            mb-2 items-center
                            ${'md:flex-row md:items-stretch'}
                        `}
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            priority
                            width={120}
                            height={110}
                            className={`
                                w-full sm:w-[120px]
                                h-[180px] sm:h-[70px] md:h-[110px] xl:h-[110px]
                                object-cover rounded
                                mb-3 sm:mb-0
                                sm:mr-6
                                self-center sm:self-start
                                transition-transform duration-200 hover:scale-105 
                            `}
                        />
                        <div className="flex flex-col flex-1">
                            <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-[#23272b] mb-1 leading-snug">
                                {post.title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-[#23272b] mb-2 font-normal">
                                {post.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Extra blog/news cards (vertical, full width) */}
            <section
                className="
                    w-full max-w-full mx-auto
                    grid gap-2 md:gap-5
                    md:mt-12 sm:mt-16 py-4
                    px-2 sm:px-4 md:px-6
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2
                "
            >
                <h2 className="col-span-full text-xl sm:text-2xl md:text-2xl xl:text-5xl font-bold text-[#144afc] mb-4 text-left">
                    News & Updates
                </h2>
                {extraPosts.map((post, idx) => (
                    <div
                        key={idx}
                        className={`
                            flex bg-white rounded-xl shadow
                            hover:shadow-lg transition-shadow
                            overflow-hidden
                            p-3 sm:p-4 md:p-6
                            gap-2
                            items-center
                            ${'md:flex-col md:items-start lg:flex-row lg:items-center'}
                        `}
                    >
                        {/* Image and content */}
                        <div className={`
                            flex flex-1 flex-col sm:flex-row gap-4 items-center
                            ${'md:flex-row md:items-center'}
                        `}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={220}
                                height={130}
                                className={`
                                    w-full sm:w-[180px] md:w-[220px] lg:w-[220px]
                                    h-[110px] md:h-[130px] lg:h-[130px]
                                    object-cover rounded-md
                                    mb-2 sm:mb-0 md:mb-0
                                    self-center md:self-start lg:self-center
                                `}
                            />
                            <div className="flex flex-col justify-center px-0 sm:px-4 py-2 w-full">
                                <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-[#23272b] mb-1 leading-snug">
                                    {post.title}
                                </h2>
                                <div className="text-xs sm:text-sm xl:text-xl text-gray-500 mb-1">{post.published}</div>
                                <p className="text-sm sm:text-base md:text-base xl:text-xl text-[#23272b] mb-2 font-normal">
                                    {post.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Blog