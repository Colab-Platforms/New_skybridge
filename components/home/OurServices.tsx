"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// Service data
// ─────────────────────────────────────────────────────────────
interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  bullets: string[][];
  image: string;
  bgImage?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Capital Markets",
    subtitle: "From private capital to\npublic markets",
    bullets: [
      ["Credit Solutions", "Private Equity Syndication"],
      ["Equity Capital Markets"],
    ],
    image: "/carouselcards/card1.png",
    bgImage: "/carouselbgimage/1.png",
  },
  {
    id: 2,
    title: "Strategic Transactions",
    subtitle: "When the next move\ndefines what’s next",
    bullets: [
      ["Acquisitions", "Takeovers"],
      ["Strategic Investments", "Buyouts  "],
    ],
    image: "/carouselcards/card2.png",
    bgImage: "/carouselbgimage/4.png",
  },
  {
    id: 3,
    title: "Cross-Border capital",
    subtitle: "Capital without borders",
    bullets: [
      ["Foreign Direct Investment", "Overseas Direct Investment"],
      ["International Expansion","Cross-Border Partnerships"],
    ],
    image: "/carouselcards/card3.png",
    bgImage: "/carouselbgimage/3.png",
  },
  {
    id: 4,
    title: "Restructuring & Turnaround",
    subtitle: "Repositioning businesses for sustainable growth",
    bullets: [
      ["Business Restructuring", "Capital Restructuring"],
      ["Debt Rationalization", "Turnaround Strategies"],
    ],
    image: "/carouselcards/card4.png",
    bgImage: "/carouselbgimage/4.png",
  },
  {
    id: 5,
    title: "Joint Ventures & Consortiums",
    subtitle: "Building Stronger platforms together",
    bullets: [
      ["Joint Ventures", "Consortium Investments"],
      ["Strategic Alliances" , "Co-Investments"],
    ],
    image: "/carouselcards/card5.png",
    bgImage: "/carouselbgimage/5.png",
  },
];

const VISIBLE_COUNT = 5;
const ANIM_MS = 520;
type Dir = "next" | "prev" | null;

