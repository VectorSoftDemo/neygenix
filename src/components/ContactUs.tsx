import ContactDetails from "./ContactDetails";

export default function ContactUs() {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col p-8 bg-[#424492] text-white">
                <h1 className="text-4xl font-semibold 2xl:pl-20">Contact Neugenix Global Health</h1>
            </div>
            <div className="flex sm:flex-col 2xl:flex-row justify-center  p-8 bg-[#46A941] text-white gap-10">
                <div>
                    <ContactDetails className="text-white" />
                </div>
                <div className="flex flex-col gap-4 text-white mt-17">
                    <h1 className="text-2xl font-semibold">CLIENT SUPPORT IS OUR DEDICATION</h1>
                    <p className="text-lg max-w-[500px]">
                    At Neugenix, our central emphasis is client assistance and distinction in patient wellness. Through our tailored customer collaborations to professional guidance readily available, we endeavor to create a beneficial impact in the lives of our medical practitioner clients and patients.
                    </p>
                    <p className="text-lg font-bold">678-276-8412</p>
                    <p className="text-lg font-bold max-w-[500px]">clientservices@Neugenix.com</p>
                    <p className="text-lg font-bold max-w-[500px]">2225 Centennial Drive Gainesville, GA 30504</p>
                    <p className="text-lg font-bold max-w-[500px]">*** get directions ***</p>
                </div>
            </div>
        </div>
    );
}