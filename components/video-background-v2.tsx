"use client"
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

export default function VideoBackground() {
    const [isVisible, setIsVisible] = useState(false)
    const url = "https://www.youtube.com/embed/tXGQPGi-fZw?autoplay=1&mute=1&loop=1&playlist=tXGQPGi-fZw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&vq=hd720&start=10"
    const timer = 3000

    useEffect(() => {
        // إخفاء iframe لمدة 3 ثواني ثم ظهوره بالتدرج
        const Timer = setTimeout(() => {
            setIsVisible(true)
        }, timer) // 3 ثواني 

        return () => clearTimeout(Timer)
    }, [])

    return (
        <>
            <div className="absolute top-0 left-0 z-10 inset-0 w-full h-full">
                <iframe
                    src={url}
                    className={`w-full h-full object-cover hero-video transition-opacity duration-1000 ease-in-out ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>

            {/* السلايد الأخضر الشفاف */}
            <div className={cn(
                `video-overlay absolute inset-0 bg-[#2c4940] z-10 transition-opacity duration-1000 ease-in-out`,
                isVisible ? 'opacity-80' : 'opacity-100'
            )}></div>
        </>
    )
}
