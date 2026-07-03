"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Viewport hook ────────────────────────────────────────────────────────────
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── SVG Icons (viewBox 0 0 90 90, thin white strokes on navy) ───────────────

function IconStackedSquares({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" aria-hidden className={className}>
      <rect x="18" y="17.1" width="43.2" height="43.2" stroke="white" strokeWidth="0.9" />
      <rect x="23.4" y="23.4" width="43.2" height="43.2" stroke="white" strokeWidth="0.9" />
      <rect x="28.8" y="29.7" width="43.2" height="43.2" stroke="white" strokeWidth="0.9" />
    </svg>
  );
}

function IconNestedDiamonds({ className }: { className?: string }) {
  const c = 45;
  const sizes = [50.4, 43.2, 36, 28.8, 21.6, 14.4];
  return (
    <svg viewBox="0 0 90 90" fill="none" aria-hidden className={className}>
      {sizes.map((s, i) => (
        <rect
          key={i}
          x={c - s / 2}
          y={c - s / 2}
          width={s}
          height={s}
          transform={`rotate(-45 ${c} ${c})`}
          stroke="white"
          strokeWidth="0.9"
        />
      ))}
      <rect
        x={c - 3.6}
        y={c - 3.6}
        width="7.2"
        height="7.2"
        transform={`rotate(-45 ${c} ${c})`}
        fill="white"
      />
    </svg>
  );
}

function IconConcentricCrosshair({ className }: { className?: string }) {
  // const c = 45;
  return (
    <Image src="/complexDecision/concentric-crosshair.svg" alt="" width={90} height={90} className={className} />

  );
}

function IconNestedTriangles({ className }: { className?: string }) {
  // const c = 45;
  // const tiers = [
  //   [c, 14, 12, 78],
  //   [c, 28, 24, 66],
  //   [c, 41, 36, 54],
  // ] as const;
  return (
   
<Image src="/complexDecision/nested-triangles.svg" alt="" width={90} height={90} className={className} />

  );
}

function IconRadiantStar({ className }: { className?: string }) {
  // const c = 45;
  // const outerR = 30; 
  // const spokes = 6;
  return (
   
<Image src="/complexDecision/radiant-star.svg" alt="" className= "ml-2" width={90} height={90}  />
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    Icon: IconStackedSquares,
    headline: "We solve first.\nThen we structure.",
    body: "Every engagement begins with understanding the problem - not with pushing a product. We don't arrive with a pre-built solution. We arrive with questions, and we design the structure around the answer.",
  },
  {
    Icon: IconNestedDiamonds,
    headline: "One team.\nNo handoffs.",
    body: "Merchant bankers, CAs, lawyers, valuers - working together on your transaction, not in sequence. The person who understands your deal is the one who closes it. Complex transactions demand this. We're built for it.",
  },
  {
    Icon: IconConcentricCrosshair,
    headline: "Honest before\noptimistic.",
    body: "We tell you what the market can support - not what you want to hear. Getting the mandate matters less to us than getting the outcome right. That is why clients come back, and why they refer others.",
  },
  {
    Icon: IconNestedTriangles,
    headline: "We stay\nuntil it closes.",
    body: "Advisory doesn't end at term sheet. We stay through documentation, regulatory steps, and every complication in between. A SkyBridge partner is in the room at every critical moment - because that's when it counts.",
  },
  {
    Icon: IconRadiantStar,
    headline: "When the standard structure doesn't fit, we build a new one.",
    body: "We work with the full toolkit - not just the obvious instruments - because the right structure is the one that actually gets the deal done.",
  },
] as const;

const L_PAD = 80;     // px — Figma pl-[80px]
const VISIBLE = 3.25; // cards visible at once on desktop

// ─── Component ────────────────────────────────────────────────────────────────

