"use client";
import Image from "next/image";

const features = [
  {
    icon: "/createvalue/icon-strategic-guidance.svg",
    title: "Strategic Guidance",
    body: "Supporting leadership teams in evaluating opportunities, managing complexity, and making informed decisions.",
  },
  {
    icon: "/createvalue/icon-capital-solutions.svg",
    title: "Capital Solutions",
    body: "Structuring financing and capital strategies aligned with business objectives and growth plans.",
  },
  {
    icon: "/createvalue/icon-growth-acceleration.svg",
    title: "Growth Acceleration",
    body: "Identifying pathways for expansion, partnerships, and long-term value creation.",
  },
  {
    icon: "/createvalue/icon-industry-networks.svg",
    title: "Industry & Investor Networks",
    body: "Connecting businesses with investors, institutions, and strategic relationships that unlock opportunity.",
  },
];

const mobileBorders = [
  "border-b border-b-white/10 sm:border-r sm:border-r-white/10",
  "border-b border-b-white/10",
  "sm:border-r sm:border-r-white/10",
  "",
];

export default function CreateValue() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 sm:px-10 sm:py-16 lg:px-[80px] lg:py-[100px]">

      {/* Background image + colour overlays */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0">
          <Image
            src="/createvalue/bg-meeting.jpg"
            alt=""
            fill
            className="object-fill"
            priority
            
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),linear-gradient(90deg,rgba(39,95,249,0.2) 0%,rgba(39,95,249,0.2) 100%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-3 lg:gap-6 mb-8 lg:mb-[32px] lg:max-w-[786px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[10px] h-[10px] rounded-[1px] bg-white shrink-0" />
          <span
            className="font-ibm-mono font-semibold text-white uppercase
                       text-[14px] leading-[1.25]
                       sm:text-[16px]
                       lg:text-[24px] lg:leading-[30px]"
          >
            How We Create Value
          </span>
        </div>
        <h2
          className="font-oswald font-normal text-white capitalize
                     text-[28px] leading-[1.15]
                     sm:text-[38px]
                     md:text-[52px]
                     lg:text-[80px] lg:leading-[86px]"
        >
          Turning Opportunity into<br className="hidden sm:block" /> Long-term value
        </h2>
      </div>

      {/* Glassmorphism feature bar */}
      <div
        className="relative z-10 border-t border-white/10 backdrop-blur-[15px]"
        style={{
          background:
            "linear-gradient(90deg,rgba(15,23,42,0.36) 0%,rgba(255,255,255,0.12) 100%)",
        }}
      >
        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col gap-[14px] p-[50px] justify-center ${
                i < 3 ? "border-r border-r-white/10" : ""
              }`}
            >
              <div className="relative w-[45px] h-[45px] shrink-0">
                <Image src={f.icon} alt="" fill className="object-contain" />
              </div>
              <div className="pt-[15px]">
                <p className="font-oswald font-bold text-white text-[25px] leading-[35px]">
                  {f.title}
                </p>
              </div>
              <p className="font-tasa-orbiter font-normal text-white/70 text-[22px] leading-[1.6]">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: 2-column → single-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col gap-3 p-6 sm:p-8 ${mobileBorders[i]}`}
            >
              <div className="relative w-9 h-9 shrink-0">
                <Image src={f.icon} alt="" fill className="object-contain" />
              </div>
              <p className="font-oswald font-bold text-white text-[17px] sm:text-[19px] leading-[1.4] pt-1">
                {f.title}
              </p>
              <p className="font-tasa-orbiter font-normal text-white/70 text-[13px] sm:text-[15px] leading-[1.6]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
