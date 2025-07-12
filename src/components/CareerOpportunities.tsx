interface CareerOpportunitiesProps {
    image: string;
    title: string;
    description: string;
    buttonClass?: string;

}

export default function CareerOpportunities({image, title, description, buttonClass}: CareerOpportunitiesProps) {
    return (
        <div className="flex gap-4 justify-center items-center bg-[#46A941] p-8 pb-20">
          <div className="flex flex-col gap-4 w-2xl p-4">
            <h1 className="2xl:text-4xl sm:text-2xl font-bold text-white">{title}</h1>
            <p className="text-xl text-white">{description}</p>
            <button className={`${buttonClass != undefined ? buttonClass : "bg-[#424492] rounded-2xl"} text-white px-4 py-2  font-semibold w-fit text-sm`}>
              APPLY NOW
            </button>
          </div>
          <div className="w-[360px] h-[360px]">
            <img src={image} alt="Toxicology Testing" className="w-full h-full" />
          </div>
        </div>
    )
}