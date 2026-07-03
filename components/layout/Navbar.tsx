"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImage from "@/public/skybridge-logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isSolutionsActive = pathname === "/service";
  const isContactActive = pathname === "/contact";

  const getLinkClasses = (isActive: boolean) => {
    return isActive
      ? "group relative py-2 text-[#10296e] font-bold text-base transition-colors duration-250"
      : "group relative py-2 text-white/95 font-medium text-base transition-colors duration-250 hover:text-white ";
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-[linear-gradient(180deg,_#10296E_-62.4%,_rgba(5,15,42,0)_100%)] py-4">
      <div className="flex flex-row justify-between items-center px-2 lg:px-12 max-w-[1920px] w-full  mx-auto gap-6">
        {/* Logo Section */}
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

        {/* Center Menu List */}
        <nav className="hidden md:block">
          <ul className="flex flex-row items-center list-none m-0 p-0 gap-10">
            <li>
              <Link href="/" className={getLinkClasses(isHomeActive)}>
                <span>Home</span>
                {/* <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-250 ${isHomeActive ? "w-full bg-[#275ff9]" : "w-0 bg-[#0084ff] group-hover:w-full"}`}></span> */}
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClasses(isAboutActive)}>
                <span className="flex items-center gap-1.5">
                  About Us <span className="inline-flex text-sm transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                </span>
                {/* <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-250 ${isAboutActive ? "w-full bg-[#275ff9]" : "w-0 bg-[#0084ff] group-hover:w-full"}`}></span> */}
              </Link>
            </li>
            <li>
              <Link href="/service" className={getLinkClasses(isSolutionsActive)}>
                <span className="flex items-center gap-1.5">
                  Our Solutions <span className="inline-flex text-sm transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                </span>
                {/* <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-250 ${isSolutionsActive ? "w-full bg-[#275ff9]" : "w-0 bg-[#0084ff] group-hover:w-full"}`}></span> */}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Action Section */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/contact" className={getLinkClasses(isContactActive)}>
            <span>Contact</span>
            <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-250 ${isContactActive ? "w-full bg-[#275ff9]" : "w-0 bg-[#0084ff] group-hover:w-full"}`}></span>
          </Link>
          <Link
            href="/contact"
            className="bg-[#0d2147] text-white text-sm font-semibold tracking-wider px-7 py-3.5 rounded-lg border border-white/10 cursor-pointer transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) shadow-[0_4px_12px_rgba(13,33,71,0.2)] hover:bg-[#122d60] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(18,45,96,0.4),0_0_0_2px_rgba(0,132,255,0.3)] hover:border-white/25 active:translate-y-0 active:shadow-[0_2px_8px_rgba(13,33,71,0.2)] whitespace-nowrap"
          >
            INITIATE A CONVERSATION
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="block md:hidden bg-none border-none cursor-pointer p-2 relative z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer (Only visible when mobile menu open) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-slate-800/95 backdrop-blur-lg border-t border-slate-700 w-full absolute top-full left-0 z-40 p-6 gap-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            <li>
              <Link
                href="/"
                className={`text-lg block py-2 border-b border-slate-700/50 ${isHomeActive ? "text-[#275ff9] font-bold" : "text-white font-medium hover:text-sky-400"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-lg block py-2 border-b border-slate-700/50 ${isAboutActive ? "text-[#275ff9] font-bold" : "text-white font-medium hover:text-sky-400"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us ↓
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className={`text-lg block py-2 border-b border-slate-700/50 ${isSolutionsActive ? "text-[#275ff9] font-bold" : "text-white font-medium hover:text-sky-400"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Solutions↓
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-lg block py-2 border-b border-slate-700/50 ${isContactActive ? "text-[#275ff9] font-bold" : "text-white font-medium hover:text-sky-400"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/initiate-conversation"
            className="w-full text-center bg-[#0d2147] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#122d60] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            INITIATE A CONVERSATION
          </Link>
        </div>
      )}
    </header>
  );
}
