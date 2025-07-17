
export default function Blogs() {
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
        <div className="flex flex-col items-center py-8 bg-[#EFEFEF]  min-h-screen">
            <div>
                <h1 className="text-5xl font-semibold text-[#23272b] mb-8 w-full">CURRENT NEWS</h1>
                <div className="relative w-[1300px] h-[800px] rounded overflow-hidden shadow-lg">
                    <img src="https://aeonglobalhealth.com/wp-content/uploads/2025/03/7-Warning-Signs-You-May-Need-Toxicology-Testing-Immediately-Blog-1200x675.jpg" alt="Current News" className="w-full h-full object-cover" />
                    {/* Headline overlay */}
                    <div className="absolute bottom-20 left-0 w-[95%] bg-black opacity-80 py-6 px-4">
                        <span className="text-white text-3xl font-semibold">7 Warning Signs You May Need Toxicology Testing Immediately</span>
                    </div>
                </div>
            </div>
            {/* Blog/news cards */}
            <div className="w-[1300px] grid grid-cols-2 gap-x-12 gap-y-8 mt-12">
                {blogPosts.map((post, idx) => (
                    <div key={idx} className="flex mb-4">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-[120px] h-[70px] object-cover rounded mr-6 mt-2"
                        />
                        <div className="flex flex-col flex-1">
                            <h2 className="text-2xl font-semibold text-[#23272b] mb-1 leading-snug">{post.title}</h2>
                            <p className="text-lg text-[#23272b] mb-2 font-normal">{post.desc}</p>
                            {idx === 4 || idx === 5 ? (
                                <button className="mt-2 w-[120px] bg-[#2d2e83] hover:bg-[#232772] text-white py-2 rounded font-medium text-base">Read More</button>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
            {/* Extra blog/news cards (vertical, full width) */}
            <div className="w-[1300px] flex flex-col gap-8 mt-16 py-4 max-w-150px">
                {extraPosts.map((post, idx) => (
                    <div key={idx} className="flex overflow-hidden items-center">
                        {/* Date badge + icon */}
                        <div className="flex flex-col items-center   text-white min-w-[100px] h-[150px]">
                            <div className="flex flex-col items-center justify-center flex-1 w-full gap-1 max-h-[100px] bg-[#46A941]">
                                <div className="text-3xl font-extrabold leading-none">{post.date.day}</div>
                                <div className="flex gap-2 items-center justify-center">
                                    <div className="text-base font-bold leading-none">{post.date.month},</div>
                                    <div className="text-base font-bold leading-none">{post.date.year}</div>
                                </div>
                            </div>
                            <div className="bg-[#EFEFEF] w-full flex justify-center items-center h-10 ">
                                {/* Pencil icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#46A941]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4.243 1.414 1.414-4.243a4 4 0 01.828-1.414z" /></svg>
                            </div>
                        </div>
                        {/* Image and content */}
                        <img src={post.image} alt={post.title} className="w-[220px] h-[130px] object-cover mr-4 mb-4 ml-6 rounded self-center" />
                        <div className="flex flex-col justify-center flex-1 px-4 py-2">
                            <h2 className="text-2xl font-semibold text-[#23272b] mb-1 leading-snug">{post.title}</h2>
                            <div className="text-sm text-gray-500 mb-1">{post.published}</div>
                            <p className="text-base text-[#23272b] mb-2 font-normal">{post.desc}</p>
                            <button className="w-[120px] bg-[#2d2e83] hover:bg-[#232772] text-white py-2 rounded font-medium text-base mt-2">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}