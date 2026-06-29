"use client";

import React, { useState } from "react";

interface Sector {
  id: number;
  tag: string;
  subtitle: string;
  description: string;
  image: string;
}

const SECTORS_ROW1: Sector[] = [
  {
    id: 1,
    tag: "AI & Machine Learning",
    subtitle: "Intelligent Systems",
    description:
      "Backing businesses that harness intelligent technologies to transform industries and create next-generation solutions.",
    image: "https://picsum.photos/seed/ai-neural-001/600/700",
  },
  {
    id: 2,
    tag: "FinTech",
    subtitle: "Financial Innovation",
    description:
      "Investing in platforms reimagining financial services, payments, lending, and wealth management at global scale.",
    image: "https://picsum.photos/seed/fintech-growth/600/700",
  },
  {
    id: 3,
    tag: "Semiconductors",
    subtitle: "Advanced Industry",
    description:
      "Partnering with foundational chip and hardware companies powering the next wave of computing and connectivity.",
    image: "https://picsum.photos/seed/semiconductor-chip/600/700",
  },
  {
    id: 4,
    tag: "Healthcare & Health Innovation",
    subtitle: "Future of Health",
    description:
      "Supporting breakthroughs in diagnostics, therapeutics, and health infrastructure that improve lives globally.",
    image: "https://picsum.photos/seed/healthcare-med/600/700",
  },
];

const SECTORS_ROW2: Sector[] = [
  {
    id: 5,
    tag: "Drone Technology",
    subtitle: "Next-Gen Mobility",
    description:
      "Enabling the autonomous sky economy through logistics drones, UAV platforms, and aerial intelligence systems.",
    image: "https://picsum.photos/seed/drone-aerial-sky/600/700",
  },
  {
    id: 6,
    tag: "Gaming & Entertainment",
    subtitle: "Digital Economies",
    description:
      "Investing in interactive entertainment, virtual worlds, and the creator economy reshaping how the world plays.",
    image: "https://picsum.photos/seed/gaming-neon-world/600/700",
  },
  {
    id: 7,
    tag: "Consumer Brands",
    subtitle: "Emerging Consumption",
    description:
      "Backing brands that capture the attention and wallets of the next billion consumers across new markets.",
    image: "https://picsum.photos/seed/consumer-lifestyle/600/700",
  },
  {
    id: 8,
    tag: "Real Estate",
    subtitle: "Built Environments",
    description:
      "Deploying capital into commercial, residential, and tech-enabled real estate across high-growth corridors.",
    image: "https://picsum.photos/seed/real-estate-arch/600/700",
  },
];

function SectorCard({ sector }: { sector: Sector }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onTouchCancel={() => setActive(false)}
      className="relative overflow-hidden group cursor-pointer w-full min-h-72 sm:min-h-96 lg:min-h-110.75 bg-white flex flex-col justify-between pt-10 pb-6 px-5 sm:pt-12 sm:pb-7 lg:pt-14 lg:pb-7"
    >
      {/* Background image — fades in on hover or active touch */}
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out ${active ? "opacity-100" : ""}`}
        style={{ backgroundImage: `url(${sector.image})` }}
      />
      {/* Dark scrim */}
      <div
        className={`absolute inset-0 bg-black/72 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out ${active ? "opacity-100" : ""}`}
      />

      {/* Number */}
      <p className="relative z-10 font-oswald text-[50px] sm:text-[60px] lg:text-[70px] leading-none text-gray-300 select-none transition-opacity duration-300 ease-in-out">
        {sector.id}
      </p>

      {/* Middle: pill + description — slides up on hover or active touch */}
      <div
        className={`relative z-10 flex flex-col gap-3 sm:gap-4 transition-transform duration-500 group-hover:-translate-y-5 ${active ? "-translate-y-5" : ""}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Pill tag */}
        <div
          className={`border border-black group-hover:border-white/70 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 self-start transition-colors duration-300 ${active ? "border-white/70" : ""}`}
        >
          <span
            className={`font-tasa-orbiter text-[11px] sm:text-[13px] uppercase tracking-[0.97px] text-black group-hover:text-white whitespace-nowrap transition-colors duration-300 ${active ? "text-white" : ""}`}
          >
            {sector.tag}
          </span>
        </div>

        {/* Description — slides up and fades in on hover or active touch */}
        <p
          className={`font-tasa-orbiter text-[12px] sm:text-[13px] leading-relaxed text-white max-w-65 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[450ms] ${active ? "opacity-100 translate-y-0" : ""}`}
          style={{
            transitionDelay: active ? "0ms" : "120ms",
          }}
        >
          {sector.description}
        </p>
      </div>

      {/* Bottom: subtitle + arrow */}
      <div className="relative z-10 flex items-end justify-between gap-3">
        <span
          className={`font-tasa-orbiter text-[11px] sm:text-[12px] text-black leading-[1.25] group-hover:opacity-0 transition-opacity duration-200 ${active ? "opacity-0" : ""}`}
        >
          {sector.subtitle}
        </span>

        {/* Arrow button: navy square → white circle, rotates on hover or active touch */}
        <div
          className={`flex items-center justify-center shrink-0 bg-[#10296e] group-hover:bg-white rounded-[10px] group-hover:rounded-full w-5 h-5 group-hover:w-8 group-hover:h-8 transition-all duration-500 ${active ? "bg-white rounded-full w-8 h-8" : ""}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
            className={`text-white group-hover:text-[#10296e] transition-all duration-500 group-hover:rotate-15 ${active ? "text-[#10296e] rotate-15" : ""}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <path
              d="M1 9L9 1M9 1H3M9 1V7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Returns border classes for a card at `index` out of `total` in the row. */
function cardBorderClasses(index: number, total: number): string {
  const classes = ["border-b border-gray-100"];
  // sm (2-col): right border on even-index cards (left column)
  if (index % 2 === 0) classes.push("sm:border-r");
  // lg (4-col): right border on all except last
  if (index < total - 1) classes.push("lg:border-r");
  return classes.join(" ");
}

export default function StrategicFocus() {
  return (
    <section className="bg-white w-full py-16 md:py-20 lg:py-25">

      {/* ── Header ── */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16 px-4 text-center">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#275ff9] rounded-[1px] shrink-0" />
          <span className="font-ibm-mono text-[#275ff9] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Strategic Focus Areas
          </span>
        </div>
        <h2
          className="font-oswald text-[#10296e] text-center font-normal capitalize leading-[1.08] max-w-[1000px]"
          style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
        >
          Sectors benefiting from
          <br className="hidden sm:block" />
          {" "}structural growth trends.
        </h2>
      </div>

      {/* ── Row 1: cards 1–4 ── */}
      <div className="px-4 sm:px-8 lg:px-40">
        <div className="md:pr-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
          {SECTORS_ROW1.map((s, i) => (
            <div key={s.id} className={cardBorderClasses(i, SECTORS_ROW1.length)}>
              <SectorCard sector={s} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: cards 5–8, staggered right on desktop ── */}
      <div className="px-4 sm:px-8 lg:px-0">
        {/* sf-row2-offset (globals.css) applies clamp pl + pr-20 at lg only */}
        <div className="sf-row2-offset grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS_ROW2.map((s, i) => (
            <div key={s.id} className={cardBorderClasses(i, SECTORS_ROW2.length)}>
              <SectorCard sector={s} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
