import React from "react";

const AboutHeroSection = () => (
    <section
        className="relative bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
            backgroundImage: "url('/flower_image.jpg')",
            minHeight: "60vh"
        }}
    >
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative  flex flex-col h-full text-white w-full max-w-7xl gap-8">
                <h1 className="text-4xl font-semibold  text-left drop-shadow-lg ">
                    About Us
                </h1>
                <p className="text-xl md:text-2xl  text-left drop-shadow-lg max-w-md">
                    We run our business in the right way – for the benefit of the people we serve, including patients, shareholders, employees and our communities.
                </p>
            </div>
        </div>
    </section>
);

export default AboutHeroSection; 