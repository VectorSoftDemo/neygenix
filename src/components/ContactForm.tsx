'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactDetails() {
    const [formData, setFormData] = useState({
        name: '',
        Date_Of_Birth: '',
        gender: '',
        phone: '',
        email: '',
        message: '',
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setSubmitting(true);

    //     try {
    //         const res = await fetch('/api/sendemail', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(formData),
    //         });

    //         const data = await res.json();
    //         if (res.ok) {
    //             toast.success('Message sent successfully to Neugenix. Thank you!',{icon : "✅"});
    //             setFormData({
    //                 name: '',
    //                 Date_Of_Birth: '',
    //                 gender: '',
    //                 phone: '',
    //                 email: '',
    //                 message: '',
    //             });
    //         } else {
    //             toast.error(data.error || 'Failed to send message, try again later');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         toast.error('Something went wrong, try again later');
    //     } finally {
    //         setSubmitting(false);
    //     }
    // };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const payload = {
                access_key: "274f46ab-fb85-467e-9749-d4a20be47d59", // Your actual Web3Forms access key (current raghu@vectorsoft.com)
                name: formData.name,
                Date_Of_Birth: formData.Date_Of_Birth || "",
                gender: formData.gender || "",
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
                subject: "New message from Neugenix website",
            };

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Message sent successfully to Neugenix. Thank you!", { icon: "✅" });
                setFormData({
                    name: "",
                    Date_Of_Birth: "",
                    gender: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            } else {
                toast.error(data.message || "Failed to send message, try again later");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong, try again later");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="w-full max-w-4xl mx-auto rounded-xl p-3 sm:p-5 mt-8 bg-[#f9f9f9] shadow-md">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-center text-[#144afc]">
                Contact Us
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block font-semibold mb-1 text-sm sm:text-base md:text-lg lg:text-xl">
                        Name * :
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base md:text-lg"
                        disabled={submitting}
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label htmlFor="Date_Of_Birth" className="block font-semibold mb-1 text-sm sm:text-base md:text-lg lg:text-xl">
                        Date of Birth :
                    </label>
                    <input
                        id="Date_Of_Birth"
                        type="date"
                        name="Date_Of_Birth"
                        value={formData.Date_Of_Birth}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300 text-sm sm:text-base md:text-lg"
                        disabled={submitting}
                    />
                </div>

                {/* Gender */}
                <div>
                    <label htmlFor="gender" className="block font-semibold mb-1 text-sm sm:text-base md:text-lg lg:text-xl">
                        Gender :
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300 text-sm sm:text-base md:text-lg"
                        disabled={submitting}
                    >
                        <option value="" disabled>
                            Select A Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phone" className="block font-semibold mb-1 text-sm sm:text-base md:text-lg lg:text-xl">
                        Phone Number* :
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300 text-sm sm:text-base md:text-lg"
                        disabled={submitting}
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block font-semibold mb-1 text-sm sm:text-base md:text-lg lg:text-xl">
                        Email Address * :
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg text-black border border-gray-300 text-sm sm:text-base md:text-lg"
                        disabled={submitting}
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block font-semibold mb-1 text-sm sm:text-base md:text-lg lg:text-xl">
                        Message / Reason For Contact * :
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white rounded-lg min-h-[80px] text-black border border-gray-300 text-sm sm:text-base md:text-lg"
                        disabled={submitting}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#2F7E2A] hover:bg-[#276B24] text-white font-semibold px-6 py-2 rounded transition-all duration-200 flex items-center justify-center min-w-[120px] text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                        disabled={submitting}
                    >
                        {submitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>

            </form>
        </section>

    );
}
