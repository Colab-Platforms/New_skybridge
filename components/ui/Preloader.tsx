"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Step 1: Start the zoom animation after a short delay so the user sees the logo text first
    const zoomTimeout = setTimeout(() => {
      setIsZoomed(true);
    }, 1200);

    // Step 2: Start the container fade-out when the zoom is almost complete
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 3000);

    // Step 3: Completely unmount and clean up scroll locks
    const completeTimeout = setTimeout(() => {
      setIsCompleted(true);
    }, 3600);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(zoomTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, []);

  // Prevent scroll while preloader is active
  useEffect(() => {
    if (!isCompleted) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isCompleted]);

  if (isCompleted) return null;

  // Responsive font size and zoom origin coordinates centered around 'D' in 'SKYBRIDGE'
  // Canvas coordinate space is 1920x1080 (center is 960, 540).
  const fontSize = isMobile ? 100 : 180;
  const zoomOriginX = isMobile ? 1048 : 1118;
  const zoomOriginY = 540;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0c0a08] transition-opacity duration-[600ms] ease-out select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="preloader-mask">
            {/* Background: black (transparent in mask, so video is hidden) */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            
            {/* Text: white (opaque in mask, so video is revealed inside text) */}
            <g
              style={{
                transformOrigin: `${zoomOriginX}px ${zoomOriginY}px`,
                transform: isZoomed ? "scale(110)" : "scale(1)",
                transition: "transform 2.2s cubic-bezier(0.76, 0, 0.24, 1)",
              }}
            >
              <text
                x="960"
                y="540"
                textAnchor="middle"
                dominantBaseline="central"
                fill="white"
                className="font-oswald font-bold uppercase tracking-[0.1em]"
                fontSize={fontSize}
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                SKYBRIDGE
              </text>
            </g>
          </mask>
        </defs>

        {/* The video is embedded inside foreignObject and masked using the SVG text mask */}
        <foreignObject x="0" y="0" width="100%" height="100%" mask="url(#preloader-mask)">
          <div className="w-full h-full relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src="/Skybridgenewvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </foreignObject>

        {/* Outline white border around the letters to make them stand out premium */}
        <g
          style={{
            transformOrigin: `${zoomOriginX}px ${zoomOriginY}px`,
            transform: isZoomed ? "scale(110)" : "scale(1)",
            transition: "transform 2.2s cubic-bezier(0.76, 0, 0.24, 1)",
            pointerEvents: "none",
          }}
        >
          <text
            x="960"
            y="540"
            textAnchor="middle"
            dominantBaseline="central"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            className="font-oswald font-bold uppercase tracking-[0.1em]"
            fontSize={fontSize}
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            SKYBRIDGE
          </text>
        </g>
      </svg>
    </div>
  );
}
