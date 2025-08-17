import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-start items-center">
          {/* لوغو الصندوق في اليمين */}
          <div className="flex items-center">
              <Image
                src="/logos/logo-5.png"
                alt="الصندوق السيادي السوري"
                width={150}
                height={80}
                className="w-full h-full object-contain max-h-16"
                priority
              />
          </div>
        </div>
      </div>
    </nav>
  )
}
