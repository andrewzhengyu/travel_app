import Image from "next/image"
import Container from "./Container"
import { Button } from "./ui/button"
import { Play, XCircle } from "lucide-react"


const Hero = () => {
  return (
    <Container className="max-sm:px-2 " >
      <div className="flex max-sm:flex-col">
        {/* Left */}
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 max-sm:pl-2">
          <Image
            src={"/camp.svg"}
            alt="camp"
            height={50}
            width={50}
          />
          <h1 className="text-[52px] font-bold lg:text-[88px] leading-none">
            Yellowstone <span className="text-gray-500">National Park</span> 
          </h1>
          <p className="mt-6 text-gray-30 xl:max-w-[520px]">
            Yosemite is known for its stunning natural beauty. It offers various campgrounds, from those with full amenities to more primitive sites. Be sure to make reservations well in advance, as it's a highly sought-after destination.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image
                  src={"/star.svg"}
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>
            <p className="font-bold">
              30k {' '}
              <span className="underline">total reviews</span>
            </p>
          </div>

          <div className="flex w-full gap-3 max-sm:flex-col">
                <Button className="font-bold">
                  Download App
                </Button>
                <Button className="font-bold" variant={"ghost"}>
                  <Play className="h-5 w-5 mr-2 text-teal-500 font-bold"/>
                  How we work?
                </Button>
                
          </div>
        </div>
        <div className=" flex-1 flex justify-end max-sm:justify-center">
          <div className="absolute right-0 top-0 h-screen w-screen  xl:-top-60 -z-10">
            <Image
              fill
              src="/pattern-bg.png"
              alt="background"
              objectFit="cover"
            />
          </div>
          <div className="relative flex items-center justify-center mt-2">
                  <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-teal-700/80 px-7 py-8">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <p className="text-gray-400 font-bold">
                          Location
                        </p>
                        <XCircle className="h-5 w-5 text-gray-50"/>
                      </div>
                      <p className="font-bold text-lg text-white">
                        Wyoming
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex flex-col">
                          <p className="text-gray-400 font-bold">
                            Distance
                          </p>
                          <p className="font-bold text-lg text-white">
                            170.82 mi
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-gray-400 font-bold">
                            Elevation
                          </p>
                          <p className="font-bold text-lg text-white">
                            2 km
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
      

    </Container>
  )
}

export default Hero