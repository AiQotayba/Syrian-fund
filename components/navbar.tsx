import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-start">
          <div className="w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/logo-main.png"
              alt="الصندوق السيادي السوري"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