export default function ComplexDecision() {
  const { ref: desktopRef, inView: desktopInView } = useInView();
  const { ref: mobileRef,  inView: mobileInView  } = useInView();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);

  // Animation helpers
  const makeSlideProps = (inView: boolean) =>
    (delay: number, extra = "") => ({
      className: `${extra} ${inView ? "cd-slide-in" : "opacity-0 -translate-x-10"}`.trim(),
      style: (inView ? { animationDelay: `${delay}s` } : {}) as React.CSSProperties,
    });

  const makeSlitProps = (inView: boolean) =>
    (delay: number, extra = "") => ({
      className: `${extra} ${inView ? "cd-slit-in" : "opacity-0"}`.trim(),
      style: (inView ? { animationDelay: `${delay}s` } : {}) as React.CSSProperties,
    });

  const makeLineProps = (inView: boolean) =>
    (delay: number) => ({
      className: `flex-1 h-px bg-white/20 ${inView ? "cd-line-grow" : "opacity-0"}`,
      style: (inView ? { animationDelay: `${delay}s` } : {}) as React.CSSProperties,
    });

  // ── Scroll-driven horizontal pan (desktop only) ──────────────────────────────
  useEffect(() => {
    let cur = 0;
    let tgt = 0;
    let raf: number;

    const tick = () => {
      const diff = tgt - cur;
      if (Math.abs(diff) > 0.05) {
        cur += diff * 0.1;
        if (stripRef.current) {
          stripRef.current.style.transform = `translateX(${-cur}px)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!wrapperRef.current || window.innerWidth < 1024) {
        tgt = 0;
        return;
      }
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollable = wrapperRef.current.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const cardW = (window.innerWidth - L_PAD) / VISIBLE;
      tgt = progress * (CARDS.length - VISIBLE) * cardW;
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const desktopSlide = makeSlideProps(desktopInView);
  const desktopSlit  = makeSlitProps(desktopInView);
  const desktopLine  = makeLineProps(desktopInView);
  const mobileSlide  = makeSlideProps(mobileInView);
  const mobileSlit   = makeSlitProps(mobileInView);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP (≥1024px): sticky pinned section + horizontal scroll strip
         ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={wrapperRef}
        className="hidden lg:block relative"
        style={{ height: "300vh" }}
      >
        <section
          ref={desktopRef as React.RefObject<HTMLElement>}
          className="sticky top-0 h-screen overflow-hidden bg-[#10296e] w-full flex flex-col justify-between py-25"
          style={{ paddingLeft: `${L_PAD}px` }}
        >
          {/* ── Header — top-anchored (Figma: gap-[24px] between label + heading) ── */}
          <div className="flex flex-col gap-6 shrink-0 pr-20">
            <div {...desktopSlide(0, "flex items-center gap-2.5")}>
              <div className="w-2.5 h-2.5 bg-white rounded-[1px] shrink-0" />
              <span className="font-ibm-mono text-white text-sm font-semibold tracking-[0.3em] uppercase">
                The SkyBridge Difference
              </span>
            </div>
            <div {...desktopSlide(0.08)}>
              <h2
                className="font-oswald text-white font-normal capitalize"
                style={{ fontSize: "clamp(40px, 4.17vw, 80px)", lineHeight: 1.075 }}
              >
                Built for Complex Decisions.
              </h2>
            </div>
          </div>

          {/* ── Content strip — icon row + text row scroll together ── */}
          {/*    Figma: gap-[77px] between icon row and text columns    */}
          <div
            ref={stripRef}
            className="flex flex-col shrink-0"
            style={{ gap: "clamp(40px, 4vw, 77px)", willChange: "transform" }}
          >
            {/* Icon row — each slot matches one card width */}
            <div className="flex items-center shrink-0">
              {CARDS.map((card, i) => {
                const lp = desktopLine(0.18 + i * 0.1);
                return (
                  <div
                    key={i}
                    className="flex items-center shrink-0"
                    style={{ width: `calc((100vw - ${L_PAD}px) / ${VISIBLE})` }}
                  >
                    <div {...desktopSlit(0.18 + i * 0.1, "shrink-0")}>
                      <card.Icon className="w-22.5 h-22.5" />
                    </div>
                    {/* Figma: gap-[41px] between icon and line */}
                    {i < CARDS.length - 1 && (
                      <div
                        className={lp.className}
                        style={{ ...lp.style, marginLeft: "clamp(20px, 2.13vw, 41px)" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Text row — Figma: 30px / lh-45 headline, 25px / lh-40 body, gap-80 between */}
            <div className="flex items-start shrink-0">
              {CARDS.map((card, i) => {
                const sd = desktopSlide(0.35 + i * 0.1);
                const bd = desktopSlide(0.45 + i * 0.1);
                return (
                  <div
                    key={i}
                    className="flex flex-col shrink-0"
                    style={{
                      width: `calc((100vw - ${L_PAD}px) / ${VISIBLE})`,
                      gap: "clamp(40px, 4.17vw, 80px)",
                      paddingRight: "clamp(20px, 2.08vw, 40px)",
                    }}
                  >
                    <h3
                      className={`font-tasa-orbiter text-white uppercase whitespace-pre-line ${sd.className}`}
                      style={{ ...sd.style, fontSize: "clamp(18px, 1.5625vw, 30px)", lineHeight: 1.5 }}
                    >
                      {card.headline}
                    </h3>
                    <p
                      className={`font-tasa-orbiter text-[#dedede] ${bd.className}`}
                      style={{ ...bd.style, fontSize: "clamp(15px, 1.302vw, 25px)", lineHeight: 1.6 }}
                    >
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE / TABLET (<1024px): normal flow, vertical stack
         ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={mobileRef as React.RefObject<HTMLElement>}
        className="lg:hidden bg-[#10296e] w-full pl-12 pr-8 sm:pl-16 sm:pr-12 pt-14 sm:pt-16 pb-16 sm:pb-20 flex flex-col gap-10 sm:gap-12 overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-5 shrink-0">
          <div {...mobileSlide(0, "flex items-center gap-2.5")}>
            <div className="w-2.5 h-2.5 bg-white rounded-[1px] shrink-0" />
            <span className="font-ibm-mono text-white text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              The SkyBridge Difference
            </span>
          </div>
          <div {...mobileSlide(0.08)}>
            <h2
              className="font-oswald text-white font-normal capitalize"
              style={{ fontSize: "clamp(32px, 5.5vw, 56px)", lineHeight: 1.08 }}
            >
              Built for Complex Decisions.
            </h2>
          </div>
        </div>

        {/* Icon row — free-scrolling, icons connected by a line (mirrors the desktop strip) */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory pb-2 -ml-12 pl-12 -mr-8 pr-8 sm:-ml-16 sm:pl-16 sm:-mr-12 sm:pr-12 shrink-0"
          style={{ scrollbarWidth: "none" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 snap-start"
              style={{ width: i < CARDS.length - 1 ? "80%" : "auto" }}
            >
              <div {...mobileSlit(0.15 + i * 0.07, "shrink-0")}>
                <card.Icon className="w-14 h-14 sm:w-18 sm:h-18" />
              </div>
              {i < CARDS.length - 1 && (
                <div className="flex-1 h-px bg-white/20 ml-6 sm:ml-8" />
              )}
            </div>
          ))}
        </div>

        {/* Text cards — horizontally swipeable strip, next card peeks at the edge */}
        <div
          className="flex items-stretch gap-6 sm:gap-10 overflow-x-auto snap-x snap-mandatory pb-2 -ml-12 pl-12 -mr-8 pr-8 sm:-ml-16 sm:pl-16 sm:-mr-12 sm:pr-12"
          style={{ scrollbarWidth: "none" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              {...mobileSlide(0.2 + i * 0.07, "flex flex-col gap-3 shrink-0 w-[80%] sm:w-[46%] snap-start")}
            >
              <h3 className="font-tasa-orbiter text-white uppercase whitespace-pre-line leading-[1.45] text-[17px] sm:text-[20px]">
                {card.headline}
              </h3>
              <p className="font-tasa-orbiter text-[#dedede] leading-[1.65] text-[13px] sm:text-[14px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
