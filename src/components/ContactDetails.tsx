interface ContactDetailsProps {
    className?: string;
}

export default function ContactDetails( { className }: ContactDetailsProps ) {
    return (
        <div className={`w-[400px] mx-auto rounded-lg p-8 mt-8 ${className}`}>
            <h2 className="text-3xl font-bold  mb-6">Contact us</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block  font-semibold mb-1">Name (first last) <span className="text-white">*</span></label>
                    <input type="text" required className="w-full px-4 py-2 bg-white rounded-lg text-black" />
                </div>
                <div>
                    <label className="block  font-semibold mb-1">Birth Date</label>
                    <input type="date" className="w-full px-4 py-2 bg-white rounded-lg text-black" placeholder="dd-mm-yyyy" />
                </div>
                <div>
                    <label className="block  font-semibold mb-1">Gender</label>
                    <select className="w-full px-2 py-2 bg-white rounded-lg text-black">
                        <option value="">Select A Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block  font-semibold mb-1">Phone Number <span className="text-white">*</span></label>
                    <input type="tel" required className="w-full px-4 py-2 bg-white rounded-lg text-black" />
                </div>
                <div>
                    <label className="block  font-semibold mb-1">Email Address <span className="text-white">*</span></label>
                    <input type="email" required className="w-full px-4 py-2 bg-white rounded-lg text-black" />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Message/Reason For Contact <span className="text-white">*</span></label>
                    <textarea required className="w-full px-4 py-2 bg-white rounded-lg min-h-[80px] text-black" />
                </div>
                <button type="submit" className="bg-white text-[#46A941] font-semibold px-6 py-2 rounded w-fit">Submit</button>
            </form>
        </div>
    );
}