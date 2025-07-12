interface CareerItemsProps {
    image: string;
    title: string;
    description: string;
}

export default function CareerItems({image, title, description}: CareerItemsProps) {
    return (
        <div className="flex flex-col justify-center items-center bg-[#46A941] w-[476px]">
        <img src={image} alt={title} className="w-full h-[284px]" />
        <div className="flex flex-col justify-center items-center p-4 bg-[#424492] text-white w-full">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex flex-col justify-center items-center p-8 bg-[#46A941] text-white w-full">
          <p>{description}</p>
        </div>
      </div>
    )
}