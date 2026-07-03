"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/skybridge-logo.png";

export default function Footer() {
  const handleInitiateClick = () => {
    // Scroll to LetsDiscuss form section at the bottom of the page if it exists
    const discussSection = document.getElementById("initiate-discuss");
    if (discussSection) {
      discussSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#070708] text-white pt-16 sm:pt-20 md:pt-[100px] pb-12 px-6 md:px-12 lg:px-[80px] border-t border-white/5 w-full flex flex-col items-center">
      <div className=" w-full flex flex-col">

        {/* Top Section: Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-10">

          {/* Column 1: Logo & Tagline (5 Columns wide on desktop) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6 items-start">
            <Link href="/" className="flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-102">
          <Image
            src={LogoImage}
            alt="Sky Bridge Logo"
            className="object-contain h-auto w-auto"
            width={180}
            height={44}
            priority
          />
        </Link>
            <div className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[130%] md:leading-[120%] font-tasa-orbiter text-slate-400 text-left">Partner with us to turn strategic ambition into<br/>measurable business results.</div>
            <button
              onClick={handleInitiateClick}
              className="w-full sm:w-auto text-center bg-[#132c66] hover:bg-[#10296e] transition-colors duration-300 text-white font-bold text-[11px] tracking-widest uppercase px-6 py-3.5 rounded-lg shadow-md cursor-pointer mt-2"
            >
              Initiate a Conversation
            </button>
          </div>

          {/* Column 2: Main Pages (3 Columns wide on desktop) */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6">
            <span className="text-white text-xs sm:text-sm md:text-[20px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              Main Pages
            </span>
            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-3.5 relative text-base sm:text-lg md:text-[23.95px] leading-[1.8] md:leading-[38.92px] font-tasa-orbiter font-light text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors duration-200">
                  Our Solutions
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 3: Contact Info & Address (4 Columns wide on desktop) */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col gap-6">
            <span className="text-white text-xs sm:text-sm md:text-[20px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              Contact
            </span>
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 font-light text-slate-400 relative text-base sm:text-lg md:text-[23.95px] leading-[1.8] md:leading-[38.92px] font-tasa-orbiter">
              <Link
                href="mailto:partnership@skybridgegroup.in"
                className="hover:text-white transition-colors duration-200 break-all"
              >
                partnership@skybridgegroup.in
              </Link>
              <Link
                href="tel:+919136641303"
                className="hover:text-white transition-colors duration-200"
              >
                +91 91366 41303
              </Link>
              <div className="w-full relative text-base sm:text-lg md:text-[23.95px] leading-[1.8] md:leading-[38.92px] font-tasa-orbiter text-darkgray text-left inline-block">30, Fl. 2 , Nawab Bldg, D.N Rd Hutatma Chowk Fort, Mumbai G.P.O., Mumbai, Mumbai, Maharashtra, India, 400001</div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <hr className="border-white/10 my-12" />

        {/* Bottom Section: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <span className="text-[11px] md:text-xs text-slate-500 font-light tracking-wide text-left">
            Copyright © 2024 SkyBridge Group. All rights reserved.
          </span>

          {/* Social Icons circles */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <Link
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 text-slate-400 hover:text-white hover:border-white transition-all duration-300 flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 text-slate-400 hover:text-white hover:border-white transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>

            {/* Twitter / X */}
            <Link
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 text-slate-400 hover:text-white hover:border-white transition-all duration-300 flex items-center justify-center"
              aria-label="Twitter / X"
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
