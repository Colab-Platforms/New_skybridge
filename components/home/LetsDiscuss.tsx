"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function LetsDiscuss() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    emailAddress: "",
    phoneNumber: "",
    requirementType: "",
    message: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Conversation initiated with ${formData.fullName || "us"}.`);
    // Clear form
    setFormData({
      fullName: "",
      company: "",
      emailAddress: "",
      phoneNumber: "",
      requirementType: "",
      message: "",
    });
    setFileName(null);
  };

  return (
    <section id="initiate-discuss" ref={sectionRef} className="bg-white py-24 px-6 md:px-12 lg:px-24 w-full flex flex-col items-center border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">

        {/* Left Column: Heading & Subtext — reveals left-to-right via max-width */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-6 relative  lg:left-16 z-10 pr-5">
            {/* Clipping wrapper: max-width transitions from 0 → 100% */}
            <div
              className="lg:-mr-30 overflow-hidden"
              style={{
                maxWidth: isVisible ? "130%" : "0%",
                transition: isVisible
                  ? "max-width 1s cubic-bezier(0.22, 1, 0.36, 1) 0s"
                  : "none",
              }}
            >
              {/* Inner div prevents text from wrapping until container is wide enough */}
              <div style={{ minWidth: "min(340px, 90vw)" }}>
                <div className="flex flex-col gap-4">
                  <span className=" text-[#10296e] font-bold text-[16.15px] tracking-[3.23px] leading-[21.53px] font-tasa-orbiter  uppercase">
                    Start a Confidential Conversation
                  </span>
                  <h2 className="text-[#10296e] font-oswald text-4xl md:text-5xl lg:text-[62px] font-bold leading-[1.08] tracking-tight">
                    Let&apos;s Discuss What&apos;s <br /> Next
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-7 font-tasa-orbiter md:text-base  font-light max-w-md mt-4">
                  Whether you&apos;re raising capital, evaluating strategic opportunities,
                  exploring restructuring options, or seeking advisory support, our team is
                  ready to understand your objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column: Image — scales up from bottom */}
          <div
            className="lg:col-span-3 min-h-[450px] lg:min-h-full relative z-10 shadow-2xl bg-[#091636]"
            style={{
              overflow: "hidden",
              transform: isVisible ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "bottom center",
              transition: isVisible
                ? "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.08s"
                : "none",
            }}
          >
            <Image
              src="/mumbai_sunset.png"
              alt="Mumbai Marine Drive at Sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 350px"
              className="object-cover"
              style={{
                transform: isVisible ? "scaleY(1)" : "scaleY(4)",
                transformOrigin: "bottom center",
                transition: isVisible
                  ? "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.08s"
                  : "none",
              }}
              priority
            />
          </div>
        {/* </div> */}

        {/* Right Column: Confidential Form Card */}
        {/* Right Column: Form card — scales up from bottom with slight delay */}
        <div
          className="lg:col-span-5 bg-white border border-[#0b1d47]/20 rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-2xl justify-between"
          style={{
            transform: isVisible ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "bottom center",
            transition: isVisible
              ? "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s"
              : "none",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

            {/* Input Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1 border-b border-slate-300 focus-within:border-[#0b1d47] transition-colors py-1">
                <label className="text-[10px] font-bold text-[#0b1d47]/60 tracking-wider uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-[#0b1d47] text-sm outline-none w-full py-0.5"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1 border-b border-slate-300 focus-within:border-[#0b1d47] transition-colors py-1">
                <label className="text-[10px] font-bold text-[#0b1d47]/60 tracking-wider uppercase">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-[#0b1d47] text-sm outline-none w-full py-0.5"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1 border-b border-slate-300 focus-within:border-[#0b1d47] transition-colors py-1">
                <label className="text-[10px] font-bold text-[#0b1d47]/60 tracking-wider uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-[#0b1d47] text-sm outline-none w-full py-0.5"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1 border-b border-slate-300 focus-within:border-[#0b1d47] transition-colors py-1">
                <label className="text-[10px] font-bold text-[#0b1d47]/60 tracking-wider uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-[#0b1d47] text-sm outline-none w-full py-0.5"
                />
              </div>
            </div>

            {/* Requirement Type Dropdown */}
            <div className="relative w-full mt-2">
              <select
                name="requirementType"
                value={formData.requirementType}
                onChange={handleInputChange}
                required
                className="appearance-none w-full bg-transparent border border-slate-300 rounded-md px-4 py-3 text-[#0b1d47] text-sm outline-none focus:border-[#0b1d47] transition-colors cursor-pointer"
              >
                <option value="" disabled className="bg-white text-slate-400">
                  Requirement Type
                </option>
                <option value="Capital Markets" className="bg-white text-[#0b1d47]">
                  Capital Markets
                </option>
                <option value="Strategic Advisory" className="bg-white text-[#0b1d47]">
                  Strategic Advisory
                </option>
                <option value="Private Wealth" className="bg-white text-[#0b1d47]">
                  Private Wealth Management
                </option>
                <option value="Other" className="bg-white text-[#0b1d47]">
                  Other Solutions
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#0b1d47]/70">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1 border-b border-slate-300 focus-within:border-[#0b1d47] transition-colors py-1 mt-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Briefly share your company profile and primary objective..."
                rows={1}
                className="bg-transparent text-[#0b1d47] text-sm placeholder-slate-400 outline-none w-full resize-none py-1"
              />
              <label className="text-[10px] font-bold text-[#0b1d47]/60 tracking-wider uppercase mt-1">
                Message (Optional)
              </label>
            </div>

            {/* File Upload Area */}
            <label className="relative border border-dashed border-slate-300 rounded-2xl bg-slate-50 py-5 px-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-slate-100 transition-colors text-center">
              <input
                type="file"
                accept=".pdf,.ppt,.pptx"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-8 h-8 rounded-full bg-[#0b1d47]/10 flex items-center justify-center mb-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#0b1d47]"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#0b1d47] leading-none">
                {fileName ? fileName : "Upload Pitch Deck or Profile"}
              </span>
              <span className="text-[10px] text-slate-400">
                PDF or PPT (Max 10MB)
              </span>
            </label>

            {/* Initiate Button */}
            <button
              type="submit"
              className="w-full bg-[#0b1d47] text-white hover:bg-[#132a68] transition-colors py-4 rounded-full font-bold text-center text-sm tracking-wider uppercase shadow-md cursor-pointer mt-2"
            >
              Initiate a Conversation
            </button>
          </form>

          {/* Encryption & Confidentiality Footer */}
          <div className="text-[9px] text-slate-400 tracking-wider flex items-center justify-center gap-1.5 select-none pt-2 border-t border-slate-100">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-slate-400"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>END-TO-END ENCRYPTION & MANDATORY CONFIDENTIALITY AGREEMENT APPLIED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
