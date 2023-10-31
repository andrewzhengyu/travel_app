import Image from "next/image"
import Container from "./Container"
import { FEATURES } from "@/constants"
import FeatureItem from "./FeatureItem"


const Features = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center justify-center overflow-hidden py-24 -z-20">
        <Image
          src={"/feature-bg.png"}
          alt="feature-bg"
          fill
          objectFit="cover"
          objectPosition="center"
          className="absolute"
        />
        <div className="relative w-full h-full flex justify-between">
          <div className="hidden lg:flex flex-1">
            <Image
              src={"/phone.png"}
              alt="phone"
              width={320}
              height={500}
              className="absolute  rotate-[15deg] md:left-16 3xl:left-20 top-[13%]"
            />
          </div>
          <div className="z-20 flex flex-1 w-full flex-col">
            <div className="relative">
              <Image
                src={"/camp.svg"}
                alt="camp"
                width={50}
                height={50}
                className="absolute -top-[28px] max-sm:-top-[40px]"
              />
              <h2 className="text-[40px] font-bold lg:text-[64px]">
                Our Features
              </h2>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {FEATURES.map((feature) => (
                <FeatureItem
                  title={feature.title}
                  icon={feature.icon}
                  variant={feature.variant}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
    
  )
}

export default Features