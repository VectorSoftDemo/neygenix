'use client';

import ContactDetails from "@/components/ContactDetails";
import {
    Mail,
    MapPin,
    Phone,
    MessageCircleMore,
} from "lucide-react";

const ContactPage = () => {
    return (
        <main className="p-4 md:p-8 max-w-full mx-30 space-y-12">
            {/* Page Heading */}
            <article className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#22641e] mb-4">
                    Get in Touch with Us
                </h1>
                <p className="text-lg md:text-xl text-[#333333] max-w-3xl mx-auto">
                    We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback – our team is ready to help.
                </p>
            </article>

          

            {/* Contact Form / Details */}
            <ContactDetails />

            {/* Contact Info / Social Links */}
            <section className="space-y-8">
               

                <h3 className="text-gray-900 font-bold text-2xl mb-3">
                    CLIENT SUPPORT IS OUR DEDICATION
                </h3>
                <p className="text-gray-900 text-sm lg:text-xl text-md mb-2">
                    At Neugenix, our central emphasis is client assistance and distinction in patient wellness.
                    Through our tailored customer collaborations to professional guidance readily available,
                    we endeavor to create a beneficial impact in the lives of our medical practitioner clients and patients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/6782768412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-[#f1fdf1] p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none"
                        tabIndex={0}
                        aria-label="Chat on WhatsApp"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e0f7e0] mb-3">
                            <MessageCircleMore className="text-gray-900 w-7 h-7" />
                        </div>
                        <span className="text-[#22641e] font-semibold text-lg hover:underline text-center">
                            Chat on WhatsApp
                        </span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:clientservices@Neugenix.com"
                        className="flex flex-col items-center bg-[#f1fdf1] p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none"
                        tabIndex={0}
                        aria-label="Send Email"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e0f7e0] mb-3">
                            <Mail color="#22641e" size={28} />
                        </div>
                        <span className="text-[#22641e] font-semibold text-lg hover:underline text-center break-all">
                            clientservices@Neugenix.com
                        </span>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:6782768412"
                        className="flex flex-col items-center bg-[#f1fdf1] p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none"
                        tabIndex={0}
                        aria-label="Call Phone"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e0f7e0] mb-3">
                            <Phone className="text-[#22641e] w-7 h-7" />
                        </div>
                        <span className="text-[#22641e] font-semibold text-lg hover:underline text-center">
                            (678) 276-8412
                        </span>
                    </a>

                    {/* Address */}
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=2225+Centennial+Drive+Gainesville+GA+30504"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-[#f1fdf1] p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none"
                        tabIndex={0}
                        aria-label="Get Directions"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e0f7e0] mb-3">
                            <MapPin className="text-[#22641e] w-7 h-7" />
                        </div>
                        <span className="text-[#22641e] font-semibold text-lg text-center">
                            2225 Centennial Drive<br />
                            Gainesville, GA 30504
                        </span>
                    </a>
                </div>
            </section>

        </main>
    );
};

export default ContactPage;
