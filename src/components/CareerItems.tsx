interface CareerItemsProps {
  image: string;
  title: string;
  description: string;
  titleClass: string;
  descriptionClass: string;
  imageClass?: string;
}

export default function CareerItems({ image, title, description, titleClass, descriptionClass, imageClass }: CareerItemsProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} alt={title} className={` ${imageClass !== undefined ? imageClass : "w-full h-[284px]"}`} />
      <div className={`flex flex-col justify-center items-center p-4  w-full ${titleClass}`}>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className={`flex flex-col justify-center items-center p-8  w-full ${descriptionClass}`}>
        <p>{description}</p>
      </div>
    </div>
  )
}