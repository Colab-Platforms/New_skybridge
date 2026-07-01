"use client";
import Image from "next/image";

export default function AboutOverview() {
  return (
    <section
      className="w-full bg-white
        px-4 py-12
        sm:px-10 sm:py-16
        lg:px-[80px] lg:py-[100px]"
    >
      {/* Top: label + heading + paragraph 1 */}
      <div className="flex flex-col gap-6 mb-8">

        {/* OVERVIEW label */}
        <div className="flex items-center gap-[10px]">
          <div className="w-[10px] h-[10px] rounded-[1px] bg-[#275ff9] shrink-0" />
          <span
            className="font-ibm-mono font-semibold text-[#275ff9] uppercase
                       text-[16px] leading-[1.25]
                       lg:text-[24px] lg:leading-[30px]"
          >
            Overview
          </span>
        </div>

        {/* Heading — explicit <br /> is reliable across fonts/sizes */}
        <h2
          className="font-oswald font-normal text-[#10296e]
                     text-[32px] leading-[1.1]
                     sm:text-[44px]
                     md:text-[56px]
                     lg:text-[80px] lg:leading-18"
        >
          Built on Purpose.<br />Guided by Trust
        </h2>

        {/* Paragraph 1 */}
        <p
          className="font-tasa-orbiter font-medium text-gray leading-[1.6]
                     text-[15px]
                     sm:text-[17px]
                     md:text-[20px]
                     lg:text-[25px] lg:max-w-252"
        >
          SkyBridge Group is a Mumbai-based strategic investment and advisory
          platform partnering with businesses, entrepreneurs, and investors
          across growth, capital, and transformation opportunities.
        </p>
      </div>

      {/* Bottom: image row
          Mobile: stacked — [building] [handshake] [paragraph 2]
          Desktop: side-by-side — left: building | right: [handshake + paragraph 2]
      */}
      <div className="flex flex-col gap-6  lg:flex-row lg:items-start lg:justify-between lg:max-w-[90%]">

          {/* Right column: image + paragraph 2 */}
        <div className="flex flex-col gap-6 w-full lg:w-243.75 lg:order-2">
          <div className="relative w-full h-60 sm:h-80 lg:h-150.75">
            <Image
              src="/aboutoverview/gateway-of-india.jpg"
              alt="Gateway of India"
              fill
              className="object-cover"
            />
          </div>

          <p
            className="font-tasa-orbiter font-medium text-gray leading-[1.6]
                       text-[15px]
                       sm:text-[17px]
                       md:text-[20px]
                       lg:text-[25px]"
          >
            Combining investment expertise, transaction execution, and
            multidisciplinary advisory capabilities, we help businesses navigate
            critical decisions, unlock opportunities, and build enduring value.
          </p>
        </div>

        {/* Left image — explicit heights avoid fill collapse */}
        <div className="relative w-full h-60 sm:h-80 lg:w-188 lg:h-121.5 lg:order-1 lg:shrink-0">
          <Image
            src="/aboutoverview/bandra-worli-sea-link.jpg"
            alt="Bandra-Worli Sea Link"
            fill
            className="object-cover h-[486px] w-[752px] relative "
          />
        </div>

      </div>
    </section>
  );
}
