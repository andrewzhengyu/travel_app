import Image from "next/image"
import Container from "./Container"
import { Button } from "./ui/button"


const GetApp = () => {
  return (
    <section className="w-full  relative flex max-sm:flex-col items-start lg:items-center py-10">
      <Container className="space-y-12">
        <Image
          src="/pattern.png"
          alt='bg'
          fill
          objectFit="cover"
          objectPosition="center"
          className="-z-10 absolute"
        />
        <div className="z-20 flex flex-1 w-full flex-col items-start justify-center">
          <h2 className="font-bold text-[40px] lg:text-[64px] text-white">Get for free now</h2>
          <p className="text-base text-gray-300">Available on iOS and Android</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center md:flex-row gap-2">
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full bg-white w-full flex items-center justify-center"
          >
            <Image
              src={"/apple.svg"}
              alt="apple"
              width={20}
              height={20}
            />
            <p className="ml-2">Download App</p>
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full w-full bg-slate-600 flex items-center justify-center group"
          >
            <Image
              src={"/android.svg"}
              alt="android"
              width={20}
              height={20}
            />
            <p className="ml-2 text-white group-hover:text-black">Download App</p>
          </Button>
        </div>
      </Container>
      <Container className="py-24 hidden sm:flex">
        <Image
          src={"/phones.png"}
          alt="phones"
          width={500}
          height={800}
        />
      </Container>
    </section>
  )
}

export default GetApp