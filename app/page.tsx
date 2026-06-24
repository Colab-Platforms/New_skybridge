"use client";

import React from "react";
import HeroSection from "@/components/home/Herosection";
import AtGlance from "@/components/home/AtGlance";
import OurServices from "@/components/home/OurServices";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AtGlance />
      <OurServices />
    </>
  );
}
