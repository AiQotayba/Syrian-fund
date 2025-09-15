import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className={cn(
      `fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm`,
      // `bg-[#9d926d]/10 backdrop-blur-sm`,  
      // "bg-gradient-to-t from-transparent to-[#9d926d]/10 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 py-4 max-w-[1632px] md:px-12">
        <div className="flex justify-between items-center">
          {/* لوغو الصندوق */}
          <Link href={"/"} className="flex items-center max-w-[150px] md:max-w-[500px]">
            <Image
              src="/logos/logo-5.png"
              alt="الصندوق السيادي السوري"
              width={150}
              height={80}
              className="w-full h-full object-contain max-h-16 filter drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 10px #2c4940)" }}
              priority
            />
          </Link>
          
          {/* Under Construction Text */}
          <div className="text-white text-center md:text-right">
            <h1 className="text-xs md:text-lg font-normal font-arabic">
              Under construction
            </h1>
          </div>
        </div>
      </div>
    </nav>
  )
}
