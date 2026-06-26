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
    image: "/carouselcards/Card 2.png",
    bgImage: "/carouselbgimage/2.png",
  },
  {
    id: 2,
    title: "Strategic Advisory",
    subtitle: "From idea to\nexecution",
    bullets: [
      ["M&A Advisory", "Restructuring"],
      ["Valuation Services"],
    ],
    image: "/carouselcards/Card 3.png",
    bgImage: "/carouselbgimage/4.png",
  },
  {
    id: 3,
    title: "Private Wealth",
    subtitle: "Preserve and\ngrow capital",
    bullets: [
      ["Portfolio Strategy", "Alternative Investments"],
      ["Family Office Setup"],
    ],
    image: "/carouselcards/Card 4 (Partial)-1.png",
    bgImage: "/carouselbgimage/5.png",
  },
  {
    id: 4,
    title: "Transaction Support",
    subtitle: "Every detail,\ndelivered",
    bullets: [
      ["Due Diligence", "Legal Coordination"],
      ["Regulatory Compliance"],
    ],
    image: "/carouselcards/Card 4 (Partial)-2.png",
    bgImage: "/carouselbgimage/2.png",
  },
  {
    id: 5,
    title: "Capital Advisory",
    subtitle: "Unlocking value\nat every stage",
    bullets: [
      ["Growth Capital", "Fund Structuring"],
      ["Exit Strategy"],
    ],
    image: "/carouselcards/Card 4 (Partial).png",
    bgImage: "/gateway.png",
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

  // Mobile: show ~2.3 cards in the strip; desktop: fixed 220px
  const isMobile = windowW > 0 && windowW < 1024;
  const CARD_W = isMobile ? Math.max(130, Math.round(windowW * 0.43)) : 220;
  const STRIP_H = isMobile ? 220 : 400;

  const go = useCallback(
    (direction: Dir, newIdx: number) => {
      if (busy) return;
      setBusy(true);
      setDir(direction);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setActiveIdx(newIdx);
        setDir(null);
        setBusy(false);
      }, ANIM_MS);
    },
    [busy]
  );

  const next = () => go("next", (activeIdx + 1) % SERVICES.length);
  const prev = () => go("prev", (activeIdx - 1 + SERVICES.length) % SERVICES.length);

  const active = SERVICES[activeIdx];

  const ordered = Array.from(
    { length: SERVICES.length },
    (_, i) => SERVICES[(activeIdx + i) % SERVICES.length]
  );

  return (
    <section
      className="relative w-full bg-[#080c14] select-none overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ══════════════ DYNAMIC BACKGROUND ══════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {SERVICES.map((svc, i) => {
          const bgSrc = svc.bgImage ?? svc.image;
          return (
            <div
              key={svc.id}
              className="absolute inset-0"
              style={{
                opacity: i === activeIdx ? 1 : 0,
                transition: "opacity 0.9s ease",
              }}
            >
              <Image
                src={bgSrc}
                alt={svc.title}
                fill
                className="object-fill object-center"
                priority={i === 0}
                sizes="100vw"
              />
              {/* Heavy left vignette to protect text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/95 via-[#080c14]/65 to-[#080c14]/10" />
              <div className="absolute inset-0 bg-[#080c14]/30" />
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
        <div className="flex flex-col gap-5 px-6 sm:px-10 lg:px-16 xl:px-20 pt-14 pb-6 lg:py-24">

          {/* Section label */}
          <div className="flex items-center gap-2 text-blue-400 text-[11px] font-semibold tracking-[0.35em] uppercase">
            <span className="inline-block w-2 h-2 bg-blue-400 rounded-[2px]" />
            Our Services
          </div>

          {/* Heading */}
          <div className="overflow-hidden">
            <h2
              key={`h-${activeIdx}`}
              className="services-slide-left text-white font-oswald uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(36px, 7.5vw, 108px)" }}
            >
              {active.title}
            </h2>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <p
              key={`s-${activeIdx}`}
              className="services-slide-left-delay text-white/70 font-light italic leading-snug whitespace-pre-line text-base lg:text-lg xl:text-[clamp(18px,1.9vw,28px)]"
            >
              {active.subtitle}
            </p>
          </div>

          {/* Accent line */}
          <div className="w-14 h-px bg-gradient-to-r from-blue-400 to-transparent" />

          {/* Bullets — flat single column on mobile, grouped rows on desktop */}
          <div key={`b-${activeIdx}`} className="services-fade-in flex flex-col gap-2">
            {/* On mobile flatten to single column; on desktop keep original row groups */}
            <div className="lg:hidden flex flex-col gap-2">
              {active.bullets.flat().map((item) => (
                <span key={item} className="flex items-center gap-2 text-white/55 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
            <div className="hidden lg:flex flex-col gap-2">
              {active.bullets.map((row, ri) => (
                <div key={ri} className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {row.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-white/55 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT / BOTTOM: CAROUSEL ─── */}
        <div className="flex flex-col gap-5 lg:gap-8 pb-12 lg:py-24 overflow-hidden">

          {/* Card strip
              - `overflow: visible` so 5th card bleeds off right edge
              - Section `overflow-hidden` clips it at the boundary
              - pl-6 on mobile so cards start with a bit of left padding (matches Figma)
          */}
          <div
            className="flex gap-3 lg:gap-4 items-stretch pl-6 lg:pl-0"
            style={{ height: STRIP_H, overflow: "visible" }}
          >
            {ordered.slice(0, VISIBLE_COUNT).map((svc, slotIdx) => (
              <CarouselCard
                key={`${svc.id}-${activeIdx}`}
                service={svc}
                slotIndex={slotIdx}
                totalVisible={VISIBLE_COUNT}
                dir={dir}
                animMs={ANIM_MS}
                cardWidth={CARD_W}
              />
            ))}
          </div>

          {/* Navigation: prev / next arrows + progress bar + counter */}
          <div className="flex items-center gap-4 pl-6 lg:pl-1">
            <button
              onClick={prev}
              disabled={busy}
              aria-label="Previous service"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/25 flex items-center justify-center text-white/60 hover:border-blue-400/70 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              disabled={busy}
              aria-label="Next service"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/25 flex items-center justify-center text-white/60 hover:border-blue-400/70 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Progress bar */}
            <div className="flex-1 h-px bg-white/15 relative rounded-full overflow-hidden max-w-[380px]">
              <div
                className="absolute left-0 top-0 h-full bg-blue-400 rounded-full"
                style={{
                  width: `${((activeIdx + 1) / SERVICES.length) * 100}%`,
                  transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>

            {/* Counter */}
            <span className="text-white/40 text-sm font-mono tabular-nums tracking-widest">
              {String(activeIdx + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CarouselCard
// ─────────────────────────────────────────────────────────────
interface CarouselCardProps {
  service: ServiceItem;
  slotIndex: number;
  totalVisible: number;
  dir: Dir;
  animMs: number;
  cardWidth: number;
}

function CarouselCard({ service, slotIndex, dir, animMs, cardWidth }: CarouselCardProps) {
  // Brightness falls off for cards further from active
  const brightnessSteps = [1, 0.82, 0.65, 0.45, 0.28];
  const brightness = brightnessSteps[slotIndex] ?? 0.2;

  let animClass = "";
  if (dir !== null) {
    animClass = dir === "next" ? "services-card-in-up" : "services-card-in-down";
  }

  return (
    <div
      className={`relative flex-shrink-0 overflow-hidden rounded-2xl group cursor-pointer ${animClass}`}
      style={{
        width: cardWidth,
        height: "100%",
        filter: `brightness(${brightness})`,
        transition: `filter ${animMs}ms ease`,
        animationDuration: `${animMs}ms`,
      }}
    >
      {/* Card image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 1023px) 44vw, 22vw"
      />

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 35%, transparent 65%)",
        }}
      />

      {/* Card label */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-[2]">
        <h3 className="text-white font-oswald uppercase leading-[1.15] tracking-wide text-[11px] lg:text-[13px] font-semibold">
          {service.title}
        </h3>
      </div>

      {/* Subtle card border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-blue-400/30 transition-all duration-300 pointer-events-none z-[3]" />
    </div>
  );
}
