"use client";

import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutOverview from "@/components/about/AboutOverview";
import AboutFounder from "@/components/about/AboutFounder";
import OurPhilosophy from "@/components/about/OurPhilosophy";
import CreateValue from "@/components/about/CreateValue";
import OurTeams from "@/components/about/OurTeams";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutOverview />
      <AboutFounder />
      <OurPhilosophy />
      <CreateValue />
      <OurTeams /> 
    </>
  );
}
