import Image from "next/image"
import Container from "./Container"
import { PEOPLE_URL } from "@/constants"

interface CampProps{
  backgroundImage: string,
  title: string,
  subtitle: string,
  peopleJoined: string,
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return(
    <div className="h-full w-full rounded-full relative flex flex-col max-sm:min-w-[390px] xl:min-w-[1100px]">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        objectFit="cover"
        className="absolute -z-10 lg:rounded-[50px]"
      />
      <div className="p-6 lg:px-20 lg:py-10 flex items-center justify-between ">
        <div className="rounded-full bg-teal-300 p-4 z-20">
          <Image
            src={"/folded-map.svg"}
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1 z-20">
          <h4 className="text-[18px] text-white font-bold">
            {title}
          </h4>
          <p className="text-[16px] text-gray-300 font-bold">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="p-6 mt-auto flex items-center gap-6">
        <div className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image
              src={url}
              key={url}
              alt="person" 
              width={52}
              height={52}  
              className="inline-block h-10 w-10 rounded-full"          
            />
          ))}
        </div>
        <p className="text-xl text-white font-bold">{peopleJoined}</p>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <Container>
      <div className="py-10 lg:py-20 xl:mb-20 ">
        <div className="relative hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
        overflow-x-auto lg:h-[400px] xl:h-[640px]  ">
          <CampSite
            backgroundImage="/img-1.png"
            title="Yellow Stone Camp"
            subtitle="Wyoming, US"
            peopleJoined="10+ Joined"
          />
          <CampSite
            backgroundImage="/img-2.png"
            title="Mountain View Camp"
            subtitle="Somewhere in the wilderness"
            peopleJoined="20+ Joined"
          />
        </div>
        <div className="flex items-center xl:justify-end justify-center mt-10 px-6 lg:-mt-50 lg:mr-6">
          <div className="bg-teal-300 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-[50px] rounded-xl
          relative w-full overflow-hidden">
            <h2 className="text-[24px] lg:text-[32px] text-white font-bold">Feeling Lost and Not Knowing the Way?</h2>
            <p className="text-[14px] text-white mt-5">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
            </p>
            <Image
              src={"/quote.svg"}
              alt="quote"
              width={186}
              height={219}
              className="absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Camp