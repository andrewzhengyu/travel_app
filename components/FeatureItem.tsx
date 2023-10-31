import Image from "next/image"

type FeatureItem = {
    title: string,
    icon: string,
    variant: string,
    description: string,
}

const FeatureItem = ({
    title,
    icon,
    variant,
    description
}: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start gap-3">
        <div className="rounded-full p-4 lg:p-7 bg-teal-500">
            <Image
                src={icon}
                alt="map"
                width={28}
                height={28}
            />
        </div>
        <h2 className="font-bold text-xl lg:text-2xl mt-5 capitalize">
            {title}
        </h2>
        <p className="bg-white/80 text-gray-500 lg:mt-30">
            {description}
        </p>
    </li>
  )
}

export default FeatureItem