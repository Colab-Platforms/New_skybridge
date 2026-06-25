import React from "react";

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
  return (
    <div className="relative overflow-hidden group cursor-pointer flex-1 min-h-110.75 bg-white flex flex-col justify-between pt-14 pb-7 px-5">

      {/* ── Background image: fades in on hover ── */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        style={{ backgroundImage: `url(${sector.image})` }}
      />
      {/* Dark scrim over the image */}
      <div className="absolute inset-0 bg-black/72 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

      {/* ── Number: fades out on hover ── */}
      <p className="relative z-10 font-oswald text-[70px] leading-none text-gray-300 select-none group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {sector.id}
      </p>

      {/* ── Middle: pill + description slides up on hover ── */}
      <div
        className="relative z-10 flex flex-col gap-4 transition-transform duration-500 group-hover:-translate-y-5"
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Pill tag */}
        <div className="border border-black group-hover:border-white/70 rounded-full px-4 py-1.5 self-start transition-colors duration-300">
          <span className="font-tasa-orbiter text-[13px] uppercase tracking-[0.97px] text-black group-hover:text-white whitespace-nowrap transition-colors duration-300">
            {sector.tag}
          </span>
        </div>

        {/* Description — slides up and fades in */}
        <p
          className="font-tasa-orbiter text-[13px] leading-relaxed text-white max-w-65 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          style={{
            transition: "opacity 0.45s ease, transform 0.45s ease",
            transitionDelay: "120ms",
          }}
        >
          {sector.description}
        </p>
      </div>

      {/* ── Bottom row: subtitle + arrow ── */}
      <div className="relative z-10 flex items-end justify-between gap-3">
        {/* Subtitle fades out on hover */}
        <span className="font-tasa-orbiter text-[12px] text-black leading-[1.25] group-hover:opacity-0 transition-opacity duration-200">
          {sector.subtitle}
        </span>

        {/* Arrow button: navy square → white circle, arrow rotates */}
        <div
          className="flex items-center justify-center shrink-0 bg-[#10296e] group-hover:bg-white rounded-[10px] group-hover:rounded-full w-5 h-5 group-hover:w-8 group-hover:h-8 transition-all duration-500"
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
            className="text-white group-hover:text-[#10296e] transition-all duration-500 group-hover:rotate-15"
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

export default function StrategicFocus() {
  return (
    <section className="bg-white w-full py-24 lg:py-25">
      {/* ── Header ── */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#275ff9] rounded-[1px] shrink-0" />
          <span className="font-ibm-mono text-[#275ff9] text-sm font-semibold tracking-[0.3em] uppercase">
            Strategic Focus Areas
          </span>
        </div>
        <h2
          className="font-oswald text-[#10296e] text-center font-normal capitalize leading-[1.08] max-w-[1000px]"
          style={{ fontSize: "clamp(48px, 5.5vw, 80px) " }}
        >
          Sectors benefiting from
          <br />
          structural growth trends.
        </h2>
      </div>

      {/* ── Row 1: cards 1–4, left-aligned ── */}
      <div className="px-20">
        <div className="flex divide-x divide-gray-100 border-t border-b border-gray-100">
          {SECTORS_ROW1.map((s) => (
            <SectorCard key={s.id} sector={s} />
          ))}
        </div>
      </div>

      {/* ── Row 2: cards 5–8, shifted right by ~1 card width ── */}
      <div className="pr-20" style={{ paddingLeft: "clamp(80px, 22vw, 374px)" }}>
        <div className="flex divide-x divide-gray-100 border-b border-gray-100">
          {SECTORS_ROW2.map((s) => (
            <SectorCard key={s.id} sector={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
