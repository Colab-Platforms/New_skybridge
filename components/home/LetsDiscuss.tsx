"use client";

import React, { useState } from "react";
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
    <section id="initiate-discuss" className="bg-[#0b1d47] py-24 px-6 md:px-12 lg:px-24 w-full flex flex-col items-center border-t border-white/5">
      <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">

        {/* Left Column: Heading and Subtext */}
        {/* <div> */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-6 relative left-16 z-99 pr-5">
            <div className="lg:-mr-30">
              <div className="flex flex-col gap-4">
                <span className="text-[13px] text-white/80 font-bold tracking-[0.25em] uppercase">
                  Start a Confidential Conversation
                </span>
                <h2 className="text-white font-oswald text-4xl md:text-5xl lg:text-[62px] font-bold leading-[1.08] tracking-tight">
                  Let's Discuss What's <br /> Next
                </h2>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-md">
                Whether you're raising capital, evaluating strategic opportunities, exploring restructuring options, or seeking advisory support, our team is ready to understand your objectives.
              </p>


            </div>

          </div>

          {/* Middle Column: Vertical Image of Mumbai Marine Drive at Sunset */}
          <div className="lg:col-span-3 min-h-[450px] lg:min-h-full relative  z-10 overflow-hidden shadow-2xl bg-[#091636]">
            <Image
              src="/mumbai_sunset.png"
              alt="Mumbai Marine Drive at Sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 350px"
              className="object-cover"
              priority
            />
          </div>
        {/* </div> */}

        {/* Right Column: Confidential Form Card */}
        <div className="lg:col-span-5 bg-[#132a68] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-2xl justify-between">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

            {/* Input Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1 border-b border-white/20 focus-within:border-white transition-colors py-1">
                <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-white text-sm outline-none w-full py-0.5"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1 border-b border-white/20 focus-within:border-white transition-colors py-1">
                <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-white text-sm outline-none w-full py-0.5"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1 border-b border-white/20 focus-within:border-white transition-colors py-1">
                <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-white text-sm outline-none w-full py-0.5"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1 border-b border-white/20 focus-within:border-white transition-colors py-1">
                <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-white text-sm outline-none w-full py-0.5"
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
                className="appearance-none w-full bg-transparent border border-white/35 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-white transition-colors cursor-pointer"
              >
                <option value="" disabled className="bg-[#132a68] text-white/50">
                  Requirement Type
                </option>
                <option value="Capital Markets" className="bg-[#132a68] text-white">
                  Capital Markets
                </option>
                <option value="Strategic Advisory" className="bg-[#132a68] text-white">
                  Strategic Advisory
                </option>
                <option value="Private Wealth" className="bg-[#132a68] text-white">
                  Private Wealth Management
                </option>
                <option value="Other" className="bg-[#132a68] text-white">
                  Other Solutions
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/80">
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
            <div className="flex flex-col gap-1 border-b border-white/20 focus-within:border-white transition-colors py-1 mt-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Briefly share your company profile and primary objective..."
                rows={1}
                className="bg-transparent text-white text-sm placeholder-white/50 outline-none w-full resize-none py-1"
              />
              <label className="text-[10px] font-bold text-white/50 tracking-wider uppercase mt-1">
                Message (Optional)
              </label>
            </div>

            {/* File Upload Area */}
            <label className="relative border border-dashed border-white/20 rounded-2xl bg-white/5 py-5 px-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <input
                type="file"
                accept=".pdf,.ppt,.pptx"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white leading-none">
                {fileName ? fileName : "Upload Pitch Deck or Profile"}
              </span>
              <span className="text-[10px] text-white/50">
                PDF or PPT (Max 10MB)
              </span>
            </label>

            {/* Initiate Button */}
            <button
              type="submit"
              className="w-full bg-white text-[#0d2147] hover:bg-slate-200 transition-colors py-4 rounded-full font-bold text-center text-sm tracking-wider uppercase shadow-md cursor-pointer mt-2"
            >
              Initiate a Conversation
            </button>
          </form>

          {/* Encryption & Confidentiality Footer */}
          <div className="text-[9px] text-white/40 tracking-wider flex items-center justify-center gap-1.5 select-none pt-2 border-t border-white/5">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-white/40"
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
