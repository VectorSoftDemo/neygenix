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
        <main className="p-4 md:p-8 max-w-full lg:mx-30 space-y-12 mt-16 lg:mt-20 xl:mt-25">
            {/* Page Heading */}
            <article className="text-center">
                <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-[#144afc] mb-4">
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


                <h3 className="text-[#144afc] font-bold text-2xl lg:text-4xl xl:text-6xl mb-3">
                    Client Support is our dedication
                </h3>
                <p className="text-gray-900 text-sm lg:text-2xl xl:text-3xl  text-md my-2 p-2">
                    At Neugenix, our central emphasis is client assistance and distinction in patient wellness.
                    Through our tailored customer collaborations to professional guidance readily available,
                    we endeavor to create a beneficial impact in the lives of our medical practitioner clients and patients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
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
                            <MessageCircleMore className="text-[#144afc] w-7 h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-lg xl:text-2xl hover:underline text-center">
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
                            <Mail color="#144afc" size={28} />
                        </div>
                        <span className="text-gray-900 font-semibold text-lg xl:text-2xl hover:underline text-center break-all">
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
                            <Phone className="text-[#144afc] w-7 h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-lg xl:text-2xl hover:underline text-center">
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
                            <MapPin className="text-[#144afc] w-7 h-7" />
                        </div>
                        <span className="text-gray-900 font-semibold text-lg xl:text-2xl text-center">
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
