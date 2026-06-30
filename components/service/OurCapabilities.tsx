"use client";

import { useState } from "react";
import Image from "next/image";
import { CAPABILITIES_DATA, type CapabilityTab, type ServiceCard } from "./capabilitiesData";

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className="bg-white border border-[#d1d5db] rounded-[16px] lg:rounded-[22px] px-5 py-5 lg:px-[34px] lg:py-[22px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 lg:gap-8">
      {/* Number + title */}
      <div className="flex flex-col gap-3 lg:gap-4 lg:shrink-0 lg:w-[min(40%,664px)]">
        <span className="font-mono font-medium text-[#275ff9] text-[20px] lg:text-[30px] leading-[1.2] uppercase">
          {card.number}
        </span>
        <h3 className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[26px] sm:text-[34px] lg:text-[50px] leading-[1.2] capitalize">
          {card.title}
        </h3>
      </div>

      {/* Description + tags */}
      <div className="flex flex-col gap-6 lg:gap-[54px] items-start flex-1 lg:max-w-[644px]">
        <p className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[15px] sm:text-[17px] lg:text-[25px] leading-[1.6]">
          {card.description}
        </p>
        {card.extraParagraph && (
          <p className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[15px] sm:text-[17px] lg:text-[25px] leading-[1.6]">
            {card.extraParagraph}
          </p>
        )}
        {card.solutions && card.solutions.length > 0 && (
          <div className="flex flex-col gap-3 lg:gap-4 w-full">
            <p className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[15px] sm:text-[17px] lg:text-[25px] leading-[1.6] capitalize">
              Solutions include:
            </p>
            <div className="flex flex-wrap gap-[7px] lg:gap-[9px]">
              {card.solutions.map((s) => (
                <span
                  key={s}
                  className="bg-[#f6f6f6] rounded-[2px] px-[8px] py-[7px] lg:px-[10px] lg:py-[10px] font-tasa-orbiter text-black text-[13px] sm:text-[15px] lg:text-[22px] leading-[1.4] lg:leading-[30px] whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative × — desktop only */}
      <span className="hidden lg:inline text-[#d1d5db] text-[28px] leading-none shrink-0 mt-1 select-none">
        ×
      </span>
    </div>
  );
}

function TabContent({ tab }: { tab: CapabilityTab }) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 w-full">
      {/* Hero image */}
      <div className="relative h-[260px] sm:h-[380px] lg:h-[738px] w-full overflow-hidden">
        <Image
          src={tab.heroImage}
          alt={tab.title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Quote card */}
        <div className="absolute left-4 right-4 bottom-4 lg:left-auto lg:right-[110px] lg:bottom-[90px] lg:max-w-[651px] bg-white rounded-[10px] lg:rounded-[12px] p-4 lg:p-5">
          <p className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[13px] sm:text-[15px] lg:text-[25px] leading-[1.6]">
            {tab.quote}
          </p>
        </div>
      </div>

      {/* Title + body — stacks on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-[18px] lg:shrink-0 lg:w-[min(49%,860px)] lg:tracking-[-0.96px]">
          <h2 className="font-oswald font-normal text-[#10296e] text-[34px] sm:text-[46px] lg:text-[70px] leading-[1.2] uppercase">
            {tab.title}
          </h2>
          <p className="font-tasa-orbiter font-medium text-[#275ff9] text-[15px] sm:text-[18px] lg:text-[30px] leading-[1.2] uppercase not-italic">
            {tab.subtitle}
          </p>
        </div>
        <p className="font-tasa-orbiter font-normal text-[#1a1a1a] text-[15px] sm:text-[17px] lg:text-[25px] leading-[1.6] not-italic lg:shrink-0 lg:w-[min(44%,756px)]">
          {tab.body}
        </p>
      </div>

      {/* Service cards */}
      <div className="flex flex-col gap-4 lg:gap-6">
        {tab.cards.map((card) => (
          <ServiceCardItem key={card.number} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function OurCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTab = CAPABILITIES_DATA[activeIdx];

  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-16 sm:py-24 lg:py-[225px] bg-white">
      <div className="flex flex-col gap-6 lg:gap-8 w-full">
        {/* Section heading + tab nav */}
        <div className="flex flex-col gap-3 lg:gap-4">
          <h1 className="font-oswald font-normal text-[#10296e] text-[36px] sm:text-[50px] lg:text-[70px] leading-[1.2] uppercase">
            Our Capabilities
          </h1>

          {/* Tab navigation — horizontally scrollable on mobile */}
          <div className="border-b border-[#e5e7eb] overflow-x-auto scrollbar-hide -mx-4 sm:-mx-8 lg:mx-0">
            <div className="flex items-center gap-5 sm:gap-7 lg:gap-[42.5px] h-[60px] lg:h-[79px] px-4 sm:px-8 lg:px-0 min-w-max">
              {CAPABILITIES_DATA.map((tab, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center gap-[4px] lg:gap-[5px] shrink-0 cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-[#f2f2f2] rounded-full px-[8px] py-[8px] lg:px-[10px] lg:py-[10px] h-[44px] lg:h-[65px]"
                        : "pb-[2px] pt-[6px]"
                    }`}
                  >
                    {isActive && (
                      <span className="font-tasa-orbiter text-[#275ff9] text-[8px] lg:text-[10.625px] leading-[1] tracking-[0.16px]">
                        ◆
                      </span>
                    )}
                    <span
                      className={`text-[13px] sm:text-[15px] lg:text-[22px] leading-[1.2] lg:leading-[23.9px] tracking-[0.16px] whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "font-accent font-bold italic text-[#275ff9]"
                          : "font-tasa-orbiter font-normal not-italic text-[#555]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab content */}
        <TabContent key={activeTab.id} tab={activeTab} />
      </div>
    </section>
  );
}
