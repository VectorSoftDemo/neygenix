import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white pt-10">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 pb-8 md:pb-10">
          {/* Left: Company Info */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
            <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-2 xs:space-y-0 xs:space-x-3 sm:space-x-4">
              {/* <img src="/globe.svg" alt="Logo" className="h-14" /> */}
              <div>
                <p className="text-lg sm:text-2xl xl:text-2xl font-bold text-[#65bc7b] leading-tight">
                  Neugenix 
                </p>
                <p className="text-xs sm:text-sm xl:text-lg text-gray-300 font-light">
                  Understand more. Experience wellness.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-base md:text-lg xl:text-xl text-gray-200">
              At Neugenix, we are dedicated to supporting individuals in achieving enhanced wellness and better quality of life. We create solutions to deliver insights that empower you to take control of your health journey.
            </p>

            <div className="space-y-1">
              {/* <p className="text-xs sm:text-base xl:text-2xl font-semibold text-gray-200">2225 Centennial Drive Gainesville, GA 30504</p> */}
              <p className="text-xs sm:text-base xl:text-xl text-gray-200">
                Phone:{" "}
                <a
                  href="tel:+12147664371"
                  className="text-[#65bc7b] underline hover:text-[#4a9e5e] transition-colors"
                >
                  +1 (214) 766-4371 
                </a>
              </p>
              <p className="text-xs sm:text-base xl:text-xl text-gray-200">
                Email:{" "}
                <a
                  href="mailto:clientservices@Neugenix.com"
                  className="text-[#65bc7b] underline hover:text-[#4a9e5e] transition-colors"
                >
                  keenan@neugenix.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: News Section */}
          {/* <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6">
            <NewsItem
              img="Footer/f1.webp"
              title="Neugenix  Acknowledged as Pioneers in Cancer Genomics and Receives GHP Award"
              summary="GHP Reveals the 2019 Biotechnology Awards Recipients. Neugenix  Corp. was acknowledged as 'Pioneers in Cancer Genomics Diagnostics 2019'."
            />
            <NewsItem
              img="Footer/f2.webp"
              title="Authentidate Declares Corporate Rebranding To Neugenix  Corp"
              summary="Authentidate Holding Corp. finalized its rebranding to Neugenix  Corp. New trading symbol AGHC is now active."
            /> */}
            {/* <div className="flex flex-wrap items-center justify-center gap-2 bg-white bg-opacity-10 rounded p-4">
              <span className="text-xl text-gray-300 text-center">
                For all of your medical and diagnostic testing requirements, trust
              </span>
              <span className="text-3xl font-bold text-[#2d2e83]">NuegenixSure</span>
              <span className="text-xl text-gray-300">™</span>
            </div> 
            </div> */}

        </div>
      </div>

      <div className="bg-[#3a3a3a] text-white text-center py-3 sm:py-4 text-xs sm:text-sm xl:text-xl border-t border-gray-400">
        © 2025 Neugenix Global. All Rights Reserved.
      </div>
    </footer>
  );
}

// Reusable News Item Component
function NewsItem({ img, title, summary }: { img: string; title: string; summary: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-gray-200 bg-opacity-10 p-3 sm:p-4 rounded w-full">
      <div className="w-full sm:w-36 flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-24 object-cover rounded mb-2 sm:mb-0"
          style={{ minWidth: 0 }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm xl:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{title}</p>
        <p className="text-[0.65rem] sm:text-xs xl:text-base text-gray-700 mb-1 sm:mb-2">{summary}</p>
        <Link
          href="/services"
          className="bg-[#2d2e83] hover:bg-[#1a1b5a] text-white text-[0.65rem] sm:text-xs xl:text-base px-3 py-1 rounded-2xl transition-colors duration-200 inline-block"
        >
          Learn More about our services
        </Link>
      </div>
    </div>
  );
}
