import Link from "next/link"
import Container from "./Container"
import { NAV_LINKS } from "@/constants"
import { Button } from "./ui/button"
import { User } from "lucide-react"
import MobileSidebar from "./MobileSidebar"


const Navbar = () => {
  return (
    <Container>
        <nav className="py-5 sticky flex items-center justify-between">
            <Link href={"/"} className="font-bold text-[16px] max-sm:ml-2">
                <span className="text-teal-500">Oomg</span>andrew
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="
                        text-[16px] text-gray-500 flex items-center justify-center
                        cursor-pointer transition-all hover:font-bold
                    ">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <Button className="hidden sm:flex rounded-full">
                <User className="h-5 w-5 mr-2"/>
                <p>Log in</p>
            </Button>
            <MobileSidebar/>
        </nav>
    </Container>
  )
}

export default Navbar