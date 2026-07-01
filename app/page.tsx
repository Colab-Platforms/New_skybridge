"use client";

import React from "react";
import HeroSection from "@/components/home/Herosection";
import AtGlance from "@/components/home/AtGlance";
import OurServices from "@/components/home/OurServices";
import StrategicFocus from "@/components/home/StrategicFocus";
import ComplexDecision from "@/components/home/ComplexDecision";
import MarketPerspectives from "@/components/home/MarketPerspectives";
import Testimonials from "@/components/home/Testimonials";
import LetsDiscuss from "@/components/home/LetsDiscuss";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AtGlance />
      <OurServices />
      <StrategicFocus />
      <ComplexDecision />
      {/* <MarketPerspectives /> */}
      {/* <Testimonials /> */}
      <LetsDiscuss />
    </>
  );
}
