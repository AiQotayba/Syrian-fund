"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { cn } from "@/lib/utils";

export default function HeroVideo() {
    const hlsRef = useRef<Hls | null>(null);

    const loadVideo = (isMobile: boolean) => {
        const video = document.getElementById("hero-video") as HTMLVideoElement;
        if (!video) return;

        // Clean up existing HLS instance
        if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
        }

        const path = isMobile ? "/videos/mobile/hero" : "/videos/desktop/hero";
        
        if (Hls.isSupported()) {
            const hls = new Hls();
            hlsRef.current = hls;
            hls.loadSource(`${path}.m3u8`);
            hls.attachMedia(video);
        }
        else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = `${path}.m3u8`; // Safari
        }
        else {
            video.src = `${path}.mp4`; // Fallback
        }
    };

    useEffect(() => {
        // Initial load
        const isMobile = window.innerWidth < 768;
        loadVideo(isMobile);

        // Track current state to avoid unnecessary reloads
        let currentIsMobile = isMobile;

        // Handle window resize
        const handleResize = () => {
            const newIsMobile = window.innerWidth < 768;
            
            // Only reload if the mobile/desktop state actually changed
            if (newIsMobile !== currentIsMobile) {
                currentIsMobile = newIsMobile;
                loadVideo(newIsMobile);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (hlsRef.current) {
                hlsRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <video
                id="hero-video"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="video-overlay absolute inset-0 bg-[#094239] z-10 transition-opacity duration-1000 ease-in-out opacity-[0.80]"></div>
        </>
    );

}
