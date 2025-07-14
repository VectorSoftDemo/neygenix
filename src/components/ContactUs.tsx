import ContactDetails from "./ContactDetails";

export default function ContactUs() {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col p-8 bg-[#424492] text-white">
                <h1 className="text-4xl font-semibold 2xl:pl-20">Contact AEON Global Health</h1>
            </div>
            <div className="flex sm:flex-col 2xl:flex-row justify-center  p-8 bg-[#46A941] text-white gap-10">
                <div>
                    <ContactDetails className="text-white" />
                </div>
                <div className="flex flex-col gap-4 text-white mt-17">
                    <h1 className="text-2xl font-semibold">CUSTOMER SERVICE IS OUR PASSION</h1>
                    <p className="text-lg max-w-[500px]">
                    At Aeon, our primary focus is customer service and excellence in patient care. From our customized client partnerships to expert advice at your fingertips, we strive to make a positive difference in the lives of our physician clients and patients.
                    </p>
                    <p className="text-lg font-bold">678-276-8412</p>
                    <p className="text-lg font-bold max-w-[500px]">clientservices@aeonglobalhealth.com</p>
                    <p className="text-lg font-bold max-w-[500px]">2225 Centennial Drive Gainesville, GA 30504</p>
                    <p className="text-lg font-bold max-w-[500px]">*** get directions ***</p>
                </div>
            </div>
        </div>
    );
}