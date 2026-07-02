"use client";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <section
      className="w-full bg-[#10296e]
        px-4 py-12
        sm:px-10 sm:py-16
        lg:px-[80px] lg:py-[100px]"
    >
      {/* Quote block */}
      <div className="flex items-start gap-3 lg:gap-[12px] mb-8">

        {/* Opening quotation mark — Playfair Display Bold */}
        <span
          className="font-accent font-bold text-white shrink-0 select-none
                     text-[70px] leading-[0.65]
                     sm:text-[100px]
                     lg:text-[200px] lg:leading-[0.605]"
        >
          &ldquo;
        </span>
    
        {/* Quote body — TASA Orbiter SemiBold with Playfair italic inlines */}
        <p
          className="font-tasa-orbiter font-semibold text-white
                     text-[20px] leading-[1.35]
                     sm:text-[28px]
                     md:text-[40px]
                     lg:text-[70px] lg:leading-[88px]"
        >
          Every business faces defining moments. Our role is to bring{" "}
          <em className="font-playfair font-semibold italic">clarity</em>
          {", conviction, and the right strategic partnership when those moments "}
          <em className="font-playfair ">matter most.</em>
        </p>
      </div>

      {/* Speaker attribution */}
      <div className="flex items-center gap-6 lg:gap-[32px] lg:pl-[182px]">

        {/* Portrait */}
        <div
          className="relative shrink-0 overflow-hidden rounded-xl
                     w-20 h-20
                     sm:w-28 sm:h-28
                     lg:w-44 lg:h-44"
        >
          <Image
            src="/aboutfounder/devang-master.jpg"
            alt="Devang Master – Founder & Leader, Sky Bridge Group"
            fill
            className="object-cover"
          />
        </div>

        {/* Name + role */}
        <div className="flex flex-col gap-1.5">
          <p
            className="font-oswald font-bold text-white
                       text-[18px] leading-[1.4]
                       lg:text-[30px] lg:leading-[42px]"
          >
            Devang Master
          </p>
          <p
            className="font-tasa-orbiter font-medium text-white tracking-[0.53px]
                       text-[13px] leading-[1.45]
                       lg:text-[21px] lg:leading-[30px]"
          >
            Founder &amp; Leader, Sky Bridge Group
          </p>
        </div>

      </div>
    </section>
  );
}
