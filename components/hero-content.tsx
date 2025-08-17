import Image from 'next/image'

export default function HeroContent() {
    return (
        <div className="video-content z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col absolute justify-center items-center opacity-80">
            {/* لوغو الصندوق باللون الذهبي */}
            <div className="w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto mb-8 sm:mb-12 lg:mb-16">
                <Image
                    src="/logos/logo-3.png"
                    alt="الصندوق السيادي السوري"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                />
            </div>

        </div>
    )
}
