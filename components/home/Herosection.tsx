"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [times, setTimes] = useState({
        mumbai: "00:59",
        newYork: "03:59",
        london: "08:59",
        abuDhabi: "09:59",
    });

    useEffect(() => {
        setIsMounted(true);

        const updateClocks = () => {
            const getFormattedTime = (timeZone: string) => {
                try {
                    return new Intl.DateTimeFormat("en-US", {
                        timeZone,
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                    }).format(new Date());
                } catch (e) {
                    return "00:00";
                }
            };

            setTimes({
                mumbai: getFormattedTime("Asia/Kolkata"),
                newYork: getFormattedTime("America/New_York"),
                london: getFormattedTime("Europe/London"),
                abuDhabi: getFormattedTime("Asia/Dubai"),
            });
        };

        updateClocks();
        const interval = setInterval(updateClocks, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col justify-between flex-grow w-full overflow-hidden min-h-screen select-none pt-24 sm:pt-28 md:pt-0">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/Use_the_uploaded_Skybridge_log%20(2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Background Gradient simulating a cool slate/misty sky effect */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(16,_22,_35,_0.8)_0%,_rgba(16,_22,_35,_0)_25%,_rgba(22,_22,_22,_0)_60%,_#161616_100%)] z-10" />

            {/* Soft Dark Overlay to ensure perfect contrast and aesthetic depth */}
            {/* <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" /> */}

            {/* Spacer — pushes bottom content down on desktop where pt-0 is used */}
            <div className="flex-grow" />

            {/* Main Bottom Columns Section */}
            <div className="relative z-20 border-t border-white/10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-[100px] pb-4 pt-36 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">

                {/* Left Column: Location, Headline, Scroll Down Button */}
                <div className="flex flex-row justify-between items-end gap-4 sm:gap-8 w-full">
                    <div className="flex-grow max-w-xl">
                        <span className="text-xl tracking-[0.3em] text-white/60 font-semibold mb-3 sm:mb-4 block uppercase font-tasa-orbiter">
                            Fort, Mumbai
                        </span>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[54px] leading-[1.15] font-normal font-tasa-orbiter tracking-tight">
                            Building Exceptional Businesses. Creating Enduring Value.
                        </h1>
                    </div>
                    <div className="flex-shrink-0 pb-2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/25 flex items-center justify-center cursor-pointer hover:border-white hover:bg-white/5 transition-all duration-300 group">
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:translate-y-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column: Mandates Section with Glassmorphism Card */}
                <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-6 sm:pt-10 lg:pt-0 lg:pl-16 flex flex-col gap-6 w-full">
                    <div>
                        <span className="text-xl tracking-[0.3em] text-white/60 font-semibold mb-4 block uppercase font-sans">
                            RECENT MANDATES
                        </span>

                        {/* Glassmorphic Mandates Card */}
                        <div className="bg-gray-800  w-[500px] backdrop-blur-2xl border border-white/10 rounded-xl p-5 flex flex-row items-center gap-5 hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] group cursor-pointer">
                            <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                                <Image
                                    src="/handshake.jpg"
                                    alt="Corporate Mandate Handshake"
                                    className="w-full h-full relative max-w-full overflow-hidden max-h-full object-cover" width={144.7} height={108.5} sizes="100vw"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="text-sm  tracking-wider text-white/45 font-medium mb-1 uppercase font-sans">
                                    PRIVATE WEALTH MANAGEMENT • JUNE 2026
                                </div>
                                <div className="w-full relative text-[22px] leading-[25.43px] font-medium font-tasa-orbiter text-white text-left inline-block">India Investment<br/>Strategy - June 2026</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#0084ff] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/10">
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex flex-row gap-2 justify-center items-center pl-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-white cursor-pointer transition-colors duration-200" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/25 hover:bg-white/45 transition-colors duration-200 cursor-pointer" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/25 hover:bg-white/45 transition-colors duration-200 cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* Dynamic Timezone Indicators Along the Bottom */}
            <div className="w-full border-t border-white/10 py-6 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-[100px] relative z-20 ">
                <div className="max-w-[1920px] w-full mx-auto flex flex-row justify-between items-center gap-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8">

                        {/* Mumbai Time */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] tracking-[0.2em] font-medium uppercase font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                MUMBAI
                            </div>
                            <div className="text-[22px] text-white font-medium tracking-widest font-sans mt-1">
                                {isMounted ? times.mumbai : "00:59"}
                            </div>
                        </div>

                        {/* New York Time */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] tracking-[0.2em] font-medium uppercase font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                NEW YORK
                            </div>
                            <div className="text-[22px] text-white font-medium tracking-widest font-sans mt-1">
                                {isMounted ? times.newYork : "03:59"}
                            </div>
                        </div>

                        {/* London Time */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] tracking-[0.2em] font-medium uppercase font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                LONDON
                            </div>
                            <div className="text-[22px] text-white font-medium tracking-widest font-sans mt-1">
                                {isMounted ? times.london : "08:59"}
                            </div>
                        </div>

                        {/* Abu Dhabi Time */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] tracking-[0.2em] font-medium uppercase font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                ABU DHABI
                            </div>
                            <div className="text-[22px] text-white font-medium tracking-widest font-sans mt-1">
                                {isMounted ? times.abuDhabi : "09:59"}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
