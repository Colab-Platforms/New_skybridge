"use client";

import React from "react";
import Image from "next/image";

interface PerspectiveArticle {
  id: number;
  type: string;
  date: string;
  category: string;
  title: string;
  image: string;
}

const ARTICLES: PerspectiveArticle[] = [
  {
    id: 1,
    type: "Newsletter",
    date: "May 2026",
    category: "Private Wealth Management",
    title: "India Investment Strategy - May 2026",
    image: "/tree_insights.png",
  },
  {
    id: 2,
    type: "Newsletter",
    date: "May 2026",
    category: "Equity Asset Management",
    title: "From the CIO's desk - Market Musings - May 2026",
    image: "/hot_air_balloon.png",
  },
  {
    id: 3,
    type: "Newsletter",
    date: "June 2026",
    category: "Private Wealth Management",
    title: "India Investment Strategy - June 2026",
    image: "/skier_insights.png",
  },
];

export default function MarketPerspectives() {
  const primaryArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-slate-100 w-full flex flex-col items-center">
      <div className="max-w-[1400px] w-full flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2.5 h-2.5 bg-[#275ff9] rounded-[1px] shrink-0" />
            <span className="font-ibm-mono text-[#275ff9] text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
              Market Perspectives
            </span>
          </div>
          <h2 className="text-[#0d2147] font-oswald text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight">
            Insights That Shape <br />
            Better Decisions
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4">
          {/* Left Column: Primary (Large) Article */}
          <div className="lg:col-span-7 group cursor-pointer flex flex-col gap-5">
            {/* Image Container */}
            <div className="relative w-full aspect-[1.62/1] overflow-hidden rounded-2xl bg-slate-100 shadow-md">
              <Image
                src={primaryArticle.image}
                alt={primaryArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
              {/* Translucent Newsletter Pill */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white">
                {primaryArticle.type}
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-2.5">
              <div className="text-[13px] text-slate-500 font-semibold tracking-wider uppercase flex items-center gap-2">
                <span>{primaryArticle.date}</span>
                <span className="w-1.5 h-1.5 bg-[#275ff9] rounded-full shrink-0" />
                <span>{primaryArticle.category}</span>
              </div>
              <h3 className="text-[#0d2147] font-oswald text-2xl md:text-3xl lg:text-[38px] font-bold leading-tight transition-colors duration-300 group-hover:text-[#275ff9]">
                {primaryArticle.title}
              </h3>
            </div>

            {/* Learn More Outlined Button */}
            <div className="inline-flex items-center gap-4 border border-[#0d2147] text-[#0d2147] rounded-full pl-6 pr-2 py-2 w-fit font-bold text-sm tracking-wide transition-all duration-300 group-hover:bg-[#0d2147] group-hover:text-white">
              <span>Learn More</span>
              <div className="w-8 h-8 rounded-full bg-[#0d2147] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#0d2147] group-hover:translate-x-0.5 shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Secondary (Smaller) Articles Stack */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-14">
            {secondaryArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative w-full aspect-[1.82/1] overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Translucent Newsletter Pill */}
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white">
                    {article.type}
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-col gap-2">
                  <div className="text-[12px] text-slate-500 font-semibold tracking-wider uppercase flex items-center gap-1.5">
                    <span>{article.date}</span>
                    <span className="w-1.5 h-1.5 bg-[#275ff9] rounded-full shrink-0" />
                    <span>{article.category}</span>
                  </div>
                  <h4 className="text-[#0d2147] font-oswald text-xl lg:text-[23px] font-bold leading-snug transition-colors duration-300 group-hover:text-[#275ff9]">
                    {article.title}
                  </h4>
                </div>

                {/* Learn More Outlined Button */}
                <div className="inline-flex items-center gap-3 border border-[#0d2147] text-[#0d2147] rounded-full pl-5 pr-1.5 py-1.5 w-fit font-bold text-xs tracking-wide transition-all duration-300 group-hover:bg-[#0d2147] group-hover:text-white">
                  <span>Learn More</span>
                  <div className="w-7 h-7 rounded-full bg-[#0d2147] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#0d2147] group-hover:translate-x-0.5 shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
