interface OurCultureProps {
    title: string;
    description: string;
}

export default function OurCulture({title, description }: OurCultureProps) {
    return (
        <div className="flex justify-between items-center w-full bg-[#EFEFEF] py-8 pl-8 pb-20 ">
            <div className="flex flex-col gap-1 pl-8">
                <div>
                    <h2 className="text-[40px] text-[#424492]  py-4 font-medium">
                        {title}
                    </h2>
                    <p className="text-[#292929] max-w-7xl text-xl ">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-[30px] text-[#46A941]  py-4 font-semibold">
                        Together, We DRIVE Success.
                    </h2>
                    <div className="flex justify-around gap-4 w-full">
                        <div className="flex gap-1 items-center justify-around w-full">
                            <div className=" flex flex-col gap-2">
                                <img
                                    src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/diversitynew.png"
                                    alt="Toxicology Testing" className="w-[100px h-[110px]" />
                                <p className="text-center text-lg  text-white py-1 px-4 rounded-3xl bg-[#424492] font-medium">Diversity</p>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <img
                                    src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/respectnew.png"
                                    alt="Toxicology Testing" className="w-[100px h-[110px]" />
                                <p className="text-center text-lg  text-white py-1 px-4 rounded-3xl bg-[#424492] font-medium">Respect</p>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <img
                                    src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/intergritynew.png"
                                    alt="Toxicology Testing" className="w-[100px h-[110px]" />
                                <p className="text-center text-lg  text-white py-1 px-4 rounded-3xl bg-[#424492] font-medium">Integrity</p>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <img
                                    src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/intergritynew.png"
                                    alt="Toxicology Testing" className="w-[100px h-[110px]" />
                                <p className="text-center text-lg  text-white py-1 px-4 rounded-3xl bg-[#424492] font-medium">Excellence</p>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <img
                                    src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/excellencenew.png"
                                    alt="Toxicology Testing" className="w-[100px h-[110px]" />
                                <p className="text-center text-lg  text-white py-1 px-4 rounded-3xl bg-[#424492] font-medium">Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 pl-8">
                <img src="https://aeonglobalhealth.com/wp-content/uploads/2020/09/Layer-20.png" alt="Toxicology Testing" className="w-full h-full" />
            </div>
        </div>
    );
}