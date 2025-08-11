'use client';

import ContactDetails from "@/components/ContactForm";
import {
    Mail,
    MapPin,
    Phone,
    MessageCircleMore,
} from "lucide-react";

const ContactPage = () => {
    return (
        <main className="p-1 md:p-8 max-w-full lg:mx-30  mt-10 lg:mt-18">
            
            {/* Page Heading */}
            <article className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl font-bold text-[#144afc] mb-4">
                    Get in Touch with Us
                </h1>
                <p className="text-base sm:text-lg md:text-lg text-[#333333] max-w-3xl mx-auto ">
                    We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback – our team is ready to help.
                </p>
            </article>



            {/* Contact Form / Details */}
            <ContactDetails />

            {/* Contact Info / Social Links */}
            <section className="space-y-8 mt-3 md:mt-5">

                <h3 className="text-[#144afc] font-bold text-xl md:text-3xl lg:text-4xl  mb-3">
                    Client Support is our dedication
                </h3>
                <p className="text-gray-900 text-sm md:text-base lg:text-xl xl:text-2xl my-2 p-2">
                    At Neugenix, our central emphasis is client assistance and distinction in patient wellness.
                    Through our tailored customer collaborations to professional guidance readily available,
                    we endeavor to create a beneficial impact in the lives of our medical practitioner clients and patients.
                </p>

                <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-2">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/6782768412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-[#f1fdf1] p-3 sm:p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none w-full"
                        tabIndex={0}
                        aria-label="Chat on WhatsApp"
                    >
                        <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#e0f7e0] mb-1.5 sm:mb-3">
                            <MessageCircleMore className="text-[#144afc] w-5 h-5 sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-xs sm:text-lg md:text-xl xl:text-2xl hover:underline text-center">
                            Chat on WhatsApp
                        </span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:clientservices@Neugenix.com"
                        className="flex flex-col items-center bg-[#f1fdf1] p-3 sm:p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none w-full"
                        tabIndex={0}
                        aria-label="Send Email"
                    >
                        <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#e0f7e0] mb-1.5 sm:mb-3">
                            <Mail color="#144afc" size={20} className="sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-xs sm:text-sm md:text-xl xl:text-2xl hover:underline text-center break-all">
                            clientservices@Neugenix.com
                        </span>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:6782768412"
                        className="flex flex-col items-center bg-[#f1fdf1] p-3 sm:p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none w-full"
                        tabIndex={0}
                        aria-label="Call Phone"
                    >
                        <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#e0f7e0] mb-1.5 sm:mb-3">
                            <Phone className="text-[#144afc] w-5 h-5 sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-xs sm:text-lg md:text-xl xl:text-2xl hover:underline text-center">
                            (678) 276-8412
                        </span>
                    </a>

                    {/* Address */}
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=2225+Centennial+Drive+Gainesville+GA+30504"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-[#f1fdf1] p-3 sm:p-6 rounded-xl shadow transition hover:shadow-lg hover:bg-[#e6fbe6] cursor-pointer focus:outline-none w-full"
                        tabIndex={0}
                        aria-label="Get Directions"
                    >
                        <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#e0f7e0] mb-1.5 sm:mb-3">
                            <MapPin className="text-[#144afc] w-5 h-5 sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-xs sm:text-lg md:text-xl xl:text-2xl text-center">
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
