"use client";
import { useEffect } from "react";
import Hls from "hls.js";
import { cn } from "@/lib/utils";

export default function HeroVideo() {
    useEffect(() => {
        const video = document.getElementById("hero-video") as HTMLVideoElement;
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource("/videos/hero.m3u8");
            hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = "/videos/hero.m3u8"; // Safari
        } else {
            video.src = "/videos/input.mp4"; // fallback
        }
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
            <div className={cn(
                `video-overlay absolute inset-0 bg-[#2c4940] z-10 transition-opacity duration-1000 ease-in-out`,
                'opacity-[0.95]'
            )}></div>
        </>
    );

}
