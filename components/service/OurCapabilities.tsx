"use client";

import { useState } from "react";
import Image from "next/image";
import { CAPABILITIES_DATA, type CapabilityTab, type ServiceCard } from "./capabilitiesData";

function ToggleArrow({ isOpen, className = "" }: { isOpen: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#f6f6f6] ${className}`}
    >
      <svg
        className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : "rotate-0"}`}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="#10296e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ServiceCardItem({
  card,
  isOpen,
  onToggle,
  onHoverOpen,
  onHoverClose,
}: {
  card: ServiceCard;
  isOpen: boolean;
  onToggle: () => void;
  onHoverOpen: () => void;
  onHoverClose: () => void;
}) {
  return (
    <div
      onMouseEnter={onHoverOpen}
      onMouseLeave={onHoverClose}
      className="bg-white border border-[#d1d5db] rounded-[16px] lg:rounded-[22px] px-5 py-5 lg:px-[34px] lg:py-[22px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 lg:gap-8"
    >
      {/* Number + title (+ mobile toggle, sharing the top row) */}
      <div className="flex items-start justify-between gap-4 lg:contents">
        <div className="flex flex-col gap-3 lg:gap-4 lg:shrink-0 lg:w-[min(49%,860px)]">
          <span className="font-mono font-medium text-[#275ff9] text-[20px] lg:text-[30px] leading-[1.2] uppercase">
            {card.number}
          </span>
          <h3 className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[26px] sm:text-[34px] lg:text-[50px] leading-[1.2] capitalize">
            {card.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label="Toggle details"
          className="lg:hidden shrink-0 mt-1 cursor-pointer"
        >
          <ToggleArrow isOpen={isOpen} />
        </button>
      </div>

      {/* Description + tags */}
      <div className="flex flex-col gap-3 lg:gap-4 items-start flex-1 lg:max-w-[756px]">
        {!isOpen && (
          <p className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[15px] sm:text-[17px] lg:text-[25px] leading-[1.6] line-clamp-2 w-full">
            {card.description}
          </p>
        )}

        <div
          className={`grid w-full transition-[grid-template-rows] duration-1000 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden min-h-0">
            <div className="flex flex-col gap-6 lg:gap-[54px] items-start">
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
          </div>
        </div>
      </div>

      {/* Toggle — desktop only, trailing position */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label="Toggle details"
        className="hidden lg:inline-flex shrink-0 mt-1 cursor-pointer"
      >
        <ToggleArrow isOpen={isOpen} />
      </button>
    </div>
  );
}

function TabContent({ tab }: { tab: CapabilityTab }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showQuote, setShowQuote] = useState(false);

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
        <div
          className={`absolute left-4 right-4 bottom-4 lg:left-auto lg:right-[110px] lg:bottom-[90px] lg:max-w-[651px] bg-white rounded-[10px] lg:rounded-[12px] p-4 lg:p-5 transition-all duration-300 ease-in-out ${
            showQuote ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <p className="font-tasa-orbiter font-medium text-[#1a1a1a] text-[13px] sm:text-[15px] lg:text-[25px] leading-[1.6]">
            {tab.quote}
          </p>
        </div>

        {/* Info icon — hovering it reveals the quote; click/tap toggles it on mobile */}
        <button
          type="button"
          onClick={() => setShowQuote((s) => !s)}
          onMouseEnter={() => setShowQuote(true)}
          onMouseLeave={() => setShowQuote(false)}
          aria-expanded={showQuote}
          aria-label="Toggle quote"
          className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-10 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-300 hover:bg-gray-400 backdrop-blur-sm text-black flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="font-serif italic text-sm lg:text-base leading-none">i</span>
        </button>
      </div>

      {/* Title + body — stacks on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 px-5 lg:px-[34px]">
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
        {tab.cards.map((card, idx) => (
          <ServiceCardItem
            key={card.number}
            card={card}
            isOpen={openIdx === idx}
            onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            onHoverOpen={() => setOpenIdx(idx)}
            onHoverClose={() => setOpenIdx((cur) => (cur === idx ? null : cur))}
          />
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
