import ReCAPTCHA from 'react-google-recaptcha';

export default function OrderSupplies() {
    return (
        <div className="bg-green-600 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6">
                <form>
                    <h1 className="text-white font-bold text-3xl mb-6 font-sans">Account Information</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        <input type="text" placeholder="Account Name" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="text" placeholder="Phone Number" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="email" placeholder="Confirm Email" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="text" placeholder="Address" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="text" placeholder="City" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="text" placeholder="State" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                        <input type="text" placeholder="Zip Code" className="w-full px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                    </div>

                    {/* Supplies Section */}
                    <div className="mt-12">
                        <h2 className="text-white font-bold text-3xl mb-6 font-sans">Supplies</h2>
                        <div className="space-y-8">
                            {/* Specimen / Absorbent Bags */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Specimen / Absorbent Bags</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C (1 per sample)</span>
                                </div>
                            </div>
                            {/* Lab Shipping Bags */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Lab Shipping Bags</span>
                                <div className="flex items-center gap-4">
                                    <input type="number" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C (1 per 10 samples)</span>
                                </div>
                            </div>
                            {/* Return Shipping Labels */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Return Shipping Labels</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C (1 per 10 samples)</span>
                                </div>
                            </div>
                            {/* Clear Liner Bags */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Clear Liner Bags</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C (1 per 10 samples)</span>
                                </div>
                            </div>
                            {/* Shipping Boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Shipping Boxes</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C (Packaged in quantity of 20)</span>
                                </div>
                            </div>
                            {/* Toxicology Lab Requisition Forms */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Toxicology Lab Requisition Forms</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Drug Test Cups Section */}
                    <div className="mt-12">
                        <h2 className="text-white font-bold text-3xl mb-6 font-sans">Drug Test Cups</h2>
                        <div className="space-y-8">
                            {/* 7-Panel Discover */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <div>
                                    <span className="text-white text-lg font-semibold font-sans">7-Panel Discover</span>
                                    <div className="text-white text-sm font-sans font-semibold mt-1">(BZO/BAR/COC/THC/MET/MOP/MTD/OXY/MDMA/AMP/PPX/BUP)</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">$75.00/25 ($3.00 each)</span>
                                </div>
                            </div>
                            {/* 12-Panel Discover */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <div>
                                    <span className="text-white text-lg font-semibold font-sans">12-Panel Discover</span>
                                    <div className="text-white text-sm font-sans font-semibold mt-1">(BZO/BAR/COC/THC/MET/MOP/MTD/OXY/MDMA/PCP/AMP/BUP)</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">$74.25/25 ($2.97 each)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Drug Test Dip Cards Section */}
                    <div className="mt-12">
                        <h2 className="text-white font-bold text-3xl mb-6 font-sans">Drug Test Dip Cards</h2>
                        <div className="space-y-8">
                            {/* 4-Panel Discover */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <div>
                                    <span className="text-white text-lg font-semibold font-sans">4-Panel Discover</span>
                                    <div className="text-white text-sm font-sans font-semibold mt-1">(COC/THC/MET/OPI)</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">$24.75/25 ($.99 each)</span>
                                </div>
                            </div>
                            {/* 5-Panel Discover */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <div>
                                    <span className="text-white text-lg font-semibold font-sans">5-Panel Discover</span>
                                    <div className="text-white text-sm font-sans font-semibold mt-1">(BZO/THC/OPI/AMP/BUP)</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">$30.25/25 ($1.25 each)</span>
                                </div>
                            </div>
                            {/* 6-Panel Discover */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <div>
                                    <span className="text-white text-lg font-semibold font-sans">6-Panel Discover</span>
                                    <div className="text-white text-sm font-sans font-semibold mt-1">(BZO/COC/THC/MET/OPI/OXY)</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">$39.25/25 ($1.60 each)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Section */}
                    <div className="mt-12">
                        <h2 className="text-white font-bold text-3xl mb-6 font-sans">Other</h2>
                        <div className="space-y-8">
                            {/* Clear Urine Specimen Cups */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Clear Urine Specimen Cups</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C</span>
                                </div>
                            </div>
                            {/* Oral Fluid Collection Devices (for toxicology only) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Oral Fluid Collection Devices (for toxicology only)</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C</span>
                                </div>
                            </div>
                            {/* Pharmacogenomics Lab Requisition Forms */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Pharmacogenomics Lab Requisition Forms</span>
                                <div className="flex items-center gap-4">
                                    <input type="number" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C</span>
                                </div>
                            </div>
                            {/* Buccal Swabs (2 per patient) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Buccal Swabs (2 per patient)</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C</span>
                                </div>
                            </div>
                            {/* Hereditary Cancer Genomics Lab Requisition Forms */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-8">
                                <span className="text-white text-lg font-semibold font-sans mb-2 md:mb-0">Hereditary Cancer Genomics Lab Requisition Forms</span>
                                <div className="flex items-center gap-4">
                                    <input type="text" className="w-56 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none" />
                                    <span className="text-white text-lg font-sans">N/C</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Section */}
                    <div className="mt-12">
                        <h2 className="text-white font-bold text-3xl mb-4 font-sans">Delivery</h2>
                        <div>
                            <select className="w-full md:w-1/2 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none appearance-none">
                                <option>Shipping Method:</option>
                                <option>Standard</option>
                                <option>Express</option>
                                <option>Overnight</option>
                            </select>
                        </div>
                    </div>

                    {/* Miscellaneous Section */}
                    <div className="mt-12">
                        <h2 className="text-white font-bold text-3xl mb-4 font-sans">Miscellaneous</h2>
                        <textarea className="w-full md:w-1/2 h-32 md:h-40 px-4 py-4 rounded-2xl bg-gray-100 text-lg font-sans text-gray-700 focus:outline-none resize-none" placeholder="Message"></textarea>
                    </div>

                    {/* Are You A Robot Section */}
                    <div className="mt-12 flex flex-col ">
                        <h2 className="text-white font-bold text-2xl mb-4 font-sans">Are You A Robot?</h2>
                        <div className="w-full md:w-[400px] mb-8">
                            {/* Replace 'YOUR_SITE_KEY' with your actual reCAPTCHA site key */}
                            <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
                        </div>
                        <button type="submit" className="w-fit px-12 py-4 rounded-2xl bg-blue-800 text-white font-bold text-xl uppercase tracking-wide">Submit Order Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
}