"use client";

import React from "react";
import Image from "next/image";


export default function AtGlance() {
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
            <h2 className="text-3xl max-w-[700px] w-full text-[#10296e] md:text-4xl lg:text-[58px] xl:text-[65px] leading-tight xl:leading-[1.2] capitalize font-oswald text-left flex items-center">
              Strategic Capital. <br />
              Long-Term Partnership.
            </h2>
          </div>

          {/* Description Section with Vertical Timeline */}
          <div className="flex flex-col gap-6 items-stretch mt-4 max-w-xl">
            {/* Custom Vertical Timeline Graphic */}
            <div className="flex flex-col items-center justify-between py-1.5 w-8 flex-shrink-0">
              {/* Top Circle */}
              <div className="w-3.5 h-3.5 rounded-full border border-blue-600 bg-white flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
              {/* Vertical Connecting Line */}
              <div className="h-[200px] w-[1px] bg-blue-600/30 flex-grow my-2" />
              {/* Bottom Circle */}
              <div className="w-3.5 h-3.5 rounded-full border border-blue-600 bg-white flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* Paragraphs of text */}
            <div className=" md:max-w-[572px] flex flex-col gap-6 text-slate-700 text-sm md:text-[22]  relative text-[22px] leading-[160%] font-tasa-orbiter text-gray text-left items-center">
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
          <div className="relative xl:h-[999px] w-full aspect-square md:aspect-[4/3] max-w-[640px] xl:max-w-[1000px] overflow-hidden ">
            {/* Background Gateway Image with Duotone filter effect */}
            <div className="absolute inset-0 z-0 bg-slate-900">
              <Image
                src="/gateway.png"
                alt="Gateway of India, Mumbai"
                fill
                className="object-cover object-center filter  contrast-[115%] brightness-[80%]"
                priority
              />
              {/* Duotone overlays matching the premium mockup design */}
              <div className="absolute inset-0 bg-[#0d2147]/35 mix-blend-color" />
              <div className="absolute inset-0 bg-[#0d2147]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d2147]/10 via-transparent to-white/5" />
            </div>

            {/* Grid Layout (3x3) */}
            <div className="relative z-10 grid grid-cols-3 grid-rows-3 w-full h-full">
              {/* ROW 1 */}
              {/* Cell 1,1: Image (transparent) */}
              <div className="border-r border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 1,2: Image (transparent) */}
              <div className="border-r border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 1,3: Stat Card */}
              <div className="bg-[#e9ecf5] border-b border-white/40 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] font-light text-[#0d2147] tracking-tight group-hover:scale-102 transition-transform duration-300 leading-none">
                  ₹2,400Cr+
                </div>
                <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#0d2147]/85 font-medium leading-snug tracking-wide">
                  Capital arranged across all mandates
                </div>
              </div>

              {/* ROW 2 */}
              {/* Cell 2,1: Stat Card */}
              <div className="bg-[#e9ecf5] border-r border-b border-white/40 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] font-light text-[#0d2147] tracking-tight group-hover:scale-102 transition-transform duration-300 leading-none">
                  40+
                </div>
                <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#0d2147]/85 font-medium leading-snug tracking-wide">
                  Transactions closed since 2021
                </div>
              </div>
              {/* Cell 2,2: Image (transparent) */}
              <div className="border-r border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 2,3: Image (transparent) */}
              <div className="border-b border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>

              {/* ROW 3 */}
              {/* Cell 3,1: Stat Card */}
              <div className="bg-[#e9ecf5] border-r border-white/40 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] font-light text-[#0d2147] tracking-tight group-hover:scale-102 transition-transform duration-300 leading-none">
                  8
                </div>
                <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#0d2147]/85 font-medium leading-snug tracking-wide">
                  Sectors with active deal history
                </div>
              </div>
              {/* Cell 3,2: Image (transparent) */}
              <div className="border-r border-white/40 transition-colors duration-300 hover:bg-white/5 cursor-pointer"></div>
              {/* Cell 3,3: Stat Card */}
              <div className="bg-[#e9ecf5] p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#dee3f0] hover:-translate-y-[1px] hover:shadow-lg cursor-pointer group">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] font-light text-[#0d2147] tracking-tight group-hover:scale-102 transition-transform duration-300 leading-none">
                  100%
                </div>
                <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#0d2147]/85 font-medium leading-snug tracking-wide">
                  Partner-led - every mandate, every time
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
