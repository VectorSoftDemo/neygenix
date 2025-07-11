import React from "react";

const AboutHeroSection = () => (
    <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{
            backgroundImage: "url('/flower_image.jpg')",
            minHeight: "60vh"
        }}
    >
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="relative max-w-2xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-left drop-shadow-lg">
                About <br /> Us
            </h1>
            <p className="text-xl md:text-2xl max-w-md text-left drop-shadow-lg">
                We run our business in the right way – for the benefit of the people we serve, including patients, shareholders, employees and our communities.
            </p>
        </div>
    </section>
);

export default AboutHeroSection; 