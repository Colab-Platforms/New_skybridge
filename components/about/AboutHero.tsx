"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen md:h-268 overflow-hidden">
      {/* Background: cityscape at 50% opacity per Figma */}
      <Image
        src="/aboutimages/aboutushero.png"
        alt=""
        fill
        className="object-cover opacity-50"
        priority
      />
      {/* Decorative crescent + golden streak overlay */}
      <Image
        src="/aboutimages/aboutherolayer.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Heading: vertically + horizontally centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="text-white whitespace-nowrap tracking-[-2px]
                     text-[50px] leading-[1.2]
                     md:text-[60px]
                     lg:text-[80px] lg:leading-40
                     xl:text-[100px] xl:leading-50"
        >
          <span className="font-tasa-orbiter font-medium">About</span>
          <span className="font-oswald font-normal"> Us</span>
        </h1>
      </div>
    </section>
  );
}
