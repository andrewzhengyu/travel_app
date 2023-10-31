import { cn } from "@/lib/utils"

interface ContainerProps{
    children: React.ReactNode,
    className?: string,
}
const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
        {children}
    </div>
  )
}

export default Container