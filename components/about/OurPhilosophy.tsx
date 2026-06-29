"use client";
import Image from "next/image";

const items = [
  {
    num: "1",
    title: "Built on Strong Foundations",
    body: "We seek businesses with scalable models, resilient fundamentals, and the potential to create lasting value.",
  },
  {
    num: "2",
    title: "People Before Propositions",
    body: "We back founders and management teams whose ambition is matched by integrity, discipline, and execution capability.",
  },
  {
    num: "3",
    title: "Growth with Discipline",
    body: "We believe sustainable growth is built through thoughtful decision-making, strong governance, and long-term perspective.",
  },
  {
    num: "4",
    title: "Strategic Partnership",
    body: "Our role extends beyond transactions - bringing together expertise, relationships, and insight to support businesses through important moments of growth and transformation.",
  },
];

function NumberBadge({ num }: { num: string }) {
  return (
    <div className="bg-[#10296e] flex items-center justify-center rounded-[15px] shrink-0 w-[30px] h-[30px]">
      <span className="font-tasa-orbiter font-medium text-white text-[22px] leading-none">
        {num}
      </span>
    </div>
  );
}

export default function OurPhilosophy() {
  return (
    <section
      className="w-full bg-white
        px-4 py-12
        sm:px-10 sm:py-16
        lg:px-[80px] lg:py-[100px]"
    >
      {/* Header: label + heading */}
      <div className="flex flex-col items-center gap-4 lg:gap-6 mb-10 lg:mb-8">
        <div className="flex items-center gap-[10px]">
          <div className="w-[10px] h-[10px] rounded-[1px] bg-[#275ff9] shrink-0" />
          <span
            className="font-ibm-mono font-semibold text-[#275ff9] uppercase
                       text-[16px] leading-[1.25]
                       lg:text-[24px] lg:leading-[30px]"
          >
            Our Philosophy
          </span>
        </div>
        <h2
          className="font-oswald font-normal text-[#10296e] text-center capitalize
                     text-[28px] leading-[1.15]
                     sm:text-[38px]
                     md:text-[52px]
                     lg:text-[80px] lg:leading-[86px]"
        >
          Great Businesses Are Built<br />Through Great Partnership
        </h2>
      </div>

      {/* ── Mobile: vertical card stack (hidden on lg+) ────────────── */}
      <div className="flex flex-col gap-6 lg:hidden">
        <div className="flex justify-center py-2">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden">
            <Image
              src="/aboutphilosophy/philosophy-center.jpg"
              alt="SkyBridge"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {items.map(({ num, title, body }) => (
          <div key={num} className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="bg-[#10296e] flex items-center justify-center rounded-[15px] shrink-0 w-8 h-8">
                <span className="font-tasa-orbiter font-medium text-white text-[18px] leading-none">
                  {num}
                </span>
              </div>
              <span className="font-tasa-orbiter font-semibold text-[#275ff9] uppercase text-[15px] sm:text-[17px] leading-[1.3]">
                {title}
              </span>
            </div>
            <p className="font-tasa-orbiter font-normal text-[#1a1a1a] text-[15px] sm:text-[16px] leading-[1.6]">
              {body}
            </p>
          </div>
        ))}
      </div>

      {/* ── Desktop: 2×2 grid with center image (shown on lg+) ────── */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 relative lg:h-[917px]">

        {/* Horizontal divider */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-transparent via-[rgba(39,95,249,0.4)] to-transparent z-0 pointer-events-none" />

        {/* Vertical divider */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[rgba(39,95,249,0.4)] to-transparent z-0 pointer-events-none" />

        {/* Center profile image */}
        <div className="absolute top-[37.33%] bottom-[37.33%] left-[43.4%] right-[43.4%] rounded-full overflow-hidden z-10">
          <Image
            src="/aboutphilosophy/philosophy-center.jpg"
            alt="SkyBridge"
            fill
            className="object-cover"
          />
        </div>

        {/* Quadrant 1: top-left — title first, body below */}
        <div className="flex flex-col items-start pt-[73px] pl-[73px] pr-[147px] pb-[107px]">
          <div className="flex items-center gap-[26px] mb-[49px]">
            <NumberBadge num="1" />
            <span className="font-tasa-orbiter font-semibold text-[#275ff9] text-[30px] leading-[35px] uppercase">
              Built on Strong Foundations
            </span>
          </div>
          <p className="font-tasa-orbiter font-normal text-[#1a1a1a] text-[25px] leading-[1.6] max-w-[536px]">
            We seek businesses with scalable models, resilient fundamentals, and the potential to create lasting value.
          </p>
        </div>

        {/* Quadrant 2: top-right — title first, body below, right-aligned */}
        <div className="flex flex-col items-end pt-[73px] pl-[147px] pr-[73px] pb-[107px]">
          <div className="flex items-center gap-[26px] mb-[49px]">
            <NumberBadge num="2" />
            <span className="font-tasa-orbiter font-semibold text-[#275ff9] text-[30px] leading-[35px] uppercase text-right">
              People Before Propositions
            </span>
          </div>
          <p className="font-tasa-orbiter font-normal text-[#1a1a1a] text-[25px] leading-[1.6] text-right max-w-[431px]">
            We back founders and management teams whose ambition is matched by integrity, discipline, and execution capability.
          </p>
        </div>

        {/* Quadrant 3: bottom-left — body first, title at bottom */}
        <div className="flex flex-col items-start justify-end pt-[107px] pl-[73px] pr-[147px] pb-[73px]">
          <p className="font-tasa-orbiter font-normal text-[#1a1a1a] text-[25px] leading-[1.6] max-w-[489px] mb-[49px]">
            We believe sustainable growth is built through thoughtful decision-making, strong governance, and long-term perspective.
          </p>
          <div className="flex items-center gap-[26px]">
            <NumberBadge num="3" />
            <span className="font-tasa-orbiter font-semibold text-[#275ff9] text-[30px] leading-[35px] uppercase">
              Growth with Discipline
            </span>
          </div>
        </div>

        {/* Quadrant 4: bottom-right — body first, title at bottom, right-aligned */}
        <div className="flex flex-col items-end justify-end pt-[107px] pl-[147px] pr-[73px] pb-[73px]">
          <p className="font-tasa-orbiter font-normal text-[#1a1a1a] text-[25px] leading-[1.6] text-right max-w-[483px] mb-[49px]">
            Our role extends beyond transactions - bringing together expertise, relationships, and insight to support businesses through important moments of growth and transformation.
          </p>
          <div className="flex items-center gap-[26px]">
            <NumberBadge num="4" />
            <span className="font-tasa-orbiter font-semibold text-[#275ff9] text-[30px] leading-[35px] uppercase text-right">
              Strategic Partnership
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
