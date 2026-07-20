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

// ─── Scroll-driven horizontal pin/pan ────────────────────────────────────────
type ScrollPinOptions = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  stripRef: React.RefObject<HTMLDivElement | null>;
  isActive: () => boolean;
  visible: number;
  lPad: () => number;
  stickyHeight?: () => number;
  translateNextSibling?: boolean;
};

function useScrollPin({
  wrapperRef,
  stripRef,
  isActive,
  visible,
  lPad,
  stickyHeight,
  translateNextSibling,
}: ScrollPinOptions) {
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
      if (!wrapperRef.current) return;

      const sibling = translateNextSibling
        ? (wrapperRef.current.nextElementSibling as HTMLElement | null)
        : null;

      if (!isActive()) {
        tgt = 0;
        if (sibling) {
          sibling.style.transform = "";
          sibling.style.overflowAnchor = "";
        }
        return;
      }

      const rect = wrapperRef.current.getBoundingClientRect();
      const sHeight = stickyHeight ? stickyHeight() : window.innerHeight;
      const scrollable = wrapperRef.current.offsetHeight - sHeight;
      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const cardW = (window.innerWidth - lPad()) / visible;
      tgt = progress * (CARDS.length - visible) * cardW;

      if (sibling) {
        const y = Math.max(0, Math.min(scrollable, -rect.top));
        const dy = y - scrollable;
        sibling.style.transform = `translateY(${dy}px)`;
        sibling.style.overflowAnchor = "none";
      }
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (wrapperRef.current && translateNextSibling) {
        const sibling = wrapperRef.current.nextElementSibling as HTMLElement | null;
        if (sibling) {
          sibling.style.transform = "";
          sibling.style.overflowAnchor = "";
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    headline: "WE IDENTIFY OPPORTUNITIES. THEN WE BUILD VALUE.",
    body: "Every investment begins with understanding the business, the market, and the long-term opportunity. We partner with founders and management teams to strengthen fundamentals, accelerate growth, and create sustainable enterprise value - not simply provide capital.",
  },
  {
    Icon: IconNestedDiamonds,
    headline: "ONE PLATFORM. MULTIPLE CAPABILITIES.",
    body: "Capital alone does not build great businesses. Our multidisciplinary team combines investment expertise, strategic insight, financial structuring, industry relationships, and execution capabilities to support businesses through every stage of their growth journey.",
  },
  {
    Icon: IconConcentricCrosshair,
    headline: "LONG-TERM PARTNERS. NOT SHORT-TERM INVESTORS.",
    body: "We invest with conviction and patience. Our objective is not simply to participate in transactions, but to build enduring businesses through strategic guidance, disciplined capital allocation, and long-term collaboration with entrepreneurs.",
  },
  {
    Icon: IconNestedTriangles,
    headline: "WE CREATE VALUE BEYOND CAPITAL.",
    body: "Our involvement extends beyond investment. We help businesses unlock growth opportunities, optimize capital structures, strengthen governance, build strategic partnerships, and prepare for the next phase of expansion.",
  },
  {
    Icon: IconRadiantStar,
    headline: "WE BUILD PLATFORMS FOR THE FUTURE.",
    body: "We invest behind structural growth themes, emerging technologies, and transformative business models. Whether through strategic investments, joint ventures, or platform creation, our focus is on building businesses positioned to lead tomorrow's economy.",
  },
] as const;

const L_PAD = 80;     // px — Figma pl-[80px]
const VISIBLE = 3.25; // cards visible at once on desktop

const MOBILE_VISIBLE     = 1.25; // cards visible at rest on mobile — card1 100%, card2 25% peek
const MOBILE_L_PAD_BASE  = 48;   // px — matches Tailwind `pl-12` (<640px)
const MOBILE_L_PAD_SM    = 64;   // px — matches Tailwind `sm:pl-16` (>=640px)
const SM_BREAKPOINT      = 640;
const LG_BREAKPOINT      = 1024;
const MOBILE_WRAPPER_VH  = 300;  // scroll-distance runway for the mobile pin

// ─── Component ────────────────────────────────────────────────────────────────

export default function ComplexDecision() {
  const { ref: desktopRef, inView: desktopInView } = useInView();
  const { ref: mobileRef,  inView: mobileInView  } = useInView();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);
  const mobileWrapperRef = useRef<HTMLDivElement>(null);
  const mobileStripRef   = useRef<HTMLDivElement>(null);

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

  // ── Scroll-driven horizontal pan — desktop and mobile share the same mechanism ──
  useScrollPin({
    wrapperRef, stripRef,
    visible: VISIBLE,
    isActive: () => window.innerWidth >= LG_BREAKPOINT,
    lPad: () => L_PAD,
  });

  useScrollPin({
    wrapperRef: mobileWrapperRef, stripRef: mobileStripRef,
    visible: MOBILE_VISIBLE,
    isActive: () => window.innerWidth < LG_BREAKPOINT,
    lPad: () => (window.innerWidth >= SM_BREAKPOINT ? MOBILE_L_PAD_SM : MOBILE_L_PAD_BASE),
    stickyHeight: () => window.innerHeight * 0.5,
    translateNextSibling: true,
  });

  const mobileCardWidth = `calc((100vw - var(--cd-m-lpad, ${MOBILE_L_PAD_BASE}px)) / ${MOBILE_VISIBLE})`;

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
          MOBILE / TABLET (<1024px): sticky pinned section + horizontal scroll strip
         ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={mobileWrapperRef}
        className="lg:hidden relative bg-[#10296e]"
        style={{
          height: `${MOBILE_WRAPPER_VH}vh`,
          overflowAnchor: "none",
        }}
      >
        <section
          ref={mobileRef as React.RefObject<HTMLElement>}
          className="sticky top-0 h-[50vh] overflow-hidden bg-[#10296e] w-full flex flex-col justify-start gap-4 sm:gap-6 pl-12 sm:pl-16 pt-6 sm:pt-10 pb-6 sm:pb-10 [--cd-m-lpad:48px] sm:[--cd-m-lpad:64px]"
        >
          {/* Header — top-anchored */}
          <div className="flex flex-col gap-2 sm:gap-4 shrink-0 pr-8 sm:pr-12">
            <div {...mobileSlide(0, "flex items-center gap-2.5")}>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-[1px] shrink-0" />
              <span className="font-ibm-mono text-white text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                The SkyBridge Difference
              </span>
            </div>
            <div {...mobileSlide(0.08)}>
              <h2
                className="font-oswald text-white font-normal capitalize"
                style={{ fontSize: "clamp(24px, 5.5vw, 40px)", lineHeight: 1.1 }}
              >
                Built for Complex Decisions.
              </h2>
            </div>
          </div>

          {/* Content strip — icon row + text row scroll together, driven by useScrollPin */}
          <div
            ref={mobileStripRef}
            className="flex flex-col shrink-0"
            style={{ gap: "clamp(12px, 3vw, 24px)", willChange: "transform" }}
          >
            {/* Icon row — each slot matches one card width */}
            <div className="flex items-center shrink-0">
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  className="flex items-center shrink-0"
                  style={{ width: mobileCardWidth }}
                >
                  <div {...mobileSlit(0.15 + i * 0.07, "shrink-0")}>
                    <card.Icon className="w-11 h-11 sm:w-16 sm:h-16" />
                  </div>
                  {i < CARDS.length - 1 && (
                    <div className="flex-1 h-px bg-white/20 ml-4 sm:ml-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Text row */}
            <div className="flex items-start shrink-0">
              {CARDS.map((card, i) => {
                const sd = mobileSlide(0.2 + i * 0.07, "flex flex-col gap-1.5 sm:gap-3 shrink-0");
                return (
                  <div
                    key={i}
                    className={sd.className}
                    style={{ ...sd.style, width: mobileCardWidth, paddingRight: "clamp(16px, 4vw, 24px)" }}
                  >
                    <h3 className="font-tasa-orbiter text-white uppercase whitespace-pre-line leading-[1.35] text-[15px] sm:text-[18px]">
                      {card.headline}
                    </h3>
                    <p className="font-tasa-orbiter text-[#dedede] leading-[1.5] text-[12px] sm:text-[13px]">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
