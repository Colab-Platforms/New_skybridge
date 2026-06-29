"use client";

import React, { useState } from "react";

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Lucas Benjamin",
    role: "Chief Talent Officer",
    image: "https://picsum.photos/seed/test-01/600/600",
    quote:
      "SkyBridge brought a level of precision and depth to our deal that we hadn't experienced before. They didn't just advise — they became part of the team, working through every complexity until we had a structure that actually served our goals.",
  },
  {
    name: "Priya Mehta",
    role: "Managing Director, Growth Capital Partners",
    image: "https://picsum.photos/seed/test-02/600/600",
    quote:
      "What set SkyBridge apart was their willingness to be honest before being optimistic. They told us what the market would bear, not what we wanted to hear. That discipline is rare — and it saved us from a structure that would have failed at closing.",
  },
  {
    name: "James Forsythe",
    role: "CEO, NovaBuild Infrastructure",
    image: "https://picsum.photos/seed/test-03/600/600",
    quote:
      "The seamless coordination between their legal, financial, and strategic teams meant we never experienced the gaps that come from traditional advisory. One team, one view, one outcome — exactly what a complex transaction demands.",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  const total = TESTIMONIALS.length;
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(total - 1, i + 1));

  const cardPad = "clamp(24px, 3.255vw, 62.5px)";
  const cardGap = "clamp(24px, 3.255vw, 62.5px)";

  return (
    <section
      className="bg-white w-full flex flex-col items-center"
      style={{
        paddingTop: "clamp(60px, 5.21vw, 100px)",
        paddingBottom: "clamp(60px, 5.21vw, 100px)",
        paddingLeft: "clamp(24px, 4.17vw, 80px)",
        paddingRight: "clamp(24px, 4.17vw, 80px)",
        gap: "clamp(32px, 4.06vw, 78px)",
      }}
    >
      {/* ── Header ── */}
      <div
        className="flex flex-col items-center gap-6 text-center w-full"
        style={{ maxWidth: 720 }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#275ff9] rounded-[1px] shrink-0" />
          <span
            className="font-ibm-mono text-[#275ff9] font-semibold tracking-[0.3em] uppercase"
            style={{ fontSize: "clamp(14px, 1.261vw, 24px)" }}
          >
            Testimonials
          </span>
        </div>
        <h2
          className="font-oswald text-[#10296e] font-normal capitalize text-center w-full"
          style={{ fontSize: "clamp(36px, 4.17vw, 80px)", lineHeight: 1.075 }}
        >
          What Our Clients Say About Working With Us
        </h2>
      </div>

      {/* ── Slider area ── */}
      <div className="flex flex-col w-full" style={{ gap: "clamp(20px, 2.08vw, 40px)" }}>
        {/* Track */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: cardGap,
              transform: `translateX(calc(-${index} * (80% + 0.2 * ${cardGap})))`,
              transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ flexShrink: 0, width: `calc(80% - 0.8 * ${cardGap})` }}>
                {/* Card */}
                <div
                  className="w-full flex flex-col lg:flex-row items-start lg:items-center bg-[#f6f6f6] rounded-[10.417px]"
                  style={{
                    padding: cardPad,
                    gap: cardGap,
                  }}
                >
                  {/* Portrait */}
                  <div
                    className="shrink-0 overflow-hidden rounded-[10.417px] aspect-square"
                    style={{ width: "clamp(160px, 23.86vw, 458px)" }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    {/* Quote mark */}
                    <div
                      className="overflow-hidden shrink-0 w-full"
                      style={{ height: "clamp(44px, 4.34vw, 83px)" }}
                    >
                      <span
                        className="font-oswald font-bold text-[#1a1a1a] block leading-none"
                        style={{ fontSize: "clamp(56px, 5.425vw, 104px)" }}
                      >
                        &ldquo;
                      </span>
                    </div>

                    {/* Testimonial text */}
                    <p
                      className="font-tasa-orbiter text-[#1a1a1a]"
                      style={{
                        fontSize: "clamp(18px, 1.628vw, 31.25px)",
                        lineHeight: 1.333,
                        marginBottom: "clamp(20px, 2.17vw, 41.667px)",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Divider */}
                    <div
                      className="w-full border-t border-[#e0e0e0] shrink-0"
                      style={{ marginBottom: "clamp(16px, 1.628vw, 31.25px)" }}
                    />

                    {/* Speaker */}
                    <div className="flex flex-col gap-1.5">
                      <span
                        className="font-tasa-orbiter font-bold text-[#1a1a1a]"
                        style={{ fontSize: "clamp(16px, 1.356vw, 26px)" }}
                      >
                        {t.name}
                      </span>
                      <span
                        className="font-tasa-orbiter text-[#6b7280]"
                        style={{ fontSize: "clamp(12px, 0.949vw, 18px)" }}
                      >
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 justify-end w-full">
          <button
            onClick={prev}
            disabled={index === 0}
            onMouseEnter={() => setHoveredPrev(true)}
            onMouseLeave={() => setHoveredPrev(false)}
            className="flex items-center justify-center size-[70px] rounded-full border border-[#10296e] transition-colors duration-200"
            style={{
              backgroundColor: hoveredPrev && index !== 0 ? "#10296e" : "transparent",
              opacity: index === 0 ? 0.4 : 1,
              cursor: index === 0 ? "not-allowed" : "pointer",
            }}
            aria-label="Previous testimonial"
          >
            <ArrowLeft inverted={hoveredPrev && index !== 0} />
          </button>
          <button
            onClick={next}
            disabled={index === total - 1}
            onMouseEnter={() => setHoveredNext(true)}
            onMouseLeave={() => setHoveredNext(false)}
            className="flex items-center justify-center size-[70px] rounded-full border border-[#10296e] transition-colors duration-200"
            style={{
              backgroundColor: hoveredNext && index !== total - 1 ? "#10296e" : "transparent",
              opacity: index === total - 1 ? 0.4 : 1,
              cursor: index === total - 1 ? "not-allowed" : "pointer",
            }}
            aria-label="Next testimonial"
          >
            <ArrowRight inverted={hoveredNext && index !== total - 1} />
          </button>
        </div>
      </div>
    </section>
  );
}
