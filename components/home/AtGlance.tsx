"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/gateway.png",
  "/Atgalance/imag2.jpg",
  "/Atgalance/imag3.webp",
  "/Atgalance/imag4.jpg",
  "/Atgalance/imag5.jpg",
];

export default function AtGlance() {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % IMAGES.length);
    }, 4500); // Smooth change every 4.5 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-[#0d2147] border-t border-slate-100">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Title and Timeline Paragraphs */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 text-blue-600 text-[24.22px] font-bold tracking-[0.3em] uppercase mb-4">
              <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-[2px]" />
              At A Glance
            </div>

            {/* Heading */}
            <h2 className="text-3xl max-w-[700px] w-full text-[#10296e] md:text-4xl lg:text-[58px] xl:text-[80px] leading-tight xl:leading-[1.2] capitalize font-oswald text-left">
              Strategic Capital. <br />
              Long-Term Partnership.
            </h2>
          </div>

          {/* Description Section with Vertical Timeline */}
          <div className="flex flex-col gap-6 items-start mt-4 max-w-xl">
            {/* Custom Vertical Timeline Graphic */}
            <div className="flex flex-col items-start justify-between py-1.5 w-full">
              {/* Top Circle */}
              <div className="w-3.5 h-3.5 rounded-full border border-blue-600 bg-white flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
              {/* Vertical Connecting Line */}
              <div className="h-[235.1px] w-[1px] bg-blue-600 ml-[6.5px] my-2" />
              {/* Bottom Circle */}
              <div className="w-3.5 h-3.5 rounded-full border border-blue-600 bg-white flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* Paragraphs of text */}
            <div className="md:max-w-[572px] flex flex-col gap-6 text-slate-700 text-base md:text-[22px] leading-[160%] font-tasa-orbiter text-left">
              <p>
                Sky Bridge Group is a strategic investment and capital platform partnering with visionary entrepreneurs and growth-focused businesses.
              </p>
              <p>
                We work alongside founders and management teams to unlock opportunities, accelerate growth, and create enduring value through strategic capital and transaction expertise.
              </p>
              <p>
                Established in 2021 in Fort, Mumbai - India's original financial district.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3x3 Photo-Stat Grid */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="relative xl:h-[999px] w-full aspect-[3/4] xs:aspect-[4/5] sm:aspect-square md:aspect-[4/3] max-w-[640px] xl:max-w-[1000px] overflow-hidden ">
            {/* Background slideshow images with duotone filter effect */}
            <div className="absolute inset-0 z-0 ">
              {IMAGES.map((img, idx) => (
                <div
                  key={img}
                  className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                  style={{
                    opacity: idx === currentImgIdx ? 1 : 0,
                  }}
                >
                  <Image
                    src={img}
                    alt={`At A Glance Background ${idx + 1}`}
                    fill
                    className="object-cover object-center filter "
                    priority={idx === 0}
                  />
                </div>
              ))}
              {/* Duotone overlays matching the premium mockup design */}
              <div className="absolute inset-0 bg-[#0d2147]/35 mix-blend-color z-10" />
              <div className="absolute inset-0 bg-[#0d2147]/20 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d2147]/10 via-transparent to-white/5 z-10" />
            </div>

            {/* Grid Layout: 3x2 on mobile, 3x3 on desktop */}
            <div className="relative z-10 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-3 w-full h-full">
              {/* ROW 1 */}
              {/* Cell 1,1: Image (transparent) */}
              <div className="border-r border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 1,2: Image (transparent) */}
              <div className="hidden md:block border-r border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 1,3: Founder-First Approach */}
              <div className="bg-[#e9ecf5] border-b border-white/40 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-normal font-oswald text-[#0d2147] leading-tight group-hover:scale-102 transition-transform duration-300">
                  Founder-First Approach
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-[15px] xl:text-[23.56px] text-[#0d2147]/85  font-tasa-orbit leading-[29.98px] tracking-wide mt-2 md:mt-4">
                  Partnering with entrepreneurs to build scalable and sustainable businesses.
                </div>
              </div>

              {/* ROW 2 */}
              {/* Cell 2,1: Strategic Capital */}
              <div className="bg-[#e9ecf5] border-r border-b border-white/40 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-normal font-oswald text-[#0d2147] leading-tight group-hover:scale-102 transition-transform duration-300">
                  Strategic Capital
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-[15px] xl:text-[23.56px] text-[#0d2147]/85 font-tasa-orbit leading-[29.98px] tracking-wide mt-2 md:mt-4">
                  Providing growth capital aligned with long-term value creation.
                </div>
              </div>
              {/* Cell 2,2: Image (transparent) */}
              <div className="md:border-r border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 2,3: Image (transparent) */}
              <div className="hidden md:block border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>

              {/* ROW 3 */}
              {/* Cell 3,1: Building Across Industries */}
              <div className="bg-[#e9ecf5] border-r border-white/40 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-normal font-oswald text-[#0d2147] leading-tight group-hover:scale-102 transition-transform duration-300">
                  Building Across Industries
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-[15px] xl:text-[23.56px] text-[#0d2147]/85 font-tasa-orbit leading-[29.98px] tracking-wide mt-2 md:mt-4">
                  Evaluating opportunities across diverse industries and business models.
                </div>
              </div>
              {/* Cell 3,2: Image (transparent) */}
              <div className="hidden md:block border-r border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 3,3: Long-Term Partnership */}
              <div className="bg-[#e9ecf5] p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-normal font-oswald text-[#0d2147] leading-tight group-hover:scale-102 transition-transform duration-300">
                  Long-Term Partnership
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-[15px] xl:text-[23.56px] text-[#0d2147]/85 font-tasa-orbit leading-[29.98px] tracking-wide mt-2 md:mt-4">
                  Working alongside management teams through every stage of growth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
