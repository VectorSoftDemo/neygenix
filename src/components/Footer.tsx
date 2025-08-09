import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white pt-10">
      <div className="w-full px-6 lg:px-20 max-w-full mx-10">
        <div className="flex flex-col lg:flex-row gap-10 pb-10">
          {/* Left: Company Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center space-x-4">
              {/* <img src="/globe.svg" alt="Logo" className="h-14" /> */}
              <div>
                <p className="text-2xl font-bold text-[#65bc7b] leading-tight">
                  Neugenix<br />GLOBAL HEALTH
                </p>
                <p className="text-sm text-gray-300 font-light">
                  Understand more. Experience wellness.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-200">
              At Neugenix, we are dedicated to supporting individuals in achieving enhanced wellness and better quality of life. We create solutions to deliver insights that empower you to take control of your health journey.
            </p>

            <div>
              <p className="text-base font-semibold text-gray-200">2225 Centennial Drive Gainesville, GA 30504</p>
              <p className="text-base text-gray-200">Phone: <span className="text-[#65bc7b]">678-276-8412</span></p>
              <p className="text-base text-gray-200">Email: <span className="text-[#65bc7b]">clientservices@Neugenix.com</span></p>
            </div>

    

          </div>

          {/* Right: News Section */}
          <div className="flex-1 flex flex-col gap-6">
            <NewsItem
              img="https://aeonglobalhealth.com/wp-content/uploads/2020/10/gravity-diagnostics-featured-image-2-177x142.jpg"
              title="Neugenix Global Health Acknowledged as Pioneers in Cancer Genomics and Receives GHP Award"
              summary="GHP Reveals the 2019 Biotechnology Awards Recipients. Neugenix Global Health Corp. was acknowledged as 'Pioneers in Cancer Genomics Diagnostics 2019'."
            />
            <NewsItem
              img="https://aeonglobalhealth.com/wp-content/uploads/2020/10/ahs10887-1024x576-1-177x142.jpg"
              title="Authentidate Declares Corporate Rebranding To Neugenix Global Health Corp"
              summary="Authentidate Holding Corp. finalized its rebranding to Neugenix Global Health Corp. New trading symbol AGHC is now active."
            />
            <div className="flex flex-wrap items-center justify-center gap-2 bg-white bg-opacity-10 rounded p-4">
              <span className="text-xl text-gray-300 text-center">
                For all of your medical and diagnostic testing requirements, trust
              </span>
              <span className="text-3xl font-bold text-[#2d2e83]">NuegenixSure</span>
              <span className="text-xl text-gray-300">™</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3a3a3a] text-white text-center py-4 text-sm border-t border-gray-400">
        © 2025 Neugenix Global. All Rights Reserved.
      </div>
    </footer>
  );
}

// Reusable Social Icon Component
// function SocialIcon({ href, bg, label }: { href: string; bg: string; label: string }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className={`rounded p-2 transition-colors text-white`}
//       style={{ backgroundColor: bg }}
//     >
//       {/* Placeholder icon (replace with Lucide or SVGs as needed) */}
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <circle cx="12" cy="12" r="10" />
//       </svg>
//     </a>
//   );
// }

// Reusable News Item Component
function NewsItem({ img, title, summary }: { img: string; title: string; summary: string }) {
  return (
    <div className="flex items-start gap-4 bg-gray-200 bg-opacity-10 p-4 rounded">
      <img src={img} alt={title} className="w-36 h-24 object-cover rounded" />
      <div className="flex-1">
        <p className="text-base font-semibold text-gray-800 mb-2">{title}</p>
        <p className="text-xs text-gray-700 mb-2">{summary}</p>
        <button className="bg-[#2d2e83] hover:bg-[#1a1b5a] text-white text-xs px-3 py-1 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}
