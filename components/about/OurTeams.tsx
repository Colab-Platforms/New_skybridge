"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// ─── Arrow SVGs ───────────────────────────────────────────────────────────────

function ArrowLeft({ inverted }: { inverted?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M13 4L7 10L13 16"
        stroke={inverted ? "white" : "#10296e"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ inverted }: { inverted?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M7 4L13 10L7 16"
        stroke={inverted ? "white" : "#10296e"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Team Members Data ────────────────────────────────────────────────────────

const TEAM_MEMBERS = [
  {
    name: "Neha Sharma",
    role: "Managing Director, Investment Banking",
    image: "/teamTestimonial/img4.png",
  },
  {
    name: "Gaurav Deepak",
    role: "Co-founder & CEO",
    image: "/teamTestimonial/img5.png",
  },
  {
    name: "Rahul Malhotra",
    role: "Director, Strategic Advisory",
    image: "/teamTestimonial/img1.png",
  },
  {
    name: "Elena Rostova",
    role: "Partner, Legal & Valuation",
    image: "/teamTestimonial/img2.png",
  },
  {
    name: "Marcus Vance",
    role: "Head of Capital Solutions",
    image: "/teamTestimonial/img3.png",
  },
];

export default function OurTeams() {
  const [activeIndex, setActiveIndex] = useState(1); // Gaurav Deepak (index 1) active by default
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  // Responsive slot width and gap calculation
  const [cardWidth, setCardWidth] = useState(340);
  const [gap, setGap] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(220);
        setGap(16);
      } else if (window.innerWidth < 1024) {
        setCardWidth(280);
        setGap(24);
      } else {
        setCardWidth(340);
        setGap(32);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = TEAM_MEMBERS.length;
  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(total - 1, i + 1));

  // Center translation calculation
  const translateX = `calc(50vw - ${activeIndex * (cardWidth + gap) + cardWidth / 2}px)`;

  return (
    <section className="bg-white w-full overflow-hidden flex flex-col items-center py-16 sm:py-20 lg:py-24">
      {/* ── Eyebrow Header ── */}
      <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
        <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#275ff9] rounded-[1px] shrink-0" />
        <span className="font-mono text-[#275ff9] font-semibold text-[13px] sm:text-[15px] lg:text-[18px] tracking-[0.25em] uppercase">
          Our Team
        </span>
      </div>

      {/* ── Main Headline ── */}
      <h2 className="font-oswald text-[#10296e] font-normal text-center text-[32px] sm:text-[46px] md:text-[56px] lg:text-[72px] lg:leading-[80px] leading-[1.1] mb-5 sm:mb-6 px-4">
        Expertise. Perspective. Execution.
      </h2>

      {/* ── Description ── */}
      <p className="font-tasa-orbiter text-[#6d7280] font-normal text-center text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] max-w-[780px] mx-auto mb-12 lg:mb-16 px-6">
        Our multidisciplinary team brings together experience across investment banking, finance, law, valuation, and strategic advisory - working collaboratively to support businesses through growth, transformation, and complex transactions.
      </p>

      {/* ── Slider Track Container ── */}
      <div className="w-full relative pb-28 sm:pb-32 lg:pb-36">
        <div
          className="flex items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(${translateX})`,
            gap: `${gap}px`,
          }}
        >
          {TEAM_MEMBERS.map((member, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={member.name}
                onClick={() => setActiveIndex(idx)}
                className="flex-shrink-0 relative flex flex-col items-start select-none cursor-pointer"
                style={{
                  width: `${cardWidth}px`,
                }}
              >
                {/* Image Container with Rounded Corners & Scale Transition */}
                <div
                  className={`relative w-full aspect-[13/15] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "scale-[1.15] lg:scale-[1.22] z-10 shadow-lg opacity-100"
                      : "scale-[0.92] lg:scale-[0.95] z-0 opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
                    className="object-cover pointer-events-none"
                    priority={idx === 1}
                  />
                </div>

                {/* Text Block - Absolute below to center images without layout displacement */}
                <div
                  className={`absolute left-0 w-[140%] sm:w-[120%] text-left pl-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "opacity-100 translate-y-6 sm:translate-y-8 lg:translate-y-10"
                      : "opacity-0 translate-y-0 pointer-events-none"
                  }`}
                >
                  <h3 className="font-oswald text-[#1a1a1a] font-bold text-[22px] sm:text-[25px] lg:text-[28px] leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-tasa-orbiter text-[#6d7280] font-medium text-[12px] sm:text-[13px] lg:text-[14px] uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Navigation Buttons ── */}
      <div className="max-w-[1440px] w-full flex justify-end gap-3 px-6 sm:px-12 lg:px-20 mt-4">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          onMouseEnter={() => setHoveredPrev(true)}
          onMouseLeave={() => setHoveredPrev(false)}
          className="flex items-center justify-center size-[56px] sm:size-[64px] lg:size-[70px] rounded-full border border-[#10296e] transition-colors duration-200"
          style={{
            backgroundColor: hoveredPrev && activeIndex !== 0 ? "#10296e" : "transparent",
            opacity: activeIndex === 0 ? 0.35 : 1,
            cursor: activeIndex === 0 ? "not-allowed" : "pointer",
          }}
          aria-label="Previous team member"
        >
          <ArrowLeft inverted={hoveredPrev && activeIndex !== 0} />
        </button>
        <button
          onClick={next}
          disabled={activeIndex === total - 1}
          onMouseEnter={() => setHoveredNext(true)}
          onMouseLeave={() => setHoveredNext(false)}
          className="flex items-center justify-center size-[56px] sm:size-[64px] lg:size-[70px] rounded-full border border-[#10296e] transition-colors duration-200"
          style={{
            backgroundColor: hoveredNext && activeIndex !== total - 1 ? "#10296e" : "transparent",
            opacity: activeIndex === total - 1 ? 0.35 : 1,
            cursor: activeIndex === total - 1 ? "not-allowed" : "pointer",
          }}
          aria-label="Next team member"
        >
          <ArrowRight inverted={hoveredNext && activeIndex !== total - 1} />
        </button>
      </div>
    </section>
  );
}
