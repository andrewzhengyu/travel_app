import { Menu } from "lucide-react"


const MobileSidebar = () => {
  return (
    <div className="hidden max-sm:flex mr-2">
        <Menu className="h-5 w-5 cursor-pointer"/>
    </div>
  )
}

export default MobileSidebar