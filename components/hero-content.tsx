import Image from 'next/image'

export default function HeroContent() {
    return (
        <div className="video-content z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col absolute justify-center items-center opacity-80">
            {/* لوغو الصندوق باللون الذهبي */}
            <div className="mx-auto mb-8 sm:mb-12 lg:mb-16 max-w-[168px] md:max-w-[275px]">
                <Image
                    src="/logos/logo-main.png"
                    alt="الصندوق السيادي السوري"
                    width={275}
                    height={275}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                />
            </div> 
        </div>
    )
}
