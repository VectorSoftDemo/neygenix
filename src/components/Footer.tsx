import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white pt-10">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 pb-8">
          {/* Logo and Mission */}
          <div className="flex-1 w-1/2">
            <div className="flex items-center mb-4 ">
              {/* <img src="/globe.svg" alt="Neugenix Global Health Logo" className="h-14  mr-4" /> */}
              <div>
                <span className="block text-2xl font-bold text-[#65bc7b] leading-tight">Neugenix<br />GLOBAL HEALTH</span>
                <span className="block text-sm text-gray-300 font-light">Understand more. Experience wellness.</span>
              </div>
            </div>
            <p className="text-lg text-gray-200 mb-6">
              At Neugenix, we are dedicated to supporting individuals in achieving enhanced wellness and better quality of life. We create solutions to deliver insights that empower you to take control of your health journey.
            </p>
            <div className="mb-6">
              <span className="block text-base text-gray-200 font-semibold mb-1">2225 Centennial Drive Gainesville, GA 30504</span>
              <span className="block text-base text-gray-200">Phone: <span className="text-[#65bc7b]">678-276-8412</span></span>
              <span className="block text-base text-gray-200">Email: <span className="text-[#65bc7b]">clientservices@Neugenix.com</span></span>
            </div>
            <div className="mb-6">
              <span className="block text-sm font-semibold mb-2">CONNECT WITH Neugenix</span>
              <div className="flex space-x-3">
                <a href="#" className="bg-[#4267B2] hover:bg-[#365899] text-white rounded p-2 transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="#" className="bg-black hover:bg-gray-800 text-white rounded p-2 transition-colors" aria-label="X">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06l-4.72 4.72 4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72-4.72-4.72A.75.75 0 1 1 8.09 6.47l4.72 4.72 4.72-4.72z"/></svg>
                </a>
                <a href="#" className="bg-[#E1306C] hover:bg-[#C13584] text-white rounded p-2 transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78 2.285 6.06 2.272 6.469 2.272 12c0 5.531.013 5.94.072 7.22.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334 1.28.059 1.689.072 7.22.072s5.94-.013 7.22-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.22s-.013-5.94-.072-7.22c-.059-1.281-.353-2.393-1.334-3.374C21.393.425 20.281.131 19 .072 17.719.013 17.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
                <a href="#" className="bg-[#0077B5] hover:bg-[#005983] text-white rounded p-2 transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/></svg>
                </a>
              </div>
            </div>
            <div className="mb-2">
              <Link href="#" className="text-gray-200 hover:text-[#65bc7b] underline text-sm">Neugenix Notice of Privacy Practices</Link>
            </div>
          </div>

          {/* News Section (right) */}
          <div className="flex-1 w-1/2 flex flex-col gap-6">
            <div className='w-full'>
              <div className="flex items-start bg-opacity-10 rounded p-4 mb-4">
                <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/10/gravity-diagnostics-featured-image-2-177x142.jpg" alt="News" className="w-36 h-24 object-cover rounded mr-4" />
                <div className="flex-1">
                  <span className="block text-base font-semibold text-gray-100 mb-2">Neugenix Global Health Acknowledged as Pioneers in Cancer Genomics and Receives GHP Award for Outstanding Performance in Toxicology Diagnostics</span>
                  <span className="block text-xs text-gray-300 mb-2">GHP Reveals the 2019 Biotechnology Awards Recipients GAINESVILLE, GA – March 08, 2019 – Neugenix Global Health Corp. (OTC QB: AGHC), a premier healthcare organization was acknowledged as "Pioneers in Cancer Genomics Diagnostics 2019" and obtained the "GHP Award for Outstanding Performance in Toxicology Diagnostics".</span>
                  <button className="bg-[#2d2e83] hover:bg-[#1a1b5a] text-white text-xs px-3 py-1 rounded">Learn More</button>
                </div>
              </div>
              <div className="flex items-start  bg-opacity-10 rounded p-4">
                <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/10/ahs10887-1024x576-1-177x142.jpg" alt="News" className="w-36 h-24 object-cover rounded mr-4" />
                <div className="flex-1">
                  <span className="block text-base font-semibold text-gray-100 mb-2">Authentidate Declares Corporate Rebranding To Neugenix Global Health Corp</span>
                  <span className="block text-xs text-gray-300 mb-2">Updated Trading Symbol "AGHC" Active February 1, 2018 Gainesville, GA – January 31, 2018 Authentidate Holding Corp. (OTCQB: ADAT), disclosed today that it has finalized its previously announced corporate rebranding to Neugenix Global Health Corp. The rebranding</span>
                  <button className="bg-[#2d2e83] hover:bg-[#1a1b5a] text-white text-xs px-3 py-1 rounded">Learn More</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white bg-opacity-10 rounded p-4">
              <span className="text-xl text-gray-500 mr-2">For all of your medical and diagnostic testing requirements, trust</span>
              <span className="text-3xl font-bold text-[#2d2e83]">NuegenixSure</span>
              <span className="text-xl text-gray-500 ml-1">™</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-500 p-8 py-4 text-lg">
        Copyright ©2025 Neugenix Global, All Rights Reserved
      </div>
    </footer>
  );
}