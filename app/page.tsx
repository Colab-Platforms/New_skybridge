"use client";

import React from "react";
import HeroSection from "@/components/home/Herosection";
import AtGlance from "@/components/home/AtGlance";
import OurServices from "@/components/home/OurServices";
import StrategicFocus from "@/components/home/StrategicFocus";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AtGlance />
      <OurServices />
      <StrategicFocus />
    </>
  );
}