// ─────────────────────────────────────────────────────────────
export default function OurServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState<Dir>(null);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Responsive card sizing: track window width
  const [windowW, setWindowW] = useState(0);
  useEffect(() => {
    const update = () => setWindowW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Mobile: show ~2.3 cards in the strip; desktop: fixed 283px (Figma spec)
  const isMobile = windowW > 0 && windowW < 1024;
  const CARD_W = isMobile ? Math.max(120, Math.round(windowW * 0.43)) : 283;
  const STRIP_H = isMobile ? 220 : 412;

  const go = useCallback(
    (direction: Dir, newIdx: number) => {
      if (busy) return;
      setBusy(true);
      setActiveIdx(newIdx);
      setDir(direction);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setDir(null);
        setBusy(false);
      }, 850);
    },
    [busy]
  );

  const next = () => go("next", (activeIdx + 1) % SERVICES.length);
  const prev = () => go("prev", (activeIdx - 1 + SERVICES.length) % SERVICES.length);

  const active = SERVICES[activeIdx];

  // Split subtitle: first part normal, second part Playfair italic
  const [subtitleLine1, subtitleLine2] = active.subtitle.split("\n");

  return (
    <section
      className="relative w-full bg-[#0d0a07] select-none overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ══════════════ DYNAMIC BACKGROUND ══════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {SERVICES.map((svc, i) => {
          const bgSrc = svc.bgImage ?? svc.image;
          const isActive = i === activeIdx;
          return (
            <div
              key={svc.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "bg-spread-active z-10" : "opacity-0 z-0"}`}
            >
              <Image
                src={bgSrc}
                alt={svc.title}
                fill
                className="object-cover object-center"
                priority={i === 0}
                sizes="100vw"
              />
              {/* Heavy left vignette to protect text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/95 via-[#1a1410]/65 to-[#1a1410]/10 z-10" />
              <div className="absolute inset-0 bg-[#1a1410]/30 z-10" />
            </div>
          );
        })}
      </div>

      {/* ══════════════ MAIN LAYOUT ══════════════
          Desktop: left 2fr (text) | right 3fr (carousel)
          Mobile:  single column — text stacked above carousel
      */}
      <div
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center"
        style={{ minHeight: "100svh" }}
      >
        {/* ─── LEFT / TOP: TEXT CONTENT ─── */}
        <div className="flex flex-col gap-6 px-6 sm:px-10 lg:px-16 xl:px-20 pt-14 pb-6 lg:py-24">

          {/* Section label */}
          <div className="flex items-center gap-2 text-[11px] lg:text-[13px] font-semibold tracking-[0.35em]  font-ibm-mono ">
            <span className="inline-block w-2.5 h-2.5 bg-[#275ff9] rounded-[2px] flex-shrink-0" />
            <span className="text-white ">Our Services</span>
          </div>

          {/* Heading */}
          <div className="overflow-hidden">
            <h2
              key={`h-${activeIdx}`}
              className="services-slide-left text-white font-oswald font-medium uppercase leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(40px, 5.5vw, 70px)" }}
            >
              {active.title}
            </h2>
          </div>

          {/* Subtitle — mixed fonts: TASA Orbiter + Playfair italic */}
          <div className="overflow-hidden">
            <p
              key={`s-${activeIdx}`}
              className="services-slide-left-delay text-[#d1d5db] font-tasa-orbiter font-semibold leading-snug"
              style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}
            >
              {subtitleLine1}{" "}
              <span className="font-semibold font-playfair italic">{subtitleLine2}</span>
            </p>
          </div>

          {/* Bullets — pill badge style */}
          <div key={`b-${activeIdx}`} className="services-fade-in flex flex-col gap-3">
            {active.bullets.map((row, ri) => (
              <div key={ri} className="flex flex-wrap gap-3">
                {row.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-[5px]"
                    style={{
                      background: "linear-gradient( rgb(99 97 95 / 50%), rgba(255,255,255,0))",
                    }}
                  >
                    <span className="w-[7px] h-[7px] rounded-[1px] bg-white flex-shrink-0" />
                    <span className="text-[#d1d5db] font-tasa-orbiter text-sm lg:text-lg whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT / BOTTOM: CAROUSEL ─── */}
        <div className="flex flex-col gap-5 lg:gap-8 pb-12 lg:py-24 overflow-hidden">

          {/* Card strip */}
          <div
            className="relative pl-6 lg:pl-0"
            style={{ height: STRIP_H, width: "100%" }}
          >
            {SERVICES.map((svc, i) => {
              const relIdx = (i - activeIdx + SERVICES.length) % SERVICES.length;
              const brightnessSteps = [1, 0.82, 0.65, 0.45, 0.28];
              const brightness = brightnessSteps[relIdx] ?? 0.2;
              const gap = isMobile ? 14 : 23;

              return (
                <div
                  key={svc.id}
                  onClick={() => go(null, i)}
                  className="absolute top-0 left-0 h-full rounded-[19px] overflow-hidden group cursor-pointer"
                  style={{
                    width: CARD_W,
                    transform: `translateX(${relIdx * (CARD_W + gap)}px)`,
                    filter: `brightness(${brightness})`,
                    transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease, opacity 0.85s ease`,
                    boxShadow: "0px 40px 80px -19px rgba(0,0,0,0.25)",
                    zIndex: SERVICES.length - relIdx,
                    opacity: relIdx >= 4 ? 0 : 1,
                    pointerEvents: relIdx >= 4 ? "none" : "auto",
                  }}
                >
                  {/* Card image */}
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1023px) 44vw, 22vw"
                  />

                  {/* Bottom gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-[1]"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 35%, transparent 65%)",
                    }}
                  />

                  {/* Card label */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 lg:px-6 lg:pb-6 z-[2]">
                    <h3
                      className="text-white font-oswald font-bold uppercase leading-[1.25] tracking-wide"
                      style={{ fontSize: "clamp(14px, 1.5vw, 22px)" }}
                    >
                      {svc.title}
                    </h3>
                  </div>

                  {/* Subtle card border */}
                  <div className="absolute inset-0 rounded-[19px] border border-white/10 group-hover:border-blue-400/30 transition-all duration-300 pointer-events-none z-[3]" />
                </div>
              );
            })}
          </div>

          {/* Navigation: prev / next arrows + progress bar + counter */}
          <div className="flex items-center gap-4 pl-6 lg:pl-1">
            <button
              onClick={prev}
              disabled={busy}
              aria-label="Previous service"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-slategray flex items-center justify-center text-white/60 hover:border-blue-400/70 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group flex-shrink-0"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              disabled={busy}
              aria-label="Next service"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-slategray flex items-center justify-center text-white/60 hover:border-blue-400/70 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group flex-shrink-0"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Progress bar */}
            <div className="flex-1 h-[3px] bg-[#d1d5db]/30 relative rounded-full overflow-hidden max-w-[380px]">
              <div
                className="absolute left-0 top-0 h-full bg-[#708ddf] rounded-full"
                style={{
                  width: `${((activeIdx + 1) / SERVICES.length) * 100}%`,
                  transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>

            {/* Counter — large Oswald Bold */}
            <span
              className="text-white/80 font-oswald font-bold tracking-[-0.05em] tabular-nums flex-shrink-0"
              style={{ fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1 }}
            >
              {String(activeIdx + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
