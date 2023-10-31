import Image from "next/image"
import Container from "./Container"


const Guide = () => {
  return (
    <Container>
      <Image
        src={"/camp.svg"}
        alt="camp"
        width={50}
        height={50}
      />
      <p className="uppercase text-[18px] mt-2 mb-3 text-teal-500 px-2">
        We are here for you
      </p>
      <div className="flex flex-wrap justify-between items-center gap-5 lg:gap-10 px-2">
        <h2 className="text-[30px] lg:text-[64px] max-w-[390px] font-bold">
          Guide you to easy path
        </h2>
        <p className="text-[16px] text-gray-500 max-w-[520px]">
        You can confidently explore the wilderness and conquer new heights without the fear of getting lost. Our app now offers support for offline maps, ensuring that you can navigate even when you're far from an internet connection. It's the perfect tool to share with your friends, family, and fellow adventurers, as you embark on thrilling journeys through picturesque valleys and reach the summit of majestic mountains. 
        </p>
      </div>

      <div className="flex items-center justify-center relative w-full mt-20">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1440}
          height={680}
          className="w-full xl:rounded-[50px]"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-2xl shadow-md md:left-[5%] lg:top-20">
          <Image
            src={"/meter.svg"}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex flex-col justify-between">
            <div className="flex w-full flex-col">
              <div className="w-full flex justify-between">
                <p className="text-gray-500">Destination</p>
                <p className="text-teal-500 font-bold ml-2">48 min</p>
              </div>
              <p className="mt-2 font-bold text-xl">Montana</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="text-gray-500">Start track</p>
              <h4 className="font-bold mt-2 text-xl">Idaho</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Guide