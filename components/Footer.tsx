import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Container from "./Container"
import FooterColumn from "./FooterColumn"
import Link from "next/link"
import Image from "next/image"


const Footer = () => {
  return (
    <Container className="relative mt-10 mb-10 px-10 flex flex-col gap-10">
      <h2 className="font-bold">Oomgandrew</h2>
      <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6 ">
        {FOOTER_LINKS.map((column) => (
          <FooterColumn title={column.title}>
            <ul className="text-base flex flex-col gap-4 text-gray-500">
              {column.links.map((link) => (
                <Link href={"/"} key={link}>
                  {link}
                </Link>
              ))}
            </ul>
          </FooterColumn>
        ))}
        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <Link href={"/"} key={link.label} className="flex gap-4 max-sm:flex-col">
              <p className="text-gray-500 text-base">
                {link.label}:
              </p>
              <p className="mb-10">{link.value}</p>
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title={SOCIALS.title}>
          <div className="flex gap-2">

            {SOCIALS.links.map((link) => (
              <Link href={"/"} key={link}>
                <Image src={link} alt="logo" width={24} height={24}/>
              </Link>
            ))}
          </div>
        </FooterColumn>
      </div>
      <div className="border bg-gray-500"/>
      <p className="w-full text-center text-gray-500">2023 oomgandrew | All rights reserved</p>
    </Container>
  )
}

export default Footer