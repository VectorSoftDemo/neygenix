'use client';

import { useState } from 'react';

export default function ContactDetails() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <section className="w-full max-w-3xl mx-auto rounded-xl p-3 sm:p-5 mt-8 bg-[#f9f9f9] shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-semibold mb-1">Name * :</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Date of Birth :</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Gender :</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300"
                    >
                        <option value="" disabled>Select A Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Phone Number* :</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Email Address * :</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Message / Reason For Contact * :</label>
                    <textarea
                        name="message"
                        required
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg min-h-[80px] text-black border border-gray-300"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#46A941] hover:bg-[#3e8d39] text-white font-semibold px-6 py-2 rounded transition-all duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
